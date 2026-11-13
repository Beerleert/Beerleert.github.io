/* BeerSports - the nutrition maths behind the Calculator: what to eat, in numbers AND in food.
 *
 * Nothing in here touches the page or the app's state: every function takes plain data and returns plain
 * data, so tools/test_nutrition.js can run all of it on a bare Node.js. Loaded before app-en.js, which does the
 * drawing. Exposes window.BSNutrition.
 *
 *   1. clean()     - turns what was typed into numbers, and says which ones are missing or out of range
 *   2. calc()      - calories (Mifflin-St Jeor, or Katch-McArdle when the body-fat % is known), the pace of
 *                    losing / gaining with the safety limits, protein at three levels, fat, carbs, fibre, water
 *                    (1.7.0: it also says the fastest pace there is room for, so the pace field can never lie)
 *   3. FOODS       - about thirty cheap staples (per 100 g, with a rough supermarket price)
 *   4. TEMPLATES   - ordinary meals made of them (a main, a carb, a vegetable, a bit of fat), for breakfast,
 *                    lunch / dinner and snacks, each marked vegan / vegetarian / everything
 *   5. plan()      - picks meals for the day and works out how many grams of each food hit the numbers
 *                    (a small bounded least-squares fit, then rounded to eggs, slices and 5 g steps)
 *   6. shopping()  - the same day times seven, as a list for the shop
 *   7. navyBodyFat() / bmiBodyFat() - two ways to estimate the body-fat % for someone who does not know it (1.7.0)
 *
 * Why protein is not simply "weight x 2": the three levels are grams per kg of a REFERENCE weight (your weight, or,
 * when you carry a lot of body fat, a lower one) - so a heavy person is not told to eat 190 g, and the cheapest level
 * (the "Minimum") is the amount that still keeps your muscle. It is a guide, not medical advice.
 */
(function (root) {
  'use strict';

  /* ------------------------------------------------------------------ 1. numbers in */

  function num(x) {
    if (typeof x === 'number') return isFinite(x) ? x : NaN;
    if (typeof x !== 'string') return NaN;
    var s = x.replace(',', '.').trim();
    if (s === '' || !/^[+-]?(\d+\.?\d*|\.\d+)$/.test(s)) return NaN;
    return parseFloat(s);
  }
  function clamp(x, lo, hi) { return x < lo ? lo : (x > hi ? hi : x); }
  function roundTo(x, step) { return Math.round(x / step) * step; }
  function has(o, k) { return Object.prototype.hasOwnProperty.call(o, k); }

  var RANGE = { age: [15, 100], height: [120, 230], weight: [30, 300], bodyFat: [3, 60], goalWeight: [30, 300] };
  var BF_RANGE = { neck: [20, 70], waist: [40, 200], hip: [50, 200] };   // tape measure readings, cm
  var ACTIVITY = { sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725, veryactive: 1.9 };
  var GOALS = ['maintain', 'lose', 'build'];
  var LEVELS = ['min', 'good', 'max'];
  var DIETS = ['all', 'veg', 'vegan'];
  var DEFAULT_RATE = { lose: 0.5, build: 0.25 };
  var RATE_PRESETS = { lose: [0.25, 0.5, 0.75], build: [0.1, 0.25, 0.4] };

  /** grams of protein per kg of reference weight: [Minimum (still works), Good (the sweet spot), Max (hard training)] */
  var PROTEIN_PER_KG = {
    maintain: { min: 1.0, good: 1.2, max: 1.6 },
    lose: { min: 1.2, good: 1.6, max: 2.0 },
    build: { min: 1.2, good: 1.6, max: 2.0 }
  };
  var KCAL_PER_KG = 7700;                       // energy in a kilo of body weight gained or lost: the usual approximation
  var PER_KG_WEEK = KCAL_PER_KG / 7;            // what one kg a week is worth in calories a day: 1,100
  var KCAL_FLOOR = { male: 1500, female: 1200 };// never plan below this without a doctor
  // Losing (1.7.0): the pace may go as far as 1 kg a week - or 1 % of your weight a week when that is less - and the calories
  // never go under the floor. Before 1.7.0 there was one more limit, a quarter of what you burn, and it stopped most people at
  // about 0.5 kg a week: everything above that gave the same calories, so a pace of 1 kg "did nothing". It is only a note now.
  var MAX_LOSS_KG_PER_WEEK = 1.0, MAX_LOSS_SHARE_PER_WEEK = 0.01, BIG_CUT_SHARE = 0.30;
  // Building: a surplus of more than a fifth of what you burn (700 kcal at most) turns into fat, not muscle (was 15 % / 600).
  var MAX_SURPLUS_SHARE = 0.20, MAX_SURPLUS_KCAL = 700;
  var MAX_PROTEIN_KCAL_SHARE = 0.35;
  var MIN_PLAN_PROTEIN_SHARE = 0.135;           // ordinary meals carry at least this much protein: a plan never aims lower

  /**
   * What was typed -> numbers. `input` keys: age, sex ('male' | 'female'), height (cm), weight (kg), bodyFat (%, optional),
   * activity, goal, rate + rateUnit ('kg' | 'g' per week), level, diet, meals (3-5), goalWeight (kg, optional).
   * Returns { ok, problems: [names that are missing or out of range], notes: [optional things that were ignored], v }.
   */
  function clean(input) {
    var inp = input && typeof input === 'object' ? input : {};
    var problems = [], notes = [];
    function required(name) {
      var x = num(inp[name]), r = RANGE[name];
      if (!isFinite(x) || x < r[0] || x > r[1]) { problems.push(name); return NaN; }
      return x;
    }
    function optional(name) {
      var raw = inp[name];
      if (raw === undefined || raw === null || String(raw).trim() === '') return null;
      var x = num(raw), r = RANGE[name];
      if (!isFinite(x) || x < r[0] || x > r[1]) { notes.push(name + '_ignored'); return null; }
      return x;
    }
    var v = {
      age: required('age'), height: required('height'), weight: required('weight'),
      sex: (inp.sex === 'female' || inp.gender === 'female') ? 'female' : 'male',
      bodyFat: optional('bodyFat'), goalWeight: optional('goalWeight'),
      activity: has(ACTIVITY, inp.activity) ? inp.activity : 'moderate',
      goal: GOALS.indexOf(inp.goal) >= 0 ? inp.goal : 'maintain',
      level: LEVELS.indexOf(inp.level) >= 0 ? inp.level : 'good',
      diet: DIETS.indexOf(inp.diet) >= 0 ? inp.diet : 'all',
      meals: (inp.meals === 3 || inp.meals === 4 || inp.meals === 5) ? inp.meals : (+inp.meals === 4 ? 4 : (+inp.meals === 5 ? 5 : 3))
    };
    var rate = num(inp.rate);
    if (isFinite(rate) && String(inp.rateUnit) === 'g') rate = rate / 1000;
    v.rate = isFinite(rate) ? clamp(rate, 0, 1.5) : (DEFAULT_RATE[v.goal] || 0);
    return { ok: problems.length === 0, problems: problems, notes: notes, v: v };
  }

  /* ------------------------------------------------------------------ 2. the numbers */

  /** Mifflin-St Jeor: resting energy from weight, height, age and sex alone. */
  function mifflin(v) {
    var base = 10 * v.weight + 6.25 * v.height - 5 * v.age;
    return v.sex === 'female' ? base - 161 : base + 5;
  }

  /** Resting energy: Katch-McArdle when the body-fat % is known (it counts the lean mass, which is what burns), otherwise Mifflin-St Jeor. */
  function bmr(v) {
    if (v.bodyFat != null) {
      var lbm = v.weight * (1 - v.bodyFat / 100);
      return { kcal: 370 + 21.6 * lbm, method: 'katch' };
    }
    return { kcal: mifflin(v), method: 'mifflin' };
  }

  /**
   * The weight protein is counted on. Your own weight, unless a good part of it is fat: then the weight you would have at
   * a BMI of 25 plus half of what is above it (or, with a known body-fat %, the weight at 22 % / 30 % fat). Smooth, no cliff.
   */
  function refWeight(v) {
    var w = v.weight;
    if (v.bodyFat != null) {
      var lbm = w * (1 - v.bodyFat / 100);
      return Math.min(w, lbm / (1 - (v.sex === 'female' ? 0.30 : 0.22)));
    }
    var h = v.height / 100, ibw = 25 * h * h;
    return w <= ibw ? w : ibw + 0.5 * (w - ibw);
  }

  function bmiOf(kg, cm) { var h = cm / 100; return kg / (h * h); }

  /**
   * Everything the Calculator shows as numbers. Returns { ok:false, problems } or
   * { ok, v, warnings:[codes], bmi, ref, bmr:{kcal,method}, tdee, maintenance, goal, kcal (the target),
   *   bmrAlt (the Mifflin-St Jeor value when a body-fat % was used, else null),
   *   rate:{requested, effective, kcal, limited ('cap' | 'floor' | null), max (the fastest pace there is room for, kg a week),
   *         maxBy (what sets it: 'room' = no room at all, 'floor' = the calorie floor, 'weight' = 1 % of your weight a week,
   *         'kg' = 1 kg a week, 'surplus' = the most that is muscle rather than fat when building, null = maintain)},
   *   protein:{g, perKg, level, perMeal, capped, levels:{min,good,max}},
   *   fat:{g, pct}, carbs:{g, pct}, fiber, water, shares:{p,c,f}, goalWeight }.
   */
  function calc(input) {
    var c = clean(input);
    if (!c.ok) return { ok: false, problems: c.problems, notes: c.notes };
    var v = c.v, warnings = c.notes.slice();
    var bmi = bmiOf(v.weight, v.height);
    var base = bmr(v);
    var tdee = base.kcal * ACTIVITY[v.activity];
    var maintenance = roundTo(tdee, 50);

    // what the goal really is: nobody under 18 or underweight is put into a deficit
    var goal = v.goal;
    if (v.age < 18) {
      warnings.push('young');
      if (goal === 'lose') { goal = 'maintain'; warnings.push('young_nodeficit'); }
    }
    if (goal === 'lose' && bmi < 18.5) { goal = 'maintain'; warnings.push('underweight_nodeficit'); }
    if (v.age >= 65) warnings.push('senior');

    // pace, with the limits
    var requested = goal === 'maintain' ? 0 : v.rate;
    var raw = requested * PER_KG_WEEK;                          // kcal per day the pace asks for
    var change = 0, limited = null, maxKcal = 0, maxBy = null;
    if (goal === 'lose') {
      var floor = KCAL_FLOOR[v.sex];
      var ruleKcal = Math.min(MAX_LOSS_KG_PER_WEEK, MAX_LOSS_SHARE_PER_WEEK * v.weight) * PER_KG_WEEK;
      var room = Math.max(0, tdee - floor);                     // how far down the floor lets the day go
      maxKcal = Math.min(ruleKcal, room);
      maxBy = room <= 0 ? 'room' : room < ruleKcal ? 'floor' : (MAX_LOSS_SHARE_PER_WEEK * v.weight < MAX_LOSS_KG_PER_WEEK ? 'weight' : 'kg');
      var deficit = Math.min(raw, maxKcal);
      if (deficit < raw - 0.5) {
        if (room <= 0) { limited = 'floor'; warnings.push('no_deficit_room'); }
        else if (room < ruleKcal) { limited = 'floor'; warnings.push('pace_floor'); }
        else { limited = 'cap'; warnings.push('pace_cap'); }
      }
      if (deficit > BIG_CUT_SHARE * tdee) warnings.push('pace_big_cut');
      change = -deficit;
    } else if (goal === 'build') {
      maxKcal = Math.min(MAX_SURPLUS_SHARE * tdee, MAX_SURPLUS_KCAL);
      maxBy = 'surplus';
      var surplus = Math.min(raw, maxKcal);
      if (surplus < raw - 0.5) { limited = 'cap'; warnings.push('pace_cap'); }
      change = surplus;
    }
    var target = roundTo(tdee + change, 50);
    if (goal === 'lose' && target > maintenance) target = maintenance;   // (a deficit never ends above what you burn)
    var effective = Math.abs(target - tdee) / (KCAL_PER_KG / 7);
    if (goal === 'maintain' || Math.abs(target - maintenance) < 25) effective = Math.abs(target - maintenance) / (KCAL_PER_KG / 7);

    // protein: three levels on the reference weight
    var ref = refWeight(v), table = PROTEIN_PER_KG[goal];
    var levels = {};
    LEVELS.forEach(function (k) { levels[k] = { perKg: table[k], g: Math.round(table[k] * ref) }; });
    var pg = levels[v.level].g, capped = false;
    var pcap = Math.floor(MAX_PROTEIN_KCAL_SHARE * target / 4);
    if (pg > pcap) { pg = pcap; capped = true; warnings.push('protein_capped'); }
    LEVELS.forEach(function (k) { if (levels[k].g > pcap) levels[k].g = pcap; });

    // fat 27 % of the calories, but not under 0.6 g per kg; carbs are what is left; fibre and water
    var fg = Math.round(Math.max(0.27 * target / 9, 0.6 * ref));
    var cg = Math.round((target - 4 * pg - 9 * fg) / 4);
    if (cg < 100) {                                              // very low calories: fat to its smallest sensible share first
      fg = Math.round(Math.max(0.20 * target / 9, 0.5 * ref));
      cg = Math.max(0, Math.round((target - 4 * pg - 9 * fg) / 4));
    }
    var fiber = Math.round(clamp(14 * target / 1000, 25, 50));
    var activeBonus = { sedentary: 0, light: 0, moderate: 250, active: 500, veryactive: 750 }[v.activity];
    var water = Math.round((35 * v.weight + activeBonus) / 100) * 100;
    var kcalP = 4 * pg, kcalC = 4 * cg, kcalF = 9 * fg, tot = kcalP + kcalC + kcalF || 1;

    // when will it be reached
    var gw = null;
    if (v.goalWeight != null && goal !== 'maintain') {
      var wrongWay = (goal === 'lose' && v.goalWeight >= v.weight) || (goal === 'build' && v.goalWeight <= v.weight);
      if (wrongWay) { warnings.push('goalweight_wrongway'); }
      else {
        var weeks = effective > 0.01 ? Math.ceil(Math.abs(v.goalWeight - v.weight) / effective) : null;
        gw = { kg: v.goalWeight, weeks: weeks, bmi: bmiOf(v.goalWeight, v.height) };
        if (gw.bmi < 18.5) warnings.push('goalweight_low');
      }
    }

    return {
      ok: true, v: v, warnings: warnings, bmi: bmi, ref: ref, bmr: base, tdee: tdee, maintenance: maintenance, goal: goal, kcal: target,
      bmrAlt: v.bodyFat != null ? { kcal: mifflin(v), method: 'mifflin' } : null,
      rate: { requested: requested, effective: effective, kcal: target - maintenance, limited: limited, max: Math.floor(maxKcal / PER_KG_WEEK * 100) / 100, maxBy: maxBy },
      protein: { g: pg, perKg: pg / ref, level: v.level, perMeal: Math.round(pg / v.meals), capped: capped, levels: levels },
      fat: { g: fg, pct: Math.round(100 * kcalF / tot) },
      carbs: { g: cg, pct: Math.round(100 * kcalC / tot) },
      fiber: fiber, water: water,
      shares: { p: Math.round(100 * kcalP / tot), c: Math.round(100 * kcalC / tot), f: Math.round(100 * kcalF / tot) },
      goalWeight: gw
    };
  }

  /**
   * The pace buttons for a goal, shown only as far as there is room: Slow / Steady / Fast while they fit, and "Max" - the fastest
   * pace there is room for - when it falls short of the top one or goes beyond it. [{ name: 'slow'|'steady'|'fast'|'max', rate }]
   */
  function presets(goal, maxRate) {
    var list = RATE_PRESETS[goal] || [], names = ['slow', 'steady', 'fast'], out = [];
    var m = isFinite(maxRate) ? maxRate : Infinity;
    list.forEach(function (r, i) { if (r <= m + 0.0005) out.push({ name: names[i], rate: r }); });
    var top = out.length ? out[out.length - 1].rate : 0;
    if (isFinite(m) && m >= 0.05 && Math.abs(m - top) > 0.019) out.push({ name: 'max', rate: Math.floor(m * 100) / 100 });
    return out;
  }

  /* ------------------------------------------------------------------ body fat, for someone who does not know it */

  function inRange(x, r) { return isFinite(x) && x >= r[0] && x <= r[1]; }

  /**
   * The US Navy tape-measure method (Hodgdon & Beckett), in centimetres: neck, waist (men: at the navel; women: at the narrowest
   * point) and, for women, hips at the widest point, with the height. Usually within about 3-4 percentage points.
   * input: { sex, height, neck, waist, hip }. Returns { ok:true, pct, margin, method:'navy' } or { ok:false, problems:[names] }.
   */
  function navyBodyFat(input) {
    var inp = input && typeof input === 'object' ? input : {};
    var female = inp.sex === 'female' || inp.gender === 'female';
    var height = num(inp.height), neck = num(inp.neck), waist = num(inp.waist), hip = num(inp.hip), problems = [];
    if (!inRange(height, RANGE.height)) problems.push('height');
    if (!inRange(neck, BF_RANGE.neck)) problems.push('neck');
    if (!inRange(waist, BF_RANGE.waist)) problems.push('waist');
    if (female && !inRange(hip, BF_RANGE.hip)) problems.push('hip');
    if (problems.length) return { ok: false, problems: problems };
    var arg = female ? waist + hip - neck : waist - neck;
    if (!(arg > 0)) return { ok: false, problems: ['measure'] };           // a neck wider than the waist: a slip of the tape
    var density = female
      ? 1.29579 - 0.35004 * Math.log10(arg) + 0.22100 * Math.log10(height)
      : 1.0324 - 0.19077 * Math.log10(arg) + 0.15456 * Math.log10(height);
    var pct = 495 / density - 450;
    if (!isFinite(pct) || pct < RANGE.bodyFat[0] || pct > RANGE.bodyFat[1]) return { ok: false, problems: ['result'] };
    return { ok: true, pct: Math.round(pct * 10) / 10, margin: 4, method: 'navy' };
  }

  /**
   * A guess from weight, height, age and sex alone (Deurenberg et al., adults): no tape needed, but it cannot tell muscle from fat,
   * so it reads high for a muscular person and low for a thin one with little muscle - give or take 5 points.
   * input: { sex, age, height, weight }.
   */
  function bmiBodyFat(input) {
    var inp = input && typeof input === 'object' ? input : {};
    var female = inp.sex === 'female' || inp.gender === 'female';
    var age = num(inp.age), height = num(inp.height), weight = num(inp.weight), problems = [];
    if (!inRange(age, RANGE.age)) problems.push('age');
    else if (age < 18) problems.push('under18');                           // the formula is for adults
    if (!inRange(height, RANGE.height)) problems.push('height');
    if (!inRange(weight, RANGE.weight)) problems.push('weight');
    if (problems.length) return { ok: false, problems: problems };
    var bmi = bmiOf(weight, height);
    var pct = 1.20 * bmi + 0.23 * age - 10.8 * (female ? 0 : 1) - 5.4;
    if (!isFinite(pct) || pct < RANGE.bodyFat[0] || pct > RANGE.bodyFat[1]) return { ok: false, problems: ['result'] };
    return { ok: true, pct: Math.round(pct * 10) / 10, margin: 5, method: 'bmi' };
  }

  /* ------------------------------------------------------------------ 3. the foods */

  var DIET_RANK = { vegan: 0, veg: 1, all: 2 };
  // per 100 g (per 100 ml for liquids): kcal, protein, carbs, fat, fibre. eur = a rough price per kg (per litre) in a discount supermarket.
  // diet: the strictest diet that still eats it. piece: [one, many, grams of one]. step: the smallest amount worth weighing.
  function food(name, kcal, p, c, f, fib, eur, diet, o) {
    o = o || {};
    return { name: name, kcal: kcal, p: p, c: c, f: f, fib: fib, eur: eur, diet: diet, unit: o.unit || 'g', piece: o.piece || null, step: o.piece ? o.piece[2] : (o.step || 10) };
  }
  var FOODS = {
    egg:      food('Eggs',                              143, 12.6,  0.7,  9.5,  0,    6.0, 'veg',   { piece: ['egg', 'eggs', 50] }),
    oats:     food('Rolled oats (dry)',                 379, 13.2, 67.7,  6.5, 10.1,  1.8, 'vegan', { step: 10 }),
    rice:     food('Rice (dry)',                        365,  7.1, 80.0,  0.7,  1.3,  2.2, 'vegan', { step: 10 }),
    pasta:    food('Pasta (dry)',                       371, 13.0, 75.0,  1.5,  3.2,  1.6, 'vegan', { step: 10 }),
    bread:    food('Wholemeal bread',                   245,  9.5, 42.0,  3.0,  6.5,  2.2, 'vegan', { piece: ['slice of wholemeal bread', 'slices of wholemeal bread', 35] }),
    potato:   food('Potatoes',                           77,  2.0, 17.0,  0.1,  2.2,  1.2, 'vegan', { step: 50 }),
    lentils:  food('Lentils (dry)',                     352, 24.6, 63.0,  1.1, 10.7,  3.0, 'vegan', { step: 10 }),
    chickpeas:food('Chickpeas (canned, drained)',       139,  7.0, 22.5,  2.8,  6.4,  3.8, 'vegan', { step: 25 }),
    beans:    food('Beans (canned, drained)',           127,  8.7, 22.8,  0.5,  6.4,  3.6, 'vegan', { step: 25 }),
    milk:     food('Semi-skimmed milk',                  46,  3.4,  4.8,  1.6,  0,    1.2, 'veg',   { unit: 'ml', step: 50 }),
    quark:    food('Low-fat quark or skyr',              60, 10.5,  4.0,  0.2,  0,    3.0, 'veg',   { step: 25 }),
    cheese:   food('Cheese (Gouda type)',               356, 25.0,  0.5, 28.0,  0,    9.0, 'veg',   { step: 10 }),
    pbutter:  food('Peanut butter',                     588, 25.0, 20.0, 50.0,  6.0,  4.0, 'vegan', { step: 5 }),
    thigh:    food('Chicken thigh fillet (raw)',        121, 19.7,  0.0,  4.1,  0,    8.0, 'all',   { step: 25 }),
    breast:   food('Chicken breast (raw)',              120, 22.5,  0.0,  2.6,  0,    9.5, 'all',   { step: 25 }),
    mince:    food('Lean minced beef (raw)',            176, 20.0,  0.0, 10.0,  0,    8.5, 'all',   { step: 25 }),
    tuna:     food('Tuna in water (canned, drained)',   116, 25.5,  0.0,  0.8,  0,   13.0, 'all',   { step: 55 }),
    fish:     food('White fish fillet (frozen, raw)',    78, 17.0,  0.0,  0.7,  0,    9.0, 'all',   { step: 25 }),
    tofu:     food('Tofu (firm)',                       135, 15.0,  2.0,  8.0,  0.5,  6.0, 'vegan', { step: 25 }),
    soychunks:food('Soy chunks (dry)',                  330, 52.0, 30.0,  1.0, 13.0,  6.0, 'vegan', { step: 5 }),
    soymilk:  food('Soy milk (unsweetened)',             33,  3.3,  0.6,  1.8,  0.5,  1.3, 'vegan', { unit: 'ml', step: 50 }),
    banana:   food('Banana',                             89,  1.1, 22.8,  0.3,  2.6,  1.8, 'vegan', { piece: ['banana', 'bananas', 120] }),
    apple:    food('Apple',                              52,  0.3, 13.8,  0.2,  2.4,  2.2, 'vegan', { piece: ['apple', 'apples', 180] }),
    veg:      food('Vegetables (fresh or frozen)',       40,  2.6,  6.0,  0.4,  3.2,  2.5, 'vegan', { step: 25 }),
    tomato:   food('Chopped tomatoes (canned)',          24,  1.2,  4.2,  0.2,  1.2,  1.5, 'vegan', { step: 25 }),
    oil:      food('Olive or sunflower oil',            884,  0.0,  0.0,100.0,  0,    5.0, 'vegan', { step: 5 })
  };

  /* ------------------------------------------------------------------ 4. the meals */

  // [food, usual grams, least, most]. least == most: that amount is fixed (a banana, an apple).
  function meal(title, kind, items) {
    var rank = 0;
    items.forEach(function (it) { rank = Math.max(rank, DIET_RANK[FOODS[it[0]].diet]); });
    return { title: title, kind: kind, items: items, rank: rank };
  }
  var TEMPLATES = [
    // ---- breakfast
    meal('Oats with milk, banana and peanut butter', 'breakfast', [['oats', 70, 40, 130], ['milk', 250, 150, 450], ['banana', 120, 120, 120], ['pbutter', 15, 10, 40], ['quark', 100, 0, 300]]),
    meal('Scrambled eggs on bread',                  'breakfast', [['egg', 150, 100, 300], ['bread', 105, 70, 210], ['cheese', 20, 0, 40], ['oil', 5, 0, 10]]),
    meal('Quark bowl with oats, apple and peanut butter', 'breakfast', [['quark', 250, 150, 400], ['oats', 40, 20, 90], ['apple', 180, 180, 180], ['pbutter', 10, 0, 30]]),
    meal('Oats with soy milk, banana and peanut butter', 'breakfast', [['oats', 80, 40, 140], ['soymilk', 300, 150, 500], ['banana', 120, 120, 120], ['pbutter', 15, 10, 45]]),
    meal('Tofu scramble on bread',                   'breakfast', [['tofu', 150, 100, 300], ['bread', 105, 70, 210], ['veg', 50, 0, 100], ['oil', 5, 0, 10], ['soychunks', 0, 0, 30]]),
    // ---- lunch and dinner
    meal('Chicken thigh, rice and vegetables',      'main', [['thigh', 180, 100, 350], ['rice', 80, 40, 160], ['veg', 200, 100, 350], ['oil', 5, 0, 15]]),
    meal('Chicken breast, rice and vegetables',     'main', [['breast', 160, 100, 350], ['rice', 70, 30, 150], ['veg', 250, 100, 400], ['oil', 5, 0, 15], ['quark', 0, 0, 250]]),
    meal('Chicken and potatoes with vegetables',    'main', [['breast', 150, 100, 300], ['potato', 350, 200, 600], ['veg', 200, 100, 350], ['oil', 5, 0, 15], ['quark', 0, 0, 250]]),
    meal('Pasta with lean mince and tomato',        'main', [['pasta', 90, 50, 170], ['mince', 120, 60, 220], ['tomato', 200, 100, 300], ['veg', 100, 50, 250], ['oil', 0, 0, 10]]),
    meal('Tuna pasta with tomato',                  'main', [['pasta', 90, 50, 170], ['tuna', 110, 55, 330], ['tomato', 200, 100, 300], ['veg', 100, 0, 200], ['oil', 5, 0, 10]]),
    meal('White fish with potatoes and vegetables', 'main', [['fish', 180, 100, 300], ['potato', 350, 200, 600], ['veg', 200, 100, 350], ['oil', 10, 5, 20], ['quark', 0, 0, 250]]),
    meal('Omelette with potatoes and vegetables',   'main', [['egg', 200, 100, 350], ['potato', 300, 150, 500], ['veg', 200, 100, 300], ['cheese', 20, 0, 50], ['oil', 5, 0, 15], ['quark', 0, 0, 250]]),
    meal('Eggs and beans on toast',                 'main', [['egg', 150, 100, 300], ['beans', 200, 100, 400], ['bread', 105, 70, 210], ['tomato', 100, 50, 200]]),
    meal('Lentil dal with rice',                    'main', [['lentils', 80, 40, 160], ['rice', 70, 40, 150], ['tomato', 100, 50, 200], ['veg', 150, 50, 300], ['oil', 10, 5, 20], ['soychunks', 0, 0, 50]]),
    meal('Chickpea curry with rice',                'main', [['chickpeas', 240, 120, 400], ['rice', 80, 40, 150], ['tomato', 150, 50, 300], ['veg', 150, 50, 300], ['oil', 10, 5, 20], ['soychunks', 0, 0, 50]]),
    meal('Bean chili with soy chunks and rice',     'main', [['beans', 200, 100, 400], ['soychunks', 30, 15, 70], ['rice', 70, 40, 140], ['tomato', 200, 100, 300], ['oil', 5, 0, 10]]),
    meal('Tofu stir-fry with rice',                 'main', [['tofu', 200, 100, 350], ['rice', 80, 40, 160], ['veg', 250, 100, 400], ['oil', 10, 5, 20], ['soychunks', 0, 0, 40]]),
    meal('Tofu and lentil bowl with potatoes',      'main', [['tofu', 150, 100, 300], ['lentils', 40, 20, 100], ['potato', 300, 150, 500], ['veg', 200, 100, 350], ['oil', 5, 0, 15]]),
    meal('Lentil soup with bread',                  'main', [['lentils', 70, 40, 140], ['bread', 105, 70, 210], ['veg', 200, 100, 350], ['tomato', 100, 0, 200], ['oil', 5, 0, 10], ['soychunks', 0, 0, 40]]),
    // ---- snacks
    meal('Quark with fruit',                        'snack', [['quark', 200, 100, 450], ['banana', 120, 0, 120]]),
    meal('Peanut butter sandwich',                  'snack', [['bread', 70, 35, 140], ['pbutter', 25, 10, 50], ['apple', 180, 0, 180]]),
    meal('Boiled eggs and bread',                   'snack', [['egg', 100, 50, 200], ['bread', 70, 35, 140]]),
    meal('Soy milk and peanut butter',              'snack', [['soymilk', 250, 150, 400], ['apple', 180, 0, 180], ['pbutter', 30, 15, 60]]),
    meal('Oat shake with soy milk',                 'snack', [['oats', 40, 20, 100], ['soymilk', 300, 150, 450], ['banana', 120, 0, 120]]),
    meal('Cheese sandwich and milk',                'snack', [['bread', 70, 35, 140], ['cheese', 40, 20, 80], ['milk', 250, 150, 400]])
  ];

  // when the day has 3, 4 or 5 meals: what kind each is, and its share of the day's calories (k) and protein (p)
  var SLOTS = {
    3: [{ kind: 'breakfast', name: 'Breakfast', k: 0.28, p: 0.28 }, { kind: 'main', name: 'Lunch', k: 0.36, p: 0.36 }, { kind: 'main', name: 'Dinner', k: 0.36, p: 0.36 }],
    4: [{ kind: 'breakfast', name: 'Breakfast', k: 0.25, p: 0.24 }, { kind: 'main', name: 'Lunch', k: 0.30, p: 0.32 }, { kind: 'snack', name: 'Snack', k: 0.15, p: 0.12 }, { kind: 'main', name: 'Dinner', k: 0.30, p: 0.32 }],
    5: [{ kind: 'breakfast', name: 'Breakfast', k: 0.22, p: 0.22 }, { kind: 'snack', name: 'Morning snack', k: 0.10, p: 0.10 }, { kind: 'main', name: 'Lunch', k: 0.28, p: 0.30 }, { kind: 'snack', name: 'Afternoon snack', k: 0.12, p: 0.10 }, { kind: 'main', name: 'Dinner', k: 0.28, p: 0.28 }]
  };

  /* ------------------------------------------------------------------ 5. the day's plan */

  /** Which template each meal of the day uses. Same inputs and variant -> same choice; a new variant -> a different day. */
  function pickTemplates(slots, diet, variant) {
    var used = {}, out = [];
    var rank = DIET_RANK[diet] == null ? 2 : DIET_RANK[diet];
    slots.forEach(function (slot, j) {
      var pool = [];
      TEMPLATES.forEach(function (t, i) { if (t.kind === slot.kind && t.rank <= rank) pool.push(i); });
      var start = ((variant | 0) * (slot.kind === 'main' ? 5 : 1) + j * 3) % pool.length;
      if (start < 0) start += pool.length;
      var pick = pool[start];
      for (var k = 0; k < pool.length; k++) {
        var cand = pool[(start + k) % pool.length];
        if (!used[cand]) { pick = cand; break; }
      }
      used[pick] = 1;
      out.push(TEMPLATES[pick]);
    });
    return out;
  }

  /**
   * The day: `res` is what calc() returned, `opts` { diet, meals, variant }. Returns { ok, meals: [{slot, title, items, kcal,p,c,f}],
   * totals: {kcal,p,c,f,fiber}, miss: {kcal, p} (how far the day is from the numbers, in %), cost: {day, week} }.
   */
  function plan(res, opts) {
    if (!res || !res.ok) return { ok: false };
    opts = opts || {};
    var diet = DIETS.indexOf(opts.diet) >= 0 ? opts.diet : res.v.diet;
    var nMeals = (opts.meals === 4 || opts.meals === 5) ? opts.meals : (opts.meals === 3 ? 3 : res.v.meals);
    var variant = opts.variant | 0;
    if (res.kcal < 1450 && nMeals === 5) nMeals = 4;               // meals of 120 kcal do not exist: at a very low target fewer, bigger meals
    var slots = SLOTS[nMeals];
    var T = { kcal: res.kcal, p: res.protein.g, f: res.fat.g, c: res.carbs.g };
    var pFloor = Math.ceil(MIN_PLAN_PROTEIN_SHARE * T.kcal / 4), raised = false;
    if (T.p < pFloor) { T.p = pFloor; raised = true; }            // ordinary food has this much anyway: a plan below it would be unnatural
    var picked = pickTemplates(slots, diet, variant);
    var s = clamp(T.kcal / 2200, 0.65, 2.2);
    var boost = clamp((4 * T.p / T.kcal) / 0.22, 1, 2);            // a protein-rich day: more room for the lean foods, less for starch

    // the unknowns: grams of every food of every chosen meal
    var vars = [];
    picked.forEach(function (t, j) {
      t.items.forEach(function (it) {
        var fd = FOODS[it[0]], fixed = it[2] === it[3];
        // what a food is in the meal decides how far it may move: the lean protein and the oil can go lower or higher to balance the day,
        // the starch gives way when the day is protein-rich
        var lean = 4 * fd.p / fd.kcal >= 0.4, starch = fd.c >= 15 && fd.p / fd.kcal < 0.2, fat = fd.f >= 50;
        var init = fixed ? it[1] : it[1] * s * (lean ? Math.sqrt(boost) : (starch ? 1 / Math.sqrt(boost) : 1));
        vars.push({ id: it[0], slot: j, fd: fd, fixed: fixed, init: init,
          lo: fixed ? it[1] : it[2] * Math.min(1, s) * (starch ? 1 / boost : 1) * (lean ? 0.5 : 1),
          hi: fixed ? it[1] : it[3] * Math.max(1, s) * (lean ? boost : 1) * (fat ? 2 : 1) * (starch ? 1.5 : 1), step: fd.step, g: init });
      });
    });
    // the equations: [weight, target, nutrient, slot or -1]. The day's calories and protein count most; each meal's share is a softer wish.
    var rows = [[8000, T.kcal, 'kcal', -1], [6000, T.p, 'p', -1], [150, T.f, 'f', -1], [30, T.c, 'c', -1]];
    slots.forEach(function (sl, j) { rows.push([40, T.kcal * sl.k, 'kcal', j]); rows.push([30, T.p * sl.p, 'p', j]); });
    var R = rows.map(function (r) {
      var a = vars.map(function (x) { return (r[3] === -1 || r[3] === x.slot) ? x.fd[r[2]] / 100 : 0; });
      return { k: r[0] / (Math.max(r[1], 1) * Math.max(r[1], 1)), k0: r[0] / (Math.max(r[1], 1) * Math.max(r[1], 1)), t: r[1], a: a, res: -r[1], pro: r[2] === 'p' };
    });
    var REG = 0.25;                                              // a mild pull towards the usual amount of each food
    function reg(x) { return REG / (x.init * x.init + 100); }
    function refresh() {
      R.forEach(function (r) { var sum = 0; for (var i = 0; i < vars.length; i++) sum += r.a[i] * vars[i].g; r.res = sum - r.t; });
    }
    function fitOnce(proteinWeight) {
      R.forEach(function (r) { r.k = r.pro ? r.k0 * proteinWeight : r.k0; });
      vars.forEach(function (x) { x.g = x.init; });
      refresh();
      // projected coordinate descent on the least-squares fit
      for (var sweep = 0; sweep < 400; sweep++) {
        var moved = 0;
        for (var i = 0; i < vars.length; i++) {
          var x = vars[i];
          if (x.fixed) continue;
          var num_ = reg(x) * (x.g - x.init), den = reg(x);
          for (var r = 0; r < R.length; r++) { var ar = R[r].a[i]; if (ar) { num_ += R[r].k * ar * R[r].res; den += R[r].k * ar * ar; } }
          var g2 = clamp(x.g - num_ / den, x.lo, x.hi), d = g2 - x.g;
          if (d) { x.g = g2; for (var q = 0; q < R.length; q++) R[q].res += R[q].a[i] * d; moved = Math.max(moved, Math.abs(d)); }
        }
        if (moved < 0.01) break;
      }
      // round to what can be weighed or counted, then improve by whole steps: one food at a time, or one food up and another down
      vars.forEach(function (x) { if (!x.fixed) x.g = clamp(roundTo(x.g, x.step), Math.ceil(x.lo / x.step - 1e-9) * x.step, Math.floor(x.hi / x.step + 1e-9) * x.step); });
      refresh();
      function inside(x, dg) { var ng = x.g + dg; return ng >= x.lo - 1e-9 && ng <= x.hi + 1e-9; }
      function change(moves) {                                    // how much the fit changes if each [i, dg] in `moves` happens
        var s2 = 0;
        for (var r = 0; r < R.length; r++) {
          var dd = 0;
          for (var m = 0; m < moves.length; m++) dd += R[r].a[moves[m][0]] * moves[m][1];
          if (dd) s2 += R[r].k * (2 * dd * R[r].res + dd * dd);
        }
        for (var m2 = 0; m2 < moves.length; m2++) {
          var xx = vars[moves[m2][0]], z = xx.g - xx.init, nz = z + moves[m2][1];
          s2 += reg(xx) * (nz * nz - z * z);
        }
        return s2;
      }
      var free = [];
      vars.forEach(function (x, i) { if (!x.fixed) free.push(i); });
      for (var pass = 0; pass < 400; pass++) {
        var best = null, bestJ = -1e-9;
        for (var a1 = 0; a1 < free.length; a1++) {
          var i1 = free[a1], x1 = vars[i1];
          for (var s1 = -1; s1 <= 1; s1 += 2) {
            var d1 = s1 * x1.step;
            if (!inside(x1, d1)) continue;
            var c1 = change([[i1, d1]]);
            if (c1 < bestJ) { bestJ = c1; best = [[i1, d1]]; }
            for (var a2 = a1 + 1; a2 < free.length; a2++) {
              var i2 = free[a2], x2 = vars[i2];
              for (var s2_ = -1; s2_ <= 1; s2_ += 2) {
                var d2 = s2_ * x2.step;
                if (!inside(x2, d2)) continue;
                var c2 = change([[i1, d1], [i2, d2]]);
                if (c2 < bestJ) { bestJ = c2; best = [[i1, d1], [i2, d2]]; }
              }
            }
          }
        }
        if (!best) break;
        best.forEach(function (mv) { vars[mv[0]].g += mv[1]; });
        refresh();
      }
      var kc = 0, pr = 0;
      vars.forEach(function (x) { kc += x.fd.kcal * x.g / 100; pr += x.fd.p * x.g / 100; });
      return { g: vars.map(function (x) { return x.g; }), ek: Math.abs(kc - T.kcal) / T.kcal, ep: Math.abs(pr - T.p) / Math.max(T.p, 1) };
    }
    // The first try counts protein as much as calories. When the day cannot have both (a few meals that are naturally rich in protein, a low
    // calorie target) the calories win: protein may run over its aim, which costs nothing.
    var tries = [], fit = null;
    [1, 0.25, 0.06].forEach(function (pw) {
      if (fit && fit.ek <= 0.03 && fit.ep <= 0.08) return;
      var f = fitOnce(pw);
      tries.push(f);
      if (!fit || f.ek * 2 + f.ep < fit.ek * 2 + fit.ep) fit = f;
    });
    vars.forEach(function (x, i) { x.g = fit.g[i]; });

    // what came out
    var totals = { kcal: 0, p: 0, c: 0, f: 0, fiber: 0 }, eur = 0;
    var meals = picked.map(function (t, j) {
      var m = { slot: slots[j].name, title: t.title, kind: t.kind, items: [], kcal: 0, p: 0, c: 0, f: 0 };
      vars.forEach(function (x) {
        if (x.slot !== j || x.g <= 0) return;
        var k = x.g / 100, fd = x.fd;
        var line = { id: x.id, name: fd.name, g: Math.round(x.g), unit: fd.unit, kcal: fd.kcal * k, p: fd.p * k, c: fd.c * k, f: fd.f * k };
        if (fd.piece) { var n = Math.round(x.g / fd.piece[2]); line.count = n; line.text = n + ' ' + (n === 1 ? fd.piece[0] : fd.piece[1]); }
        else line.text = Math.round(x.g) + ' ' + fd.unit + ' ' + fd.name.charAt(0).toLowerCase() + fd.name.slice(1);
        m.items.push(line);
        m.kcal += line.kcal; m.p += line.p; m.c += line.c; m.f += line.f;
        totals.fiber += fd.fib * k; eur += fd.eur * x.g / 1000;
      });
      totals.kcal += m.kcal; totals.p += m.p; totals.c += m.c; totals.f += m.f;
      return m;
    });
    ['kcal', 'p', 'c', 'f', 'fiber'].forEach(function (k) { totals[k] = Math.round(totals[k]); });
    meals.forEach(function (m) { ['kcal', 'p', 'c', 'f'].forEach(function (k) { m[k] = Math.round(m[k]); }); m.items.forEach(function (l) { ['kcal', 'p', 'c', 'f'].forEach(function (k) { l[k] = Math.round(l[k]); }); }); });
    return {
      ok: true, diet: diet, meals: meals, totals: totals,
      aim: { kcal: T.kcal, p: T.p, raised: raised },
      miss: { kcal: Math.round(1000 * (totals.kcal - T.kcal) / T.kcal) / 10, p: Math.round(1000 * (totals.p - T.p) / Math.max(T.p, 1)) / 10 },
      cost: { day: Math.round(eur * 100) / 100, week: Math.round(eur * 7 * 100) / 100 },
      variant: variant
    };
  }

  /* ------------------------------------------------------------------ 6. the shopping list */

  /** A day's plan times seven days, as [{id, name, text, eur}] sorted by what costs most. */
  function shopping(p) {
    if (!p || !p.ok) return [];
    var sum = {};
    p.meals.forEach(function (m) { m.items.forEach(function (l) { sum[l.id] = (sum[l.id] || 0) + l.g * 7; }); });
    return Object.keys(sum).map(function (id) {
      var fd = FOODS[id], g = sum[id], text;
      if (fd.piece) { var n = Math.round(g / fd.piece[2]); text = n + ' ' + (n === 1 ? fd.piece[0] : fd.piece[1]); }
      else if (g >= 1000) { text = (Math.ceil(g / 50) * 50 / 1000).toString().replace(/\.0+$/, '') + (fd.unit === 'ml' ? ' L ' : ' kg ') + fd.name.charAt(0).toLowerCase() + fd.name.slice(1); }
      else text = Math.ceil(g / 10) * 10 + ' ' + fd.unit + ' ' + fd.name.charAt(0).toLowerCase() + fd.name.slice(1);
      return { id: id, name: fd.name, g: g, text: text, eur: Math.round(fd.eur * g / 10) / 100 };
    }).sort(function (a, b) { return b.eur - a.eur; });
  }

  root.BSNutrition = {
    num: num, clean: clean, bmr: bmr, mifflin: mifflin, refWeight: refWeight, bmiOf: bmiOf, calc: calc,
    presets: presets, navyBodyFat: navyBodyFat, bmiBodyFat: bmiBodyFat,
    plan: plan, shopping: shopping, pickTemplates: pickTemplates,
    FOODS: FOODS, TEMPLATES: TEMPLATES, SLOTS: SLOTS,
    ACTIVITY: ACTIVITY, PROTEIN_PER_KG: PROTEIN_PER_KG, RATE_PRESETS: RATE_PRESETS, DEFAULT_RATE: DEFAULT_RATE, KCAL_PER_KG: KCAL_PER_KG, KCAL_FLOOR: KCAL_FLOOR,
    RANGE: RANGE, BF_RANGE: BF_RANGE, LEVELS: LEVELS, DIETS: DIETS, GOALS: GOALS
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = root.BSNutrition;
})(typeof window !== 'undefined' ? window : globalThis);
