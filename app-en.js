// ═══════════════════════════ FIXED APP LANGUAGE (per-file build) ═══════════════════════════
// This build is fixed to a single language. Valid values: 'en', 'nl', 'ar_fusha'
const APP_LANG = 'en';
// ═══════════════════════════ STATE ═══════════════════════════
const DEFAULT_PROGRAMS_EN = [
  { name:'Mighty Guide — 12 Week Plan',
    nutrition:'1500 kcal is a solid deficit for your weight and will produce real results within 4 weeks. Aim for 130–150g of protein per day (chicken, eggs, Greek yogurt, cottage cheese). Protein protects your muscle while the fat comes off. Take a photo today. Take another in 4 weeks.',
    blocks:[
      { name:'Phase 1 — Beginner Foundation', info:'Learn the movements, build the habit. Form over speed. Your body is adapting — don\'t rush it.',
        days:[
          {label:'Mon', rest:false, warmup:'4 min jog in place → 2 min jumping jacks → 2 min arm circles → 10 burpees', restNote:'', exercises:[
            {name:'Pushups', detail:'4 sets × 12–20 reps · rest 45 sec', tip:'Can\'t do 12? Do knee pushups. Count only clean reps.'},
            {name:'Negative pull-ups', detail:'4 sets × 5–8 reps · rest 45 sec', tip:'Jump to bar, lower yourself slowly over 5 seconds.'},
            {name:'Chair dips', detail:'4 sets × 10–15 reps · rest 45 sec', tip:'Hands behind you on a sturdy chair, feet forward.'},
            {name:'Crunches', detail:'4 sets × 20 reps · rest 30 sec', tip:''},
            {name:'Plank', detail:'4 sets × 30–60 sec · rest 30 sec', tip:'Start at 30 sec, add 5 sec each week.'}
          ]},
          {label:'Tue', rest:false, warmup:'4 min jog in place → 2 min jumping jacks → 2 min arm circles → 10 burpees', restNote:'', exercises:[
            {name:'Squats', detail:'4 sets × 20–25 reps · rest 45 sec', tip:'Target: 100 total squats across all sets with minimal rest.'},
            {name:'Alternating lunges', detail:'4 sets × 16 reps (8 each leg) · rest 45 sec', tip:''},
            {name:'Back presses (floor)', detail:'4 sets × 12 reps · rest 45 sec', tip:'Lie flat, press upper torso off floor with elbows, squeeze back 3 sec.'},
            {name:'Bicycle crunches', detail:'4 sets × 20 reps · rest 30 sec', tip:''}
          ]},
          {label:'Wed', rest:false, warmup:'', restNote:'', exercises:[
            {name:'Aesthetic fat loss routine 1', detail:'3–4 rounds · 30 sec work / 10 sec rest · 60 sec between rounds', tip:'Order: Burpees → jump lunges → bicycle crunches → mountain climbers → one-leg burpee (R) → bicycle crunches → one-leg burpee (L) → alt crunches → pushups'}
          ]},
          {label:'Thu', rest:false, warmup:'4 min jog in place → 2 min jumping jacks → 2 min arm circles → 10 burpees', restNote:'', exercises:[
            {name:'Spider-man pushups', detail:'3 sets × 15 reps · rest 40 sec', tip:'Bring knee to elbow as you lower. Alternate sides each rep.'},
            {name:'Negative pull-ups', detail:'4 sets × 5 slow reps · rest 45 sec', tip:'5-second lowering phase.'},
            {name:'Squats', detail:'4 sets × 20 reps · rest 40 sec', tip:''},
            {name:'Cobra back squeeze', detail:'4 sets × 12 reps · rest 40 sec', tip:'Superman position on floor, raise chest, squeeze back, lower slowly.'},
            {name:'Plank', detail:'3 sets × 30–60 sec · rest 30 sec', tip:''}
          ]},
          {label:'Fri', rest:false, warmup:'4 min jog in place → 2 min jumping jacks → 2 min arm circles → 10 burpees', restNote:'', exercises:[
            {name:'Diamond pushups', detail:'4 sets × 12–15 reps · rest 45 sec', tip:'Hands form a diamond shape. Great for triceps.'},
            {name:'Isometric hold pushups', detail:'4 sets × hold to failure', tip:'Time yourself and try to beat it every session.'},
            {name:'Back presses (floor)', detail:'8 sets × 12 reps · rest 40 sec', tip:'Double sets today to compensate for no full pull-up yet.'},
            {name:'Alternating lunges', detail:'4 sets × 16 reps · rest 40 sec', tip:''},
            {name:'Crunches', detail:'4 sets × 20 reps · rest 30 sec', tip:''}
          ]},
          {label:'Sat', rest:true, warmup:'', exercises:[], restNote:'Stretch, walk, recover. Light stretching or a 20-min walk is fine.'},
          {label:'Sun', rest:true, warmup:'', exercises:[], restNote:'Sleep is when your body changes. Aim for 7–9 hours of sleep.'}
        ]
      },
      { name:'Phase 2 — Supersets Begin', info:'Pair exercises back-to-back with no rest between them. Keeps heart rate up, burns more fat.',
        days:[
          {label:'Mon', rest:false, warmup:'4 min jog → 2 min jumping jacks → 2 min arm circles → 10 burpees', restNote:'', exercises:[
            {name:'Superset A: Pike pushups + pull-ups', detail:'4 rounds · Pike pushups × 12 → pull-ups × max reps · rest 45 sec', tip:'Even 1–2 real pull-ups counts. Add one rep every 2 weeks.'},
            {name:'Superset B: Pushups + jump lunges', detail:'4 rounds · Pushups × 15 → jump lunges × 16 · rest 45 sec', tip:''},
            {name:'Superset C: Plank + cobra back squeeze', detail:'4 rounds · Plank 1 min → cobra × 12 · rest 45 sec', tip:''}
          ]},
          {label:'Tue', rest:false, warmup:'4 min jog → 2 min jumping jacks → 2 min arm circles → 10 burpees', restNote:'', exercises:[
            {name:'Superset A: Assisted pistol squat + chair dips', detail:'4 rounds · Pistol squat × 6 each leg → dips × 12 · rest 45 sec', tip:'Hold a door frame for pistol squats.'},
            {name:'Squats — 100 reps total', detail:'Any set breakdown, minimal rest', tip:''},
            {name:'Bicycle crunches', detail:'4 sets × 25 reps · rest 30 sec', tip:''}
          ]},
          {label:'Wed', rest:false, warmup:'', restNote:'', exercises:[
            {name:'Aesthetic fat loss routine 2', detail:'4–5 rounds · 30 sec work / 10 sec rest · 60 sec between rounds', tip:'Handstand kick-ups → double kicks → squat jump twist → lunges → pushups → jump ins (60 sec)'}
          ]},
          {label:'Thu', rest:false, warmup:'4 min jog → 2 min jumping jacks → 2 min arm circles → 10 burpees', restNote:'', exercises:[
            {name:'Superset A: Spider-man pushups + tuck jumps', detail:'3 rounds · Pushups × 15–20 → tuck jumps × 20 · rest 45 sec', tip:'Land softly on tuck jumps — protect your knees.'},
            {name:'Superset B: Diamond pushups + alternating lunges', detail:'4 rounds · Diamond pushups × 12 → lunges × 16 · rest 45 sec', tip:''},
            {name:'Superset C: Pull-ups + isometric pushup hold', detail:'4 rounds · Pull-ups × max → hold pushup bottom · rest 45 sec', tip:''}
          ]},
          {label:'Fri', rest:false, warmup:'4 min jog → 2 min jumping jacks → 2 min arm circles → 10 burpees', restNote:'', exercises:[
            {name:'Superset A: Pushups + crunches', detail:'4 rounds · Pushups × max → crunches × 20 · rest 45 sec', tip:''},
            {name:'Superset B: Squats + back presses', detail:'4 rounds · Squats × 20 → back presses × 12 · rest 45 sec', tip:''},
            {name:'Plank', detail:'3 sets × max time', tip:''}
          ]},
          {label:'Sat', rest:true, warmup:'', exercises:[], restNote:'Stretch, walk, recover.'},
          {label:'Sun', rest:true, warmup:'', exercises:[], restNote:'Recovery is part of the plan.'}
        ]
      },
      { name:'Phase 3 — Triple Supersets', info:'Three exercises back-to-back with no rest. Maximum intensity. You\'ve earned it by week 9.',
        days:[
          {label:'Mon', rest:false, warmup:'4 min jog → 2 min jumping jacks → 2 min arm circles → 10 burpees', restNote:'', exercises:[
            {name:'Triple A: Chair dips → back presses → pistol squats', detail:'4 rounds · Dips × 12 → back presses × 12 → pistol squats × 6 each · rest 60 sec', tip:''},
            {name:'Triple B: Clapping pushups → cobra squeeze → jump lunges', detail:'4 rounds · Clapping pushups × 10 → cobra × 12 → jump lunges × 16 · rest 60 sec', tip:'Can\'t clap yet? Do fast regular pushups instead.'}
          ]},
          {label:'Tue', rest:false, warmup:'4 min jog → 2 min jumping jacks → 2 min arm circles → 10 burpees', restNote:'', exercises:[
            {name:'Triple C: Handstand pushups → plank → foot-elevated pushups', detail:'4 rounds · Handstand/pike pushup × max → plank 1 min → foot elevated × 12 · rest 60 sec', tip:''},
            {name:'Pull-ups', detail:'4 sets × max reps · rest 60 sec', tip:'By weeks 9–12 aim for 3–8 reps. Record every session.'}
          ]},
          {label:'Wed', rest:false, warmup:'', restNote:'', exercises:[
            {name:'Build your own circuit', detail:'6 exercises · 30 sec work / 10 sec rest · 60 sec after last · 6 rounds', tip:'2 exercises per body part: burpees+pushups (upper), squats+jump lunges (lower), bicycle crunches+mountain climbers (core).'}
          ]},
          {label:'Thu', rest:false, warmup:'4 min jog → 2 min jumping jacks → 2 min arm circles → 10 burpees', restNote:'', exercises:[
            {name:'Triple A (repeat from Mon)', detail:'4 rounds · Chair dips → back presses → pistol squats · rest 60 sec', tip:'Try to beat Monday\'s reps on each exercise.'},
            {name:'100 squats — timed challenge', detail:'Get 100 squats done as fast as possible. Beat your time each week.', tip:''}
          ]},
          {label:'Fri', rest:false, warmup:'4 min jog → 2 min jumping jacks → 2 min arm circles → 10 burpees', restNote:'', exercises:[
            {name:'Triple B (repeat from Mon)', detail:'4 rounds · Clapping/fast pushups → cobra → jump lunges · rest 60 sec', tip:''},
            {name:'Pull-ups + top hold', detail:'4 rounds · Pull-ups × max → hold at top · rest 60 sec', tip:''},
            {name:'Plank', detail:'3 sets × max time', tip:''}
          ]},
          {label:'Sat', rest:true, warmup:'', exercises:[], restNote:'You\'ve worked hard. Recover properly.'},
          {label:'Sun', rest:true, warmup:'', exercises:[], restNote:'Sleep 7–9 hours. This is when fat is actually lost.'}
        ]
      }
    ]
  }
];

const DEFAULT_PROGRAMS_NL = [
  { name:'Krachtige Gids — 12-Weken Plan',
    nutrition:'1500 kcal is een stevig tekort voor jouw gewicht en levert binnen 4 weken echte resultaten op. Streef naar 130–150g eiwit per dag (kip, eieren, Griekse yoghurt, kwark). Eiwit beschermt je spieren terwijl het vet verdwijnt. Maak vandaag een foto. Maak er over 4 weken nog een.',
    blocks:[
      { name:'Fase 1 — Fundament voor Beginners', info:'Leer de bewegingen, bouw de gewoonte op. Vorm boven snelheid. Je lichaam past zich aan — forceer het niet.',
        days:[
          {label:'Ma', rest:false, warmup:'4 min joggen op de plek → 2 min jumping jacks → 2 min armcirkels → 10 burpees', restNote:'', exercises:[
            {name:'Push-ups', detail:'4 sets × 12–20 herh · 45 sec rust', tip:'Lukt 12 niet? Doe knie-push-ups. Tel alleen nette herhalingen.'},
            {name:'Negatieve pull-ups', detail:'4 sets × 5–8 herh · 45 sec rust', tip:'Spring naar de stang, zak 5 seconden langzaam.'},
            {name:'Stoel dips', detail:'4 sets × 10–15 herh · 45 sec rust', tip:'Handen achter je op een stevige stoel, voeten naar voren.'},
            {name:'Crunches', detail:'4 sets × 20 herh · 30 sec rust', tip:''},
            {name:'Plank', detail:'4 sets × 30–60 sec · 30 sec rust', tip:'Begin bij 30 sec, tel er elke week 5 sec bij op.'}
          ]},
          {label:'Di', rest:false, warmup:'4 min joggen op de plek → 2 min jumping jacks → 2 min armcirkels → 10 burpees', restNote:'', exercises:[
            {name:'Squats', detail:'4 sets × 20–25 herh · 45 sec rust', tip:'Doel: 100 squats totaal over alle sets met minimale rust.'},
            {name:'Afwisselende lunges', detail:'4 sets × 16 herh (8 per been) · 45 sec rust', tip:''},
            {name:'Rugdrukken (vloer)', detail:'4 sets × 12 herh · 45 sec rust', tip:'Lig plat, druk je bovenlichaam met je ellebogen omhoog, knijp 3 sec je rug samen.'},
            {name:'Bicycle crunches', detail:'4 sets × 20 herh · 30 sec rust', tip:''}
          ]},
          {label:'Wo', rest:false, warmup:'', restNote:'', exercises:[
            {name:'Vetverbrandingsroutine 1', detail:'3–4 rondes · 30 sec werk / 10 sec rust · 60 sec tussen rondes', tip:'Volgorde: Burpees → jumplunges → bicycle crunches → mountain climbers → eenbenige burpee (R) → bicycle crunches → eenbenige burpee (L) → afw. crunches → push-ups'}
          ]},
          {label:'Do', rest:false, warmup:'4 min joggen op de plek → 2 min jumping jacks → 2 min armcirkels → 10 burpees', restNote:'', exercises:[
            {name:'Spider-man push-ups', detail:'3 sets × 15 herh · 40 sec rust', tip:'Breng knie naar elleboog terwijl je zakt. Wissel elke herhaling van kant.'},
            {name:'Negatieve pull-ups', detail:'4 sets × 5 langzame herh · 45 sec rust', tip:'5 seconden zakfase.'},
            {name:'Squats', detail:'4 sets × 20 herh · 40 sec rust', tip:''},
            {name:'Cobra rugknijpen', detail:'4 sets × 12 herh · 40 sec rust', tip:'Supermanhouding op de vloer, hef borst, knijp rug samen, zak langzaam.'},
            {name:'Plank', detail:'3 sets × 30–60 sec · 30 sec rust', tip:''}
          ]},
          {label:'Vr', rest:false, warmup:'4 min joggen op de plek → 2 min jumping jacks → 2 min armcirkels → 10 burpees', restNote:'', exercises:[
            {name:'Diamond push-ups', detail:'4 sets × 12–15 herh · 45 sec rust', tip:'Handen vormen een diamant. Uitstekend voor de triceps.'},
            {name:'Isometrische hold push-ups', detail:'4 sets × hold tot falen', tip:'Neem de tijd op en probeer die elke sessie te verbeteren.'},
            {name:'Rugdrukken (vloer)', detail:'8 sets × 12 herh · 40 sec rust', tip:'Dubbele sets vandaag om te compenseren voor nog geen volledige pull-up.'},
            {name:'Afwisselende lunges', detail:'4 sets × 16 herh · 40 sec rust', tip:''},
            {name:'Crunches', detail:'4 sets × 20 herh · 30 sec rust', tip:''}
          ]},
          {label:'Za', rest:true, warmup:'', exercises:[], restNote:'Rek uit, wandel, herstel. Licht rekken of een wandeling van 20 min is prima.'},
          {label:'Zo', rest:true, warmup:'', exercises:[], restNote:'Slaap is wanneer je lichaam verandert. Streef naar 7–9 uur slaap.'}
        ]
      },
      { name:'Fase 2 — Supersets Beginnen', info:'Combineer oefeningen achter elkaar zonder rust ertussen. Houdt je hartslag omhoog, verbrandt meer vet.',
        days:[
          {label:'Ma', rest:false, warmup:'4 min joggen → 2 min jumping jacks → 2 min armcirkels → 10 burpees', restNote:'', exercises:[
            {name:'Superset A: Pike push-ups + pull-ups', detail:'4 rondes · Pike push-ups × 12 → pull-ups × max herh · 45 sec rust', tip:'Zelfs 1–2 echte pull-ups telt. Voeg elke 2 weken één herhaling toe.'},
            {name:'Superset B: Push-ups + jumplunges', detail:'4 rondes · Push-ups × 15 → jumplunges × 16 · 45 sec rust', tip:''},
            {name:'Superset C: Plank + cobra rugknijpen', detail:'4 rondes · Plank 1 min → cobra × 12 · 45 sec rust', tip:''}
          ]},
          {label:'Di', rest:false, warmup:'4 min joggen → 2 min jumping jacks → 2 min armcirkels → 10 burpees', restNote:'', exercises:[
            {name:'Superset A: Geassisteerde pistol squat + stoel dips', detail:'4 rondes · Pistol squat × 6 per been → dips × 12 · 45 sec rust', tip:'Houd een deurpost vast voor pistol squats.'},
            {name:'Squats — 100 herh totaal', detail:'Elke setverdeling, minimale rust', tip:''},
            {name:'Bicycle crunches', detail:'4 sets × 25 herh · 30 sec rust', tip:''}
          ]},
          {label:'Wo', rest:false, warmup:'', restNote:'', exercises:[
            {name:'Vetverbrandingsroutine 2', detail:'4–5 rondes · 30 sec werk / 10 sec rust · 60 sec tussen rondes', tip:'Handstand kick-ups → double kicks → squat jump twist → lunges → push-ups → jump ins (60 sec)'}
          ]},
          {label:'Do', rest:false, warmup:'4 min joggen → 2 min jumping jacks → 2 min armcirkels → 10 burpees', restNote:'', exercises:[
            {name:'Superset A: Spider-man push-ups + tuck jumps', detail:'3 rondes · Push-ups × 15–20 → tuck jumps × 20 · 45 sec rust', tip:'Land zacht bij tuck jumps — bescherm je knieën.'},
            {name:'Superset B: Diamond push-ups + afwisselende lunges', detail:'4 rondes · Diamond push-ups × 12 → lunges × 16 · 45 sec rust', tip:''},
            {name:'Superset C: Pull-ups + isometrische push-up hold', detail:'4 rondes · Pull-ups × max → hold onderaan push-up · 45 sec rust', tip:''}
          ]},
          {label:'Vr', rest:false, warmup:'4 min joggen → 2 min jumping jacks → 2 min armcirkels → 10 burpees', restNote:'', exercises:[
            {name:'Superset A: Push-ups + crunches', detail:'4 rondes · Push-ups × max → crunches × 20 · 45 sec rust', tip:''},
            {name:'Superset B: Squats + rugdrukken', detail:'4 rondes · Squats × 20 → rugdrukken × 12 · 45 sec rust', tip:''},
            {name:'Plank', detail:'3 sets × max tijd', tip:''}
          ]},
          {label:'Za', rest:true, warmup:'', exercises:[], restNote:'Rek uit, wandel, herstel.'},
          {label:'Zo', rest:true, warmup:'', exercises:[], restNote:'Herstel is onderdeel van het plan.'}
        ]
      },
      { name:'Fase 3 — Drievoudige Supersets', info:'Drie oefeningen achter elkaar zonder rust. Maximale intensiteit. Je hebt het verdiend tegen week 9.',
        days:[
          {label:'Ma', rest:false, warmup:'4 min joggen → 2 min jumping jacks → 2 min armcirkels → 10 burpees', restNote:'', exercises:[
            {name:'Drievoudig A: Stoel dips → rugdrukken → pistol squats', detail:'4 rondes · Dips × 12 → rugdrukken × 12 → pistol squats × 6 per been · 60 sec rust', tip:''},
            {name:'Drievoudig B: Klap push-ups → cobra knijpen → jumplunges', detail:'4 rondes · Klap push-ups × 10 → cobra × 12 → jumplunges × 16 · 60 sec rust', tip:'Kan je nog niet klappen? Doe dan snelle gewone push-ups.'}
          ]},
          {label:'Di', rest:false, warmup:'4 min joggen → 2 min jumping jacks → 2 min armcirkels → 10 burpees', restNote:'', exercises:[
            {name:'Drievoudig C: Handstand push-ups → plank → verhoogde push-ups', detail:'4 rondes · Handstand/pike push-up × max → plank 1 min → verhoogd × 12 · 60 sec rust', tip:''},
            {name:'Pull-ups', detail:'4 sets × max herh · 60 sec rust', tip:'Streef in weken 9–12 naar 3–8 herhalingen. Noteer elke sessie.'}
          ]},
          {label:'Wo', rest:false, warmup:'', restNote:'', exercises:[
            {name:'Bouw je eigen circuit', detail:'6 oefeningen · 30 sec werk / 10 sec rust · 60 sec na laatste · 6 rondes', tip:'2 oefeningen per lichaamsdeel: burpees+push-ups (boven), squats+jumplunges (onder), bicycle crunches+mountain climbers (core).'}
          ]},
          {label:'Do', rest:false, warmup:'4 min joggen → 2 min jumping jacks → 2 min armcirkels → 10 burpees', restNote:'', exercises:[
            {name:'Drievoudig A (herhaal van Ma)', detail:'4 rondes · Stoel dips → rugdrukken → pistol squats · 60 sec rust', tip:'Probeer maandags herhalingen op elke oefening te verslaan.'},
            {name:'100 squats — tijdchallenge', detail:'Doe 100 squats zo snel mogelijk. Versla je tijd elke week.', tip:''}
          ]},
          {label:'Vr', rest:false, warmup:'4 min joggen → 2 min jumping jacks → 2 min armcirkels → 10 burpees', restNote:'', exercises:[
            {name:'Drievoudig B (herhaal van Ma)', detail:'4 rondes · Klap/snelle push-ups → cobra → jumplunges · 60 sec rust', tip:''},
            {name:'Pull-ups + top hold', detail:'4 rondes · Pull-ups × max → hold bovenaan · 60 sec rust', tip:''},
            {name:'Plank', detail:'3 sets × max tijd', tip:''}
          ]},
          {label:'Za', rest:true, warmup:'', exercises:[], restNote:'Je hebt hard gewerkt. Herstel goed.'},
          {label:'Zo', rest:true, warmup:'', exercises:[], restNote:'Slaap 7–9 uur. Dan wordt vet daadwerkelijk verbrand.'}
        ]
      }
    ]
  }
];

const DEFAULT_PROGRAMS_AR = [
  { name:'الدليل القوي — خطة 12 أسبوعًا',
    nutrition:'1500 سعرة حرارية هو عجز جيد بالنسبة لوزنك وسيحقق نتائج حقيقية خلال 4 أسابيع. استهدف 130-150 غرامًا من البروتين يوميًا (دجاج، بيض، زبادي يوناني، جبن قريش). البروتين يحمي عضلاتك بينما يذوب الدهن. التقط صورة اليوم. والتقط أخرى بعد 4 أسابيع.',
    blocks:[
      { name:'المرحلة 1 — أساسيات للمبتدئين', info:'تعلّم الحركات وابنِ العادة. الأداء الصحيح أهم من السرعة. جسمك يتكيف — لا تستعجله.',
        days:[
          {label:'الاثنين', rest:false, warmup:'4 دقائق جري في المكان ← دقيقتان تمرين القفز ← دقيقتان تدوير الذراعين ← 10 بربيز', restNote:'', exercises:[
            {name:'تمرين الضغط', detail:'4 مجموعات × 12-20 تكرارًا · راحة 45 ثانية', tip:'لا تستطيع 12؟ نفّذ الضغط على الركبتين. احسب التكرارات النظيفة فقط.'},
            {name:'العقلة السلبية', detail:'4 مجموعات × 5-8 تكرارات · راحة 45 ثانية', tip:'اقفز إلى العارضة، ثم انزل ببطء خلال 5 ثوانٍ.'},
            {name:'غطس الكرسي', detail:'4 مجموعات × 10-15 تكرارًا · راحة 45 ثانية', tip:'ضع يديك خلفك على كرسي ثابت، وقدماك للأمام.'},
            {name:'تمرين الكرنش', detail:'4 مجموعات × 20 تكرارًا · راحة 30 ثانية', tip:''},
            {name:'البلانك', detail:'4 مجموعات × 30-60 ثانية · راحة 30 ثانية', tip:'ابدأ بـ30 ثانية وأضف 5 ثوانٍ كل أسبوع.'}
          ]},
          {label:'الثلاثاء', rest:false, warmup:'4 دقائق جري في المكان ← دقيقتان تمرين القفز ← دقيقتان تدوير الذراعين ← 10 بربيز', restNote:'', exercises:[
            {name:'سكوات', detail:'4 مجموعات × 20-25 تكرارًا · راحة 45 ثانية', tip:'الهدف: 100 سكوات إجمالاً عبر كل المجموعات بأقل قدر من الراحة.'},
            {name:'الطعنات المتبادلة', detail:'4 مجموعات × 16 تكرارًا (8 لكل ساق) · راحة 45 ثانية', tip:''},
            {name:'ضغط الظهر (أرضي)', detail:'4 مجموعات × 12 تكرارًا · راحة 45 ثانية', tip:'استلقِ بشكل مسطح، ادفع الجزء العلوي من جسمك عن الأرض بمرفقيك، واضغط ظهرك 3 ثوانٍ.'},
            {name:'كرنش الدراجة', detail:'4 مجموعات × 20 تكرارًا · راحة 30 ثانية', tip:''}
          ]},
          {label:'الأربعاء', rest:false, warmup:'', restNote:'', exercises:[
            {name:'روتين حرق الدهون 1', detail:'3-4 جولات · 30 ثانية عمل / 10 ثوانٍ راحة · 60 ثانية بين الجولات', tip:'الترتيب: بربيز ← طعنات القفز ← كرنش الدراجة ← متسلق الجبل ← بربيز بساق واحدة (يمين) ← كرنش الدراجة ← بربيز بساق واحدة (يسار) ← كرنش متبادل ← ضغط'}
          ]},
          {label:'الخميس', rest:false, warmup:'4 دقائق جري في المكان ← دقيقتان تمرين القفز ← دقيقتان تدوير الذراعين ← 10 بربيز', restNote:'', exercises:[
            {name:'ضغط سبايدرمان', detail:'3 مجموعات × 15 تكرارًا · راحة 40 ثانية', tip:'قرّب ركبتك من مرفقك أثناء النزول. بدّل الجانب في كل تكرار.'},
            {name:'العقلة السلبية', detail:'4 مجموعات × 5 تكرارات بطيئة · راحة 45 ثانية', tip:'مرحلة نزول لمدة 5 ثوانٍ.'},
            {name:'سكوات', detail:'4 مجموعات × 20 تكرارًا · راحة 40 ثانية', tip:''},
            {name:'ضغط الظهر - وضعية الكوبرا', detail:'4 مجموعات × 12 تكرارًا · راحة 40 ثانية', tip:'وضعية سوبرمان على الأرض، ارفع الصدر، اضغط الظهر، انزل ببطء.'},
            {name:'البلانك', detail:'3 مجموعات × 30-60 ثانية · راحة 30 ثانية', tip:''}
          ]},
          {label:'الجمعة', rest:false, warmup:'4 دقائق جري في المكان ← دقيقتان تمرين القفز ← دقيقتان تدوير الذراعين ← 10 بربيز', restNote:'', exercises:[
            {name:'الضغط الماسي', detail:'4 مجموعات × 12-15 تكرارًا · راحة 45 ثانية', tip:'تشكّل اليدان شكل الماس. ممتاز لعضلة الترايسبس.'},
            {name:'ثبات الضغط المتساوي القياس', detail:'4 مجموعات × ثبات حتى الإجهاد', tip:'احسب الوقت وحاول التفوق عليه في كل جلسة.'},
            {name:'ضغط الظهر (أرضي)', detail:'8 مجموعات × 12 تكرارًا · راحة 40 ثانية', tip:'مجموعات مضاعفة اليوم لتعويض عدم وجود عقلة كاملة بعد.'},
            {name:'الطعنات المتبادلة', detail:'4 مجموعات × 16 تكرارًا · راحة 40 ثانية', tip:''},
            {name:'تمرين الكرنش', detail:'4 مجموعات × 20 تكرارًا · راحة 30 ثانية', tip:''}
          ]},
          {label:'السبت', rest:true, warmup:'', exercises:[], restNote:'تمدد، امشِ، تعافَ. تمدد خفيف أو مشي لمدة 20 دقيقة أمر جيد.'},
          {label:'الأحد', rest:true, warmup:'', exercises:[], restNote:'النوم هو وقت تغيّر جسمك. استهدف 7-9 ساعات نوم.'}
        ]
      },
      { name:'المرحلة 2 — بداية السوبرست', info:'اجمع تمرينين متتاليين دون راحة بينهما. يحافظ على معدل ضربات القلب مرتفعًا، ويحرق دهونًا أكثر.',
        days:[
          {label:'الاثنين', rest:false, warmup:'4 دقائق جري ← دقيقتان تمرين القفز ← دقيقتان تدوير الذراعين ← 10 بربيز', restNote:'', exercises:[
            {name:'سوبرست أ: ضغط بايك + عقلة', detail:'4 جولات · ضغط بايك × 12 ← عقلة × أقصى تكرارات · راحة 45 ثانية', tip:'حتى 1-2 عقلة حقيقية تُحتسب. أضف تكرارًا واحدًا كل أسبوعين.'},
            {name:'سوبرست ب: ضغط + طعنات القفز', detail:'4 جولات · ضغط × 15 ← طعنات القفز × 16 · راحة 45 ثانية', tip:''},
            {name:'سوبرست ج: بلانك + ضغط الظهر (كوبرا)', detail:'4 جولات · بلانك دقيقة واحدة ← كوبرا × 12 · راحة 45 ثانية', tip:''}
          ]},
          {label:'الثلاثاء', rest:false, warmup:'4 دقائق جري ← دقيقتان تمرين القفز ← دقيقتان تدوير الذراعين ← 10 بربيز', restNote:'', exercises:[
            {name:'سوبرست أ: بيستول سكوات بمساعدة + غطس الكرسي', detail:'4 جولات · بيستول سكوات × 6 لكل ساق ← غطس × 12 · راحة 45 ثانية', tip:'استخدم إطار الباب للمساعدة في بيستول سكوات.'},
            {name:'سكوات — 100 تكرار إجمالاً', detail:'أي توزيع للمجموعات، بأقل راحة ممكنة', tip:''},
            {name:'كرنش الدراجة', detail:'4 مجموعات × 25 تكرارًا · راحة 30 ثانية', tip:''}
          ]},
          {label:'الأربعاء', rest:false, warmup:'', restNote:'', exercises:[
            {name:'روتين حرق الدهون 2', detail:'4-5 جولات · 30 ثانية عمل / 10 ثوانٍ راحة · 60 ثانية بين الجولات', tip:'وقوف يدين مع ركلة ← ركلات مزدوجة ← سكوات قفز مع التفاف ← طعنات ← ضغط ← قفزات دخول (60 ثانية)'}
          ]},
          {label:'الخميس', rest:false, warmup:'4 دقائق جري ← دقيقتان تمرين القفز ← دقيقتان تدوير الذراعين ← 10 بربيز', restNote:'', exercises:[
            {name:'سوبرست أ: ضغط سبايدرمان + قفزات تجميع الركبتين', detail:'3 جولات · ضغط × 15-20 ← قفزات × 20 · راحة 45 ثانية', tip:'اهبط بلطف عند القفزات — احمِ ركبتيك.'},
            {name:'سوبرست ب: الضغط الماسي + الطعنات المتبادلة', detail:'4 جولات · ضغط ماسي × 12 ← طعنات × 16 · راحة 45 ثانية', tip:''},
            {name:'سوبرست ج: عقلة + ثبات أسفل الضغط', detail:'4 جولات · عقلة × أقصى تكرارات ← ثبات أسفل الضغط · راحة 45 ثانية', tip:''}
          ]},
          {label:'الجمعة', rest:false, warmup:'4 دقائق جري ← دقيقتان تمرين القفز ← دقيقتان تدوير الذراعين ← 10 بربيز', restNote:'', exercises:[
            {name:'سوبرست أ: ضغط + كرنش', detail:'4 جولات · ضغط × أقصى تكرارات ← كرنش × 20 · راحة 45 ثانية', tip:''},
            {name:'سوبرست ب: سكوات + ضغط الظهر', detail:'4 جولات · سكوات × 20 ← ضغط الظهر × 12 · راحة 45 ثانية', tip:''},
            {name:'البلانك', detail:'3 مجموعات × أقصى وقت', tip:''}
          ]},
          {label:'السبت', rest:true, warmup:'', exercises:[], restNote:'تمدد، امشِ، تعافَ.'},
          {label:'الأحد', rest:true, warmup:'', exercises:[], restNote:'التعافي جزء من الخطة.'}
        ]
      },
      { name:'المرحلة 3 — السوبرست الثلاثي', info:'ثلاثة تمارين متتالية دون راحة. أقصى شدة. لقد استحققتها بحلول الأسبوع 9.',
        days:[
          {label:'الاثنين', rest:false, warmup:'4 دقائق جري ← دقيقتان تمرين القفز ← دقيقتان تدوير الذراعين ← 10 بربيز', restNote:'', exercises:[
            {name:'ثلاثي أ: غطس الكرسي ← ضغط الظهر ← بيستول سكوات', detail:'4 جولات · غطس × 12 ← ضغط الظهر × 12 ← بيستول سكوات × 6 لكل ساق · راحة 60 ثانية', tip:''},
            {name:'ثلاثي ب: ضغط بالتصفيق ← ضغط الظهر (كوبرا) ← طعنات القفز', detail:'4 جولات · ضغط بالتصفيق × 10 ← كوبرا × 12 ← طعنات القفز × 16 · راحة 60 ثانية', tip:'لا تستطيع التصفيق بعد؟ نفّذ ضغطًا عاديًا سريعًا بدلاً من ذلك.'}
          ]},
          {label:'الثلاثاء', rest:false, warmup:'4 دقائق جري ← دقيقتان تمرين القفز ← دقيقتان تدوير الذراعين ← 10 بربيز', restNote:'', exercises:[
            {name:'ثلاثي ج: ضغط وقوف على اليدين ← بلانك ← ضغط بارتفاع القدمين', detail:'4 جولات · ضغط وقوف/بايك × أقصى تكرارات ← بلانك دقيقة واحدة ← ضغط مرتفع × 12 · راحة 60 ثانية', tip:''},
            {name:'عقلة', detail:'4 مجموعات × أقصى تكرارات · راحة 60 ثانية', tip:'استهدف 3-8 تكرارات في الأسابيع 9-12. سجّل كل جلسة.'}
          ]},
          {label:'الأربعاء', rest:false, warmup:'', restNote:'', exercises:[
            {name:'صمّم دائرتك التدريبية الخاصة', detail:'6 تمارين · 30 ثانية عمل / 10 ثوانٍ راحة · 60 ثانية بعد الأخير · 6 جولات', tip:'تمرينان لكل جزء من الجسم: بربيز+ضغط (الأعلى)، سكوات+طعنات القفز (الأسفل)، كرنش الدراجة+متسلق الجبل (الجذع).'}
          ]},
          {label:'الخميس', rest:false, warmup:'4 دقائق جري ← دقيقتان تمرين القفز ← دقيقتان تدوير الذراعين ← 10 بربيز', restNote:'', exercises:[
            {name:'ثلاثي أ (كرر من الاثنين)', detail:'4 جولات · غطس الكرسي ← ضغط الظهر ← بيستول سكوات · راحة 60 ثانية', tip:'حاول التفوق على تكرارات الاثنين في كل تمرين.'},
            {name:'100 سكوات — تحدي الوقت', detail:'نفّذ 100 سكوات بأسرع وقت ممكن. تفوّق على وقتك كل أسبوع.', tip:''}
          ]},
          {label:'الجمعة', rest:false, warmup:'4 دقائق جري ← دقيقتان تمرين القفز ← دقيقتان تدوير الذراعين ← 10 بربيز', restNote:'', exercises:[
            {name:'ثلاثي ب (كرر من الاثنين)', detail:'4 جولات · ضغط بالتصفيق/سريع ← كوبرا ← طعنات القفز · راحة 60 ثانية', tip:''},
            {name:'عقلة + ثبات أعلى الحركة', detail:'4 جولات · عقلة × أقصى تكرارات ← ثبات أعلى الحركة · راحة 60 ثانية', tip:''},
            {name:'البلانك', detail:'3 مجموعات × أقصى وقت', tip:''}
          ]},
          {label:'السبت', rest:true, warmup:'', exercises:[], restNote:'لقد بذلت جهدًا كبيرًا. تعافَ بشكل صحيح.'},
          {label:'الأحد', rest:true, warmup:'', exercises:[], restNote:'نم 7-9 ساعات. هذا هو الوقت الذي يُفقد فيه الدهن فعليًا.'}
        ]
      }
    ]
  }
];


const DEFAULT_PROGRAMS = APP_LANG === 'nl' ? DEFAULT_PROGRAMS_NL : (APP_LANG === 'ar_fusha' ? DEFAULT_PROGRAMS_AR : DEFAULT_PROGRAMS_EN);

let state = {
  goalDays: 84,
  startTimestamp: null,
  completedDays: [],
  notes: '',
  notesList: [],
  todos: [],
  dailyTodos: [], // recurring daily checklist; each item's done-state is derived from its doneOn date vs today, so it auto-resets every day
  programs: JSON.parse(JSON.stringify(DEFAULT_PROGRAMS)),
  activeProgram: 0, activeBlock: 0, activeDay: 0,
  profile: { name:'', title:"My Goals, Insha'Allah", photo: null, photoId: null, timezone: 'Europe/Amsterdam', language: 'en', theme: 'orange', customThemeColor: null, accent: 'orange', customBgColor: null, customCardColor: null, customTextColor: null, bannerBgType: 'default', bannerBgColor: '#1a1e24', bannerBgPhotoId: null, bannerBgPosX: 50, bannerBgPosY: 50, bannerBgZoom: 1, bannerBgFlip: false, photoPosX: 50, photoPosY: 50, photoZoom: 1, photoFlip: false, ttsVoiceURI: null },
  profileGoals: [],
  physicalStats: { wBef:'',wAft:'',wsBef:'',wsAft:'',eBef:'',eAft:'',slBef:'',slAft:'', startDate:'', endDate:'' },
  photos: { before: [], after: [] },
  agendaEntries: {},
  waterCupXSMl: 100,
  waterCupSmallMl: 200,
  waterCupMediumMl: 350,
  waterCupLargeMl: 500,
  waterCupXLMl: 750,
  measurementTypes: [],
  checkinPeriodDays: 30,
  checkinMetric: 'weight',
  waterTargetMl: 2000,
  tools: { calcWeight:'', calcGoal:'maintain', calcAge:'', calcGender:'male', calcHeight:'', calcActivity:'moderate', calcRateVal:'0.5', calcRateUnit:'kg' },
  warmups: [],
  soundSettings: { volume: 0.75, type: 'beep' },
  workoutLog: {}, // { [exerciseName]: [ {date:'YYYY-MM-DD', sets:[{reps,weight}]} , ... ] }
  workoutLogLastExercise: '',
  ltProgramIdx: 0, ltBlockIdx: 0, ltDayIdx: 0, ltWarmupId: '' // remembers the Timer tab's program/block/day/warm-up choice
};

const STORE_KEY = 'forgeTrackerState';
const META_KEY = 'forgeTrackerMeta';
const LAST_TAB_KEY = 'forgeTrackerLastTab'; // remembers which main tab (agenda/todo/timers/tools) was open, so re-opening the app returns you there
// Upper bounds on user-selected files before we even attempt to read them — without
// these, selecting an absurdly large file (an oversized image, a huge JSON/CSV) would
// have the browser try to buffer the whole thing via FileReader/JSON.parse, which can
// freeze the tab or exhaust memory on a phone. These are generous, not tight: they're
// meant to stop a multi-GB accident/attack, not to constrain legitimate use.
const MAX_PHOTO_FILE_BYTES = 20 * 1024 * 1024;     // 20MB — a single profile/banner/progress photo
const MAX_BACKUP_FILE_BYTES = 500 * 1024 * 1024;   // 500MB — a full encrypted backup can hold many photos
const MAX_KEYFILE_BYTES = 1 * 1024 * 1024;         // 1MB — a real key file is only a few hundred bytes
const MAX_PROGRAM_FILE_BYTES = 5 * 1024 * 1024;    // 5MB — a .txt/.csv workout program file
function fileTooLarge(file, maxBytes){ return file.size > maxBytes; }
// KDF work factor, versioned. CURRENT_KDF_ITERATIONS is used for every NEW password
// derivation (setting/changing a password, exporting a fresh backup, enabling key-file
// mode). The actual iteration count used is always stored alongside the salt (in meta,
// in the key file, in the backup file) and read back at unlock/import time — never
// assumed — so raising CURRENT_KDF_ITERATIONS in a future update to strengthen new
// vaults can never break unlocking an older vault that was created with a lower count.
// LEGACY_KDF_ITERATIONS is the fallback used only when reading data that predates this
// field entirely (saved by an earlier version of the app that didn't store it at all) —
// it must stay 600000 forever, since that's what every pre-existing vault actually used.
const CURRENT_KDF_ITERATIONS = 600000;
const LEGACY_KDF_ITERATIONS = 600000;
const CIPHER_ID = 'AES-GCM-256';
// Set to true only while actively debugging — keeps the console clean for normal use,
// since error messages here never contain passwords/photos/personal data but there's
// no reason to print internals to anyone poking at DevTools on a shared device.
const DEBUG = false;
const MIN_KDF_ITERATIONS = 300000;
const MAX_KDF_ITERATIONS = 1000000;
function safeKdfIterations(value){
  const n = Number(value);
  return Number.isFinite(n) && n >= MIN_KDF_ITERATIONS && n <= MAX_KDF_ITERATIONS ? Math.floor(n) : LEGACY_KDF_ITERATIONS;
}

function dbg(...args){ if(DEBUG) console.error(...args); }

let cryptoKey = null; // set once unlocked with the user's password, held only in memory

// Shows a small 🔓 badge in the topbar whenever the session key is live in memory (i.e. a
// password is set AND the app is currently unlocked), so it's visually obvious your data
// is decrypted right now rather than a silent invisible state. Hidden when no password is
// set (nothing to unlock) or while the lock screen is up.
function updateLockIndicator(){
  const el = document.getElementById('sessionLockIndicator');
  if(!el) return;
  const meta = getMeta();
  el.style.display = (meta.locked && cryptoKey) ? 'inline-flex' : 'none';
}
let saveTimeout = null;
function debouncedSave(){ clearTimeout(saveTimeout); saveTimeout = setTimeout(()=>{ save(); }, 400); }
// Mobile browsers can suspend or kill a backgrounded tab before a pending debounced
// save's setTimeout ever fires, silently dropping the last edit. Flush immediately
// whenever the page is hidden/closed so nothing gets lost when closing the app.
function flushPendingSave(){ if(saveTimeout){ clearTimeout(saveTimeout); saveTimeout=null; save(); } }
document.addEventListener('visibilitychange', ()=>{ if(document.visibilityState==='hidden') flushPendingSave(); });
window.addEventListener('pagehide', flushPendingSave);
const PS_FIELDS = ['wBef','wAft','wsBef','wsAft','startDate','endDate'];
const PS_ID = { wBef:'psWBef',wAft:'psWAft',wsBef:'psWsBef',wsAft:'psWsAft',startDate:'psStartDate',endDate:'psEndDate' };

function getMeta(){ try{ return JSON.parse(localStorage.getItem(META_KEY) || '{}'); }catch(e){ return {}; } }
function setMeta(m){ try{ localStorage.setItem(META_KEY, JSON.stringify(m)); }catch(e){} }

// ── Encryption helpers (Web Crypto: PBKDF2 → AES-GCM, fully offline/local) ──
function bufToB64(buf){
  // Chunked on purpose: spreading a whole large buffer into String.fromCharCode(...bytes)
  // blows the call-stack/argument limit once files get into the multi-MB range (e.g. video
  // banners), which silently failed saves before. 32KB chunks stay well under that limit.
  const bytes = new Uint8Array(buf);
  const chunkSize = 0x8000;
  let binary = '';
  for(let i=0; i<bytes.length; i+=chunkSize){
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i+chunkSize));
  }
  return btoa(binary);
}
function b64ToBuf(b64){ const bin = atob(b64); const arr = new Uint8Array(bin.length); for(let i=0;i<bin.length;i++) arr[i]=bin.charCodeAt(i); return arr.buffer; }
async function deriveKey(password, saltB64, iterations = CURRENT_KDF_ITERATIONS){
  const salt = b64ToBuf(saltB64);
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey('raw', enc.encode(password), {name:'PBKDF2'}, false, ['deriveKey']);
  return crypto.subtle.deriveKey(
    { name:'PBKDF2', salt, iterations, hash:'SHA-256' },
    keyMaterial,
    { name:'AES-GCM', length:256 },
    false,
    ['encrypt','decrypt']
  );
}
async function encryptState(obj, key){
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const enc = new TextEncoder().encode(JSON.stringify(obj));
  const cipherBuf = await crypto.subtle.encrypt({name:'AES-GCM', iv}, key, enc);
  return { enc:true, cipher:CIPHER_ID, iv: bufToB64(iv), data: bufToB64(cipherBuf) };
}
async function decryptState(blob, key){
  // blob.cipher is absent on data written before this field existed — that's fine,
  // AES-GCM-256 is the only scheme this app has ever used. It's only an error if a
  // FUTURE version of this app introduces a new cipher id and this (older) code then
  // encounters it — better to fail clearly here than silently decrypt garbage.
  if(blob.cipher && blob.cipher !== CIPHER_ID){
    throw new Error('Unsupported encryption format: ' + blob.cipher);
  }
  const iv = new Uint8Array(b64ToBuf(blob.iv));
  const cipherBuf = b64ToBuf(blob.data);
  const plainBuf = await crypto.subtle.decrypt({name:'AES-GCM', iv}, key, cipherBuf);
  return JSON.parse(new TextDecoder().decode(plainBuf));
}

// ── Optional 2nd factor: "key file" ──
// Normally the AES-GCM key used above IS deriveKey(password, salt) directly ("classic"
// mode) — so anyone who reads localStorage AND guesses/obtains the password can decrypt.
// In key-file mode the AES key is instead a random 256-bit key, generated locally and
// never derived from the password at all. That random "data key" is wrapped (encrypted)
// under a *separate* password-derived "wrapping key", and the wrapped result — together
// with the salt used to derive the wrapping key — is saved ONLY inside a small JSON file
// the user downloads. None of that ever touches localStorage. So local storage alone
// (e.g. read via an XSS bug, or a copied browser profile) is never enough by itself:
// unlocking needs both the password AND that downloaded file.
async function generateDataKey(){
  return crypto.subtle.generateKey({name:'AES-GCM', length:256}, true, ['encrypt','decrypt']);
}
async function exportKeyB64(key){
  return bufToB64(await crypto.subtle.exportKey('raw', key));
}
async function importKeyB64(b64){
  return crypto.subtle.importKey('raw', b64ToBuf(b64), {name:'AES-GCM'}, true, ['encrypt','decrypt']);
}
async function wrapDataKey(dataKey, wrappingKey){
  return encryptState({ k: await exportKeyB64(dataKey) }, wrappingKey);
}
async function unwrapDataKey(blob, wrappingKey){
  const obj = await decryptState(blob, wrappingKey);
  return importKeyB64(obj.k);
}
function downloadJSONFile(obj, filename){
  const fileBlob = new Blob([JSON.stringify(obj)], {type:'application/json'});
  const url = URL.createObjectURL(fileBlob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(()=>URL.revokeObjectURL(url), 1000);
}
function keyFileDownloadName(prefix){
  return `${prefix}-${new Date().toISOString().slice(0,10)}.json`;
}

// ── Photo storage: IndexedDB (better suited to many/larger images than localStorage),
//    with each entry encrypted the same way as the main state whenever a password is set ──
const PHOTO_DB_NAME = 'beerleertPhotosDB';
const PHOTO_STORE = 'photos';
function openPhotoDB(){
  return new Promise((resolve, reject)=>{
    try{
      const req = indexedDB.open(PHOTO_DB_NAME, 1);
      req.onupgradeneeded = (e)=>{
        const db = e.target.result;
        if(!db.objectStoreNames.contains(PHOTO_STORE)) db.createObjectStore(PHOTO_STORE, {keyPath:'id'});
      };
      req.onsuccess = ()=>resolve(req.result);
      req.onerror = ()=>reject(req.error);
    }catch(e){ reject(e); }
  });
}
async function idbPutRaw(id, dataStr){
  const db = await openPhotoDB();
  return new Promise((resolve,reject)=>{
    const tx = db.transaction(PHOTO_STORE,'readwrite');
    tx.objectStore(PHOTO_STORE).put({id, data:dataStr});
    tx.oncomplete = ()=>resolve(true);
    tx.onerror = ()=>reject(tx.error);
  });
}
async function idbGetRaw(id){
  const db = await openPhotoDB();
  return new Promise((resolve,reject)=>{
    const tx = db.transaction(PHOTO_STORE,'readonly');
    const req = tx.objectStore(PHOTO_STORE).get(id);
    req.onsuccess = ()=>resolve(req.result ? req.result.data : null);
    req.onerror = ()=>reject(req.error);
  });
}
async function idbDeleteRaw(id){
  const db = await openPhotoDB();
  return new Promise((resolve,reject)=>{
    const tx = db.transaction(PHOTO_STORE,'readwrite');
    tx.objectStore(PHOTO_STORE).delete(id);
    tx.oncomplete = ()=>resolve(true);
    tx.onerror = ()=>reject(tx.error);
  });
}
function idbDeleteAllPhotos(){
  return new Promise((resolve)=>{
    try{
      const req = indexedDB.deleteDatabase(PHOTO_DB_NAME);
      req.onsuccess = ()=>resolve(true);
      req.onerror = ()=>resolve(false);
      req.onblocked = ()=>resolve(false);
    }catch(e){ resolve(false); }
  });
}
async function idbPutPhotoSecure(id, dataUrl){
  if(cryptoKey){
    const blob = await encryptState({data:dataUrl}, cryptoKey);
    return idbPutRaw(id, JSON.stringify(blob));
  }
  return idbPutRaw(id, dataUrl);
}
// Key-parametrized versions (used for re-encrypting existing photos when the password
// is set/changed/removed, since at that moment we need to work with BOTH the old and
// new key rather than just whatever `cryptoKey` currently holds).
async function encryptWithKey(dataUrl, key){
  if(!key) return dataUrl;
  const blob = await encryptState({data:dataUrl}, key);
  return JSON.stringify(blob);
}
async function decryptWithKey(raw, key){
  if(!raw || !key) return null;
  try{
    const blob = JSON.parse(raw);
    if(blob && blob.enc){
      const decrypted = await decryptState(blob, key);
      return isSafeImageDataUrl(decrypted.data) ? decrypted.data : null;
    }
  }catch(e){ /* malformed/legacy plaintext data is rejected by design */ }
  return null;
}
function isSafeImageDataUrl(dataUrl){
  return typeof dataUrl === 'string' && /^data:image\/(?:png|jpeg|webp|gif);base64,[A-Za-z0-9+/=]+$/i.test(dataUrl);
}
async function idbGetPhotoSecure(id){
  if(!id) return null;
  let raw;
  try{ raw = await idbGetRaw(id); }catch(e){ return null; }
  if(!raw) return null;
  if(cryptoKey) return decryptWithKey(raw, cryptoKey);
  return isSafeImageDataUrl(raw) ? raw : null;
}
// Re-encrypts every stored photo from oldKey to newKey (either may be null, meaning
// "unencrypted"). Called whenever a password is set, changed, or removed, so photos
// already in IndexedDB never get orphaned under a key we're about to discard.
async function reencryptAllPhotos(oldKey, newKey){
  const refOf = p => (typeof p === 'string' ? p : (p && p.ref));
  const refs = [...state.photos.before.map(refOf), ...state.photos.after.map(refOf)];
  if(state.profile.photoId) refs.push(state.profile.photoId);
  for(const ref of refs){
    if(!ref || isDataUrl(ref)) continue; // inline fallback photos live inside `state` itself and are already covered by the normal state encryption
    try{
      const raw = await idbGetRaw(ref);
      if(!raw) continue;
      let plain = null;
      if(oldKey){
        plain = await decryptWithKey(raw, oldKey);
      } else if(isSafeImageDataUrl(raw)){
        // Legacy photo entry: older builds stored data URLs directly in IndexedDB.
        plain = raw;
      }
      if(plain === null) continue; // couldn't read it under the old key — leave it untouched rather than destroy it
      const newRaw = await encryptWithKey(plain, newKey);
      await idbPutRaw(ref, newRaw);
    }catch(e){ dbg('Could not re-encrypt photo', ref, e); }
  }
}
function isDataUrl(s){ return typeof s === 'string' && s.indexOf('data:') === 0; }

// Some browsers (notably Firefox, when a file is opened directly as file:// rather than
// served over http/https) silently fail to persist IndexedDB writes. storePhoto() writes to
// IndexedDB and immediately reads it back to CONFIRM it actually stuck; if it didn't, it falls
// back to storing the photo inline (as a plain data URL) so photos still save either way.
// fetchPhoto() transparently handles both kinds of reference.
async function storePhoto(dataUrl){
  const id = 'ph_' + Date.now() + '_' + Math.floor(Math.random()*1000000);
  try{
    await idbPutPhotoSecure(id, dataUrl);
    const check = await idbGetPhotoSecure(id);
    if(!check) throw new Error('IndexedDB write did not persist');
    return id;
  }catch(e){
    dbg('IndexedDB unavailable/unreliable here — saving photo inline instead.', e);
    return dataUrl;
  }
}
async function fetchPhoto(ref){
  if(!ref) return null;
  if(isDataUrl(ref)) return ref;
  try{ return await idbGetPhotoSecure(ref); }catch(e){ return null; }
}
async function deletePhotoRef(ref){
  if(!ref || isDataUrl(ref)) return; // inline photos live in `state` itself, nothing to delete in IDB
  try{ await idbDeleteRaw(ref); }catch(e){}
}
function todayISO(){
  const d = new Date();
  return `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`;
}

// One-time migration: older saves kept full base64 photos inside `state` itself, and photo
// list entries used to be plain ref strings with no date. Normalize everything to
// { ref, date } objects and move any raw base64 into IndexedDB.
async function migratePhotosToIDB(){
  let changed = false;
  for(const cat of ['before','after']){
    const arr = state.photos[cat] || (state.photos[cat] = []);
    for(let i=0;i<arr.length;i++){
      const item = arr[i];
      if(typeof item === 'string'){
        let ref = item;
        if(isDataUrl(item)){
          try{ ref = await storePhoto(item); }catch(e){ dbg('Photo migration failed', e); }
        }
        arr[i] = { ref, date: '' };
        changed = true;
      } else if(item && typeof item === 'object' && isDataUrl(item.ref)){
        try{
          const newRef = await storePhoto(item.ref);
          if(newRef !== item.ref){ item.ref = newRef; changed = true; }
        }catch(e){ dbg('Photo migration failed', e); }
      }
    }
  }
  if(state.profile && isDataUrl(state.profile.photo)){
    try{
      const ref = await storePhoto(state.profile.photo);
      state.profile.photoId = ref;
      state.profile.photo = null;
      changed = true;
    }catch(e){ dbg('Avatar migration failed', e); }
  }
  if(changed) await save();
}

async function save(){
  PS_FIELDS.forEach(f=>{ const el = document.getElementById(PS_ID[f]); if(el) state.physicalStats[f] = el.value; });
  try{
    // Password/key-file protection is optional. Without it, keep the original
    // app behaviour and store the user's data locally as normal plaintext.
    const payload = cryptoKey ? await encryptState(state, cryptoKey) : state;
    localStorage.setItem(STORE_KEY, JSON.stringify(payload));
    return true;
  }catch(e){
    dbg('Save failed', e);
    const isQuota = e && (e.name === 'QuotaExceededError' || e.code === 22 || e.code === 1014);
    alert(isQuota ? t('err_quota_full') : t('err_savefailed'));
  }
}

// Populate the Physical Stats inputs from `state` as early as possible — before
// any other startup code runs. save() reads these fields back into state, so if
// something calls save() early (during startup) while these are still blank,
// it would silently overwrite freshly-loaded data with blanks.
function hydratePhysicalStatsFields(){
  PS_FIELDS.forEach(f=>{ const el = document.getElementById(PS_ID[f]); if(el) el.value = state.physicalStats[f]||''; });
}

// ── Boot sequence: check for a locked (encrypted) profile before loading anything ──
async function bootstrap(){
  const meta = getMeta();
  if(meta.locked && (meta.salt || meta.keyFileEnabled)){
    document.getElementById('lockScreen').classList.add('open');
    const kfRow = document.getElementById('lockKeyFileRow');
    if(kfRow) kfRow.style.display = meta.keyFileEnabled ? 'block' : 'none';
    if(!meta.keyFileEnabled) document.getElementById('lockPasswordInput').focus();
  } else {
    let loadedLegacyPlaintext = false;
    try{
      const raw = localStorage.getItem(STORE_KEY);
      if(raw){
        const parsed = JSON.parse(raw);
        if(!parsed.enc){ state = Object.assign(state, parsed); loadedLegacyPlaintext = true; }
      }
      // Plaintext storage is allowed when the user has not enabled App Lock.
    }catch(e){}
    hydratePhysicalStatsFields();
    startApp();
  }
}

// Holds the parsed key file while the person is on the lock screen, until they hit
// Unlock — never written to localStorage, just kept in memory for this one attempt.
let pendingLockKeyFile = null;
function handleLockKeyFileSelect(input){
  const file = input.files[0];
  if(!file) return;
  if(fileTooLarge(file, MAX_KEYFILE_BYTES)){
    const nameEl = document.getElementById('lockKeyFileName');
    pendingLockKeyFile = null;
    if(nameEl){ nameEl.textContent = t('err_keyfile_bad'); nameEl.classList.add('empty'); }
    input.value = '';
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    const nameEl = document.getElementById('lockKeyFileName');
    try{
      const parsed = JSON.parse(e.target.result);
      if(!parsed || parsed.kind !== 'beerleert-keyfile' || !parsed.salt || !parsed.iv || !parsed.data) throw new Error('bad format');
      pendingLockKeyFile = parsed;
      if(nameEl){ nameEl.textContent = file.name; nameEl.classList.remove('empty'); }
    }catch(err){
      pendingLockKeyFile = null;
      if(nameEl){ nameEl.textContent = t('err_keyfile_bad'); nameEl.classList.add('empty'); }
    }
  };
  reader.readAsText(file);
  input.value = '';
}
async function attemptUnlock(){
  const pw = document.getElementById('lockPasswordInput').value;
  const meta = getMeta();
  const errEl = document.getElementById('lockError');
  errEl.style.display = 'none';
  if(meta.keyFileEnabled && !pendingLockKeyFile){
    errEl.textContent = t('err_keyfile_missing');
    errEl.style.display = 'block';
    return;
  }
  try{
    const key = meta.keyFileEnabled
      ? await unwrapDataKey({iv:pendingLockKeyFile.iv, data:pendingLockKeyFile.data}, await deriveKey(pw, pendingLockKeyFile.salt, safeKdfIterations(pendingLockKeyFile.iterations)))
      : await deriveKey(pw, meta.salt, safeKdfIterations(meta.kdfIterations));
    const raw = localStorage.getItem(STORE_KEY);
    const blob = raw ? JSON.parse(raw) : null;
    if(blob && blob.enc){
      const decrypted = await decryptState(blob, key);
      state = Object.assign(state, decrypted);
    }
    cryptoKey = key;
    pendingLockKeyFile = null;
    hydratePhysicalStatsFields();
    await migratePhotosToIDB();
    document.getElementById('lockScreen').classList.remove('open');
    resetActivityTimer();
    startApp();
  }catch(e){
    errEl.textContent = meta.keyFileEnabled ? t('err_keyfile_wrong') : t('lock_error');
    errEl.style.display = 'block';
    document.getElementById('lockPasswordInput').value = '';
    document.getElementById('lockPasswordInput').focus();
  }
}

async function confirmResetApp(){
  if(!confirm(t('confirm_erase_pw'))) return;
  localStorage.removeItem(STORE_KEY);
  localStorage.removeItem(META_KEY);
  try{ await idbDeleteAllPhotos(); }catch(e){}
  location.reload();
}

// ── App Lock card (Profile tab) ──
const AUTO_LOCK_DEFAULT_MIN = 5;
function renderLockCard(){
  const meta = getMeta();
  const statusEl = document.getElementById('lockStatusText');
  const row = document.getElementById('lockBtnRow');
  const autoRow = document.getElementById('autoLockRow');
  if(meta.locked){
    statusEl.innerHTML = meta.keyFileEnabled
      ? escHtml(t('lock_encrypted_text')) + '<br>' + escHtml(t('lock_keyfile_active_text'))
      : escHtml(t('lock_encrypted_text'));
    row.innerHTML = `
      <button class="btn btn-ghost btn-sm" data-action="openSetPasswordModal">${t('btn_changepassword')}</button>
      <button class="btn btn-ghost btn-sm" data-action="removePassword">${t('btn_removepassword')}</button>
    `;
    autoRow.style.display = 'block';
    document.getElementById('autoLockSelect').value = String(meta.autoLockMinutes ?? AUTO_LOCK_DEFAULT_MIN);
  } else {
    statusEl.textContent = t('lock_nopass_text');
    row.innerHTML = `<button class="btn btn-sm" data-action="openSetPasswordModal">${t('btn_setpassword')}</button>`;
    autoRow.style.display = 'none';
  }
}
function updateAutoLockSetting(v){
  const meta = getMeta();
  meta.autoLockMinutes = parseInt(v) || 0;
  setMeta(meta);
  resetActivityTimer();
}
function openSetPasswordModal(){
  const meta = getMeta();
  document.getElementById('pwModalTitle').textContent = meta.locked ? t('modal_changepw_title') : t('modal_setpw_title');
  document.getElementById('pwNew1').value = '';
  document.getElementById('pwNew2').value = '';
  document.getElementById('pwError').style.display = 'none';
  const kfCheckbox = document.getElementById('pwUseKeyFile');
  if(kfCheckbox) kfCheckbox.checked = !!meta.keyFileEnabled;
  document.getElementById('pwModal').classList.add('open');
}
function closePwModal(){ document.getElementById('pwModal').classList.remove('open'); }
async function savePwModal(){
  const p1 = document.getElementById('pwNew1').value;
  const p2 = document.getElementById('pwNew2').value;
  const errEl = document.getElementById('pwError');
  if(!p1 || p1.length < 12){ errEl.textContent = t('err_pwlen'); errEl.style.display='block'; return; }
  if(p1 !== p2){ errEl.textContent = t('err_pwmatch'); errEl.style.display='block'; return; }
  if(!window.crypto || !window.crypto.subtle){ errEl.textContent = t('err_nocrypto'); errEl.style.display='block'; return; }
  const useKeyFile = !!(document.getElementById('pwUseKeyFile') && document.getElementById('pwUseKeyFile').checked);
  const meta = getMeta();
  let newKey, newMeta;
  if(useKeyFile){
    // Random data key, independent of the password — wrapped under a password-derived
    // key and saved only in the downloaded file, never in meta/localStorage.
    newKey = await generateDataKey();
    const wrapSaltBytes = crypto.getRandomValues(new Uint8Array(16));
    const wrapSaltB64 = bufToB64(wrapSaltBytes.buffer);
    const wrappingKey = await deriveKey(p1, wrapSaltB64);
    const wrapped = await wrapDataKey(newKey, wrappingKey);
    downloadJSONFile({ v:1, kind:'beerleert-keyfile', salt:wrapSaltB64, iterations:CURRENT_KDF_ITERATIONS, iv:wrapped.iv, data:wrapped.data }, keyFileDownloadName('beerleert-keyfile'));
    newMeta = { locked:true, keyFileEnabled:true, autoLockMinutes: meta.autoLockMinutes ?? AUTO_LOCK_DEFAULT_MIN };
  } else {
    const saltBytes = crypto.getRandomValues(new Uint8Array(16));
    const saltB64 = bufToB64(saltBytes.buffer);
    newKey = await deriveKey(p1, saltB64);
    newMeta = { locked:true, keyFileEnabled:false, salt: saltB64, kdfIterations: CURRENT_KDF_ITERATIONS, autoLockMinutes: meta.autoLockMinutes ?? AUTO_LOCK_DEFAULT_MIN };
  }
  const oldKey = cryptoKey; // null if this is the first time a password is being set
  await reencryptAllPhotos(oldKey, newKey);
  cryptoKey = newKey;
  setMeta(newMeta);
  await save();
  closePwModal();
  renderLockCard();
  updateLockIndicator();
  resetActivityTimer();
  if(useKeyFile) alert(t('keyfile_download_notice'));
}
async function removePassword(){
  const meta = getMeta();
  if(!meta.locked) return;
  if(!confirm(t('confirm_removepw'))) return;
  try{
    // The app is already unlocked here, so the current in-memory state is safe to
    // convert back to the original optional-lock behaviour. Photos are converted too.
    await reencryptAllPhotos(cryptoKey, null);
    cryptoKey = null;
    pendingLockKeyFile = null;
    localStorage.removeItem(META_KEY);
    await save();
    renderLockCard();
    updateLockIndicator();
    resetActivityTimer();
  }catch(e){
    dbg('Could not remove app lock', e);
    alert(t('err_savefailed'));
  }
}

// ── Danger zone: erase everything (requires typing ERASE to confirm) ──
function openEraseModal(){
  document.getElementById('eraseConfirmInput').value = '';
  const btn = document.getElementById('eraseConfirmBtn');
  btn.disabled = true; btn.style.opacity = '.4';
  document.getElementById('eraseModal').classList.add('open');
}
function closeEraseModal(){ document.getElementById('eraseModal').classList.remove('open'); }
function checkEraseConfirmInput(){
  const ok = document.getElementById('eraseConfirmInput').value.trim() === 'ERASE';
  const btn = document.getElementById('eraseConfirmBtn');
  btn.disabled = !ok;
  btn.style.opacity = ok ? '1' : '.4';
}
async function performEraseAll(){
  if(document.getElementById('eraseConfirmInput').value.trim() !== 'ERASE') return;
  try{ localStorage.removeItem(STORE_KEY); }catch(e){}
  try{ localStorage.removeItem(META_KEY); }catch(e){}
  try{ await idbDeleteAllPhotos(); }catch(e){}
  location.reload();
}

function openExternalProgramModal(){
  document.getElementById('externalProgramModal').classList.add('open');
}
function closeExternalProgramModal(){
  document.getElementById('externalProgramModal').classList.remove('open');
}

// ── Export / Import: encrypted backup so data can move between browsers/devices ──
let pendingImportBlob = null;
let pendingImportKeyFile = null;
function updateImportConfirmState(){
  const btn = document.getElementById('importConfirmBtn');
  if(!btn) return;
  const needsKeyFile = pendingImportBlob && pendingImportBlob.kind === 'beerleert-backup';
  const ok = !needsKeyFile || !!pendingImportKeyFile;
  btn.disabled = !ok;
  btn.style.opacity = ok ? '1' : '.4';
}
function handleImportKeyFileSelect(input){
  const file = input.files[0];
  if(!file) return;
  if(fileTooLarge(file, MAX_KEYFILE_BYTES)){
    const nameEl = document.getElementById('importKeyFileName');
    pendingImportKeyFile = null;
    if(nameEl){ nameEl.textContent = t('err_keyfile_bad'); nameEl.classList.add('empty'); }
    updateImportConfirmState();
    input.value = '';
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    const nameEl = document.getElementById('importKeyFileName');
    try{
      const parsed = JSON.parse(e.target.result);
      if(!parsed || parsed.kind !== 'beerleert-keyfile' || !parsed.salt || !parsed.iv || !parsed.data) throw new Error('bad format');
      pendingImportKeyFile = parsed;
      if(nameEl){ nameEl.textContent = file.name; nameEl.classList.remove('empty'); }
    }catch(err){
      pendingImportKeyFile = null;
      if(nameEl){ nameEl.textContent = t('err_keyfile_bad'); nameEl.classList.add('empty'); }
    }
    updateImportConfirmState();
  };
  reader.readAsText(file);
  input.value = '';
}

function openExportModal(){
  document.getElementById('exportPasswordInput').value = '';
  document.getElementById('exportPasswordConfirmInput').value = '';
  const kfCheckbox = document.getElementById('exportUseKeyFile');
  if(kfCheckbox) kfCheckbox.checked = false;
  const errEl = document.getElementById('exportError');
  errEl.style.display = 'none';
  const btn = document.getElementById('exportConfirmBtn');
  btn.disabled = true; btn.style.opacity = '.4';
  document.getElementById('exportModal').classList.add('open');
}
function closeExportModal(){ document.getElementById('exportModal').classList.remove('open'); }
function checkExportPasswordMatch(){
  const p1 = document.getElementById('exportPasswordInput').value;
  const p2 = document.getElementById('exportPasswordConfirmInput').value;
  const ok = p1.length >= 12 && p1 === p2;
  const btn = document.getElementById('exportConfirmBtn');
  btn.disabled = !ok; btn.style.opacity = ok ? '1' : '.4';
}
async function gatherExportPhotos(){
  const photos = { profile:null, banner:null, before:[], after:[] };
  if(state.profile.photoId) photos.profile = await fetchPhoto(state.profile.photoId);
  if(state.profile.bannerBgPhotoId) photos.banner = await fetchPhoto(state.profile.bannerBgPhotoId);
  for(const item of state.photos.before){
    photos.before.push({ date:item.date, data: await fetchPhoto(item.ref) });
  }
  for(const item of state.photos.after){
    photos.after.push({ date:item.date, data: await fetchPhoto(item.ref) });
  }
  return photos;
}
async function performExport(){
  const p1 = document.getElementById('exportPasswordInput').value;
  const p2 = document.getElementById('exportPasswordConfirmInput').value;
  const errEl = document.getElementById('exportError');
  if(!p1 || p1.length < 12){ errEl.textContent = t('err_pwlen'); errEl.style.display='block'; return; }
  if(p1 !== p2){ errEl.textContent = t('err_pwmatch'); errEl.style.display='block'; return; }
  if(!window.crypto || !window.crypto.subtle){ errEl.textContent = t('err_nocrypto'); errEl.style.display='block'; return; }
  errEl.style.display = 'none';
  const useKeyFile = !!(document.getElementById('exportUseKeyFile') && document.getElementById('exportUseKeyFile').checked);
  const btn = document.getElementById('exportConfirmBtn');
  const originalLabel = btn.textContent;
  btn.disabled = true; btn.textContent = '…';
  try{
    const photos = await gatherExportPhotos();
    const payload = { v:1, exportedAt:new Date().toISOString(), state:JSON.parse(JSON.stringify(state)), photos };
    const dateStamp = new Date().toISOString().slice(0,10);
    if(useKeyFile){
      // Backup data encrypted with a random key; that key is only recoverable by
      // combining the password with the SEPARATE key file below — losing either one
      // (without the other) makes this backup file alone undecryptable.
      const dataKey = await generateDataKey();
      const blob = await encryptState(payload, dataKey);
      downloadJSONFile({ v:2, kind:'beerleert-backup', iv:blob.iv, data:blob.data }, `beerleert-backup-${dateStamp}.json`);
      const wrapSaltBytes = crypto.getRandomValues(new Uint8Array(16));
      const wrapSaltB64 = bufToB64(wrapSaltBytes.buffer);
      const wrappingKey = await deriveKey(p1, wrapSaltB64);
      const wrapped = await wrapDataKey(dataKey, wrappingKey);
      downloadJSONFile({ v:1, kind:'beerleert-keyfile', salt:wrapSaltB64, iterations:CURRENT_KDF_ITERATIONS, iv:wrapped.iv, data:wrapped.data }, `beerleert-backup-keyfile-${dateStamp}.json`);
      closeExportModal();
      alert(t('keyfile_download_notice_backup'));
    } else {
      const saltBytes = crypto.getRandomValues(new Uint8Array(16));
      const saltB64 = bufToB64(saltBytes.buffer);
      const key = await deriveKey(p1, saltB64);
      const blob = await encryptState(payload, key);
      downloadJSONFile({ v:1, salt:saltB64, iterations:CURRENT_KDF_ITERATIONS, iv:blob.iv, data:blob.data }, `beerleert-backup-${dateStamp}.json`);
      closeExportModal();
    }
  }catch(err){
    dbg('Export failed', err);
    errEl.textContent = t('err_exportfailed'); errEl.style.display = 'block';
  }finally{
    btn.disabled = false; btn.textContent = originalLabel;
  }
}
function handleImportFile(input){
  const file = input.files[0];
  if(!file) return;
  if(fileTooLarge(file, MAX_BACKUP_FILE_BYTES)){
    alert(t('err_file_toolarge_backup'));
    input.value = '';
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    try{
      const parsed = JSON.parse(e.target.result);
      const isClassic = parsed && parsed.salt && parsed.iv && parsed.data;
      const needsKeyFile = parsed && parsed.kind === 'beerleert-backup' && parsed.iv && parsed.data;
      if(!isClassic && !needsKeyFile) throw new Error('bad format');
      pendingImportBlob = parsed;
      pendingImportKeyFile = null;
      document.getElementById('importPasswordInput').value = '';
      document.getElementById('importError').style.display = 'none';
      const kfRow = document.getElementById('importKeyFileRow');
      if(kfRow) kfRow.style.display = needsKeyFile ? 'block' : 'none';
      const kfNameEl = document.getElementById('importKeyFileName');
      if(kfNameEl){ kfNameEl.textContent = ''; kfNameEl.classList.remove('empty'); }
      updateImportConfirmState();
      document.getElementById('importModal').classList.add('open');
    }catch(err){
      alert(t('err_importbadfile'));
    }
  };
  reader.readAsText(file);
  input.value = '';
}
function sanitizeImportedState(candidate){
  if(!candidate || typeof candidate !== 'object') throw new Error('bad state');
  if(!candidate.profile || typeof candidate.profile !== 'object') candidate.profile = {};
  candidate.profile.bannerBgType = ['default','solid','image'].includes(candidate.profile.bannerBgType) ? candidate.profile.bannerBgType : 'default';
  candidate.profile.accent = ['orange','blue','purple','red','green','pink','yellow','custom'].includes(candidate.profile.accent) ? candidate.profile.accent : 'orange';
  candidate.profile.theme = ['orange','discord','midnight','light','sunset','customfull'].includes(candidate.profile.theme) ? candidate.profile.theme : 'orange';
  candidate.profile.customThemeColor = safeHexColor(candidate.profile.customThemeColor, null);
  candidate.profile.customBgColor = safeHexColor(candidate.profile.customBgColor, null);
  candidate.profile.customCardColor = safeHexColor(candidate.profile.customCardColor, null);
  candidate.profile.customTextColor = safeHexColor(candidate.profile.customTextColor, null);
  candidate.profile.bannerBgColor = safeHexColor(candidate.profile.bannerBgColor, '#1a1e24');
  return candidate;
}

function closeImportModal(){
  document.getElementById('importModal').classList.remove('open');
  pendingImportBlob = null;
  pendingImportKeyFile = null;
}
async function performImport(){
  if(!pendingImportBlob) return;
  const pw = document.getElementById('importPasswordInput').value;
  const errEl = document.getElementById('importError');
  if(!window.crypto || !window.crypto.subtle){ errEl.textContent = t('err_nocrypto'); errEl.style.display='block'; return; }
  const needsKeyFile = pendingImportBlob.kind === 'beerleert-backup';
  if(needsKeyFile && !pendingImportKeyFile){ errEl.textContent = t('err_keyfile_missing'); errEl.style.display='block'; return; }
  const btn = document.getElementById('importConfirmBtn');
  btn.disabled = true;
  try{
    const key = needsKeyFile
      ? await unwrapDataKey({iv:pendingImportKeyFile.iv, data:pendingImportKeyFile.data}, await deriveKey(pw, pendingImportKeyFile.salt, safeKdfIterations(pendingImportKeyFile.iterations)))
      : await deriveKey(pw, pendingImportBlob.salt, safeKdfIterations(pendingImportBlob.iterations));
    const payload = await decryptState({ iv:pendingImportBlob.iv, data:pendingImportBlob.data }, key);
    if(!payload || !payload.state) throw new Error('empty payload');
    if(!confirm(t('confirm_import'))){ btn.disabled = false; updateImportConfirmState(); return; }

    const importedPhotos = payload.photos || {};
    const newState = sanitizeImportedState(Object.assign({}, state, payload.state, { profile: Object.assign({}, state.profile, (payload.state && payload.state.profile) || {}) }));
    newState.profile.photoId = isSafeImageDataUrl(importedPhotos.profile) ? await storePhoto(importedPhotos.profile) : null;
    newState.profile.bannerBgPhotoId = isSafeImageDataUrl(importedPhotos.banner) ? await storePhoto(importedPhotos.banner) : null;
    newState.photos = { before:[], after:[] };
    for(const item of (importedPhotos.before || [])){
      if(isSafeImageDataUrl(item.data)) newState.photos.before.push({ ref: await storePhoto(item.data), date:item.date });
    }
    for(const item of (importedPhotos.after || [])){
      if(isSafeImageDataUrl(item.data)) newState.photos.after.push({ ref: await storePhoto(item.data), date:item.date });
    }

    state = newState;
    await save();
    closeImportModal();
    location.reload();
  }catch(err){
    dbg('Import failed', err);
    errEl.textContent = needsKeyFile ? t('err_keyfile_wrong') : t('err_importwrongpw');
    errEl.style.display = 'block';
  }finally{
    btn.disabled = false;
    updateImportConfirmState();
  }
}

// ── Auto-lock after inactivity ──
let lastActivityTime = Date.now();
function resetActivityTimer(){ lastActivityTime = Date.now(); }
function scrubSensitiveDOM(){
  try{
    const ppImg = document.getElementById('ppImg'); if(ppImg) ppImg.src = '';
    const topbarImg = document.getElementById('topbarAvatarImg'); if(topbarImg) topbarImg.src = '';
    const lbImg = document.getElementById('lbImg'); if(lbImg) lbImg.src = '';
    const beforeScroll = document.getElementById('beforeScroll'); if(beforeScroll) beforeScroll.innerHTML = '';
    const afterScroll = document.getElementById('afterScroll'); if(afterScroll) afterScroll.innerHTML = '';
    const notesPreview = document.getElementById('notesPreviewTxt'); if(notesPreview) notesPreview.textContent = '';
    const notesListEl = document.getElementById('notesList'); if(notesListEl) notesListEl.innerHTML = '';
    const goalsList = document.getElementById('profileGoalsList'); if(goalsList) goalsList.innerHTML = '';
    PS_FIELDS.forEach(f=>{ const el = document.getElementById(PS_ID[f]); if(el) el.value = ''; });
  }catch(e){}
}
async function checkAutoLock(){
  const meta = getMeta();
  if(!meta.locked || !cryptoKey) return;
  const minutes = meta.autoLockMinutes ?? AUTO_LOCK_DEFAULT_MIN;
  if(!minutes) return; // 0 = never
  if(Date.now() - lastActivityTime >= minutes * 60000){
    // Flush any pending debounced save FIRST, while the key is still valid — otherwise a
    // save that fires after cryptoKey is cleared would silently write that data unencrypted.
    clearTimeout(saveTimeout);
    await save();
    cryptoKey = null;
    updateLockIndicator();
    scrubSensitiveDOM();
    document.getElementById('lockPasswordInput').value = '';
    document.getElementById('lockError').style.display = 'none';
    document.getElementById('lockScreen').classList.add('open');
  }
}

// ═══════════════════════════ LANGUAGE / TRANSLATIONS ═══════════════════════════
const TRANSLATIONS = {
  en: { tt_zoomout:"Zoom out", tt_zoomin:"Zoom in", pe_btn_flip_plain:"Flip", btn_remove_plain:"Remove", btn_switchphoto:"Switch", tab_agenda:"Agenda", tab_workouts:"Workouts", tab_todo:"To-Do", tab_timers:"Timers", tab_tools:"More", tab_checkin:"Check-in", tab_checkin_btn:"📈 Check-in", card_agenda:"🗓️ Agenda", card_streak:"📈 1% Better Every Day", card_challenge:"Challenge Length", card_notes:"📝 Notes", btn_today:"Today", card_todo_board:"To-Do Board", card_countdown:"Countdown Timer", card_circuit:"Circuit Timer", card_voicecoach:"🔊 Voice Coach Circuit", card_lifting:"🔊 Voice Coach", card_goals:"🎯 My Goals, Insha'Allah", card_applock:"App Lock", card_danger:"Danger Zone", card_physstats:"Physical Stats", card_photos:"Before / After Photos", card_progress:"📈 Progress", pt_before:"Before", pt_after:"🏆 After", card_workoutprogram:"🏋️ Workout Program", hint_programcollapse:"Tap to view or edit your plan", card_calorie:"🧮 Calorie &amp; Protein Calculator", card_reportperiod:"📈 Charts and Reports", card_metric:"Choose a metric", card_trend:"Trend", card_addmeasure:"Track Additional Measurements", lbl_customgoal_ph:"Custom # of days", err_customgoal_invalid:"Enter a valid number of days (1 or more).", tt_removecustomgoal:"Remove custom challenge length", btn_set:"Set", stat_day:"Day", stat_streak:"Streak", stat_logged:"Logged", btn_start_challenge:"▶ Start Challenge Today", btn_edit_startdate:"✏️ Edit Start Date & Time", btn_reset_challenge:"↺ Reset Challenge", progress_hint:"auto-updates with your challenge", leg_notlogged:"Not logged", leg_done:"Done", notes_ph:"How's it going? Anything to remember...", cal_hasnote:"Has a note", notes_empty:"No notes yet — add your first one below.", confirm_deletenote:"Delete this note?", lbl_sleep:"Sleep (hours)", lbl_water:"Water", lbl_bottlesize:"Bottle Size (ml)", lbl_dailytarget:"Daily Target (ml)", btn_minus_bottle:"－ Bottle", btn_plus_bottle:"＋ Bottle", lbl_watersettings:"💧 Water Cup Sizes", lbl_cupxs:"XS (ml)", lbl_cupsmall:"S (ml)", lbl_cupmedium:"M (ml)", lbl_cuplarge:"L (ml)", lbl_cupxl:"XL (ml)", btn_cupxs:"XS", btn_cupsmall:"S", btn_cupmedium:"M", btn_cuplarge:"L", btn_cupxl:"XL", lbl_measurements:"Measurements", lbl_food:"Food Eaten", ph_addfood:"Add food...", btn_add:"Add", lbl_notes:"Notes", ph_daynotes:"Anything else about this day...", btn_done:"Done", modal_photodate:"Photo Date", lbl_date:"Date", btn_cancel:"Cancel", btn_save:"Save", modal_startdatetime:"Edit Start Date & Time", lbl_time:"Time", btn_new:"+ New", btn_del:"Del", btn_import:"📂 Import Program (.txt/.csv)", btn_template_txt:"📄 Download Guide (.txt)", btn_template_csv:"📊 Download Guide (.csv)", btn_addblock:"+ Add Block/Week", btn_delblock:"Delete Block", ph_blockinfo:"What's this week about?", btn_addday:"+ Add Day", btn_delday:"Delete Day", btn_markrest:"Mark Rest Day", btn_unmarkrest:"Unmark Rest Day", ph_exname:"Exercise name", ph_exdetail:"Sets × reps · rest", ph_extip:"Tip / form cue (optional)", badge_nosetsrest:"No sets/rest set", btn_setsrest:"⚙ Sets & Rest", btn_addex:"+ Add Exercise", btn_marktoday:"✓ Mark Today's Workout Done", ph_restnote:"Rest day note...", modal_setsrest:"Sets & Rest", lbl_sets:"Sets", lbl_restsec:"Rest (sec)", lbl_reps:"Reps", ph_reps:"e.g. 12-20 or AMRAP", lbl_holdsec:"Hold Time (sec)", mode_reps:"🔢 Reps", mode_time:"⏱ Timed Hold", hint_setsrest:"Used by the Voice Coach Circuit and Lifting timer in the Timers tab.", ph_addtask:"Add a task...", col_todo:"To Do", col_doing:"Doing", col_done_col:"Done", lbl_minutes:"Minutes", lbl_seconds:"Seconds", btn_startword:"▶ Start", btn_pause:"⏸ Pause", btn_reset:"↺ Reset", btn_skip:"⏭ Skip", lbl_rounds:"Rounds", lbl_work:"Work (sec)", lbl_getready:"Get Ready (sec)", vc_sub:"Pick a workout day — it reads each exercise out loud and counts your work/rest.", lt_sub:"For weights — no work countdown. Tap Done after each set, then it rests and moves you to the next one.", lbl_program:"Program", lbl_block:"Block / Week", lbl_day:"Day", lbl_includewarmup:"Include Warm-up?", opt_yes:"Yes", opt_no:"No", lbl_defaultsets:"Default Sets", btn_donewithset:"✓ Done with this set", ph_yourname:"Your name", btn_settings:"⚙ Settings", sg_general:"General", sg_appearance:"Appearance", sg_data:"Data", modal_externalprogram:"📂 External Workout Program", externalprogram_hint:"Import a workout program from a .txt or .csv file, or download a blank guide to fill in and import.", btn_externalprogram:"📂 External Workout Program", btn_closemodal:"✕ Close", lbl_theme:"Accent Color", lbl_apptheme:"App Theme", lbl_bannerbg:"Banner Background", tt_editbanner:"Edit Banner", modal_bannerbg_title:"🖼 Edit Banner", pe_title_profile:"Edit Profile Picture", pe_title_progress:"Edit Photo", pe_btn_flip:"⇋ Flip", pe_btn_edit:"✏️ Edit Image", tt_editprofile:"Settings", modal_editprofile_title:"⚙ Settings", opt_bgdefault:"Default", opt_bgsolid:"Solid", opt_bgimage:"Img", btn_choosebannerimg:"🖼 Choose Image", btn_removebannerimg:"✕ Remove", lbl_customcolors:"Website Colors", lbl_colorbg:"Background", lbl_colorcard:"Cards", lbl_colortext:"Text", btn_resetcolors:"↺ Reset Colors", theme_custom:"Custom", lbl_colortagline:"Tagline", lbl_backuptransfer:"Backup &amp; Transfer", btn_exportdata:"📤 Export Data", btn_importdata:"📥 Import Data", modal_exporttitle:"📤 Export Data", export_body_text:"Bundles everything on this device — profile, photos, agenda, workouts — into one encrypted file you can move to another browser or device.", lbl_exportpassword:"Password to encrypt with", lbl_exportpasswordconfirm:"Confirm password", btn_exportnow:"Export", modal_importtitle:"📥 Import Data", import_body_text:"Enter the password you used when exporting. Importing replaces everything currently on this device.", lbl_importpassword:"Password", btn_importnow:"Decrypt &amp; Import", err_pwlen:"Password must be at least 12 characters.", err_pwmatch:"Passwords do not match.", err_nocrypto:"Encryption is not available in this browser.", err_exportfailed:"Export failed — please try again.", err_importbadfile:"This does not look like a valid backup file.", err_importwrongpw:"Incorrect password, or this file is corrupted.", confirm_import:"This will replace everything currently on this device with the imported backup. Continue?", lbl_language:"Language", lbl_clockregion:"Clock Region", danger_text:"Permanently erase everything stored on this device — profile, photos, agenda, workouts, to-do list, settings. This cannot be undone.", btn_eraseall:"Erase All Data", ph_addgoal:"Add a goal...", lbl_started:"Started", tbl_before:"Before", tbl_now:"Now", lbl_weight:"Weight", lbl_waist:"Waist", lbl_energy:"Energy (1–10)", lbl_sleepword:"Sleep", photo_before:"⏮ Before", photo_after:"🏆 After / Current", btn_addphoto:"+ Add Photo", lbl_age:"Age", lbl_gender:"Gender", opt_male:"Male", opt_female:"Female", lbl_height:"Height (cm)", lbl_weightkg:"Weight (kg)", lbl_activitylevel:"Activity Level", opt_sedentary:"Sedentary (little/no exercise)", opt_light:"Light (1–3 days/week)", opt_moderate:"Moderate (3–5 days/week)", opt_active:"Active (6–7 days/week)", opt_veryactive:"Very active (hard training + physical job)", lbl_goal:"Goal", opt_maintain:"Maintain weight", opt_lose:"Lose fat", opt_build:"Build muscle", lbl_targetrate:"Target Rate", opt_kgweek:"kg / week", opt_gweek:"grams / week", res_bmr:"BMR (at rest)", res_maint:"Maintenance calories", res_target:"Target calories / day", res_protein:"Protein / day", calc_disclaimer:"Rough general fitness guideline, not personalized medical or dietary advice. For a plan tailored to you, check with a doctor or dietitian.", tab_profile_btn:"👤 Profile", tab_fitness_btn:"🧮 Tools", tab_website_btn:"Beerleert", btn_addmeasuretype:"+ Add Measurement Type", ph_measuretype:"e.g. Chest, Arms", st_ready:"Ready", st_running:"Running", st_paused:"Paused", st_donebang:"Done!", st_getready:"Get Ready", st_work:"Work", st_rest:"Rest", st_next:"Next:", st_lifting:"Lifting", st_holding:"Holding", st_workoutcomplete:"Workout complete 🎉", st_pickday:"Pick a day above", st_warmup:"Warm-up", st_tapskip:"Tap Skip when ready to start", st_exercise:"Exercise", st_set:"Set", tagline_text:"SPORT <span class=\"tag-dot\">•</span> EAT <span class=\"tag-dot\">•</span> SLEEP", lbl_days:"days", btn_started_prefix:"✓ Started", lbl_hours:"hours", lock_encrypted_text:"Your data is encrypted on this device with a password.", lock_nopass_text:"App Lock is optional — your data is stored locally without encryption until you enable it.", btn_changepassword:"🔑 Change Password", btn_removepassword:"Remove Password", btn_setpassword:"🔒 Set Password", goals_empty:"No goals yet — add what you're working toward.", modal_erasetitle:"⚠️ Erase All Data", erase_body_text:"This permanently deletes your profile, photos, agenda, workouts, to-do list, and settings from this device. There is no backup — <b>this cannot be undone.</b>", lbl_typeerase:"Type ERASE to confirm", btn_eraseeverything:"Erase Everything", lbl_autolock:"Auto-lock after inactivity", opt_autolock_never:"Never", opt_autolock_1min:"1 minute", opt_autolock_5min:"5 minutes", opt_autolock_15min:"15 minutes", opt_autolock_30min:"30 minutes", unit_kcal:"kcal", unit_g:"g", food_empty:"No food logged yet.", kb_empty:"Empty", checkin_no_custom:"No custom measurements yet.", checkin_hint:"Once added, log values for these under Agenda → any date → Measurements.", lbl_lastndays:"Last {n}d", lbl_lastyear:"1 year", lbl_dayabbrev:"d", opt_weightkg:"Weight (kg)", opt_waistcm:"Waist (cm)", lbl_reset:"RESET", lbl_nodate:"No date", lock_title:"Locked", lock_sub:"Enter your password to unlock BeerSports.", lock_error:"Incorrect password. Try again.", lock_unlock_btn:"Unlock", lock_forgot:"Forgot password? Erase all app data", lbl_newpassword:"New Password", ph_newpassword_hint:"At least 12 characters", lbl_confirmpassword:"Confirm Password", modal_setpw_title:"Set Password", modal_changepw_title:"Change Password", tt_unlocked:"Unlocked — your data is decrypted in memory until auto-lock or you lock it manually", tt_profile:"Profile", tt_removephoto:"Remove photo", tt_back:"Back", tt_backtotop:"Back to top", lbl_photo_placeholder:"Photo", snd_classicbeep:"Classic Beep", snd_chime:"Chime", snd_bell:"Bell", snd_digital:"Digital", snd_airhorn:"Air Horn", btn_editprogram:"✏️ Edit", btn_closeprogram:"✕ Close", btn_circuitorder:"🔁 Circuit Order", btn_circuitorderon:"✓ Circuit Order On", tt_circuitorder:"Cycles through all exercises each round instead of finishing one exercise's sets first — great for HIIT/circuits.", subsec_program:"1. Add Program", subsec_phase:"2. Week", subsec_day:"3. Day", subsec_warmupday:"4. Warm-up for this day", subsec_exday:"5. Exercises for this day", btn_choosewarmuplib:"📚 Choose warm up from Library", btn_buildwarmup:"➕ Build Custom Warm-up", btn_chooseexlib:"📚 Choose workout from Library", btn_addownexercise:"✏️ Add Your Own Exercise", card_workoutjournal:"🏋️ Workout Journal", lbl_todaysets:"Today's Sets", btn_addset:"+ Add Set", btn_savetodaylog:"✓ Save Today's Log", card_progressmap:"Progress Map", modal_exlibrary_title:"📚 Exercise Library", lbl_exercisename:"Exercise Name", lbl_tipformcue:"Tip / Form Cue (optional)", hint_customexercise:"Not in the library? No problem — type it in here and it's added to your day, just like a library pick.", modal_warmuplibrary_title:"🔥 Warm-Up Library", modal_warmupbuilder_title:"🔥 Build Your Warm-up", lbl_warmupname:"Warm-up Name", lbl_exercises_plural:"Exercises", hint_warmupbuilder:"Add one exercise at a time — jumping jacks, then something different — and pick each one's own time, sets and reps.", btn_savewarmup:"Save Warm-up", modal_addexercise_title:"Add Exercise", modal_editexercise_title:"Edit Exercise", mode_timeonly:"⏱ Time only", lbl_secondsperset:"Seconds per Set", lbl_restbetweensets:"Rest Between Sets (sec)", hint_restbetweensets:"Only used when Sets is more than 1.", lbl_restafterexercise:"Rest After This Exercise (sec)", hint_restafterexercise:"A short breather before moving on to the next warm-up exercise.", btn_saveexercise:"Save Exercise", tab_voicecoach:"🔊 Voice Coach", tab_countdown:"⏱ Countdown", tab_circuit:"🔁 Circuit", toast_saved:"Saved", confirm_erase_pw:"This permanently erases ALL your data (profile, photos, agenda, workouts) — this cannot be undone because the password itself can't be recovered. Continue?", confirm_removepw:"Remove App Lock and store your data locally without encryption? You can turn App Lock back on anytime.", err_password_required:"A password or key file is required to save data securely.", err_invalid_photo_type:"Only PNG, JPEG, WebP, and GIF images are allowed.", err_savebannerimg:"Could not save that image — please try again.", err_maxdays:"Please pick 3650 days (10 years) or fewer.", confirm_resetchallenge:"Reset your challenge? This clears your start date and progress map.", err_keeponeprogram:"Keep at least one program.", confirm_deleteprogram:"Delete this whole program?", msg_importedprogram:"Imported \"{name}\" — {n} block(s). Check it over under More → Tools.", err_importreadfail:"Couldn't read that file — make sure it's a .txt or .csv program file (see the Download Guide buttons).", err_keeponeblock:"Keep at least one block.", confirm_deleteblock:"Delete this block/week?", err_keeponeday:"Keep at least one day.", confirm_deleteday:"Delete this day?", err_exercisename:"Give this exercise a name (e.g. \"Jumping Jacks\").", err_addoneexercise:"Add at least one exercise first.", confirm_deletewarmup:"Delete this warm-up? Any days using it will lose their assigned warm-up.", err_savephoto:"Could not save that photo — please try again.", confirm_deletephoto:"Delete this photo?", confirm_removemeasuretype:"Remove this measurement type? Past logged values stay saved, just hidden from these menus.", confirm_deletelog:"Delete the {date} log for {name}? This can't be undone.", confirm_deletealllog:"Delete ALL logged sessions for {name}? This can't be undone.", err_pickexname:"Pick or type an exercise name first.", err_logoneset:"Log at least one set (reps and/or weight) before saving.", err_pickday_nottrain:"Pick a training day (not a rest day) first.", err_noexercisesday:"This day has no named exercises yet — add some under More → Tools first.", err_quota_full:"Couldn't save — you're out of local storage space. This often happens after adding a large banner photo. Try removing it (or choosing a smaller file) and save again.", err_savefailed:"Couldn't save your changes — please try again.", lbl_totalvolume:"Total volume: {vol}kg · {reps} reps", tt_deleteentry:"Delete this entry", lbl_exlibrary_empty:"No exercises in this category.", lbl_recentsessions:"Recent Sessions", btn_clearall:"Clear All", ph_promptprogname:"Name for new program:", val_defaultprogname:"My Workouts", ph_promptblockname:"Name for new block/week:", val_defaultblockname:"New Week", ph_promptdaylabel:"Label for new day (e.g. Sat, Day 6):", lbl_noexercisesyet:"No exercises yet — use \"📚 Choose workout from Library\" or \"✏️ Add Custom Exercise\" below (tap ✏️ Edit above if you don't see those buttons).", lbl_noexercisesadded:"No exercises added yet — tap \"+ Add Exercise\" below.", lbl_nowarmupsyet:"No warm-ups yet — choose one from the library below.", lbl_nowarmupscat:"No warm-ups in this category.", lbl_notenoughdata:"Not enough logged data yet for this period — log this measurement on a few different days (Agenda → pick a date → Measurements) to see a trend here.", ph_measuretype_field:"e.g. Chest (cm), Body Fat %...", ph_customexname:"e.g. Cossack Squat", ph_customextip:"e.g. Keep your chest up", ph_warmupnameinput:"e.g. My Warm-up", ph_wbblockname:"e.g. Jumping Jacks", lbl_step_singular:"step", lbl_step_plural:"steps", lbl_total_word:"total", val_importedprogram:"Imported Program", lbl_devicelocaltime:"Device local time", tt_removeset:"Remove set", lbl_lasttime:"Last Time", lbl_personalrecord:"🏆 Personal Record", lbl_nopreviouslog:"No previous log for {name} yet — today sets the baseline to beat next time.", lbl_beatvolume:"Beat {vol}kg total volume today 💪", opt_customexercise:"✎ Custom exercise…", ph_wlreps:"Reps", ph_wlweight:"Weight (kg)", btn_howtovideo:"🔍 How-To Video", lbl_set_singular:"set", lbl_set_plural:"sets", lbl_holdword:"hold", lbl_restword:"rest", lbl_repsword:"reps", lbl_blockword:"Block", lbl_weekword:"Week", lbl_copyword:"Copy", btn_dupblock:"⧉ Duplicate Week", btn_dupday:"⧉ Duplicate Day", lbl_usekeyfile:"Also require a key file to unlock (optional, extra protection)", hint_keyfile:"You'll download a small key file below. Store it somewhere safe and separate from this device — you'll need both it and your password to unlock next time.", keyfile_download_notice:"Your key file has downloaded. Store it somewhere safe and separate from this device — you'll need both it and your password to unlock.", lock_keyfile_active_text:"A separate key file is also required to unlock.", err_keyfile_missing:"Please select your key file first.", err_keyfile_wrong:"Incorrect password, or this is not the right key file.", err_keyfile_bad:"This does not look like a valid key file.", btn_selectkeyfile:"📎 Select Key File", lbl_nofileselected:"No file selected", lbl_usekeyfile_export:"Also protect this backup with a separate key file", hint_keyfile_export:"Downloads two files instead of one — the backup and a key file. Store them separately; both plus the password are needed to restore.", keyfile_download_notice_backup:"Your backup and key file have downloaded. Store them in different places — both plus the password are needed to restore this backup.", hint_importkeyfile:"This backup was protected with a separate key file. Select it below.", err_file_toolarge_photo:"That image is too large (max 20MB). Please choose a smaller file.", err_file_toolarge_backup:"That backup file is too large (max 500MB).", err_file_toolarge_program:"That program file is too large (max 5MB).", tt_checkinhistory:"History", btn_challenge_settings:"🎯 Challenge Settings", modal_checkinhistory_title:"📋 History", tt_restminus:"Decrease rest by 10s", tt_restplus:"Increase rest by 10s", card_dailytodo:"📅 Daily To-Do", ph_adddailytask:"Add a daily task...", hint_dailytodo:"Resets automatically every day.", lbl_voice:"Coach Voice", opt_voice_auto:"Automatic (best match)", dailytodo_empty:"No daily tasks yet — add one below.", btn_ltoptions:"⚙ More Options" },
  nl: { tt_zoomout:"Uitzoomen", tt_zoomin:"Inzoomen", pe_btn_flip_plain:"Spiegelen", btn_remove_plain:"Verwijderen", btn_switchphoto:"Wisselen", tab_agenda:"Agenda", tab_workouts:"Trainingen", tab_todo:"Taken", tab_timers:"Timers", tab_tools:"Meer", tab_checkin:"Check-in", tab_checkin_btn:"📈 Check-in", card_agenda:"🗓️ Agenda", card_streak:"📈 1% Elke Dag Beter", card_challenge:"Uitdaging Lengte", card_notes:"📝 Notities", btn_today:"Vandaag", card_todo_board:"Takenbord", card_countdown:"Aftimer", card_circuit:"Circuit Timer", card_voicecoach:"🔊 Voice Coach Circuit", card_lifting:"🔊 Voice Coach", card_goals:"🎯 Mijn Doelen, Insha'Allah", card_applock:"App Vergrendeling", card_danger:"Gevarenzone", card_physstats:"Lichamelijke Statistieken", card_photos:"Voor / Na Foto's", card_progress:"📈 Voortgang", pt_before:"Voor", pt_after:"🏆 Na", card_workoutprogram:"🏋️ Trainingsprogramma", hint_programcollapse:"Tik om je plan te bekijken of te bewerken", card_calorie:"🧮 Calorie- &amp; Eiwitcalculator", card_reportperiod:"📈 Grafieken en Rapporten", card_metric:"Kies een meeteenheid", card_trend:"Trend", card_addmeasure:"Extra Metingen Bijhouden", lbl_customgoal_ph:"Aangepast # dagen", err_customgoal_invalid:"Voer een geldig aantal dagen in (1 of meer).", tt_removecustomgoal:"Aangepaste uitdagingslengte verwijderen", btn_set:"Instellen", stat_day:"Dag", stat_streak:"Reeks", stat_logged:"Gelogd", btn_start_challenge:"▶ Start Uitdaging Vandaag", btn_edit_startdate:"✏️ Startdatum & Tijd Bewerken", btn_reset_challenge:"↺ Uitdaging Resetten", progress_hint:"volgt automatisch je uitdaging", leg_notlogged:"Niet gelogd", leg_done:"Gedaan", notes_ph:"Hoe gaat het? Iets om te onthouden...", cal_hasnote:"Heeft een notitie", notes_empty:"Nog geen notities — voeg hieronder je eerste toe.", confirm_deletenote:"Deze notitie verwijderen?", lbl_sleep:"Slaap (uren)", lbl_water:"Water", lbl_bottlesize:"Flesgrootte (ml)", lbl_dailytarget:"Dagelijks Doel (ml)", btn_minus_bottle:"－ Fles", btn_plus_bottle:"＋ Fles", lbl_watersettings:"💧 Bekergroottes", lbl_cupxs:"XS (ml)", lbl_cupsmall:"S (ml)", lbl_cupmedium:"M (ml)", lbl_cuplarge:"L (ml)", lbl_cupxl:"XL (ml)", btn_cupxs:"XS", btn_cupsmall:"S", btn_cupmedium:"M", btn_cuplarge:"L", btn_cupxl:"XL", lbl_measurements:"Metingen", lbl_food:"Gegeten Eten", ph_addfood:"Eten toevoegen...", btn_add:"Toevoegen", lbl_notes:"Notities", ph_daynotes:"Nog iets over deze dag...", btn_done:"Klaar", modal_photodate:"Fotodatum", lbl_date:"Datum", btn_cancel:"Annuleren", btn_save:"Opslaan", modal_startdatetime:"Startdatum & Tijd Bewerken", lbl_time:"Tijd", btn_new:"+ Nieuw", btn_del:"Verwijder", btn_import:"📂 Programma Importeren (.txt/.csv)", btn_template_txt:"📄 Gids Downloaden (.txt)", btn_template_csv:"📊 Gids Downloaden (.csv)", btn_addblock:"+ Blok/Week Toevoegen", btn_delblock:"Blok Verwijderen", ph_blockinfo:"Waar gaat deze week over?", btn_addday:"+ Dag Toevoegen", btn_delday:"Dag Verwijderen", btn_markrest:"Markeer als Rustdag", btn_unmarkrest:"Rustdag Ongedaan Maken", ph_exname:"Naam oefening", ph_exdetail:"Sets × reps · rust", ph_extip:"Tip / uitvoeringstip (optioneel)", badge_nosetsrest:"Geen sets/rust ingesteld", btn_setsrest:"⚙ Sets & Rust", btn_addex:"+ Oefening Toevoegen", btn_marktoday:"✓ Training van Vandaag Voltooid", ph_restnote:"Notitie rustdag...", modal_setsrest:"Sets & Rust", lbl_sets:"Sets", lbl_restsec:"Rust (sec)", lbl_reps:"Herhalingen", ph_reps:"bijv. 12-20 of AMRAP", lbl_holdsec:"Vasthoudtijd (sec)", mode_reps:"🔢 Herhalingen", mode_time:"⏱ Vasthouden op Tijd", hint_setsrest:"Gebruikt door de Voice Coach Circuit en Gewichtheffen-timer in het Timers-tabblad.", ph_addtask:"Taak toevoegen...", col_todo:"Te Doen", col_doing:"Bezig", col_done_col:"Klaar", lbl_minutes:"Minuten", lbl_seconds:"Seconden", btn_startword:"▶ Start", btn_pause:"⏸ Pauze", btn_reset:"↺ Reset", btn_skip:"⏭ Overslaan", lbl_rounds:"Rondes", lbl_work:"Werk (sec)", lbl_getready:"Klaarmaken (sec)", vc_sub:"Kies een trainingsdag — het leest elke oefening hardop voor en telt je werk/rust af.", lt_sub:"Voor gewichten — geen afteltimer. Tik op Klaar na elke set, daarna rust het en gaat het naar de volgende.", lbl_program:"Programma", lbl_block:"Blok / Week", lbl_day:"Dag", lbl_includewarmup:"Warming-up Inbegrepen?", opt_yes:"Ja", opt_no:"Nee", lbl_defaultsets:"Standaard Sets", btn_donewithset:"✓ Klaar met deze set", ph_yourname:"Jouw naam", btn_settings:"⚙ Instellingen", sg_general:"Algemeen", sg_appearance:"Uiterlijk", sg_data:"Gegevens", modal_externalprogram:"📂 Extern Trainingsprogramma", externalprogram_hint:"Importeer een trainingsprogramma vanuit een .txt- of .csv-bestand, of download een lege gids om in te vullen en te importeren.", btn_externalprogram:"📂 Extern Trainingsprogramma", btn_closemodal:"✕ Sluiten", lbl_theme:"Accentkleur", lbl_apptheme:"App-thema", lbl_bannerbg:"Bannerachtergrond", tt_editbanner:"Banner Bewerken", modal_bannerbg_title:"🖼 Banner Bewerken", pe_title_profile:"Profielfoto Bewerken", pe_title_progress:"Foto Bewerken", pe_btn_flip:"⇋ Spiegelen", pe_btn_edit:"✏️ Afbeelding Bewerken", tt_editprofile:"Instellingen", modal_editprofile_title:"⚙ Instellingen", opt_bgdefault:"Standaard", opt_bgsolid:"Effen kleur", opt_bgimage:"Afbeelding", btn_choosebannerimg:"🖼 Afbeelding Kiezen", btn_removebannerimg:"✕ Verwijderen", lbl_customcolors:"Websitekleuren", lbl_colorbg:"Achtergrond", lbl_colorcard:"Kaarten", lbl_colortext:"Tekst", btn_resetcolors:"↺ Kleuren resetten", theme_custom:"Aangepast", lbl_colortagline:"Tagline", lbl_backuptransfer:"Back-up &amp; Overzetten", btn_exportdata:"📤 Gegevens exporteren", btn_importdata:"📥 Gegevens importeren", modal_exporttitle:"📤 Gegevens exporteren", export_body_text:"Bundelt alles op dit apparaat — profiel, foto’s, agenda, workouts — in één versleuteld bestand dat je naar een andere browser of ander apparaat kan overzetten.", lbl_exportpassword:"Wachtwoord om mee te versleutelen", lbl_exportpasswordconfirm:"Bevestig wachtwoord", btn_exportnow:"Exporteren", modal_importtitle:"📥 Gegevens importeren", import_body_text:"Vul het wachtwoord in dat je bij het exporteren gebruikte. Importeren vervangt alles wat nu op dit apparaat staat.", lbl_importpassword:"Wachtwoord", btn_importnow:"Ontsleutelen &amp; Importeren", err_pwlen:"Wachtwoord moet minstens 12 tekens zijn.", err_pwmatch:"Wachtwoorden komen niet overeen.", err_nocrypto:"Versleuteling is niet beschikbaar in deze browser.", err_exportfailed:"Exporteren mislukt — probeer het opnieuw.", err_importbadfile:"Dit lijkt geen geldig back-upbestand te zijn.", err_importwrongpw:"Onjuist wachtwoord, of dit bestand is beschadigd.", confirm_import:"Dit vervangt alles wat nu op dit apparaat staat door de geïmporteerde back-up. Doorgaan?", lbl_language:"Taal", lbl_clockregion:"Klokregio", danger_text:"Wis permanent alles wat op dit toestel is opgeslagen — profiel, foto's, agenda, trainingen, takenlijst, instellingen. Dit kan niet ongedaan worden gemaakt.", btn_eraseall:"Alle Gegevens Wissen", ph_addgoal:"Doel toevoegen...", lbl_started:"Gestart", tbl_before:"Voor", tbl_now:"Nu", lbl_weight:"Gewicht", lbl_waist:"Taille", lbl_energy:"Energie (1–10)", lbl_sleepword:"Slaap", photo_before:"⏮ Voor", photo_after:"🏆 Na / Huidig", btn_addphoto:"+ Foto Toevoegen", lbl_age:"Leeftijd", lbl_gender:"Geslacht", opt_male:"Man", opt_female:"Vrouw", lbl_height:"Lengte (cm)", lbl_weightkg:"Lichaamsgewicht (kg)", lbl_activitylevel:"Activiteitsniveau", opt_sedentary:"Zittend (weinig/geen beweging)", opt_light:"Licht (1–3 dagen/week)", opt_moderate:"Gemiddeld (3–5 dagen/week)", opt_active:"Actief (6–7 dagen/week)", opt_veryactive:"Zeer actief (zwaar trainen + fysiek werk)", lbl_goal:"Doel", opt_maintain:"Gewicht behouden", opt_lose:"Vet verliezen", opt_build:"Spieren Opbouwen", lbl_targetrate:"Streeftempo", opt_kgweek:"kg / week", opt_gweek:"gram / week", res_bmr:"BMR (in rust)", res_maint:"Onderhoudscalorieën", res_target:"Streefcalorieën / dag", res_protein:"Eiwit / dag", calc_disclaimer:"Ruwe algemene richtlijn, geen persoonlijk medisch of voedingsadvies. Raadpleeg voor een plan op maat een arts of diëtist.", tab_profile_btn:"👤 Profiel", tab_fitness_btn:"🧮 Fitnesstools", tab_website_btn:"Beerleert", btn_addmeasuretype:"+ Meettype Toevoegen", ph_measuretype:"bijv. Borst, Armen", st_ready:"Klaar", st_running:"Bezig", st_paused:"Gepauzeerd", st_donebang:"Klaar!", st_getready:"Klaarmaken", st_work:"Werk", st_rest:"Rust", st_next:"Volgende:", st_lifting:"Tillen", st_holding:"Vasthouden", st_workoutcomplete:"Training voltooid 🎉", st_pickday:"Kies hierboven een dag", st_warmup:"Warming-up", st_tapskip:"Tik op Overslaan als je klaar bent", st_exercise:"Oefening", st_set:"Set", tagline_text:"SPORT <span class=\"tag-dot\">•</span> ETEN <span class=\"tag-dot\">•</span> SLAPEN", lbl_days:"dagen", btn_started_prefix:"✓ Gestart", lbl_hours:"uur", lock_encrypted_text:"Je gegevens zijn versleuteld op dit toestel met een wachtwoord.", lock_nopass_text:"Wachtwoord vereist — gegevens worden nooit onversleuteld op dit toestel opgeslagen.", btn_changepassword:"🔑 Wachtwoord Wijzigen", btn_removepassword:"Wachtwoord Verwijderen", btn_setpassword:"🔒 Wachtwoord Instellen", goals_empty:"Nog geen doelen — voeg toe waar je aan werkt.", modal_erasetitle:"⚠️ Alle Gegevens Wissen", erase_body_text:"Dit wist permanent je profiel, foto's, agenda, trainingen, takenlijst en instellingen van dit toestel. Er is geen back-up — <b>dit kan niet ongedaan worden gemaakt.</b>", lbl_typeerase:"Typ ERASE om te bevestigen", btn_eraseeverything:"Alles Wissen", lbl_autolock:"Automatisch vergrendelen na inactiviteit", opt_autolock_never:"Nooit", opt_autolock_1min:"1 minuut", opt_autolock_5min:"5 minuten", opt_autolock_15min:"15 minuten", opt_autolock_30min:"30 minuten", unit_kcal:"kcal", unit_g:"g", food_empty:"Nog geen eten gelogd.", kb_empty:"Leeg", checkin_no_custom:"Nog geen aangepaste metingen.", checkin_hint:"Eenmaal toegevoegd, log waarden hiervoor onder Agenda → een datum → Metingen.", lbl_lastndays:"Laatste {n}d", lbl_lastyear:"1 jaar", lbl_dayabbrev:"d", opt_weightkg:"Gewicht (kg)", opt_waistcm:"Taille (cm)", lbl_reset:"RESET", lbl_nodate:"Geen datum", lock_title:"Vergrendeld", lock_sub:"Voer je wachtwoord in om BeerSports te ontgrendelen.", lock_error:"Onjuist wachtwoord. Probeer het opnieuw.", lock_unlock_btn:"Ontgrendelen", lock_forgot:"Wachtwoord vergeten? Wis alle app-gegevens", lbl_newpassword:"Nieuw Wachtwoord", ph_newpassword_hint:"Minimaal 12 tekens", lbl_confirmpassword:"Bevestig Wachtwoord", modal_setpw_title:"Wachtwoord Instellen", modal_changepw_title:"Wachtwoord Wijzigen", tt_unlocked:"Ontgrendeld — je gegevens zijn ontsleuteld in het geheugen tot automatische vergrendeling of tot je zelf vergrendelt", tt_profile:"Profiel", tt_removephoto:"Foto verwijderen", tt_back:"Terug", tt_backtotop:"Terug naar boven", lbl_photo_placeholder:"Foto", snd_classicbeep:"Klassieke Piep", snd_chime:"Belletje", snd_bell:"Bel", snd_digital:"Digitaal", snd_airhorn:"Toeter", btn_editprogram:"✏️ Bewerken", btn_closeprogram:"✕ Sluiten", btn_circuitorder:"🔁 Circuitvolgorde", btn_circuitorderon:"✓ Circuitvolgorde Aan", tt_circuitorder:"Doorloopt bij elke ronde alle oefeningen in plaats van eerst alle sets van één oefening af te maken — ideaal voor HIIT/circuits.", subsec_program:"1. Programma Toevoegen", subsec_phase:"2. Week", subsec_day:"3. Dag", subsec_warmupday:"4. Warming-up voor deze dag", subsec_exday:"5. Oefeningen voor deze dag", btn_choosewarmuplib:"📚 Kies warming-up uit Bibliotheek", btn_buildwarmup:"➕ Eigen Warming-up Maken", btn_chooseexlib:"📚 Kies oefening uit Bibliotheek", btn_addownexercise:"✏️ Eigen Oefening Toevoegen", card_workoutjournal:"🏋️ Trainingsdagboek", lbl_todaysets:"Sets van Vandaag", btn_addset:"+ Set Toevoegen", btn_savetodaylog:"✓ Log van Vandaag Opslaan", card_progressmap:"Voortgangskaart", modal_exlibrary_title:"📚 Oefeningenbibliotheek", lbl_exercisename:"Naam van de Oefening", lbl_tipformcue:"Tip / Uitvoeringstip (optioneel)", hint_customexercise:"Niet in de bibliotheek? Geen probleem — typ het hier in en het wordt aan je dag toegevoegd, net als een keuze uit de bibliotheek.", modal_warmuplibrary_title:"🔥 Warming-up Bibliotheek", modal_warmupbuilder_title:"🔥 Maak Je Warming-up", lbl_warmupname:"Naam Warming-up", lbl_exercises_plural:"Oefeningen", hint_warmupbuilder:"Voeg één oefening tegelijk toe — jumping jacks, dan iets anders — en kies voor elke oefening je eigen tijd, sets en herhalingen.", btn_savewarmup:"Warming-up Opslaan", modal_addexercise_title:"Oefening Toevoegen", modal_editexercise_title:"Oefening Bewerken", mode_timeonly:"⏱ Alleen tijd", lbl_secondsperset:"Seconden per Set", lbl_restbetweensets:"Rust Tussen Sets (sec)", hint_restbetweensets:"Wordt alleen gebruikt als Sets meer dan 1 is.", lbl_restafterexercise:"Rust Na Deze Oefening (sec)", hint_restafterexercise:"Een korte adempauze voordat je verdergaat naar de volgende warming-up oefening.", btn_saveexercise:"Oefening Opslaan", tab_voicecoach:"🔊 Voice Coach", tab_countdown:"⏱ Aftimer", tab_circuit:"🔁 Circuit", toast_saved:"Opgeslagen", confirm_erase_pw:"Dit wist permanent AL je gegevens (profiel, foto's, agenda, trainingen) — dit kan niet ongedaan worden gemaakt omdat het wachtwoord zelf niet kan worden hersteld. Doorgaan?", confirm_removepw:"Wachtwoordbeveiliging verwijderen? Je gegevens worden vanaf nu onversleuteld op dit toestel opgeslagen.", err_savebannerimg:"Kon die afbeelding niet opslaan — probeer het opnieuw.", err_maxdays:"Kies 3650 dagen (10 jaar) of minder.", confirm_resetchallenge:"Uitdaging resetten? Dit wist je startdatum en voortgangskaart.", err_keeponeprogram:"Houd minstens één programma.", confirm_deleteprogram:"Dit hele programma verwijderen?", msg_importedprogram:"\"{name}\" geïmporteerd — {n} blok(ken). Bekijk het onder Meer → Tools.", err_importreadfail:"Kon dat bestand niet lezen — zorg dat het een .txt- of .csv-programmabestand is (zie de knoppen Gids Downloaden).", err_keeponeblock:"Houd minstens één blok.", confirm_deleteblock:"Dit blok/deze week verwijderen?", err_keeponeday:"Houd minstens één dag.", confirm_deleteday:"Deze dag verwijderen?", err_exercisename:"Geef deze oefening een naam (bijv. \"Jumping Jacks\").", err_addoneexercise:"Voeg eerst minstens één oefening toe.", confirm_deletewarmup:"Deze warming-up verwijderen? Dagen die deze gebruiken verliezen hun toegewezen warming-up.", err_savephoto:"Kon die foto niet opslaan — probeer het opnieuw.", confirm_deletephoto:"Deze foto verwijderen?", confirm_removemeasuretype:"Dit meettype verwijderen? Eerder gelogde waarden blijven bewaard, ze worden alleen verborgen in deze menu's.", confirm_deletelog:"Het log van {date} voor {name} verwijderen? Dit kan niet ongedaan worden gemaakt.", confirm_deletealllog:"ALLE gelogde sessies voor {name} verwijderen? Dit kan niet ongedaan worden gemaakt.", err_pickexname:"Kies of typ eerst een oefeningsnaam.", err_logoneset:"Log minstens één set (herhalingen en/of gewicht) voordat je opslaat.", err_pickday_nottrain:"Kies eerst een trainingsdag (geen rustdag).", err_noexercisesday:"Deze dag heeft nog geen benoemde oefeningen — voeg er eerst enkele toe onder Meer → Tools.", err_quota_full:"Kon niet opslaan — je lokale opslagruimte zit vol. Dit gebeurt vaak na het toevoegen van een grote bannerfoto. Verwijder deze (of kies een kleiner bestand) en sla opnieuw op.", err_savefailed:"Kon je wijzigingen niet opslaan — probeer het opnieuw.", lbl_totalvolume:"Totaal volume: {vol}kg · {reps} herh.", tt_deleteentry:"Dit item verwijderen", lbl_exlibrary_empty:"Geen oefeningen in deze categorie.", lbl_recentsessions:"Recente Sessies", btn_clearall:"Alles Wissen", ph_promptprogname:"Naam voor nieuw programma:", val_defaultprogname:"Mijn Trainingen", ph_promptblockname:"Naam voor nieuw blok/week:", val_defaultblockname:"Nieuwe Week", ph_promptdaylabel:"Label voor nieuwe dag (bijv. Za, Dag 6):", lbl_noexercisesyet:"Nog geen oefeningen — gebruik \"📚 Kies oefening uit Bibliotheek\" of \"✏️ Eigen Oefening Toevoegen\" hieronder (tik op ✏️ Bewerken hierboven als je die knoppen niet ziet).", lbl_noexercisesadded:"Nog geen oefeningen toegevoegd — tik hieronder op \"+ Oefening Toevoegen\".", lbl_nowarmupsyet:"Nog geen warming-ups — kies er hieronder een uit de bibliotheek.", lbl_nowarmupscat:"Geen warming-ups in deze categorie.", lbl_notenoughdata:"Nog niet genoeg gelogde gegevens voor deze periode — log deze meting op een paar verschillende dagen (Agenda → kies een datum → Metingen) om hier een trend te zien.", ph_measuretype_field:"bijv. Borst (cm), Vetpercentage %...", ph_customexname:"bijv. Cossack Squat", ph_customextip:"bijv. Houd je borst omhoog", ph_warmupnameinput:"bijv. Mijn Warming-up", ph_wbblockname:"bijv. Jumping Jacks", lbl_step_singular:"stap", lbl_step_plural:"stappen", lbl_total_word:"totaal", val_importedprogram:"Geïmporteerd Programma", lbl_devicelocaltime:"Lokale tijd van dit toestel", tt_removeset:"Set verwijderen", lbl_lasttime:"Vorige Keer", lbl_personalrecord:"🏆 Persoonlijk Record", lbl_nopreviouslog:"Nog geen eerder log voor {name} — vandaag zet je de basislijn om de volgende keer te verslaan.", lbl_beatvolume:"Versla vandaag {vol}kg totaal volume 💪", opt_customexercise:"✎ Aangepaste oefening…", ph_wlreps:"Herh.", ph_wlweight:"Gewicht (kg)", btn_howtovideo:"🔍 Instructievideo", lbl_set_singular:"set", lbl_set_plural:"sets", lbl_holdword:"vasthouden", lbl_restword:"rust", lbl_repsword:"herh.", lbl_blockword:"Blok", lbl_weekword:"Week", lbl_copyword:"Kopie", btn_dupblock:"⧉ Week Dupliceren", btn_dupday:"⧉ Dag Dupliceren", lbl_usekeyfile:"Ook een sleutelbestand vereisen om te ontgrendelen (optioneel, extra beveiliging)", hint_keyfile:"Hieronder download je een klein sleutelbestand. Bewaar het ergens veilig, gescheiden van dit toestel — je hebt het bestand én je wachtwoord nodig om de volgende keer te ontgrendelen.", keyfile_download_notice:"Je sleutelbestand is gedownload. Bewaar het ergens veilig, gescheiden van dit toestel — je hebt het bestand én je wachtwoord nodig om te ontgrendelen.", lock_keyfile_active_text:"Er is ook een apart sleutelbestand nodig om te ontgrendelen.", err_keyfile_missing:"Selecteer eerst je sleutelbestand.", err_keyfile_wrong:"Onjuist wachtwoord, of dit is niet het juiste sleutelbestand.", err_keyfile_bad:"Dit lijkt geen geldig sleutelbestand te zijn.", btn_selectkeyfile:"📎 Sleutelbestand Kiezen", lbl_nofileselected:"Geen bestand gekozen", lbl_usekeyfile_export:"Bescherm deze back-up ook met een apart sleutelbestand", hint_keyfile_export:"Downloadt twee bestanden in plaats van één — de back-up en een sleutelbestand. Bewaar ze apart; je hebt beide plus het wachtwoord nodig om te herstellen.", keyfile_download_notice_backup:"Je back-up en sleutelbestand zijn gedownload. Bewaar ze op verschillende plekken — je hebt beide plus het wachtwoord nodig om deze back-up te herstellen.", hint_importkeyfile:"Deze back-up was beveiligd met een apart sleutelbestand. Selecteer het hieronder.", err_file_toolarge_photo:"Die afbeelding is te groot (max. 20MB). Kies een kleiner bestand.", err_file_toolarge_backup:"Dat back-upbestand is te groot (max. 500MB).", err_file_toolarge_program:"Dat programmabestand is te groot (max. 5MB).", tt_checkinhistory:"Geschiedenis", btn_challenge_settings:"🎯 Uitdaging Instellingen", modal_checkinhistory_title:"📋 Geschiedenis", tt_restminus:"Rust met 10s verkorten", tt_restplus:"Rust met 10s verlengen", card_dailytodo:"📅 Dagelijkse Taken", ph_adddailytask:"Dagelijkse taak toevoegen...", hint_dailytodo:"Wordt elke dag automatisch gereset.", lbl_voice:"Coach-stem", opt_voice_auto:"Automatisch (beste match)", dailytodo_empty:"Nog geen dagelijkse taken — voeg er hieronder een toe.", btn_ltoptions:"⚙ Meer Opties" },
  ar_fusha: { tt_zoomout:"تصغير", tt_zoomin:"تكبير", pe_btn_flip_plain:"عكس", btn_remove_plain:"إزالة", btn_switchphoto:"تبديل", tab_agenda:"الأجندة", tab_workouts:"التمارين", tab_todo:"المهام", tab_timers:"المؤقتات", tab_tools:"المزيد", tab_checkin:"المتابعة", tab_checkin_btn:"📈 المتابعة", card_agenda:"🗓️ الأجندة", card_streak:"📈 أفضل ١٪ كل يوم", card_challenge:"مدة التحدي", card_notes:"📝 ملاحظات", btn_today:"اليوم", card_todo_board:"لوحة المهام", card_countdown:"العد التنازلي", card_circuit:"مؤقت الدائرة التدريبية", card_voicecoach:"🔊 المدرب الصوتي", card_lifting:"🔊 المدرب الصوتي", card_goals:"🎯 أهدافي، إن شاء الله", card_applock:"قفل التطبيق", card_danger:"منطقة الخطر", card_physstats:"الإحصاءات الجسدية", card_photos:"صور قبل / بعد", card_progress:"📈 التقدم", pt_before:"قبل", pt_after:"🏆 بعد", card_workoutprogram:"🏋️ برنامج التمرين", hint_programcollapse:"اضغط لعرض خطتك أو تعديلها", card_calorie:"🧮 حاسبة السعرات والبروتين", card_reportperiod:"📈 الرسوم البيانية والتقارير", card_metric:"اختر مقياسًا", card_trend:"الاتجاه", card_addmeasure:"تتبع قياسات إضافية", lbl_customgoal_ph:"عدد أيام مخصص", err_customgoal_invalid:"أدخل عددًا صالحًا من الأيام (1 أو أكثر).", tt_removecustomgoal:"إزالة مدة التحدي المخصصة", btn_set:"تعيين", stat_day:"اليوم", stat_streak:"التتابع", stat_logged:"مسجّل", btn_start_challenge:"▶ ابدأ التحدي اليوم", btn_edit_startdate:"✏️ تعديل تاريخ ووقت البدء", btn_reset_challenge:"↺ إعادة تعيين التحدي", progress_hint:"يتحدّث تلقائيًا مع تحديك", leg_notlogged:"غير مسجّل", leg_done:"تم", notes_ph:"كيف تسير الأمور؟ أي شيء تريد تذكره...", cal_hasnote:"يحتوي على ملاحظة", notes_empty:"لا توجد ملاحظات بعد — أضف أول ملاحظة أدناه.", confirm_deletenote:"هل تريد حذف هذه الملاحظة؟", lbl_sleep:"النوم (ساعات)", lbl_water:"الماء", lbl_bottlesize:"حجم الزجاجة (مل)", lbl_dailytarget:"الهدف اليومي (مل)", btn_minus_bottle:"－ زجاجة", btn_plus_bottle:"＋ زجاجة", lbl_watersettings:"💧 أحجام الأكواب", lbl_cupxs:"XS (مل)", lbl_cupsmall:"S (مل)", lbl_cupmedium:"M (مل)", lbl_cuplarge:"L (مل)", lbl_cupxl:"XL (مل)", btn_cupxs:"XS", btn_cupsmall:"S", btn_cupmedium:"M", btn_cuplarge:"L", btn_cupxl:"XL", lbl_measurements:"القياسات", lbl_food:"الطعام المتناول", ph_addfood:"أضف طعامًا...", btn_add:"إضافة", lbl_notes:"ملاحظات", ph_daynotes:"أي شيء آخر عن هذا اليوم...", btn_done:"تم", modal_photodate:"تاريخ الصورة", lbl_date:"التاريخ", btn_cancel:"إلغاء", btn_save:"حفظ", modal_startdatetime:"تعديل تاريخ ووقت البدء", lbl_time:"الوقت", btn_new:"+ جديد", btn_del:"حذف", btn_import:"📂 استيراد برنامج (.txt/.csv)", btn_template_txt:"📄 تنزيل الدليل (.txt)", btn_template_csv:"📊 تنزيل الدليل (.csv)", btn_addblock:"+ إضافة أسبوع", btn_delblock:"حذف المرحلة", ph_blockinfo:"ما موضوع هذا الأسبوع؟", btn_addday:"+ إضافة يوم", btn_delday:"حذف اليوم", btn_markrest:"تحديد كيوم راحة", btn_unmarkrest:"إلغاء يوم الراحة", ph_exname:"اسم التمرين", ph_exdetail:"مجموعات × تكرار · راحة", ph_extip:"نصيحة / ملاحظة أداء (اختياري)", badge_nosetsrest:"لم يتم تحديد مجموعات/راحة", btn_setsrest:"⚙ المجموعات والراحة", btn_addex:"+ إضافة تمرين", btn_marktoday:"✓ تحديد تمرين اليوم كمكتمل", ph_restnote:"ملاحظة يوم الراحة...", modal_setsrest:"المجموعات والراحة", lbl_sets:"المجموعات", lbl_restsec:"الراحة (ثانية)", lbl_reps:"التكرارات", ph_reps:"مثال: 12-20 أو حتى الفشل", lbl_holdsec:"مدة الثبات (ثانية)", mode_reps:"🔢 تكرارات", mode_time:"⏱ ثبات مؤقت", hint_setsrest:"يُستخدم بواسطة المدرب الصوتي ومؤقت رفع الأثقال في تبويب المؤقتات.", ph_addtask:"أضف مهمة...", col_todo:"للقيام به", col_doing:"قيد التنفيذ", col_done_col:"تم", lbl_minutes:"دقائق", lbl_seconds:"ثوانٍ", btn_startword:"▶ ابدأ", btn_pause:"⏸ إيقاف مؤقت", btn_reset:"↺ إعادة تعيين", btn_skip:"⏭ تخطي", lbl_rounds:"الجولات", lbl_work:"العمل (ثانية)", lbl_getready:"الاستعداد (ثانية)", vc_sub:"اختر يوم تمرين — سيقرأ كل تمرين بصوت عالٍ ويحسب وقت العمل/الراحة.", lt_sub:"للأثقال — بلا عد تنازلي للعمل. اضغط تم بعد كل مجموعة، ثم يرتاح وينتقل للتالية.", lbl_program:"البرنامج", lbl_block:"الأسبوع", lbl_day:"اليوم", lbl_includewarmup:"هل تريد تضمين الإحماء؟", opt_yes:"نعم", opt_no:"لا", lbl_defaultsets:"المجموعات الافتراضية", btn_donewithset:"✓ انتهيت من هذه المجموعة", ph_yourname:"اسمك", btn_settings:"⚙ الإعدادات", sg_general:"عام", sg_appearance:"المظهر", sg_data:"البيانات", modal_externalprogram:"📂 برنامج تمرين خارجي", externalprogram_hint:"استورد برنامج تمرين من ملف .txt أو .csv، أو نزّل دليلاً فارغًا لملئه واستيراده.", btn_externalprogram:"📂 برنامج تمرين خارجي", btn_closemodal:"✕ إغلاق", lbl_theme:"اللون المميز", lbl_apptheme:"مظهر التطبيق", lbl_bannerbg:"خلفية البانر", tt_editbanner:"تعديل البانر", modal_bannerbg_title:"🖼 تعديل البانر", pe_title_profile:"تعديل صورة الملف الشخصي", pe_title_progress:"تعديل الصورة", pe_btn_flip:"⇋ عكس", pe_btn_edit:"✏️ تعديل الصورة", tt_editprofile:"الإعدادات", modal_editprofile_title:"⚙ الإعدادات", opt_bgdefault:"افتراضي", opt_bgsolid:"لون واحد", opt_bgimage:"صورة", btn_choosebannerimg:"🖼 اختيار صورة", btn_removebannerimg:"✕ إزالة", lbl_customcolors:"ألوان الموقع", lbl_colorbg:"الخلفية", lbl_colorcard:"البطاقات", lbl_colortext:"النص", btn_resetcolors:"↺ إعادة تعيين الألوان", theme_custom:"مخصص", lbl_colortagline:"الشعار", lbl_backuptransfer:"النسخ الاحتياطي والنقل", btn_exportdata:"📤 تصدير البيانات", btn_importdata:"📥 استيراد البيانات", modal_exporttitle:"📤 تصدير البيانات", export_body_text:"يجمع كل شيء على هذا الجهاز — الملف الشخصي، الصور، الأجندة، التمارين — في ملف واحد مشفّر يمكنك نقله إلى متصفح أو جهاز آخر.", lbl_exportpassword:"كلمة المرور للتشفير", lbl_exportpasswordconfirm:"تأكيد كلمة المرور", btn_exportnow:"تصدير", modal_importtitle:"📥 استيراد البيانات", import_body_text:"أدخل كلمة المرور التي استخدمتها عند التصدير. الاستيراد يستبدل كل ما هو موجود حاليًا على هذا الجهاز.", lbl_importpassword:"كلمة المرور", btn_importnow:"فك التشفير والاستيراد", err_pwlen:"يجب أن تتكون كلمة المرور من 12 حرفًا على الأقل.", err_pwmatch:"كلمتا المرور غير متطابقتين.", err_nocrypto:"التشفير غير متوفر في هذا المتصفح.", err_exportfailed:"فشل التصدير — حاول مرة أخرى.", err_importbadfile:"هذا لا يبدو كملف نسخة احتياطية صالح.", err_importwrongpw:"كلمة مرور غير صحيحة، أو أن هذا الملف تالف.", confirm_import:"سيؤدي هذا إلى استبدال كل ما هو موجود حاليًا على هذا الجهاز بالنسخة الاحتياطية المستوردة. هل تريد المتابعة؟", lbl_language:"اللغة", lbl_clockregion:"منطقة الساعة", danger_text:"حذف كل ما هو مخزّن على هذا الجهاز نهائيًا — الملف الشخصي، الصور، الأجندة، التمارين، قائمة المهام، الإعدادات. لا يمكن التراجع عن هذا.", btn_eraseall:"مسح جميع البيانات", ph_addgoal:"أضف هدفًا...", lbl_started:"تاريخ البدء", tbl_before:"قبل", tbl_now:"الآن", lbl_weight:"الوزن", lbl_waist:"الخصر", lbl_energy:"الطاقة (1–10)", lbl_sleepword:"النوم", photo_before:"⏮ قبل", photo_after:"🏆 بعد / الحالي", btn_addphoto:"+ إضافة صورة", lbl_age:"العمر", lbl_gender:"الجنس", opt_male:"ذكر", opt_female:"أنثى", lbl_height:"الطول (سم)", lbl_weightkg:"وزن الجسم (كجم)", lbl_activitylevel:"مستوى النشاط", opt_sedentary:"خامل (نشاط قليل أو معدوم)", opt_light:"خفيف (1–3 أيام/أسبوع)", opt_moderate:"متوسط (3–5 أيام/أسبوع)", opt_active:"نشيط (6–7 أيام/أسبوع)", opt_veryactive:"نشيط جدًا (تدريب شاق + عمل بدني)", lbl_goal:"الهدف", opt_maintain:"الحفاظ على الوزن", opt_lose:"خسارة الدهون", opt_build:"بناء العضلات", lbl_targetrate:"المعدل المستهدف", opt_kgweek:"كجم / أسبوع", opt_gweek:"جرام / أسبوع", res_bmr:"معدل الأيض الأساسي (وقت الراحة)", res_maint:"سعرات الحفاظ على الوزن", res_target:"السعرات المستهدفة / يوم", res_protein:"البروتين / يوم", calc_disclaimer:"إرشاد عام تقريبي، وليس نصيحة طبية أو غذائية شخصية. للحصول على خطة مخصصة لك، استشر طبيبًا أو أخصائي تغذية.", tab_profile_btn:"👤 الملف الشخصي", tab_fitness_btn:"🧮 أدوات اللياقة", tab_website_btn:"Beerleert", btn_addmeasuretype:"+ إضافة نوع قياس", ph_measuretype:"مثال: الصدر، الذراعين", st_ready:"جاهز", st_running:"يعمل", st_paused:"متوقف مؤقتًا", st_donebang:"تم!", st_getready:"استعد", st_work:"عمل", st_rest:"راحة", st_next:"التالي:", st_lifting:"رفع الأثقال", st_holding:"الثبات", st_workoutcomplete:"اكتمل التمرين 🎉", st_pickday:"اختر يومًا أعلاه", st_warmup:"الإحماء", st_tapskip:"اضغط تخطي عندما تكون جاهزًا", st_exercise:"التمرين", st_set:"المجموعة", tagline_text:"تمرّن <span class=\"tag-dot\">•</span> كُل <span class=\"tag-dot\">•</span> نم", lbl_days:"أيام", btn_started_prefix:"✓ بدأ في", lbl_hours:"ساعة", lock_encrypted_text:"بياناتك مشفّرة على هذا الجهاز بكلمة مرور.", lock_nopass_text:"قفل التطبيق اختياري — تُخزَّن بياناتك محليًا بدون تشفير حتى تقوم بتفعيله.", btn_changepassword:"🔑 تغيير كلمة المرور", btn_removepassword:"إزالة كلمة المرور", btn_setpassword:"🔒 تعيين كلمة مرور", goals_empty:"لا توجد أهداف بعد — أضف ما تسعى إليه.", modal_erasetitle:"⚠️ مسح جميع البيانات", erase_body_text:"سيؤدي هذا إلى حذف ملفك الشخصي وصورك وأجندتك وتماريك وقائمة مهامك وإعداداتك نهائيًا من هذا الجهاز. لا توجد نسخة احتياطية — <b>لا يمكن التراجع عن هذا.</b>", lbl_typeerase:"اكتب ERASE للتأكيد", btn_eraseeverything:"مسح كل شيء", lbl_autolock:"القفل التلقائي بعد عدم النشاط", opt_autolock_never:"أبدًا", opt_autolock_1min:"دقيقة واحدة", opt_autolock_5min:"5 دقائق", opt_autolock_15min:"15 دقيقة", opt_autolock_30min:"30 دقيقة", unit_kcal:"سعرة", unit_g:"جم", food_empty:"لم يتم تسجيل أي طعام بعد.", kb_empty:"فارغ", checkin_no_custom:"لا توجد قياسات مخصصة بعد.", checkin_hint:"بمجرد إضافتها، سجّل قيمها ضمن الأجندة ← أي تاريخ ← القياسات.", lbl_lastndays:"آخر {n} يوم", lbl_lastyear:"سنة واحدة", lbl_dayabbrev:"ي", opt_weightkg:"الوزن (كجم)", opt_waistcm:"الخصر (سم)", lbl_reset:"إعادة تعيين", lbl_nodate:"لا يوجد تاريخ", lock_title:"مقفل", lock_sub:"أدخل كلمة المرور لفتح تطبيق BeerSports.", lock_error:"كلمة مرور غير صحيحة. حاول مرة أخرى.", lock_unlock_btn:"فتح القفل", lock_forgot:"نسيت كلمة المرور؟ امسح جميع بيانات التطبيق", lbl_newpassword:"كلمة مرور جديدة", ph_newpassword_hint:"12 حرفًا على الأقل", lbl_confirmpassword:"تأكيد كلمة المرور", modal_setpw_title:"تعيين كلمة مرور", modal_changepw_title:"تغيير كلمة المرور", tt_unlocked:"مفتوح — بياناتك مفكوكة التشفير في الذاكرة حتى القفل التلقائي أو حتى تقفله يدويًا", tt_profile:"الملف الشخصي", tt_removephoto:"إزالة الصورة", tt_back:"رجوع", tt_backtotop:"العودة إلى الأعلى", lbl_photo_placeholder:"صورة", snd_classicbeep:"صافرة كلاسيكية", snd_chime:"رنين", snd_bell:"جرس", snd_digital:"رقمي", snd_airhorn:"بوق", btn_editprogram:"✏️ تعديل", btn_closeprogram:"✕ إغلاق", btn_circuitorder:"🔁 ترتيب الدائرة", btn_circuitorderon:"✓ ترتيب الدائرة مفعّل", tt_circuitorder:"يمر على جميع التمارين في كل جولة بدلاً من إنهاء كل مجموعات تمرين واحد أولاً — مثالي لتمارين الهيت والدوائر التدريبية.", subsec_program:"1. إضافة برنامج", subsec_phase:"2. الأسبوع", subsec_day:"3. اليوم", subsec_warmupday:"4. الإحماء لهذا اليوم", subsec_exday:"5. تمارين هذا اليوم", btn_choosewarmuplib:"📚 اختر إحماءً من المكتبة", btn_buildwarmup:"➕ إنشاء إحماء مخصص", btn_chooseexlib:"📚 اختر تمرينًا من المكتبة", btn_addownexercise:"✏️ إضافة تمرينك الخاص", card_workoutjournal:"🏋️ سجل التمارين", lbl_todaysets:"مجموعات اليوم", btn_addset:"+ إضافة مجموعة", btn_savetodaylog:"✓ حفظ سجل اليوم", card_progressmap:"خريطة التقدم", modal_exlibrary_title:"📚 مكتبة التمارين", lbl_exercisename:"اسم التمرين", lbl_tipformcue:"نصيحة / ملاحظة أداء (اختياري)", hint_customexercise:"ليست موجودة في المكتبة؟ لا مشكلة — اكتبها هنا وستُضاف إلى يومك تمامًا مثل الاختيار من المكتبة.", modal_warmuplibrary_title:"🔥 مكتبة الإحماء", modal_warmupbuilder_title:"🔥 أنشئ إحماءك", lbl_warmupname:"اسم الإحماء", lbl_exercises_plural:"التمارين", hint_warmupbuilder:"أضف تمرينًا واحدًا في كل مرة — تمرين القفز، ثم شيء مختلف — واختر لكل تمرين وقته ومجموعاته وتكراراته الخاصة.", btn_savewarmup:"حفظ الإحماء", modal_addexercise_title:"إضافة تمرين", modal_editexercise_title:"تعديل التمرين", mode_timeonly:"⏱ الوقت فقط", lbl_secondsperset:"الثواني لكل مجموعة", lbl_restbetweensets:"الراحة بين المجموعات (ثانية)", hint_restbetweensets:"تُستخدم فقط عندما تكون المجموعات أكثر من 1.", lbl_restafterexercise:"الراحة بعد هذا التمرين (ثانية)", hint_restafterexercise:"استراحة قصيرة قبل الانتقال إلى تمرين الإحماء التالي.", btn_saveexercise:"حفظ التمرين", tab_voicecoach:"🔊 المدرب الصوتي", tab_countdown:"⏱ العد التنازلي", tab_circuit:"🔁 الدائرة التدريبية", toast_saved:"تم الحفظ", confirm_erase_pw:"سيؤدي هذا إلى محو جميع بياناتك نهائيًا (الملف الشخصي، الصور، الأجندة، التمارين) — لا يمكن التراجع عن هذا لأن كلمة المرور نفسها لا يمكن استعادتها. هل تريد المتابعة؟", confirm_removepw:"لا يمكن إزالة حماية كلمة المرور لأن البيانات المخزنة يجب أن تبقى مشفّرة دائمًا.", err_savebannerimg:"تعذّر حفظ هذه الصورة — يرجى المحاولة مرة أخرى.", err_maxdays:"يرجى اختيار 3650 يومًا (10 سنوات) أو أقل.", confirm_resetchallenge:"إعادة تعيين تحديك؟ سيؤدي هذا إلى مسح تاريخ البدء وخريطة التقدم.", err_keeponeprogram:"احتفظ ببرنامج واحد على الأقل.", confirm_deleteprogram:"هل تريد حذف هذا البرنامج بالكامل؟", msg_importedprogram:"تم استيراد \"{name}\" — {n} مرحلة (مراحل). راجعه ضمن المزيد ← الأدوات.", err_importreadfail:"تعذّرت قراءة هذا الملف — تأكد من أنه ملف برنامج .txt أو .csv (انظر أزرار تنزيل الدليل).", err_keeponeblock:"احتفظ بمرحلة واحدة على الأقل.", confirm_deleteblock:"هل تريد حذف هذا الأسبوع؟", err_keeponeday:"احتفظ بيوم واحد على الأقل.", confirm_deleteday:"هل تريد حذف هذا اليوم؟", err_exercisename:"أعطِ هذا التمرين اسمًا (مثال: \"تمرين القفز\").", err_addoneexercise:"أضف تمرينًا واحدًا على الأقل أولاً.", confirm_deletewarmup:"هل تريد حذف هذا الإحماء؟ ستفقد الأيام التي تستخدمه إحماءها المخصص.", err_savephoto:"تعذّر حفظ هذه الصورة — يرجى المحاولة مرة أخرى.", confirm_deletephoto:"هل تريد حذف هذه الصورة؟", confirm_removemeasuretype:"إزالة نوع القياس هذا؟ ستبقى القيم المسجّلة سابقًا محفوظة، وستُخفى فقط من هذه القوائم.", confirm_deletelog:"حذف سجل {date} الخاص بـ {name}؟ لا يمكن التراجع عن هذا.", confirm_deletealllog:"حذف جميع الجلسات المسجّلة لـ {name}؟ لا يمكن التراجع عن هذا.", err_pickexname:"اختر أو اكتب اسم تمرين أولاً.", err_logoneset:"سجّل مجموعة واحدة على الأقل (تكرارات و/أو وزن) قبل الحفظ.", err_pickday_nottrain:"اختر يوم تدريب أولاً (وليس يوم راحة).", err_noexercisesday:"لا توجد تمارين مسمّاة في هذا اليوم بعد — أضف بعضها أولاً ضمن المزيد ← الأدوات.", err_quota_full:"تعذّر الحفظ — لقد نفدت مساحة التخزين المحلية. يحدث هذا غالبًا بعد إضافة صورة بانر كبيرة. حاول إزالتها (أو اختر ملفًا أصغر) ثم احفظ مرة أخرى.", err_savefailed:"تعذّر حفظ تغييراتك — يرجى المحاولة مرة أخرى.", lbl_totalvolume:"إجمالي الحجم: {vol} كجم · {reps} تكرار", tt_deleteentry:"حذف هذا الإدخال", lbl_exlibrary_empty:"لا توجد تمارين في هذه الفئة.", lbl_recentsessions:"الجلسات الأخيرة", btn_clearall:"مسح الكل", ph_promptprogname:"اسم البرنامج الجديد:", val_defaultprogname:"تماريني", ph_promptblockname:"اسم الأسبوع الجديد:", val_defaultblockname:"أسبوع جديد", ph_promptdaylabel:"تسمية اليوم الجديد (مثال: السبت، اليوم 6):", lbl_noexercisesyet:"لا توجد تمارين بعد — استخدم \"📚 اختر تمرينًا من المكتبة\" أو \"✏️ إضافة تمرينك الخاص\" أدناه (اضغط ✏️ تعديل أعلاه إذا لم تظهر لك هذه الأزرار).", lbl_noexercisesadded:"لم تُضَف أي تمارين بعد — اضغط على \"+ إضافة تمرين\" أدناه.", lbl_nowarmupsyet:"لا توجد إحماءات بعد — اختر واحدًا من المكتبة أدناه.", lbl_nowarmupscat:"لا توجد إحماءات في هذه الفئة.", lbl_notenoughdata:"لا توجد بيانات كافية مسجّلة لهذه الفترة بعد — سجّل هذا القياس في عدة أيام مختلفة (الأجندة ← اختر تاريخًا ← القياسات) لرؤية اتجاه هنا.", ph_measuretype_field:"مثال: الصدر (سم)، نسبة الدهون %...", ph_customexname:"مثال: كوساك سكوات", ph_customextip:"مثال: حافظ على استقامة صدرك", ph_warmupnameinput:"مثال: إحمائي", ph_wbblockname:"مثال: تمرين القفز", lbl_step_singular:"خطوة", lbl_step_plural:"خطوات", lbl_total_word:"الإجمالي", val_importedprogram:"برنامج مستورد", lbl_devicelocaltime:"التوقيت المحلي للجهاز", tt_removeset:"إزالة المجموعة", lbl_lasttime:"المرة السابقة", lbl_personalrecord:"🏆 الرقم القياسي الشخصي", lbl_nopreviouslog:"لا يوجد سجل سابق لـ {name} بعد — سيحدد اليوم خط الأساس الذي يجب تجاوزه في المرة القادمة.", lbl_beatvolume:"تجاوز {vol} كجم من الحجم الإجمالي اليوم 💪", opt_customexercise:"✎ تمرين مخصص…", ph_wlreps:"التكرارات", ph_wlweight:"الوزن (كجم)", btn_howtovideo:"🔍 فيديو توضيحي", lbl_set_singular:"مجموعة", lbl_set_plural:"مجموعات", lbl_holdword:"ثبات", lbl_restword:"راحة", lbl_repsword:"تكرار", lbl_blockword:"المرحلة", lbl_weekword:"الأسبوع", lbl_copyword:"نسخة", btn_dupblock:"⧉ تكرار الأسبوع", btn_dupday:"⧉ تكرار اليوم", lbl_usekeyfile:"طلب ملف مفتاح أيضًا لفتح القفل (اختياري، حماية إضافية)", hint_keyfile:"ستقوم بتنزيل ملف مفتاح صغير أدناه. احتفظ به في مكان آمن ومنفصل عن هذا الجهاز — ستحتاج إليه وإلى كلمة المرور معًا لفتح القفل في المرة القادمة.", keyfile_download_notice:"تم تنزيل ملف المفتاح الخاص بك. احتفظ به في مكان آمن ومنفصل عن هذا الجهاز — ستحتاج إليه وإلى كلمة المرور معًا لفتح القفل.", lock_keyfile_active_text:"يلزم أيضًا ملف مفتاح منفصل لفتح القفل.", err_keyfile_missing:"يرجى اختيار ملف المفتاح أولاً.", err_keyfile_wrong:"كلمة مرور غير صحيحة، أو أن هذا ليس ملف المفتاح الصحيح.", err_keyfile_bad:"هذا لا يبدو ملف مفتاح صالحًا.", btn_selectkeyfile:"📎 اختيار ملف المفتاح", lbl_nofileselected:"لم يتم اختيار ملف", lbl_usekeyfile_export:"احمِ هذه النسخة الاحتياطية أيضًا بملف مفتاح منفصل", hint_keyfile_export:"سيؤدي هذا إلى تنزيل ملفين بدلاً من واحد — النسخة الاحتياطية وملف مفتاح. احتفظ بهما في مكانين منفصلين؛ ستحتاج إلى كليهما مع كلمة المرور للاستعادة.", keyfile_download_notice_backup:"تم تنزيل النسخة الاحتياطية وملف المفتاح. احتفظ بهما في مكانين مختلفين — ستحتاج إلى كليهما مع كلمة المرور لاستعادة هذه النسخة الاحتياطية.", hint_importkeyfile:"تم حماية هذه النسخة الاحتياطية بملف مفتاح منفصل. اختره أدناه.", err_file_toolarge_photo:"هذه الصورة كبيرة جدًا (الحد الأقصى 20 ميجابايت). يرجى اختيار ملف أصغر.", err_file_toolarge_backup:"ملف النسخة الاحتياطية هذا كبير جدًا (الحد الأقصى 500 ميجابايت).", err_file_toolarge_program:"ملف البرنامج هذا كبير جدًا (الحد الأقصى 5 ميجابايت).", tt_checkinhistory:"السجل", btn_challenge_settings:"🎯 إعدادات التحدي", modal_checkinhistory_title:"📋 السجل", tt_restminus:"تقليل الراحة 10 ثوانٍ", tt_restplus:"زيادة الراحة 10 ثوانٍ", card_dailytodo:"📅 المهام اليومية", ph_adddailytask:"أضف مهمة يومية...", hint_dailytodo:"تُعاد تلقائيًا كل يوم.", lbl_voice:"صوت المدرب", opt_voice_auto:"تلقائي (أفضل تطابق)", dailytodo_empty:"لا توجد مهام يومية بعد — أضف واحدة أدناه.", btn_ltoptions:"⚙ المزيد من الخيارات" }
};
const TTS_PHRASES = {
  en: { get_ready:'Get ready', rest:'Rest', do:'Do', reps_word:'reps', complete:'Workout complete. Great job.', round:'Round', next_up:'Next up:', hold_for:s=>`Hold for ${s} seconds`,
    warmup_intro:'Warm up.', warmup_outro:"Tap skip when you're ready to start.", set_of:(s,t)=>`Set ${s} of ${t}`, round_of:(r,t)=>`Round ${r} of ${t}` },
  nl: { get_ready:'Klaar maken', rest:'Rust', do:'Doe', reps_word:'herhalingen', complete:'Training voltooid. Goed gedaan.', round:'Ronde', next_up:'Volgende:', hold_for:s=>`Hou ${s} seconden vast`,
    warmup_intro:'Warming-up.', warmup_outro:'Tik op overslaan als je klaar bent om te beginnen.', set_of:(s,t)=>`Set ${s} van ${t}`, round_of:(r,t)=>`Ronde ${r} van ${t}` },
  ar_fusha: { get_ready:'استعد', rest:'راحة', do:'قم بـ', reps_word:'تكرار', complete:'اكتمل التمرين. أحسنت.', round:'الجولة', next_up:'التالي:', hold_for:s=>`حافظ على الوضعية ${s} ثانية`,
    warmup_intro:'الإحماء.', warmup_outro:'اضغط تخطي عندما تكون مستعدًا للبدء.', set_of:(s,t)=>`المجموعة ${s} من ${t}`, round_of:(r,t)=>`الجولة ${r} من ${t}` }
};
const RTL_LANGS = ['ar_fusha'];
function normalizeLangKey(v){
  if(!v) return 'en';
  const k = String(v).trim().toLowerCase().replace(/-/g, '_');
  return TRANSLATIONS[k] ? k : 'en';
}
function curLangKey(){ return normalizeLangKey(state.profile && state.profile.language); }
function tphrase(key){ const dict = TTS_PHRASES[curLangKey()] || TTS_PHRASES.en; return dict[key] !== undefined ? dict[key] : TTS_PHRASES.en[key]; }
function t(key){ const dict = TRANSLATIONS[curLangKey()] || TRANSLATIONS.en; return dict[key] !== undefined ? dict[key] : (TRANSLATIONS.en[key] !== undefined ? TRANSLATIONS.en[key] : key); }
function tf(key, vars){ let s = t(key); if(vars) Object.keys(vars).forEach(k=>{ s = s.split('{'+k+'}').join(vars[k]); }); return s; }

// ── Arabic-Indic numerals ──
const ARABIC_INDIC_DIGITS = {'0':'٠','1':'١','2':'٢','3':'٣','4':'٤','5':'٥','6':'٦','7':'٧','8':'٨','9':'٩'};
function toArabicIndic(str){ return String(str).replace(/[0-9]/g, d => ARABIC_INDIC_DIGITS[d]); }
function ln(n){ // "localize number" — converts digits to Arabic-Indic when an Arabic variant is selected
  const s = String(n);
  return curLangKey().startsWith('ar') ? toArabicIndic(s) : s;
}

// ── Language-aware calendar names ──
const MONTHS_BY_LANG = {
  en: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  nl: ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'],
  ar_fusha: ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر']
};
const DOW_BY_LANG = {
  en: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
  nl: ['ma','di','wo','do','vr','za','zo'],
  ar_fusha: ['ن','ث','ر','خ','ج','س','ح']
};
function getMonthsList(){ return MONTHS_BY_LANG[curLangKey()] || MONTHS_BY_LANG.en; }
function getDowList(){ return DOW_BY_LANG[curLangKey()] || DOW_BY_LANG.en; }
function applyLanguage(langKey){
  langKey = normalizeLangKey(langKey);
  const dict = TRANSLATIONS[langKey] || TRANSLATIONS.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if(dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if(dict[key] !== undefined) el.setAttribute('title', dict[key]);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if(dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
  });
  const isRtl = RTL_LANGS.includes(langKey);
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  document.documentElement.lang = LANG_BCP47[langKey] || 'en';
  document.body.classList.toggle('rtl-mode', isRtl);
  // A few pieces of UI are generated dynamically in JS (kanban columns, timer status
  // text, check-in chips) rather than being static tagged elements — re-render them
  // so they pick up the new language too.
  try{ if(typeof renderAgendaCal === 'function' && document.getElementById('agendaCalGrid')) renderAgendaCal(); }catch(e){}
  try{ if(typeof renderAgenda === 'function' && document.getElementById('heatmap')) renderAgenda(); }catch(e){}
  try{ if(typeof renderTodos === 'function' && document.getElementById('kbBoard')) renderTodos(); }catch(e){}
  try{
    if(typeof cdSyncFromInputs === 'function' && document.getElementById('cdDisplay')){
      if(!cdRunning) cdSyncFromInputs();
      document.getElementById('cdStatus').textContent = cdRunning ? t('st_running') : t('st_ready');
    }
  }catch(e){}
  try{ if(typeof ctRender === 'function' && document.getElementById('ctBarFill')) ctRender(); }catch(e){}
  try{ if(typeof ltRender === 'function' && document.getElementById('ltBarFill')) ltRender(); }catch(e){}
  try{ if(typeof renderCheckinPeriodChips === 'function' && document.getElementById('checkinPeriodChips')) renderCheckinPeriodChips(); }catch(e){}
  try{ if(typeof renderCheckinMetricSelect === 'function' && document.getElementById('checkinMetricSelect')) renderCheckinMetricSelect(); }catch(e){}
  try{ if(typeof startCheckin === 'function' && document.getElementById('toolsView-checkin')) startCheckin(); }catch(e){}
}
function updateProfileLanguage(v){
  const langKey = normalizeLangKey(v);
  state.profile.language = langKey;
  applyLanguage(langKey);
  save();
}

function safeHexColor(value, fallback){
  const v = typeof value === 'string' ? value.trim() : '';
  return /^#[0-9a-fA-F]{6}$/.test(v) ? v : fallback;
}

// ── Theme (full app background + independent accent colour) ──
const FULL_THEME_OPTIONS = [
  {key:'orange',   color:'#ff8c42', bg:'#11151b'},
  {key:'discord',  color:'#5865f2', bg:'#313338'},
  {key:'midnight', color:'#8b5cf6', bg:'#000000'},
  {key:'light',    color:'#3366ff', bg:'#ffffff'},
  {key:'sunset',   color:'#e0609e', bg:'#2b1b3d'},
];
const ACCENT_OPTIONS = [
  {key:'orange', color:'#ff8c42'},
  {key:'teal',   color:'#3ec9c0'},
  {key:'green',  color:'#4cc38a'},
  {key:'red',    color:'#e5566b'},
  {key:'blue',   color:'#5b8def'},
];
function hexToRgb(hex){
  hex = (hex || '').replace('#','');
  if(hex.length === 3) hex = hex.split('').map(c=>c+c).join('');
  const num = parseInt(hex, 16) || 0;
  return { r:(num>>16)&255, g:(num>>8)&255, b:num&255 };
}
function lightenHex(hex, amt){
  const {r,g,b} = hexToRgb(hex);
  const lr = Math.round(r + (255-r)*amt);
  const lg = Math.round(g + (255-g)*amt);
  const lb = Math.round(b + (255-b)*amt);
  return `rgb(${lr},${lg},${lb})`;
}
function applyFullTheme(){
  // App Theme is now fixed to a single look (no more Dark/Blurple/Midnight/etc picker).
  // Always force the default theme and clear any custom colors from an older save.
  document.documentElement.setAttribute('data-theme', 'orange');
  const style = document.documentElement.style;
  const customVars = ['--bg','--surface','--card','--card2','--border','--text','--muted','--muted2'];
  customVars.forEach(v=>style.removeProperty(v));
}
function applyAccentColor(){
  const accentKey = state.profile.accent || 'orange';
  let hex;
  if(accentKey === 'custom'){
    hex = safeHexColor(state.profile.customThemeColor, '#ff8c42');
  } else {
    hex = (ACCENT_OPTIONS.find(o=>o.key===accentKey) || ACCENT_OPTIONS[0]).color;
  }
  const {r,g,b} = hexToRgb(hex);
  const style = document.documentElement.style;
  style.setProperty('--accent', hex);
  style.setProperty('--accent-dim', `rgba(${r},${g},${b},0.14)`);
  style.setProperty('--accent2', lightenHex(hex, 0.35));
  style.setProperty('--accent-glow', `rgba(${r},${g},${b},0.55)`);
}
function applyTheme(){
  applyFullTheme();
  applyAccentColor();
}
function renderThemeSwatches(){
  const row = document.getElementById('themeSwatchRow');
  const fullRow = document.getElementById('themeFullRow');
  const panel = document.getElementById('customThemePanel');
  const currentFull = state.profile.theme || 'orange';
  const currentAccent = state.profile.accent || 'orange';

  if(fullRow){
    const items = FULL_THEME_OPTIONS.map(o => {
      const label = o.key === 'orange' ? t('opt_bgdefault') : t('theme_' + o.key);
      return `<button type="button" class="theme-full-item${currentFull===o.key?' active':''}" data-action="updateProfileTheme" data-key="${escAttr(o.key)}" title="${label}" aria-label="${label}">
        <span class="theme-full-swatch" style="background:${o.bg}"><span class="theme-full-swatch-accent" style="background:${o.color}"></span></span>
        <span class="theme-full-label">${label}</span>
      </button>`;
    }).join('');
    const customBg = safeHexColor(state.profile.customBgColor, '#171d25');
    const customCard = safeHexColor(state.profile.customCardColor, '#242e3a');
    const customLabel = t('theme_custom');
    const customItem = `<button type="button" class="theme-full-item${currentFull==='customfull'?' active':''}" data-action="setCustomFullTheme" title="${customLabel}" aria-label="${customLabel}">
        <span class="theme-full-swatch" style="background:${customBg}"><span class="theme-full-swatch-accent" style="background:${customCard}"></span></span>
        <span class="theme-full-label">${customLabel}</span>
      </button>`;
    fullRow.innerHTML = items + customItem;
  }
  if(panel){
    panel.style.display = currentFull === 'customfull' ? 'flex' : 'none';
    const bgInput = document.getElementById('customBgInput');
    const cardInput = document.getElementById('customCardInput');
    const textInput = document.getElementById('customTextInput');
    if(bgInput) bgInput.value = safeHexColor(state.profile.customBgColor, '#171d25');
    if(cardInput) cardInput.value = safeHexColor(state.profile.customCardColor, '#1e2630');
    if(textInput) textInput.value = safeHexColor(state.profile.customTextColor, '#eef1f5');
  }
  if(row){
    const presets = ACCENT_OPTIONS.map(o =>
      `<button type="button" class="theme-swatch${currentAccent===o.key?' active':''}" style="background:${o.color}" data-action="updateProfileAccent" data-key="${escAttr(o.key)}" title="${o.key}" aria-label="${o.key} accent"></button>`
    ).join('');
    const customColor = state.profile.customThemeColor || '#c8c8c8';
    const customTitle = t('theme_custom');
    const customSwatch = `<input type="color" class="theme-swatch${currentAccent==='custom'?' active':''}" id="customThemeInput" value="${customColor}" data-action="setCustomAccent" title="${customTitle}" aria-label="${customTitle}">`;
    row.innerHTML = presets + customSwatch;
  }
}
function setCustomFullTheme(){
  state.profile.theme = 'customfull';
  applyTheme();
  renderThemeSwatches();
  save();
}
function setCustomFullColor(part, hex){
  if(part === 'bg') state.profile.customBgColor = hex;
  else if(part === 'card') state.profile.customCardColor = hex;
  else if(part === 'text') state.profile.customTextColor = hex;
  state.profile.theme = 'customfull';
  applyTheme();
  save();
}
function resetCustomFullColors(){
  state.profile.customBgColor = null;
  state.profile.customCardColor = null;
  state.profile.customTextColor = null;
  state.profile.theme = 'orange';
  applyTheme();
  renderThemeSwatches();
  save();
}
function setCustomAccent(hex){
  state.profile.accent = 'custom';
  state.profile.customThemeColor = hex;
  applyTheme();
  renderThemeSwatches();
  save();
}
function updateProfileAccent(v){
  state.profile.accent = v;
  applyTheme();
  renderThemeSwatches();
  save();
}
function updateProfileTheme(v){
  state.profile.theme = v;
  applyTheme();
  renderThemeSwatches();
  save();
}
function toggleBannerEditDropdown(){
  const panel = document.getElementById('bannerEditModal');
  if(panel.classList.contains('open')) closeBannerEditModal();
  else openBannerEditModal();
}
function openBannerEditModal(){
  document.getElementById('bannerEditModal').classList.add('open');
  resetSettingsAccordion();
  positionBannerDropdown();
}
function closeBannerEditModal(){
  document.getElementById('bannerEditModal').classList.remove('open');
}
// Places the Profile & Banner popup next to the ⚙ button using its actual
// measured size, clamped so it always stays fully inside the window —
// instead of assuming there's enough room to the button's right, which is
// what caused it to run off the edge of the screen on narrower PC windows.
function positionBannerDropdown(){
  const btn = document.getElementById('bannerEditToggleBtn');
  const panel = document.getElementById('bannerEditModal');
  if(!btn || !panel || !panel.classList.contains('open')) return;
  const margin = 16;
  const btnRect = btn.getBoundingClientRect();
  const panelRect = panel.getBoundingClientRect();
  const vw = document.documentElement.clientWidth;
  const vh = document.documentElement.clientHeight;
  let left = btnRect.right - panelRect.width;
  const maxLeft = vw - margin - panelRect.width;
  const minLeft = margin;
  if(left > maxLeft) left = maxLeft;
  if(left < minLeft) left = minLeft;
  let top = btnRect.bottom + 12;
  const maxTop = vh - margin - panelRect.height;
  if(top > maxTop) top = Math.max(margin, maxTop);
  panel.style.left = left + 'px';
  panel.style.top = top + 'px';
}
window.addEventListener('resize', function(){
  const panel = document.getElementById('bannerEditModal');
  if(panel && panel.classList.contains('open')) positionBannerDropdown();
});
document.addEventListener('click', function(e){
  const panel = document.getElementById('bannerEditModal');
  if(!panel || !panel.classList.contains('open')) return;
  // Use composedPath() instead of e.target.closest(): some settings controls
  // (theme swatches, challenge chips, etc.) re-render their own container's
  // innerHTML on click, which detaches the clicked element from the document
  // by the time this bubbled listener runs. e.target.closest() would then fail
  // to find the wrapper and incorrectly close the panel. composedPath() is
  // captured at dispatch time, before any such DOM mutation, so it still
  // reflects the original click location.
  const path = typeof e.composedPath === 'function' ? e.composedPath() : [];
  const insideWrap = path.some(function(el){ return el.classList && el.classList.contains('icon-dropdown-wrap'); });
  if(!insideWrap) closeBannerEditModal();
});

// ── Voice Coach "More Options" popup (Block / Day / Warm-up / Coach Voice) ──
// Same dropdown-panel pattern as the Profile & Banner popup above, kept as
// its own small set of functions so the two popups can't interfere with
// each other's open/close state.
function toggleLtOptionsDropdown(){
  const panel = document.getElementById('ltOptionsPanel');
  if(!panel) return;
  if(panel.classList.contains('open')) closeLtOptionsDropdown();
  else openLtOptionsDropdown();
}
function openLtOptionsDropdown(){
  const panel = document.getElementById('ltOptionsPanel');
  const btn = document.getElementById('ltOptionsToggleBtn');
  if(!panel) return;
  panel.classList.add('open');
  if(btn) btn.setAttribute('aria-expanded', 'true');
  positionLtOptionsDropdown();
}
function closeLtOptionsDropdown(){
  const panel = document.getElementById('ltOptionsPanel');
  const btn = document.getElementById('ltOptionsToggleBtn');
  if(panel) panel.classList.remove('open');
  if(btn) btn.setAttribute('aria-expanded', 'false');
}
function positionLtOptionsDropdown(){
  const btn = document.getElementById('ltOptionsToggleBtn');
  const panel = document.getElementById('ltOptionsPanel');
  if(!btn || !panel || !panel.classList.contains('open')) return;
  const margin = 16;
  const btnRect = btn.getBoundingClientRect();
  const panelRect = panel.getBoundingClientRect();
  const vw = document.documentElement.clientWidth;
  const vh = document.documentElement.clientHeight;
  let left = btnRect.left;
  const maxLeft = vw - margin - panelRect.width;
  const minLeft = margin;
  if(left > maxLeft) left = maxLeft;
  if(left < minLeft) left = minLeft;
  let top = btnRect.bottom + 8;
  const maxTop = vh - margin - panelRect.height;
  if(top > maxTop) top = Math.max(margin, maxTop);
  panel.style.left = left + 'px';
  panel.style.top = top + 'px';
}
window.addEventListener('resize', function(){
  const panel = document.getElementById('ltOptionsPanel');
  if(panel && panel.classList.contains('open')) positionLtOptionsDropdown();
});
document.addEventListener('click', function(e){
  const panel = document.getElementById('ltOptionsPanel');
  if(!panel || !panel.classList.contains('open')) return;
  const path = typeof e.composedPath === 'function' ? e.composedPath() : [];
  const insideWrap = path.some(function(el){ return el.classList && el.classList.contains('lt-options-wrap'); });
  if(!insideWrap) closeLtOptionsDropdown();
});
function resetSettingsAccordion(){
  document.querySelectorAll('#bannerEditModal .settings-group').forEach(function(group){
    const body = group.querySelector('.settings-group-body');
    if(!body) return;
    body.style.transition = 'none';
    group.classList.remove('sg-open');
    body.style.maxHeight = '0px';
    void body.offsetHeight;
    body.style.transition = '';
  });
}
function toggleSettingsGroup(headerEl){
  const group = headerEl.closest('.settings-group');
  if(!group) return;
  const body = group.querySelector('.settings-group-body');
  if(!body) return;
  const isOpen = group.classList.contains('sg-open');
  if(isOpen){
    body.style.maxHeight = body.scrollHeight + 'px';
    requestAnimationFrame(function(){
      body.style.maxHeight = '0px';
    });
    group.classList.remove('sg-open');
  } else {
    group.classList.add('sg-open');
    body.style.maxHeight = body.scrollHeight + 'px';
    body.addEventListener('transitionend', function te(e){
      if(e.propertyName === 'max-height'){
        if(group.classList.contains('sg-open')) body.style.maxHeight = 'none';
        body.removeEventListener('transitionend', te);
      }
    });
  }
}
function toggleProgressCard(){
  const card = document.getElementById('progressCard');
  if(!card) return;
  const btn = card.querySelector('.program-collapse-toggle');
  const isOpen = card.classList.toggle('open');
  if(btn) btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}
function toggleProgressMapCard(){
  const card = document.getElementById('progressMapCard');
  if(!card) return;
  const btn = card.querySelector('.program-collapse-toggle');
  const isOpen = card.classList.toggle('open');
  if(btn) btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}
function toggleGoalsCard(){
  const card = document.getElementById('goalsCard');
  if(!card) return;
  const btn = card.querySelector('.program-collapse-toggle');
  const isOpen = card.classList.toggle('open');
  if(btn) btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}
function toggleDailyTodoCard(){
  const card = document.getElementById('dailyTodoCard');
  if(!card) return;
  const btn = card.querySelector('.program-collapse-toggle');
  const isOpen = card.classList.toggle('open');
  if(btn) btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

// ═══════════════════════════ TABS ═══════════════════════════
const TAB_ORDER = ['agenda','todo','timers','tools'];
function switchTab(name){
  const __prevTab = currentTabName();
  document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active', p.id === 'page-'+name));
  document.querySelectorAll('.tabbtn').forEach(b=>b.classList.toggle('active', b.dataset.tab === name));
  if(name !== 'timers' && name !== 'tools'){ closeAllSubviewMenus(); }
  window.scrollTo(0,0);
  if(name === 'timers' && typeof ltPopulatePrograms === 'function'){ ltPopulatePrograms(); }
  if(__prevTab !== name && typeof pushTabHistory === 'function'){ pushTabHistory(name); }
  try{ localStorage.setItem(LAST_TAB_KEY, name); }catch(e){}
}
// Timers and More are drop-up triggers on mobile: tapping them switches to
// that tab AND opens its sub-menu (Voice Coach/Countdown/Circuit, or
// Profile/Tools/Check-in/Website) right above the bottom bar. Tapping the
// same tab again while its menu is already open just closes the menu.
// On desktop this still switches tabs normally — the drop-up CSS only
// exists inside the mobile media query, so it's a harmless no-op there.
function switchTabWithMenu(name){
  // First tap on a tab just switches to it, like a normal tab (menu closed).
  // Tapping the SAME tab again (it's already active) toggles its drop-up
  // sub-menu open/closed instead of doing nothing.
  const wasActive = currentTabName() === name;
  if(!wasActive){
    switchTab(name);
    closeAllSubviewMenus();
    return;
  }
  const panel = document.querySelector(name === 'tools' ? '#page-tools .tools-picker' : '#page-timers .tools-picker');
  const wasOpen = panel ? panel.classList.contains('open') : false;
  switchTab(name);
  if(wasOpen){
    closeAllSubviewMenus();
  } else {
    openSubviewMenu(name);
  }
}
function scrollToTop(){ window.scrollTo({top:0, behavior:'smooth'}); }
function currentTabName(){
  const active = document.querySelector('.tabbtn.active');
  return active ? active.dataset.tab : TAB_ORDER[0];
}
// Re-opening the app (fresh page load) lands you back on whichever main tab
// (Agenda/To-Do/Timers/More) you were last on, instead of always jumping to Agenda.
function restoreLastTab(){
  let last = null;
  try{ last = localStorage.getItem(LAST_TAB_KEY); }catch(e){}
  if(!last || !TAB_ORDER.includes(last) || last === currentTabName()) return;
  document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active', p.id === 'page-'+last));
  document.querySelectorAll('.tabbtn').forEach(b=>b.classList.toggle('active', b.dataset.tab === last));
  if(last === 'timers' && typeof ltPopulatePrograms === 'function'){ ltPopulatePrograms(); }
  try{ history.replaceState({appTab:last}, ''); }catch(e){}
}
// ── Mobile drop-up menus, triggered from the Timers / More tab buttons ──
function openSubviewMenu(which){
  const panel = document.querySelector(which === 'tools' ? '#page-tools .tools-picker' : '#page-timers .tools-picker');
  if(!panel) return;
  closeAllSubviewMenus();
  panel.classList.add('open');
  const trigger = document.querySelector('.tabbtn[data-tab="'+which+'"]');
  if(trigger){ trigger.classList.add('menu-open'); trigger.setAttribute('aria-expanded','true'); }
  const backdrop = document.getElementById('subviewBackdrop');
  if(backdrop) backdrop.classList.add('open');
}
function closeAllSubviewMenus(){
  document.querySelectorAll('.tools-picker.open').forEach(p=>p.classList.remove('open'));
  document.querySelectorAll('.tabbtn.menu-open').forEach(b=>{ b.classList.remove('menu-open'); b.setAttribute('aria-expanded','false'); });
  const backdrop = document.getElementById('subviewBackdrop');
  if(backdrop) backdrop.classList.remove('open');
}
let currentToolsSubview = 'profile';
function switchToolsView(view){
  if(view === 'website'){
    window.open('https://beerleert.github.io/', '_blank', 'noopener,noreferrer');
    closeAllSubviewMenus();
    return;
  }
  currentToolsSubview = view;
  document.querySelectorAll('.tools-subview').forEach(el=>el.classList.toggle('active', el.id === 'toolsView-'+view));
  document.querySelectorAll('.tools-tabbtn').forEach(b=>b.classList.toggle('active', b.dataset.view === view));
  if(view === 'checkin' && typeof startCheckin === 'function') startCheckin();
  closeAllSubviewMenus();
}
let currentTimerView = 'lifting';
function switchTimerView(view){
  currentTimerView = view;
  document.querySelectorAll('.timer-subview').forEach(el=>el.classList.toggle('active', el.id === 'timerView-'+view));
  document.querySelectorAll('.timer-tabbtn').forEach(b=>b.classList.toggle('active', b.dataset.view === view));
  closeAllSubviewMenus();
  if(view === 'lifting' && typeof populateLtVoiceSelect === 'function') populateLtVoiceSelect();
}
// ═══════════════════════════ AGENDA ═══════════════════════════
const GOAL_PRESETS = [30, 60, 90, 365];

function renderGoalChips(){
  const wrap = document.getElementById('goalChips');
  wrap.innerHTML = GOAL_PRESETS.map(n=>
    `<button class="chip ${state.goalDays===n?'active':''}" data-action="setGoal" data-idx="${n}">${ln(n)}</button>`
  ).join('');
  const isCustom = !GOAL_PRESETS.includes(state.goalDays);
  const customEl = document.getElementById('customGoalInput');
  if(customEl && document.activeElement !== customEl){
    customEl.value = isCustom ? state.goalDays : '';
  }
  const clearBtn = document.getElementById('clearCustomGoalBtn');
  if(clearBtn) clearBtn.style.display = isCustom ? '' : 'none';
}
function setGoal(n){
  state.goalDays = n;
  renderGoalChips();
  renderAgenda();
  save();
}
function applyCustomGoal(){
  const raw = document.getElementById('customGoalInput').value;
  const v = parseInt(raw);
  if(!raw || !v || v<1){ alert(t('err_customgoal_invalid')); return; }
  if(v > 3650){ alert(t('err_maxdays')); return; }
  state.goalDays = v;
  renderGoalChips();
  renderAgenda();
  save();
}
function clearCustomGoal(){
  state.goalDays = GOAL_PRESETS[0];
  document.getElementById('customGoalInput').value = '';
  renderGoalChips();
  renderAgenda();
  save();
}

function currentDay(){
  if(!state.startTimestamp) return 1;
  const diff = Date.now() - state.startTimestamp;
  const d = Math.floor(diff/86400000) + 1;
  return Math.max(1, Math.min(d, state.goalDays));
}

function handleStartBtn(){
  if(state.startTimestamp) return;
  state.startTimestamp = Date.now();
  renderAgenda();
  save();
}
function resetChallenge(){
  if(!confirm(t('confirm_resetchallenge'))) return;
  state.startTimestamp = null;
  state.completedDays = [];
  renderAgenda();
  save();
}
function formatStartDateTime(ts){
  const d = new Date(ts);
  return `${pad2(d.getDate())}-${pad2(d.getMonth()+1)}-${d.getFullYear()} ${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
}
function formatElapsedSinceStart(ts){
  const diffMs = Math.max(0, Date.now() - ts);
  const totalHours = Math.floor(diffMs / 3600000);
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;
  return `${ln(days)} ${t('lbl_days')}, ${ln(hours)} ${t('lbl_hours')}`;
}
function openStartDateModal(){
  const d = state.startTimestamp ? new Date(state.startTimestamp) : new Date();
  document.getElementById('startDateInput').value = `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`;
  document.getElementById('startTimeInput').value = `${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
  document.getElementById('startDateModal').classList.add('open');
}
function closeStartDateModal(){ document.getElementById('startDateModal').classList.remove('open'); }
function openChallengeSettingsModal(){ document.getElementById('challengeSettingsModal').classList.add('open'); }
function closeChallengeSettingsModal(){ document.getElementById('challengeSettingsModal').classList.remove('open'); }
function saveStartDateModal(){
  const dateVal = document.getElementById('startDateInput').value;
  const timeVal = document.getElementById('startTimeInput').value || '00:00';
  if(!dateVal){ closeStartDateModal(); return; }
  const [y,mo,da] = dateVal.split('-').map(Number);
  const [hh,mm] = timeVal.split(':').map(Number);
  state.startTimestamp = new Date(y, mo-1, da, hh, mm).getTime();
  closeStartDateModal();
  renderAgenda();
  save();
}

function renderAgenda(){
  renderGoalChips();
  const day = currentDay();

  const pct = Math.min(100, Math.round((state.completedDays.length / state.goalDays) * 100));
  document.getElementById('progFill').style.width = pct+'%';
  document.getElementById('progLabel').textContent = ln(state.completedDays.length) + ' / ' + ln(state.goalDays) + ' ' + t('lbl_days');
  document.getElementById('progPct').textContent = ln(pct)+'%';

  const startBtn = document.getElementById('startBtn');
  const extraRow = document.getElementById('startExtraRow');
  if(state.startTimestamp){
    startBtn.textContent = t('btn_started_prefix') + ' ' + formatElapsedSinceStart(state.startTimestamp);
    startBtn.classList.add('btn-ghost');
    startBtn.disabled = true;
    extraRow.style.display = 'flex';
  } else {
    startBtn.textContent = t('btn_start_challenge');
    startBtn.classList.remove('btn-ghost');
    startBtn.disabled = false;
    extraRow.style.display = 'none';
  }

  const hm = document.getElementById('heatmap');
  let html = '';
  for(let d=1; d<=state.goalDays; d++){
    let cls = 'hcell';
    if(state.startTimestamp && d < day) cls += ' done';
    if(d === day && state.startTimestamp) cls += ' today';
    if(d > day) cls += ' future';
    html += `<div class="${cls}">${ln(d)}</div>`;
  }
  hm.innerHTML = html;
}

// ── ENDLESS AGENDA CALENDAR (language-aware) ──
let agendaViewDate = new Date();
let agendaEditingKey = null;

function pad2(n){ return String(n).padStart(2,'0'); }
function dateKey(y,m,d){ return `${y}-${pad2(m+1)}-${pad2(d)}`; }
function dateKeyFromDate(dt){ return dateKey(dt.getFullYear(), dt.getMonth(), dt.getDate()); }

function entryHasData(e){
  if(!e) return false;
  if(typeof e === 'string') return e.trim().length > 0;
  const m = e.measurements;
  const hasMeasure = m && (m.weight || m.waist || (m.custom && Object.values(m.custom).some(v=>v)));
  return !!(e.note && e.note.trim()) || (e.food && e.food.length > 0) || !!e.sleepHours || (e.water && e.water > 0) || hasMeasure;
}
function renderAgendaCal(){
  const y = agendaViewDate.getFullYear(), m = agendaViewDate.getMonth();
  document.getElementById('agendaMonthLbl').textContent = `${getMonthsList()[m]} ${ln(y)}`;
  const first = new Date(y, m, 1);
  const startOffset = (first.getDay() + 6) % 7; // Monday-first
  const daysInMonth = new Date(y, m+1, 0).getDate();
  const todayKey = dateKeyFromDate(new Date());

  let html = getDowList().map(d => `<div class="acal-dow">${d}</div>`).join('');
  for(let i=0; i<startOffset; i++) html += `<div class="acal-cell empty"></div>`;
  for(let d=1; d<=daysInMonth; d++){
    const key = dateKey(y, m, d);
    let cls = 'acal-cell';
    if(key === todayKey) cls += ' today';
    if(entryHasData(state.agendaEntries[key])) cls += ' has-note';
    html += `<div class="${cls}" data-action="openAgendaEntry" data-key="${escAttr(key)}">${ln(d)}</div>`;
  }
  document.getElementById('agendaCalGrid').innerHTML = html;
}
function agendaCalPrev(){ agendaViewDate.setMonth(agendaViewDate.getMonth()-1); renderAgendaCal(); }
function agendaCalNext(){ agendaViewDate.setMonth(agendaViewDate.getMonth()+1); renderAgendaCal(); }
function agendaCalToday(){ agendaViewDate = new Date(); renderAgendaCal(); }

// ── Daily log entry (per date — works for any past or future date, so you can backlog) ──
function ensureEntryObj(key){
  let e = state.agendaEntries[key];
  if(typeof e === 'string'){
    e = { note: e, sleepHours:'', water:0, food:[], measurements:{weight:'',waist:'',custom:{}} };
    state.agendaEntries[key] = e;
  } else if(!e){
    e = { note:'', sleepHours:'', water:0, food:[], measurements:{weight:'',waist:'',custom:{}} };
    state.agendaEntries[key] = e;
  } else {
    if(e.sleepHours === undefined) e.sleepHours = '';
    if(e.water === undefined) e.water = 0;
    // Migrate legacy data: water used to be stored as a "bottle count" (0-20ish).
    // Cup-based ml values are always >=100, so a small leftover integer is a
    // pre-update value — convert it using the old default bottle size once.
    if(!e._waterMigrated){
      if(e.water > 0 && e.water <= 20) e.water = e.water * 500;
      e._waterMigrated = true;
    }
    if(!Array.isArray(e.food)) e.food = [];
    if(e.note === undefined) e.note = '';
    if(!e.measurements) e.measurements = {weight:'',waist:'',custom:{}};
    if(!e.measurements.custom) e.measurements.custom = {};
  }
  return e;
}
function openAgendaEntry(key){
  agendaEditingKey = key;
  const [y,mo,d] = key.split('-').map(Number);
  document.getElementById('agendaEntryDateLbl').textContent = `${pad2(d)}-${pad2(mo)}-${y}`;
  renderAgendaEntryModal();
  document.getElementById('agendaEntryModal').classList.add('open');
}
function closeAgendaEntry(){
  document.getElementById('agendaEntryModal').classList.remove('open');
  agendaEditingKey = null;
  renderAgendaCal();
}
function renderAgendaEntryModal(){
  const e = ensureEntryObj(agendaEditingKey);
  const sleepInput = document.getElementById('entrySleep');
  if(document.activeElement !== sleepInput) sleepInput.value = e.sleepHours || '';
  renderEntryWater(e);
  renderEntryWaterCups(e);
  renderEntryFoodList(e);
  renderEntryMeasureGrid(e);
  const noteInput = document.getElementById('agendaEntryText');
  if(document.activeElement !== noteInput) noteInput.value = e.note || '';
}
function renderEntryMeasureGrid(e){
  const wrap = document.getElementById('entryMeasureGrid');
  const built = [
    {key:'weight', label:'Weight (kg)'},
    {key:'waist', label:'Waist (cm)'}
  ];
  let html = built.map(t => `
    <div class="fg-item"><label class="f-label">${t.label}</label><input type="number" step="0.1" value="${escAttr(e.measurements[t.key]||'')}" data-action="updateEntryMeasure" data-key="${escAttr(t.key)}" data-custom="0"></div>
  `).join('');
  html += state.measurementTypes.map(t => `
    <div class="fg-item"><label class="f-label">${escHtml(t.label)}</label><input type="number" step="0.1" value="${escAttr(e.measurements.custom[t.id]||'')}" data-action="updateEntryMeasure" data-key="${escAttr(t.id)}" data-custom="1"></div>
  `).join('');
  wrap.innerHTML = html;
}
function updateEntryMeasure(key, val, isCustom){
  const e = ensureEntryObj(agendaEditingKey);
  if(isCustom) e.measurements.custom[key] = val;
  else e.measurements[key] = val;
  debouncedSave();
}
function updateEntrySleep(v){
  const e = ensureEntryObj(agendaEditingKey);
  e.sleepHours = v;
  debouncedSave();
}
function updateEntryNote(v){
  const e = ensureEntryObj(agendaEditingKey);
  e.note = v;
  debouncedSave();
}
function renderEntryWater(e){
  const unitMl = state.waterCupMediumMl || 350;
  const targetMl = state.waterTargetMl || 2000;
  const targetBottles = Math.max(1, Math.round(targetMl / unitMl));
  const filledBottles = Math.round((e.water||0) / unitMl);
  const showCount = Math.max(targetBottles, filledBottles);
  const wrap = document.getElementById('entryWaterRow');
  let html = '';
  for(let i=0; i<showCount; i++){
    html += `<span class="water-bottle ${i < filledBottles ? 'filled' : ''} ${i===targetBottles-1?'goal-marker':''}">${BOTTLE_SVG}</span>`;
  }
  wrap.innerHTML = html;
  document.getElementById('entryWaterCount').textContent = `${(e.water||0).toLocaleString()} / ${targetMl.toLocaleString()} ml`;
}
function renderEntryWaterCups(e){
  const wrap = document.getElementById('entryWaterCupRow');
  if(!wrap) return;
  const cups = [
    {key:'xs', label:t('btn_cupxs')||'XS', ml: state.waterCupXSMl || 100},
    {key:'small', label:t('btn_cupsmall')||'Small', ml: state.waterCupSmallMl || 200},
    {key:'medium', label:t('btn_cupmedium')||'Medium', ml: state.waterCupMediumMl || 350},
    {key:'large', label:t('btn_cuplarge')||'Large', ml: state.waterCupLargeMl || 500},
    {key:'xl', label:t('btn_cupxl')||'XL', ml: state.waterCupXLMl || 750}
  ];
  wrap.innerHTML = cups.map(c => `<button type="button" class="water-cup-btn" data-action="addWaterCup" data-key="${escAttr(c.key)}">💧 ${escHtml(c.label)}<small>${c.ml} ml</small></button>`).join('');
}
function addWaterCup(size){
  const e = ensureEntryObj(agendaEditingKey);
  const ml = size==='xs' ? (state.waterCupXSMl||100) : size==='small' ? (state.waterCupSmallMl||200) : size==='large' ? (state.waterCupLargeMl||500) : size==='xl' ? (state.waterCupXLMl||750) : (state.waterCupMediumMl||350);
  e.water = Math.max(0, (e.water||0) + ml);
  renderEntryWater(e);
  save();
}
function resetEntryWater(){
  const e = ensureEntryObj(agendaEditingKey);
  e.water = 0;
  renderEntryWater(e);
  save();
}
function renderWaterSettingsUI(){
  const xsEl = document.getElementById('waterCupXSInput');
  const smallEl = document.getElementById('waterCupSmallInput');
  const medEl = document.getElementById('waterCupMediumInput');
  const largeEl = document.getElementById('waterCupLargeInput');
  const xlEl = document.getElementById('waterCupXLInput');
  const targetEl = document.getElementById('waterTargetMlInput');
  if(xsEl && document.activeElement !== xsEl) xsEl.value = state.waterCupXSMl || 100;
  if(smallEl && document.activeElement !== smallEl) smallEl.value = state.waterCupSmallMl || 200;
  if(medEl && document.activeElement !== medEl) medEl.value = state.waterCupMediumMl || 350;
  if(largeEl && document.activeElement !== largeEl) largeEl.value = state.waterCupLargeMl || 500;
  if(xlEl && document.activeElement !== xlEl) xlEl.value = state.waterCupXLMl || 750;
  if(targetEl && document.activeElement !== targetEl) targetEl.value = state.waterTargetMl || 2000;
}
function updateWaterCupSettings(){
  state.waterCupXSMl = Math.max(1, parseInt(document.getElementById('waterCupXSInput').value) || 100);
  state.waterCupSmallMl = Math.max(1, parseInt(document.getElementById('waterCupSmallInput').value) || 200);
  state.waterCupMediumMl = Math.max(1, parseInt(document.getElementById('waterCupMediumInput').value) || 350);
  state.waterCupLargeMl = Math.max(1, parseInt(document.getElementById('waterCupLargeInput').value) || 500);
  state.waterCupXLMl = Math.max(1, parseInt(document.getElementById('waterCupXLInput').value) || 750);
  state.waterTargetMl = Math.max(1, parseInt(document.getElementById('waterTargetMlInput').value) || 2000);
  if(agendaEditingKey){
    const e = ensureEntryObj(agendaEditingKey);
    renderEntryWater(e);
    renderEntryWaterCups(e);
  }
  save();
}
function renderEntryFoodList(e){
  const wrap = document.getElementById('entryFoodList');
  if(!e.food.length){ wrap.innerHTML = `<div class="empty-msg" style="padding:6px 0;">${t('food_empty')}</div>`; return; }
  wrap.innerHTML = e.food.map((item,i) => `
    <div class="food-item">
      <input class="food-item-txt food-item-input" type="text" value="${escAttr(item)}" data-action="updateEntryFood" data-idx="${i}">
      <button class="food-item-del" data-action="deleteEntryFood" data-idx="${i}">✕</button>
    </div>
  `).join('');
}
function addEntryFood(){
  const input = document.getElementById('entryFoodInput');
  const val = input.value.trim();
  if(!val) return;
  const e = ensureEntryObj(agendaEditingKey);
  e.food.push(val);
  input.value = '';
  renderEntryFoodList(e);
  save();
}
function updateEntryFood(i, val){
  const e = ensureEntryObj(agendaEditingKey);
  if(!Array.isArray(e.food) || e.food[i] === undefined) return;
  e.food[i] = val;
  debouncedSave();
}
function deleteEntryFood(i){
  const e = ensureEntryObj(agendaEditingKey);
  e.food.splice(i,1);
  renderEntryFoodList(e);
  save();
}


// ═══════════════════════════ WORKOUTS ═══════════════════════════
function renderProgramSelect(){
  const sel = document.getElementById('programSelect');
  sel.innerHTML = state.programs.map((p,i)=>`<option value="${i}" ${i===state.activeProgram?'selected':''}>${escAttr(p.name)}</option>`).join('');
}
function selectProgram(i){
  state.activeProgram = i; state.activeBlock = 0; state.activeDay = 0;
  renderWorkouts(); save();
}
function addProgram(){
  const name = prompt(t('ph_promptprogname'), t('val_defaultprogname'));
  if(!name) return;
  state.programs.push({ name, nutrition:'', blocks:[ { name:t('lbl_weekword')+' 1', info:'', days:[ {label:t('lbl_day')+' 1', rest:false, warmup:'', exercises:[], restNote:''} ] } ] });
  state.activeProgram = state.programs.length-1; state.activeBlock=0; state.activeDay=0;
  renderWorkouts(); save();
  if(typeof ltPopulatePrograms === 'function') ltPopulatePrograms();
}
function deleteProgram(){
  if(state.programs.length<=1){ alert(t('err_keeponeprogram')); return; }
  if(!confirm(t('confirm_deleteprogram'))) return;
  state.programs.splice(state.activeProgram,1);
  state.activeProgram = 0; state.activeBlock = 0; state.activeDay = 0;
  renderWorkouts(); save();
  if(typeof ltPopulatePrograms === 'function') ltPopulatePrograms();
}

// ── Import a workout program from a plain-text file (self-written or AI-generated) ──
function parseProgramText(text){
  if(text.charCodeAt(0) === 0xFEFF) text = text.slice(1); // strip a UTF-8 BOM some editors add
  const lines = text.split(/\r?\n/);
  const program = { name: t('val_importedprogram'), nutrition:'', blocks: [] };
  let curBlk = null, curDy = null;
  function ensureBlock(){
    if(!curBlk){
      curBlk = { name: t('lbl_blockword')+' 1', info:'', days: [] };
      program.blocks.push(curBlk);
    }
    return curBlk;
  }
  function ensureDay(){
    ensureBlock();
    if(!curDy){
      curDy = { label: t('lbl_day')+' 1', rest:false, warmup:'', restNote:'', exercises: [] };
      curBlk.days.push(curDy);
    }
    return curDy;
  }
  for(const rawLine of lines){
    const line = rawLine.trim();
    if(!line || line.startsWith('#')) continue;
    if(/^PROGRAM\s*:/i.test(line)){ program.name = line.replace(/^PROGRAM\s*:/i,'').trim() || program.name; continue; }
    if(/^BLOCK\s*:/i.test(line)){
      curBlk = { name: line.replace(/^BLOCK\s*:/i,'').trim() || (t('lbl_blockword')+' '+(program.blocks.length+1)), info:'', days: [] };
      program.blocks.push(curBlk); curDy = null; continue;
    }
    if(/^INFO\s*:/i.test(line)){ ensureBlock().info = line.replace(/^INFO\s*:/i,'').trim(); continue; }
    if(/^DAY\s*:/i.test(line)){
      ensureBlock();
      curDy = { label: line.replace(/^DAY\s*:/i,'').trim() || (t('lbl_day')+' '+(curBlk.days.length+1)), rest:false, warmup:'', restNote:'', exercises: [] };
      curBlk.days.push(curDy); continue;
    }
    if(/^REST\s*$/i.test(line)){ ensureDay().rest = true; continue; }
    if(/^WARMUP\s*:/i.test(line)){ ensureDay().warmup = line.replace(/^WARMUP\s*:/i,'').trim(); continue; }
    // TYPE is the current, documented keyword for a day's workout type
    // (CIRCUIT vs STRENGTH). MODE is kept working as an older alias so
    // existing hand-written or previously-exported files still import
    // correctly — both set the exact same field.
    if(/^(TYPE|MODE)\s*:/i.test(line)){ ensureDay().circuit = /circuit/i.test(line.replace(/^(TYPE|MODE)\s*:/i,'').trim()); continue; }
    // ROUNDS belongs to the whole CIRCUIT day, not to any single exercise —
    // see the CRITICAL CIRCUIT RULE in the template header below.
    if(/^ROUNDS\s*:/i.test(line)){ ensureDay().rounds = parseInt(line.replace(/^ROUNDS\s*:/i,'').trim(),10) || 0; continue; }
    if(/^NOTE\s*:/i.test(line)){ ensureDay().restNote = line.replace(/^NOTE\s*:/i,'').trim(); continue; }
    if(/^[-*]\s*/.test(line)){
      const body = line.replace(/^[-*]\s*/,'');
      const parts = body.split('|').map(s=>s.trim());
      const name = parts[0]||'', detail = parts[1]||'', tip = parts[2]||'';
      const stats = deriveStatsFromDetail(detail);
      ensureDay().exercises.push({ name, detail, tip, sets:stats.sets, reps:stats.reps, restSec:stats.restSec, holdSec:stats.holdSec, mode:stats.mode });
      continue;
    }
    // any other line is ignored — the parser is intentionally lenient
  }
  if(!program.blocks.length){
    program.blocks.push({ name:t('lbl_blockword')+' 1', info:'', days:[{label:t('lbl_day')+' 1', rest:false, warmup:'', restNote:'', exercises:[]}] });
  }
  return program;
}

// Best-effort extraction of structured Sets / Reps / Rest / Hold data out of a
// free-text "detail" string like "3 sets x 10 reps, rest 45s" or "4 sets x 30s
// hold, rest 60s". Used when importing a program (.txt or .csv) so the Lifting
// Timer and Voice Coach work right away, instead of everything showing up as
// "No sets/rest set" until someone opens ⚙ Sets & Rest on every exercise by hand.
function deriveStatsFromDetail(detail){
  const out = { sets:0, reps:'', restSec:0, holdSec:0, mode:'reps' };
  if(!detail) return out;
  const setsMatch = detail.match(/(\d+)\s*sets?/i);
  if(setsMatch) out.sets = parseInt(setsMatch[1],10) || 0;
  const restMatch = detail.match(/rest\s*(?:of\s*)?(\d+)/i);
  if(restMatch) out.restSec = parseInt(restMatch[1],10) || 0;
  // Work on a copy with any "rest ...s" portion cut out, so a rest duration
  // can never be mistaken for the exercise's own hold/reps value below.
  const withoutRest = restMatch ? (detail.slice(0, restMatch.index) + detail.slice(restMatch.index + restMatch[0].length)) : detail;
  // Hold/time: the classic form says "hold" explicitly (e.g. "30s hold").
  // CIRCUIT exercises may also just state a bare duration with no "hold"
  // word at all (e.g. "30 sec" for a timed interval like Plank) — the third
  // pattern below catches that.
  const holdMatch = withoutRest.match(/(\d+)\s*(?:s|sec|secs|second|seconds)?\s*hold/i) ||
                     withoutRest.match(/hold\s*(?:for)?\s*(\d+)\s*(?:s|sec|secs|second|seconds)?/i) ||
                     withoutRest.match(/(\d+)\s*(?:s|sec|secs|second|seconds)\b/i);
  // Reps: the classic STRENGTH form has a sets multiplier first, e.g. "4 sets
  // x 8 reps" — the number right after "x"/"×" is the reps. CIRCUIT exercises
  // have no sets multiplier at all (e.g. "10 reps" or "12-15 reps"), so fall
  // back to just grabbing whatever number/range/AMRAP sits right before the
  // word "reps".
  const repsMatch = withoutRest.match(/[×x]\s*([a-z0-9–\-\s]+?)\s*reps?\b/i) ||
                     withoutRest.match(/(\d+(?:\s*[-–]\s*\d+)?|amrap)\s*reps?\b/i);
  if(holdMatch && !repsMatch){
    out.mode = 'time';
    out.holdSec = parseInt(holdMatch[1],10) || 0;
  } else if(repsMatch){
    out.mode = 'reps';
    out.reps = repsMatch[1].trim();
  }
  return out;
}

// Minimal CSV parser: handles quoted fields, embedded commas/quotes, and both
// \n and \r\n line endings. Hand-written (no external library) because this
// app is a single offline HTML file — see the CSP note at the top of <head>.
function parseCSVRows(text){
  const rows = [];
  let row = [], field = '', inQuotes = false;
  const s = text.replace(/\r\n?/g, '\n');
  for(let i=0; i<s.length; i++){
    const c = s[i];
    if(inQuotes){
      if(c === '"'){
        if(s[i+1] === '"'){ field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else if(c === '"'){
      inQuotes = true;
    } else if(c === ','){
      row.push(field); field = '';
    } else if(c === '\n'){
      row.push(field); rows.push(row); row = []; field = '';
    } else {
      field += c;
    }
  }
  row.push(field);
  if(row.length > 1 || row[0] !== '') rows.push(row);
  return rows;
}

// Parses the CSV version of the workout program template. One row = one
// exercise; Program/Block/Day are meant to be repeated on every row that
// belongs to them, but a blank cell just carries forward the previous row's
// value, so the file still imports fine even if someone doesn't repeat them.
function parseProgramCSV(text){
  if(text.charCodeAt(0) === 0xFEFF) text = text.slice(1);
  const allRows = parseCSVRows(text);
  const dataRows = allRows.filter(r=>{
    const first = (r[0]||'').trim();
    if(first.startsWith('#')) return false;   // instruction row
    if(r.length<=1 && !first) return false;   // blank row
    return true;
  });
  if(!dataRows.length) return parseProgramText('');

  const header = dataRows[0].map(h => (h||'').trim().toLowerCase().replace(/[\s\-]+/g,'_'));
  const ix = {};
  header.forEach((h,i)=>{ if(h && !(h in ix)) ix[h] = i; });
  const cell = (r,key) => { const i = ix[key]; return (i===undefined || r[i]===undefined) ? '' : String(r[i]).trim(); };

  const program = { name:t('val_importedprogram'), nutrition:'', blocks: [] };
  let curBlk = null, curDy = null;
  let lastProgram='', lastBlock='', lastDay='', lastDayType='';

  for(let i=1;i<dataRows.length;i++){
    const r = dataRows[i];
    const programName = cell(r,'program') || lastProgram;
    const blockName    = cell(r,'block')   || lastBlock;
    const blockInfo    = cell(r,'block_info');
    const dayLabel     = cell(r,'day')     || lastDay;
    const dayTypeCell  = cell(r,'day_type').toLowerCase();
    const dayType      = dayTypeCell || lastDayType || 'training';
    const isRest       = dayType.indexOf('rest') === 0;
    const warmup       = cell(r,'warmup');
    const dayNote      = cell(r,'day_note');
    const exName       = cell(r,'exercise');

    if(programName) program.name = programName;
    if(!blockName) continue;

    if(!curBlk || blockName !== lastBlock){
      curBlk = { name: blockName, info: blockInfo, days: [] };
      program.blocks.push(curBlk);
      curDy = null;
    } else if(blockInfo && !curBlk.info){
      curBlk.info = blockInfo;
    }

    if(!dayLabel){ lastProgram = programName; lastBlock = blockName; continue; }

    // "Type" (CIRCUIT/STRENGTH) is the current, documented column. "Circuit"
    // (Yes/No) and the older "day_mode" header are both kept working as
    // aliases so previously-exported files still import correctly.
    const typeCell    = cell(r,'type').toLowerCase();
    const circuitCell = cell(r,'circuit') || cell(r,'day_mode');
    const isCircuitDay = typeCell ? /circuit/i.test(typeCell) : /^(yes|true|circuit|1)/i.test(circuitCell);
    const roundsCell   = parseInt(cell(r,'rounds'),10) || 0;
    if(!curDy || dayLabel !== lastDay){
      curDy = { label: dayLabel, rest: isRest, warmup: isRest?'':warmup, restNote: isRest?dayNote:'', circuit: isRest?false:isCircuitDay, rounds: isRest?0:roundsCell, exercises: [] };
      curBlk.days.push(curDy);
    } else if(!curDy.rounds && roundsCell){
      curDy.rounds = roundsCell;
    }

    lastProgram = programName; lastBlock = blockName; lastDay = dayLabel; lastDayType = isRest?'rest':'training';

    if(isRest || !exName) continue;

    // CIRCUIT rule: a circuit exercise is never displayed or spoken with a
    // "sets" count — the round count lives on the day (curDy.rounds /
    // curDy.circuit above), not here. The Sets column is still parsed and
    // kept on the exercise (rather than discarded) purely so that an older
    // circuit export that has no Rounds column can still fall back to
    // inferring its round count from a legacy per-exercise Sets value — see
    // getDayRounds(). It is simply left out of the detail text/UI below.
    const sets = parseInt(cell(r,'sets'),10) || 0;
    const reps = cell(r,'reps');
    const restSec = parseInt(cell(r,'rest_sec'),10) || 0;
    const holdSec = parseInt(cell(r,'hold_sec'),10) || 0;
    const tip = cell(r,'tip');
    const mode = (holdSec && !reps) ? 'time' : 'reps';
    const parts = [];
    if(sets && !curDy.circuit) parts.push(sets + ' ' + t('lbl_set_plural'));
    if(mode==='time' && holdSec) parts.push(holdSec + 's ' + t('lbl_holdword'));
    else if(reps) parts.push(reps + ' ' + t('lbl_repsword'));
    const mainPhrase = parts.join(' × ');
    const detail = restSec ? (mainPhrase ? mainPhrase + ' · ' + t('lbl_restword') + ' ' + restSec + 's' : t('lbl_restword') + ' ' + restSec + 's') : mainPhrase;
    curDy.exercises.push({ name: exName, detail, tip, sets, reps, restSec, holdSec, mode });
  }

  if(!program.blocks.length){
    program.blocks.push({ name: t('lbl_blockword')+' 1', info:'', days:[{label: t('lbl_day')+' 1', rest:false, warmup:'', restNote:'', exercises:[]}] });
  }
  return program;
}

async function importProgramFile(input){
  const file = input.files[0];
  if(!file) return;
  if(fileTooLarge(file, MAX_PROGRAM_FILE_BYTES)){
    alert(t('err_file_toolarge_program'));
    input.value = '';
    return;
  }
  try{
    const text = await file.text();
    const isCSV = /\.csv$/i.test(file.name) || /^text\/csv/i.test(file.type||'');
    const program = isCSV ? parseProgramCSV(text) : parseProgramText(text);
    state.programs.push(program);
    state.activeProgram = state.programs.length-1;
    state.activeBlock = 0; state.activeDay = 0;
    renderWorkouts();
    save();
    if(typeof ltPopulatePrograms === 'function') ltPopulatePrograms();
    alert(tf('msg_importedprogram', {name: program.name, n: program.blocks.length}));
  }catch(e){
    dbg('Program import failed', e);
    alert(t('err_importreadfail'));
  }
  input.value = '';
}

// Wrap a CSV field in quotes only when it needs it (contains a comma, quote,
// or newline), doubling any internal quotes — standard CSV escaping.
function csvField(v){
  const s = String(v==null ? '' : v);
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g,'""') + '"' : s;
}
function csvRow(fields){ return fields.map(csvField).join(','); }

function buildProgramTemplateTxt(){
  return `# ============================================================
#  BEERSPORTS — WORKOUT PROGRAM FILE (plain text format)
# ============================================================
#
# WHAT THIS FILE IS
# This is a workout program for the BeerSports app: More → Settings
# → Workout Program File → Import Program. Fill it out, save it as
# a .txt file, then import it. Lines starting with "#" are just
# instructions — the app ignores them completely, so this whole
# header can stay right where it is. You can import this exact
# file right now to see a working example.
#
# This file is written so that it works as BOTH:
#   1. A file format spec the BeerSports app can import.
#   2. A self-contained instruction manual for an AI (ChatGPT,
#      Claude, Gemini, or any other model) that has never seen this
#      app before. If that's you, read the section right below.
#
# ------------------------------------------------------------
# IF AN AI IS FILLING THIS OUT
# ------------------------------------------------------------
# Someone has likely pasted this file and asked you to write them
# a workout program (e.g. "create me a 12-week fat-loss workout").
# You don't need any other explanation than what's on this page.
# Please:
#  1. Keep the keywords below EXACTLY as shown — PROGRAM, BLOCK,
#     INFO, DAY, REST, WARMUP, TYPE, ROUNDS, NOTE, and the
#     "- name | detail | tip" exercise line. They are fixed
#     keywords the app's parser looks for, not labels to translate
#     or rephrase.
#  2. Replace the example plan below with the real program, using
#     this same structure.
#  3. Every DAY has exactly one TYPE: either "TYPE: CIRCUIT" or
#     "TYPE: STRENGTH". Never guess the type from the exercises —
#     state it explicitly. See "TWO WORKOUT TYPES" below for the
#     rules that govern each one — they use different exercise
#     syntax and MUST NOT be mixed.
#  4. Every BLOCK needs at least one DAY. A normal week has 7 DAY
#     entries (Monday–Sunday); mark rest days with REST.
#  5. Output ONLY the finished file (comments + structure below) —
#     no extra chat, markdown fences, or commentary outside it — so
#     it can be saved and imported as-is.
#
# ------------------------------------------------------------
# TWO WORKOUT TYPES — READ THIS BEFORE WRITING ANY EXERCISE LINE
# ------------------------------------------------------------
#
# TYPE: CIRCUIT = ROUNDS.  TYPE: STRENGTH = SETS.  Never mix them.
#
# ── TYPE: CIRCUIT ──────────────────────────────────────────
# A circuit is one continuous sequence of exercises, repeated for a
# number of ROUNDS. The user does exercise 1, then exercise 2, then
# exercise 3 ... in order — that's round 1 — then does the exact
# same sequence again for round 2, round 3, etc.
#
#   Push-ups → Squats → Rows → Lunges → Plank        (round 1)
#   Push-ups → Squats → Rows → Lunges → Plank        (round 2)
#
#   NOT: Push-ups → Push-ups → Push-ups → Squats → Squats ...
#
# CRITICAL CIRCUIT RULE: a CIRCUIT day NEVER uses "sets". There is
# no such thing as "3 sets x 10 reps" on a circuit day — the round
# count is written ONCE for the whole day (ROUNDS: 4), not on each
# exercise. Each circuit exercise line only ever states its
# reps-or-time, nothing else:
#
#   TYPE: CIRCUIT
#   ROUNDS: 4
#   - Push-ups | 10 reps | Keep your body straight
#   - Squats | 15 reps | Control the lowering
#   - Plank | 30 sec | Keep hips level
#
#   WRONG:  - Push-ups | 3 sets x 10 reps | ...   (sets don't belong
#           on a circuit exercise — see CRITICAL CIRCUIT RULE above)
#
# ── TYPE: STRENGTH ─────────────────────────────────────────
# For weight lifting, bodybuilding, dumbbell/barbell work, and any
# traditional gym session: the user completes ALL sets of one
# exercise before moving on to the next. Sets are correct here, and
# each exercise can have a different number of sets:
#
#   TYPE: STRENGTH
#   - Bench Press | 4 sets x 8 reps, rest 90s | Control the lowering
#   - Bicep Curl | 3 sets x 12 reps, rest 60s | Avoid swinging
#
# ------------------------------------------------------------
# EXERCISE LINE SYNTAX (exact — the parser looks for this)
# ------------------------------------------------------------
# Every exercise line starts with "-" and has exactly three parts
# separated by "|" — name, detail, tip. <detail> and <tip> may be
# left blank, but keep both "|" characters even when you skip one.
#
#   CIRCUIT exercise:     - Name | reps/time | tip
#     - Push-ups | 10 reps | Keep your body straight
#     - Plank | 30 sec | Keep hips level
#     - Mountain Climbers | 30 sec | Keep shoulders over hands
#     Use "N reps" for rep-based moves, or "Ns hold" for anything
#     measured by time instead of a rep count — this covers static
#     holds like planks AND timed intervals like "30 sec of jumping
#     jacks", even though nothing is being held still. A rest
#     between exercises is optional and can be appended with a
#     comma, e.g. "10 reps, rest 15s" — leave it off to use the
#     app's own default transition time.
#
#   STRENGTH exercise:    - Name | sets x reps/time, rest Ns | tip
#     - Bench Press | 4 sets x 8 reps, rest 90s | Control the lowering
#     - Bicep Curl | 3 sets x 12 reps, rest 60s | Avoid swinging
#     Use "N sets x N reps" for rep-based work, or "N sets x Ns
#     hold" for a held/timed set (e.g. a weighted plank).
#     COMMON MISTAKE TO AVOID: never write a duration like "45 sec"
#     into the reps slot (e.g. "1 sets x 45 sec reps") — that is
#     read as reps, not time, and the app won't run a countdown for
#     it. Durations always go in the "Ns hold" part of the pattern.
#
# Do not invent other keywords or punctuation the parser doesn't
# know about — stick to exactly what's documented on this page.
#
# ------------------------------------------------------------
# FULL FORMAT REFERENCE (for humans editing by hand, too)
# ------------------------------------------------------------
#  PROGRAM: <name>         once, at the top — the program's name.
#  BLOCK: <name>           starts a new block/phase (e.g. a week or
#                          training phase). Use as many as you like.
#  INFO: <text>            optional one-line description of the
#                          block, shown under its name.
#  DAY: <label>            starts a new day in the current block
#                          (e.g. "Monday" or "Day 1").
#  REST                    marks the current day as a rest day —
#                          put it right after the DAY: line. A rest
#                          day has no TYPE, ROUNDS, WARMUP, or
#                          exercises.
#  NOTE: <text>            optional note for a REST day.
#  WARMUP: <text>          optional warm-up for a training day
#                          (skip this for rest days).
#  TYPE: CIRCUIT           required on every training day — declares
#  TYPE: STRENGTH          which of the two workout types (above)
#                          this day is. (MODE: is accepted as an
#                          older alias for TYPE: on import, for
#                          backward compatibility with older files —
#                          new files should use TYPE:.)
#  ROUNDS: <number>        required when TYPE: CIRCUIT — the number
#                          of times the whole exercise sequence
#                          repeats. Belongs to the day, never to an
#                          exercise. Not used for TYPE: STRENGTH.
#  - name | detail | tip   one exercise — see "EXERCISE LINE SYNTAX"
#                          above for the exact <detail> pattern for
#                          each workout type.
#
# Blank lines are ignored — use them freely to keep things
# readable. Everything below the "=" line is a working example with
# one CIRCUIT day and one STRENGTH day: edit it in place, or delete
# it and write your own from scratch.
# ============================================================

PROGRAM: My Custom Plan

BLOCK: Week 1
INFO: Getting started — focus on form over speed.

DAY: Monday
TYPE: STRENGTH
WARMUP: 5 min light cardio, arm circles
- Bench Press | 4 sets x 8 reps, rest 90s | Control the lowering
- Incline Dumbbell Press | 3 sets x 10 reps, rest 75s | Squeeze at the top
- Bicep Curl | 3 sets x 12 reps, rest 60s | Avoid swinging
- Tricep Extension | 3 sets x 10 reps, rest 60s | Keep elbows tucked

DAY: Tuesday
REST
NOTE: Stretch and recover

DAY: Wednesday
TYPE: CIRCUIT
ROUNDS: 4
WARMUP: 7 min dynamic warm-up
- Push-ups | 10 reps | Keep your body straight
- Squats | 15 reps | Control the lowering
- Backpack Rows | 12 reps | Pull elbows back
- Reverse Lunges | 10 reps | 5 each leg
- Plank | 30 sec | Keep hips level

DAY: Thursday
REST
NOTE: Light walk if you feel like it

DAY: Friday
TYPE: STRENGTH
- Pull-ups | 4 sets x 6 reps, rest 90s | Avoid swinging
- Barbell Row | 4 sets x 8 reps, rest 90s | Keep back flat

DAY: Saturday
REST

DAY: Sunday
REST
NOTE: Meal prep for next week

BLOCK: Week 2
INFO: Add a bit more volume.

DAY: Monday
TYPE: STRENGTH
- Bench Press | 4 sets x 10 reps, rest 90s | Control the lowering
`;
}

function buildProgramTemplateCsv(){
  const introLines = `# ============================================================
#  BEERSPORTS — WORKOUT PROGRAM FILE (spreadsheet / CSV format)
# ============================================================
#
# WHAT THIS FILE IS
# This is a workout program for the BeerSports app: More -> Settings -> Workout Program File -> Import Program.
# Open it in Excel, Google Sheets, or Numbers -- or edit it as plain text -- then save/export as .csv and import it back into the app.
# Any row whose first cell starts with "#" is an instruction and is ignored by the app. Leave these rows in or delete them, it makes no difference -- you can import this exact file right now to see a working example.
#
# This file works as BOTH a file format spec the app can import, AND a self-contained instruction manual for an AI (ChatGPT, Claude, Gemini, or any other model) that has never seen this app before.
#
# ------------------------------------------------------------
# IF AN AI IS FILLING THIS OUT
# ------------------------------------------------------------
# Someone has likely pasted this file and asked you to write them a workout program (e.g. "create me a 12-week fat-loss workout"). You don't need any other explanation than what's on this page. Please:
# 1. Keep the header row exactly as it is (Program, Block, Block Info, Day, Day Type, Type, Rounds, Warmup, Day Note, Exercise, Sets, Reps, Rest Sec, Hold Sec, Tip) -- those are fixed column names the app looks for, not labels to translate.
# 2. One row equals one exercise. For a rest day, write a single row with Day Type set to Rest and everything from Type onward left blank.
# 3. Repeat the Program, Block, and Day values on every row that belongs to them -- do not leave them blank partway through a day, even though it looks repetitive.
# 4. Every training day has a Type of exactly "Circuit" or "Strength" -- see "TWO WORKOUT TYPES" below. Never guess the type from the exercises; state it explicitly on every row for that day.
# 5. Output ONLY the finished CSV (comment rows + header + data rows) -- no extra chat or commentary -- so it can be saved and imported as-is.
# 6. Replace the example rows below with the real program. A typical block has 7 Day rows (Monday-Sunday), with rest days marked Day Type = Rest.
#
# ------------------------------------------------------------
# TWO WORKOUT TYPES -- READ THIS BEFORE FILLING IN ANY EXERCISE ROW
# ------------------------------------------------------------
#
# Type = Circuit means ROUNDS. Type = Strength means SETS. Never mix them on the same day.
#
# -- Type = Circuit --
# One continuous sequence of exercises, repeated for a number of Rounds. The user does every exercise in order once (round 1), then the exact same sequence again (round 2), and so on -- never all of one exercise before moving to the next.
# CRITICAL CIRCUIT RULE: a Circuit day NEVER uses Sets -- leave the Sets column blank on every row for that day. The round count is set ONCE per day in the Rounds column (same value repeated on every row for that day), never per exercise. Each row only states its own Reps or Hold Sec, nothing else.
#
# -- Type = Strength --
# Weight lifting, bodybuilding, dumbbell/barbell work, traditional gym sessions: the user completes ALL sets of one exercise before moving to the next. Sets is a plain number here, e.g. 3, and can differ row to row.
#
# ------------------------------------------------------------
# COLUMN REFERENCE (for humans editing by hand, too)
# ------------------------------------------------------------
# Program     the program's name -- same on every row.
# Block       block/phase name (e.g. "Week 1") -- starts a new block whenever it changes.
# Block Info  optional one-line description of the block, shown under its name.
# Day         day label (e.g. "Monday") -- starts a new day whenever it changes.
# Day Type    "Training" or "Rest".
# Type        "Circuit" or "Strength" -- required for every training day, see "TWO WORKOUT TYPES" above. Same value on every row for that day. Leave blank on a Rest day. ("Circuit"/"No" in an older Circuit-only column is still accepted on import for backward compatibility, but new files should use this Type column.)
# Rounds      required when Type = Circuit -- the number of times the whole exercise sequence repeats for that day, e.g. 4. Belongs to the day (same value on every row for that day), never to one exercise. Leave blank for Type = Strength or for a Rest day.
# Warmup      optional warm-up text for a training day (leave blank on rest days).
# Day Note    optional note for a rest day (leave blank on training days).
# Exercise    exercise name. Leave blank on the single row for a rest day.
# Sets        STRENGTH days only -- number of sets, e.g. 3. Leave this blank for every row on a Circuit day (see CRITICAL CIRCUIT RULE above).
# Reps        reps per set/round -- a number or text like 12-20 or AMRAP. For time-based exercises (including timed cardio intervals, not just static holds) leave this blank and use Hold Sec instead.
# Rest Sec    STRENGTH: rest between sets, in seconds. CIRCUIT: rest between exercises, in seconds. Either way, e.g. 45.
# Hold Sec    duration in seconds for anything measured by time -- static holds like planks AND timed cardio/circuit intervals like jumping jacks. Leave blank for rep-based exercises. Never put a duration like "45 sec" into Reps instead -- only Hold Sec triggers the app's countdown timer.
# Tip         optional form cue / tip.
#`.split('\n');

  const rows = introLines.map(line => csvRow([line]));
  rows.push('');
  rows.push(csvRow(['Program','Block','Block Info','Day','Day Type','Type','Rounds','Warmup','Day Note','Exercise','Sets','Reps','Rest Sec','Hold Sec','Tip']));
  const add = (block, blockInfo, day, dayType, wtype, rounds, warmup, dayNote, ex, sets, reps, restSec, holdSec, tip) => {
    rows.push(csvRow(['My Custom Plan', block, blockInfo, day, dayType, wtype, rounds, warmup, dayNote, ex, sets, reps, restSec, holdSec, tip]));
  };
  add('Week 1','Getting started -- focus on form over speed.','Monday','Training','Strength','','5 min light cardio, arm circles','','Bench Press',4,'8',90,'','Control the lowering');
  add('Week 1','Getting started -- focus on form over speed.','Monday','Training','Strength','','5 min light cardio, arm circles','','Incline Dumbbell Press',3,'10',75,'','Squeeze at the top');
  add('Week 1','Getting started -- focus on form over speed.','Monday','Training','Strength','','5 min light cardio, arm circles','','Bicep Curl',3,'12',60,'','Avoid swinging');
  add('Week 1','Getting started -- focus on form over speed.','Monday','Training','Strength','','5 min light cardio, arm circles','','Tricep Extension',3,'10',60,'','Keep elbows tucked');
  add('Week 1','Getting started -- focus on form over speed.','Tuesday','Rest','','','','Stretch and recover','','','','','','');
  add('Week 1','Getting started -- focus on form over speed.','Wednesday','Training','Circuit',4,'7 min dynamic warm-up','','Push-ups','','10','','','Keep your body straight');
  add('Week 1','Getting started -- focus on form over speed.','Wednesday','Training','Circuit',4,'7 min dynamic warm-up','','Squats','','15','','','Control the lowering');
  add('Week 1','Getting started -- focus on form over speed.','Wednesday','Training','Circuit',4,'7 min dynamic warm-up','','Backpack Rows','','12','','','Pull elbows back');
  add('Week 1','Getting started -- focus on form over speed.','Wednesday','Training','Circuit',4,'7 min dynamic warm-up','','Reverse Lunges','','10','','','5 each leg');
  add('Week 1','Getting started -- focus on form over speed.','Wednesday','Training','Circuit',4,'7 min dynamic warm-up','','Plank','','','','30','Keep hips level -- CIRCUIT rows leave Sets blank, the round count lives once in the Rounds column');
  add('Week 1','Getting started -- focus on form over speed.','Thursday','Rest','','','Light walk if you feel like it','','','','','','');
  add('Week 1','Getting started -- focus on form over speed.','Friday','Training','Strength','','','','Pull-ups',4,'6',90,'','Avoid swinging');
  add('Week 1','Getting started -- focus on form over speed.','Friday','Training','Strength','','','','Barbell Row',4,'8',90,'','Keep back flat');
  add('Week 1','Getting started -- focus on form over speed.','Saturday','Rest','','','','','','','','','','');
  add('Week 1','Getting started -- focus on form over speed.','Sunday','Rest','','','Meal prep for next week','','','','','','');
  add('Week 2','Add a bit more volume.','Monday','Training','Strength','','','','Bench Press',4,'10',90,'','Control the lowering');
  return rows.join('\n');
}

function downloadProgramTemplate(format){
  const fmt = (format === 'csv') ? 'csv' : 'txt';
  const content = fmt === 'csv' ? buildProgramTemplateCsv() : buildProgramTemplateTxt();
  const mime = fmt === 'csv' ? 'text/csv;charset=utf-8' : 'text/plain;charset=utf-8';
  const filename = 'workout-program-template.' + fmt;
  // A UTF-8 BOM helps spreadsheet apps like Excel open the file with the right
  // encoding (so —, ×, · don't turn into mojibake); harmless for the .txt file.
  const blob = new Blob(['\uFEFF' + content], {type: mime});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(()=>URL.revokeObjectURL(url), 1000);
}

function curProgram(){ return state.programs[state.activeProgram]; }
function curBlock(){ return curProgram().blocks[state.activeBlock]; }
function curDay(){ return curBlock().days[state.activeDay]; }

// CIRCUIT rule: the round count belongs to the whole day, never to a single
// exercise. If a day has an explicit ROUNDS value (set in the editor, or via
// TYPE:/ROUNDS: in an imported .txt file, or the Rounds column in an
// imported .csv file) that always wins. Otherwise — for CIRCUIT days
// imported from an older file that only had per-exercise "N sets x M reps"
// text — fall back to the highest set count found among its exercises, so
// older circuit files still play back at the right number of rounds. If
// nothing at all is set, default to 3 rounds.
function getDayRounds(day){
  if(!day) return 3;
  if(day.rounds && day.rounds > 0) return day.rounds;
  if(day.circuit && Array.isArray(day.exercises) && day.exercises.length){
    const maxSets = day.exercises.reduce((m,ex)=>Math.max(m, ex.sets||0), 0);
    if(maxSets > 0) return maxSets;
  }
  return 3;
}

function renderBlockTabs(){
  const p = curProgram();
  const wrap = document.getElementById('blockTabs');
  wrap.innerHTML = p.blocks.map((b,i)=>`<button class="chip ${i===state.activeBlock?'active':''}" data-action="selectBlock" data-idx="${i}">${escAttr(b.name)}</button>`).join('');
  const infoInput = document.getElementById('blockInfoInput');
  if(infoInput) infoInput.value = curBlock()?.info || '';
}
function updateBlockInfo(val){
  const b = curBlock();
  if(!b) return;
  b.info = val;
  debouncedSave();
}
function selectBlock(i){ state.activeBlock = i; state.activeDay = 0; renderWorkouts(); save(); }
function addBlock(){
  const name = prompt(t('ph_promptblockname'), t('val_defaultblockname'));
  if(!name) return;
  curProgram().blocks.push({ name, info:'', days:[ {label:t('lbl_day')+' 1', rest:false, warmup:'', exercises:[], restNote:''} ] });
  state.activeBlock = curProgram().blocks.length-1; state.activeDay = 0;
  renderWorkouts(); save();
}
function deleteBlock(){
  const p = curProgram();
  if(p.blocks.length<=1){ alert(t('err_keeponeblock')); return; }
  if(!confirm(t('confirm_deleteblock'))) return;
  p.blocks.splice(state.activeBlock,1);
  state.activeBlock = 0; state.activeDay = 0;
  renderWorkouts(); save();
}
function duplicateBlock(){
  const p = curProgram();
  const src = curBlock();
  const copy = JSON.parse(JSON.stringify(src));
  copy.name = src.name + ' (' + t('lbl_copyword') + ')';
  p.blocks.splice(state.activeBlock+1, 0, copy);
  state.activeBlock = state.activeBlock+1; state.activeDay = 0;
  renderWorkouts(); save();
}

function renderDayTabs(){
  const b = curBlock();
  const wrap = document.getElementById('dayTabs');
  wrap.innerHTML = b.days.map((d,i)=>`<button class="day-chip ${i===state.activeDay?'active':''} ${d.rest?'rest':''}" data-action="selectDay" data-idx="${i}">${escAttr(d.label)}</button>`).join('');
  const restBtn = document.getElementById('restToggleBtn');
  restBtn.textContent = curDay().rest ? t('btn_unmarkrest') : t('btn_markrest');
  const circuitBtn = document.getElementById('circuitToggleBtn');
  if(circuitBtn){
    circuitBtn.textContent = curDay().circuit ? t('btn_circuitorderon') : t('btn_circuitorder');
    circuitBtn.title = t('tt_circuitorder');
  }
  // ROUNDS belongs to the whole circuit day (CRITICAL CIRCUIT RULE) — this
  // field only appears once a day is switched to CIRCUIT, right next to the
  // toggle that turns circuit mode on.
  const roundsWrap = document.getElementById('dayRoundsWrap');
  const roundsInput = document.getElementById('dayRoundsInput');
  if(roundsWrap && roundsInput){
    const isCircuit = !!curDay().circuit && !curDay().rest;
    roundsWrap.style.display = isCircuit ? '' : 'none';
    if(document.activeElement !== roundsInput) roundsInput.value = getDayRounds(curDay());
  }
}
function selectDay(i){ state.activeDay = i; renderDayTabs(); renderDayContent(); renderProgramSubtitle(); save(); }
function addDay(){
  const label = prompt(t('ph_promptdaylabel'), t('lbl_day')+' '+(curBlock().days.length+1));
  if(!label) return;
  curBlock().days.push({ label, rest:false, warmup:'', exercises:[], restNote:'' });
  state.activeDay = curBlock().days.length-1;
  renderWorkouts(); save();
}
function deleteDay(){
  const b = curBlock();
  if(b.days.length<=1){ alert(t('err_keeponeday')); return; }
  if(!confirm(t('confirm_deleteday'))) return;
  b.days.splice(state.activeDay,1);
  state.activeDay = 0;
  renderWorkouts(); save();
}
function duplicateDay(){
  const b = curBlock();
  const src = curDay();
  const copy = JSON.parse(JSON.stringify(src));
  copy.label = src.label + ' (' + t('lbl_copyword') + ')';
  b.days.splice(state.activeDay+1, 0, copy);
  state.activeDay = state.activeDay+1;
  renderWorkouts(); save();
}
function toggleRestDay(){
  curDay().rest = !curDay().rest;
  renderDayTabs(); renderDayContent(); save();
}
function toggleCircuitMode(){
  const d = curDay();
  d.circuit = !d.circuit;
  // Seed a sensible default the first time a day becomes CIRCUIT, so the
  // Rounds field never shows empty — CIRCUIT = ROUNDS, always explicit.
  if(d.circuit && !d.rounds) d.rounds = getDayRounds(d);
  renderDayTabs(); renderDayContent(); save();
}
function updateDayRounds(val){
  const d = curDay();
  d.rounds = Math.max(1, parseInt(val,10) || 0);
  debouncedSave();
}

function renderDayContent(){
  const d = curDay();
  const wrap = document.getElementById('dayContent');
  const addRow = document.getElementById('exerciseAddRow');
  const secLabel = document.getElementById('exSectionLabel');
  if(d.rest){
    if(addRow) addRow.style.display = 'none';
    if(secLabel) secLabel.style.display = 'none';
    wrap.innerHTML = `
      <div class="rest-note">
        🌙<br>
        <textarea data-action="updateRestNote" placeholder="${t('ph_restnote')}">${escHtml(d.restNote||'')}</textarea>
      </div>`;
    return;
  }
  if(addRow) addRow.style.display = '';
  if(secLabel) secLabel.style.display = '';
  let html = '';
  if(!d.exercises.length){
    html += '<div class="exlib-empty">' + t('lbl_noexercisesyet') + '</div>';
  }
  // CRITICAL CIRCUIT RULE: a CIRCUIT day never shows "N sets" on an
  // individual exercise — the round count belongs to the whole day (see the
  // Rounds field above the exercise list) and each exercise only shows its
  // reps/time (+ rest), exactly like the app's own AI-facing template docs.
  const isCircuitDay = !!d.circuit;
  html += d.exercises.map((ex,i)=>`
    <div class="ex-card" data-idx="${i}">
      <div class="ex-top">
        ${programManageOpen ? `<div class="drag-handle" data-drag-group="exercise"></div>` : ''}
        <div class="ex-main">
          <div class="ex-name-row">
            <input class="ex-name" type="text" value="${escAttr(ex.name)}" placeholder="${t('ph_exname')}" readonly tabindex="-1">
          </div>
          <div class="ex-structured-row">
            ${((!isCircuitDay && ex.sets)||ex.reps||ex.holdSec||ex.restSec) ? `<span class="ex-structured-badge" data-action="openExSetsModal" data-idx="${i}">${[(!isCircuitDay && ex.sets)?ex.sets+' '+(ex.sets===1?t('lbl_set_singular'):t('lbl_set_plural')):'', ex.mode==='time' ? (ex.holdSec?ex.holdSec+'s '+t('lbl_holdword'):'') : (ex.reps?ex.reps+' '+t('lbl_repsword'):''), ex.restSec?ex.restSec+'s '+t('lbl_restword'):''].filter(Boolean).join(' · ')}</span>` : `<span class="ex-structured-badge muted" data-action="openExSetsModal" data-idx="${i}">${t('badge_nosetsrest')}</span>`}
          </div>
        </div>
        ${programManageOpen ? `<button class="ex-del" data-action="deleteExercise" data-idx="${i}">✕</button>` : ''}
      </div>
    </div>
  `).join('');
  wrap.innerHTML = html;
}
function assignDayWarmup(val){
  if(val === '__new__'){ openWarmupBuilder(null, true); return; }
  const day = curDay();
  if(!val){ day.warmupId = null; day.warmup = ''; }
  else {
    const w = state.warmups.find(x=>String(x.id)===String(val));
    day.warmupId = w ? w.id : null;
    day.warmup = w ? warmupStepsText(w) : '';
  }
  save();
}
function updateRestNote(v){ curDay().restNote = v; debouncedSave(); }

// ── WARM-UP BUILDER ───────────────────────────────────
// Lets someone build a warm-up their own way: add exercises one at a time
// (e.g. Jumping Jacks, then something completely different), each with its
// own choice of time, sets and reps — instead of only picking a ready-made
// routine. A warm-up is stored as `blocks` (structured, editable); playback
// still runs off warmupSteps(), which flattens blocks into timed steps.
let wbBlocks = [];
let wbEditWarmupId = null;
let wbAssignToDay = false;
let wbBlockEditIdx = null;
let wbMode = 'time';
const WARMUP_QUICKPICKS_EN = ['Jumping Jacks','High Knees','Arm Circles','Jog in Place','Bodyweight Squats','Mountain Climbers','Burpees','Torso Twists','Butt Kicks','Leg Swings','Hip Circles','Walking Lunges'];
const WARMUP_QUICKPICKS_NL = ['Jumping Jacks','High Knees','Armcirkels','Joggen op de Plek','Bodyweight Squats','Mountain Climbers','Burpees','Rompdraaien','Butt Kicks','Beenzwaaien','Heupcirkels','Wandelende Lunges'];
const WARMUP_QUICKPICKS_AR = ['تمرين القفز','رفع الركبتين عاليًا','تدوير الذراعين','الجري في المكان','سكوات بوزن الجسم','متسلق الجبل','بربيز','التفاف الجذع','ركلات المؤخرة','أرجحة الساق','تدوير الورك','طعنات المشي'];
const WARMUP_QUICKPICKS = APP_LANG === 'nl' ? WARMUP_QUICKPICKS_NL : (APP_LANG === 'ar_fusha' ? WARMUP_QUICKPICKS_AR : WARMUP_QUICKPICKS_EN);

function warmupToBlocks(w){
  if(Array.isArray(w.blocks) && w.blocks.length) return w.blocks.map(b=>({...b}));
  // Upgrade an older warm-up (flat timed steps, or free text) into editable blocks.
  return warmupSteps(w).filter(s=>s.label !== 'Rest').map(s=>({ name:s.label, mode:'time', seconds:s.seconds||30, reps:'', sets:1, restSec:0 }));
}
function openWarmupBuilder(existingId, assignToDay){
  wbEditWarmupId = existingId || null;
  wbAssignToDay = !!assignToDay;
  const existing = existingId ? state.warmups.find(w=>String(w.id)===String(existingId)) : null;
  wbBlocks = existing ? warmupToBlocks(existing) : [];
  document.getElementById('wbNameInput').value = existing ? existing.name : '';
  wbRenderBlockList();
  document.getElementById('warmupBuilderModal').classList.add('open');
}
function closeWarmupBuilderModal(){
  document.getElementById('warmupBuilderModal').classList.remove('open');
  if(wbAssignToDay) renderDayContent(); // reset the day's "+ Add new..." dropdown since nothing was saved
  wbAssignToDay = false;
}
function wbRenderBlockList(){
  const wrap = document.getElementById('wbBlockList');
  if(!wrap) return;
  if(!wbBlocks.length){ wrap.innerHTML = '<div class="exlib-empty">' + t('lbl_noexercisesadded') + '</div>'; return; }
  wrap.innerHTML = wbBlocks.map((b,i)=>{
    const bits = [];
    if(b.mode==='reps' && b.reps) bits.push(`${b.reps} reps`);
    bits.push(`${b.seconds||0}s`);
    const sets = b.sets||1;
    bits.push(`${sets} set${sets===1?'':'s'}`);
    if(sets>1 && b.restSec) bits.push(`${b.restSec}s rest between sets`);
    if(b.restAfterSec) bits.push(`${b.restAfterSec}s rest after`);
    return `
    <div class="wb-block-item" data-idx="${i}">
      <div class="drag-handle drag-handle-sm" data-drag-group="warmupblock"></div>
      <div class="wb-block-info">
        <b>${i+1}. ${escHtml(b.name)}</b>
        <div class="wb-block-meta">${bits.join(' · ')}</div>
      </div>
      <div class="wb-block-actions">
        <button class="btn btn-ghost btn-sm" data-action="wbEditBlock" data-idx="${i}">✏️</button>
        <button class="food-item-del" data-action="wbDeleteBlock" data-idx="${i}">✕</button>
      </div>
    </div>`;
  }).join('');
}
function wbMoveBlock(i, dir){
  const j = i + dir;
  if(j < 0 || j >= wbBlocks.length) return;
  [wbBlocks[i], wbBlocks[j]] = [wbBlocks[j], wbBlocks[i]];
  wbRenderBlockList();
}
function wbDeleteBlock(i){ wbBlocks.splice(i,1); wbRenderBlockList(); }
function wbRenderQuickPicks(){
  document.getElementById('wbQuickPicks').innerHTML = WARMUP_QUICKPICKS.map(n=>
    `<button type="button" class="chip" data-action="wbPickName" data-key="${escAttr(n)}">${n}</button>`
  ).join('');
}
function wbPickName(n){ document.getElementById('wbBlockNameInput').value = n; }
function wbAddBlock(){
  wbBlockEditIdx = null;
  document.getElementById('wbBlockModalTitle').textContent = t('modal_addexercise_title');
  document.getElementById('wbBlockNameInput').value = '';
  document.getElementById('wbRepsInput').value = '';
  document.getElementById('wbSecInput').value = '';
  document.getElementById('wbSetsInput').value = '1';
  document.getElementById('wbRestInput').value = '';
  document.getElementById('wbRestAfterInput').value = '';
  wbRenderQuickPicks();
  wbSetMode('time');
  document.getElementById('warmupBlockModal').classList.add('open');
  wbRefreshChipState();
}
function wbEditBlock(i){
  wbBlockEditIdx = i;
  const b = wbBlocks[i];
  document.getElementById('wbBlockModalTitle').textContent = t('modal_editexercise_title');
  document.getElementById('wbBlockNameInput').value = b.name || '';
  document.getElementById('wbRepsInput').value = b.reps || '';
  document.getElementById('wbSecInput').value = b.seconds || '';
  document.getElementById('wbSetsInput').value = b.sets || 1;
  document.getElementById('wbRestInput').value = b.restSec || '';
  document.getElementById('wbRestAfterInput').value = b.restAfterSec || '';
  wbRenderQuickPicks();
  wbSetMode(b.mode === 'reps' ? 'reps' : 'time');
  document.getElementById('warmupBlockModal').classList.add('open');
  wbRefreshChipState();
}
function closeWarmupBlockModal(){ document.getElementById('warmupBlockModal').classList.remove('open'); wbBlockEditIdx = null; }
function wbSetMode(mode){
  wbMode = mode;
  document.getElementById('wbRepsSection').style.display = mode === 'reps' ? '' : 'none';
  document.querySelectorAll('#wbModeToggle .chip').forEach(c=>c.classList.toggle('active', c.dataset.mode === mode));
}
function wbPickSec(v){ document.getElementById('wbSecInput').value = v; wbRefreshChipState(); }
function wbPickReps(v){ document.getElementById('wbRepsInput').value = v; wbRefreshChipState(); }
function wbPickSets(v){ document.getElementById('wbSetsInput').value = v; wbRefreshChipState(); }
function wbPickRest(v){ document.getElementById('wbRestInput').value = v; wbRefreshChipState(); }
function wbRefreshChipState(){
  const secVal = document.getElementById('wbSecInput').value;
  const repsVal = document.getElementById('wbRepsInput').value.trim();
  const setsVal = document.getElementById('wbSetsInput').value;
  const restVal = document.getElementById('wbRestInput').value;
  const restAfterVal = document.getElementById('wbRestAfterInput').value;
  document.querySelectorAll('#wbSecChips .chip').forEach(c=>c.classList.toggle('active', c.dataset.val === secVal));
  document.querySelectorAll('#wbRepsChips .chip').forEach(c=>c.classList.toggle('active', c.dataset.val === repsVal));
  document.querySelectorAll('#wbSetsChips .chip').forEach(c=>c.classList.toggle('active', c.dataset.val === setsVal));
  document.querySelectorAll('#wbRestChips .chip').forEach(c=>c.classList.toggle('active', c.dataset.val === restVal));
  document.querySelectorAll('#wbRestAfterChips .chip').forEach(c=>c.classList.toggle('active', c.dataset.val === restAfterVal));
}
function wbPickRestAfter(v){ document.getElementById('wbRestAfterInput').value = v; wbRefreshChipState(); }
function wbSaveBlock(){
  const name = document.getElementById('wbBlockNameInput').value.trim();
  if(!name){ alert(t('err_exercisename')); return; }
  const seconds = Math.max(1, parseInt(document.getElementById('wbSecInput').value,10) || 30);
  const sets = Math.max(1, parseInt(document.getElementById('wbSetsInput').value,10) || 1);
  const restSec = Math.max(0, parseInt(document.getElementById('wbRestInput').value,10) || 0);
  const restAfterSec = Math.max(0, parseInt(document.getElementById('wbRestAfterInput').value,10) || 0);
  const block = { name, mode: wbMode, seconds, sets, restSec, restAfterSec, reps: wbMode==='reps' ? document.getElementById('wbRepsInput').value.trim() : '' };
  if(wbBlockEditIdx === null) wbBlocks.push(block);
  else wbBlocks[wbBlockEditIdx] = block;
  closeWarmupBlockModal();
  wbRenderBlockList();
}
function saveWarmupBuilder(){
  if(!wbBlocks.length){ alert(t('err_addoneexercise')); return; }
  const name = document.getElementById('wbNameInput').value.trim() || wbBlocks[0].name;
  let w = wbEditWarmupId ? state.warmups.find(x=>String(x.id)===String(wbEditWarmupId)) : null;
  if(!w){ w = { id: Date.now() }; state.warmups.push(w); }
  w.name = name;
  w.blocks = wbBlocks.map(b=>({...b}));
  delete w.steps; delete w.text;
  if(wbAssignToDay){
    const day = curDay();
    day.warmupId = w.id;
    day.warmup = warmupStepsText(w);
  } else {
    syncWarmupTextEverywhere(w.id);
  }
  document.getElementById('warmupBuilderModal').classList.remove('open');
  wbAssignToDay = false;
  renderWarmupLibrary();
  renderDayContent();
  ltRenderExerciseList();
  save();
}

// ── WARM-UP LIBRARY ──────────────────────────────────
// A warm-up is a list of timed steps: { id, name, steps:[{label,seconds}] }.
// warmupSteps() transparently upgrades any older { name, text } warm-up on the fly,
// so nothing already saved on a device is lost when this format changed.
function parseWarmupTextToSteps(text){
  if(!text || !text.trim()) return [];
  return text.split('→').map(seg=>seg.trim()).filter(Boolean).map(seg=>{
    const m = seg.match(/^(\d+)\s*(min|minute|minutes|sec|second|seconds)\b\.?\s*(.*)$/i);
    if(m){
      const num = parseInt(m[1],10);
      const seconds = m[2].toLowerCase().startsWith('min') ? num*60 : num;
      return { label: m[3].trim() || seg, seconds };
    }
    return { label: seg, seconds: 30 };
  });
}
function flattenWarmupBlocks(blocks){
  const out = [];
  blocks.forEach((b,bi)=>{
    const sets = Math.max(1, b.sets||1);
    for(let s=1; s<=sets; s++){
      const repsBit = (b.mode==='reps' && b.reps) ? `${b.reps} reps` : '';
      const setBit = sets>1 ? `Set ${s}/${sets}` : '';
      const extras = [repsBit, setBit].filter(Boolean).join(' · ');
      out.push({ label: extras ? `${b.name} (${extras})` : b.name, seconds: Math.max(1, b.seconds||30) });
      if(s < sets && b.restSec>0){
        out.push({ label:'Rest', seconds: b.restSec });
      }
    }
    // Rest before moving on to the next exercise (skip after the very last one).
    if(b.restAfterSec>0 && bi < blocks.length-1){
      out.push({ label:'Rest', seconds: b.restAfterSec });
    }
  });
  return out;
}
function warmupSteps(w){
  if(!w) return [];
  if(Array.isArray(w.blocks) && w.blocks.length) return flattenWarmupBlocks(w.blocks);
  if(Array.isArray(w.steps) && w.steps.length) return w.steps;
  return parseWarmupTextToSteps(w.text || '');
}
function warmupStepsText(w){ return warmupSteps(w).map(s=>s.label).join(' → '); }
function warmupTotalSeconds(w){ return warmupSteps(w).reduce((a,s)=>a+s.seconds, 0); }
function formatMMSS(totalSeconds){
  const tot = Math.max(0, Math.round(totalSeconds||0));
  const m = Math.floor(tot/60), s = tot%60;
  return m>0 ? `${m}:${String(s).padStart(2,'0')}` : `${s}s`;
}
function renderWarmupLibrary(){
  const wrap = document.getElementById('warmupLibList');
  if(!wrap) return;
  if(!state.warmups.length){ wrap.innerHTML = ''; return; }
  wrap.innerHTML = state.warmups.map(w=>{
    const steps = warmupSteps(w);
    const preview = steps.map(s=>`${s.label} (${formatMMSS(s.seconds)})`).join(' → ');
    return `
    <div class="measure-type-item">
      <div>
        <b>${escHtml(w.name)}</b> <span style="color:var(--muted);">· ${steps.length} ${steps.length===1?t('lbl_step_singular'):t('lbl_step_plural')} · ${formatMMSS(warmupTotalSeconds(w))} ${t('lbl_total_word')}</span>
        ${preview ? `<br><span style="color:var(--muted);font-size:12.5px;">${escHtml(preview)}</span>` : ''}
      </div>
      <div style="display:flex;gap:4px;flex-shrink:0;">
        <button class="btn btn-ghost btn-sm" data-action="openWarmupBuilder" data-id="${w.id}">✏️</button>
        <button class="food-item-del" data-action="deleteWarmup" data-id="${w.id}">✕</button>
      </div>
    </div>
  `;}).join('');
}
function deleteWarmup(id){
  if(!confirm(t('confirm_deletewarmup'))) return;
  state.warmups = state.warmups.filter(w=>w.id!==id);
  state.programs.forEach(p=>p.blocks.forEach(b=>b.days.forEach(d=>{
    if(d.warmupId === id){ d.warmupId = null; d.warmup = ''; }
  })));
  renderWarmupLibrary();
  renderDayContent();
  ltRenderExerciseList();
  save();
}
function syncWarmupTextEverywhere(id){
  const w = state.warmups.find(x=>x.id===id);
  const text = w ? warmupStepsText(w) : '';
  state.programs.forEach(p=>p.blocks.forEach(b=>b.days.forEach(d=>{
    if(d.warmupId === id) d.warmup = text;
  })));
}

// ── WARM-UP LIBRARY PRESETS (Choose from Library) ────
// Each preset is a real sequence of timed steps, so picking one gives an actual
// countdown in the Voice Coach — not just a block of text to read.
const WARMUP_LIBRARY_EN = {
  'Full Body': [
    { name:'Standard Warm-up', steps:[
      {label:'Jog in place', seconds:240}, {label:'Jumping jacks', seconds:120},
      {label:'Arm circles', seconds:120}, {label:'10 burpees', seconds:30}
    ]},
    { name:'Classic Full-Body', steps:[
      {label:'Jog in place', seconds:120}, {label:'10 arm circles each way', seconds:30},
      {label:'10 bodyweight squats', seconds:30}, {label:'10 push-ups', seconds:30},
      {label:'10 walking lunges each leg', seconds:40}
    ]},
    { name:'Dynamic Flow', steps:[
      {label:'10 leg swings each leg', seconds:30}, {label:'10 walking lunges with a twist', seconds:40},
      {label:'10 inchworms', seconds:40}, {label:'High knees', seconds:30}
    ]},
    { name:'Total Activation', steps:[
      {label:'Jumping jacks', seconds:30}, {label:'10 squats', seconds:30},
      {label:'10 push-ups', seconds:30}, {label:'10 mountain climbers', seconds:30}, {label:'Plank', seconds:30}
    ]}
  ],
  'Cardio / HIIT': [
    { name:'Quick Cardio', steps:[
      {label:'Jumping jacks', seconds:120}, {label:'High knees', seconds:60},
      {label:'Butt kicks', seconds:60}, {label:'10 burpees', seconds:30}
    ]},
    { name:'Sprint Prep', steps:[
      {label:'Light jog', seconds:180}, {label:'Stride 1 of 5', seconds:20}, {label:'Stride 2 of 5', seconds:20},
      {label:'Stride 3 of 5', seconds:20}, {label:'Stride 4 of 5', seconds:20}, {label:'Stride 5 of 5', seconds:20},
      {label:'Butt kicks', seconds:30}, {label:'High knees', seconds:30}
    ]},
    { name:'HIIT Primer', steps:[
      {label:'Jumping jacks', seconds:30}, {label:'Mountain climbers', seconds:30},
      {label:'High knees', seconds:30}, {label:'Rest', seconds:30},
      {label:'Jumping jacks', seconds:30}, {label:'Mountain climbers', seconds:30},
      {label:'High knees', seconds:30}, {label:'Rest', seconds:30}
    ]},
    { name:'Jump Rope Ramp-Up', steps:[
      {label:'Slow jump rope', seconds:60}, {label:'Moderate jump rope', seconds:60},
      {label:'20 bodyweight squats', seconds:40}, {label:'10 burpees', seconds:30}
    ]}
  ],
  'Upper Body': [
    { name:'Shoulders & Chest', steps:[
      {label:'10 arm circles forward', seconds:20}, {label:'10 arm circles backward', seconds:20},
      {label:'10 band pull-aparts (or mimic the motion)', seconds:30}, {label:'10 incline push-ups', seconds:30}
    ]},
    { name:'Push/Pull Prep', steps:[
      {label:'15 scapular push-ups', seconds:30}, {label:'10 wall slides', seconds:30},
      {label:'10 push-ups', seconds:30}, {label:'15 face pulls with a band or towel', seconds:30}
    ]},
    { name:'Rotator Cuff Prep', steps:[
      {label:'10 arm circles each way', seconds:30}, {label:'10 light external rotations each arm', seconds:40},
      {label:'10 wall angels', seconds:30}
    ]},
    { name:'Grip & Forearm Prep', steps:[
      {label:'Dead hang (or fingertip taps on a table)', seconds:20}, {label:'10 wrist circles each way', seconds:20},
      {label:'10 arm circles each way', seconds:30}
    ]}
  ],
  'Lower Body': [
    { name:'Leg Day Prep', steps:[
      {label:'10 bodyweight squats', seconds:30}, {label:'10 walking lunges each leg', seconds:40},
      {label:'10 leg swings each leg', seconds:30}, {label:'20 calf raises', seconds:30}
    ]},
    { name:'Glute Activation', steps:[
      {label:'15 glute bridges', seconds:30}, {label:'10 clamshells each side', seconds:40},
      {label:'10 bodyweight squats', seconds:30}, {label:'10 step-ups each leg', seconds:40}
    ]},
    { name:'Knee-Friendly Prep', steps:[
      {label:'Brisk walk', seconds:120}, {label:'10 bodyweight squats', seconds:30},
      {label:'10 leg swings each leg', seconds:30}, {label:'10 ankle circles each foot', seconds:30}
    ]},
    { name:'Squat & Hinge Prep', steps:[
      {label:'10 bodyweight good mornings', seconds:30}, {label:'10 bodyweight squats', seconds:30},
      {label:'10 hip circles each way', seconds:30}, {label:'Deep squat hold', seconds:30}
    ]}
  ],
  'Mobility & Stretching': [
    { name:'Joint Mobility', steps:[
      {label:'10 neck circles each way', seconds:20}, {label:'10 shoulder rolls', seconds:20},
      {label:'10 hip circles each way', seconds:30}, {label:'10 ankle circles each foot', seconds:30}
    ]},
    { name:'Dynamic Stretch Flow', steps:[
      {label:'10 walking lunges with a twist', seconds:40}, {label:'10 inchworms', seconds:40},
      {label:'Standing quad stretch each leg', seconds:40}, {label:'Downward dog', seconds:30}
    ]},
    { name:'Spine & Hips', steps:[
      {label:'10 cat-cow stretches', seconds:30}, {label:'10 hip circles each way', seconds:30},
      {label:'10 standing torso twists', seconds:20}, {label:'Deep squat hold', seconds:30}
    ]},
    { name:'Morning Wake-Up', steps:[
      {label:'10 standing side bends each way', seconds:20}, {label:'10 arm circles each way', seconds:30},
      {label:'10 bodyweight squats', seconds:30}, {label:'Deep breaths', seconds:20}
    ]}
  ],
  'Quick / No Equipment': [
    { name:'5-Minute Starter', steps:[
      {label:'Jog in place', seconds:60}, {label:'Jumping jacks', seconds:60}, {label:'Arm circles', seconds:60},
      {label:'Bodyweight squats', seconds:60}, {label:'High knees', seconds:60}
    ]},
    { name:'Desk Break Warm-up', steps:[
      {label:'20 jumping jacks', seconds:30}, {label:'10 squats', seconds:30},
      {label:'10 arm circles each way', seconds:30}, {label:'10 torso twists', seconds:20}
    ]},
    { name:'Travel / Small Space', steps:[
      {label:'Marching in place', seconds:30}, {label:'10 squats', seconds:30},
      {label:'10 arm circles each way', seconds:30}, {label:'10 standing calf raises', seconds:20}
    ]},
    { name:'Two-Minute Version', steps:[
      {label:'Jumping jacks', seconds:30}, {label:'High knees', seconds:30},
      {label:'10 squats', seconds:30}, {label:'10 arm circles each way', seconds:30}
    ]}
  ],
  'Bodyweight / Prison-Style': [
    { name:'Cell-Block Warm-up', steps:[
      {label:'March in place', seconds:60}, {label:'10 arm circles each way', seconds:30},
      {label:'10 hip circles each way', seconds:30}, {label:'15 bodyweight squats', seconds:30},
      {label:'10 scapular push-ups', seconds:30}, {label:'10 inchworms', seconds:40}
    ]},
    { name:'Joint Prep Circuit', steps:[
      {label:'10 wrist circles each way', seconds:20}, {label:'10 ankle circles each foot', seconds:20},
      {label:'10 knee circles each way', seconds:20}, {label:'10 torso rotations each way', seconds:30},
      {label:'10 leg swings front to back, each leg', seconds:30}, {label:'10 leg swings side to side, each leg', seconds:30}
    ]},
    { name:'Dynamic Mobility Primer', steps:[
      {label:"World's greatest stretch, each side", seconds:40}, {label:'Walking hamstring sweep', seconds:30},
      {label:'Cossack squat mobility', seconds:40}, {label:'10 thoracic rotations each way', seconds:30},
      {label:'10 arm swings', seconds:20}, {label:'Cat-cow flow', seconds:30}
    ]}
  ]
};

const WARMUP_LIBRARY_NL = {
  'Volledig Lichaam': [
    { name:'Standaard Warming-up', steps:[
      {label:'Joggen op de plek', seconds:240}, {label:'Jumping jacks', seconds:120},
      {label:'Armcirkels', seconds:120}, {label:'10 burpees', seconds:30}
    ]},
    { name:'Klassiek Volledig Lichaam', steps:[
      {label:'Joggen op de plek', seconds:120}, {label:'10 armcirkels beide kanten', seconds:30},
      {label:'10 bodyweight squats', seconds:30}, {label:'10 push-ups', seconds:30},
      {label:'10 wandelende lunges per been', seconds:40}
    ]},
    { name:'Dynamische Flow', steps:[
      {label:'10 beenzwaaien per been', seconds:30}, {label:'10 wandelende lunges met draai', seconds:40},
      {label:'10 inchworms', seconds:40}, {label:'High knees', seconds:30}
    ]},
    { name:'Totale Activatie', steps:[
      {label:'Jumping jacks', seconds:30}, {label:'10 squats', seconds:30},
      {label:'10 push-ups', seconds:30}, {label:'10 mountain climbers', seconds:30}, {label:'Plank', seconds:30}
    ]}
  ],
  'Cardio / HIIT': [
    { name:'Snelle Cardio', steps:[
      {label:'Jumping jacks', seconds:120}, {label:'High knees', seconds:60},
      {label:'Butt kicks', seconds:60}, {label:'10 burpees', seconds:30}
    ]},
    { name:'Sprint Voorbereiding', steps:[
      {label:'Rustig joggen', seconds:180}, {label:'Sprint 1 van 5', seconds:20}, {label:'Sprint 2 van 5', seconds:20},
      {label:'Sprint 3 van 5', seconds:20}, {label:'Sprint 4 van 5', seconds:20}, {label:'Sprint 5 van 5', seconds:20},
      {label:'Butt kicks', seconds:30}, {label:'High knees', seconds:30}
    ]},
    { name:'HIIT Voorbereiding', steps:[
      {label:'Jumping jacks', seconds:30}, {label:'Mountain climbers', seconds:30},
      {label:'High knees', seconds:30}, {label:'Rust', seconds:30},
      {label:'Jumping jacks', seconds:30}, {label:'Mountain climbers', seconds:30},
      {label:'High knees', seconds:30}, {label:'Rust', seconds:30}
    ]},
    { name:'Touwtjespringen Opbouw', steps:[
      {label:'Langzaam touwtjespringen', seconds:60}, {label:'Gemiddeld touwtjespringen', seconds:60},
      {label:'20 bodyweight squats', seconds:40}, {label:'10 burpees', seconds:30}
    ]}
  ],
  'Bovenlichaam': [
    { name:'Schouders & Borst', steps:[
      {label:'10 armcirkels voorwaarts', seconds:20}, {label:'10 armcirkels achterwaarts', seconds:20},
      {label:'10 band pull-aparts (of imiteer de beweging)', seconds:30}, {label:'10 schuine push-ups', seconds:30}
    ]},
    { name:'Duw/Trek Voorbereiding', steps:[
      {label:'15 scapulaire push-ups', seconds:30}, {label:'10 wall slides', seconds:30},
      {label:'10 push-ups', seconds:30}, {label:'15 face pulls met band of handdoek', seconds:30}
    ]},
    { name:'Rotator Cuff Voorbereiding', steps:[
      {label:'10 armcirkels beide kanten', seconds:30}, {label:'10 lichte externe rotaties per arm', seconds:40},
      {label:'10 wall angels', seconds:30}
    ]},
    { name:'Grip & Onderarm Voorbereiding', steps:[
      {label:'Dead hang (of vingertoptikken op tafel)', seconds:20}, {label:'10 polscirkels beide kanten', seconds:20},
      {label:'10 armcirkels beide kanten', seconds:30}
    ]}
  ],
  'Onderlichaam': [
    { name:'Beendag Voorbereiding', steps:[
      {label:'10 bodyweight squats', seconds:30}, {label:'10 wandelende lunges per been', seconds:40},
      {label:'10 beenzwaaien per been', seconds:30}, {label:'20 kuitheffingen', seconds:30}
    ]},
    { name:'Bilspier Activatie', steps:[
      {label:'15 glute bridges', seconds:30}, {label:'10 clamshells per kant', seconds:40},
      {label:'10 bodyweight squats', seconds:30}, {label:'10 step-ups per been', seconds:40}
    ]},
    { name:'Knievriendelijke Voorbereiding', steps:[
      {label:'Stevig wandelen', seconds:120}, {label:'10 bodyweight squats', seconds:30},
      {label:'10 beenzwaaien per been', seconds:30}, {label:'10 enkelcirkels per voet', seconds:30}
    ]},
    { name:'Squat & Heup Voorbereiding', steps:[
      {label:'10 bodyweight good mornings', seconds:30}, {label:'10 bodyweight squats', seconds:30},
      {label:'10 heupcirkels beide kanten', seconds:30}, {label:'Diepe squat hold', seconds:30}
    ]}
  ],
  'Mobiliteit & Rekken': [
    { name:'Gewrichtsmobiliteit', steps:[
      {label:'10 nekcirkels beide kanten', seconds:20}, {label:'10 schouderrollen', seconds:20},
      {label:'10 heupcirkels beide kanten', seconds:30}, {label:'10 enkelcirkels per voet', seconds:30}
    ]},
    { name:'Dynamische Rekflow', steps:[
      {label:'10 wandelende lunges met draai', seconds:40}, {label:'10 inchworms', seconds:40},
      {label:'Staande quadstretch per been', seconds:40}, {label:'Neerwaartse hond', seconds:30}
    ]},
    { name:'Rug & Heupen', steps:[
      {label:'10 cat-cow stretches', seconds:30}, {label:'10 heupcirkels beide kanten', seconds:30},
      {label:'10 staande rompdraaien', seconds:20}, {label:'Diepe squat hold', seconds:30}
    ]},
    { name:'Ochtend Wakker Worden', steps:[
      {label:'10 staande zijwaartse buigingen beide kanten', seconds:20}, {label:'10 armcirkels beide kanten', seconds:30},
      {label:'10 bodyweight squats', seconds:30}, {label:'Diepe ademhalingen', seconds:20}
    ]}
  ],
  'Snel / Geen Apparatuur': [
    { name:'5-Minuten Starter', steps:[
      {label:'Joggen op de plek', seconds:60}, {label:'Jumping jacks', seconds:60}, {label:'Armcirkels', seconds:60},
      {label:'Bodyweight squats', seconds:60}, {label:'High knees', seconds:60}
    ]},
    { name:'Bureau-pauze Warming-up', steps:[
      {label:'20 jumping jacks', seconds:30}, {label:'10 squats', seconds:30},
      {label:'10 armcirkels beide kanten', seconds:30}, {label:'10 rompdraaien', seconds:20}
    ]},
    { name:'Reizen / Kleine Ruimte', steps:[
      {label:'Marcheren op de plek', seconds:30}, {label:'10 squats', seconds:30},
      {label:'10 armcirkels beide kanten', seconds:30}, {label:'10 staande kuitheffingen', seconds:20}
    ]},
    { name:'Twee-Minuten Versie', steps:[
      {label:'Jumping jacks', seconds:30}, {label:'High knees', seconds:30},
      {label:'10 squats', seconds:30}, {label:'10 armcirkels beide kanten', seconds:30}
    ]}
  ],
  'Lichaamsgewicht / Prison-Style': [
    { name:'Celblok Warming-up', steps:[
      {label:'Marcheren op de plek', seconds:60}, {label:'10 armcirkels beide kanten', seconds:30},
      {label:'10 heupcirkels beide kanten', seconds:30}, {label:'15 bodyweight squats', seconds:30},
      {label:'10 scapulaire push-ups', seconds:30}, {label:'10 inchworms', seconds:40}
    ]},
    { name:'Gewrichten Voorbereidingscircuit', steps:[
      {label:'10 polscirkels beide kanten', seconds:20}, {label:'10 enkelcirkels per voet', seconds:20},
      {label:'10 kniecirkels beide kanten', seconds:20}, {label:'10 torsorotaties beide kanten', seconds:30},
      {label:'10 beenzwaaien voor-achter, per been', seconds:30}, {label:'10 beenzwaaien zij-zij, per been', seconds:30}
    ]},
    { name:'Dynamische Mobiliteit Primer', steps:[
      {label:"World's Greatest Stretch, beide kanten", seconds:40}, {label:'Wandelende hamstring sweep', seconds:30},
      {label:'Cossack squat mobiliteit', seconds:40}, {label:'10 thoracale rotaties beide kanten', seconds:30},
      {label:'10 armzwaaien', seconds:20}, {label:'Cat-cow flow', seconds:30}
    ]}
  ]
};

const WARMUP_LIBRARY_AR = {
  'الجسم كامل': [
    { name:'إحماء قياسي', steps:[
      {label:'الجري في المكان', seconds:240}, {label:'تمرين القفز', seconds:120},
      {label:'تدوير الذراعين', seconds:120}, {label:'10 بربيز', seconds:30}
    ]},
    { name:'الجسم الكامل الكلاسيكي', steps:[
      {label:'الجري في المكان', seconds:120}, {label:'10 تدويرات ذراع لكل اتجاه', seconds:30},
      {label:'10 سكوات بوزن الجسم', seconds:30}, {label:'10 تمارين ضغط', seconds:30},
      {label:'10 طعنات مشي لكل ساق', seconds:40}
    ]},
    { name:'التدفق الديناميكي', steps:[
      {label:'10 أرجحة ساق لكل ساق', seconds:30}, {label:'10 طعنات مشي مع التفاف', seconds:40},
      {label:'10 إنش وورم', seconds:40}, {label:'رفع الركبتين عاليًا', seconds:30}
    ]},
    { name:'التفعيل الكامل', steps:[
      {label:'تمرين القفز', seconds:30}, {label:'10 سكوات', seconds:30},
      {label:'10 تمارين ضغط', seconds:30}, {label:'10 متسلق الجبل', seconds:30}, {label:'البلانك', seconds:30}
    ]}
  ],
  'كارديو / إتش آي آي تي': [
    { name:'كارديو سريع', steps:[
      {label:'تمرين القفز', seconds:120}, {label:'رفع الركبتين عاليًا', seconds:60},
      {label:'ركلات المؤخرة', seconds:60}, {label:'10 بربيز', seconds:30}
    ]},
    { name:'تحضير العدو السريع', steps:[
      {label:'جري خفيف', seconds:180}, {label:'شوط 1 من 5', seconds:20}, {label:'شوط 2 من 5', seconds:20},
      {label:'شوط 3 من 5', seconds:20}, {label:'شوط 4 من 5', seconds:20}, {label:'شوط 5 من 5', seconds:20},
      {label:'ركلات المؤخرة', seconds:30}, {label:'رفع الركبتين عاليًا', seconds:30}
    ]},
    { name:'تمهيد إتش آي آي تي', steps:[
      {label:'تمرين القفز', seconds:30}, {label:'متسلق الجبل', seconds:30},
      {label:'رفع الركبتين عاليًا', seconds:30}, {label:'راحة', seconds:30},
      {label:'تمرين القفز', seconds:30}, {label:'متسلق الجبل', seconds:30},
      {label:'رفع الركبتين عاليًا', seconds:30}, {label:'راحة', seconds:30}
    ]},
    { name:'تدرج نط الحبل', steps:[
      {label:'نط حبل بطيء', seconds:60}, {label:'نط حبل متوسط', seconds:60},
      {label:'20 سكوات بوزن الجسم', seconds:40}, {label:'10 بربيز', seconds:30}
    ]}
  ],
  'الجزء العلوي': [
    { name:'الأكتاف والصدر', steps:[
      {label:'10 تدويرات ذراع للأمام', seconds:20}, {label:'10 تدويرات ذراع للخلف', seconds:20},
      {label:'10 سحب شريط مطاطي (أو تقليد الحركة)', seconds:30}, {label:'10 ضغط مائل للأعلى', seconds:30}
    ]},
    { name:'تحضير الدفع/السحب', steps:[
      {label:'15 ضغط لوح الكتف', seconds:30}, {label:'10 انزلاق على الحائط', seconds:30},
      {label:'10 تمارين ضغط', seconds:30}, {label:'15 سحب الوجه بشريط أو منشفة', seconds:30}
    ]},
    { name:'تحضير الكفة المدورة', steps:[
      {label:'10 تدويرات ذراع لكل اتجاه', seconds:30}, {label:'10 دورانات خارجية خفيفة لكل ذراع', seconds:40},
      {label:'10 وول أنجلز', seconds:30}
    ]},
    { name:'تحضير القبضة والساعد', steps:[
      {label:'تعليق ثابت (أو نقر أطراف الأصابع على طاولة)', seconds:20}, {label:'10 تدويرات معصم لكل اتجاه', seconds:20},
      {label:'10 تدويرات ذراع لكل اتجاه', seconds:30}
    ]}
  ],
  'الجزء السفلي': [
    { name:'تحضير يوم الأرجل', steps:[
      {label:'10 سكوات بوزن الجسم', seconds:30}, {label:'10 طعنات مشي لكل ساق', seconds:40},
      {label:'10 أرجحة ساق لكل ساق', seconds:30}, {label:'20 رفع كعب', seconds:30}
    ]},
    { name:'تفعيل الأرداف', steps:[
      {label:'15 جسر أرداف', seconds:30}, {label:'10 كلامشيل لكل جانب', seconds:40},
      {label:'10 سكوات بوزن الجسم', seconds:30}, {label:'10 صعود منصة لكل ساق', seconds:40}
    ]},
    { name:'تحضير لطيف على الركبة', steps:[
      {label:'مشي سريع', seconds:120}, {label:'10 سكوات بوزن الجسم', seconds:30},
      {label:'10 أرجحة ساق لكل ساق', seconds:30}, {label:'10 تدويرات كاحل لكل قدم', seconds:30}
    ]},
    { name:'تحضير السكوات والانحناء', steps:[
      {label:'10 جود مورنينغ بوزن الجسم', seconds:30}, {label:'10 سكوات بوزن الجسم', seconds:30},
      {label:'10 تدويرات ورك لكل اتجاه', seconds:30}, {label:'ثبات سكوات عميق', seconds:30}
    ]}
  ],
  'المرونة والتمدد': [
    { name:'مرونة المفاصل', steps:[
      {label:'10 تدويرات رقبة لكل اتجاه', seconds:20}, {label:'10 لف الكتفين', seconds:20},
      {label:'10 تدويرات ورك لكل اتجاه', seconds:30}, {label:'10 تدويرات كاحل لكل قدم', seconds:30}
    ]},
    { name:'تدفق التمدد الديناميكي', steps:[
      {label:'10 طعنات مشي مع التفاف', seconds:40}, {label:'10 إنش وورم', seconds:40},
      {label:'تمدد الفخذ واقفًا لكل ساق', seconds:40}, {label:'وضعية الكلب المطأطئ', seconds:30}
    ]},
    { name:'العمود الفقري والوركين', steps:[
      {label:'10 تمدد القط والبقرة', seconds:30}, {label:'10 تدويرات ورك لكل اتجاه', seconds:30},
      {label:'10 التفاف جذع واقفًا', seconds:20}, {label:'ثبات سكوات عميق', seconds:30}
    ]},
    { name:'استيقاظ الصباح', steps:[
      {label:'10 انحناءات جانبية واقفًا لكل اتجاه', seconds:20}, {label:'10 تدويرات ذراع لكل اتجاه', seconds:30},
      {label:'10 سكوات بوزن الجسم', seconds:30}, {label:'أنفاس عميقة', seconds:20}
    ]}
  ],
  'سريع / بدون معدات': [
    { name:'بداية 5 دقائق', steps:[
      {label:'الجري في المكان', seconds:60}, {label:'تمرين القفز', seconds:60}, {label:'تدوير الذراعين', seconds:60},
      {label:'سكوات بوزن الجسم', seconds:60}, {label:'رفع الركبتين عاليًا', seconds:60}
    ]},
    { name:'إحماء استراحة المكتب', steps:[
      {label:'20 تمرين القفز', seconds:30}, {label:'10 سكوات', seconds:30},
      {label:'10 تدويرات ذراع لكل اتجاه', seconds:30}, {label:'10 التفاف جذع', seconds:20}
    ]},
    { name:'السفر / المساحة الصغيرة', steps:[
      {label:'المشي في المكان', seconds:30}, {label:'10 سكوات', seconds:30},
      {label:'10 تدويرات ذراع لكل اتجاه', seconds:30}, {label:'10 رفع كعب واقفًا', seconds:20}
    ]},
    { name:'نسخة الدقيقتين', steps:[
      {label:'تمرين القفز', seconds:30}, {label:'رفع الركبتين عاليًا', seconds:30},
      {label:'10 سكوات', seconds:30}, {label:'10 تدويرات ذراع لكل اتجاه', seconds:30}
    ]}
  ],
  'وزن الجسم / أسلوب السجن': [
    { name:'إحماء الزنزانة', steps:[
      {label:'المشي في المكان', seconds:60}, {label:'10 تدويرات ذراع لكل اتجاه', seconds:30},
      {label:'10 تدويرات ورك لكل اتجاه', seconds:30}, {label:'15 سكوات بوزن الجسم', seconds:30},
      {label:'10 تمارين ضغط للوح الكتف', seconds:30}, {label:'10 إنش وورم', seconds:40}
    ]},
    { name:'دائرة تجهيز المفاصل', steps:[
      {label:'10 تدويرات معصم لكل اتجاه', seconds:20}, {label:'10 تدويرات كاحل لكل قدم', seconds:20},
      {label:'10 تدويرات ركبة لكل اتجاه', seconds:20}, {label:'10 التفاف جذع لكل اتجاه', seconds:30},
      {label:'10 أرجحات ساق أمام-خلف لكل ساق', seconds:30}, {label:'10 أرجحات ساق جانبية لكل ساق', seconds:30}
    ]},
    { name:'محفز المرونة الحركية', steps:[
      {label:'تمدد "الأعظم"، لكل جانب', seconds:40}, {label:'مسح الهامسترينغ أثناء المشي', seconds:30},
      {label:'تحريك مرونة سكوات القوزاق', seconds:40}, {label:'10 دورات صدرية لكل اتجاه', seconds:30},
      {label:'10 أرجحات ذراع', seconds:20}, {label:'تمرين القطة والبقرة', seconds:30}
    ]}
  ]
};

const WARMUP_LIBRARY = APP_LANG === 'nl' ? WARMUP_LIBRARY_NL : (APP_LANG === 'ar_fusha' ? WARMUP_LIBRARY_AR : WARMUP_LIBRARY_EN);
let warmupLibCategory = Object.keys(WARMUP_LIBRARY)[0];
let warmupLibAssignToDay = false;
function openWarmupLibraryModal(assignToDay){
  warmupLibAssignToDay = !!assignToDay;
  warmupLibCategory = Object.keys(WARMUP_LIBRARY)[0];
  renderWarmupLibraryCats();
  renderWarmupLibraryList();
  document.getElementById('warmupLibraryModal').classList.add('open');
}
function closeWarmupLibraryModal(){
  document.getElementById('warmupLibraryModal').classList.remove('open');
  warmupLibAssignToDay = false;
}
function renderWarmupLibraryCats(){
  const wrap = document.getElementById('warmupLibraryCats');
  wrap.innerHTML = Object.keys(WARMUP_LIBRARY).map(cat =>
    `<button type="button" class="chip ${cat===warmupLibCategory?'active':''}" data-action="selectWarmupLibCat" data-key="${escAttr(cat)}">${cat}</button>`
  ).join('');
}
function selectWarmupLibCat(cat){
  warmupLibCategory = cat;
  renderWarmupLibraryCats();
  renderWarmupLibraryList();
}
function renderWarmupLibraryList(){
  const wrap = document.getElementById('warmupLibraryList');
  const list = WARMUP_LIBRARY[warmupLibCategory] || [];
  if(!list.length){ wrap.innerHTML = '<div class="exlib-empty">' + t('lbl_nowarmupscat') + '</div>'; return; }
  wrap.innerHTML = list.map((w,i) => {
    const total = w.steps.reduce((a,s)=>a+s.seconds, 0);
    const preview = w.steps.map(s=>s.label).join(' → ');
    return `<button type="button" class="ex-lib-item" data-action="addWarmupFromLibrary" data-idx="${i}"><b>${escHtml(w.name)}</b> <span style="color:var(--muted);font-size:11.5px;">(${formatMMSS(total)}, ${w.steps.length} ${w.steps.length===1?t('lbl_step_singular'):t('lbl_step_plural')})</span><br><span style="color:var(--muted);font-size:12px;">${escHtml(preview)}</span></button>`;
  }).join('');
}
function addWarmupFromLibrary(i){
  const preset = (WARMUP_LIBRARY[warmupLibCategory] || [])[i];
  if(!preset) return;
  const w = { id: Date.now(), name: preset.name, steps: preset.steps.map(s=>({label:s.label, seconds:s.seconds})) };
  state.warmups.push(w);
  if(warmupLibAssignToDay){
    const day = curDay();
    day.warmupId = w.id;
    day.warmup = warmupStepsText(w);
  }
  closeWarmupLibraryModal();
  renderWarmupLibrary();
  renderDayContent();
  ltRenderExerciseList();
  save();
}

function addExercise(){
  curDay().exercises.push({ name:'', detail:'', tip:'' });
  renderDayContent(); save();
  const inputs = document.querySelectorAll('#dayContent .ex-name');
  const last = inputs[inputs.length-1];
  if(last) last.focus();
}
function openCustomExerciseModal(){
  document.getElementById('customExNameInput').value = '';
  document.getElementById('customExerciseModal').classList.add('open');
  setTimeout(()=>{ const el=document.getElementById('customExNameInput'); if(el) el.focus(); }, 50);
}
function closeCustomExerciseModal(){
  document.getElementById('customExerciseModal').classList.remove('open');
}
function saveCustomExerciseModal(){
  const name = document.getElementById('customExNameInput').value.trim();
  if(!name){ document.getElementById('customExNameInput').focus(); return; }
  curDay().exercises.push({ name, detail:'', tip:'' });
  closeCustomExerciseModal();
  renderDayContent();
  save();
  openExSetsModal(curDay().exercises.length - 1);
}
function deleteExercise(i){
  curDay().exercises.splice(i,1);
  renderDayContent(); save();
}
function moveExercise(i, dir){
  const exs = curDay().exercises;
  const j = i + dir;
  if(j < 0 || j >= exs.length) return;
  [exs[i], exs[j]] = [exs[j], exs[i]];
  renderDayContent(); save();
}
function updateExercise(i, field, val){
  curDay().exercises[i][field] = val;
  debouncedSave();
}


// ── EXERCISE LIBRARY ─────────────────────────────────
const EXERCISE_LIBRARY_EN = {
  'Chest': ['Barbell Bench Press','Incline Dumbbell Press','Decline Bench Press','Push-Ups','Cable Fly','Dips','Machine Chest Press','Pec Deck','Diamond Push-Ups','Wide Push-Ups','Incline Push-Ups','Decline Push-Ups','Archer Push-Ups','Dumbbell Bench Press','Incline Barbell Press','Cable Crossover','Dumbbell Pullover','Floor Press','Plyo Push-Ups','Knee Push-Ups','Typewriter Push-Ups','Staggered Push-Ups','Offset Push-Ups','Pseudo Planche Push-Ups','Hindu Push-Ups','Dive Bomber Push-Ups','Hand-Release Push-Ups','Tempo Push-Ups','Pause Push-Ups','Explosive Push-Ups','Clap Push-Ups','One-Arm Push-Up Progression','Planche Lean','Push-Up Hold','Chair Incline Push-Ups','Chair Decline Push-Ups','Backpack Floor Press','Wall Push-Ups','Push-Up Progression','Diamond Push-Up Progression','Archer Push-Up Progression','Planche Lean Progression','Push-Up Bottom Hold','Push-Up Top Hold'],
  'Back': ['Pull-Ups','Lat Pulldown','Bent-Over Barbell Row','Seated Cable Row','Deadlift','T-Bar Row','Single-Arm Dumbbell Row','Face Pull','Chin-Ups','Inverted Row','Superman','Reverse Snow Angels','Wide-Grip Pull-Ups','Pendlay Row','Straight-Arm Pulldown','Rack Pull','Good Morning','Back Extension','Active Hang','Jumping Pull-Ups','Negative Pull-Ups','Neutral-Grip Pull-Ups','Close-Grip Pull-Ups','Commando Pull-Ups','Archer Pull-Up Progression','Towel-Assisted Pull-Ups','Band-Assisted Pull-Ups','Isometric Pull-Up Hold','Top-Position Hold','90-Degree Pull-Up Hold','Hanging Knee Raises','Hanging Tuck Raises','Hanging Windshield Wipers','Hanging Scapular Retractions','Towel Grip Hang','Towel Pull-Up','Backpack Bent-Over Row','Backpack One-Arm Row','Towel Rows','Towel Isometric Row','Pull-Up Progression','Chin-Up Progression','Front Lever Tuck Progression','Muscle-Up Progression','Pull-Up Top Hold','Chin-Up Top Hold'],
  'Legs': ['Barbell Squat','Walking Lunges','Leg Press','Romanian Deadlift','Calf Raise','Leg Extension','Leg Curl','Bulgarian Split Squat','Hip Thrust','Bodyweight Squat','Jump Squat','Reverse Lunge','Wall Sit','Step-Ups','Glute Bridge','Single-Leg Glute Bridge','Calf Raise (Bodyweight)','Front Squat','Goblet Squat','Sumo Deadlift','Pistol Squat','Box Jump','Seated Calf Raise','Tempo Squats','Pause Squats','Squat Pulses','Narrow Squats','Wide Squats','Sumo Squats','Split Squats','Forward Lunges','Assisted Pistol Squats','Pistol Squat Progression','Shrimp Squat Progression','Single-Leg Wall Sit','Spanish Squat (Band-Assisted)','Sissy Squat Progression','Hindu Squats','Cyclist Squats','Squat to Calf Raise','Chair Step-Ups','Rear-Foot-Elevated Lunges','Chair-Assisted Pistol Squat','Chair-Supported Sissy Squat','Seated Leg Extensions','Backpack Squats','Backpack Front Squats','Backpack Reverse Lunges','Backpack Bulgarian Split Squats','Backpack Step-Ups','Wall-Assisted Pistol Squat','Wall-Assisted Split Squat','Lateral Step-Ups','Reverse Step-Ups','Fast Step-Ups','Split Squat Hold','Lunge Hold'],
  'Shoulders': ['Overhead Press','Lateral Raise','Front Raise','Arnold Press','Rear Delt Fly','Upright Row','Shrugs','Pike Push-Ups','Handstand Push-Ups','Wall Walk','Dumbbell Shoulder Press','Cable Lateral Raise','Push Press','Band Pull-Apart','Seated Dumbbell Press','Plate Front Raise','Feet-Elevated Pike Push-Ups','Wall Handstand Hold','Handstand Shoulder Taps','Decline Pike Push-Ups','Shoulder Taps','Bear Plank Shoulder Taps','Wall Slides','Prone Y Raise','Prone T Raise','Prone W Raise','Chair-Assisted Handstand','Backpack Overhead Press','Backpack Lateral Raises','Backpack Front Raises','Wall Angels','Pike Push-Up to Handstand Progression','Handstand Progression','Handstand Hold'],
  'Arms': ['Barbell Bicep Curl','Hammer Curl','Incline Dumbbell Curl','Tricep Dip','Skull Crusher','Cable Tricep Pushdown','Preacher Curl','Chair Dips','Close-Grip Push-Ups','Concentration Curl','Cable Curl','Overhead Tricep Extension','EZ-Bar Curl','Reverse Curl','Diamond Dips','Straight-Bar Dips','Bodyweight Triceps Extension','Tiger Bend Progression','Bodyweight Triceps Press','Overhead Towel Extension','Backpack Biceps Curls','Backpack Hammer Curls','Backpack Triceps Extensions','Towel Biceps Curl Isometric','Towel Triceps Extension'],
  'Core': ['Plank','Crunches','Russian Twist','Hanging Leg Raise','Mountain Climbers','Bicycle Crunch','Side Plank','Ab Wheel Rollout','Flutter Kicks','V-Ups','Dead Bug','Hollow Hold','Leg Raise','Sit-Ups','Reverse Crunch','Pallof Press','Cable Crunch','Woodchopper','Bird Dog','Forearm Plank','High Plank','Copenhagen Plank Progression','Reverse Plank','Hollow Body Hold','Hollow Rocks','Arch Hold','Arch Rocks','Cross-Body Mountain Climbers','Heel Touches','Toe Touches','Bent-Knee Leg Raises','Scissor Kicks','Tuck-Ups','Jackknife Sit-Ups','In-and-Outs','Plank Shoulder Taps','Plank Jacks','L-Sit Progression','L-Sit on Parallel Supports','Seated Knee Raises','Hanging Leg Raise Progression','L-Sit Hold'],
  'Cardio': ['Jumping Jacks','Burpees','High Knees','Jump Rope','Sprint Intervals','Mountain Climbers','Rowing Machine','Stair Climber','Burpee Broad Jump','Skater Jumps','Bear Crawl','Butt Kicks','Battle Ropes','Box Step-Ups','Cycling','Jumping Lunges','Tuck Jumps','Shadow Boxing','Squat Thrusts','Sprawls','Broad Jumps','Split Jumps','Lateral Bounds','Fast Feet','Shuttle Runs','Stair Runs','Stair Walking','Bear Crawl Intervals','Stair Intervals'],
  'Glutes': ['Barbell Hip Thrust','Cable Kickback','Frog Pump','Banded Lateral Walk','Donkey Kick','Fire Hydrant','Single-Leg Deadlift','Clamshell','Single-Leg Hip Thrust','Hamstring Walkouts','Sliding Leg Curls with Towels','Single-Leg Romanian Deadlift','Reverse Hyperextension','Standing Hip Abduction','Cossack Squats','Chair-Supported Single-Leg RDL','Backpack Romanian Deadlifts','Backpack Good Mornings','Backpack Hip Thrust','Backpack Glute Bridge','Nordic Curl Progression','Glute Bridge Hold'],
  'Full Body': ['Kettlebell Swing','Thruster','Turkish Get-Up','Farmer\'s Carry','Wall Ball','Clean and Press','Devil Press','Man Maker','Backpack Carry'],
  'Warm-Up': ['General Warm-Up','March in Place','Low Impact Jumping Jacks','Seal Jacks','Arm Circles Forward','Arm Circles Backward','Shoulder Rolls','Torso Rotations','Hip Circles','Knee Circles','Ankle Circles','Wrist Circles','Leg Swings Front to Back','Leg Swings Side to Side','Squat to Reach','Inchworms','Crab Walk','Scapular Push-Ups','Scapular Pull-Ups','Dead Hang','Light Mountain Climbers'],
  'Mobility & Stretching': ['World\'s Greatest Stretch','Walking Hamstring Sweep','Deep Squat Hold with Movement','Cossack Squat Mobility','Hip Flexor Rocking','Adductor Rocking','Thoracic Rotations','Cat-Cow','Thread the Needle','Shoulder Pass-Through with Towel','Wall Shoulder Slides','Wrist Rocks','Ankle Rocks','Deep Lunge with Rotation','Arm Swings','Leg Swings','Chair-Assisted Hamstring Stretch','Towel Lat Stretch','Towel Hamstring Stretch','Towel Quad Stretch','Towel Calf Stretch','Deep Squat Hold','90/90 Hip Switch','90/90 Hip Hold','Cossack Squat Hold','Hip Flexor Lunge','Adductor Rock','Hamstring Sweep','Ankle Dorsiflexion Rock','Child\'s Pose with Reach','Downward Dog Pedal','Scapular Wall Slide','Wrist Flexion Rock','Wrist Extension Rock','Standing Quad Stretch','Lying Quad Stretch','Kneeling Hip Flexor Stretch','Couch Stretch','Standing Hamstring Stretch','Seated Hamstring Stretch','Single-Leg Hamstring Stretch','Calf Wall Stretch','Straight-Leg Calf Stretch','Bent-Knee Calf Stretch','Adductor / Butterfly Stretch','Frog Stretch','Cossack Hold','Figure-4 Glute Stretch','Pigeon Stretch','Seated Glute Stretch','Child\'s Pose','Lat Stretch','Hanging Lat Stretch','Doorway Chest Stretch','Cross-Body Shoulder Stretch','Overhead Triceps Stretch','Biceps Wall Stretch','Wrist Flexor Stretch','Wrist Extensor Stretch','Neck Side Stretch','Neck Rotation','Spinal Twist','Lying Spinal Twist','Cobra Stretch','Sphinx Stretch','Happy Baby','Full-Body Reach'],
  'Calves': ['Standing Calf Raises','Single-Leg Calf Raises','Bent-Knee Calf Raises','Calf Raise Pulses','Calf Raise Isometric Hold','Tibialis Raises against a Wall','Toe Walks','Heel Walks','Ankle Hops','Single-Leg Hops','Chair Calf Raises','Backpack Calf Raises','Wall Calf Raises','Calf Raises on a Step','Single-Leg Calf Raises on a Step'],
  'Grip & Forearms': ['Backpack Suitcase Carry','Farmer Carry with Backpack','Backpack Wrist Curl','Backpack Reverse Wrist Curl','Finger Extension with Rubber Band','Fist Squeeze Isometric','Plate/Book Pinch Hold'],
  'Recovery': ['Easy Walking','Easy Stair Walking','Light Mobility Flow','Gentle Full-Body Stretch','Breathing Practice','Dead Hang at Easy Intensity','Easy Cat-Cow','Easy Child\'s Pose','Easy Hip Mobility','Easy Shoulder Mobility']
};
const EXERCISE_LIBRARY_NL = {
  'Borst': ['Bankdrukken met Barbell','Schuine Halterdrukken','Declinatie Bankdrukken','Push-Ups','Kabel Fly','Dips','Machine Borstpers','Pec Deck','Diamond Push-Ups','Brede Push-Ups','Schuine Push-Ups (omhoog)','Schuine Push-Ups (omlaag)','Archer Push-Ups','Dumbbell Bankdrukken','Schuine Barbell Press','Cable Crossover','Dumbbell Pullover','Floor Press','Plyo Push-Ups','Knie Push-Ups','Typewriter Push-Ups','Staggered Push-Ups','Offset Push-Ups','Pseudo Planche Push-Ups','Hindu Push-Ups','Dive Bomber Push-Ups','Hand-Release Push-Ups','Tempo Push-Ups','Pause Push-Ups','Explosieve Push-Ups','Klap Push-Ups','Eenarmige Push-Up Progressie','Planche Lean','Push-Up Hold','Stoel Incline Push-Ups','Stoel Decline Push-Ups','Rugzak Floor Press','Muur Push-Ups','Push-Up Progressie','Diamond Push-Up Progressie','Archer Push-Up Progressie','Planche Lean Progressie','Push-Up Bottom Hold','Push-Up Top Hold'],
  'Rug': ['Pull-Ups','Lat Pulldown','Voorovergebogen Barbell Row','Zittende Kabel Row','Deadlift','T-Bar Row','Eenarmige Halter Row','Face Pull','Chin-Ups','Inverted Row','Superman','Omgekeerde Sneeuwengelen','Brede Pull-Ups','Pendlay Row','Straight-Arm Pulldown','Rack Pull','Good Morning','Rugstrekken','Actieve Hang','Jumping Pull-Ups','Negatieve Pull-Ups','Neutrale Grip Pull-Ups','Close-Grip Pull-Ups','Commando Pull-Ups','Archer Pull-Up Progressie','Handdoek-Ondersteunde Pull-Ups','Band-Ondersteunde Pull-Ups','Isometrische Pull-Up Hold','Top-Positie Hold','90-Graden Pull-Up Hold','Hangende Knieheffingen','Hangende Tuck Heffingen','Hangende Windshield Wipers','Hangende Scapulaire Retracties','Handdoek Grip Hang','Handdoek Pull-Up','Rugzak Bent-Over Row','Rugzak Eenarmige Row','Handdoek Rows','Handdoek Isometrische Row','Pull-Up Progressie','Chin-Up Progressie','Front Lever Tuck Progressie','Muscle-Up Progressie','Pull-Up Top Hold','Chin-Up Top Hold'],
  'Benen': ['Barbell Squat','Wandelende Lunges','Leg Press','Romeinse Deadlift','Kuitheffen','Beenstrekken','Beenbuigen','Bulgaarse Split Squat','Hip Thrust','Bodyweight Squat','Jump Squat','Achterwaartse Lunge','Wall Sit','Step-Ups','Glute Bridge','Eenbenige Glute Bridge','Kuitheffen (Lichaamsgewicht)','Front Squat','Goblet Squat','Sumo Deadlift','Pistol Squat','Box Jump','Zittende Kuitheffen','Tempo Squats','Pause Squats','Squat Pulses','Smalle Squats','Brede Squats','Sumo Squats','Split Squats','Voorwaartse Lunges','Ondersteunde Pistol Squats','Pistol Squat Progressie','Shrimp Squat Progressie','Eenbenige Wall Sit','Spaanse Squat (met Band)','Sissy Squat Progressie','Hindu Squats','Cyclist Squats','Squat naar Kuitheffen','Stoel Step-Ups','Achtervoet-Verhoogde Lunges','Stoel-Ondersteunde Pistol Squat','Stoel-Ondersteunde Sissy Squat','Zittende Beenstrekkingen','Rugzak Squats','Rugzak Front Squats','Rugzak Achterwaartse Lunges','Rugzak Bulgaarse Split Squats','Rugzak Step-Ups','Muur-Ondersteunde Pistol Squat','Muur-Ondersteunde Split Squat','Laterale Step-Ups','Achterwaartse Step-Ups','Snelle Step-Ups','Split Squat Hold','Lunge Hold'],
  'Schouders': ['Overhead Press','Zijwaartse Heffing','Voorwaartse Heffing','Arnold Press','Rear Delt Fly','Upright Row','Schouderoptrekken','Pike Push-Ups','Handstand Push-Ups','Wall Walk','Dumbbell Shoulderpress','Kabel Zijwaartse Heffing','Push Press','Band Pull-Apart','Zittende Dumbbell Press','Plate Voorwaartse Heffing','Voeten-Verhoogde Pike Push-Ups','Muur Handstand Hold','Handstand Schoudertikjes','Decline Pike Push-Ups','Schoudertikjes','Bear Plank Schoudertikjes','Muur Slides','Buikligging Y Raise','Buikligging T Raise','Buikligging W Raise','Stoel-Ondersteunde Handstand','Rugzak Overhead Press','Rugzak Zijwaartse Heffingen','Rugzak Voorwaartse Heffingen','Muur Angels','Pike Push-Up naar Handstand Progressie','Handstand Progressie','Handstand Hold'],
  'Armen': ['Barbell Bicepscurl','Hamercurl','Schuine Halter Curl','Tricep Dip','Skull Crusher','Kabel Tricep Pushdown','Preacher Curl','Stoel Dips','Close-Grip Push-Ups','Concentration Curl','Kabel Curl','Overhead Tricep Extension','EZ-Bar Curl','Reverse Curl','Diamond Dips','Rechte Bar Dips','Bodyweight Triceps Extension','Tiger Bend Progressie','Bodyweight Triceps Press','Overhead Handdoek Extension','Rugzak Biceps Curls','Rugzak Hammer Curls','Rugzak Triceps Extensions','Handdoek Biceps Curl Isometrisch','Handdoek Triceps Extension'],
  'Core': ['Plank','Crunches','Russian Twist','Hangende Beenheffing','Mountain Climbers','Bicycle Crunch','Zij-Plank','Ab Wheel Rollout','Flutter Kicks','V-Ups','Dead Bug','Hollow Hold','Beenheffing','Sit-Ups','Reverse Crunch','Pallof Press','Kabel Crunch','Woodchopper','Bird Dog','Onderarm Plank','Hoge Plank','Copenhagen Plank Progressie','Omgekeerde Plank','Hollow Body Hold','Hollow Rocks','Arch Hold','Arch Rocks','Cross-Body Mountain Climbers','Hiel Touches','Teen Touches','Gebogen Knie Beenheffingen','Scharenschoppen','Tuck-Ups','Jackknife Sit-Ups','In-and-Outs','Plank Schoudertikjes','Plank Jacks','L-Sit Progressie','L-Sit op Parallelle Steunen','Zittende Knieheffingen','Hangende Beenheffing Progressie','L-Sit Hold'],
  'Cardio': ['Jumping Jacks','Burpees','High Knees','Touwtjespringen','Sprint Intervallen','Mountain Climbers','Roeimachine','Trapklimmer','Burpee Broad Jump','Skater Jumps','Bear Crawl','Butt Kicks','Battle Ropes','Box Step-Ups','Fietsen','Jumping Lunges','Tuck Jumps','Schaduwboksen','Squat Thrusts','Sprawls','Verre Sprongen','Split Jumps','Laterale Sprongen','Snelle Voeten','Shuttle Runs','Trap Runs','Traplopen','Bear Crawl Intervallen','Trap Intervallen'],
  'Billen': ['Barbell Hip Thrust','Cable Kickback','Frog Pump','Banded Lateral Walk','Donkey Kick','Fire Hydrant','Eenbenige Deadlift','Clamshell','Eenbenige Hip Thrust','Hamstring Walkouts','Sliding Leg Curls met Handdoeken','Eenbenige Romeinse Deadlift','Reverse Hyperextension','Staande Heup Abductie','Cossack Squats','Stoel-Ondersteunde Eenbenige RDL','Rugzak Romeinse Deadlifts','Rugzak Good Mornings','Rugzak Hip Thrust','Rugzak Glute Bridge','Nordic Curl Progressie','Glute Bridge Hold'],
  'Volledig Lichaam': ['Kettlebell Swing','Thruster','Turkish Get-Up','Farmer\'s Carry','Wall Ball','Clean and Press','Devil Press','Man Maker','Rugzak Carry'],
  'Warming-up': ['Algemene Warming-up','Marcheren op de Plek','Jumping Jacks met Lage Impact','Seal Jacks','Armcirkels Voorwaarts','Armcirkels Achterwaarts','Schouderrollen','Torsorotaties','Heupcirkels','Kniecirkels','Enkelcirkels','Polscirkels','Beenzwaaien Voor-Achter','Beenzwaaien Zij-Zij','Squat naar Reiken','Inchworms','Krabbenloop','Scapulaire Push-Ups','Scapulaire Pull-Ups','Dead Hang','Lichte Mountain Climbers'],
  'Mobiliteit & Stretchen': ['World\'s Greatest Stretch','Wandelende Hamstring Sweep','Diepe Squat Hold met Beweging','Cossack Squat Mobiliteit','Heupbuiger Rocking','Adductor Rocking','Thoracale Rotaties','Cat-Cow','Thread the Needle','Schouder Pass-Through met Handdoek','Muur Schouder Slides','Pols Rocks','Enkel Rocks','Diepe Lunge met Rotatie','Armzwaaien','Beenzwaaien','Stoel-Ondersteunde Hamstring Stretch','Handdoek Lat Stretch','Handdoek Hamstring Stretch','Handdoek Quad Stretch','Handdoek Kuit Stretch','Diepe Squat Hold','90/90 Heupwissel','90/90 Heup Hold','Cossack Squat Hold','Heupbuiger Lunge','Adductor Rock','Hamstring Sweep','Enkel Dorsiflexie Rock','Kindhouding met Reiken','Downward Dog Pedal','Scapulaire Muur Slide','Pols Flexie Rock','Pols Extensie Rock','Staande Quad Stretch','Liggende Quad Stretch','Knielende Heupbuiger Stretch','Bank Stretch','Staande Hamstring Stretch','Zittende Hamstring Stretch','Eenbenige Hamstring Stretch','Kuit Muur Stretch','Gestrekte Been Kuit Stretch','Gebogen Knie Kuit Stretch','Adductor / Vlinder Stretch','Kikker Stretch','Cossack Hold','Figuur-4 Bil Stretch','Duif Stretch','Zittende Bil Stretch','Kindhouding','Lat Stretch','Hangende Lat Stretch','Deuropening Borst Stretch','Cross-Body Schouder Stretch','Overhead Triceps Stretch','Biceps Muur Stretch','Pols Flexor Stretch','Pols Extensor Stretch','Nek Zij Stretch','Nekrotatie','Spinale Twist','Liggende Spinale Twist','Cobra Stretch','Sfinx Stretch','Happy Baby','Volledig Lichaam Reiken'],
  'Kuiten': ['Staande Kuitheffingen','Eenbenige Kuitheffingen','Gebogen Knie Kuitheffingen','Kuitheffing Pulses','Kuitheffing Isometrische Hold','Tibialis Heffingen tegen een Muur','Teenloop','Hakloop','Enkelhupjes','Eenbenige Hupjes','Stoel Kuitheffingen','Rugzak Kuitheffingen','Muur Kuitheffingen','Kuitheffingen op een Traptrede','Eenbenige Kuitheffingen op een Traptrede'],
  'Grip & Onderarmen': ['Rugzak Suitcase Carry','Farmer Carry met Rugzak','Rugzak Pols Curl','Rugzak Omgekeerde Pols Curl','Vinger Extensie met Elastiek','Vuist Squeeze Isometrisch','Plate/Boek Pinch Hold'],
  'Herstel': ['Rustig Wandelen','Rustig Traplopen','Lichte Mobiliteit Flow','Zachte Volledig Lichaam Stretch','Ademhalingsoefening','Dead Hang op Lage Intensiteit','Rustige Cat-Cow','Rustige Kindhouding','Rustige Heup Mobiliteit','Rustige Schouder Mobiliteit']
};
const EXERCISE_LIBRARY_AR = {
  'الصدر': ['ضغط البنش بالبار','ضغط الدمبل المائل','ضغط البنش المنحدر','تمرين الضغط (بوش أب)','فتح الكابل (فلاي)','الغطس (ديبس)','ضغط الصدر بالجهاز','جهاز بيك ديك','تمرين الضغط الماسي','تمرين الضغط العريض','تمرين الضغط المائل للأعلى','تمرين الضغط المائل للأسفل','تمرين الضغط بذراع واحدة (آرتشر)','ضغط البنش بالدمبل','ضغط مائل بالبار','تقاطع الكابل','بولأوفر بالدمبل','ضغط الأرضية','تمرين الضغط الانفجاري','تمرين الضغط على الركبتين','تمرين الضغط "الآلة الكاتبة"','تمرين الضغط المتدرج','تمرين الضغط غير المتماثل','تمرين الضغط شبه بلانش','تمرين الضغط الهندي','تمرين الضغط "القاذفة"','تمرين الضغط برفع اليدين','تمرين الضغط بإيقاع بطيء','تمرين الضغط مع توقف','تمرين الضغط الانفجاري السريع','تمرين الضغط بالتصفيق','تدرج تمرين الضغط بذراع واحدة','ميل البلانش','ثبات تمرين الضغط','تمرين الضغط المائل على الكرسي','تمرين الضغط المنحدر على الكرسي','ضغط الأرضية بحقيبة الظهر','تمرين الضغط على الحائط','تدرج تمرين الضغط','تدرج تمرين الضغط الماسي','تدرج تمرين الضغط بذراع واحدة (آرتشر)','تدرج ميل البلانش','ثبات تمرين الضغط في الأسفل','ثبات تمرين الضغط في الأعلى'],
  'الظهر': ['العقلة (بول أب)','سحب أمامي بالكابل','سحب البار وأنت منحني','تجديف بالكابل جالسًا','الرفعة الميتة','تجديف تي-بار','تجديف بدمبل بذراع واحدة','سحب الوجه (فيس بول)','سحب عقلي (تشين أب)','تجديف مقلوب','تمرين سوبرمان','ملائكة الثلج العكسية','عقلة بقبضة عريضة','تجديف بندلاي','سحب بذراع مستقيمة','سحب من الرف','تمرين الانحناء الأمامي (جود مورنينغ)','تمديد الظهر','التعليق النشط','عقلة بالقفز','عقلة سلبية (نزول بطيء)','عقلة بقبضة محايدة','عقلة بقبضة ضيقة','عقلة كوماندو','تدرج عقلة آرتشر','عقلة بمساعدة المنشفة','عقلة بمساعدة الحزام المطاطي','ثبات العقلة الإيزومتري','ثبات وضعية الأعلى','ثبات العقلة بزاوية 90 درجة','رفع الركبتين معلقًا','رفع الركبتين المجمعة معلقًا','مساحات الزجاج معلقًا','تقريب لوح الكتف معلقًا','التعليق بقبضة المنشفة','عقلة بالمنشفة','تجديف منحني بحقيبة الظهر','تجديف بذراع واحدة بحقيبة الظهر','تجديف بالمنشفة','تجديف إيزومتري بالمنشفة','تدرج العقلة','تدرج عقلة تشين أب','تدرج فرونت ليفر المجمع','تدرج ماسل أب','ثبات العقلة في الأعلى','ثبات تشين أب في الأعلى'],
  'الأرجل': ['سكوات بالبار','الطعنات أثناء المشي','ضغط الأرجل (ليغ برس)','الرفعة الميتة الرومانية','رفع الساق (كالف ريز)','تمديد الساق','ثني الساق','سكوات بلغاري منقسم','دفع الورك (هيب ثرست)','سكوات بوزن الجسم','قفزة سكوات','طعنة خلفية','الجلوس على الحائط','صعود المنصة','جسر الأرداف','جسر الأرداف بساق واحدة','رفع الساق بوزن الجسم','سكوات أمامي','سكوات جوبلت','الرفعة الميتة سومو','سكوات المسدس','القفز على الصندوق','رفع الساق جالسًا','سكوات بإيقاع بطيء','سكوات مع توقف','نبضات السكوات','سكوات ضيق','سكوات عريض','سكوات سومو','سكوات منقسم','طعنة أمامية','سكوات المسدس بمساعدة','تدرج سكوات المسدس','تدرج سكوات الجمبري','جلوس الحائط بساق واحدة','سكوات إسباني (بمساعدة الحزام)','تدرج سكوات سيسي','سكوات هندي','سكوات الدراج','سكوات إلى رفع السمانة','صعود المنصة على الكرسي','طعنة برفع القدم الخلفية','سكوات المسدس بمساعدة الكرسي','سكوات سيسي بمساعدة الكرسي','تمديد الساق جالسًا','سكوات بحقيبة الظهر','سكوات أمامي بحقيبة الظهر','طعنة خلفية بحقيبة الظهر','سكوات بلغاري منقسم بحقيبة الظهر','صعود المنصة بحقيبة الظهر','سكوات المسدس بمساعدة الحائط','سكوات منقسم بمساعدة الحائط','صعود المنصة الجانبي','صعود المنصة الخلفي','صعود المنصة السريع','ثبات سكوات منقسم','ثبات الطعنة'],
  'الأكتاف': ['الضغط العلوي (أوفرهيد بريس)','رفع جانبي','رفع أمامي','ضغط أرنولد','فتح الكتف الخلفي','سحب مرتفع (أبرايت رو)','رفع الكتفين (شرَغ)','تمرين الضغط بايك','الضغط بوضعية الوقوف على اليدين','المشي على اليدين على الحائط','ضغط الكتف بالدمبل','رفع جانبي بالكابل','بوش بريس','فرد الحزام المطاطي','ضغط الدمبل جالسًا','رفع أمامي بالقرص','تمرين الضغط بايك مع رفع القدمين','ثبات الوقوف على اليدين عند الحائط','لمس الكتف أثناء الوقوف على اليدين','تمرين الضغط بايك المنحدر','لمس الكتف','لمس الكتف في بلانك الدب','انزلاق الحائط','رفع Y أثناء الاستلقاء على البطن','رفع T أثناء الاستلقاء على البطن','رفع W أثناء الاستلقاء على البطن','الوقوف على اليدين بمساعدة الكرسي','ضغط علوي بحقيبة الظهر','رفع جانبي بحقيبة الظهر','رفع أمامي بحقيبة الظهر','ملائكة الحائط','تدرج من بايك بوش أب إلى الوقوف على اليدين','تدرج الوقوف على اليدين','ثبات الوقوف على اليدين'],
  'الذراعين': ['ثني العضلة الثنائية بالبار','ثني هامر','ثني الدمبل المائل','غطس الترايسبس','سكل كراشر','دفع الترايسبس بالكابل','ثني بريتشر','غطس الكرسي','الضغط بقبضة ضيقة','ثني تركيز','ثني بالكابل','تمديد الترايسبس فوق الرأس','ثني بار EZ','ثني عكسي','غطس الماس','غطس على بار مستقيم','تمديد الترايسبس بوزن الجسم','تدرج "تايغر بند"','ضغط الترايسبس بوزن الجسم','تمديد فوق الرأس بالمنشفة','ثني بايسبس بحقيبة الظهر','ثني هامر بحقيبة الظهر','تمديد ترايسبس بحقيبة الظهر','ثني بايسبس إيزومتري بالمنشفة','تمديد ترايسبس بالمنشفة'],
  'الجذع': ['البلانك','تمرين الكرنش','اللف الروسي','رفع الساق معلقًا','متسلق الجبل','كرنش الدراجة','بلانك جانبي','عجلة البطن','ركلات الرفرفة','تمرين V','الحشرة الميتة','الثبات المجوف','رفع الساق','تمرين البطن (سيت أب)','كرنش عكسي','ضغط بالوف','كرنش بالكابل','تمرين قاطع الخشب','تمرين بيرد دوغ','بلانك على الساعدين','بلانك عالٍ','تدرج بلانك كوبنهاغن','بلانك عكسي','ثبات الجسم المجوف','هزّ الجسم المجوف','ثبات القوس','هزّ القوس','متسلق الجبل العرضي','لمس الكعبين','لمس أصابع القدم','رفع الساق بركبة مثنية','ركلات المقص','تمرين التجميع','سيت أب مطواة','تمرين الدخول والخروج','لمس الكتف في البلانك','بلانك جاك','تدرج إل-سيت','إل-سيت على متوازيين','رفع الركبتين جالسًا','تدرج رفع الساق معلقًا','ثبات إل-سيت'],
  'كارديو': ['تمرين القفز بفتح الذراعين والساقين','بربيز','رفع الركبتين عاليًا','نط الحبل','فترات السرعة القصوى','متسلق الجبل','جهاز التجديف','جهاز صعود الدرج','قفزة بربيز الواسعة','قفزات المتزلج','الزحف كالدب','ركلات المؤخرة','حبال المعركة','الصعود على الصندوق','ركوب الدراجة','طعنات القفز','قفزات التجميع','الملاكمة الوهمية','دفعات السكوات','سبراول','قفزات عريضة','قفزات منقسمة','قفزات جانبية','الأقدام السريعة','جري المكوك','الجري على الدرج','المشي على الدرج','فترات الزحف كالدب','فترات الدرج'],
  'الأرداف': ['دفع الورك بالبار','ركلة خلفية بالكابل','دفع الضفدع','المشي الجانبي بالحزام','ركلة الحمار','تمرين فاير هايدرانت','الرفعة الميتة بساق واحدة','تمرين المحارة','دفع الورك بساق واحدة','مشي الهامسترينغ للأمام','ثني الساق الانزلاقي بالمنشفة','رفعة ميتة رومانية بساق واحدة','تمديد الظهر العكسي','إبعاد الورك واقفًا','سكوات القوزاق','رفعة رومانية بساق واحدة بمساعدة الكرسي','رفعة ميتة رومانية بحقيبة الظهر','جود مورنينغ بحقيبة الظهر','دفع الورك بحقيبة الظهر','جسر الأرداف بحقيبة الظهر','تدرج ثني نوردك','ثبات جسر الأرداف'],
  'الجسم بالكامل': ['أرجحة الكيتلبل','ثراستر','النهوض التركي','حمل المزارع','كرة الحائط','كلين آند بريس','ديفل بريس','مان ميكر','حمل حقيبة الظهر'],
  'الإحماء': ['إحماء عام','المشي في المكان','تمرين القفز بفتح الذراعين والساقين (تأثير منخفض)','تمرين سيل جاك','دوران الذراعين للأمام','دوران الذراعين للخلف','لف الكتفين','دوران الجذع','دوران الورك','دوران الركبة','دوران الكاحل','دوران المعصم','أرجحة الساق للأمام والخلف','أرجحة الساق جانبيًا','سكوات مع مد الذراعين','تمرين الدودة (إنشورم)','مشية السرطان','تمرين الضغط للوح الكتف','عقلة للوح الكتف','التعليق الميت (ديد هانغ)','متسلق الجبل الخفيف'],
  'المرونة والتمدد': ['تمدد "الأعظم" (وورلدز غريتست ستريتش)','مسح الهامسترينغ أثناء المشي','ثبات السكوات العميق مع حركة','تحريك مرونة سكوات القوزاق','هزّ ثنيات الورك','هزّ العضلة المقربة','دوران الفقرات الصدرية','تمرين القطة والبقرة','تمرين خيط الإبرة','تمرير الكتف بالمنشفة','انزلاق الكتف على الحائط','هزّ المعصم','هزّ الكاحل','طعنة عميقة مع دوران','أرجحة الذراعين','أرجحة الساق','تمدد الهامسترينغ بمساعدة الكرسي','تمدد العضلة الظهرية بالمنشفة','تمدد الهامسترينغ بالمنشفة','تمدد الفخذ الأمامي بالمنشفة','تمدد السمانة بالمنشفة','ثبات السكوات العميق','تبديل الورك 90/90 (فردي)','ثبات الورك 90/90','ثبات سكوات القوزاق','طعنة ثنيات الورك','هزّ العضلة المقربة (فردي)','مسح الهامسترينغ','هزّ ثني الكاحل الظهري','وضعية الطفل مع المد','تدوير الكلب المطل للأسفل','انزلاق لوح الكتف على الحائط','هزّ ثني المعصم','هزّ بسط المعصم','تمدد الفخذ الأمامي واقفًا','تمدد الفخذ الأمامي مستلقيًا','تمدد ثنيات الورك جاثيًا','تمدد الأريكة','تمدد الهامسترينغ واقفًا','تمدد الهامسترينغ جالسًا','تمدد الهامسترينغ بساق واحدة','تمدد السمانة على الحائط','تمدد السمانة بساق مستقيمة','تمدد السمانة بركبة مثنية','تمدد المقربة / الفراشة','تمدد الضفدع','ثبات القوزاق','تمدد الأرداف بوضعية الرقم 4','تمدد الحمامة','تمدد الأرداف جالسًا','وضعية الطفل','تمدد العضلة الظهرية','تمدد العضلة الظهرية معلقًا','تمدد الصدر عند الباب','تمدد الكتف العرضي','تمدد الترايسبس فوق الرأس','تمدد البايسبس على الحائط','تمدد عضلات ثني المعصم','تمدد عضلات بسط المعصم','تمدد الرقبة الجانبي','دوران الرقبة','التواء العمود الفقري','التواء العمود الفقري مستلقيًا','تمدد الكوبرا','تمدد أبو الهول','تمرين الطفل السعيد','مد الجسم بالكامل'],
  'السمانة': ['رفع السمانة واقفًا','رفع السمانة بساق واحدة','رفع السمانة بركبة مثنية','نبضات رفع السمانة','ثبات رفع السمانة الإيزومتري','رفع الظنبوب على الحائط','المشي على أطراف الأصابع','المشي على الكعبين','قفزات الكاحل','قفزات بساق واحدة','رفع السمانة على الكرسي','رفع السمانة بحقيبة الظهر','رفع السمانة على الحائط','رفع السمانة على الدرج','رفع السمانة بساق واحدة على الدرج'],
  'القبضة والساعدين': ['حمل حقيبة الظهر الجانبي (سوتكيس)','حمل المزارع بحقيبة الظهر','ثني المعصم بحقيبة الظهر','ثني المعصم العكسي بحقيبة الظهر','تمديد الأصابع بشريط مطاطي','قبضة اليد الإيزومترية','قبضة القرص/الكتاب'],
  'الاستشفاء': ['المشي الخفيف','صعود الدرج الخفيف','تدفق حركي خفيف','تمدد لطيف للجسم بالكامل','تمرين التنفس','التعليق الميت بشدة خفيفة','تمرين القطة والبقرة الخفيف','وضعية الطفل الخفيفة','تحريك الورك الخفيف','تحريك الكتف الخفيف']
};
const EXERCISE_LIBRARY = APP_LANG === 'nl' ? EXERCISE_LIBRARY_NL : (APP_LANG === 'ar_fusha' ? EXERCISE_LIBRARY_AR : EXERCISE_LIBRARY_EN);
let exLibraryCategory = Object.keys(EXERCISE_LIBRARY)[0];
function openExLibraryModal(){
  exLibraryCategory = Object.keys(EXERCISE_LIBRARY)[0];
  renderExLibraryCats();
  renderExLibraryList();
  document.getElementById('exLibraryModal').classList.add('open');
}
function closeExLibraryModal(){
  document.getElementById('exLibraryModal').classList.remove('open');
}
function renderExLibraryCats(){
  const wrap = document.getElementById('exLibraryCats');
  wrap.innerHTML = Object.keys(EXERCISE_LIBRARY).map(cat =>
    `<button type="button" class="chip ${cat===exLibraryCategory?'active':''}" data-action="selectExLibraryCat" data-key="${escAttr(cat)}">${cat}</button>`
  ).join('');
}
function selectExLibraryCat(cat){
  exLibraryCategory = cat;
  renderExLibraryCats();
  renderExLibraryList();
}
function renderExLibraryList(){
  const wrap = document.getElementById('exLibraryList');
  const list = EXERCISE_LIBRARY[exLibraryCategory] || [];
  if(!list.length){ wrap.innerHTML = '<div class="exlib-empty">' + t('lbl_exlibrary_empty') + '</div>'; return; }
  wrap.innerHTML = list.map((name,i) =>
    `<button type="button" class="ex-lib-item" data-action="addExerciseFromLibrary" data-idx="${i}">${escHtml(name)}</button>`
  ).join('');
}
function addExerciseFromLibrary(i){
  const name = (EXERCISE_LIBRARY[exLibraryCategory] || [])[i];
  if(!name) return;
  curDay().exercises.push({ name, detail:'', tip:'', category: exLibraryCategory });
  closeExLibraryModal();
  renderDayContent();
  save();
  openExSetsModal(curDay().exercises.length - 1);
}
let exSetsEditIdx = null;
let exSetsMode = 'reps';
function openExSetsModal(i){
  exSetsEditIdx = i;
  const ex = curDay().exercises[i];
  let sets = ex.sets || '';
  let reps = ex.reps || '';
  let restSec = ex.restSec || '';
  let holdSec = ex.holdSec || '';
  if(!sets && !reps && !restSec && ex.detail){
    // best-effort: try to pull numbers out of existing free-text detail like "4 sets × 12–20 reps · rest 45 sec"
    const setsMatch = ex.detail.match(/(\d+)\s*sets?/i);
    const repsMatch = ex.detail.match(/[×x]\s*([\d–\-to\s]+?)\s*reps?/i);
    const restMatch = ex.detail.match(/rest\s*(\d+)/i);
    if(setsMatch) sets = setsMatch[1];
    if(repsMatch) reps = repsMatch[1].trim();
    if(restMatch) restSec = restMatch[1];
  }
  document.getElementById('exSetsInput').value = sets;
  document.getElementById('exRepsInput').value = reps;
  document.getElementById('exRestInput').value = restSec;
  document.getElementById('exHoldInput').value = holdSec;
  setExMode(ex.mode === 'time' ? 'time' : 'reps');
  // CRITICAL CIRCUIT RULE: sets aren't a thing on a CIRCUIT day — the round
  // count lives once on the day itself (the Rounds field), so the Sets
  // section of this modal is hidden entirely rather than asking for a
  // per-exercise number that the app won't use or display.
  const setsSection = document.getElementById('exSetsSection');
  if(setsSection) setsSection.style.display = curDay().circuit ? 'none' : '';
  document.getElementById('exSetsModal').classList.add('open');
  refreshExSetsChipState();
}
function setExMode(mode){
  exSetsMode = mode;
  document.getElementById('exRepsSection').style.display = mode === 'time' ? 'none' : '';
  document.getElementById('exTimeSection').style.display = mode === 'time' ? '' : 'none';
  document.querySelectorAll('#exModeToggle .chip').forEach(c=>c.classList.toggle('active', c.dataset.mode === mode));
}
function pickExSets(v){ document.getElementById('exSetsInput').value = v; refreshExSetsChipState(); }
function pickExReps(v){ document.getElementById('exRepsInput').value = v; refreshExSetsChipState(); }
function pickExRest(v){ document.getElementById('exRestInput').value = v; refreshExSetsChipState(); }
function pickExHold(v){ document.getElementById('exHoldInput').value = v; refreshExSetsChipState(); }
function refreshExSetsChipState(){
  const setsVal = document.getElementById('exSetsInput').value;
  const repsVal = document.getElementById('exRepsInput').value.trim();
  const restVal = document.getElementById('exRestInput').value;
  const holdVal = document.getElementById('exHoldInput').value;
  document.querySelectorAll('#exSetsChips .chip').forEach(c=>c.classList.toggle('active', c.dataset.val === setsVal));
  document.querySelectorAll('#exRepsChips .chip').forEach(c=>c.classList.toggle('active', c.dataset.val === repsVal));
  document.querySelectorAll('#exRestChips .chip').forEach(c=>c.classList.toggle('active', c.dataset.val === restVal));
  document.querySelectorAll('#exHoldChips .chip').forEach(c=>c.classList.toggle('active', c.dataset.val === holdVal));
}
function closeExSetsModal(){ document.getElementById('exSetsModal').classList.remove('open'); exSetsEditIdx = null; }
function saveExSetsModal(){
  if(exSetsEditIdx === null) return;
  const ex = curDay().exercises[exSetsEditIdx];
  ex.mode = exSetsMode;
  // CIRCUIT exercises never carry a sets count — see CRITICAL CIRCUIT RULE.
  ex.sets = curDay().circuit ? 0 : (parseInt(document.getElementById('exSetsInput').value) || 0);
  ex.restSec = parseInt(document.getElementById('exRestInput').value) || 0;
  if(exSetsMode === 'time'){
    ex.holdSec = parseInt(document.getElementById('exHoldInput').value) || 0;
  } else {
    ex.reps = document.getElementById('exRepsInput').value.trim();
  }
  closeExSetsModal();
  renderDayContent();
  save();
}
function renderWorkouts(){
  renderProgramSelect();
  renderProgramSubtitle();
  renderBlockTabs();
  renderDayTabs();
  renderDayContent();
}
let programManageOpen = false;
function toggleProgramManage(){
  programManageOpen = !programManageOpen;
  document.querySelectorAll('.pm-toggle-panel').forEach(function(panel){
    panel.style.display = programManageOpen ? '' : 'none';
  });
  document.getElementById('programManageToggle').textContent = programManageOpen ? t('btn_closeprogram') : t('btn_editprogram');
  renderDayContent();
}
function toggleWorkoutProgramCard(){
  const card = document.getElementById('workoutProgramCard');
  if(!card) return;
  const btn = card.querySelector('.program-collapse-toggle');
  const isOpen = card.classList.toggle('open');
  if(btn) btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}
function renderProgramSubtitle(){
  const el = document.getElementById('programSubtitle');
  if(!el) return;
  const p = curProgram();
  const b = curBlock();
  const d = curDay();
  const parts = [p?.name, b?.name, d?.label].filter(Boolean).map(escHtml);
  el.innerHTML = parts.length ? '<b>' + parts.join('</b><span class="pnav-sep">›</span><b>') + '</b>' : '';
}


function escHtml(s){ return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function escAttr(s){ return (s||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// ═══════════════════════════ TO-DO (KANBAN BOARD) ═══════════════════════════
function KB_COLS(){ return [
  {key:'todo', label:t('col_todo')},
  {key:'doing', label:t('col_doing')},
  {key:'done', label:t('col_done_col')}
]; }
let kbActiveCol = 'todo';
const kbDesktopMq = window.matchMedia('(min-width:760px)');
(function(){
  const onKbBreakpointChange = function(){ if(document.getElementById('kbBoard')) renderTodos(); };
  if(kbDesktopMq.addEventListener) kbDesktopMq.addEventListener('change', onKbBreakpointChange);
  else if(kbDesktopMq.addListener) kbDesktopMq.addListener(onKbBreakpointChange);
})();
function migrateTodos(){
  state.todos.forEach(t=>{
    if(t.id === undefined) t.id = Date.now() + Math.floor(Math.random()*100000);
    if(!t.status) t.status = t.done ? 'done' : 'todo';
  });
}
function kbSelectCol(key){
  kbActiveCol = key;
  renderTodos();
}
function renderTodos(){
  migrateTodos();
  const cols = KB_COLS();
  const total = state.todos.length;
  const counts = cols.map(c => state.todos.filter(t=>t.status===c.key).length);
  document.getElementById('todoCount').textContent = total ? `${total} task${total===1?'':'s'}` : '';

  const tabs = document.getElementById('kbTabs');
  tabs.innerHTML = cols.map((c,ci)=>`
    <button class="kb-tabbtn ${kbActiveCol===c.key?'active':''}" data-col="${c.key}" data-action="kbSelectCol" data-key="${escAttr(c.key)}">
      ${c.label}<span class="kb-tab-count">${counts[ci]}</span>
    </button>
  `).join('');

  const isKbDesktop = kbDesktopMq.matches;
  const board = document.getElementById('kbBoard');
  board.innerHTML = cols.map((c, ci) => {
    if(!isKbDesktop && kbActiveCol !== c.key) return '';
    const items = state.todos.filter(t => t.status === c.key);
    const cards = items.length ? items.map(t => `
      <div class="kb-card" draggable="true" data-id="${t.id}">
        <div class="drag-handle kb-drag-handle" data-drag-group="todo"></div>
        <div class="kb-card-body">
          <div class="kb-card-txt">${escHtml(t.text)}</div>
          <div class="kb-card-actions">
            ${ci>0 ? `<button class="kb-arrow" data-action="moveTodo" data-idx="${t.id}" data-dir="-1">◀</button>` : ''}
            ${ci<cols.length-1 ? `<button class="kb-arrow" data-action="moveTodo" data-idx="${t.id}" data-dir="1">▶</button>` : ''}
          </div>
        </div>
        <div class="kb-card-del" data-action="deleteTodoById" data-idx="${t.id}">✕</div>
      </div>
    `).join('') : `<div class="kb-empty">${t('kb_empty')}</div>`;
    return `
      <div class="kb-col kb-active" data-col="${c.key}">
        <div class="kb-col-head">
          <div class="kb-col-title">${c.label}</div>
          <div class="kb-count">${items.length}</div>
        </div>
        <div class="kb-col-cards">${cards}</div>
      </div>
    `;
  }).join('');
  renderDailyTodos();
}
function addTodo(){
  const input = document.getElementById('todoInput');
  const val = input.value.trim();
  if(!val) return;
  state.todos.push({ id: Date.now()+Math.floor(Math.random()*100000), text: val, status:'todo' });
  input.value = '';
  kbActiveCol = 'todo';
  renderTodos(); save();
}
function moveTodo(id, dir){
  const idx = state.todos.findIndex(t=>t.id===id);
  if(idx < 0) return;
  const keys = KB_COLS().map(c=>c.key);
  let ci = keys.indexOf(state.todos[idx].status || 'todo');
  ci = Math.min(keys.length-1, Math.max(0, ci+dir));
  state.todos[idx].status = keys[ci];
  kbActiveCol = keys[ci];
  renderTodos(); save();
}
function deleteTodoById(id){
  const idx = state.todos.findIndex(t=>t.id===id);
  if(idx < 0) return;
  state.todos.splice(idx,1);
  renderTodos(); save();
}

// ═══════════════════════════ DAILY TO-DO (auto-resets every day) ═══════════════════════════
// Each item's checked state is derived from comparing its `doneOn` date to today's date,
// rather than stored as a plain boolean — so there is no separate "reset" step to run at
// midnight or on app open: the moment the calendar day changes, every item is automatically
// unchecked again on the next render, while still remembering it was done on a past day.
function renderDailyTodos(){
  const wrap = document.getElementById('dailyTodoList');
  if(!wrap) return;
  if(!Array.isArray(state.dailyTodos)) state.dailyTodos = [];
  const items = state.dailyTodos;
  const today = dateKeyFromDate(new Date());
  const doneCount = items.filter(it => it.doneOn === today).length;
  const countEl = document.getElementById('dailyTodoCount');
  if(countEl) countEl.textContent = items.length ? `${ln(doneCount)} / ${ln(items.length)} ✓` : '';
  if(!items.length){
    wrap.innerHTML = `<div class="empty-msg">${t('dailytodo_empty')}</div>`;
    return;
  }
  wrap.innerHTML = items.map(it => {
    const done = it.doneOn === today;
    return `
    <div class="todo-item ${done?'done':''}" data-action="toggleDailyTodo" data-idx="${it.id}">
      <div class="todo-check">${done?'✓':''}</div>
      <div class="todo-txt">${escHtml(it.text)}</div>
      <div class="todo-del" data-action="deleteDailyTodoById" data-idx="${it.id}" data-stop="1">✕</div>
    </div>`;
  }).join('');
}
function addDailyTodo(){
  const input = document.getElementById('dailyTodoInput');
  const val = input.value.trim();
  if(!val) return;
  if(!Array.isArray(state.dailyTodos)) state.dailyTodos = [];
  state.dailyTodos.push({ id: Date.now()+Math.floor(Math.random()*100000), text: val, doneOn: null });
  input.value = '';
  renderDailyTodos(); save();
}
function toggleDailyTodo(id){
  if(!Array.isArray(state.dailyTodos)) return;
  const item = state.dailyTodos.find(it => it.id === id);
  if(!item) return;
  const today = dateKeyFromDate(new Date());
  item.doneOn = (item.doneOn === today) ? null : today;
  renderDailyTodos(); save();
}
function deleteDailyTodoById(id){
  if(!Array.isArray(state.dailyTodos)) return;
  const idx = state.dailyTodos.findIndex(it => it.id === id);
  if(idx < 0) return;
  state.dailyTodos.splice(idx,1);
  renderDailyTodos(); save();
}

// ═══════════════════════════ PROFILE ═══════════════════════════
async function renderProfile(){
  PS_FIELDS.forEach(f=>{ const el = document.getElementById(PS_ID[f]); if(el) el.value = state.physicalStats[f]||''; });

  const calcW = document.getElementById('calcWeight');
  const calcG = document.getElementById('calcGoal');
  const calcA = document.getElementById('calcAge');
  const calcGen = document.getElementById('calcGender');
  const calcH = document.getElementById('calcHeight');
  const calcAct = document.getElementById('calcActivity');
  if(calcW && document.activeElement !== calcW) calcW.value = state.tools.calcWeight || '';
  if(calcG) calcG.value = state.tools.calcGoal || 'maintain';
  if(calcA && document.activeElement !== calcA) calcA.value = state.tools.calcAge || '';
  if(calcGen) calcGen.value = state.tools.calcGender || 'male';
  if(calcH && document.activeElement !== calcH) calcH.value = state.tools.calcHeight || '';
  if(calcAct) calcAct.value = state.tools.calcActivity || 'moderate';
  const calcRateVal = document.getElementById('calcRateVal');
  const calcRateUnit = document.getElementById('calcRateUnit');
  if(calcRateVal && document.activeElement !== calcRateVal) calcRateVal.value = state.tools.calcRateVal || '0.5';
  if(calcRateUnit) calcRateUnit.value = state.tools.calcRateUnit || 'kg';
  document.getElementById('calcRateField').style.display = (state.tools.calcGoal && state.tools.calcGoal !== 'maintain') ? 'block' : 'none';
  calcRun();

  renderThemeSwatches();
  renderWaterSettingsUI();
  renderLockCard();
  renderProfileGoals();
  await renderProgressPhoto();
}
function updateFavicon(src){
  const link = document.getElementById('faviconLink');
  if(link && src) link.href = src;
}

// Minimum zoom for the photo editor. Kept at "cover" scale (100%) so a newly
// added photo is shown in full by default. Note: at exactly 100%, an image's
// aspect ratio vs. the frame's aspect ratio may mean one axis fits with zero
// slack, so dragging on that axis won't do anything until the user zooms in.
const PE_MIN_ZOOM = 1;
function clampZoom(v){ return Math.max(PE_MIN_ZOOM, Math.min(3, Math.round(v*100)/100)); }

// ── Generic pointer-drag reposition helper. Drag directly on an element to shift
// its object-position within its frame. setPos(x,y) fires live while dragging;
// onEnd() once after a drag; onClick() for a plain tap (no drag happened). ──
function setupDragReposition(el, opts){
  if(!el || el._dragRepositionSetup) return;
  el._dragRepositionSetup = true;
  let dragging = false, moved = false, startX = 0, startY = 0, startPosX = 50, startPosY = 50;
  el.addEventListener('pointerdown', (e) => {
    if(opts.isActive && !opts.isActive()) return;
    dragging = true; moved = false;
    startX = e.clientX; startY = e.clientY;
    const pos = opts.getPos();
    startPosX = pos.x; startPosY = pos.y;
    try{ el.setPointerCapture(e.pointerId); }catch(err){}
    el.classList.add(opts.draggingClass);
  });
  el.addEventListener('pointermove', (e) => {
    if(!dragging) return;
    const dx = e.clientX - startX, dy = e.clientY - startY;
    if(Math.abs(dx) > 3 || Math.abs(dy) > 3) moved = true;
    const rect = el.getBoundingClientRect();
    if(rect.width < 1 || rect.height < 1) return;
    let newX = startPosX - (dx / rect.width) * 100;
    let newY = startPosY - (dy / rect.height) * 100;
    newX = Math.max(0, Math.min(100, newX));
    newY = Math.max(0, Math.min(100, newY));
    opts.setPos(newX, newY);
  });
  function endDrag(e){
    if(!dragging) return;
    dragging = false;
    el.classList.remove(opts.draggingClass);
    if(moved) opts.onEnd && opts.onEnd();
  }
  el.addEventListener('pointerup', endDrag);
  el.addEventListener('pointercancel', endDrag);
  el.addEventListener('pointerleave', (e) => { if(dragging && e.buttons === 0) endDrag(e); });
  el.addEventListener('click', (e) => {
    if(moved) return; // swallow the click that follows a drag
    opts.onClick && opts.onClick();
  });
}

// ── Pan/zoom helper. object-position's "slack" is computed by the browser from
// the element's un-transformed box size, so a CSS transform:scale(zoom) never
// gives an axis new slack once that axis already fit exactly at zoom 1 — that
// axis stays stuck no matter how far you zoom in. Fix: keep the <img> sized to
// its frame (so object-fit/object-position keep working normally) but pan by
// adding our own translate(), whose max range is computed in JS from the
// image's natural size, the fit mode, and the current zoom — so both axes get
// real range as zoom increases. ──
function positionPannedImage(img, frame, natW, natH, posX, posY, zoom, flip, fitMode){
  if(!img || !frame) return;
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.objectFit = fitMode;
  img.style.objectPosition = '50% 50%';
  const rect = frame.getBoundingClientRect();
  let dx = 0, dy = 0;
  if(natW && natH && rect.width > 0 && rect.height > 0){
    const s0 = fitMode === 'contain'
      ? Math.min(rect.width / natW, rect.height / natH)
      : Math.max(rect.width / natW, rect.height / natH);
    const effW = natW * s0 * zoom;
    const effH = natH * s0 * zoom;
    const maxOffX = Math.max(0, (effW - rect.width) / 2);
    const maxOffY = Math.max(0, (effH - rect.height) / 2);
    dx = ((50 - posX) / 50) * maxOffX;
    dy = ((50 - posY) / 50) * maxOffY;
  }
  img.style.transform = `translate(${dx}px, ${dy}px) scaleX(${flip ? -1 : 1}) scale(${zoom})`;
}

// ═══════════════ Photo editor (before/after progress photos) ═══════════════
// A native "customize picture"-style cropper: the whole photo is shown at once
// inside #peCropStage, and a resizable/draggable box (#peBox) marks exactly
// what will be kept. Dragging the box repositions it; dragging a corner handle
// resizes it (locked to the target shape's aspect ratio). Internally the box
// is still translated into the app's existing (posX, posY, zoom, flip) fields
// on Save.
let peTarget = null;     // 'before' | 'after'
let peEditIndex = null;  // index into state.photos[cat] when editing an existing entry
let peOrigRef = null;    // photo ref that existed when the editor opened
let peDraft = { dataUrl: null, isNewFile: false, posX: 50, posY: 50, zoom: PE_MIN_ZOOM, flip: false, natW: null, natH: null };
// The crop box, always expressed as a fraction (0–1) of the *displayed*
// photo — i.e. exactly what's on screen, flip included — so all the drag/
// resize interaction code below never has to think about flip at all.
let peBox = { fLeft: 0, fTop: 0, fW: 1, fH: 1 };
// Set whenever the box needs to be (re)computed once the image's natural size
// is known (on open, and after picking a new file); cleared once it's done.
let peBoxPending = null;

// Fallback aspect ratio, only used if the real frame can't be measured (e.g.
// hidden behind another tab). Whenever possible we measure the *actual*
// on-screen frame instead.
const PE_SHAPE_FALLBACK = {
  portrait: { w: 300, h: 400 }
};
// The real on-screen size of the target frame for the photo currently being
// edited, measured fresh each time the editor opens (see peMeasureFrame).
let peFrame = { w: 200, h: 200 };

function peShapeFor(target){
  return 'portrait';
}
function peMeasureFrame(target){
  const el = document.getElementById('ptFrame');
  let frame = null;
  if(el){
    const r = el.getBoundingClientRect();
    if(r.width > 4 && r.height > 4) frame = { w: r.width, h: r.height };
  }
  if(!frame) frame = { ...PE_SHAPE_FALLBACK[peShapeFor(target)] };
  return frame;
}
// Clamp the box to stay fully inside the photo.
function peClampBox(natW, natH, flip, box){
  const fW = Math.min(1, Math.max(0, box.fW));
  const fH = Math.min(1, Math.max(0, box.fH));
  const fLeft = Math.max(0, Math.min(1 - fW, box.fLeft));
  const fTop = Math.max(0, Math.min(1 - fH, box.fTop));
  return { fLeft, fTop, fW, fH };
}
// Largest the crop box can ever be (zoom === PE_MIN_ZOOM), as a fraction of the photo.
function peMaxBoxFrac(natW, natH){
  const s0 = Math.max(peFrame.w / natW, peFrame.h / natH);
  return { fW: (peFrame.w / s0) / natW, fH: (peFrame.h / s0) / natH };
}
// Smallest the crop box can ever be (zoom === PE_MAX_ZOOM).
function peMinBoxFrac(natW, natH){
  const max = peMaxBoxFrac(natW, natH);
  return { fW: max.fW / PE_MAX_ZOOM, fH: max.fH / PE_MAX_ZOOM };
}
function peDefaultBox(natW, natH){
  const max = peMaxBoxFrac(natW, natH);
  return peClampBox(natW, natH, false, { fLeft: (1 - max.fW) / 2, fTop: (1 - max.fH) / 2, fW: max.fW, fH: max.fH });
}
// Convert previously-saved (posX, posY, zoom) into an initial crop box, so
// reopening the editor on an existing photo shows the same crop.
function peBoxFromSaved(natW, natH, posX, posY, zoom, flip){
  const s0 = Math.max(peFrame.w / natW, peFrame.h / natH);
  const winW0 = peFrame.w / s0, winH0 = peFrame.h / s0;
  const selW = winW0 / zoom, selH = winH0 / zoom;
  const slackX = natW - selW, slackY = natH - selH;
  const cx = natW / 2 + (slackX > 0 ? (posX - 50) / 100 * slackX : 0);
  const cy = natH / 2 + (slackY > 0 ? (posY - 50) / 100 * slackY : 0);
  const natLeft = cx - selW / 2, natTop = cy - selH / 2;
  const fW = selW / natW, fH = selH / natH;
  const fLeft = flip ? (1 - natLeft / natW - fW) : natLeft / natW;
  const fTop = natTop / natH;
  return peClampBox(natW, natH, flip, { fLeft, fTop, fW, fH });
}
// Convert the current crop box back into (posX, posY, zoom) for saving.
function peBoxToSaved(natW, natH, box, flip){
  const selW = box.fW * natW, selH = box.fH * natH;
  const natLeftDisp = box.fLeft * natW;
  const natLeft = flip ? (natW - natLeftDisp - selW) : natLeftDisp;
  const natTop = box.fTop * natH;
  const cx = natLeft + selW / 2, cy = natTop + selH / 2;
  const s0 = Math.max(peFrame.w / natW, peFrame.h / natH);
  const winW0 = peFrame.w / s0, winH0 = peFrame.h / s0;
  const zoom = clampZoom(winW0 / selW);
  const slackX = natW - selW, slackY = natH - selH;
  const posX = slackX > 0 ? 50 + ((cx - natW / 2) / slackX) * 100 : 50;
  const posY = slackY > 0 ? 50 + ((cy - natH / 2) / slackY) * 100 : 50;
  return { posX: Math.max(0, Math.min(100, posX)), posY: Math.max(0, Math.min(100, posY)), zoom };
}
function peCurrentZoom(){
  const s0 = Math.max(peFrame.w / peDraft.natW, peFrame.h / peDraft.natH);
  return (peFrame.w / s0) / (peBox.fW * peDraft.natW);
}
function peSetZoom(newZoom){
  if(!peDraft.dataUrl || !peDraft.natW) return;
  newZoom = clampZoom(newZoom);
  const s0 = Math.max(peFrame.w / peDraft.natW, peFrame.h / peDraft.natH);
  const newFW = (peFrame.w / s0) / (newZoom * peDraft.natW);
  const newFH = (peFrame.h / s0) / (newZoom * peDraft.natH);
  const cx = peBox.fLeft + peBox.fW / 2, cy = peBox.fTop + peBox.fH / 2;
  peBox = peClampBox(peDraft.natW, peDraft.natH, peDraft.flip, { fLeft: cx - newFW / 2, fTop: cy - newFH / 2, fW: newFW, fH: newFH });
  peRenderBox();
}

async function openPhotoEditor(target, index){
  peTarget = target;
  peEditIndex = (index === undefined ? null : index);
  peFrame = peMeasureFrame(target);
  let posX = 50, posY = 50, zoom = 1, flip = false;
  const item = (peEditIndex != null) ? state.photos[target][peEditIndex] : null;
  peOrigRef = item ? item.ref : null;
  posX = item ? (item.posX ?? 50) : 50; posY = item ? (item.posY ?? 50) : 50;
  zoom = item ? (item.zoom ?? 1) : 1; flip = item ? !!item.flip : false;
  zoom = clampZoom(zoom);
  peDraft = { dataUrl: peOrigRef ? await fetchPhoto(peOrigRef) : null, isNewFile: false, posX, posY, zoom, flip, natW: null, natH: null };
  peBoxPending = peDraft.dataUrl ? { fromSaved: true } : null;
  document.getElementById('peCropStage').className = 'pe-cropstage pe-shape-' + peShapeFor(target);
  document.getElementById('peTitle').textContent = t('pe_title_progress');
  document.getElementById('peFileInput').value = '';
  peRenderPreview();
  document.getElementById('photoEditorModal').classList.add('open');
}
function closePhotoEditor(){
  document.getElementById('photoEditorModal').classList.remove('open');
}
function peRenderPreview(){
  const img = document.getElementById('peImg');
  const empty = document.getElementById('peEmpty');
  const stage = document.getElementById('peCropStage');
  const boxEl = document.getElementById('peBox');
  const zoomRow = document.getElementById('peZoomRow');
  const flipBtn = document.getElementById('peFlipBtn');
  if(peDraft.dataUrl){
    if(img.src !== peDraft.dataUrl) img.src = peDraft.dataUrl;
    img.style.display = 'block';
    img.style.transform = peDraft.flip ? 'scaleX(-1)' : 'none';
    const finalize = () => {
      peDraft.natW = img.naturalWidth; peDraft.natH = img.naturalHeight;
      if(peBoxPending){
        peBox = peBoxPending.fromSaved
          ? peBoxFromSaved(peDraft.natW, peDraft.natH, peDraft.posX, peDraft.posY, peDraft.zoom, peDraft.flip)
          : peDefaultBox(peDraft.natW, peDraft.natH);
        peBoxPending = null;
      }
      peRenderBox();
    };
    if(img.complete && img.naturalWidth){ finalize(); }
    img.onload = finalize;
    empty.style.display = 'none';
    zoomRow.style.display = 'flex';
    flipBtn.style.display = 'inline-flex';
    boxEl.style.display = 'block';
    stage.classList.add('has-photo');
  } else {
    img.style.display = 'none';
    empty.style.display = 'flex';
    zoomRow.style.display = 'none';
    flipBtn.style.display = 'none';
    boxEl.style.display = 'none';
    stage.classList.remove('has-photo');
  }
  document.getElementById('peFlipBtn').classList.toggle('active', peDraft.flip);
  document.getElementById('peRemoveBtn').style.display = (peOrigRef || peDraft.dataUrl) ? 'inline-flex' : 'none';
}
// Positions/sizes the on-screen crop box to match peBox, and updates the zoom %.
function peRenderBox(){
  const stage = document.getElementById('peCropStage');
  const img = document.getElementById('peImg');
  const boxEl = document.getElementById('peBox');
  if(!stage || !img || !boxEl || !peDraft.dataUrl || !peDraft.natW) return;
  const stageRect = stage.getBoundingClientRect();
  const imgRect = img.getBoundingClientRect();
  if(imgRect.width < 1 || imgRect.height < 1) return;
  const left = (imgRect.left - stageRect.left) + peBox.fLeft * imgRect.width;
  const top = (imgRect.top - stageRect.top) + peBox.fTop * imgRect.height;
  boxEl.style.left = left + 'px';
  boxEl.style.top = top + 'px';
  boxEl.style.width = (peBox.fW * imgRect.width) + 'px';
  boxEl.style.height = (peBox.fH * imgRect.height) + 'px';
  document.getElementById('peZoomPct').textContent = Math.round(peCurrentZoom() * 100) + '%';
}
function peChooseFile(){ document.getElementById('peFileInput').click(); }
function peFileSelected(input){
  const file = input.files[0];
  if(!file) return;
  if(!/^image\/(?:png|jpeg|webp|gif)$/i.test(file.type)){
    alert(t('err_invalid_photo_type'));
    input.value = '';
    return;
  }
  if(fileTooLarge(file, MAX_PHOTO_FILE_BYTES)){
    alert(t('err_file_toolarge_photo'));
    input.value = '';
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    peDraft.dataUrl = e.target.result;
    peDraft.isNewFile = true;
    peDraft.posX = 50; peDraft.posY = 50; peDraft.zoom = PE_MIN_ZOOM; peDraft.flip = false;
    peDraft.natW = null; peDraft.natH = null;
    peBoxPending = { fromSaved: false };
    peRenderPreview();
  };
  reader.readAsDataURL(file);
}
function peStepZoom(delta){ peSetZoom(peCurrentZoom() + delta); }
function peResetZoom(){ peSetZoom(PE_MIN_ZOOM); }
function peFlip(){ peDraft.flip = !peDraft.flip; peRenderPreview(); }
async function peSave(){
  if(!peDraft.dataUrl){ closePhotoEditor(); return; }
  try{
    let ref = peOrigRef;
    if(peDraft.isNewFile){ ref = await storePhoto(peDraft.dataUrl); }
    const cleanupRef = (peDraft.isNewFile && peOrigRef) ? peOrigRef : null;
    const { posX, posY, zoom } = peBoxToSaved(peDraft.natW, peDraft.natH, peBox, peDraft.flip);
    if(peEditIndex != null){
      const item = state.photos[peTarget][peEditIndex];
      item.ref = ref; item.posX = posX; item.posY = posY; item.zoom = zoom; item.flip = peDraft.flip;
    } else {
      state.photos[peTarget].push({ ref, date: todayISO(), posX, posY, zoom, flip: peDraft.flip });
    }
    await renderProgressPhoto();
    save();
    if(cleanupRef) await deletePhotoRef(cleanupRef);
    closePhotoEditor();
  }catch(err){ dbg('Could not save photo', err); alert(t('err_savephoto')); }
}
async function peRemove(){
  if(!confirm(t('confirm_deletephoto'))) return;
  const oldRef = peOrigRef;
  if(peEditIndex != null){
    state.photos[peTarget].splice(peEditIndex, 1);
    await renderProgressPhoto();
  }
  save();
  if(oldRef) await deletePhotoRef(oldRef);
  // Stay in the popup instead of closing it, reset to the blank "add a photo"
  // state so the user can immediately pick a new one without reopening.
  peOrigRef = null;
  peEditIndex = null;
  peDraft = { dataUrl: null, isNewFile: false, posX: 50, posY: 50, zoom: PE_MIN_ZOOM, flip: false, natW: null, natH: null };
  peBoxPending = null;
  peRenderPreview();
}
// ── Crop box interactions: drag the box body to move it, drag a corner
// handle to resize it (aspect-locked), wheel over the stage to zoom. ──
function initCropBoxInteractions(){
  const boxEl = document.getElementById('peBox');
  const stage = document.getElementById('peCropStage');
  if(!boxEl || !stage) return;
  let moveState = null;
  boxEl.addEventListener('pointerdown', (e) => {
    if(e.target.closest('.pe-box-handle') || !peDraft.dataUrl) return;
    const imgRect = document.getElementById('peImg').getBoundingClientRect();
    if(imgRect.width < 1 || imgRect.height < 1) return;
    moveState = { startX: e.clientX, startY: e.clientY, startLeft: peBox.fLeft, startTop: peBox.fTop, imgW: imgRect.width, imgH: imgRect.height };
    try{ boxEl.setPointerCapture(e.pointerId); }catch(err){}
    boxEl.classList.add('dragging');
  });
  boxEl.addEventListener('pointermove', (e) => {
    if(!moveState) return;
    const dx = (e.clientX - moveState.startX) / moveState.imgW;
    const dy = (e.clientY - moveState.startY) / moveState.imgH;
    peBox = peClampBox(peDraft.natW, peDraft.natH, peDraft.flip, { fLeft: moveState.startLeft + dx, fTop: moveState.startTop + dy, fW: peBox.fW, fH: peBox.fH });
    peRenderBox();
  });
  const endMove = () => { if(moveState){ moveState = null; boxEl.classList.remove('dragging'); } };
  boxEl.addEventListener('pointerup', endMove);
  boxEl.addEventListener('pointercancel', endMove);
  boxEl.querySelectorAll('.pe-box-handle').forEach((handle) => {
    let resizeState = null;
    handle.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      if(!peDraft.dataUrl) return;
      const imgRect = document.getElementById('peImg').getBoundingClientRect();
      if(imgRect.width < 1 || imgRect.height < 1) return;
      resizeState = { corner: handle.dataset.handle, startX: e.clientX, box: { ...peBox }, imgW: imgRect.width };
      try{ handle.setPointerCapture(e.pointerId); }catch(err){}
    });
    handle.addEventListener('pointermove', (e) => {
      if(!resizeState || !peDraft.natW) return;
      const dxF = (e.clientX - resizeState.startX) / resizeState.imgW;
      // The two handles on the LEFT side act as an anchor on the right edge
      // (and vice versa); same idea vertically. Dragging outward grows the box.
      const anchorRight = resizeState.corner === 'nw' || resizeState.corner === 'sw';
      const anchorBottom = resizeState.corner === 'nw' || resizeState.corner === 'ne';
      const b0 = resizeState.box;
      const anchorFLeft = anchorRight ? (b0.fLeft + b0.fW) : b0.fLeft;
      const anchorFTop = anchorBottom ? (b0.fTop + b0.fH) : b0.fTop;
      const sign = anchorRight ? -1 : 1;
      const { fW: minFW } = peMinBoxFrac(peDraft.natW, peDraft.natH);
      const { fW: maxFW } = peMaxBoxFrac(peDraft.natW, peDraft.natH);
      let newFW = Math.max(minFW, Math.min(maxFW, b0.fW + sign * dxF));
      const newFH = newFW * (peDraft.natW / peDraft.natH) * (peFrame.h / peFrame.w);
      const newFLeft = anchorRight ? anchorFLeft - newFW : anchorFLeft;
      const newFTop = anchorBottom ? anchorFTop - newFH : anchorFTop;
      peBox = peClampBox(peDraft.natW, peDraft.natH, peDraft.flip, { fLeft: newFLeft, fTop: newFTop, fW: newFW, fH: newFH });
      peRenderBox();
    });
    const endResize = () => { resizeState = null; };
    handle.addEventListener('pointerup', endResize);
    handle.addEventListener('pointercancel', endResize);
  });
  stage.addEventListener('wheel', (e) => {
    if(!peDraft.dataUrl) return;
    e.preventDefault();
    peStepZoom(e.deltaY < 0 ? 0.08 : -0.08);
  }, { passive: false });
  window.addEventListener('resize', () => peRenderBox());
}
document.addEventListener('DOMContentLoaded', initCropBoxInteractions);

// ── Calorie & protein calculator ──
const CALC_PROTEIN = {
  maintain: { low:1.2, high:1.6 },
  lose:     { low:1.6, high:2.2 },
  build:    { low:1.6, high:2.2 }
};
const CALC_ACTIVITY = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryactive: 1.9
};
const KCAL_PER_KG_FAT = 7700; // standard approximation used across fitness/nutrition apps
function calcOnGoalChange(){
  const goal = document.getElementById('calcGoal').value;
  document.getElementById('calcRateField').style.display = (goal !== 'maintain') ? 'block' : 'none';
  calcRun();
}
function calcRun(){
  const wEl = document.getElementById('calcWeight');
  const gEl = document.getElementById('calcGoal');
  const aEl = document.getElementById('calcAge');
  const genEl = document.getElementById('calcGender');
  const hEl = document.getElementById('calcHeight');
  const actEl = document.getElementById('calcActivity');
  const rateValEl = document.getElementById('calcRateVal');
  const rateUnitEl = document.getElementById('calcRateUnit');
  const bmrEl = document.getElementById('calcBmrVal');
  const maintEl = document.getElementById('calcMaintVal');
  const proteinEl = document.getElementById('calcProteinVal');
  const calEl = document.getElementById('calcCalVal');
  if(!wEl || !proteinEl) return;

  const weight = parseFloat(wEl.value);
  const age = parseFloat(aEl.value);
  const height = parseFloat(hEl.value);
  const gender = genEl.value || 'male';
  const activity = actEl.value || 'moderate';
  const goal = gEl.value || 'maintain';
  const rateVal = parseFloat(rateValEl.value) || 0;
  const rateUnit = rateUnitEl.value || 'kg';

  state.tools.calcWeight = wEl.value;
  state.tools.calcGoal = goal;
  state.tools.calcAge = aEl.value;
  state.tools.calcGender = gender;
  state.tools.calcHeight = hEl.value;
  state.tools.calcActivity = activity;
  state.tools.calcRateVal = rateValEl.value;
  state.tools.calcRateUnit = rateUnit;
  debouncedSave();

  // Protein only needs weight + goal
  if(weight && weight > 0){
    const pr = CALC_PROTEIN[goal] || CALC_PROTEIN.maintain;
    proteinEl.textContent = `${ln(Math.round(weight*pr.low))}–${ln(Math.round(weight*pr.high))} ${t('unit_g')}`;
  } else {
    proteinEl.textContent = '–';
  }

  // BMR/calories need weight + age + height too (Mifflin-St Jeor equation)
  if(weight > 0 && age > 0 && height > 0){
    const bmr = gender === 'female'
      ? (10*weight + 6.25*height - 5*age - 161)
      : (10*weight + 6.25*height - 5*age + 5);
    const maintenance = bmr * (CALC_ACTIVITY[activity] || 1.55);
    const rateKgPerWeek = rateUnit === 'g' ? rateVal/1000 : rateVal;
    let dailyAdjust = 0;
    if(goal === 'lose') dailyAdjust = -(rateKgPerWeek * KCAL_PER_KG_FAT) / 7;
    else if(goal === 'build') dailyAdjust = (rateKgPerWeek * KCAL_PER_KG_FAT) / 7;
    const target = maintenance + dailyAdjust;
    bmrEl.textContent = `${ln(Math.round(bmr).toLocaleString())} ${t('unit_kcal')}`;
    maintEl.textContent = `${ln(Math.round(maintenance/50)*50)} ${t('unit_kcal')}`;
    calEl.textContent = `${ln(Math.round(target/50)*50)} ${t('unit_kcal')}`;
  } else {
    bmrEl.textContent = '–';
    maintEl.textContent = '–';
    calEl.textContent = '–';
  }
}

// ── Profile goals ──
function renderProfileGoals(){
  const wrap = document.getElementById('profileGoalsList');
  const done = state.profileGoals.filter(g=>g.done).length;
  document.getElementById('pgoalCount').textContent = state.profileGoals.length ? `${ln(done)} / ${ln(state.profileGoals.length)} ✓` : '';
  if(!state.profileGoals.length){
    wrap.innerHTML = `<div class="empty-msg">${t('goals_empty')}</div>`;
    return;
  }
  wrap.innerHTML = state.profileGoals.map((g,i)=>`
    <div class="todo-item ${g.done?'done':''}" data-action="toggleProfileGoal" data-idx="${i}">
      <div class="todo-check">${g.done?'✓':''}</div>
      <div class="todo-txt">${escHtml(g.text)}</div>
      <div class="todo-del" data-action="deleteProfileGoal" data-idx="${i}" data-stop="1">✕</div>
    </div>
  `).join('');
}
function addProfileGoal(){
  const input = document.getElementById('profileGoalInput');
  const val = input.value.trim();
  if(!val) return;
  state.profileGoals.push({ text: val, done:false });
  input.value = '';
  renderProfileGoals(); save();
}
function toggleProfileGoal(i){ state.profileGoals[i].done = !state.profileGoals[i].done; renderProfileGoals(); save(); }
function deleteProfileGoal(i){ state.profileGoals.splice(i,1); renderProfileGoals(); save(); }

// ── Agenda Notes (popup add/delete) ──
function genNoteId(){ return 'n' + Date.now().toString(36) + Math.random().toString(36).slice(2,8); }
function fmtNoteDate(ts){
  const d = new Date(ts);
  return ln(`${pad2(d.getDate())}-${pad2(d.getMonth()+1)}-${d.getFullYear()} ${pad2(d.getHours())}:${pad2(d.getMinutes())}`);
}
function renderNotesPreview(){
  const txtEl = document.getElementById('notesPreviewTxt');
  const pillEl = document.getElementById('notesCountPill');
  if(!txtEl || !pillEl) return;
  const list = state.notesList || [];
  if(!list.length){
    txtEl.textContent = t('notes_ph');
    txtEl.classList.add('empty');
    pillEl.style.display = 'none';
  } else {
    txtEl.textContent = list[list.length-1].text;
    txtEl.classList.remove('empty');
    pillEl.textContent = ln(list.length);
    pillEl.style.display = 'inline-block';
  }
}
function renderNotesList(){
  const wrap = document.getElementById('notesList');
  if(!wrap) return;
  const list = state.notesList || [];
  if(!list.length){
    wrap.innerHTML = `<div class="empty-msg">${t('notes_empty')}</div>`;
    return;
  }
  wrap.innerHTML = list.slice().reverse().map((n)=>{
    const realIdx = list.indexOf(n);
    return `
    <div class="note-item">
      <div class="note-item-meta">${fmtNoteDate(n.date)}</div>
      <div class="note-item-txt">${escHtml(n.text)}</div>
      <div class="note-item-del" data-action="deleteNote" data-id="${escAttr(n.id)}">✕</div>
    </div>`;
  }).join('');
}
function openNotesModal(){
  renderNotesList();
  const input = document.getElementById('newNoteInput');
  if(input) input.value = '';
  document.getElementById('notesModal').classList.add('open');
}
function closeNotesModal(){
  document.getElementById('notesModal').classList.remove('open');
  renderNotesPreview();
}
function addNote(){
  const input = document.getElementById('newNoteInput');
  const val = (input.value || '').trim();
  if(!val) return;
  if(!Array.isArray(state.notesList)) state.notesList = [];
  state.notesList.push({ id: genNoteId(), text: val, date: Date.now() });
  input.value = '';
  renderNotesList();
  renderNotesPreview();
  save();
}
function deleteNote(id){
  if(!confirm(t('confirm_deletenote'))) return;
  state.notesList = (state.notesList || []).filter(n => n.id !== id);
  renderNotesList();
  renderNotesPreview();
  save();
}

const BOTTLE_SVG = '<svg viewBox="0 0 24 40" width="18" height="30" fill="currentColor"><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M7 8 L7 11 Q4 14 4 19 L4 35 Q4 37 6 37 L18 37 Q20 37 20 35 L20 19 Q20 14 17 11 L17 8 Z"/></svg>';

// ── Photos (before/after) ──
function fmtPhotoDate(iso){
  if(!iso) return t('lbl_nodate');
  const [y,m,d] = iso.split('-').map(Number);
  return ln(`${pad2(d)}-${pad2(m)}-${y}`);
}

// ── Before/After Progress toggle (single photo per side, flip back and forth) ──
let progressPhotoView = 'before';
function primaryPhotoIndex(cat){
  return (state.photos[cat] && state.photos[cat].length) ? 0 : null;
}
function openProgressPhotoEditor(){
  const idx = primaryPhotoIndex(progressPhotoView);
  openPhotoEditor(progressPhotoView, idx === null ? undefined : idx);
}
function toggleProgressPhotoView(e){
  if(e) e.stopPropagation();
  progressPhotoView = (progressPhotoView === 'before') ? 'after' : 'before';
  renderProgressPhoto();
}
async function renderProgressPhoto(){
  const frame = document.getElementById('ptFrame');
  if(!frame) return;
  const img = document.getElementById('ptImg');
  const empty = document.getElementById('ptEmpty');
  const badge = document.getElementById('ptBadge');
  const flipLbl = document.getElementById('ptFlipLbl');
  const cat = progressPhotoView;
  const otherCat = cat === 'before' ? 'after' : 'before';
  badge.textContent = t(cat === 'before' ? 'pt_before' : 'pt_after');
  flipLbl.textContent = t('btn_switchphoto');
  const item = (state.photos[cat] && state.photos[cat][0]) || null;
  let src = null;
  if(item){ try{ src = await fetchPhoto(item.ref); }catch(e){ src = null; } }
  if(item && src){
    const px = item.posX != null ? item.posX : 50;
    const py = item.posY != null ? item.posY : 50;
    const z = item.zoom != null ? item.zoom : 1;
    const fl = !!item.flip;
    img.src = src;
    // Use the same JS-computed pan as the profile avatar (rather than plain
    // object-position%) so both axes stay draggable at any zoom level.
    const apply = () => positionPannedImage(img, frame, img.naturalWidth, img.naturalHeight, px, py, z, fl, 'cover');
    if(img.complete && img.naturalWidth) apply();
    img.onload = apply;
    img.style.display = 'block';
    empty.style.display = 'none';
    frame.classList.add('has-photo');
  } else {
    img.style.display = 'none';
    empty.style.display = 'flex';
    frame.classList.remove('has-photo');
  }
}

async function renderPhotoScroll(cat){
  const wrap = document.getElementById(cat+'Scroll');
  if(!wrap) return; // old multi-photo gallery UI was replaced by the Before/After toggle card
  const items = state.photos[cat];
  let srcs = [];
  try{ srcs = await Promise.all(items.map(item => fetchPhoto(item && item.ref))); }catch(e){ srcs = items.map(()=>null); }
  let html = items.map((item,i)=>{
    const src = srcs[i];
    if(!src) return '';
    const px = item && item.posX != null ? item.posX : 50;
    const py = item && item.posY != null ? item.posY : 50;
    const z = item && item.zoom != null ? item.zoom : 1;
    const fl = item && item.flip ? -1 : 1;
    return `
      <div class="photo-slot">
        <img src="${src}" style="object-position:${px}% ${py}%;transform:scaleX(${fl}) scale(${z});">
        <div class="photo-date-lbl" data-action="openPhotoDateModal" data-key="${escAttr(cat)}" data-idx="${i}">${fmtPhotoDate(item && item.date)}</div>
        <div class="ph-actions">
          <button class="ph-btn" data-action="openPhotoEditor" data-key="${escAttr(cat)}" data-idx="${i}">✏️</button>
          <button class="ph-btn" data-action="openLightbox" data-key="${escAttr(cat)}" data-idx="${i}">🔍</button>
          <button class="ph-btn" data-action="deletePhoto" data-key="${escAttr(cat)}" data-idx="${i}">✕</button>
        </div>
      </div>
    `;
  }).join('');
  html += `<div class="photo-slot" data-action="addPhotoSlot" data-key="${escAttr(cat)}" style="border-style:dashed;"><span style="font-size:24px;color:var(--muted2);">＋</span></div>`;
  wrap.innerHTML = html;
}
function addPhotoSlot(cat){
  openPhotoEditor(cat);
}
async function deletePhoto(cat, i){
  if(!confirm(t('confirm_deletephoto'))) return;
  const item = state.photos[cat][i];
  state.photos[cat].splice(i,1);
  await renderPhotoScroll(cat);
  save();
  if(item) await deletePhotoRef(item.ref);
}
let photoDateEditCat = null, photoDateEditIdx = null;
function openPhotoDateModal(cat, i){
  photoDateEditCat = cat; photoDateEditIdx = i;
  const item = state.photos[cat][i];
  document.getElementById('photoDateInput').value = (item && item.date) ? item.date : '';
  document.getElementById('photoDateModal').classList.add('open');
}
function closePhotoDateModal(){ document.getElementById('photoDateModal').classList.remove('open'); }
function savePhotoDateModal(){
  const val = document.getElementById('photoDateInput').value;
  const item = state.photos[photoDateEditCat][photoDateEditIdx];
  if(item) item.date = val;
  closePhotoDateModal();
  renderPhotoScroll(photoDateEditCat);
  renderProgressPhoto();
  save();
}

// ── Lightbox ──
let lbCat = 'before', lbIdx = 0, lbScale = 1, lbX = 0, lbY = 0, lbDragging = false, lbDragStartX = 0, lbDragStartY = 0, lbPinchDist = 0;
let lbFlip = false;
async function openLightbox(cat, i){
  lbCat = cat; lbIdx = i; lbScale = 1; lbX = 0; lbY = 0;
  const item = state.photos[cat][i];
  lbFlip = !!(item && item.flip);
  const src = await fetchPhoto(item && item.ref);
  document.getElementById('lbImg').src = src || '';
  applyLbTransform();
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox(){ document.getElementById('lightbox').classList.remove('open'); }
async function lbNavigate(dir){
  const list = state.photos[lbCat];
  const newIdx = lbIdx + dir;
  if(newIdx < 0 || newIdx >= list.length) return;
  lbIdx = newIdx; lbScale = 1; lbX = 0; lbY = 0;
  const item = list[lbIdx];
  lbFlip = !!(item && item.flip);
  const src = await fetchPhoto(item && item.ref);
  document.getElementById('lbImg').src = src || '';
  applyLbTransform();
}
function lbZoom(delta){ lbScale = Math.min(5, Math.max(0.5, lbScale+delta)); applyLbTransform(); }
function lbResetZoom(){ lbScale=1; lbX=0; lbY=0; applyLbTransform(); }
function applyLbTransform(){
  const img = document.getElementById('lbImg');
  img.style.transform = `translate(${lbX}px, ${lbY}px) scaleX(${lbFlip?-1:1}) scale(${lbScale})`;
  document.getElementById('lbZoomPct').textContent = ln(Math.round(lbScale*100))+'%';
}
document.addEventListener('DOMContentLoaded', ()=>{
  const lbWrap = document.getElementById('lbImgWrap');
  if(!lbWrap) return;
  lbWrap.addEventListener('mousedown', e=>{
    if(lbScale<=1) return;
    lbDragging = true; lbDragStartX = e.clientX-lbX; lbDragStartY = e.clientY-lbY;
    lbWrap.classList.add('grabbing');
  });
  document.addEventListener('mousemove', e=>{
    if(!lbDragging) return;
    lbX = e.clientX-lbDragStartX; lbY = e.clientY-lbDragStartY;
    applyLbTransform();
  });
  document.addEventListener('mouseup', ()=>{ lbDragging=false; lbWrap.classList.remove('grabbing'); });
  lbWrap.addEventListener('wheel', e=>{ e.preventDefault(); lbZoom(e.deltaY<0?0.15:-0.15); }, {passive:false});
  lbWrap.addEventListener('touchstart', e=>{
    if(e.touches.length===2){ lbPinchDist = Math.hypot(e.touches[0].clientX-e.touches[1].clientX, e.touches[0].clientY-e.touches[1].clientY); }
    else if(e.touches.length===1 && lbScale>1){ lbDragging=true; lbDragStartX = e.touches[0].clientX-lbX; lbDragStartY = e.touches[0].clientY-lbY; }
  }, {passive:true});
  lbWrap.addEventListener('touchmove', e=>{
    if(e.touches.length===2){
      const dist = Math.hypot(e.touches[0].clientX-e.touches[1].clientX, e.touches[0].clientY-e.touches[1].clientY);
      const delta = (dist-lbPinchDist)*0.01; lbPinchDist = dist;
      lbScale = Math.min(5, Math.max(0.5, lbScale+delta));
      applyLbTransform();
    } else if(e.touches.length===1 && lbDragging){
      lbX = e.touches[0].clientX-lbDragStartX; lbY = e.touches[0].clientY-lbDragStartY;
      applyLbTransform();
    }
  }, {passive:true});
  lbWrap.addEventListener('touchend', ()=>{ lbDragging=false; });
  document.addEventListener('keydown', e=>{
    if(!document.getElementById('lightbox').classList.contains('open')) return;
    if(e.key==='Escape') closeLightbox();
    if(e.key==='ArrowLeft') lbNavigate(-1);
    if(e.key==='ArrowRight') lbNavigate(1);
    if(e.key==='+'||e.key==='=') lbZoom(0.05);
    if(e.key==='-') lbZoom(-0.05);
  });
});

// ═══════════════════════════ AUDIO ═══════════════════════════
let audioCtx = null;
function getSoundSettings(){
  if(!state.soundSettings) state.soundSettings = { volume: 1, type: 'beep' };
  return state.soundSettings;
}
function beep(freq, dur){
  try{
    if(!audioCtx) audioCtx = new (window.AudioContext||window.webkitAudioContext)();
    const peak = 0.8; // fixed full level — use your phone's volume buttons to adjust loudness
    const now = audioCtx.currentTime;

    function playTone(f, waveform, gainScale, delaySec){
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = waveform; osc.frequency.value = f;
      osc.connect(gain); gain.connect(audioCtx.destination);
      const startT = now + (delaySec||0);
      const peakGain = Math.max(0.001, peak*gainScale);
      gain.gain.setValueAtTime(0.001, startT);
      gain.gain.exponentialRampToValueAtTime(peakGain, startT+0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, startT + dur/1000);
      osc.start(startT);
      osc.stop(startT + dur/1000 + 0.05);
    }

    playTone(freq, 'sine', 1, 0);
    return true;
  }catch(e){ return false; }
}
// Shared "3-2-1" countdown peep used by every timed phase across all timers
// (Countdown Timer, Circuit Timer, and the Voice Coach / Lifting timer).
// Always routes through beep(), so it automatically respects the volume
// and sound type chosen in Settings → Timer Sound.
function countdownPeep(remaining){
  if(remaining>=1 && remaining<=5){
    beep(remaining===1 ? 880 : 660, 120);
  }
}
// ═══════════════════════════ COUNTDOWN TIMER ═══════════════════════════
let cdRemaining = 60, cdInterval = null, cdRunning = false;
function cdFmt(s){ const m=Math.floor(s/60), r=s%60; return ln(String(m).padStart(2,'0')+':'+String(r).padStart(2,'0')); }
function cdSyncFromInputs(){
  const m = parseInt(document.getElementById('cdMin').value)||0;
  const s = parseInt(document.getElementById('cdSec').value)||0;
  cdRemaining = m*60+s;
  document.getElementById('cdDisplay').textContent = cdFmt(cdRemaining);
}
function cdStart(){
  if(cdRunning) return;
  if(cdRemaining<=0) cdSyncFromInputs();
  if(cdRemaining<=0) return;
  cdRunning = true;
  document.getElementById('cdStatus').textContent = t('st_running');
  cdInterval = setInterval(()=>{
    cdRemaining--;
    document.getElementById('cdDisplay').textContent = cdFmt(cdRemaining);
    if(cdRemaining<=0){
      clearInterval(cdInterval); cdRunning=false;
      document.getElementById('cdStatus').textContent = t('st_donebang');
      beep(880,300); setTimeout(()=>beep(880,300),350); setTimeout(()=>beep(880,450),700);
    } else {
      countdownPeep(cdRemaining);
    }
  },1000);
}
function cdPause(){
  clearInterval(cdInterval); cdRunning=false;
  document.getElementById('cdStatus').textContent = t('st_paused');
}
function cdReset(){
  clearInterval(cdInterval); cdRunning=false;
  cdSyncFromInputs();
  document.getElementById('cdStatus').textContent = t('st_ready');
}
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('cdMin').addEventListener('input', cdSyncFromInputs);
  document.getElementById('cdSec').addEventListener('input', cdSyncFromInputs);
});

// ═══════════════════════════ CIRCUIT TIMER ═══════════════════════════
let ctState = { phase:'idle', round:0, totalRounds:8, workSec:30, restSec:10, prepSec:5, remaining:0, running:false };
let ctInterval = null;

function ctReadSettings(){
  ctState.totalRounds = Math.max(1, parseInt(document.getElementById('ctRounds').value)||8);
  ctState.workSec = Math.max(1, parseInt(document.getElementById('ctWork').value)||30);
  ctState.restSec = Math.max(0, parseInt(document.getElementById('ctRest').value)||10);
  ctState.prepSec = Math.max(0, parseInt(document.getElementById('ctPrep').value)||5);
}

function ctRender(){
  const fill = document.getElementById('ctBarFill');
  const phaseEl = document.getElementById('ctPhase');
  const timeEl = document.getElementById('ctTime');
  const roundEl = document.getElementById('ctRoundLbl');

  let total = 1, color = 'var(--accent)', label = t('st_ready');
  if(ctState.phase==='prep'){ total = ctState.prepSec||1; color='var(--yellow)'; label=t('st_getready'); }
  else if(ctState.phase==='work'){ total = ctState.workSec; color='var(--accent)'; label=t('st_work'); }
  else if(ctState.phase==='rest'){ total = ctState.restSec||1; color='var(--teal)'; label=t('st_rest'); }
  else if(ctState.phase==='done'){ total = 1; color='var(--green)'; label=t('st_donebang'); }

  const frac = ctState.phase==='idle' ? 0 : ctState.remaining/total;
  fill.style.width = (frac*100)+'%';
  fill.style.setProperty('--fill-color', color);
  phaseEl.textContent = label;
  phaseEl.style.color = color;
  timeEl.style.color = color;
  timeEl.textContent = ctState.phase==='idle' ? '--' : ln(ctState.remaining);
  roundEl.textContent = ctState.phase==='idle' ? `${t('lbl_rounds')} ${ln(0)} / ${ln(ctState.totalRounds||document.getElementById('ctRounds').value)}` : `${t('lbl_rounds')} ${ln(ctState.round)} / ${ln(ctState.totalRounds)}`;
}

function ctTick(){
  ctState.remaining--;
  if(ctState.remaining < 0){
    ctAdvancePhase();
    return;
  }
  countdownPeep(ctState.remaining);
  ctRender();
}

function ctAdvancePhase(){
  if(ctState.phase==='prep'){
    ctState.phase='work'; ctState.round=1; ctState.remaining=ctState.workSec;
    beep(660,180);
  } else if(ctState.phase==='work'){
    if(ctState.restSec>0){
      ctState.phase='rest'; ctState.remaining=ctState.restSec;
      beep(440,180);
    } else {
      ctNextRoundOrEnd();
      return;
    }
  } else if(ctState.phase==='rest'){
    ctNextRoundOrEnd();
    return;
  }
  ctRender();
}
function ctNextRoundOrEnd(){
  if(ctState.round >= ctState.totalRounds){
    ctState.phase='done'; ctState.remaining=0;
    clearInterval(ctInterval); ctState.running=false;
    beep(880,250); setTimeout(()=>beep(880,250),300); setTimeout(()=>beep(880,400),600);
  } else {
    ctState.round++; ctState.phase='work'; ctState.remaining=ctState.workSec;
    beep(660,180);
  }
  ctRender();
}

function ctStart(){
  if(ctState.running) return;
  if(ctState.phase==='idle' || ctState.phase==='done'){
    ctReadSettings();
    if(ctState.prepSec>0){ ctState.phase='prep'; ctState.remaining=ctState.prepSec; ctState.round=0; }
    else { ctState.phase='work'; ctState.round=1; ctState.remaining=ctState.workSec; }
  }
  ctState.running = true;
  ctRender();
  ctInterval = setInterval(ctTick, 1000);
}
function ctPause(){
  clearInterval(ctInterval); ctState.running=false;
}
function ctSkip(){
  if(ctState.phase==='idle') return;
  ctState.remaining = 0;
  ctAdvancePhase();
}
function ctReset(){
  clearInterval(ctInterval);
  ctState = { phase:'idle', round:0, totalRounds:8, workSec:30, restSec:10, prepSec:5, remaining:0, running:false };
  document.getElementById('ctBarFill').style.width = '0%';
  ctRender();
}

// ═══════════════════════════ CHECK-IN / REPORTS ═══════════════════════════
const CHECKIN_PERIODS = [7,14,30,60,90,180,365];
function renderCheckinPeriodChips(){
  const wrap = document.getElementById('checkinPeriodChips');
  wrap.innerHTML = CHECKIN_PERIODS.map(p=>`<button class="chip ${state.checkinPeriodDays===p?'active':''}" data-action="setCheckinPeriod" data-idx="${p}">${p===365?t('lbl_lastyear'):ln(p)+t('lbl_dayabbrev')}</button>`).join('');
}
function setCheckinPeriod(p){
  state.checkinPeriodDays = p;
  save();
  renderCheckinPeriodChips();
  renderCheckin();
}
function renderCheckinMetricSelect(){
  const sel = document.getElementById('checkinMetricSelect');
  const opts = [{id:'weight',label:'Weight (kg)'},{id:'waist',label:'Waist (cm)'},{id:'sleep',label:'Sleep (hours)'},{id:'water',label:'Water (ml)'}].concat(state.measurementTypes);
  sel.innerHTML = opts.map(o=>`<option value="${o.id}">${escHtml(o.label)}</option>`).join('');
  if(!opts.find(o=>o.id===state.checkinMetric)) state.checkinMetric = 'weight';
  sel.value = state.checkinMetric;
}
function getMetricValue(entry, metric){
  if(!entry || typeof entry === 'string') return null;
  if(metric === 'water'){
    const w = entry.water;
    return (typeof w === 'number' && w > 0) ? w : null;
  }
  let raw;
  if(metric === 'weight') raw = entry.measurements ? entry.measurements.weight : undefined;
  else if(metric === 'waist') raw = entry.measurements ? entry.measurements.waist : undefined;
  else if(metric === 'sleep') raw = entry.sleepHours;
  else raw = (entry.measurements && entry.measurements.custom) ? entry.measurements.custom[metric] : undefined;
  if(raw === undefined || raw === null || raw === '') return null;
  const v = parseFloat(raw);
  return isNaN(v) ? null : v;
}
function collectCheckinData(days, metric){
  const points = [];
  const today = new Date();
  for(let i=days-1; i>=0; i--){
    const d = new Date(today.getFullYear(), today.getMonth(), today.getDate()-i);
    const key = dateKey(d.getFullYear(), d.getMonth(), d.getDate());
    const val = getMetricValue(state.agendaEntries[key], metric);
    if(val !== null) points.push({ date:key, value:val, daysAgo:i });
  }
  return points;
}
// ── Check-in History (list view) — an alternative to the graph: every logged value for the
// currently selected metric/period, newest first, each row opening straight into that day's
// Agenda entry so it can be reviewed or corrected. ──
function openCheckinHistory(){
  renderCheckinHistoryList();
  document.getElementById('checkinHistoryModal').classList.add('open');
}
function closeCheckinHistory(){
  document.getElementById('checkinHistoryModal').classList.remove('open');
}
function openCheckinHistoryDay(key){
  closeCheckinHistory();
  openAgendaEntry(key);
}
function renderCheckinHistoryList(){
  const metricSel = document.getElementById('checkinMetricSelect');
  const titleEl = document.getElementById('checkinHistoryTitle');
  if(metricSel && titleEl){
    const metricLabel = metricSel.options[metricSel.selectedIndex] ? metricSel.options[metricSel.selectedIndex].text : '';
    titleEl.textContent = metricLabel;
  }
  const days = state.checkinPeriodDays || 30;
  const points = collectCheckinData(days, state.checkinMetric).slice().reverse(); // newest first
  const wrap = document.getElementById('checkinHistoryList');
  if(!wrap) return;
  if(!points.length){
    wrap.innerHTML = '<div class="checkin-empty">' + t('lbl_notenoughdata') + '</div>';
    return;
  }
  wrap.innerHTML = points.map(p => `
    <div class="wl-hist-entry checkin-hist-entry" data-action="openCheckinHistoryDay" data-key="${escAttr(p.date)}">
      <div>
        <div class="wl-hist-date">${fmtPhotoDate(p.date)}</div>
        <div class="wl-hist-sets">${ln(p.value)}</div>
      </div>
      <span class="checkin-hist-arrow">›</span>
    </div>
  `).join('');
}
let checkinChartPoints = [], checkinChartXFor = null, checkinChartYFor = null, checkinChartW = 600, checkinChartPlotB = 0;
function renderCheckin(){
  const metricSel = document.getElementById('checkinMetricSelect');
  if(!metricSel) return;
  state.checkinMetric = metricSel.value || 'weight';
  save();
  const metricLabel = metricSel.options[metricSel.selectedIndex] ? metricSel.options[metricSel.selectedIndex].text : '';
  const titleEl = document.getElementById('checkinChartTitle');
  if(titleEl) titleEl.textContent = metricLabel;
  const days = state.checkinPeriodDays || 30;
  const points = collectCheckinData(days, state.checkinMetric);
  const chartWrap = document.getElementById('checkinChartWrap');
  const trendWrap = document.getElementById('checkinTrendSummary');
  checkinChartPoints = points; checkinChartXFor = null;

  if(points.length < 2){
    chartWrap.innerHTML = '<div class="checkin-empty">' + t('lbl_notenoughdata') + '</div>';
    trendWrap.innerHTML = '';
    return;
  }

  const values = points.map(p=>p.value);
  const minV = Math.min(...values), maxV = Math.max(...values);
  const range = (maxV-minV) || 1;
  const padY = range * 0.15;
  const yMin = minV - padY, yMax = maxV + padY;
  const W = 600, H = 220, padL = 40, padR = 12, padT = 16, padB = 26;
  const plotW = W-padL-padR, plotH = H-padT-padB;
  const first = points[0], last = points[points.length-1];
  const totalSpan = Math.max(1, first.daysAgo - last.daysAgo);
  const xFor = p => padL + ((first.daysAgo - p.daysAgo)/totalSpan) * plotW;
  const yFor = v => padT + (1 - (v-yMin)/(yMax-yMin)) * plotH;
  checkinChartXFor = xFor; checkinChartYFor = yFor; checkinChartW = W; checkinChartPlotB = padT+plotH;

  const pathD = points.map((p,i)=> (i===0?'M':'L') + xFor(p).toFixed(1) + ',' + yFor(p.value).toFixed(1)).join(' ');
  const areaD = pathD + ` L${xFor(last).toFixed(1)},${(padT+plotH).toFixed(1)} L${xFor(first).toFixed(1)},${(padT+plotH).toFixed(1)} Z`;
  const dots = points.map((p,i)=>`<circle class="ci-dot" data-i="${i}" cx="${xFor(p).toFixed(1)}" cy="${yFor(p.value).toFixed(1)}" r="3.5" fill="var(--accent)"/>`).join('');
  // horizontal gridlines (like a nice report chart)
  const gridLines = [0,0.25,0.5,0.75,1].map(f=>{
    const y = padT + f*plotH;
    const val = yMax - f*(yMax-yMin);
    return `<line x1="${padL}" y1="${y.toFixed(1)}" x2="${W-padR}" y2="${y.toFixed(1)}" stroke="var(--border)" stroke-width="1" opacity="0.6"/>
      <text x="${padL-6}" y="${(y+3.5).toFixed(1)}" text-anchor="end" font-size="9" fill="#7c8a9a">${val.toFixed(1)}</text>`;
  }).join('');

  chartWrap.innerHTML = `
    <svg id="checkinSvg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      ${gridLines}
      <path d="${areaD}" fill="var(--accent-dim)" stroke="none"/>
      <path d="${pathD}" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${dots}
      <line id="ciHoverLine" x1="0" y1="${padT}" x2="0" y2="${padT+plotH}" stroke="var(--accent)" stroke-width="1" stroke-dasharray="3,3" opacity="0"/>
      <circle id="ciHoverDot" r="4.5" fill="var(--accent)" stroke="var(--surface)" stroke-width="2" opacity="0"/>
      <text x="${xFor(first).toFixed(1)}" y="${H-6}" text-anchor="start" font-size="9" fill="#7c8a9a">${fmtPhotoDate(first.date)}</text>
      <text x="${xFor(last).toFixed(1)}" y="${H-6}" text-anchor="end" font-size="9" fill="#7c8a9a">${fmtPhotoDate(last.date)}</text>
      <rect id="ciHoverCatcher" x="${padL}" y="0" width="${plotW}" height="${H}" fill="transparent"/>
    </svg>
    <div class="checkin-tooltip" id="checkinTooltip"></div>
  `;
  setupCheckinHover();

  const delta = last.value - first.value;
  const pct = first.value !== 0 ? (delta/first.value*100) : 0;
  let deltaClass = 'flat';
  if(state.checkinMetric === 'weight' || state.checkinMetric === 'waist'){
    deltaClass = delta > 0 ? 'up-bad' : (delta < 0 ? 'down-good' : 'flat');
  } else if(state.checkinMetric === 'sleep' || state.checkinMetric === 'water'){
    deltaClass = delta > 0 ? 'up-good' : (delta < 0 ? 'down-bad' : 'flat');
  }
  const arrow = delta > 0 ? '▲' : (delta < 0 ? '▼' : '—');
  const periodLabel = days === 365 ? 'year' : days + ' days';
  trendWrap.innerHTML = `
    <div class="checkin-trend-val">${last.value}</div>
    <div class="checkin-trend-delta ${deltaClass}">${arrow} ${Math.abs(delta).toFixed(1)} (${Math.abs(pct).toFixed(1)}%)</div>
    <div class="checkin-trend-sub">${points.length} logged entries over the last ${periodLabel} · started at ${first.value}</div>
  `;
}
function setupCheckinHover(){
  const svg = document.getElementById('checkinSvg');
  const catcher = document.getElementById('ciHoverCatcher');
  const wrap = document.getElementById('checkinChartWrap');
  const tooltip = document.getElementById('checkinTooltip');
  const hoverLine = document.getElementById('ciHoverLine');
  const hoverDot = document.getElementById('ciHoverDot');
  if(!svg || !catcher || !wrap || !tooltip) return;

  function showAt(clientX, clientY){
    const rect = svg.getBoundingClientRect();
    const scale = checkinChartW / rect.width;
    const svgX = (clientX - rect.left) * scale;
    let nearest = 0, best = Infinity;
    checkinChartPoints.forEach((p,i)=>{
      const d = Math.abs(checkinChartXFor(p) - svgX);
      if(d < best){ best = d; nearest = i; }
    });
    const p = checkinChartPoints[nearest];
    if(!p) return;
    const px = checkinChartXFor(p), py = checkinChartYFor(p.value);
    hoverLine.setAttribute('x1', px); hoverLine.setAttribute('x2', px); hoverLine.setAttribute('opacity', '0.6');
    hoverDot.setAttribute('cx', px); hoverDot.setAttribute('cy', py); hoverDot.setAttribute('opacity', '1');
    const metricSel = document.getElementById('checkinMetricSelect');
    const metricLabel = metricSel && metricSel.options[metricSel.selectedIndex] ? metricSel.options[metricSel.selectedIndex].text : 'Value';
    tooltip.innerHTML = `<div class="cti-date">${fmtPhotoDate(p.date)}</div><div class="cti-val"><span class="cti-dot"></span>${escHtml(metricLabel)}: ${p.value}</div>`;
    tooltip.classList.add('show');
    const wrapRect = wrap.getBoundingClientRect();
    const leftPx = (px / checkinChartW) * rect.width + (rect.left - wrapRect.left);
    const topPx = (py / 220) * rect.height + (rect.top - wrapRect.top);
    const pad = 6;
    const half = tooltip.offsetWidth / 2;
    const minLeft = pad + half;
    const maxLeft = Math.max(minLeft, wrapRect.width - pad - half);
    tooltip.style.left = Math.max(minLeft, Math.min(maxLeft, leftPx)) + 'px';
    tooltip.style.top = Math.max(20, topPx - 8) + 'px';
  }
  function hide(){
    tooltip.classList.remove('show');
    hoverLine.setAttribute('opacity','0');
    hoverDot.setAttribute('opacity','0');
  }
  catcher.addEventListener('mousemove', e=>showAt(e.clientX, e.clientY));
  catcher.addEventListener('mouseleave', hide);
  catcher.addEventListener('touchstart', e=>{ if(e.touches[0]) showAt(e.touches[0].clientX, e.touches[0].clientY); }, {passive:true});
  catcher.addEventListener('touchmove', e=>{ if(e.touches[0]) showAt(e.touches[0].clientX, e.touches[0].clientY); }, {passive:true});
  catcher.addEventListener('touchend', hide);
}
function renderMeasureTypeList(){
  const wrap = document.getElementById('measureTypeList');
  if(!state.measurementTypes.length){ wrap.innerHTML = '<div class="empty-msg" style="padding:6px 0;">' + t('checkin_no_custom') + '</div>'; return; }
  wrap.innerHTML = state.measurementTypes.map((t,i)=>`
    <div class="measure-type-item"><div>${escHtml(t.label)}</div><button class="food-item-del" data-action="deleteMeasureType" data-idx="${i}">✕</button></div>
  `).join('');
}
function addMeasureType(){
  const input = document.getElementById('measureTypeInput');
  const val = input.value.trim();
  if(!val) return;
  const id = 'custom_' + Date.now() + '_' + Math.floor(Math.random()*10000);
  state.measurementTypes.push({ id, label: val });
  input.value = '';
  renderMeasureTypeList();
  renderCheckinMetricSelect();
  save();
}
function deleteMeasureType(i){
  if(!confirm(t('confirm_removemeasuretype'))) return;
  state.measurementTypes.splice(i,1);
  renderMeasureTypeList();
  renderCheckinMetricSelect();
  renderCheckin();
  save();
}
function startCheckin(){
  if(typeof renderAgenda === 'function') renderAgenda();
  renderCheckinPeriodChips();
  renderCheckinMetricSelect();
  renderMeasureTypeList();
  renderCheckin();
  wlInit();
}

// ═══════════════════════════ WORKOUT JOURNAL (sets/reps log) ═══════════════════════════
// Lets you log the actual sets/reps/weight you did for an exercise each day, separate from
// the planned program. Shows what you did last time so you can try to beat it — a simple
// "total volume" (reps × weight, summed across sets) is used as the score to chase.
let wlCurrentSets = [{reps:'', weight:''}];

function wlAllExerciseNames(){
  const names = new Set();
  state.programs.forEach(p=>(p.blocks||[]).forEach(b=>(b.days||[]).forEach(d=>{
    (d.exercises||[]).forEach(ex=>{ if(ex.name && ex.name.trim()) names.add(ex.name.trim()); });
  })));
  Object.keys(state.workoutLog||{}).forEach(n=>names.add(n));
  return Array.from(names).sort((a,b)=>a.localeCompare(b));
}
function wlRenderExerciseSelect(){
  const sel = document.getElementById('wlExerciseSelect');
  if(!sel) return;
  const names = wlAllExerciseNames();
  sel.innerHTML = names.map(n=>`<option value="${escAttr(n)}">${escHtml(n)}</option>`).join('')
    + `<option value="__custom__">${t('opt_customexercise')}</option>`;
  let want = state.workoutLogLastExercise || (names[0] || '__custom__');
  if(want !== '__custom__' && !names.includes(want)) want = names[0] || '__custom__';
  sel.value = want;
  const customRow = document.getElementById('wlCustomNameRow');
  if(customRow) customRow.style.display = (sel.value === '__custom__') ? 'block' : 'none';
}
function wlCurrentExerciseName(){
  const sel = document.getElementById('wlExerciseSelect');
  if(!sel) return '';
  if(sel.value === '__custom__'){
    const custom = document.getElementById('wlCustomName');
    return custom ? custom.value.trim() : '';
  }
  return sel.value;
}
function wlOnExerciseChange(){
  const sel = document.getElementById('wlExerciseSelect');
  const customRow = document.getElementById('wlCustomNameRow');
  const isCustom = sel.value === '__custom__';
  if(customRow) customRow.style.display = isCustom ? 'block' : 'none';
  if(!isCustom){ state.workoutLogLastExercise = sel.value; save(); }
  wlCurrentSets = [{reps:'', weight:''}];
  wlRenderSetsEditor();
  wlRenderLastTime();
  wlRenderHistory();
}
function wlOnCustomNameInput(){
  wlRenderLastTime();
  wlRenderHistory();
}
function wlAddSetRow(){
  wlCurrentSets.push({reps:'', weight:''});
  wlRenderSetsEditor();
}
function wlRemoveSetRow(idx){
  wlCurrentSets.splice(idx,1);
  if(wlCurrentSets.length===0) wlCurrentSets.push({reps:'', weight:''});
  wlRenderSetsEditor();
}
function wlUpdateSetField(idx, field, val){
  if(wlCurrentSets[idx]) wlCurrentSets[idx][field] = val;
}
function wlRenderSetsEditor(){
  const wrap = document.getElementById('wlSetsEditor');
  if(!wrap) return;
  wrap.innerHTML = wlCurrentSets.map((s,i)=>`
    <div class="wl-set-row">
      <div class="wl-set-num">${i+1}</div>
      <input type="number" inputmode="decimal" placeholder="${t('ph_wlreps')}" value="${escAttr(s.reps)}" data-action="wlUpdateSetField" data-idx="${i}" data-field="reps">
      <input type="number" inputmode="decimal" placeholder="${t('ph_wlweight')}" value="${escAttr(s.weight)}" data-action="wlUpdateSetField" data-idx="${i}" data-field="weight">
      <button type="button" class="wl-set-del" data-action="wlRemoveSetRow" data-idx="${i}" title="${t('tt_removeset')}">✕</button>
    </div>`).join('');
}
function wlComputeTotals(sets){
  let totalReps = 0, totalVolume = 0, maxWeight = 0;
  sets.forEach(s=>{
    const reps = parseFloat(s.reps) || 0;
    const weight = parseFloat(s.weight) || 0;
    totalReps += reps;
    totalVolume += reps*weight;
    if(weight > maxWeight) maxWeight = weight;
  });
  return { totalReps, totalVolume: Math.round(totalVolume*10)/10, maxWeight };
}
function wlGetLog(name){
  if(!name) return [];
  return (state.workoutLog[name] || []).slice().sort((a,b)=> a.date < b.date ? 1 : -1); // newest first
}
function wlFormatSets(sets){
  return sets.map(s=>{
    const reps = s.reps || 0;
    return s.weight ? `${reps}×${s.weight}kg` : `${reps} reps`;
  }).join(', ');
}
function wlRenderLastTime(){
  const wrap = document.getElementById('wlStatRow');
  if(!wrap) return;
  const name = wlCurrentExerciseName();
  if(!name){ wrap.innerHTML = ''; return; }
  const log = wlGetLog(name);
  if(log.length === 0){
    wrap.innerHTML = `<div class="wl-stat-empty">${tf('lbl_nopreviouslog', {name: '<b>'+escHtml(name)+'</b>'})}</div>`;
    return;
  }
  const last = log[0];
  const lastT = wlComputeTotals(last.sets);
  let bestT = lastT, bestDate = last.date;
  log.forEach(entry=>{
    const t = wlComputeTotals(entry.sets);
    if(t.totalVolume > bestT.totalVolume){ bestT = t; bestDate = entry.date; }
  });
  wrap.innerHTML = `
    <div class="wl-stat-row">
      <div class="wl-stat-box">
        <div class="wl-stat-label">${t('lbl_lasttime')}</div>
        <div class="wl-stat-val">${lastT.totalVolume}<span style="font-size:13px;color:var(--muted);">kg</span></div>
        <div class="wl-stat-sub">${escHtml(last.date)} · ${escHtml(wlFormatSets(last.sets))}</div>
      </div>
      <div class="wl-stat-box">
        <div class="wl-stat-label">${t('lbl_personalrecord')}</div>
        <div class="wl-stat-val accent">${bestT.totalVolume}<span style="font-size:13px;color:var(--muted);">kg</span></div>
        <div class="wl-stat-sub">${escHtml(bestDate)}</div>
      </div>
    </div>
    <div class="lock-sub" style="text-align:left;margin:-8px 0 4px;">${tf('lbl_beatvolume', {vol: lastT.totalVolume})}</div>
  `;
}
function wlRenderHistory(){
  const wrap = document.getElementById('wlHistory');
  if(!wrap) return;
  const name = wlCurrentExerciseName();
  const log = wlGetLog(name).slice(0,5);
  if(!name || log.length === 0){ wrap.innerHTML = ''; return; }
  wrap.innerHTML = `
    <div class="wl-hist-header">
      <label class="f-label">${t('lbl_recentsessions')}</label>
      <button type="button" class="btn btn-danger btn-sm" data-action="wlClearExerciseLog">${t('btn_clearall')}</button>
    </div>
    <div class="wl-hist-list">${log.map(entry=>{
      const tot = wlComputeTotals(entry.sets);
      return `<div class="wl-hist-entry">
        <div>
          <div class="wl-hist-date">${escHtml(entry.date)}</div>
          <div class="wl-hist-sets">${escHtml(wlFormatSets(entry.sets))}</div>
          <div class="wl-hist-vol">${tf('lbl_totalvolume', {vol: tot.totalVolume, reps: tot.totalReps})}</div>
        </div>
        <button type="button" class="wl-hist-del" data-date="${escAttr(entry.date)}" data-action="wlDeleteEntry" title="${t('tt_deleteentry')}">✕</button>
      </div>`;
    }).join('')}</div>`;
}
function wlDeleteEntry(dateStr){
  const name = wlCurrentExerciseName();
  if(!name || !state.workoutLog[name]) return;
  if(!confirm(tf('confirm_deletelog', {date: dateStr, name: name}))) return;
  state.workoutLog[name] = state.workoutLog[name].filter(e=>e.date !== dateStr);
  if(state.workoutLog[name].length === 0) delete state.workoutLog[name];
  save();
  wlRenderLastTime();
  wlRenderHistory();
}
function wlClearExerciseLog(){
  const name = wlCurrentExerciseName();
  if(!name || !state.workoutLog[name] || state.workoutLog[name].length === 0) return;
  if(!confirm(tf('confirm_deletealllog', {name: name}))) return;
  delete state.workoutLog[name];
  save();
  wlRenderLastTime();
  wlRenderHistory();
}
function wlSaveEntry(){
  const name = wlCurrentExerciseName();
  if(!name){ alert(t('err_pickexname')); return; }
  const cleanSets = wlCurrentSets
    .map(s=>({ reps: parseFloat(s.reps)||0, weight: parseFloat(s.weight)||0 }))
    .filter(s=> s.reps > 0 || s.weight > 0);
  if(cleanSets.length === 0){ alert(t('err_logoneset')); return; }

  const today = todayISO();
  if(!state.workoutLog[name]) state.workoutLog[name] = [];
  const existingIdx = state.workoutLog[name].findIndex(e=>e.date === today);
  if(existingIdx >= 0) state.workoutLog[name][existingIdx] = { date: today, sets: cleanSets };
  else state.workoutLog[name].push({ date: today, sets: cleanSets });
  state.workoutLogLastExercise = name;
  save();

  wlRenderExerciseSelect(); // brand-new custom exercises now appear in the dropdown
  const sel = document.getElementById('wlExerciseSelect');
  if(sel) sel.value = name;
  const customRow = document.getElementById('wlCustomNameRow');
  if(customRow) customRow.style.display = 'none';

  wlCurrentSets = [{reps:'', weight:''}];
  wlRenderSetsEditor();
  wlRenderLastTime();
  wlRenderHistory();
}
function wlInit(){
  wlRenderExerciseSelect();
  wlCurrentSets = [{reps:'', weight:''}];
  wlRenderSetsEditor();
  wlRenderLastTime();
  wlRenderHistory();
}


// ═══════════════════════════ VOICE COACH CIRCUIT (TTS) ═══════════════════════════
const LANG_BCP47 = { en:'en', nl:'nl', ar_fusha:'ar' };
const LANG_HUMAN = { en:'English', nl:'Dutch', ar_fusha:'Arabic' };
let cachedVoices = [];
function refreshVoiceList(){
  try{ cachedVoices = window.speechSynthesis ? window.speechSynthesis.getVoices() : []; }catch(e){ cachedVoices = []; }
}
function pickVoiceForLang(langKey){
  refreshVoiceList(); // always fetch fresh — voice lists load asynchronously on many devices/browsers, so a cached empty/partial list can go stale
  const prefix = LANG_BCP47[langKey] || 'en';
  return cachedVoices.find(v => v.lang && v.lang.toLowerCase().startsWith(prefix)) || null;
}
// If the person picked a specific voice in the Voice Coach card, use that one
// (regardless of language match — it's their explicit choice). Otherwise fall
// back to the automatic best-match-by-language behavior.
function pickPreferredVoice(langKey){
  refreshVoiceList();
  const chosenURI = state.profile && state.profile.ttsVoiceURI;
  if(chosenURI){
    const chosen = cachedVoices.find(v => v.voiceURI === chosenURI);
    if(chosen) return chosen;
  }
  return pickVoiceForLang(langKey);
}
// Builds the <select id="ltVoiceSelect"> options from whatever voices are
// actually installed on this device — voices matching the app's current
// language are listed first, then everything else, so people can pick a
// more natural-sounding voice than whatever the browser auto-selects.
function populateLtVoiceSelect(){
  const sel = document.getElementById('ltVoiceSelect');
  if(!sel) return;
  refreshVoiceList();
  const langKey = curLangKey();
  const prefix = LANG_BCP47[langKey] || 'en';
  const matching = cachedVoices.filter(v => v.lang && v.lang.toLowerCase().startsWith(prefix));
  const rest = cachedVoices.filter(v => !(v.lang && v.lang.toLowerCase().startsWith(prefix)));
  const ordered = matching.concat(rest);
  const chosenURI = (state.profile && state.profile.ttsVoiceURI) || '';
  let opts = '<option value="">' + t('opt_voice_auto') + '</option>';
  opts += ordered.map(v => `<option value="${escAttr(v.voiceURI)}">${escHtml(v.name)} (${escHtml(v.lang)})</option>`).join('');
  sel.innerHTML = opts;
  sel.value = ordered.some(v=>v.voiceURI===chosenURI) ? chosenURI : '';
}
function ltOnVoiceChange(){
  const sel = document.getElementById('ltVoiceSelect');
  if(!sel) return;
  state.profile.ttsVoiceURI = sel.value || null;
  save();
}
function setVoiceNote(msg){
  const note = document.getElementById('ltUnsupportedNote');
  if(!note) return;
  if(msg){ note.textContent = msg; note.style.display = 'block'; }
  else { note.style.display = 'none'; }
}
function vcSpeak(text){
  try{
    if(!('speechSynthesis' in window)){
      setVoiceNote("Your browser doesn't support voice announcements — the timer still works, just silently.");
      return;
    }
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 1; u.pitch = 1; u.volume = 1;
    const langKey = curLangKey();
    const voice = pickPreferredVoice(langKey);
    if(voice){
      u.voice = voice;
      u.lang = voice.lang;
      setVoiceNote(null);
    } else {
      u.lang = LANG_BCP47[langKey] || 'en';
      if(langKey !== 'en'){
        setVoiceNote('No ' + LANG_HUMAN[langKey] + " voice is installed on this device, so it's using the default voice instead (pronunciation may be off). Check your phone's Settings → Accessibility → Spoken Content → Voices to add one.");
      } else {
        setVoiceNote(null);
      }
    }
    window.speechSynthesis.speak(u);
  }catch(e){}
}

// ═══════════════════════════ LIFTING / SETS TIMER ═══════════════════════════
// The program/block/day/warm-up choice is kept on `state` (not just in the <select> DOM)
// so it survives switching tabs and reopening the app.
function ltPopulatePrograms(){
  const sel = document.getElementById('ltProgramSelect');
  if(!sel) return;
  if(!state.programs[state.ltProgramIdx]) state.ltProgramIdx = 0;
  sel.innerHTML = state.programs.map((p,i)=>`<option value="${i}" ${i===state.ltProgramIdx?'selected':''}>${escAttr(p.name)}</option>`).join('');
  sel.value = state.ltProgramIdx;
  ltPopulateBlocks();
}
function ltOnProgramChange(){
  state.ltProgramIdx = parseInt(document.getElementById('ltProgramSelect').value)||0;
  state.ltBlockIdx = 0; state.ltDayIdx = 0;
  ltPopulateBlocks();
  ltSyncToWorkoutProgram();
  save();
}
function ltPopulateBlocks(){
  const pIdx = state.ltProgramIdx||0;
  const program = state.programs[pIdx];
  const sel = document.getElementById('ltBlockSelect');
  if(!(program?.blocks||[])[state.ltBlockIdx]) state.ltBlockIdx = 0;
  sel.innerHTML = (program?.blocks||[]).map((b,i)=>`<option value="${i}" ${i===state.ltBlockIdx?'selected':''}>${escAttr(b.name)}</option>`).join('');
  sel.value = state.ltBlockIdx;
  ltPopulateDays();
}
function ltOnBlockChange(){
  state.ltBlockIdx = parseInt(document.getElementById('ltBlockSelect').value)||0;
  state.ltDayIdx = 0;
  ltPopulateDays();
  ltSyncToWorkoutProgram();
  save();
}
function ltPopulateDays(){
  const pIdx = state.ltProgramIdx||0;
  const bIdx = state.ltBlockIdx||0;
  const block = state.programs[pIdx]?.blocks[bIdx];
  const sel = document.getElementById('ltDaySelect');
  if(!(block?.days||[])[state.ltDayIdx]) state.ltDayIdx = 0;
  sel.innerHTML = (block?.days||[]).map((d,i)=>`<option value="${i}" ${i===state.ltDayIdx?'selected':''}>${escAttr(d.label)}${d.rest?' (rest)':''}</option>`).join('');
  sel.value = state.ltDayIdx;
  ltRenderExerciseList();
}
function ltOnDayChange(){
  state.ltDayIdx = parseInt(document.getElementById('ltDaySelect').value)||0;
  ltRenderExerciseList();
  ltSyncToWorkoutProgram();
  save();
}
// Mirrors whatever Program/Week/Day the person just picked in the Voice Coach
// over to the "Workout Program" card below, so both stay showing the same
// selection instead of drifting apart.
function ltSyncToWorkoutProgram(){
  state.activeProgram = state.ltProgramIdx||0;
  state.activeBlock = state.ltBlockIdx||0;
  state.activeDay = state.ltDayIdx||0;
  if(typeof renderWorkouts === 'function') renderWorkouts();
}
function ltGetSelectedDay(){
  const pIdx = state.ltProgramIdx||0;
  const bIdx = state.ltBlockIdx||0;
  const dIdx = state.ltDayIdx||0;
  return state.programs[pIdx]?.blocks[bIdx]?.days[dIdx];
}
function ltRenderExerciseList(){
  const day = ltGetSelectedDay();
  const sel = document.getElementById('ltWarmupSelect');
  if(!sel) return;
  let opts = '<option value="">No warm-up</option>';
  opts += state.warmups.map(w=>`<option value="${w.id}">${escHtml(w.name)}</option>`).join('');
  sel.innerHTML = opts;
  // Prefer the warm-up the person last picked here, and fall back to the day's own default warm-up.
  let preselect = '';
  if(state.ltWarmupId && state.warmups.some(w=>String(w.id)===String(state.ltWarmupId))){
    preselect = String(state.ltWarmupId);
  } else if(day && day.warmupId){
    preselect = String(day.warmupId);
  }
  sel.value = preselect;
  if(sel.value !== preselect) sel.value = ''; // day's assigned warm-up was deleted from the library
  ltSelectedWarmupId = sel.value;
  state.ltWarmupId = sel.value;
}
let ltSelectedWarmupId = '';
function ltSetWarmupChoice(val){
  ltSelectedWarmupId = val;
  state.ltWarmupId = val;
  save();
}

const LT_GETREADY_SEC = 5;
let lt = { phase:'idle', exercises:[], idx:0, set:1, totalSets:1, round:1, totalRounds:1, restSec:90, defaultSets:4, remaining:0, running:false, warmupSteps:[], warmupStepIdx:0, circuitMode:false, sequence:[], seqPos:0 };
let ltInterval = null;

// Builds the ordered list of steps the Voice Coach walks through.
// STRENGTH (straight) mode: all sets of exercise 1, then all sets of
// exercise 2, etc. — each step is {idx, set}.
// CIRCUIT mode: the CRITICAL CIRCUIT RULE — the round count belongs to the
// whole day, not to any exercise. Round 1 walks every exercise once in
// order, then round 2 walks the exact same order again, and so on for
// `rounds` rounds. Each step is {idx, round}. There is no per-exercise sets
// concept here at all.
function ltBuildSequence(exercises, circuitMode, defaultSets, rounds){
  const seq = [];
  if(circuitMode){
    const totalRounds = Math.max(1, rounds || 1);
    for(let r=1; r<=totalRounds; r++){
      exercises.forEach((ex,i)=>{ seq.push({idx:i, round:r}); });
    }
  } else {
    exercises.forEach((ex,i)=>{
      const total = ex.sets || defaultSets;
      for(let s=1; s<=total; s++) seq.push({idx:i, set:s});
    });
  }
  return seq;
}

function ltStart(){
  if(lt.running) return;
  if(lt.phase==='idle' || lt.phase==='done'){
    const day = ltGetSelectedDay();
    if(!day || day.rest){ alert(t('err_pickday_nottrain')); return; }
    const named = day.exercises.filter(e=>e.name && e.name.trim());
    if(!named.length){ alert(t('err_noexercisesday')); return; }
    lt.exercises = named;
    lt.restSec = 90;
    lt.defaultSets = 4;
    lt.circuitMode = !!day.circuit;
    lt.totalRounds = lt.circuitMode ? getDayRounds(day) : 1;
    lt.sequence = ltBuildSequence(lt.exercises, lt.circuitMode, lt.defaultSets, lt.totalRounds);
    // Logged so circuit-order imports/toggles can be verified directly in the
    // browser console against the exercise list actually being run.
    console.log('[BeerSports] workout sequence (circuitMode=' + lt.circuitMode + '):',
      lt.sequence.map(function(s){ return lt.circuitMode ? { exercise: s.idx+1, name: lt.exercises[s.idx].name, round: s.round } : { exercise: s.idx+1, name: lt.exercises[s.idx].name, set: s.set }; }));
    lt.seqPos = 0;
    lt.idx = lt.sequence[0].idx;
    if(lt.circuitMode){
      lt.round = lt.sequence[0].round;
    } else {
      lt.set = lt.sequence[0].set;
      lt.totalSets = lt.exercises[lt.idx].sets || lt.defaultSets;
    }
    const chosenWarmup = state.warmups.find(x=>String(x.id)===String(ltSelectedWarmupId));
    lt.warmupSteps = chosenWarmup ? warmupSteps(chosenWarmup) : [];
    lt.warmupStepIdx = 0;
    // Always a short spoken "Get Ready" countdown before the warm-up/first
    // exercise starts, so there's a beat to get into position after tapping Start.
    lt.phase = 'getready';
    lt.remaining = LT_GETREADY_SEC;
    clearInterval(ltInterval);
    vcSpeak(tphrase('get_ready'));
    ltInterval = setInterval(ltTick, 1000);
  }
  lt.running = true;
  ltRender();
}
// Runs once the "Get Ready" countdown hits zero (or is skipped): starts the
// chosen warm-up if there is one, otherwise announces the first exercise.
function ltBeginExercises(){
  clearInterval(ltInterval);
  if(lt.warmupSteps.length){
    lt.phase = 'warmup';
    lt.warmupStepIdx = 0;
    ltStartWarmupStep();
  } else {
    ltAnnounceSet();
  }
  ltRender();
}
function ltStartWarmupStep(){
  clearInterval(ltInterval);
  const step = lt.warmupSteps[lt.warmupStepIdx];
  lt.remaining = step.seconds;
  const phrase = lt.warmupStepIdx === 0 ? (tphrase('warmup_intro') + ' ' + step.label) : step.label;
  vcSpeak(phrase);
  ltInterval = setInterval(ltTick, 1000);
}
function ltAdvanceWarmup(){
  lt.warmupStepIdx++;
  if(lt.warmupStepIdx < lt.warmupSteps.length){
    ltStartWarmupStep();
    ltRender();
  } else {
    ltAnnounceSet();
    ltRender();
  }
}
function ltAnnounceSet(){
  const ex = lt.exercises[lt.idx];
  lt.phase = 'lift';
  clearInterval(ltInterval);
  // CRITICAL CIRCUIT RULE: a CIRCUIT exercise is never announced as "Set X
  // of Y" — there is no per-exercise set count. Instead, only announce the
  // round number, and only when this is the first exercise of that round
  // (announcing it before every single exercise would be repetitive noise).
  let progressPart = '';
  if(lt.circuitMode){
    lt.totalSets = 1;
    if(lt.totalRounds > 1 && lt.idx === 0) progressPart = '. ' + tphrase('round_of')(lt.round, lt.totalRounds);
  } else {
    lt.totalSets = ex.sets || lt.defaultSets;
    if(lt.totalSets > 1) progressPart = '. ' + tphrase('set_of')(lt.set, lt.totalSets);
  }
  if(ex.mode === 'time' && ex.holdSec){
    lt.remaining = ex.holdSec;
    vcSpeak(ex.name + '. ' + tphrase('hold_for')(ex.holdSec) + progressPart);
    ltInterval = setInterval(ltTick, 1000);
  } else {
    const repsPart = ex.reps ? (', ' + ex.reps + ' ' + tphrase('reps_word')) : '';
    vcSpeak(ex.name + repsPart + progressPart);
  }
}
function ltDone(){
  if(lt.phase !== 'lift') return;
  clearInterval(ltInterval);
  const ex = lt.exercises[lt.idx];
  const isLastStep = lt.seqPos >= lt.sequence.length-1;
  if(isLastStep){
    lt.phase = 'done'; lt.running = false;
    vcSpeak(tphrase('complete'));
    ltRender();
    return;
  }
  const restSec = ex.restSec || lt.restSec;
  if(restSec > 0){
    lt.phase = 'rest'; lt.remaining = restSec;
    const nextStep = lt.sequence[lt.seqPos+1];
    const nextEx = lt.exercises[nextStep.idx];
    vcSpeak(tphrase('rest') + '. ' + tphrase('next_up') + ' ' + nextEx.name);
    ltInterval = setInterval(ltTick, 1000);
  } else {
    ltNext();
  }
  ltRender();
}
function ltTick(){
  lt.remaining--;
  if(lt.remaining <= 0){
    clearInterval(ltInterval);
    if(lt.phase === 'lift'){ ltDone(); }
    else if(lt.phase === 'warmup'){ ltAdvanceWarmup(); }
    else if(lt.phase === 'getready'){ ltBeginExercises(); }
    else { ltNext(); }
    return;
  }
  if(lt.phase === 'rest' || lt.phase === 'warmup' || lt.phase === 'getready'){
    countdownPeep(lt.remaining);
  } else if(lt.phase === 'lift'){
    const curEx = lt.exercises[lt.idx];
    if(curEx && curEx.mode === 'time' && curEx.holdSec) countdownPeep(lt.remaining);
  }
  ltRender();
}
function ltNext(){
  lt.seqPos++;
  const step = lt.sequence[lt.seqPos];
  lt.idx = step.idx;
  if(lt.circuitMode) lt.round = step.round; else lt.set = step.set;
  ltAnnounceSet();
  ltRender();
}
function ltSkip(){
  if(lt.phase === 'getready'){ clearInterval(ltInterval); ltBeginExercises(); }
  else if(lt.phase === 'warmup'){ clearInterval(ltInterval); ltAdvanceWarmup(); }
  else if(lt.phase === 'lift'){ ltDone(); }
  else if(lt.phase === 'rest'){ clearInterval(ltInterval); ltNext(); }
}
// Lets you nudge the current rest countdown up or down (10s per tap) while
// it's running, in case a program's built-in rest time is too short/long
// for how you're actually feeling that day. Only does anything during rest.
const LT_REST_STEP = 10;
function ltAdjustRest(deltaSec){
  if(lt.phase !== 'rest') return;
  lt.remaining = Math.max(5, lt.remaining + deltaSec);
  ltRender();
}
function ltReset(){
  clearInterval(ltInterval);
  try{ window.speechSynthesis && window.speechSynthesis.cancel(); }catch(e){}
  lt = { phase:'idle', exercises:[], idx:0, set:1, totalSets:1, round:1, totalRounds:1, restSec:90, defaultSets:4, remaining:0, running:false, warmupSteps:[], warmupStepIdx:0, circuitMode:false, sequence:[], seqPos:0 };
  const fill = document.getElementById('ltBarFill');
  if(fill) fill.style.width = '0%';
  ltRender();
}
function ltRender(){
  const fill = document.getElementById('ltBarFill');
  const phaseEl = document.getElementById('ltPhase');
  const timeEl = document.getElementById('ltTime');
  const setLbl = document.getElementById('ltSetLbl');
  const repsLbl = document.getElementById('ltRepsLbl');
  const exNowEl = document.getElementById('ltExerciseNow');
  const doneBtn = document.getElementById('ltDoneBtn');
  if(!fill) return;

  const curEx = lt.exercises[lt.idx];
  const isTimedLift = lt.phase === 'lift' && curEx && curEx.mode === 'time' && curEx.holdSec;
  const curWarmupStep = lt.phase === 'warmup' ? lt.warmupSteps[lt.warmupStepIdx] : null;

  const restMinusBtn = document.getElementById('ltRestMinus');
  const restPlusBtn = document.getElementById('ltRestPlus');
  let color = 'var(--accent)', label = t('st_ready'), frac = 0;
  doneBtn.style.display = 'none';
  if(restMinusBtn) restMinusBtn.style.display = lt.phase === 'rest' ? 'flex' : 'none';
  if(restPlusBtn) restPlusBtn.style.display = lt.phase === 'rest' ? 'flex' : 'none';
  if(lt.phase === 'getready'){
    color = 'var(--yellow)'; label = t('st_getready'); frac = lt.remaining/LT_GETREADY_SEC;
  } else if(lt.phase === 'warmup'){
    color = 'var(--yellow)'; label = t('st_warmup'); frac = curWarmupStep ? lt.remaining/curWarmupStep.seconds : 1;
  } else if(lt.phase === 'lift'){
    color = 'var(--accent)';
    if(isTimedLift){
      label = t('st_holding'); frac = lt.remaining/curEx.holdSec;
    } else {
      label = t('st_lifting'); frac = 1;
      doneBtn.style.display = 'block';
    }
  } else if(lt.phase === 'rest'){
    const total = (curEx && curEx.restSec) || lt.restSec || 1;
    color = 'var(--teal)'; label = t('st_rest'); frac = Math.min(1, lt.remaining/total);
  } else if(lt.phase === 'done'){
    color = 'var(--green)'; label = t('st_donebang'); frac = 1;
  }
  fill.style.width = (frac*100)+'%';
  fill.style.setProperty('--fill-color', color);
  phaseEl.textContent = label;
  phaseEl.style.color = color;
  timeEl.style.color = color;
  timeEl.textContent = (lt.phase === 'rest' || isTimedLift || lt.phase === 'warmup' || lt.phase === 'getready') ? ln(lt.remaining) : (lt.phase === 'lift' ? '💪' : '--');

  if(lt.phase === 'idle'){
    setLbl.textContent = t('st_pickday');
    exNowEl.textContent = '';
    repsLbl.textContent = '';
  } else if(lt.phase === 'getready'){
    setLbl.textContent = t('st_getready');
    exNowEl.textContent = lt.exercises[lt.idx] ? lt.exercises[lt.idx].name : '';
    repsLbl.textContent = '';
  } else if(lt.phase === 'warmup'){
    setLbl.textContent = `${t('st_warmup')} ${ln(lt.warmupStepIdx+1)} / ${ln(lt.warmupSteps.length)}`;
    exNowEl.textContent = curWarmupStep ? curWarmupStep.label : '';
    repsLbl.textContent = '';
  } else if(lt.phase === 'done'){
    setLbl.textContent = '';
    exNowEl.textContent = '';
    repsLbl.textContent = '';
  } else {
    // CRITICAL CIRCUIT RULE: a CIRCUIT day shows "Round X / Y" — the round
    // count belongs to the whole day, never to a single exercise — instead
    // of the STRENGTH day's per-exercise "Set X / Y". The exercise itself is
    // already shown by name in exNowEl below, so no extra index is needed.
    setLbl.textContent = lt.circuitMode
      ? (lt.totalRounds > 1 ? `${t('lbl_rounds')} ${ln(lt.round)} / ${ln(lt.totalRounds)}` : '')
      : (lt.totalSets > 1 ? `${t('st_set')} ${ln(lt.set)} / ${ln(lt.totalSets)}` : '');
    if(lt.phase === 'rest'){
      // Read the next step straight off the sequence rather than guessing
      // from set/round math — this is correct for both STRAIGHT mode and
      // for a CIRCUIT wrapping from the last exercise of one round into the
      // first exercise of the next.
      const nextStep = lt.sequence[lt.seqPos+1];
      const nextEx = nextStep ? lt.exercises[nextStep.idx] : null;
      exNowEl.textContent = nextEx ? (t('st_next') + ' ' + nextEx.name) : t('st_rest');
      repsLbl.textContent = nextEx && nextEx.reps && !(nextEx.mode==='time' && nextEx.holdSec) ? `${nextEx.reps} ${tphrase('reps_word')}` : '';
    } else {
      exNowEl.textContent = lt.exercises[lt.idx].name;
      if(isTimedLift){
        repsLbl.textContent = '';
      } else if(curEx && curEx.reps){
        repsLbl.textContent = `${curEx.reps} ${tphrase('reps_word')}`;
      } else {
        repsLbl.textContent = '';
      }
    }
  }
}

// ═══════════════════════════ INIT ═══════════════════════════
let appInitialized = false;
function startApp(){
  updateLockIndicator();
  if(typeof state.notes === 'string' && state.notes.trim() && (!Array.isArray(state.notesList) || !state.notesList.length)){
    state.notesList = [{ id: genNoteId(), text: state.notes.trim(), date: Date.now() }];
    state.notes = '';
  }
  if(!Array.isArray(state.notesList)) state.notesList = [];
  renderNotesPreview();
  state.profile.language = APP_LANG;
  applyLanguage(APP_LANG);
  applyTheme();
  refreshVoiceList();
  populateLtVoiceSelect();
  if('speechSynthesis' in window){
    window.speechSynthesis.onvoiceschanged = function(){ refreshVoiceList(); populateLtVoiceSelect(); };
  }
  renderProfile();
  renderAgenda();
  renderAgendaCal();
  renderWorkouts();
  renderTodos();
  cdSyncFromInputs();
  ctRender();
  ltPopulatePrograms();
  ltRender();
  renderWarmupLibrary();
  renderCheckinPeriodChips();
  renderCheckinMetricSelect();
  renderMeasureTypeList();
  resetActivityTimer();

  if(appInitialized) return; // avoid re-registering intervals/listeners on every re-unlock after auto-lock
  appInitialized = true;
  restoreLastTab(); // only on the true first load of this page — not on every re-unlock

  setInterval(()=>{ renderAgenda(); }, 60000);

  const backBtn = document.getElementById('backToTopBtn');
  window.addEventListener('scroll', ()=>{
    backBtn.classList.toggle('show', window.scrollY > 280);
  }, {passive:true});

  ['click','touchstart','keydown','scroll','mousemove'].forEach(evt=>{
    window.addEventListener(evt, resetActivityTimer, {passive:true});
  });
  setInterval(checkAutoLock, 15000);
}
// ═══════════════════ BACK BUTTON NAVIGATION ═══════════════════
// Makes the phone/browser Back button behave like a normal app (e.g.
// YouTube): it first closes whatever popup/dropdown/menu is open, then
// steps back through your recently visited tabs, and only actually
// leaves the page once there's nothing left inside the app to go back to.
(function(){
  const OVERLAY_SELECTOR = '.modal-overlay, .dropdown-panel, .tools-picker, .lightbox';
  let overlayStack = [];
  let suppressTabPush = false;

  function findCloseFn(id){
    if(!id) return null;
    const cap = id.charAt(0).toUpperCase() + id.slice(1);
    const names = /Modal$/.test(cap) ? ['close'+cap, 'close'+cap.replace(/Modal$/,'')] : ['close'+cap, 'close'+cap+'Modal'];
    for(let i=0;i<names.length;i++){ if(typeof window[names[i]] === 'function') return window[names[i]]; }
    return null;
  }
  function closeOverlayEl(el){
    if(el.classList.contains('tools-picker')){ closeAllSubviewMenus(); return; }
    const fn = findCloseFn(el.id);
    if(fn){ try{ fn(); return; }catch(e){} }
    el.classList.remove('open');
  }

  // Prevents the page behind an open modal/dropdown/lightbox from
  // scrolling (which previously caused the background to glitch/scroll
  // whenever a popup was open). Locks by pinning <body> in place at its
  // current scroll position, and restores that exact scroll position
  // when the last open overlay closes.
  let savedScrollY = 0;
  function lockBodyScroll(){
    if(document.body.classList.contains('body-scroll-locked')) return;
    savedScrollY = window.scrollY || document.documentElement.scrollTop || 0;
    document.body.classList.add('body-scroll-locked');
    document.body.style.top = (-savedScrollY) + 'px';
  }
  function unlockBodyScroll(){
    if(!document.body.classList.contains('body-scroll-locked')) return;
    document.body.classList.remove('body-scroll-locked');
    document.body.style.top = '';
    window.scrollTo(0, savedScrollY);
  }

  new MutationObserver(function(mutations){
    mutations.forEach(function(m){
      if(m.type !== 'attributes' || m.attributeName !== 'class') return;
      const el = m.target;
      if(!el.classList || el.id === 'lockScreen') return;
      if(!(el.matches && el.matches(OVERLAY_SELECTOR))) return;
      const nowOpen = el.classList.contains('open');
      const idx = overlayStack.indexOf(el);
      if(nowOpen && idx === -1){
        overlayStack.push(el);
        history.pushState({appOverlay:true}, '');
      } else if(!nowOpen && idx !== -1){
        overlayStack.splice(idx,1);
      }
    });
    if(overlayStack.length > 0) lockBodyScroll(); else unlockBodyScroll();
  }).observe(document.body, {attributes:true, attributeFilter:['class'], subtree:true});

  window.pushTabHistory = function(name){
    if(suppressTabPush) return;
    history.pushState({appTab:name}, '');
  };

  window.addEventListener('popstate', function(e){
    if(overlayStack.length){
      const top = overlayStack.pop();
      closeOverlayEl(top);
      return;
    }
    const state = e.state;
    if(state && state.appTab){
      suppressTabPush = true;
      switchTab(state.appTab);
      suppressTabPush = false;
    }
    // otherwise there's nothing left inside the app to go back to — let
    // the browser/phone handle Back normally from here (leaves the page)
  });

  window.addEventListener('load', function(){
    history.replaceState({appTab: currentTabName()}, '');
  }, {once:true});
})();

// ═══════════════════════════ STATIC EVENT WIRING (CSP: no inline handlers) ═══════════════════════════
function wireStaticHandlers(){
  function bind(id, evt, fn){
    var el = document.querySelector('[data-h="'+id+'"]') || document.querySelector('[data-h2="'+id+'"]');
    if(el) el.addEventListener(evt, fn);
    else if(window.console) console.warn('wireStaticHandlers: no element found for', id);
  }
  bind('h1','keydown',function(event){ if(event.key==='Enter')attemptUnlock() });
  bind('h2','click',function(event){ attemptUnlock() });
  bind('h3','click',function(event){ confirmResetApp() });
  bind('h4','click',function(event){ closePwModal() });
  bind('h5','click',function(event){ savePwModal() });
  bind('h6','click',function(event){ switchTab('tools') });
  bind('h8','click',function(event){ switchTab('agenda') });
  bind('h9','click',function(event){ switchTab('todo') });
  bind('h10','click',function(event){ switchTabWithMenu('timers') });
  bind('h11','click',function(event){ switchTabWithMenu('tools') });
  bind('h12','click',function(event){ switchToolsView('profile') });
  bind('h13','click',function(event){ switchToolsView('fitness') });
  bind('h14','click',function(event){ switchToolsView('checkin') });
  bind('h15','click',function(event){ switchToolsView('website') });
  bind('h17','click',function(event){ toggleBannerEditDropdown() });
  bind('h18','click',function(event){ closeBannerEditModal() });
  bind('h25','click',function(event){ toggleSettingsGroup(this) });
  bind('h26','click',function(event){ toggleSettingsGroup(this) });
  bind('h27','keydown',function(event){ if(event.key==='Enter'){applyCustomGoal();return false;} });
  bind('h28','click',function(event){ applyCustomGoal() });
  bind('h29','click',function(event){ clearCustomGoal() });
  bind('h30','change',function(event){ updateWaterCupSettings() });
  bind('h31','change',function(event){ updateWaterCupSettings() });
  bind('h32','change',function(event){ updateWaterCupSettings() });
  bind('h33','change',function(event){ updateWaterCupSettings() });
  bind('h34','change',function(event){ updateWaterCupSettings() });
  bind('h35','change',function(event){ updateWaterCupSettings() });
  bind('h36','click',function(event){ toggleSettingsGroup(this) });
  bind('h37','keydown',function(event){ if(event.key==='Enter'){addMeasureType();return false;} });
  bind('h38','click',function(event){ addMeasureType() });
  bind('h39','click',function(event){ toggleSettingsGroup(this) });
  bind('h40','click',function(event){ openExportModal() });
  bind('h41','click',function(event){ document.getElementById('importFileInput').click() });
  bind('h42','change',function(event){ handleImportFile(this) });
  bind('h43','click',function(event){ toggleSettingsGroup(this) });
  bind('h44','change',function(event){ updateAutoLockSetting(this.value) });
  bind('h45','click',function(event){ toggleSettingsGroup(this) });
  bind('h46','click',function(event){ openEraseModal() });
  bind('h47','keydown',function(event){ if(event.key==='Enter')addProfileGoal() });
  bind('h48','click',function(event){ addProfileGoal() });
  bind('h49','click',function(event){ toggleProgressCard() });
  bind('h245','click',function(event){ toggleProgressMapCard() });
  bind('h252','click',function(event){ toggleGoalsCard() });
  bind('h254','click',function(event){ toggleDailyTodoCard() });
  bind('h255','click',function(event){ toggleLtOptionsDropdown() });
  bind('h50','click',function(event){ openProgressPhotoEditor() });
  bind('h51','click',function(event){ toggleProgressPhotoView(event) });
  bind('h52','input',function(event){ debouncedSave() });
  bind('h53','input',function(event){ debouncedSave() });
  bind('h54','input',function(event){ debouncedSave() });
  bind('h55','input',function(event){ debouncedSave() });
  bind('h56','input',function(event){ debouncedSave() });
  bind('h57','input',function(event){ debouncedSave() });
  bind('h58','input',function(event){ calcRun() });
  bind('h59','change',function(event){ calcRun() });
  bind('h60','input',function(event){ calcRun() });
  bind('h61','input',function(event){ calcRun() });
  bind('h62','change',function(event){ calcRun() });
  bind('h63','change',function(event){ calcOnGoalChange() });
  bind('h64','input',function(event){ calcRun() });
  bind('h65','change',function(event){ calcRun() });
  bind('h66','change',function(event){ renderCheckin() });
  bind('h67','change',function(event){ wlOnExerciseChange() });
  bind('h68','input',function(event){ wlOnCustomNameInput() });
  bind('h69','click',function(event){ wlAddSetRow() });
  bind('h70','click',function(event){ wlSaveEntry() });
  bind('h71','input',function(event){ checkEraseConfirmInput() });
  bind('h72','click',function(event){ closeEraseModal() });
  bind('h73','click',function(event){ performEraseAll() });
  bind('h74','input',function(event){ checkExportPasswordMatch() });
  bind('h75','input',function(event){ checkExportPasswordMatch() });
  bind('h76','click',function(event){ closeExportModal() });
  bind('h77','click',function(event){ performExport() });
  bind('h78','keydown',function(event){ if(event.key==='Enter')performImport() });
  bind('h79','click',function(event){ closeImportModal() });
  bind('h80','click',function(event){ performImport() });
  bind('h81','click',function(event){ document.getElementById('programFileInput').click() });
  bind('h82','click',function(event){ downloadProgramTemplate('txt') });
  bind('h83','click',function(event){ downloadProgramTemplate('csv') });
  bind('h84','change',function(event){ importProgramFile(this) });
  bind('h85','click',function(event){ closeExternalProgramModal() });
  bind('h86','click',function(event){ closeLightbox() });
  bind('h87','click',function(event){ lbNavigate(-1) });
  bind('h88','click',function(event){ lbNavigate(1) });
  bind('h89','click',function(event){ lbZoom(-0.05) });
  bind('h90','click',function(event){ lbZoom(0.05) });
  bind('h91','click',function(event){ lbResetZoom() });
  bind('h92','click',function(event){ agendaCalPrev() });
  bind('h93','click',function(event){ agendaCalNext() });
  bind('h94','click',function(event){ agendaCalToday() });
  bind('h95','click',function(event){ handleStartBtn() });
  bind('h96','click',function(event){ openStartDateModal() });
  bind('h97','click',function(event){ resetChallenge() });
  bind('h243','click',function(event){ openChallengeSettingsModal() });
  bind('h244','click',function(event){ closeChallengeSettingsModal() });
  bind('h98','click',function(event){ openNotesModal() });
  bind('h99','keydown',function(event){ if(event.key==='Enter'){openNotesModal();} });
  bind('h100','click',function(event){ setExMode('reps') });
  bind('h101','click',function(event){ setExMode('time') });
  bind('h240','click',function(event){ pickExSets(1) });
  bind('h102','click',function(event){ pickExSets(2) });
  bind('h103','click',function(event){ pickExSets(3) });
  bind('h104','click',function(event){ pickExSets(4) });
  bind('h105','click',function(event){ pickExSets(5) });
  bind('h106','click',function(event){ pickExSets(6) });
  bind('h107','input',function(event){ refreshExSetsChipState() });
  bind('h108','click',function(event){ pickExReps('6-8') });
  bind('h109','click',function(event){ pickExReps('8-10') });
  bind('h110','click',function(event){ pickExReps('10-12') });
  bind('h111','click',function(event){ pickExReps('12-15') });
  bind('h112','click',function(event){ pickExReps('15-20') });
  bind('h113','click',function(event){ pickExReps('AMRAP') });
  bind('h114','input',function(event){ refreshExSetsChipState() });
  bind('h115','click',function(event){ pickExHold(15) });
  bind('h116','click',function(event){ pickExHold(20) });
  bind('h117','click',function(event){ pickExHold(30) });
  bind('h118','click',function(event){ pickExHold(45) });
  bind('h119','click',function(event){ pickExHold(60) });
  bind('h120','click',function(event){ pickExHold(90) });
  bind('h121','input',function(event){ refreshExSetsChipState() });
  bind('h122','click',function(event){ pickExRest(30) });
  bind('h123','click',function(event){ pickExRest(45) });
  bind('h124','click',function(event){ pickExRest(60) });
  bind('h125','click',function(event){ pickExRest(90) });
  bind('h126','click',function(event){ pickExRest(120) });
  bind('h127','input',function(event){ refreshExSetsChipState() });
  bind('h128','click',function(event){ closeExSetsModal() });
  bind('h129','click',function(event){ saveExSetsModal() });
  bind('h130','click',function(event){ closeExLibraryModal() });
  bind('h131','click',function(event){ closeCustomExerciseModal() });
  bind('h132','click',function(event){ saveCustomExerciseModal() });
  bind('h133','click',function(event){ closeWarmupLibraryModal() });
  bind('h134','click',function(event){ wbAddBlock() });
  bind('h135','click',function(event){ closeWarmupBuilderModal() });
  bind('h136','click',function(event){ saveWarmupBuilder() });
  bind('h137','click',function(event){ wbSetMode('time') });
  bind('h138','click',function(event){ wbSetMode('reps') });
  bind('h139','click',function(event){ wbPickReps('10') });
  bind('h140','click',function(event){ wbPickReps('15') });
  bind('h141','click',function(event){ wbPickReps('20') });
  bind('h142','click',function(event){ wbPickReps('25') });
  bind('h143','click',function(event){ wbPickReps('30') });
  bind('h144','input',function(event){ wbRefreshChipState() });
  bind('h145','click',function(event){ wbPickSec(15) });
  bind('h146','click',function(event){ wbPickSec(20) });
  bind('h147','click',function(event){ wbPickSec(30) });
  bind('h148','click',function(event){ wbPickSec(45) });
  bind('h149','click',function(event){ wbPickSec(60) });
  bind('h150','click',function(event){ wbPickSec(90) });
  bind('h151','input',function(event){ wbRefreshChipState() });
  bind('h152','click',function(event){ wbPickSets(1) });
  bind('h153','click',function(event){ wbPickSets(2) });
  bind('h154','click',function(event){ wbPickSets(3) });
  bind('h155','click',function(event){ wbPickSets(4) });
  bind('h156','click',function(event){ wbPickSets(5) });
  bind('h157','input',function(event){ wbRefreshChipState() });
  bind('h158','click',function(event){ wbPickRest(0) });
  bind('h159','click',function(event){ wbPickRest(10) });
  bind('h160','click',function(event){ wbPickRest(15) });
  bind('h161','click',function(event){ wbPickRest(20) });
  bind('h162','click',function(event){ wbPickRest(30) });
  bind('h163','input',function(event){ wbRefreshChipState() });
  bind('h164','click',function(event){ wbPickRestAfter(0) });
  bind('h165','click',function(event){ wbPickRestAfter(10) });
  bind('h166','click',function(event){ wbPickRestAfter(15) });
  bind('h167','click',function(event){ wbPickRestAfter(20) });
  bind('h168','click',function(event){ wbPickRestAfter(30) });
  bind('h169','input',function(event){ wbRefreshChipState() });
  bind('h170','click',function(event){ closeWarmupBlockModal() });
  bind('h171','click',function(event){ wbSaveBlock() });
  bind('h172','change',function(event){ peFileSelected(this) });
  bind('h173','click',function(event){ peStepZoom(-0.05) });
  bind('h174','click',function(event){ peStepZoom(0.05) });
  bind('h175','click',function(event){ peResetZoom() });
  bind('h176','click',function(event){ peFlip() });
  bind('h177','click',function(event){ peRemove() });
  bind('h178','click',function(event){ closePhotoEditor() });
  bind('h179','click',function(event){ peSave() });
  bind('h180','click',function(event){ closePhotoDateModal() });
  bind('h181','click',function(event){ savePhotoDateModal() });
  bind('h182','click',function(event){ closeStartDateModal() });
  bind('h183','click',function(event){ saveStartDateModal() });
  bind('h184','click',function(event){ closeAgendaEntry() });
  bind('h185','input',function(event){ updateEntrySleep(this.value) });
  bind('h186','click',function(event){ resetEntryWater() });
  bind('h187','keydown',function(event){ if(event.key==='Enter'){addEntryFood();return false;} });
  bind('h188','click',function(event){ addEntryFood() });
  bind('h189','input',function(event){ updateEntryNote(this.value) });
  bind('h190','click',function(event){ closeAgendaEntry() });
  bind('h191','click',function(event){ addNote() });
  bind('h192','click',function(event){ closeNotesModal() });
  bind('h193','keydown',function(event){ if(event.key==='Enter')addTodo() });
  bind('h194','click',function(event){ addTodo() });
  bind('h250','keydown',function(event){ if(event.key==='Enter')addDailyTodo() });
  bind('h251','click',function(event){ addDailyTodo() });
  bind('h195','click',function(event){ switchTimerView('lifting') });
  bind('h196','click',function(event){ switchTimerView('countdown') });
  bind('h197','click',function(event){ switchTimerView('circuit') });
  bind('h198','click',function(event){ cdStart() });
  bind('h199','click',function(event){ cdPause() });
  bind('h200','click',function(event){ cdReset() });
  bind('h201','click',function(event){ ctStart() });
  bind('h202','click',function(event){ ctPause() });
  bind('h203','click',function(event){ ctSkip() });
  bind('h204','click',function(event){ ctReset() });
  bind('h205','change',function(event){ ltOnProgramChange() });
  bind('h206','change',function(event){ ltOnBlockChange() });
  bind('h207','change',function(event){ ltOnDayChange() });
  bind('h208','change',function(event){ ltSetWarmupChoice(this.value) });
  bind('h253','change',function(event){ ltOnVoiceChange() });
  bind('h209','click',function(event){ ltDone() });
  bind('h210','click',function(event){ ltStart() });
  bind('h211','click',function(event){ ltSkip() });
  bind('h212','click',function(event){ ltReset() });
  bind('h248','click',function(event){ ltAdjustRest(-LT_REST_STEP) });
  bind('h249','click',function(event){ ltAdjustRest(LT_REST_STEP) });
  bind('h213','click',function(event){ toggleWorkoutProgramCard() });
  bind('h214','click',function(event){ toggleSettingsGroup(this) });
  bind('h215','click',function(event){ addProgram() });
  bind('h216','click',function(event){ deleteProgram() });
  bind('h217','click',function(event){ openExternalProgramModal() });
  bind('h218','change',function(event){ selectProgram(parseInt(this.value)) });
  bind('h219','click',function(event){ toggleSettingsGroup(this) });
  bind('h220','click',function(event){ addBlock() });
  bind('h221','click',function(event){ deleteBlock() });
  bind('h222','click',function(event){ toggleSettingsGroup(this) });
  bind('h223','click',function(event){ addDay() });
  bind('h224','click',function(event){ deleteDay() });
  bind('h246','click',function(event){ duplicateBlock() });
  bind('h247','click',function(event){ duplicateDay() });
  bind('h225','click',function(event){ toggleRestDay() });
  bind('h239','click',function(event){ toggleCircuitMode() });
  bind('h226','click',function(event){ toggleProgramManage() });
  bind('h227','click',function(event){ toggleSettingsGroup(this) });
  bind('h228','click',function(event){ openWarmupLibraryModal(true) });
  bind('h229','click',function(event){ openWarmupBuilder(null, true) });
  bind('h230','click',function(event){ toggleSettingsGroup(this) });
  bind('h231','click',function(event){ openExLibraryModal() });
  bind('h232','click',function(event){ openCustomExerciseModal() });
  bind('h233','click',function(event){ scrollToTop() });
  bind('h234','click',function(event){ closeAllSubviewMenus() });
  bind('h235','click',function(event){ document.getElementById('lockKeyFileInput').click() });
  bind('h236','change',function(event){ handleLockKeyFileSelect(this) });
  bind('h237','click',function(event){ document.getElementById('importKeyFileInput').click() });
  bind('h238','change',function(event){ handleImportKeyFileSelect(this) });
  bind('h241','click',function(event){ openCheckinHistory() });
  bind('h242','click',function(event){ closeCheckinHistory() });
}
document.addEventListener('DOMContentLoaded', wireStaticHandlers);

// ═══════════════════════════ DYNAMIC EVENT DELEGATION (CSP: no inline handlers in rendered HTML) ═══════════════════════════
// Rendered lists (exercises, tabs, library items, kanban cards, etc.) carry a
// data-action="fnName" attribute instead of onclick/oninput. These two
// delegated listeners on document handle every one of them, including
// content that gets re-rendered later via innerHTML.
const DYNAMIC_CLICK_ACTIONS = {
  openSetPasswordModal: function(el){ openSetPasswordModal(); },
  removePassword: function(el){ removePassword(); },
  updateProfileTheme: function(el){ updateProfileTheme(el.dataset.key); },
  setCustomFullTheme: function(el){ setCustomFullTheme(); },
  updateProfileAccent: function(el){ updateProfileAccent(el.dataset.key); },
  setGoal: function(el){ setGoal(parseInt(el.dataset.idx, 10)); },
  openAgendaEntry: function(el){ openAgendaEntry(el.dataset.key); },
  addWaterCup: function(el){ addWaterCup(el.dataset.key); },
  deleteEntryFood: function(el){ deleteEntryFood(parseInt(el.dataset.idx, 10)); },
  selectBlock: function(el){ selectBlock(parseInt(el.dataset.idx, 10)); },
  selectDay: function(el){ selectDay(parseInt(el.dataset.idx, 10)); },
  moveExercise: function(el){ moveExercise(parseInt(el.dataset.idx, 10), parseInt(el.dataset.dir, 10)); },
  openExSetsModal: function(el){ openExSetsModal(parseInt(el.dataset.idx, 10)); },
  deleteExercise: function(el){ deleteExercise(parseInt(el.dataset.idx, 10)); },
  wbMoveBlock: function(el){ wbMoveBlock(parseInt(el.dataset.idx, 10), parseInt(el.dataset.dir, 10)); },
  wbEditBlock: function(el){ wbEditBlock(parseInt(el.dataset.idx, 10)); },
  wbDeleteBlock: function(el){ wbDeleteBlock(parseInt(el.dataset.idx, 10)); },
  wbPickName: function(el){ wbPickName(el.dataset.key); },
  openWarmupBuilder: function(el){ openWarmupBuilder(parseInt(el.dataset.id, 10)); },
  deleteWarmup: function(el){ deleteWarmup(parseInt(el.dataset.id, 10)); },
  selectWarmupLibCat: function(el){ selectWarmupLibCat(el.dataset.key); },
  addWarmupFromLibrary: function(el){ addWarmupFromLibrary(parseInt(el.dataset.idx, 10)); },
  selectExLibraryCat: function(el){ selectExLibraryCat(el.dataset.key); },
  addExerciseFromLibrary: function(el){ addExerciseFromLibrary(parseInt(el.dataset.idx, 10)); },
  kbSelectCol: function(el){ kbSelectCol(el.dataset.key); },
  moveTodo: function(el){ moveTodo(parseInt(el.dataset.idx, 10), parseInt(el.dataset.dir, 10)); },
  deleteTodoById: function(el){ deleteTodoById(parseInt(el.dataset.idx, 10)); },
  toggleDailyTodo: function(el){ toggleDailyTodo(parseInt(el.dataset.idx, 10)); },
  deleteDailyTodoById: function(el){ deleteDailyTodoById(parseInt(el.dataset.idx, 10)); },
  toggleProfileGoal: function(el){ toggleProfileGoal(parseInt(el.dataset.idx, 10)); },
  deleteProfileGoal: function(el){ deleteProfileGoal(parseInt(el.dataset.idx, 10)); },
  deleteNote: function(el){ deleteNote(el.dataset.id); },
  openPhotoDateModal: function(el){ openPhotoDateModal(el.dataset.key, parseInt(el.dataset.idx, 10)); },
  openPhotoEditor: function(el){ openPhotoEditor(el.dataset.key, parseInt(el.dataset.idx, 10)); },
  openLightbox: function(el){ openLightbox(el.dataset.key, parseInt(el.dataset.idx, 10)); },
  deletePhoto: function(el){ deletePhoto(el.dataset.key, parseInt(el.dataset.idx, 10)); },
  addPhotoSlot: function(el){ addPhotoSlot(el.dataset.key); },
  setCheckinPeriod: function(el){ setCheckinPeriod(parseInt(el.dataset.idx, 10)); },
  deleteMeasureType: function(el){ deleteMeasureType(parseInt(el.dataset.idx, 10)); },
  wlRemoveSetRow: function(el){ wlRemoveSetRow(parseInt(el.dataset.idx, 10)); },
  wlClearExerciseLog: function(el){ wlClearExerciseLog(); },
  wlDeleteEntry: function(el){ wlDeleteEntry(el.dataset.date); },
  openCheckinHistoryDay: function(el){ openCheckinHistoryDay(el.dataset.key); }
};

const DYNAMIC_INPUT_ACTIONS = {
  setCustomAccent: function(el){ setCustomAccent(el.value); },
  updateEntryMeasure: function(el){ updateEntryMeasure(el.dataset.key, el.value, el.dataset.custom === '1'); },
  updateRestNote: function(el){ updateRestNote(el.value); },
  updateExercise: function(el){ updateExercise(parseInt(el.dataset.idx, 10), el.dataset.field, el.value); },
  wlUpdateSetField: function(el){ wlUpdateSetField(parseInt(el.dataset.idx, 10), el.dataset.field, el.value); },
  updateEntryFood: function(el){ updateEntryFood(parseInt(el.dataset.idx, 10), el.value); },
  updateDayRounds: function(el){ updateDayRounds(el.value); }
};

document.addEventListener('click', function(event){
  const el = event.target.closest('[data-action]');
  if(!el) return;
  const fn = DYNAMIC_CLICK_ACTIONS[el.dataset.action];
  if(!fn) return;
  if(el.dataset.stop === '1') event.stopPropagation();
  fn(el, event);
});

document.addEventListener('input', function(event){
  const el = event.target.closest('[data-action]');
  if(!el) return;
  const fn = DYNAMIC_INPUT_ACTIONS[el.dataset.action];
  if(fn) fn(el, event);
});

// ═══════════════════════════ DRAG-TO-REORDER (Workout Program cards) ═══════════════════════════
// Long-press-free drag reordering for exercise cards and warm-up-builder blocks, driven by
// Pointer Events so the same code handles mouse (desktop) and touch (mobile) alike. Replaces
// the old ↑/↓ arrow buttons. Grab the small dot handle on the left of a card and drag it to a
// new spot in the list; the card swaps with whichever neighbor its center crosses.
let vdrDragEl = null, vdrStartY = 0, vdrContainer = null, vdrGroup = null;
const VDR_GROUPS = {
  exercise: { containerSel: '#dayContent', itemSel: '.ex-card' },
  warmupblock: { containerSel: '#wbBlockList', itemSel: '.wb-block-item' }
};
function vdrItems(){ return Array.from(vdrContainer.querySelectorAll(VDR_GROUPS[vdrGroup].itemSel)); }
function vdrPointerDown(event){
  const handle = event.target.closest('.drag-handle');
  if(!handle) return;
  const group = handle.dataset.dragGroup;
  const cfg = VDR_GROUPS[group];
  if(!cfg) return;
  const container = handle.closest(cfg.containerSel);
  const item = handle.closest(cfg.itemSel);
  if(!container || !item) return;
  event.preventDefault();
  vdrGroup = group; vdrContainer = container; vdrDragEl = item;
  vdrStartY = event.clientY;
  item.classList.add('dragging-card');
  item.style.position = 'relative';
  item.style.zIndex = '10';
  try{ handle.setPointerCapture(event.pointerId); }catch(err){}
  document.addEventListener('pointermove', vdrPointerMove, {passive:false});
  document.addEventListener('pointerup', vdrPointerUp);
  document.addEventListener('pointercancel', vdrPointerUp);
}
function vdrPointerMove(event){
  if(!vdrDragEl) return;
  event.preventDefault();
  const dy = event.clientY - vdrStartY;
  vdrDragEl.style.transform = `translateY(${dy}px)`;
  const list = vdrItems();
  const idx = list.indexOf(vdrDragEl);
  const dragRect = vdrDragEl.getBoundingClientRect();
  const dragCenter = dragRect.top + dragRect.height/2;
  const prev = list[idx-1], next = list[idx+1];
  if(prev){
    const r = prev.getBoundingClientRect();
    if(dragCenter < r.top + r.height/2){
      vdrContainer.insertBefore(vdrDragEl, prev);
      vdrStartY = event.clientY; vdrDragEl.style.transform = 'translateY(0px)';
      return;
    }
  }
  if(next){
    const r = next.getBoundingClientRect();
    if(dragCenter > r.top + r.height/2){
      vdrContainer.insertBefore(vdrDragEl, next.nextSibling);
      vdrStartY = event.clientY; vdrDragEl.style.transform = 'translateY(0px)';
      return;
    }
  }
}
function vdrPointerUp(){
  if(!vdrDragEl) return;
  vdrDragEl.classList.remove('dragging-card');
  vdrDragEl.style.position = '';
  vdrDragEl.style.zIndex = '';
  vdrDragEl.style.transform = '';
  document.removeEventListener('pointermove', vdrPointerMove);
  document.removeEventListener('pointerup', vdrPointerUp);
  document.removeEventListener('pointercancel', vdrPointerUp);
  const group = vdrGroup;
  const newOrder = vdrItems().map(el => parseInt(el.dataset.idx, 10));
  vdrDragEl = null; vdrContainer = null; vdrGroup = null;
  if(group === 'exercise'){
    const d = curDay();
    d.exercises = newOrder.map(i => d.exercises[i]);
    renderDayContent(); save();
  } else if(group === 'warmupblock'){
    wbBlocks = newOrder.map(i => wbBlocks[i]);
    wbRenderBlockList();
  }
}
document.addEventListener('pointerdown', vdrPointerDown);

// ═══════════════════════════ DRAG-TO-REORDER (To-Do board — desktop/mouse only, see CSS) ═══════════════════════════
// Mobile keeps the ◀/▶ arrow buttons (touch drag-and-drop between kanban columns is unreliable
// and fights with scrolling), but on wider screens where all three columns are visible side by
// side, cards can be dragged straight from column to column and reordered within a column.
let kbDragId = null;
function kbClearDragoverMarks(){
  document.querySelectorAll('.kb-card.kb-dragover-before,.kb-card.kb-dragover-after').forEach(c=>c.classList.remove('kb-dragover-before','kb-dragover-after'));
}
function kbReorder(dragId, colKey, targetId, before){
  const fromIdx = state.todos.findIndex(t=>t.id===dragId);
  if(fromIdx < 0) return;
  const [item] = state.todos.splice(fromIdx, 1);
  item.status = colKey;
  if(targetId === null){
    state.todos.push(item);
  } else {
    let toIdx = state.todos.findIndex(t=>t.id===targetId);
    if(toIdx < 0) toIdx = state.todos.length;
    else if(!before) toIdx += 1;
    state.todos.splice(toIdx, 0, item);
  }
  kbActiveCol = colKey;
  renderTodos(); save();
}
document.addEventListener('dragstart', function(event){
  const card = event.target.closest('.kb-card');
  if(!card) return;
  kbDragId = parseInt(card.dataset.id, 10);
  card.classList.add('kb-dragging');
  if(event.dataTransfer){
    event.dataTransfer.effectAllowed = 'move';
    try{ event.dataTransfer.setData('text/plain', String(kbDragId)); }catch(err){}
  }
});
document.addEventListener('dragend', function(event){
  const card = event.target.closest('.kb-card');
  if(card) card.classList.remove('kb-dragging');
  kbClearDragoverMarks();
  kbDragId = null;
});
document.addEventListener('dragover', function(event){
  if(kbDragId === null) return;
  const card = event.target.closest('.kb-card');
  if(card){
    event.preventDefault();
    const rect = card.getBoundingClientRect();
    const before = (event.clientY - rect.top) < rect.height/2;
    kbClearDragoverMarks();
    card.classList.toggle('kb-dragover-before', before);
    card.classList.toggle('kb-dragover-after', !before);
    return;
  }
  if(event.target.closest('.kb-col-cards')) event.preventDefault();
});
document.addEventListener('drop', function(event){
  if(kbDragId === null) return;
  const card = event.target.closest('.kb-card');
  if(card){
    event.preventDefault();
    const targetId = parseInt(card.dataset.id, 10);
    const col = card.closest('.kb-col');
    const rect = card.getBoundingClientRect();
    const before = (event.clientY - rect.top) < rect.height/2;
    kbClearDragoverMarks();
    if(col) kbReorder(kbDragId, col.dataset.col, targetId, before);
    return;
  }
  const col = event.target.closest('.kb-col');
  if(col){
    event.preventDefault();
    kbReorder(kbDragId, col.dataset.col, null, false);
  }
});

window.addEventListener('load', bootstrap);

// PWA: cache the app for offline use / installability. Purely additive — if
// this fails (older browser, sw.js missing, etc.) the app works exactly as
// it did before, just without offline caching.
if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch((e) => dbg('SW registration failed', e));
  });
}
