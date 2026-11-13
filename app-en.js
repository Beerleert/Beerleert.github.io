// ═══════════════════════════ APP LANGUAGE: ENGLISH (US) ═══════════════════════════
// The app is English (US) only. Text lives in TRANSLATIONS / features-i18n.js (and in the HTML as its fallback).
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

const DEFAULT_PROGRAMS = DEFAULT_PROGRAMS_EN;

let state = {
  goalDays: 84,
  startTimestamp: null,
  completedDays: [],
  notes: '',
  notesList: [],
  todos: [],
  dailyTodos: [], // recurring daily checklist; each item's done-state is derived from its doneOn date vs today, so it auto-resets every day
  dailyTodoLog: {}, dailyTodoReg: {}, // Daily To-Do tracker (Check-in page): what was ticked on every day, and the register of tasks - see BSCore.deedsSync
  reminders: [], // any number of reminders per day: [{id, date:'YYYY-MM-DD', time:'HH:MM', text, done}]
  programs: JSON.parse(JSON.stringify(DEFAULT_PROGRAMS)),
  activeProgram: 0, activeBlock: 0, activeDay: 0,
  profile: { name:'', title:"My Goals, Insha'Allah", photo: null, photoId: null, timezone: 'Europe/Amsterdam', language: 'en', theme: 'orange', customThemeColor: null, accent: 'orange', customBgColor: null, customCardColor: null, customTextColor: null, bannerBgType: 'default', bannerBgColor: '#1a1e24', bannerBgPhotoId: null, bannerBgPosX: 50, bannerBgPosY: 50, bannerBgZoom: 1, bannerBgFlip: false, photoPosX: 50, photoPosY: 50, photoZoom: 1, photoFlip: false, ttsVoiceURI: null, skin: 'medieval', skinIcon: true, iconStyle: 'minimal', accentCyber: 'amber', customThemeColorCyber: null },
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
  tools: { calcWeight:'', calcGoal:'maintain', calcAge:'', calcGender:'male', calcHeight:'', calcActivity:'moderate', calcRateVal:'0.5', calcRateUnit:'kg',
           calcBodyFat:'', calcGoalWeight:'', calcLevel:'good', calcDiet:'all', calcMeals:'3', calcVariant:0,
           calcNeck:'', calcWaist:'', calcHip:'', calcBfMethod:'tape' },
  warmups: [],
  soundSettings: { volume: 0.75, type: 'beep' },
  workoutLog: {}, // { [exerciseName]: [ {date:'YYYY-MM-DD', sets:[{reps,weight}]} , ... ] }
  workoutLogLastExercise: '',
  ltProgramIdx: 0, ltBlockIdx: 0, ltDayIdx: 0, ltWarmupId: '' // remembers the Workout tab's program/block/day/warm-up choice
};

// What the app keeps in its state has a shape (a list is a list, a group of settings is an object). Saved and imported data is JSON, so a
// damaged or hand-made file could hold anything; fixStateShape() puts the app's own empty list / group back where the shape is wrong
// (and leaves everything that is right exactly as it is), so a bad value cannot make a screen throw before it is even drawn.
const DEFAULT_STATE_SHAPE = JSON.parse(JSON.stringify(state));
function fixStateShape(target, shape, depth){
  if(!target || typeof target !== 'object' || Array.isArray(target)) return target;
  shape = shape || DEFAULT_STATE_SHAPE;
  depth = depth == null ? 1 : depth;
  Object.keys(shape).forEach(k => {
    const d = shape[k], v = target[k];
    if(Array.isArray(d)){
      if(!Array.isArray(v)) target[k] = JSON.parse(JSON.stringify(d));
    } else if(d && typeof d === 'object'){
      if(!v || typeof v !== 'object' || Array.isArray(v)) target[k] = JSON.parse(JSON.stringify(d));
      else if(depth > 0) fixStateShape(v, d, depth - 1);
    }
  });
  return target;
}
// JSON can carry a key called "__proto__"; Object.assign would turn it into the prototype of the object it fills. Take it out first.
function dropProto(o){
  if(o && typeof o === 'object' && Object.prototype.hasOwnProperty.call(o, '__proto__')) delete o.__proto__;
  return o;
}
const STORE_KEY = 'forgeTrackerState';
const META_KEY = 'forgeTrackerMeta';
const LAST_TAB_KEY = 'forgeTrackerLastTab'; // remembers which main tab (agenda/todo/timers/tools) was open, so re-opening the app returns you there
// Upper bounds on user-selected files before we even attempt to read them — without
// these, selecting an absurdly large file (an oversized image, a huge JSON/CSV) would
// have the browser try to buffer the whole thing via FileReader/JSON.parse, which can
// freeze the tab or exhaust memory on a phone. These are generous, not tight: they're
// meant to stop a multi-GB accident/attack, not to constrain legitimate use.
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

// Set when the app is about to erase everything and start over: from then on nothing may be written (a save that was still
// waiting - or the one the page flushes as it closes - would bring the erased data straight back).
let saveFrozen = false;
function freezeSaves(){
  saveFrozen = true;
  clearTimeout(saveTimeout);
  saveTimeout = null;
}
// The password screen is up and the key is gone (the same test as bootstrap() makes). The state in memory is then either not loaded
// yet (only the empty defaults) or must not be written in the clear: saving now would replace the encrypted copy with that.
function savesBlockedByLock(){
  const m = getMeta();
  return !!(m.locked && (m.salt || m.keyFileEnabled) && !cryptoKey);
}
async function save(){
  if(saveFrozen || savesBlockedByLock()) return false;
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
        if(!parsed.enc){ state = fixStateShape(Object.assign(state, dropProto(parsed))); loadedLegacyPlaintext = true; }
      }
      // Plaintext storage is allowed when the user has not enabled App Lock.
    }catch(e){}
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
      state = fixStateShape(Object.assign(state, dropProto(decrypted)));
    }
    cryptoKey = key;
    pendingLockKeyFile = null;
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
  freezeSaves();
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
  freezeSaves();
  try{ localStorage.removeItem(STORE_KEY); }catch(e){}
  try{ localStorage.removeItem(META_KEY); }catch(e){}
  try{ localStorage.removeItem('bsSkin'); }catch(e){}   // the look is a setting too (skin.js keeps a copy of it)
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
  candidate.profile.accent = ['orange','teal','green','red','blue','purple','pink','yellow','custom'].includes(candidate.profile.accent) ? candidate.profile.accent : 'orange';
  candidate.profile.theme = ['orange','discord','midnight','light','sunset','customfull'].includes(candidate.profile.theme) ? candidate.profile.theme : 'orange';
  candidate.profile.customThemeColor = safeHexColor(candidate.profile.customThemeColor, null);
  // new in 1.6.0: the look (medieval / cyberpunk), the accent colour of the cyberpunk look, and whether the app icon follows the look
  candidate.profile.skin = SKIN_KEYS.includes(candidate.profile.skin) ? candidate.profile.skin : 'medieval';
  candidate.profile.accentCyber = (ACCENT_OPTIONS_CYBER.some(o => o.key === candidate.profile.accentCyber) || candidate.profile.accentCyber === 'custom') ? candidate.profile.accentCyber : 'amber';
  candidate.profile.customThemeColorCyber = safeHexColor(candidate.profile.customThemeColorCyber, null);
  candidate.profile.skinIcon = candidate.profile.skinIcon !== false;
  if(candidate.profile.iconStyle !== 'detailed') candidate.profile.iconStyle = 'minimal';   // 1.8.2: the style of the icon in the app list
  candidate.profile.customBgColor = safeHexColor(candidate.profile.customBgColor, null);
  candidate.profile.customCardColor = safeHexColor(candidate.profile.customCardColor, null);
  candidate.profile.customTextColor = safeHexColor(candidate.profile.customTextColor, null);
  candidate.profile.bannerBgColor = safeHexColor(candidate.profile.bannerBgColor, '#1a1e24');
  // new in 1.2.0: anything that comes from a backup file is cleaned before it is trusted
  if(window.BSCore){
    candidate.reminders = BSCore.remindersClean(candidate.reminders);
    const deeds = BSCore.deedsNormalize({ reg: candidate.dailyTodoReg, log: candidate.dailyTodoLog });
    candidate.dailyTodoReg = deeds.reg;
    candidate.dailyTodoLog = deeds.log;
  }
  delete candidate.dailyTodoRange; // 1.2.0 had 7/30/90-day windows; the record is for ever now
  candidate.remindersMigrated = candidate.remindersMigrated === true;
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
    dropProto(payload.state); dropProto(payload.state.profile);
    const newState = fixStateShape(sanitizeImportedState(Object.assign({}, state, payload.state, { profile: Object.assign({}, state.profile, (payload.state && payload.state.profile) || {}), remindersMigrated: !!(payload.state && payload.state.remindersMigrated) })));
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
    const goalsList = document.getElementById('profileGoalsList'); if(goalsList) goalsList.innerHTML = '';
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
  en: { tab_agenda:"Agenda", tab_workouts:"Workouts", tab_todo:"To-Do", tab_timers:"Workout", tab_tools:"Menu", tab_checkin:"Check-in", tab_checkin_btn:"📈 Check-in", card_agenda:"🗓️ Agenda", card_streak:"📈 1% Better Every Day", card_challenge:"Challenge Length", card_notes:"📝 Notes", btn_today:"Today", card_todo_board:"To-Do Board", card_countdown:"Countdown Timer", card_circuit:"Circuit Timer", card_voicecoach:"🔊 Voice Coach Circuit", card_lifting:"🔊 Voice Coach", card_goals:"🎯 My Goals, Insha'Allah", card_applock:"App Lock", card_danger:"Danger Zone", card_physstats:"Physical Stats", card_photos:"Before / After Photos", card_workoutprogram:"🏋️ Workout Program", hint_programcollapse:"Tap to view or edit your plan", card_calorie:"🧮 Calorie, Protein &amp; Meal Calculator", card_reportperiod:"📈 Charts and Reports", card_metric:"Choose a metric", card_trend:"Trend", card_addmeasure:"Track Additional Measurements", lbl_customgoal_ph:"Custom # of days", err_customgoal_invalid:"Enter a valid number of days (1 or more).", tt_removecustomgoal:"Remove custom challenge length", btn_set:"Set", stat_day:"Day", stat_streak:"Streak", stat_logged:"Logged", btn_start_challenge:"▶ Start Challenge Today", btn_edit_startdate:"✏️ Edit Start Date & Time", btn_reset_challenge:"↺ Reset Challenge", progress_hint:"auto-updates with your challenge", leg_notlogged:"Not logged", leg_done:"Done", notes_ph:"How's it going? Anything to remember...", cal_hasnote:"Has a note", notes_empty:"No notes yet — add your first one below.", confirm_deletenote:"Delete this note?", lbl_sleep:"Sleep (hours)", lbl_water:"Water", lbl_bottlesize:"Bottle Size (ml)", lbl_dailytarget:"Daily Target (ml)", btn_minus_bottle:"－ Bottle", btn_plus_bottle:"＋ Bottle", lbl_watersettings:"Water Cup Sizes", lbl_cupxs:"XS (ml)", lbl_cupsmall:"S (ml)", lbl_cupmedium:"M (ml)", lbl_cuplarge:"L (ml)", lbl_cupxl:"XL (ml)", btn_cupxs:"XS", btn_cupsmall:"S", btn_cupmedium:"M", btn_cuplarge:"L", btn_cupxl:"XL", lbl_measurements:"Measurements", lbl_food:"Food Eaten", ph_addfood:"Add food...", btn_add:"Add", lbl_notes:"Notes", ph_daynotes:"Anything else about this day...", btn_done:"Done", lbl_date:"Date", btn_cancel:"Cancel", btn_save:"Save", modal_startdatetime:"Edit Start Date & Time", lbl_time:"Time", btn_new:"+ New", btn_del:"Del", btn_import:"📂 Import Program (.txt/.csv)", btn_template_txt:"📄 Download Guide (.txt)", btn_template_csv:"📊 Download Guide (.csv)", btn_addblock:"+ Add Block/Week", btn_delblock:"Delete Block", ph_blockinfo:"What's this week about?", btn_addday:"+ Add Day", btn_delday:"Delete Day", btn_markrest:"Mark Rest Day", btn_unmarkrest:"Unmark Rest Day", ph_exname:"Exercise name", ph_exdetail:"Sets × reps · rest", ph_extip:"Tip / form cue (optional)", badge_nosetsrest:"No sets/rest set", btn_setsrest:"⚙ Sets & Rest", btn_addex:"+ Add Exercise", btn_marktoday:"✓ Mark Today's Workout Done", ph_restnote:"Rest day note...", modal_setsrest:"Sets & Rest", lbl_sets:"Sets", lbl_restsec:"Rest (sec)", lbl_reps:"Reps", ph_reps:"e.g. 12-20 or AMRAP", lbl_holdsec:"Hold Time (sec)", mode_reps:"🔢 Reps", mode_time:"⏱ Timed Hold", hint_setsrest:"Used by the Voice Coach Circuit and Lifting timer in the Workout tab.", ph_addtask:"Add a task...", col_todo:"To Do", col_doing:"Doing", col_done_col:"Done", lbl_minutes:"Minutes", lbl_seconds:"Seconds", btn_startword:"▶ Start", btn_pause:"⏸ Pause", btn_reset:"↺ Reset", btn_skip:"⏭ Skip", lbl_rounds:"Rounds", lbl_work:"Work (sec)", lbl_getready:"Get Ready (sec)", vc_sub:"Pick a workout day — it reads each exercise out loud and counts your work/rest.", lt_sub:"For weights — no work countdown. Tap Done after each set, then it rests and moves you to the next one.", lbl_program:"Program", lbl_block:"Block / Week", lbl_day:"Day", lbl_includewarmup:"Include Warm-up?", opt_yes:"Yes", opt_no:"No", lbl_defaultsets:"Default Sets", btn_donewithset:"✓ Done with this set", ph_yourname:"Your name", btn_settings:"⚙ Settings", sg_general:"General", sg_appearance:"Appearance", sg_data:"Data", modal_externalprogram:"📂 External Workout Program", externalprogram_hint:"Import a workout program from a .txt or .csv file, or download a blank guide to fill in and import.", btn_externalprogram:"📂 External Workout Program", btn_closemodal:"✕ Close", lbl_theme:"Accent Color", lbl_apptheme:"App Theme", lbl_bannerbg:"Banner Background", tt_editbanner:"Edit Banner", modal_bannerbg_title:"🖼 Edit Banner", pe_title_profile:"Edit Profile Picture", pe_btn_edit:"✏️ Edit Image", tt_editprofile:"Settings", modal_editprofile_title:"⚙ Settings", opt_bgdefault:"Default", opt_bgsolid:"Solid", opt_bgimage:"Img", btn_choosebannerimg:"🖼 Choose Image", btn_removebannerimg:"✕ Remove", lbl_customcolors:"Website Colors", lbl_colorbg:"Background", lbl_colorcard:"Cards", lbl_colortext:"Text", btn_resetcolors:"↺ Reset Colors", theme_custom:"Custom", lbl_colortagline:"Tagline", lbl_backuptransfer:"Backup &amp; Transfer", btn_exportdata:"📤 Export Data", btn_importdata:"📥 Import Data", modal_exporttitle:"📤 Export Data", export_body_text:"Bundles everything on this device — profile, photos, agenda, workouts — into one encrypted file you can move to another browser or device.", lbl_exportpassword:"Password to encrypt with", lbl_exportpasswordconfirm:"Confirm password", btn_exportnow:"Export", modal_importtitle:"📥 Import Data", import_body_text:"Enter the password you used when exporting. Importing replaces everything currently on this device.", lbl_importpassword:"Password", btn_importnow:"Decrypt &amp; Import", err_pwlen:"Password must be at least 12 characters.", err_pwmatch:"Passwords do not match.", err_nocrypto:"Encryption is not available in this browser.", err_exportfailed:"Export failed — please try again.", err_importbadfile:"This does not look like a valid backup file.", err_importwrongpw:"Incorrect password, or this file is corrupted.", confirm_import:"This will replace everything currently on this device with the imported backup. Continue?", lbl_language:"Language", lbl_clockregion:"Clock Region", danger_text:"Permanently erase everything stored on this device — profile, photos, agenda, workouts, to-do list, settings. This cannot be undone.", btn_eraseall:"Erase All Data", ph_addgoal:"Add a goal...", lbl_started:"Started", lbl_energy:"Energy (1–10)", lbl_sleepword:"Sleep", photo_before:"⏮ Before", photo_after:"🏆 After / Current", btn_addphoto:"+ Add Photo", lbl_age:"Age", lbl_gender:"Gender", opt_male:"Male", opt_female:"Female", lbl_height:"Height (cm)", lbl_weightkg:"Weight (kg)", lbl_activitylevel:"Activity Level", opt_sedentary:"Sedentary (little/no exercise)", opt_light:"Light (1–3 days/week)", opt_moderate:"Moderate (3–5 days/week)", opt_active:"Active (6–7 days/week)", opt_veryactive:"Very active (hard training + physical job)", lbl_goal:"Goal", opt_maintain:"Maintain weight", opt_lose:"Lose fat", opt_build:"Build muscle", lbl_targetrate:"Target Rate", opt_kgweek:"kg / week", opt_gweek:"grams / week", res_bmr:"BMR (at rest)", res_maint:"Maintenance calories", res_target:"Target calories / day", res_protein:"Protein / day", calc_disclaimer:"A general guide for healthy adults, not medical or dietary advice. Food values and prices are rounded and will differ in your shop. If you are pregnant or breastfeeding, have a medical condition (kidneys, diabetes, an eating disorder) or take medication, ask a doctor or dietitian first.", tab_profile_btn:"👤 Profile", tab_fitness_btn:"🧮 Tools", tab_website_btn:"Beerleert", btn_addmeasuretype:"+ Add Measurement Type", ph_measuretype:"e.g. Chest, Arms", st_ready:"Ready", st_running:"Running", st_paused:"Paused", st_donebang:"Done!", st_getready:"Get Ready", st_work:"Work", st_rest:"Rest", st_next:"Next:", st_lifting:"Lifting", st_holding:"Holding", st_workoutcomplete:"Workout complete 🎉", st_pickday:"Pick a day above", st_warmup:"Warm-up", st_tapskip:"Tap Skip when ready to start", st_exercise:"Exercise", st_set:"Set", tagline_text:"SPORT <span class=\"tag-dot\">•</span> EAT <span class=\"tag-dot\">•</span> SLEEP", lbl_days:"days", btn_started_prefix:"✓ Started", lbl_hours:"hours", lock_encrypted_text:"Your data is encrypted on this device with a password.", lock_nopass_text:"App Lock is optional — your data is stored locally without encryption until you enable it.", btn_changepassword:"🔑 Change Password", btn_removepassword:"Remove Password", btn_setpassword:"🔒 Set Password", goals_empty:"No goals yet — add what you're working toward.", modal_erasetitle:"⚠️ Erase All Data", erase_body_text:"This permanently deletes your profile, photos, agenda, workouts, to-do list, and settings from this device. There is no backup — <b>this cannot be undone.</b>", lbl_typeerase:"Type ERASE to confirm", btn_eraseeverything:"Erase Everything", lbl_autolock:"Auto-lock after inactivity", opt_autolock_never:"Never", opt_autolock_1min:"1 minute", opt_autolock_5min:"5 minutes", opt_autolock_15min:"15 minutes", opt_autolock_30min:"30 minutes", unit_kcal:"kcal", unit_g:"g", food_empty:"No food logged yet.", kb_empty:"Empty", checkin_no_custom:"No custom measurements yet.", checkin_hint:"Once added, log values for these under Agenda → any date → Measurements.", lbl_lastndays:"Last {n}d", lbl_lastyear:"1 year", lbl_dayabbrev:"d", opt_weightkg:"Weight (kg)", opt_waistcm:"Waist (cm)", lbl_nodate:"No date", lock_title:"Locked", lock_sub:"Enter your password to unlock BeerSports.", lock_error:"Incorrect password. Try again.", lock_unlock_btn:"Unlock", lock_forgot:"Forgot password? Erase all app data", lbl_newpassword:"New Password", ph_newpassword_hint:"At least 12 characters", lbl_confirmpassword:"Confirm Password", modal_setpw_title:"Set Password", modal_changepw_title:"Change Password", tt_unlocked:"Unlocked — your data is decrypted in memory until auto-lock or you lock it manually", tt_profile:"Profile", tt_back:"Back", tt_backtotop:"Back to top", snd_classicbeep:"Classic Beep", snd_chime:"Chime", snd_bell:"Bell", snd_digital:"Digital", snd_airhorn:"Air Horn", btn_editprogram:"✏️ Edit", btn_closeprogram:"✕ Close", btn_circuitorder:"🔁 Circuit Order", btn_circuitorderon:"✓ Circuit Order On", tt_circuitorder:"Cycles through all exercises each round instead of finishing one exercise's sets first — great for HIIT/circuits.", subsec_program:"1. Add Program", subsec_phase:"2. Week", subsec_day:"3. Day", subsec_warmupday:"4. Warm-up for this day", subsec_exday:"5. Exercises for this day", btn_choosewarmuplib:"📚 Choose warm up from Library", btn_buildwarmup:"➕ Build Custom Warm-up", btn_chooseexlib:"📚 Choose workout from Library", btn_addownexercise:"✏️ Add Your Own Exercise", card_workoutjournal:"🏋️ Workout Journal", lbl_todaysets:"Today's Sets", btn_addset:"+ Add Set", btn_savetodaylog:"✓ Save Today's Log", card_progressmap:"Progress Map", modal_exlibrary_title:"📚 Exercise Library", lbl_exercisename:"Exercise Name", lbl_tipformcue:"Tip / Form Cue (optional)", hint_customexercise:"Not in the library? No problem — type it in here and it's added to your day, just like a library pick.", modal_warmuplibrary_title:"🔥 Warm-Up Library", modal_warmupbuilder_title:"🔥 Build Your Warm-up", lbl_warmupname:"Warm-up Name", lbl_exercises_plural:"Exercises", hint_warmupbuilder:"Add one exercise at a time — jumping jacks, then something different — and pick each one's own time, sets and reps.", btn_savewarmup:"Save Warm-up", modal_addexercise_title:"Add Exercise", modal_editexercise_title:"Edit Exercise", mode_timeonly:"⏱ Time only", lbl_secondsperset:"Seconds per Set", lbl_restbetweensets:"Rest Between Sets (sec)", hint_restbetweensets:"Only used when Sets is more than 1.", lbl_restafterexercise:"Rest After This Exercise (sec)", hint_restafterexercise:"A short breather before moving on to the next warm-up exercise.", btn_saveexercise:"Save Exercise", tab_voicecoach:"🔊 Voice Coach", tab_countdown:"⏱ Countdown", tab_circuit:"🔁 Circuit", toast_saved:"Saved", confirm_erase_pw:"This permanently erases ALL your data (profile, photos, agenda, workouts) — this cannot be undone because the password itself can't be recovered. Continue?", confirm_removepw:"Remove App Lock and store your data locally without encryption? You can turn App Lock back on anytime.", err_password_required:"A password or key file is required to save data securely.", err_savebannerimg:"Could not save that image — please try again.", err_maxdays:"Please pick 3650 days (10 years) or fewer.", confirm_resetchallenge:"Reset your challenge? This clears your start date and progress map.", err_keeponeprogram:"Keep at least one program.", confirm_deleteprogram:"Delete this whole program?", msg_importedprogram:"Imported \"{name}\" — {n} block(s). Check it over under Workout → Edit your program.", err_importreadfail:"Couldn't read that file — make sure it's a .txt or .csv program file (see the Download Guide buttons).", err_keeponeblock:"Keep at least one block.", confirm_deleteblock:"Delete this block/week?", err_keeponeday:"Keep at least one day.", confirm_deleteday:"Delete this day?", err_exercisename:"Give this exercise a name (e.g. \"Jumping Jacks\").", err_addoneexercise:"Add at least one exercise first.", confirm_deletewarmup:"Delete this warm-up? Any days using it will lose their assigned warm-up.", confirm_removemeasuretype:"Remove this measurement type? Past logged values stay saved, just hidden from these menus.", confirm_deletelog:"Delete the {date} log for {name}? This can't be undone.", confirm_deletealllog:"Delete ALL logged sessions for {name}? This can't be undone.", err_pickexname:"Pick or type an exercise name first.", err_logoneset:"Log at least one set (reps and/or weight) before saving.", err_pickday_nottrain:"Pick a training day (not a rest day) first.", err_noexercisesday:"This day has no named exercises yet — add some under Workout → Edit your program first.", err_quota_full:"Couldn't save — you're out of local storage space. This often happens after adding a large banner photo. Try removing it (or choosing a smaller file) and save again.", err_savefailed:"Couldn't save your changes — please try again.", lbl_totalvolume:"Total volume: {vol}kg · {reps} reps", tt_deleteentry:"Delete this entry", lbl_exlibrary_empty:"No exercises in this category.", lbl_recentsessions:"Recent Sessions", btn_clearall:"Clear All", ph_promptprogname:"Name for new program:", val_defaultprogname:"My Workouts", ph_promptblockname:"Name for new block/week:", val_defaultblockname:"New Week", ph_promptdaylabel:"Label for new day (e.g. Sat, Day 6):", lbl_noexercisesyet:"No exercises yet — use \"📚 Choose workout from Library\" or \"✏️ Add Custom Exercise\" below (tap ✏️ Edit above if you don't see those buttons).", lbl_noexercisesadded:"No exercises added yet — tap \"+ Add Exercise\" below.", lbl_nowarmupsyet:"No warm-ups yet — choose one from the library below.", lbl_nowarmupscat:"No warm-ups in this category.", lbl_notenoughdata:"Not enough logged data yet for this period — log this measurement on a few different days (Agenda → pick a date → Measurements) to see a trend here.", ph_measuretype_field:"e.g. Chest (cm), Body Fat %...", ph_customexname:"e.g. Cossack Squat", ph_customextip:"e.g. Keep your chest up", ph_warmupnameinput:"e.g. My Warm-up", ph_wbblockname:"e.g. Jumping Jacks", lbl_step_singular:"step", lbl_step_plural:"steps", lbl_total_word:"total", val_importedprogram:"Imported Program", lbl_devicelocaltime:"Device local time", tt_removeset:"Remove set", lbl_lasttime:"Last Time", lbl_personalrecord:"🏆 Personal Record", lbl_nopreviouslog:"No previous log for {name} yet — today sets the baseline to beat next time.", lbl_beatvolume:"Beat {vol}kg total volume today 💪", opt_customexercise:"✎ Custom exercise…", ph_wlreps:"Reps", ph_wlweight:"Weight (kg)", btn_howtovideo:"🔍 How-To Video", lbl_set_singular:"set", lbl_set_plural:"sets", lbl_holdword:"hold", lbl_restword:"rest", lbl_repsword:"reps", lbl_blockword:"Block", lbl_weekword:"Week", lbl_copyword:"Copy", btn_dupblock:"⧉ Duplicate Week", btn_dupday:"⧉ Duplicate Day", lbl_usekeyfile:"Also require a key file to unlock (optional, extra protection)", hint_keyfile:"You'll download a small key file below. Store it somewhere safe and separate from this device — you'll need both it and your password to unlock next time.", keyfile_download_notice:"Your key file has downloaded. Store it somewhere safe and separate from this device — you'll need both it and your password to unlock.", lock_keyfile_active_text:"A separate key file is also required to unlock.", err_keyfile_missing:"Please select your key file first.", err_keyfile_wrong:"Incorrect password, or this is not the right key file.", err_keyfile_bad:"This does not look like a valid key file.", btn_selectkeyfile:"📎 Select Key File", lbl_nofileselected:"No file selected", lbl_usekeyfile_export:"Also protect this backup with a separate key file", hint_keyfile_export:"Downloads two files instead of one — the backup and a key file. Store them separately; both plus the password are needed to restore.", keyfile_download_notice_backup:"Your backup and key file have downloaded. Store them in different places — both plus the password are needed to restore this backup.", hint_importkeyfile:"This backup was protected with a separate key file. Select it below.", err_file_toolarge_backup:"That backup file is too large (max 500MB).", err_file_toolarge_program:"That program file is too large (max 5MB).", tt_checkinhistory:"History", btn_challenge_settings:"🎯 Challenge Settings", modal_checkinhistory_title:"📋 History", tt_restminus:"Decrease rest by 10s", tt_restplus:"Increase rest by 10s", card_dailytodo:"📅 Daily To-Do", ph_adddailytask:"Add a task...", hint_dailytodo:"Resets automatically every day.", lbl_voice:"Coach Voice", opt_voice_auto:"Automatic (best match)", dailytodo_empty:"No tasks yet — add one above.", btn_ltoptions:"⚙ More Options" }
};
// Words for the tracker / reminders / calendar live in features-i18n.js
(function(){
  const extra = window.BS_I18N_EXTRA || {};
  if(extra.en) Object.assign(TRANSLATIONS.en, extra.en);
})();
const TTS_PHRASES = {
  en: { get_ready:'Get ready', rest:'Rest', do:'Do', reps_word:'reps', complete:'Workout complete. Great job.', round:'Round', next_up:'Next up:', hold_for:s=>`Hold for ${s} seconds`,
    warmup_intro:'Warm up.', warmup_outro:"Tap skip when you're ready to start.", set_of:(s,t)=>`Set ${s} of ${t}`, round_of:(r,t)=>`Round ${r} of ${t}` }
};
// The app is English (US) only. These helpers stay so every screen can keep calling t() / tf() / ln().
const APP_LOCALE = 'en-US';
function tphrase(key){ return TTS_PHRASES.en[key]; }
function t(key){ const v = TRANSLATIONS.en[key]; return v !== undefined ? v : key; }
function tf(key, vars){ let s = t(key); if(vars) Object.keys(vars).forEach(k=>{ s = s.split('{'+k+'}').join(vars[k]); }); return s; }
function ln(n){ return String(n); }

// ── Calendar names ──
const MONTHS_EN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DOW_EN = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
function getMonthsList(){ return MONTHS_EN; }
function getDowList(){ return DOW_EN; }
// Fills every data-i18n / data-i18n-ph / data-i18n-title / data-i18n-aria element from the English table
// (the HTML carries the same words as a fallback) and refreshes the screens that are drawn from script.
function applyLanguage(){
  const dict = TRANSLATIONS.en;
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
  document.documentElement.dir = 'ltr';
  document.documentElement.lang = 'en-US';
  // A few pieces of UI are generated dynamically in JS (the Daily To-Do list, timer status
  // text, check-in chips) rather than being static tagged elements - re-render them.
  try{ if(typeof renderAgendaCal === 'function' && document.getElementById('agendaCalGrid')) renderAgendaCal(); }catch(e){}
  try{ if(typeof renderAgenda === 'function' && document.getElementById('progFill')) renderAgenda(); }catch(e){}
  try{ if(typeof renderDailyTodos === 'function' && document.getElementById('dailyTodoList')) renderDailyTodos(); }catch(e){}
  try{
    if(typeof cdSyncFromInputs === 'function' && document.getElementById('cdDisplay')){
      if(!cdRunning) cdSyncFromInputs();
      document.getElementById('cdStatus').textContent = cdRunning ? t('st_running') : t('st_ready');
    }
  }catch(e){}
  try{ if(typeof ctRender === 'function' && document.getElementById('ctBarFill')) ctRender(); }catch(e){}
  try{ if(typeof ltRender === 'function' && document.getElementById('ltBarFill')) ltRender(); }catch(e){}
  try{ if(typeof calcDraw === 'function' && document.getElementById('calcCalVal')) calcDraw(); }catch(e){}
  try{ if(typeof renderCheckinPeriodChips === 'function' && document.getElementById('checkinPeriodChips')) renderCheckinPeriodChips(); }catch(e){}
  try{ if(typeof renderCheckinMetricSelect === 'function' && document.getElementById('checkinMetricSelect')) renderCheckinMetricSelect(); }catch(e){}
  try{ if(typeof startCheckin === 'function' && typeof checkinIsOpen === 'function' && checkinIsOpen()) startCheckin(); }catch(e){}
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
const ACCENT_OPTIONS = [  // heraldic inks and pigments - all dark enough to read as text on vellum
  {key:'orange', name:'Cinnabar',  color:'#a02f18'},
  {key:'teal',   name:'Verdigris', color:'#1f6b66'},
  {key:'green',  name:'Vert',      color:'#386b2a'},
  {key:'red',    name:'Carmine',   color:'#7d1f3a'},
  {key:'blue',   name:'Lapis',     color:'#27478a'},
  {key:'purple', name:'Tyrian',    color:'#5a2a78'},
];
// The looks (new in 1.6.0). skin.js switches the style sheets; the choice lives in state.profile.skin.
const SKIN_KEYS = ['medieval', 'cyberpunk'];
const ACCENT_OPTIONS_CYBER = [  // neon on black: the lights of the helmet (amber, cyan) and four more
  {key:'amber',   name:'Amber',   color:'#ffb800'},
  {key:'cyan',    name:'Cyan',    color:'#19d3f3'},
  {key:'magenta', name:'Magenta', color:'#ff2fb3'},
  {key:'lime',    name:'Acid',    color:'#a6ff1a'},
  {key:'violet',  name:'Violet',  color:'#a66bff'},
  {key:'red',     name:'Red',     color:'#ff3b4e'},
];
function currentSkin(){
  const k = state && state.profile ? state.profile.skin : null;
  return SKIN_KEYS.indexOf(k) >= 0 ? k : 'medieval';
}
// ── Light or dark (1.8.0): Settings > Appearance > Mode. Every look keeps its own choice in state.profile.mode ({ medieval: 'dark' ... });
//    a look with no choice yet wears its own default - Medieval light, Cyberpunk dark - so an update changes nothing until the person picks. ──
const MODE_KEYS = ['light', 'dark'];
function profileModes(){
  const m = state && state.profile ? state.profile.mode : null;
  return m && typeof m === 'object' && !Array.isArray(m) ? m : {};
}
function modeOfSkin(k){
  const m = profileModes()[k];
  return MODE_KEYS.indexOf(m) >= 0 ? m : (k === 'cyberpunk' ? 'dark' : 'light');
}
function currentMode(){ return modeOfSkin(currentSkin()); }
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
function relLuminance(hex){
  const {r,g,b} = hexToRgb(hex);
  const f = v => { v /= 255; return v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4); };
  return 0.2126*f(r) + 0.7152*f(g) + 0.0722*f(b);
}
function shadeHex(hex, amt){ // amt < 0 darkens towards black, amt > 0 lightens towards white
  const {r,g,b} = hexToRgb(hex);
  const to = amt < 0 ? 0 : 255, p = Math.abs(amt);
  const mix = v => Math.round(v + (to - v) * p);
  return `rgb(${mix(r)},${mix(g)},${mix(b)})`;
}
// The accent is the colour of the red wax and of the headings. Used as text it has to stay readable on
// vellum whatever the person picked, so a text version is darkened until it has enough contrast.
function accentInk(hex){
  const vellum = relLuminance('#e9d8aa');
  let out = hex, amt = 0;
  const rgbToHex = c => { const m = c.match(/\d+/g).map(Number); return '#' + m.map(n => n.toString(16).padStart(2,'0')).join(''); };
  while((vellum + 0.05) / (relLuminance(out) + 0.05) < 4.5 && amt > -0.9){
    amt -= 0.08;
    out = rgbToHex(shadeHex(hex, amt));
  }
  return out;
}
// The accent colours of the look that is on, which one is picked, and the custom colour (each look keeps its own choice)
function accentSet(){
  return currentSkin() === 'cyberpunk'
    ? { list: ACCENT_OPTIONS_CYBER, key: state.profile.accentCyber || 'amber', custom: state.profile.customThemeColorCyber, customDefault: '#ffb800' }
    : { list: ACCENT_OPTIONS, key: state.profile.accent || 'orange', custom: state.profile.customThemeColor, customDefault: '#a02f18' };
}
// On the dark panels of the cyberpunk look the accent is text as well: a text version is lightened until it reads (contrast 7:1)
function accentInkOnDark(hex){
  const panel = relLuminance('#12151d');
  let out = hex, amt = 0;
  const rgbToHex = c => { const m = c.match(/\d+/g).map(Number); return '#' + m.map(n => n.toString(16).padStart(2,'0')).join(''); };
  while((relLuminance(out) + 0.05) / (panel + 0.05) < 7 && amt < 0.9){
    amt += 0.08;
    out = rgbToHex(shadeHex(hex, amt));
  }
  return out;
}
// The accent as lettering on ANY surface: darkened until it has 4.5:1 on a light one, lightened until it has 7:1 on a dark one
function accentInkOn(hex, surface, onDark){
  const lum = relLuminance(surface);
  let out = hex, amt = 0;
  const rgbToHex = c => { const m = c.match(/\d+/g).map(Number); return '#' + m.map(n => n.toString(16).padStart(2,'0')).join(''); };
  if(onDark){
    while((relLuminance(out) + 0.05) / (lum + 0.05) < 7 && amt < 0.9){ amt += 0.08; out = rgbToHex(shadeHex(hex, amt)); }
  } else {
    while((lum + 0.05) / (relLuminance(out) + 0.05) < 4.5 && amt > -0.9){ amt -= 0.08; out = rgbToHex(shadeHex(hex, amt)); }
  }
  return out;
}
function applyAccentColor(){
  const set = accentSet();
  let hex;
  if(set.key === 'custom'){
    hex = safeHexColor(set.custom, set.customDefault);
  } else {
    hex = (set.list.find(o=>o.key===set.key) || set.list[0]).color;
  }
  const {r,g,b} = hexToRgb(hex);
  const style = document.documentElement.style;
  const cyber = currentSkin() === 'cyberpunk', dark = currentMode() === 'dark';
  // what the accent is lettering ON: dark vellum / black steel at night, vellum / white steel by day (1.8.0)
  const surface = cyber ? (dark ? '#12151d' : '#f8fafd') : (dark ? '#38291b' : '#e9d8aa');
  const ink = accentInkOn(hex, surface, dark);
  // the home-screen widgets and the reminder pop-up keep their own surfaces (black steel / vellum), so their lettering is worked out for those
  style.setProperty('--accent-ink-w', cyber ? accentInkOnDark(hex) : accentInk(hex));
  if(cyber){
    style.setProperty('--accent', hex);
    style.setProperty('--accent-ink', ink);
    style.setProperty('--accent-dim', `rgba(${r},${g},${b},${dark ? 0.13 : 0.17})`);
    style.setProperty('--accent2', dark ? shadeHex(ink, 0.3) : shadeHex(ink, -0.18));
    style.setProperty('--accent-glow', `rgba(${r},${g},${b},${dark ? 0.55 : 0.4})`);
    style.setProperty('--on-accent', relLuminance(hex) > 0.22 ? '#07080c' : '#f4f6fb');
    return;
  }
  style.setProperty('--accent', hex);
  style.setProperty('--accent-ink', ink);
  style.setProperty('--accent-dim', `rgba(${r},${g},${b},${dark ? 0.2 : 0.14})`);
  style.setProperty('--accent2', dark ? shadeHex(ink, 0.2) : shadeHex(ink, -0.18));
  style.setProperty('--accent-glow', `rgba(${r},${g},${b},0.42)`);
  style.setProperty('--on-accent', relLuminance(hex) > 0.35 ? '#2b1c0e' : '#faf0cf');
}
function applyTheme(){
  applySkin();
  applyFullTheme();
  applyAccentColor();
}
// the style sheets and the icons of the look in state.profile.skin (skin.js does the switching)
function applySkin(){
  if(window.BSSkin){ BSSkin.setModes(profileModes()); BSSkin.apply(currentSkin()); }
}
function renderThemeSwatches(){
  const row = document.getElementById('themeSwatchRow');
  const fullRow = document.getElementById('themeFullRow');
  const panel = document.getElementById('customThemePanel');
  const currentFull = state.profile.theme || 'orange';
  const accents = accentSet();
  const currentAccent = accents.key;
  renderSkinChooser();

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
    const presets = accents.list.map(o =>
      `<button type="button" class="theme-swatch${currentAccent===o.key?' active':''}" style="background:${o.color}" data-action="updateProfileAccent" data-key="${escAttr(o.key)}" title="${o.name || o.key}" aria-label="${o.name || o.key}"></button>`
    ).join('');
    const customColor = safeHexColor(accents.custom, '#c8c8c8');
    const customTitle = t('theme_custom');
    const customSwatch = `<input type="color" class="theme-swatch${currentAccent==='custom'?' active':''}" id="customThemeInput" value="${escAttr(customColor)}" data-action="setCustomAccent" title="${customTitle}" aria-label="${customTitle}">`;
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
  if(currentSkin() === 'cyberpunk'){ state.profile.accentCyber = 'custom'; state.profile.customThemeColorCyber = hex; }
  else { state.profile.accent = 'custom'; state.profile.customThemeColor = hex; }
  applyTheme();
  renderThemeSwatches();
  save();
}
function updateProfileAccent(v){
  if(currentSkin() === 'cyberpunk') state.profile.accentCyber = v; else state.profile.accent = v;
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
// ── The look: Settings > Appearance > Theme. One tap changes the style sheets, the icons, the accent colours and (in the Android app)
//    the icon in the app list. ──
function renderSkinChooser(){
  const row = document.getElementById('skinRow');
  if(!row) return;
  const cur = currentSkin();
  row.innerHTML = SKIN_KEYS.map(k =>
    `<button type="button" class="skin-tile${cur === k ? ' active' : ''}" role="radio" aria-checked="${cur === k ? 'true' : 'false'}" data-action="setSkin" data-key="${escAttr(k)}">` +
      `<span class="skin-prev skin-prev-${escAttr(k)}${modeOfSkin(k) === 'dark' ? ' is-dark' : ''}" aria-hidden="true"><i></i><i></i><i></i></span>` +
      `<span class="skin-name">${escHtml(t('skin_' + k))}</span><span class="skin-sub">${escHtml(t('skin_' + k + '_sub'))}</span>` +
    `</button>`).join('');
  renderModeChooser();
  renderIconStyleChooser();
  // only the Android app can change its own icon in the app list
  const iconRow = document.getElementById('skinIconRow');
  if(iconRow){
    iconRow.hidden = !launcherCanSwitch();
    const btn = document.getElementById('skinIconBtn'), on = state.profile.skinIcon !== false;
    if(btn){ btn.setAttribute('aria-pressed', on ? 'true' : 'false'); btn.classList.toggle('active', on); }
  }
}
// ── The style of the icon in the app list (1.8.2): Settings > Appearance > App icon > Minimal | Detailed. state.profile.iconStyle; Android has four launcher
//    entries (two looks x two styles) and LauncherIcon switches exactly one on. Only the Android app can change its own icon, so the row is hidden in a browser. ──
const ICON_STYLES = ['minimal', 'detailed'];
function currentIconStyle(){
  return state && state.profile && state.profile.iconStyle === 'detailed' ? 'detailed' : 'minimal';
}
function renderIconStyleChooser(){
  const block = document.getElementById('iconStyleBlock'), row = document.getElementById('iconStyleRow');
  if(!block || !row) return;
  block.hidden = !launcherCanSwitch();
  const cur = currentIconStyle();
  row.innerHTML = ICON_STYLES.map(s =>
    `<button type="button" class="chip mode-btn${cur === s ? ' active' : ''}" role="radio" aria-checked="${cur === s ? 'true' : 'false'}" data-action="setIconStyle" data-key="${s}">${escHtml(t('icon_style_' + s))}</button>`).join('');
}
function setIconStyle(s){
  if(ICON_STYLES.indexOf(s) < 0 || s === currentIconStyle()) return;
  state.profile.iconStyle = s;
  renderIconStyleChooser();
  notifyLauncherSkin();
  save();
}
function renderModeChooser(){
  const row = document.getElementById('modeRow');
  if(!row) return;
  const cur = currentMode();
  row.innerHTML = MODE_KEYS.map(m =>
    `<button type="button" class="chip mode-btn${cur === m ? ' active' : ''}" role="radio" aria-checked="${cur === m ? 'true' : 'false'}" data-action="setMode" data-key="${m}">${escHtml(t('mode_' + m))}</button>`).join('');
}
function setMode(m){
  if(MODE_KEYS.indexOf(m) < 0 || m === currentMode()) return;
  if(!state.profile.mode || typeof state.profile.mode !== 'object' || Array.isArray(state.profile.mode)) state.profile.mode = {};
  state.profile.mode[currentSkin()] = m;
  applyTheme();            // the style sheets, and the accent's lettering colours that depend on the mode
  renderThemeSwatches();
  renderSkinChooser();     // also the mode buttons and the small pictures of the looks
  notifyLauncherSkin();
  save();
}
function launcherCanSwitch(){
  try{ return !!(window.BSLauncher && window.BSLauncher.available); }catch(e){ return false; }
}
// tells the Android shell which look is on, so the icon in the app list (when it follows) and the widgets can follow
function notifyLauncherSkin(){
  try{
    if(window.BSLauncher && typeof window.BSLauncher.setSkin === 'function') window.BSLauncher.setSkin(currentSkin(), state.profile.skinIcon !== false, currentMode(), currentIconStyle());
  }catch(e){}
}
async function setSkin(k){
  if(SKIN_KEYS.indexOf(k) < 0 || k === currentSkin()) return;
  state.profile.skin = k;
  if(window.BSSkin) await BSSkin.set(k);   // the fonts of the new look are ready before it is shown
  applyTheme();
  renderThemeSwatches();
  notifyLauncherSkin();
  save();
}
function toggleSkinIcon(){
  state.profile.skinIcon = state.profile.skinIcon === false;   // on (or never set) -> off, off -> on
  renderSkinChooser();
  notifyLauncherSkin();
  save();
}
// Settings is a page of its own (.sheet-page in medieval.css): it covers the whole screen wherever the page behind it is
// scrolled to, and closes with its back arrow or the phone's Back button (the Back-button block below finds closeBannerEditModal).
function openBannerEditModal(){
  const page = document.getElementById('bannerEditModal');
  if(!page) return;
  page.classList.add('open');
  const body = page.querySelector('.sheet-body');
  if(body) body.scrollTop = 0;
  remHealthNote = '';
  renderRemHealth(true);   // the Reminders health card (Android app only; hidden where there is nothing to ask)
  if(remApi()) remHealthWatch(true);
}
function closeBannerEditModal(){
  const page = document.getElementById('bannerEditModal');
  if(page) page.classList.remove('open');
  remHealthWatch(false);
}

// ── Voice Coach "Change" page (Program / Week / Day / Warm-up / Coach voice) ──
// A page of its own, like Settings (.sheet-page in medieval.css): it covers the whole screen and scrolls by itself. The
// small pop-up it used to be, taller than a phone screen, trapped the scrolling. It closes with its back arrow or the
// phone's Back button (the Back-button block below finds closeLtOptionsModal).
function openLtOptionsModal(){
  const page = document.getElementById('ltOptionsModal');
  if(!page) return;
  page.classList.add('open');
  const body = page.querySelector('.sheet-body');
  if(body) body.scrollTop = 0;
  const btn = document.getElementById('ltOptionsToggleBtn');
  if(btn) btn.setAttribute('aria-expanded', 'true');
}
function closeLtOptionsModal(){
  const page = document.getElementById('ltOptionsModal');
  if(page) page.classList.remove('open');
  const btn = document.getElementById('ltOptionsToggleBtn');
  if(btn) btn.setAttribute('aria-expanded', 'false');
}
// ── Edit your program: a page of its own (.sheet-page), opened by the button under the Voice Coach. The program, the
// week and the day it shows are the ones the Voice Coach shows (wpSyncToVoiceCoach / ltSyncToWorkoutProgram keep them
// the same); it closes with its back arrow or the phone's Back button (the Back-button block below finds closeProgramEditModal).
function openProgramEditModal(){
  const page = document.getElementById('programEditModal');
  if(!page) return;
  // the less used buttons ("More") start folded away every time
  page.querySelectorAll('.pe-tools.open, .pe-more.open').forEach(function(el){ el.classList.remove('open'); });
  page.querySelectorAll('.pe-more').forEach(function(b){ b.setAttribute('aria-expanded', 'false'); });
  page.classList.add('open');
  const body = page.querySelector('.sheet-body');
  if(body) body.scrollTop = 0;
  const btn = document.getElementById('programEditOpenBtn');
  if(btn) btn.setAttribute('aria-expanded', 'true');
}
function closeProgramEditModal(){
  const page = document.getElementById('programEditModal');
  if(page) page.classList.remove('open');
  const btn = document.getElementById('programEditOpenBtn');
  if(btn) btn.setAttribute('aria-expanded', 'false');
}
// "More" beside a heading of that page folds its less used buttons open and shut
function peToggleMore(btn){
  const panel = btn && document.getElementById(btn.dataset.target);
  if(!panel) return;
  const open = !panel.classList.contains('open');
  panel.classList.toggle('open', open);
  btn.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
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
// The cards that fold open (My Goals, Progress, the Daily To-Do, the Workout Program) unfold and fold with a soft
// height-and-fade animation instead of snapping. .closing keeps the body on screen while it folds away (motion.css).
function toggleCollapsibleCard(id){
  const card = document.getElementById(id);
  if(!card) return;
  const btn = card.querySelector('.program-collapse-toggle');
  const body = card.querySelector('.program-collapse-body');
  const willOpen = !card.classList.contains('open');
  if(btn) btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
  if(!body || typeof body.animate !== 'function'){ card.classList.toggle('open', willOpen); return; }
  if(body._fold){ try{ body._fold.cancel(); }catch(e){} body._fold = null; card.classList.remove('closing'); }
  const ease = 'cubic-bezier(.22,.7,.2,1)';
  if(willOpen){
    card.classList.add('open');
    const cs = getComputedStyle(body);
    const full = { height: body.offsetHeight + 'px', paddingTop: cs.paddingTop, paddingBottom: cs.paddingBottom, opacity: 1, overflow: 'hidden' };
    const shut = { height: '0px', paddingTop: '0px', paddingBottom: '0px', opacity: 0, overflow: 'hidden' };
    const a = body._fold = body.animate([shut, full], { duration: 420, easing: ease });
    a.onfinish = a.oncancel = function(){ if(body._fold === a) body._fold = null; };
  } else {
    const cs = getComputedStyle(body);
    const full = { height: body.offsetHeight + 'px', paddingTop: cs.paddingTop, paddingBottom: cs.paddingBottom, opacity: 1, overflow: 'hidden' };
    const shut = { height: '0px', paddingTop: '0px', paddingBottom: '0px', opacity: 0, overflow: 'hidden' };
    card.classList.add('closing');
    card.classList.remove('open');
    const a = body._fold = body.animate([full, shut], { duration: 320, easing: 'cubic-bezier(.4,.1,.2,1)', fill: 'forwards' });
    a.onfinish = function(){ card.classList.remove('closing'); a.cancel(); if(body._fold === a) body._fold = null; };
  }
}
function toggleGoalsCard(){ toggleCollapsibleCard('goalsCard'); }

// ═══════════════════════════ TABS ═══════════════════════════
const TAB_ORDER = ['agenda','todo','timers','tools'];
function switchTab(name){
  const __prevTab = currentTabName();
  // the page slides in from the side its tab sits on (motion.css reads data-enter)
  const __nextPage = document.getElementById('page-'+name);
  if(__nextPage && __prevTab !== name) __nextPage.dataset.enter = TAB_ORDER.indexOf(name) > TAB_ORDER.indexOf(__prevTab) ? 'fwd' : 'back';
  document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active', p.id === 'page-'+name));
  document.querySelectorAll('.tabbtn').forEach(b=>b.classList.toggle('active', b.dataset.tab === name));
  if(name !== 'tools'){ closeAllSubviewMenus(); }
  window.scrollTo(0,0);
  onTabShown(name);
  if(__prevTab !== name && typeof pushTabHistory === 'function'){ pushTabHistory(name); }
  try{ localStorage.setItem(LAST_TAB_KEY, name); }catch(e){}
}
// What a page needs when it comes on screen.
function onTabShown(name){
  if(name === 'timers'){
    if(typeof ltPopulatePrograms === 'function') ltPopulatePrograms();
    if(typeof populateLtVoiceSelect === 'function') populateLtVoiceSelect();
  } else if(name === 'tools'){
    if(typeof renderAgenda === 'function') renderAgenda();   // Profile is the main page of Menu, and the 1% bar on it is drawn from the clock
  }
}
// Menu is a drop-up on mobile. Since 1.5.2 the first tap on it only goes to its page (Profile); tapping it again while you are
// on it pops the list of everything in it (Profile, Tools, Beerleert) up right above the bottom bar, and a third tap closes the list.
// On desktop this still just switches tabs - the drop-up CSS only exists inside the mobile media query.
// Menu always comes up on its main page, Profile, whatever page of it was used last. Only the page is set here; onTabShown()
// draws it once Menu is on screen. (Check-in used to be its main page; since 1.5.0 it is a page of its own, opened from the Agenda.)
function resetToolsToMain(){
  currentToolsSubview = 'profile';
  document.querySelectorAll('.tools-subview').forEach(el=>el.classList.toggle('active', el.id === 'toolsView-profile'));
  document.querySelectorAll('.tools-tabbtn').forEach(b=>b.classList.toggle('active', b.dataset.view === 'profile'));
}
function switchTabWithMenu(name){
  if(name !== 'tools'){ switchTab(name); return; }
  if(currentTabName() !== name){ resetToolsToMain(); switchTab(name); return; }   // first tap: just go there
  const panel = document.querySelector('#page-tools .tools-picker');
  const wasOpen = panel ? panel.classList.contains('open') : false;
  if(wasOpen) closeAllSubviewMenus(); else openSubviewMenu(name);                 // second tap opens the list, a third closes it
}
function scrollToTop(){ window.scrollTo({top:0, behavior:'smooth'}); }
function currentTabName(){
  const active = document.querySelector('.tabbtn.active');
  return active ? active.dataset.tab : TAB_ORDER[0];
}
// Re-opening the app (fresh page load) lands you back on whichever main tab
// (Agenda/To-Do/Workout/Menu) you were last on, instead of always jumping to Agenda.
function restoreLastTab(){
  let last = null;
  try{ last = localStorage.getItem(LAST_TAB_KEY); }catch(e){}
  if(!last || !TAB_ORDER.includes(last) || last === currentTabName()) return;
  document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active', p.id === 'page-'+last));
  document.querySelectorAll('.tabbtn').forEach(b=>b.classList.toggle('active', b.dataset.tab === last));
  onTabShown(last);
  try{ history.replaceState({appTab:last}, ''); }catch(e){}
}
// ── Mobile drop-up menu, triggered from the Menu tab button ──
function openSubviewMenu(which){
  const panel = document.querySelector('#page-tools .tools-picker');
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
let currentToolsSubview = 'profile';   // Profile is the main page of Menu
function switchToolsView(view){
  if(view === 'website'){
    window.open('https://beerleert.github.io/', '_blank', 'noopener,noreferrer');
    closeAllSubviewMenus();
    return;
  }
  currentToolsSubview = view;
  document.querySelectorAll('.tools-subview').forEach(el=>el.classList.toggle('active', el.id === 'toolsView-'+view));
  document.querySelectorAll('.tools-tabbtn').forEach(b=>b.classList.toggle('active', b.dataset.view === view));
  if(view === 'profile' && typeof renderAgenda === 'function') renderAgenda();
  closeAllSubviewMenus();
}
// Check-in: a page of its own (.sheet-page), opened by the Check-in button on the Agenda. It holds the Daily To-Do tracker,
// the charts and reports, and the workout journal. It is drawn once it is on screen (the chart measures its width), and
// closes with its back arrow or the phone's Back button (the Back-button block below finds closeCheckinModal).
function openCheckinModal(){
  const page = document.getElementById('checkinModal');
  if(!page) return;
  page.classList.add('open');
  const body = page.querySelector('.sheet-body');
  if(body) body.scrollTop = 0;
  if(typeof startCheckin === 'function') startCheckin();
}
function closeCheckinModal(){
  const page = document.getElementById('checkinModal');
  if(page) page.classList.remove('open');
}
function checkinIsOpen(){
  const page = document.getElementById('checkinModal');
  return !!(page && page.classList.contains('open'));
}
// Menu > Tools holds three small tools: the calorie calculator, the Countdown timer and the Circuit timer.
function switchToolPane(name){
  document.querySelectorAll('#toolsView-fitness .tool-pane').forEach(el=>el.classList.toggle('active', el.id === 'toolPane-'+name));
  document.querySelectorAll('#toolsView-fitness .tool-seg .chip').forEach(b=>{
    const on = b.dataset.pane === name;
    b.classList.toggle('active', on);
    b.setAttribute('aria-selected', on ? 'true' : 'false');
  });
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

// How far the challenge has come, worked out from the clock alone: the whole days that have gone by, and the
// share of its length that has passed (the same figures the Challenge widget shows).
function challengeProgress(now){
  const goal = Math.max(1, state.goalDays || 1);
  if(!state.startTimestamp) return { started:false, goal:goal, days:0, pct:0, frac:0 };
  const elapsed = Math.max(0, (now == null ? Date.now() : now) - state.startTimestamp);
  const frac = Math.min(1, elapsed / (goal * 86400000));
  return { started:true, goal:goal, days:Math.min(goal, Math.floor(elapsed / 86400000)), pct:Math.min(100, Math.floor(frac * 100)), frac:frac };
}
function renderAgenda(){
  renderGoalChips();

  // the bar is the one the home-screen widget draws (a first day already shows; the stud goes when it is full)
  const prog = challengeProgress();
  const fillEl = document.getElementById('progFill');
  fillEl.style.width = (prog.frac * 100).toFixed(2) + '%';
  fillEl.classList.toggle('empty', !(prog.frac > 0));
  const trackEl = document.getElementById('progTrack');
  if(trackEl) trackEl.setAttribute('aria-valuenow', String(prog.pct));
  document.getElementById('progLabel').textContent = prog.days + ' / ' + prog.goal + ' ' + t('lbl_days');
  document.getElementById('progPct').textContent = prog.pct + '%';
  // under the bar (it lives on Profile now; starting and resetting are in Settings): where the challenge stands
  const hintEl = document.getElementById('streakHint');
  if(hintEl) hintEl.textContent = state.startTimestamp ? tf('streak_started', { when: formatStartDateTime(state.startTimestamp) }) : t('streak_not_started');

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
function entryHasNote(e){
  if(!e) return false;
  if(typeof e === 'string') return e.trim().length > 0;
  return !!(e.note && String(e.note).trim());
}
// "Log" = the numbers and food of a day (sleep, water, measurements, meals), as opposed to its free-text note
function entryHasLog(e){
  if(!e || typeof e === 'string') return false;
  const m = e.measurements;
  const hasMeasure = m && (m.weight || m.waist || (m.custom && Object.values(m.custom).some(v=>v)));
  return !!((e.food && e.food.length > 0) || e.sleepHours || (e.water && e.water > 0) || hasMeasure);
}

// ── Month / weekday names for the calendar and the tracker ──
const MONTHS_SHORT_EN = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const DOW_LONG_EN = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
function shortMonth(m0){ return MONTHS_SHORT_EN[m0]; }
function dowLong(i){ return DOW_LONG_EN[i]; } // 0 = Monday
function fmtDayLong(key){
  const p = BSCore.parseKey(key);
  if(!p) return String(key);
  return `${dowLong(BSCore.weekdayMon0(key))} ${ln(p.d)} ${getMonthsList()[p.m]}`;
}
function fmtDayShort(key){
  const p = BSCore.parseKey(key);
  if(!p) return String(key);
  return `${getDowList()[BSCore.weekdayMon0(key)]} ${ln(p.d)} ${shortMonth(p.m)}`;
}

// ── The calendar: a "Book of Hours" page. One month per leaf, with the season's colour, red-letter
//    Sundays and a wax seal on today. Small marks at the foot of a day say what is in it. ──
// The flame at the top right of the Agenda (1.8.0): how many days in a row every Daily To-Do task was done - the same streak the
// tracker shows. Hidden until there is one. It burns brightest once today's tasks are all done; before that it waits, a little dimmer.
function renderAgendaFlame(){
  const el = document.getElementById('agendaFlame');
  if(!el) return;
  let cur = 0, lit = false;
  try{
    const st = BSCore.deedsStats(dqModel(), dqToday(), 1);
    cur = st && st.cur > 0 ? st.cur | 0 : 0;
    const last = st && st.rows && st.rows.length ? st.rows[st.rows.length - 1] : null;
    lit = !!(last && last.state === 'all');
  }catch(e){ cur = 0; }
  el.hidden = cur < 1;
  el.classList.toggle('lit', lit && cur > 0);
  if(cur < 1){ el.innerHTML = ''; return; }
  const label = tf('dq_streak_days', { n: ln(cur) });
  el.title = label;
  el.setAttribute('aria-label', label);
  const html = (bsIco('flame') || '🔥') + '<b>' + escHtml(ln(cur)) + '</b>';
  if(el.innerHTML !== html) el.innerHTML = html;
}
function renderAgendaCal(){
  const grid = document.getElementById('agendaCalGrid');
  if(!grid) return;
  renderAgendaFlame();
  const y = agendaViewDate.getFullYear(), m = agendaViewDate.getMonth();
  const lbl = document.getElementById('agendaMonthLbl');
  lbl.innerHTML = `${escHtml(getMonthsList()[m])}<span class="folio-year">${escHtml(String(y))}</span>`;
  const folio = document.getElementById('agendaFolio');
  if(folio) folio.dataset.season = String(BSCore.seasonOf(m));

  const startOffset = (new Date(y, m, 1).getDay() + 6) % 7; // Monday-first
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const todayKey = BSCore.keyFromDate(new Date());
  const rems = BSCore.remindersByDay(remList());
  const model = dqModel();
  const dows = getDowList();

  let html = '';
  for(let i = 0; i < 7; i++) html += `<div class="acal-dow${i === 6 ? ' sun' : ''}">${dows[i]}</div>`;
  for(let i = 0; i < startOffset; i++) html += '<div class="acal-cell empty" aria-hidden="true"></div>';
  for(let d = 1; d <= daysInMonth; d++){
    const key = BSCore.keyOf(y, m, d);
    const e = state.agendaEntries[key];
    const col = (startOffset + d - 1) % 7;
    const dayRems = rems[key] || [];
    const open = dayRems.filter(r => !r.done).length;
    const hasLog = entryHasLog(e), hasNote = entryHasNote(e);
    let star = false;
    if(key <= todayKey){ const dd = BSCore.deedsDay(model, key); star = dd.total > 0 && dd.done === dd.total; }
    let cls = 'acal-cell';
    if(key === todayKey) cls += ' today'; else if(key < todayKey) cls += ' past';
    if(col === 6) cls += ' sun';
    if(hasLog || hasNote || dayRems.length) cls += ' has-note'; // the old name, kept for anything that still looks for it
    const said = [fmtDayLong(key)];
    if(hasLog) said.push(t('cal_leg_log'));
    if(hasNote) said.push(t('cal_leg_note'));
    if(open) said.push(tf('rem_count_aria', { n: ln(open) }));
    if(star) said.push(t('cal_leg_deeds'));
    html += `<button type="button" class="${cls}" data-action="openAgendaEntry" data-key="${key}" aria-label="${escAttr(said.join(', '))}">`
      + `<span class="acal-num">${d}</span>`
      + '<span class="acal-pips">'
      + (hasLog ? '<i class="pip pip-log"></i>' : '')
      + (hasNote ? '<i class="pip pip-note"></i>' : '')
      + (star ? '<i class="pip pip-star"></i>' : '')
      + (open ? `<b class="pip pip-rem">${ln(open > 9 ? '9+' : open)}</b>` : '')
      + '</span></button>';
  }
  grid.innerHTML = html;
}
// A new month always starts on its 1st, so stepping from the 31st never skips a short month.
function agendaCalShift(delta){
  agendaViewDate = new Date(agendaViewDate.getFullYear(), agendaViewDate.getMonth() + delta, 1);
  renderAgendaCal();
  turnFolio(delta);
}
function agendaCalPrev(){ agendaCalShift(-1); }
function agendaCalNext(){ agendaCalShift(1); }
function turnFolio(dir){
  const leaf = document.getElementById('folioLeaf');
  if(!leaf) return;
  leaf.classList.remove('turn-next', 'turn-prev');
  void leaf.offsetWidth; // restart the animation
  leaf.classList.add(dir > 0 ? 'turn-next' : 'turn-prev');
}
// Swiping the page turns it: left for the next month, right for the previous one.
function wireFolioSwipe(){
  const leaf = document.getElementById('folioLeaf');
  if(!leaf || leaf.dataset.swipe) return;
  leaf.dataset.swipe = '1';
  let sx = 0, sy = 0, st = 0, on = false;
  leaf.addEventListener('touchstart', function(e){
    if(e.touches.length !== 1){ on = false; return; }
    sx = e.touches[0].clientX; sy = e.touches[0].clientY; st = Date.now(); on = true;
  }, { passive:true });
  leaf.addEventListener('touchend', function(e){
    if(!on) return;
    on = false;
    const c = e.changedTouches[0], dx = c.clientX - sx, dy = c.clientY - sy;
    if(Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy) * 1.6 || Date.now() - st > 700) return;
    agendaCalShift(dx < 0 ? 1 : -1);
  }, { passive:true });
}

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
function openAgendaEntry(key, tab){
  const p = BSCore.parseKey(key);
  if(!p) return;
  agendaEditingKey = key;
  const lbl = document.getElementById('agendaEntryDateLbl');
  lbl.innerHTML = `<span class="dl-main">${escHtml(ln(p.d) + ' ' + getMonthsList()[p.m])}</span><span class="dl-sub">${escHtml(dowLong(BSCore.weekdayMon0(key)) + ' · ' + ln(p.y))}</span>`;
  dsTabSelect(tab || 'log');
  renderAgendaEntryModal();
  remPrepareInlineForm(key);
  const modal = document.getElementById('agendaEntryModal');
  modal.classList.add('open');
  const box = modal.querySelector('.modal-box');
  if(box) box.scrollTop = 0;
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
  renderDayReminders();
  updateDayTabBadges();
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
  updateDayTabBadges();
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
  wrap.innerHTML = cups.map(c => `<button type="button" class="water-cup-btn" data-action="addWaterCup" data-key="${escAttr(c.key)}">${escHtml(c.label)}<small>${escHtml(String(c.ml))} ml</small></button>`).join('');
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
  const nameEl = document.getElementById('programNameInput');   // the name of the program that is open (1.8.0: it can be edited)
  const cur = state.programs[state.activeProgram];
  if(nameEl && cur && document.activeElement !== nameEl) nameEl.value = cur.name;
}
let renameProgramTimer = null;
// Typing in the name field renames the open program at once; the lists that show it (the drop-downs, the Voice Coach) follow a moment later,
// so the field is not rebuilt under the finger. An empty name is not a name: the old one stays, and the field gets it back when it is left.
function renameProgram(val){
  const p = state.programs[state.activeProgram];
  if(!p) return;
  const name = String(val == null ? '' : val).replace(/\s+/g, ' ').trim().slice(0, 60);
  if(!name || name === p.name) return;
  p.name = name;
  clearTimeout(renameProgramTimer);
  renameProgramTimer = setTimeout(function(){ renameProgramTimer = null; renderWorkouts(); wpSyncToVoiceCoach(); }, 350);
  debouncedSave();
}
document.addEventListener('focusout', function(event){
  const el = event.target;
  if(!el || el.id !== 'programNameInput') return;
  const p = state.programs[state.activeProgram];
  if(p){ el.value = p.name; }
  if(renameProgramTimer){ clearTimeout(renameProgramTimer); renameProgramTimer = null; renderWorkouts(); wpSyncToVoiceCoach(); }
});
function selectProgram(i){
  state.activeProgram = i; state.activeBlock = 0; state.activeDay = 0;
  renderWorkouts(); wpSyncToVoiceCoach(); save();
}
function addProgram(){
  const name = prompt(t('ph_promptprogname'), t('val_defaultprogname'));
  if(!name) return;
  state.programs.push({ name, nutrition:'', blocks:[ { name:t('lbl_weekword')+' 1', info:'', days:[ {label:t('lbl_day')+' 1', rest:false, warmup:'', exercises:[], restNote:''} ] } ] });
  state.activeProgram = state.programs.length-1; state.activeBlock=0; state.activeDay=0;
  renderWorkouts(); wpSyncToVoiceCoach(); save();
}
function deleteProgram(){
  if(state.programs.length<=1){ alert(t('err_keeponeprogram')); return; }
  if(!confirm(t('confirm_deleteprogram'))) return;
  state.programs.splice(state.activeProgram,1);
  state.activeProgram = 0; state.activeBlock = 0; state.activeDay = 0;
  renderWorkouts(); wpSyncToVoiceCoach(); save();
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
    wpSyncToVoiceCoach();
    save();
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
# This is a workout program for the BeerSports app: Workout → Edit your
# program → Program → More → Import a file. Fill it out, save it as
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
# This is a workout program for the BeerSports app: Workout -> Edit your program -> Program -> More -> Import a file.
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

// ── Download the program that is selected, as a plain-text file in the format "External Workout Program" imports ──
// What goes in the file is read back by parseProgramText() above, so a downloaded program can be imported again (on this
// phone or another) and comes back the same: the weeks (BLOCK), the days (DAY / REST), the warm-up, STRENGTH or CIRCUIT
// with its rounds, and every exercise with its sets, reps or hold, rest and tip.
function exerciseDetailText(ex, circuitDay){
  const parts = [];
  // the same choice the exercise card makes: a timed exercise shows its hold, any other shows its reps
  const work = ex.mode === 'time' ? (ex.holdSec ? ex.holdSec + 's hold' : '') : (ex.reps ? ex.reps + ' reps' : '');
  const sets = (!circuitDay && ex.sets) ? ex.sets + (ex.sets === 1 ? ' set' : ' sets') : '';
  if(sets && work) parts.push(sets + ' x ' + work);
  else if(sets || work) parts.push(sets || work);
  if(ex.restSec) parts.push('rest ' + ex.restSec + 's');
  if(parts.length) return parts.join(', ');
  return ex.detail ? String(ex.detail) : '';      // nothing set in the app: keep whatever free text the exercise has
}
function programToText(p){
  const one = s => String(s == null ? '' : s).replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
  const cell = s => one(s).replace(/\|/g, '/');   // "|" separates the parts of an exercise line
  const L = [];
  L.push('# BeerSports workout program');
  L.push('# Saved from the app on ' + new Date().toISOString().slice(0, 10) + '. To load it again: Workout > Edit your program > Program > More > Import a file.');
  L.push('# Lines that start with # are ignored. Keywords: PROGRAM, BLOCK, INFO, DAY, REST, WARMUP, TYPE (STRENGTH or CIRCUIT), ROUNDS, NOTE, and "- exercise | detail | tip".');
  L.push('');
  L.push('PROGRAM: ' + one(p.name));
  (p.blocks || []).forEach(function(b){
    L.push('');
    L.push('BLOCK: ' + one(b.name));
    if(one(b.info)) L.push('INFO: ' + one(b.info));
    (b.days || []).forEach(function(d){
      L.push('');
      L.push('DAY: ' + one(d.label));
      if(d.rest){
        L.push('REST');
        if(one(d.restNote)) L.push('NOTE: ' + one(d.restNote));
        return;
      }
      L.push('TYPE: ' + (d.circuit ? 'CIRCUIT' : 'STRENGTH'));
      if(d.circuit) L.push('ROUNDS: ' + getDayRounds(d));
      let warm = one(d.warmup);
      if(!warm && d.warmupId){
        const w = (state.warmups || []).find(x => String(x.id) === String(d.warmupId));
        if(w && w.name) warm = one(w.name);
      }
      if(warm) L.push('WARMUP: ' + warm);
      if(one(d.restNote)) L.push('NOTE: ' + one(d.restNote));
      (d.exercises || []).forEach(function(ex){
        if(!ex.name || !String(ex.name).trim()) return;
        const detail = cell(exerciseDetailText(ex, !!d.circuit)), tip = cell(ex.tip);
        L.push('- ' + cell(ex.name) + (detail || tip ? ' | ' + detail : '') + (tip ? ' | ' + tip : ''));
      });
    });
  });
  return L.join('\n') + '\n';
}
function programFileName(p){
  const slug = String(p && p.name || '').normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 48);
  return 'workout-program-' + (slug || 'program') + '.txt';
}
function downloadSelectedProgram(){
  const p = curProgram();
  if(!p) return;
  // the BOM makes sure every editor reads the file as UTF-8 (the same as the guide download)
  const blob = new Blob(['﻿' + programToText(p)], {type: 'text/plain;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = programFileName(p);
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(()=>URL.revokeObjectURL(url), 1000);
}

// ── The program editor page and the Voice Coach show the same program / week / day ──
// Picking in the Voice Coach has always moved the editor along (ltSyncToWorkoutProgram); this is the other
// direction: whatever is picked (or added, deleted, imported) in the editor is what the Voice Coach shows.
function wpSyncToVoiceCoach(){
  state.ltProgramIdx = state.activeProgram || 0;
  state.ltBlockIdx = state.activeBlock || 0;
  state.ltDayIdx = state.activeDay || 0;
  if(typeof ltPopulatePrograms === 'function') ltPopulatePrograms();
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
function selectBlock(i){ state.activeBlock = i; state.activeDay = 0; renderWorkouts(); wpSyncToVoiceCoach(); save(); }
function addBlock(){
  const name = prompt(t('ph_promptblockname'), t('val_defaultblockname'));
  if(!name) return;
  curProgram().blocks.push({ name, info:'', days:[ {label:t('lbl_day')+' 1', rest:false, warmup:'', exercises:[], restNote:''} ] });
  state.activeBlock = curProgram().blocks.length-1; state.activeDay = 0;
  renderWorkouts(); wpSyncToVoiceCoach(); save();
}
function deleteBlock(){
  const p = curProgram();
  if(p.blocks.length<=1){ alert(t('err_keeponeblock')); return; }
  if(!confirm(t('confirm_deleteblock'))) return;
  p.blocks.splice(state.activeBlock,1);
  state.activeBlock = 0; state.activeDay = 0;
  renderWorkouts(); wpSyncToVoiceCoach(); save();
}
function duplicateBlock(){
  const p = curProgram();
  const src = curBlock();
  const copy = JSON.parse(JSON.stringify(src));
  copy.name = src.name + ' (' + t('lbl_copyword') + ')';
  p.blocks.splice(state.activeBlock+1, 0, copy);
  state.activeBlock = state.activeBlock+1; state.activeDay = 0;
  renderWorkouts(); wpSyncToVoiceCoach(); save();
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
function selectDay(i){ state.activeDay = i; renderDayTabs(); renderDayContent(); renderProgramSubtitle(); wpSyncToVoiceCoach(); save(); }
function addDay(){
  const label = prompt(t('ph_promptdaylabel'), t('lbl_day')+' '+(curBlock().days.length+1));
  if(!label) return;
  curBlock().days.push({ label, rest:false, warmup:'', exercises:[], restNote:'' });
  state.activeDay = curBlock().days.length-1;
  renderWorkouts(); wpSyncToVoiceCoach(); save();
}
function deleteDay(){
  const b = curBlock();
  if(b.days.length<=1){ alert(t('err_keeponeday')); return; }
  if(!confirm(t('confirm_deleteday'))) return;
  b.days.splice(state.activeDay,1);
  state.activeDay = 0;
  renderWorkouts(); wpSyncToVoiceCoach(); save();
}
function duplicateDay(){
  const b = curBlock();
  const src = curDay();
  const copy = JSON.parse(JSON.stringify(src));
  copy.label = src.label + ' (' + t('lbl_copyword') + ')';
  b.days.splice(state.activeDay+1, 0, copy);
  state.activeDay = state.activeDay+1;
  renderWorkouts(); wpSyncToVoiceCoach(); save();
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
  const warmCard = document.getElementById('peWarmupCard');
  if(warmCard) warmCard.style.display = d.rest ? 'none' : '';   // a rest day has nothing to warm up for
  if(d.rest){
    if(addRow) addRow.style.display = 'none';
    if(secLabel) secLabel.textContent = t('pe_restday');
    wrap.innerHTML = `
      <div class="rest-note">
        🌙<br>
        <textarea data-action="updateRestNote" placeholder="${t('ph_restnote')}">${escHtml(d.restNote||'')}</textarea>
      </div>`;
    ltRenderPlan();
    return;
  }
  if(addRow) addRow.style.display = '';
  if(secLabel) secLabel.textContent = t('pe_exercises');
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
  ltRenderPlan();   // the Voice Coach lists this day's exercises too
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
const WARMUP_QUICKPICKS = WARMUP_QUICKPICKS_EN;

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
        <div class="wb-block-meta">${escHtml(bits.join(' · '))}</div>
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
        <button class="btn btn-ghost btn-sm" data-action="openWarmupBuilder" data-id="${escAttr(w.id)}">✏️</button>
        <button class="food-item-del" data-action="deleteWarmup" data-id="${escAttr(w.id)}">✕</button>
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

const WARMUP_LIBRARY = WARMUP_LIBRARY_EN;
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
const EXERCISE_LIBRARY = EXERCISE_LIBRARY_EN;
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
// The program editor is a page of its own (see openProgramEditModal), so the drag handles and the delete buttons on its
// exercise cards are always there; the exercise cards are not shown anywhere else.
const programManageOpen = true;
function renderProgramSubtitle(){
  const el = document.getElementById('programSubtitle');
  if(!el) return;
  const p = curProgram();
  const b = curBlock();
  const d = curDay();
  const parts = [p?.name, b?.name, d?.label].filter(Boolean).map(escHtml);
  el.innerHTML = parts.length ? '<b>' + parts.join('</b><span class="pnav-sep">›</span><b>') + '</b>' : '';
}


// String(...) first: a number (an id, a count) or anything else that is not text used to make .replace throw and blank the list it was in.
// (Empty things - '', null, undefined, 0 - still give '', as before.)
function escHtml(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function escAttr(s){ return String(s||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// ═══════════════════════════ DAILY TO-DO (auto-resets every day) ═══════════════════════════
// Since 1.5.2 the Daily To-Do IS the To-Do tab (the kanban board is gone) and its tasks come in two kinds:
//   - every-day tasks (the original kind): ticked off for the day and unticked again every morning; they can have their own
//     days or a rhythm and reminder times, and they are what the Check-in tracker counts;
//   - just-once tasks ({ once: true }): they stay on the list until they are ticked and are gone the day after. They have no
//     days and no reminders, and they are not part of the tracker - they are not habits, so they must not make a streak
//     or a percentage look worse.
// What was still open on the old board is moved over as just-once tasks (dtMigrateBoard).
// Each item's checked state is derived from comparing its `doneOn` date to today's date,
// rather than stored as a plain boolean — so there is no separate "reset" step to run at
// midnight or on app open: the moment the calendar day changes, every item is automatically
// unchecked again on the next render, while still remembering it was done on a past day.
// Since 1.5.0 a task can have its own days (certain weekdays, or a rhythm of days on and days of rest) and reminder times -
// see the editor further down. A task that is not called for today is listed under "Resting today"; it can still be ticked.
function dtSchedOf(it){ return BSCore.schedNormalize(it && it.sched); }
function dtIsDue(it, today){ return it.doneOn === today || BSCore.schedDue(dtSchedOf(it), today); }
// 1.7.0: how much a task matters - Must do, Should do or Could do (task.pri = 'must' | 'should' | 'could'; no priority = no key).
// It decides the order of the list (Must first, then Should, the tasks without a priority, then Could), the colour and the tag. It
// never changes when a task rings or what the tracker counts. Anything else in the key is dropped when the state is loaded.
const DT_PRIS = ['must', 'should', 'could'];
const DT_PRI_RANK = { must: 0, should: 1, none: 2, could: 3 };
function dtPriOf(it){ return it && DT_PRIS.indexOf(it.pri) >= 0 ? it.pri : null; }
// by priority, and for the same priority in the order they were added (decorated with the index: older WebViews do not sort stably)
function dtSortByPri(list){
  return list.map((it, i) => [DT_PRI_RANK[dtPriOf(it) || 'none'], i, it]).sort((a, b) => a[0] - b[0] || a[1] - b[1]).map(x => x[2]);
}
// "Every day", "Weekdays", "Mon · Wed · Fri", "3 on · 3 rest"
function dtSchedLabel(sc){
  if(!sc) return t('dt_label_every');
  if(sc.t === 'days'){
    const k = sc.d.join(',');
    if(k === '0,1,2,3,4') return t('dt_label_weekdays');
    if(k === '5,6') return t('dt_label_weekend');
    const names = getDowList();
    return sc.d.map(i => names[i]).join(' · ');
  }
  const info = BSCore.schedCycleInfo(sc.p);
  return info.runs === 1
    ? tf('dt_label_cycle', { on: ln(info.on), off: ln(info.off) })
    : tf('dt_label_cycle_custom', { on: ln(info.on), n: ln(info.n) });
}
function dtMetaHtml(it, extra){
  const sc = dtSchedOf(it), times = BSCore.timesClean(it.rem);
  const bits = [], pri = dtPriOf(it);
  if(pri) bits.push(`<span class="dt-tag dt-pri-tag pri-${pri}"><i class="dt-pri-dot" aria-hidden="true"></i>${escHtml(t('pri_' + pri))}</span>`);
  if(extra) bits.push(`<span class="dt-tag dt-next">${escHtml(extra)}</span>`);
  if(sc) bits.push(`<span class="dt-tag">${sc.t === 'cycle' ? '🔁 ' : '🗓 '}${escHtml(dtSchedLabel(sc))}</span>`);
  if(times.length) bits.push(`<span class="dt-tag">🔔 ${escHtml(times.join(', '))}</span>`);
  return bits.length ? `<span class="dt-meta">${bits.join('')}</span>` : '';
}
function dtRowHtml(it, today, resting){
  const done = it.doneOn === today;
  let extra = '';
  if(resting){
    const next = BSCore.schedNext(dtSchedOf(it), BSCore.addDays(today, 1));
    if(next) extra = tf('dt_rest_next', { when: fmtDayShort(next) });
  }
  return `
    <div class="todo-item dt-item ${done?'done':''}${resting?' resting':''}${dtPriOf(it) ? ' pri-' + dtPriOf(it) : ''}" data-action="toggleDailyTodo" data-idx="${it.id}">
      <div class="todo-check">${done?'✓':''}</div>
      <div class="todo-txt"><span class="dt-name">${escHtml(it.text)}</span>${dtMetaHtml(it, extra)}</div>
      <div class="dt-edit" role="button" tabindex="0" data-action="editDailyTodo" data-idx="${it.id}" data-stop="1" aria-label="${escAttr(t('dt_edit_aria'))}" title="${escAttr(t('dt_edit_aria'))}">✏️</div>
      <div class="todo-del" data-action="deleteDailyTodoById" data-idx="${it.id}" data-stop="1">✕</div>
    </div>`;
}
function renderDailyTodos(){
  const wrap = document.getElementById('dailyTodoList');
  if(!wrap) return;
  if(!Array.isArray(state.dailyTodos)) state.dailyTodos = [];
  const items = state.dailyTodos.filter(it => it && typeof it === 'object');
  const today = dateKeyFromDate(new Date());
  const daily = items.filter(it => it.once !== true);
  const once = dtSortByPri(items.filter(it => it.once === true));
  const due = dtSortByPri(daily.filter(it => dtIsDue(it, today)));
  const rest = dtSortByPri(daily.filter(it => !dtIsDue(it, today)));
  const called = due.concat(once);   // what today asks for: the tasks of the day, and every just-once task that is still open (or ticked today)
  const doneCount = called.filter(it => it.doneOn === today).length;
  const countEl = document.getElementById('dailyTodoCount');
  if(countEl) countEl.textContent = !items.length ? '' : (called.length ? `${ln(doneCount)} / ${ln(called.length)} ✓` : t('dt_rest_day'));
  if(!items.length){
    wrap.innerHTML = `<div class="empty-msg">${t('dailytodo_empty')}</div>`;
    return;
  }
  let html = due.map(it => dtRowHtml(it, today, false)).join('');
  if(!due.length && !once.length) html += `<div class="empty-msg dt-allrest">${escHtml(t('dt_rest_none_due'))}</div>`;
  if(once.length){
    html += `<div class="dt-rest-head dt-once-head">🎯 <span>${escHtml(t('dt_once_head'))}</span> <small>${ln(once.length)}</small></div>`
      + once.map(it => dtRowHtml(it, today, false)).join('');
  }
  if(rest.length){
    html += `<div class="dt-rest-head">🌙 <span>${escHtml(t('dt_rest_head'))}</span> <small>${ln(rest.length)}</small></div>`
      + rest.map(it => dtRowHtml(it, today, true)).join('');
  }
  wrap.innerHTML = html;
}
// What the add row makes: 'daily' (every day) or 'once' (just once). It keeps its choice until the app is closed.
let dtAddKind = 'daily';
function dtSetKind(kind){
  dtAddKind = kind === 'once' ? 'once' : 'daily';
  document.querySelectorAll('#dtKind .chip').forEach(b => {
    const on = b.dataset.key === dtAddKind;
    b.classList.toggle('active', on);
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
}
// An id no task has yet (the ids are only ever compared with each other).
function dtNewId(){
  const used = new Set((state.dailyTodos || []).map(it => it && it.id));
  let id;
  do { id = Date.now() + Math.floor(Math.random() * 100000); } while(used.has(id));
  return id;
}
function addDailyTodo(){
  const input = document.getElementById('dailyTodoInput');
  const val = input.value.trim().slice(0, 120);
  if(!val) return;
  if(!Array.isArray(state.dailyTodos)) state.dailyTodos = [];
  const task = { id: dtNewId(), text: val, doneOn: null };
  if(dtAddKind === 'once') task.once = true;
  state.dailyTodos.push(task);
  input.value = '';
  dqRecord();
  renderDailyTodos(); save(); dqRender(); renderAgendaCal();
}
// A just-once task is gone the day after it was ticked. Returns true when something was removed.
function dtCleanOnce(){
  if(!Array.isArray(state.dailyTodos)) return false;
  const today = dqToday();
  let removed = false;
  for(let i = state.dailyTodos.length - 1; i >= 0; i--){
    const it = state.dailyTodos[i];
    if(it && it.once === true && BSCore.isKey(it.doneOn) && it.doneOn < today){
      if(dtEditId === it.id) closeDtEditModal();
      state.dailyTodos.splice(i, 1);
      removed = true;
    }
  }
  return removed;
}
// The To-Do board of 1.5.1 and earlier lived in state.todos. What was still open on it (To Do, Doing) becomes a just-once task;
// what sat in its Done column was finished and is dropped. Runs at every start (so also for a backup made by an older version).
function dtMigrateBoard(){
  if(!Array.isArray(state.todos)){ state.todos = []; return false; }
  if(!state.todos.length) return false;
  if(!Array.isArray(state.dailyTodos)) state.dailyTodos = [];
  state.todos.forEach(b => {
    if(!b || typeof b !== 'object') return;
    const status = b.status || (b.done ? 'done' : 'todo');
    if(status === 'done') return;
    const text = String(b.text == null ? '' : b.text).replace(/\s+/g, ' ').trim().slice(0, 120);
    if(!text) return;
    state.dailyTodos.push({ id: dtNewId(), text: text, doneOn: null, once: true });
  });
  state.todos = [];
  return true;
}
function toggleDailyTodo(id){
  if(!Array.isArray(state.dailyTodos)) return;
  const item = state.dailyTodos.find(it => it.id === id);
  if(!item) return;
  const today = dateKeyFromDate(new Date());
  item.doneOn = (item.doneOn === today) ? null : today;
  dqRecord();
  renderDailyTodos(); save(); dqRender(); renderAgendaCal();
}
function deleteDailyTodoById(id){
  if(!Array.isArray(state.dailyTodos)) return;
  const idx = state.dailyTodos.findIndex(it => it.id === id);
  if(idx < 0) return;
  const gone = state.dailyTodos[idx];
  // one that has its own days or reminders is worth a second thought; a plain one goes at once, as it always did
  if((dtSchedOf(gone) || BSCore.timesClean(gone.rem).length) && !confirm(t('dt_del_confirm'))) return;
  if(dtEditId === gone.id) closeDtEditModal();
  state.dailyTodos.splice(idx,1);
  dqRecord();
  renderDailyTodos(); save(); dqRender(); renderAgendaCal();
}

// ═══════════════════════════ PROFILE ═══════════════════════════
async function renderProfile(){
  calcFillInputs();
  calcRun();

  renderThemeSwatches();
  renderWaterSettingsUI();
  renderLockCard();
  renderProfileGoals();
}


// ── Calorie, protein & meal calculator ──
// The maths and the foods are in nutrition-core.js (window.BSNutrition); this part reads the fields, keeps the choices
// in state.tools and draws the answer: the day in numbers, three protein levels, a day of food in grams, a shopping list.
const CALC_CHOICES = { calcLevel: ['min','good','max'], calcDiet: ['all','veg','vegan'], calcMeals: ['3','4','5'] };
let calcShopOpen = false;
function calcChoice(key){
  const v = String(state.tools[key] == null ? '' : state.tools[key]);
  return CALC_CHOICES[key].indexOf(v) >= 0 ? v : CALC_CHOICES[key][key === 'calcLevel' ? 1 : 0];
}
function calcNum(n){ return Math.round(n).toLocaleString('en-US'); }
function calcMoney(x){ return '€' + x.toFixed(2); }
function calcRound1(x){ return String(Math.round(x * 10) / 10); }
// a pace is shown to the nearest 0.05 kg ("about 0.5 kg a week"), not as 0.49
function calcRate(x){ return String(Math.round(x * 20) / 20); }
function calcInput(level){
  const T = state.tools;
  return { age: T.calcAge, sex: T.calcGender, height: T.calcHeight, weight: T.calcWeight, bodyFat: T.calcBodyFat, goalWeight: T.calcGoalWeight,
           activity: T.calcActivity, goal: T.calcGoal, rate: T.calcRateVal, rateUnit: T.calcRateUnit,
           level: level || calcChoice('calcLevel'), diet: calcChoice('calcDiet'), meals: parseInt(calcChoice('calcMeals'), 10) };
}
// the fields get what is stored (not while one of them is being typed in)
function calcFillInputs(){
  const T = state.tools;
  const put = (id, v) => { const el = document.getElementById(id); if(el && document.activeElement !== el) el.value = (v == null ? '' : v); };
  const pick = (id, v) => { const el = document.getElementById(id); if(el) el.value = v; };
  put('calcWeight', T.calcWeight); put('calcAge', T.calcAge); put('calcHeight', T.calcHeight);
  put('calcBodyFat', T.calcBodyFat); put('calcGoalWeight', T.calcGoalWeight); put('calcRateVal', T.calcRateVal || '0.5');
  pick('calcGoal', T.calcGoal || 'maintain'); pick('calcGender', T.calcGender || 'male');
  pick('calcActivity', T.calcActivity || 'moderate'); pick('calcRateUnit', T.calcRateUnit || 'kg');
}
// a new goal gets the usual pace for it (lose 0.5 kg a week, build 0.25)
function calcOnGoalChange(){
  const goal = document.getElementById('calcGoal').value;
  const N = window.BSNutrition;
  if(goal !== 'maintain' && N){
    document.getElementById('calcRateVal').value = String(N.DEFAULT_RATE[goal]);
    document.getElementById('calcRateUnit').value = 'kg';
  }
  calcRun();
  if(goal !== 'maintain') calcPaceCommit();
}
// A pace that is more than there is room for (the calorie floor, 1 % of your weight a week, 1 kg a week) is written back into the
// field as the fastest there is room for, so the number in the field is always the number the plan uses (1.7.0). It runs when you
// leave the field, not while you type: typing "1" on the way to "1.5" must not be rewritten under your finger.
function calcPaceCommit(){
  const N = window.BSNutrition;
  if(!N || !document.getElementById('calcRateVal')) return;
  const res = N.calc(calcInput());
  if(res.ok && res.goal !== 'maintain'){
    const asked = calcPaceKg();
    if(isFinite(asked) && res.rate.max >= 0.05 && asked > res.rate.max + 0.004){
      const val = state.tools.calcRateUnit === 'g' ? String(Math.round(res.rate.max * 1000)) : String(res.rate.max);
      document.getElementById('calcRateVal').value = val;
      state.tools.calcRateVal = val;
      debouncedSave();
    }
  }
  calcDraw();
}
// Switching between kg and grams keeps the amount: 620 g a week becomes 0.62 kg a week, not 620 kg (1.7.0)
function calcPaceUnitChange(){
  const rv = document.getElementById('calcRateVal'), ru = document.getElementById('calcRateUnit');
  if(rv && ru){
    const was = state.tools.calcRateUnit === 'g' ? 'g' : 'kg', now = ru.value === 'g' ? 'g' : 'kg';
    const v = parseFloat(String(rv.value).replace(',', '.'));
    if(was !== now && isFinite(v) && v > 0) rv.value = now === 'g' ? String(Math.round(v * 1000)) : String(Math.round(v) / 1000);
  }
  calcRun();
}
// the fields -> state.tools -> the screen
function calcRun(){
  const el = id => document.getElementById(id);
  if(!el('calcWeight') || !el('calcCalVal')) return;
  const T = state.tools;
  T.calcWeight = el('calcWeight').value; T.calcAge = el('calcAge').value; T.calcHeight = el('calcHeight').value;
  T.calcGender = el('calcGender').value || 'male'; T.calcActivity = el('calcActivity').value || 'moderate';
  T.calcGoal = el('calcGoal').value || 'maintain';
  T.calcRateVal = el('calcRateVal').value; T.calcRateUnit = el('calcRateUnit').value || 'kg';
  T.calcBodyFat = el('calcBodyFat').value; T.calcGoalWeight = el('calcGoalWeight').value;
  debouncedSave();
  calcDraw();
}
function calcSetChoice(key, val){
  if(!CALC_CHOICES[key] || CALC_CHOICES[key].indexOf(String(val)) < 0) return;
  state.tools[key] = String(val);
  debouncedSave();
  calcDraw();
}
function calcShuffle(){ state.tools.calcVariant = ((parseInt(state.tools.calcVariant, 10) || 0) + 1) % 1000; debouncedSave(); calcDraw(); }
function calcToggleShop(){ calcShopOpen = !calcShopOpen; calcDraw(); }
function calcSetPace(val){
  const rv = document.getElementById('calcRateVal'), ru = document.getElementById('calcRateUnit');
  if(rv) rv.value = String(val);
  if(ru) ru.value = 'kg';
  calcRun();
}
function calcPaceKg(){
  const v = parseFloat(String(state.tools.calcRateVal).replace(',', '.'));
  return isFinite(v) ? (state.tools.calcRateUnit === 'g' ? v / 1000 : v) : NaN;
}
function calcDrawPresets(res){
  const wrap = document.getElementById('calcPresets'), N = window.BSNutrition;
  const goal = state.tools.calcGoal;
  if(!wrap || !N) return;
  const list = N.presets(goal, res && res.ok ? res.rate.max : undefined);
  const now = calcPaceKg();
  wrap.innerHTML = list.map(p => {
    const on = isFinite(now) && Math.abs(now - p.rate) < 0.0005;
    return `<button type="button" class="chip${on ? ' active' : ''}" aria-pressed="${on ? 'true' : 'false'}" data-action="calcPace" data-val="${p.rate}">${escHtml(t('pace_' + p.name))} · ${p.rate}</button>`;
  }).join('');
}
function calcPace2(x){ return String(Math.round(x * 100) / 100); }
// the line under the pace field: what the pace does to your day, or - when it is more than there is room for - what is used instead and why
function calcDrawPace(res){
  const el = document.getElementById('calcPaceInfo'), N = window.BSNutrition;
  if(!el || !N) return;
  const T = state.tools;
  if(!res || !res.ok || (T.calcGoal || 'maintain') === 'maintain' || res.goal === 'maintain'){ el.textContent = ''; el.classList.remove('limited'); return; }
  const r = res.rate, v = res.v;
  const floor = calcNum(N.KCAL_FLOOR[v.sex]);
  const why = { room: tf('pw_room', { floor }), floor: tf('pw_floor', { floor }), weight: t('pw_weight'), kg: t('pw_kg'), surplus: t('pw_surplus') }[r.maxBy] || '';
  const asked = calcPaceKg();
  let text, limited = true;
  if(r.maxBy === 'room') text = tf('calc_pace_room', { why });
  else if(isFinite(asked) && asked > r.max + 0.004) text = tf('calc_pace_held', { asked: calcPace2(asked), rate: calcPace2(r.max), why });
  else if(isFinite(asked) && r.max >= 0.05 && asked >= r.max - 0.004) text = tf('calc_pace_max', { rate: calcPace2(r.max), why });
  else { limited = false; text = tf(res.goal === 'lose' ? 'calc_pace_less' : 'calc_pace_more', { delta: calcNum(Math.abs(r.kcal)), tdee: calcNum(res.maintenance) }); }
  el.textContent = text;
  el.classList.toggle('limited', limited);
}

// ── Body fat: an estimate for someone who does not know it (1.7.0) ──
let calcBfOpen = false, calcBfEst = null;
function calcBfMethodNow(){ return state.tools.calcBfMethod === 'bmi' ? 'bmi' : 'tape'; }
function calcBfToggle(){ calcBfOpen = !calcBfOpen; calcBfDraw(); }
function calcBfSetMethod(m){ state.tools.calcBfMethod = m === 'bmi' ? 'bmi' : 'tape'; debouncedSave(); calcBfDraw(); }
// typing in a tape field: keep it, work the estimate out again
function calcBfRun(){
  const el = id => document.getElementById(id), T = state.tools;
  T.calcNeck = el('calcNeck').value; T.calcWaist = el('calcWaist').value; T.calcHip = el('calcHip').value;
  debouncedSave();
  calcBfDraw();
}
function calcBfDraw(){
  const N = window.BSNutrition, el = id => document.getElementById(id);
  const panel = el('calcBfPanel'), toggle = el('calcBfToggle');
  if(!N || !panel || !toggle) return;
  panel.hidden = !calcBfOpen;
  toggle.setAttribute('aria-expanded', calcBfOpen ? 'true' : 'false');
  if(!calcBfOpen) return;
  const T = state.tools, method = calcBfMethodNow(), female = T.calcGender === 'female';
  document.querySelectorAll('#calcBfMethods .chip').forEach(b => { const on = b.dataset.val === method; b.classList.toggle('active', on); b.setAttribute('aria-checked', on ? 'true' : 'false'); });
  el('calcBfTape').hidden = method !== 'tape';
  el('calcBfBmi').hidden = method !== 'bmi';
  el('calcHipField').style.display = female ? '' : 'none';
  const put = (id, v) => { const f = el(id); if(f && document.activeElement !== f) f.value = (v == null ? '' : v); };
  put('calcNeck', T.calcNeck); put('calcWaist', T.calcWaist); put('calcHip', T.calcHip);
  const base = { sex: T.calcGender, age: T.calcAge, height: T.calcHeight, weight: T.calcWeight };
  const r = method === 'tape' ? N.navyBodyFat(Object.assign({}, base, { neck: T.calcNeck, waist: T.calcWaist, hip: T.calcHip })) : N.bmiBodyFat(base);
  const out = el('calcBfResult'), btn = el('calcBfUse');
  calcBfEst = r.ok ? r : null;
  if(r.ok){
    out.textContent = tf('bf_result', { pct: calcRound1(r.pct), margin: r.margin });
    out.classList.remove('bad');
    btn.hidden = false;
    btn.textContent = tf('bf_use', { pct: calcRound1(r.pct) });
    return;
  }
  btn.hidden = true;
  const names = { age: 'bf_w_age', height: 'bf_w_height', weight: 'bf_w_weight', neck: 'bf_w_neck', waist: 'bf_w_waist', hip: 'bf_w_hip' };
  const p = r.problems || [];
  let msg;
  if(p.indexOf('under18') >= 0) msg = t('bf_under18');
  else if(p.indexOf('measure') >= 0) msg = t('bf_bad_measure');
  else if(p.indexOf('result') >= 0) msg = t('bf_bad_result');
  else msg = tf('bf_need', { what: p.map(k => t(names[k] || 'bf_w_height')).join(', ') });
  out.textContent = msg;
  out.classList.toggle('bad', p.indexOf('measure') >= 0 || p.indexOf('result') >= 0);
}
// "Use 16.1%": the number goes into the Body fat field above and the numbers follow
function calcBfUse(){
  if(!calcBfEst) return;
  const field = document.getElementById('calcBodyFat');
  if(field) field.value = calcRound1(calcBfEst.pct);
  const out = document.getElementById('calcBfResult'), btn = document.getElementById('calcBfUse');
  const pct = calcRound1(calcBfEst.pct);
  calcRun();
  if(out) out.textContent = tf('bf_in', { pct });
  if(btn) btn.hidden = true;
}
function calcWarningText(code, res){
  const N = window.BSNutrition, v = res.v;
  switch(code){
    case 'young': return t('cw_young');
    case 'young_nodeficit': return t('cw_young_nodeficit');
    case 'underweight_nodeficit': return t('cw_underweight');
    case 'pace_cap': return tf('cw_pace_cap', { rate: calcRate(res.rate.effective) });
    case 'pace_floor': return tf('cw_pace_floor', { floor: calcNum(N.KCAL_FLOOR[v.sex]), rate: calcRate(res.rate.effective) });
    case 'no_deficit_room': return tf('cw_no_room', { floor: calcNum(N.KCAL_FLOOR[v.sex]) });
    case 'pace_big_cut': return t('cw_big_cut');
    case 'protein_capped': return t('cw_protein_capped');
    case 'senior': return t('cw_senior');
    case 'goalweight_wrongway': return t('cw_gw_wrong');
    case 'goalweight_low': return tf('cw_gw_low', { kg: calcRound1(v.goalWeight) });
    case 'bodyFat_ignored': return t('cw_bf_ignored');
    case 'goalWeight_ignored': return t('cw_gw_ignored');
  }
  return '';
}
function calcDrawEmpty(){
  const set = (id, v) => { const el = document.getElementById(id); if(el) el.textContent = v; };
  ['calcCalVal','calcProteinVal','calcCarbVal','calcFatVal','calcFiberVal','calcWaterVal','calcMaintVal','calcBmrVal'].forEach(id => set(id, '–'));
  set('calcHeroSub', t('calc_fill_in'));
  ['calcNotes','calcLegend','calcGoalLine','calcPlanNotes','calcPlanTotal','calcWhy','calcShop','calcPaceInfo','calcBmrNote'].forEach(id => { const el = document.getElementById(id); if(el) el.innerHTML = ''; });
  const bar = document.getElementById('calcMacroBar'); if(bar) bar.classList.add('empty');
  const lede = document.getElementById('calcProteinLede'); if(lede) lede.textContent = t('calc_fill_in_protein');
  ['Min','Good','Max'].forEach(k => { set('calcLv' + k + 'G', '–'); set('calcLv' + k + 'Kg', ''); set('calcLv' + k + 'Cost', ''); });
  const meals = document.getElementById('calcPlanMeals'); if(meals) meals.innerHTML = `<div class="empty-msg">${escHtml(t('calc_plan_empty'))}</div>`;
  const shop = document.getElementById('calcShop'); if(shop) shop.hidden = true;
}
function calcDraw(){
  const N = window.BSNutrition, T = state.tools;
  if(!N || !document.getElementById('calcCalVal')) return;
  const goalSel = T.calcGoal || 'maintain';
  document.getElementById('calcRateField').style.display = goalSel === 'maintain' ? 'none' : 'block';
  const level = calcChoice('calcLevel'), diet = calcChoice('calcDiet'), meals = parseInt(calcChoice('calcMeals'), 10);
  document.querySelectorAll('#calcDietChips .chip').forEach(b => { const on = b.dataset.val === diet; b.classList.toggle('active', on); b.setAttribute('aria-checked', on ? 'true' : 'false'); });
  document.querySelectorAll('#calcMealChips .chip').forEach(b => { const on = b.dataset.val === String(meals); b.classList.toggle('active', on); b.setAttribute('aria-checked', on ? 'true' : 'false'); });
  const res = N.calc(calcInput());
  calcDrawPresets(res);
  calcBfDraw();
  if(!res.ok){ calcDrawEmpty(); return; }
  calcDrawPace(res);
  const set = (id, v) => { document.getElementById(id).textContent = v; };
  const html = (id, v) => { document.getElementById(id).innerHTML = v; };
  const g = t('unit_g'), kcal = t('unit_kcal');

  // 1. the day in numbers
  set('calcCalVal', `${calcNum(res.kcal)} ${kcal}`);
  const eff = res.goal !== 'maintain' && Math.abs(res.rate.kcal) >= 25;
  set('calcHeroSub', eff ? tf(res.goal === 'lose' ? 'calc_hero_lose' : 'calc_hero_build', { rate: calcRate(res.rate.effective) }) : t('calc_hero_maintain'));
  html('calcNotes', res.warnings.map(c => calcWarningText(c, res)).filter(Boolean).map(s => `<div class="calc-note">${escHtml(s)}</div>`).join(''));
  html('calcProteinVal', `${calcNum(res.protein.g)} ${g}<small>${escHtml(tf('calc_per_kg_meal', { kg: calcRound1(res.protein.perKg), meal: calcNum(res.protein.perMeal) }))}</small>`);
  set('calcCarbVal', `${calcNum(res.carbs.g)} ${g}`);
  set('calcFatVal', `${calcNum(res.fat.g)} ${g}`);
  set('calcFiberVal', `${calcNum(res.fiber)} ${g}`);
  set('calcWaterVal', `${(res.water / 1000).toFixed(1)} L`);
  set('calcMaintVal', `${calcNum(res.maintenance)} ${kcal}`);
  set('calcBmrVal', `${calcNum(res.bmr.kcal)} ${kcal}`);
  html('calcBmrNote', res.bmrAlt ? escHtml(tf('calc_bmr_alt', { bmr: calcNum(res.bmr.kcal), alt: calcNum(res.bmrAlt.kcal), lean: calcRound1(res.v.weight * (1 - res.v.bodyFat / 100)) })) : '');
  const bar = document.getElementById('calcMacroBar');
  bar.classList.remove('empty');
  bar.querySelector('.mb-p').style.width = res.shares.p + '%';
  bar.querySelector('.mb-c').style.width = res.shares.c + '%';
  bar.querySelector('.mb-f').style.width = res.shares.f + '%';
  html('calcLegend', `<span class="lg lg-p">${escHtml(t('lbl_protein'))} <b>${res.shares.p}%</b></span><span class="lg lg-c">${escHtml(t('lbl_carbs'))} <b>${res.shares.c}%</b></span><span class="lg lg-f">${escHtml(t('lbl_fat'))} <b>${res.shares.f}%</b></span>`);
  const gw = res.goalWeight;
  html('calcGoalLine', gw && gw.weeks ? escHtml(tf('calc_goalline', { kg: calcRound1(gw.kg), time: gw.weeks <= 12 ? tf('calc_weeks', { n: gw.weeks }) : tf('calc_months', { n: Math.round(gw.weeks / 4.345) }) })) : '');

  // 2. three protein levels, and what each costs a day
  const plans = {};
  ['min','good','max'].forEach(k => {
    const rk = k === level ? res : N.calc(calcInput(k));
    const pk = N.plan(rk, { diet, meals, variant: parseInt(T.calcVariant, 10) || 0 });
    plans[k] = { res: rk, plan: pk };
    const cap = k.charAt(0).toUpperCase() + k.slice(1);
    set('calcLv' + cap + 'G', `${calcNum(rk.protein.g)} ${g}`);
    set('calcLv' + cap + 'Kg', tf('calc_lv_kg', { kg: calcRound1(rk.protein.perKg) }));
    set('calcLv' + cap + 'Cost', pk.ok ? tf('calc_lv_cost', { cost: calcMoney(pk.cost.day) }) : '');
  });
  document.querySelectorAll('#calcLevels .calc-level').forEach(b => { const on = b.dataset.val === level; b.classList.toggle('active', on); b.setAttribute('aria-checked', on ? 'true' : 'false'); });
  set('calcProteinLede', tf('calc_protein_lede', { good: calcNum(plans.good.res.protein.g), min: calcNum(plans.min.res.protein.g), max: calcNum(plans.max.res.protein.g), meal: calcNum(Math.round(plans.good.res.protein.g / meals)) }));

  // 3. a day of food
  const plan = plans[level].plan;
  calcDrawPlan(plan, plans[level].res, meals);

  // 4. how it was worked out
  calcDrawWhy(res);
}
function calcDrawPlan(plan, res, wantedMeals){
  const html = (id, v) => { document.getElementById(id).innerHTML = v; };
  const g = t('unit_g'), kcal = t('unit_kcal');
  if(!plan.ok){ html('calcPlanMeals', ''); html('calcPlanTotal', ''); return; }
  html('calcPlanTotal', `<div class="pt-main"><b>${calcNum(plan.totals.kcal)}</b> ${kcal} · <b>${calcNum(plan.totals.p)}</b> ${g} ${escHtml(t('lbl_protein').toLowerCase())}</div>` +
    `<div class="pt-sub">${escHtml(tf('calc_plan_macros', { c: calcNum(plan.totals.c), f: calcNum(plan.totals.f), fib: calcNum(plan.totals.fiber) }))}</div>` +
    `<div class="pt-cost">${escHtml(tf('calc_plan_cost', { day: calcMoney(plan.cost.day), week: '€' + Math.round(plan.cost.week) }))}</div>`);
  html('calcPlanMeals', plan.meals.map(m =>
    `<div class="calc-meal"><div class="cm-head"><span class="cm-slot">${escHtml(m.slot)}</span><span class="cm-sum">${calcNum(m.kcal)} ${kcal} · ${calcNum(m.p)} ${g} ${escHtml(t('lbl_protein').toLowerCase())}</span></div>` +
    `<div class="cm-title">${escHtml(m.title)}</div><ul class="cm-items">` +
    m.items.map(l => `<li><span class="ci-text">${escHtml(l.text)}</span><span class="ci-p">${l.p >= 0.5 ? calcNum(l.p) + ' ' + g + ' ' + escHtml(t('lbl_protein').toLowerCase()) : ''}</span></li>`).join('') + `</ul></div>`).join(''));
  const notes = [];
  if(plan.meals.length !== wantedMeals) notes.push(t('cn_fewer_meals'));
  if(plan.aim.raised) notes.push(tf('cn_raised', { aim: calcNum(plan.aim.p), got: calcNum(plan.totals.p), want: calcNum(res.protein.g) }));
  if(Math.abs(plan.miss.kcal) > 5) notes.push(tf('cn_kcal_off', { pct: calcRound1(Math.abs(plan.miss.kcal)), dir: t(plan.miss.kcal > 0 ? 'cn_over' : 'cn_under') }));
  if(plan.miss.p < -10) notes.push(tf('cn_protein_short', { got: calcNum(plan.totals.p), want: calcNum(plan.aim.p) }));
  notes.push(t('cn_prices'));
  html('calcPlanNotes', notes.map(s => `<div class="calc-note">${escHtml(s)}</div>`).join(''));
  const shop = document.getElementById('calcShop'), btn = document.getElementById('calcShopBtn');
  shop.hidden = !calcShopOpen;
  if(btn) btn.setAttribute('aria-expanded', calcShopOpen ? 'true' : 'false');
  if(calcShopOpen){
    const list = window.BSNutrition.shopping(plan);
    shop.innerHTML = `<div class="shop-title">${escHtml(t('calc_shop_title'))}</div><ul class="shop-list">` +
      list.map(x => `<li><span class="si-text">${escHtml(x.text)}</span><span class="si-eur">€${x.eur.toFixed(2)}</span></li>`).join('') +
      `</ul><div class="shop-total">${escHtml(tf('calc_shop_total', { week: calcMoney(plan.cost.week) }))}</div>`;
  } else shop.innerHTML = '';
}
function calcDrawWhy(res){
  const N = window.BSNutrition, v = res.v, g = t('unit_g'), kcal = t('unit_kcal');
  const act = document.getElementById('calcActivity');
  const actLabel = act && act.selectedOptions && act.selectedOptions[0] ? act.selectedOptions[0].textContent.replace(/\s*\(.*\)\s*$/, '') : v.activity;
  const lines = [
    res.bmr.method === 'katch'
      ? tf('cwhy_bmr_katch', { bmr: calcNum(res.bmr.kcal), lean: calcRound1(v.weight * (1 - v.bodyFat / 100)), alt: calcNum(res.bmrAlt ? res.bmrAlt.kcal : N.mifflin(v)) })
      : tf('cwhy_bmr_mifflin', { bmr: calcNum(res.bmr.kcal) }),
    tf('cwhy_tdee', { act: actLabel, f: String(N.ACTIVITY[v.activity]), tdee: calcNum(res.maintenance) }),
    res.goal === 'maintain' ? t('cwhy_goal_maintain') :
      tf(res.goal === 'lose' ? 'cwhy_goal_lose' : 'cwhy_goal_build', { rate: calcRate(res.rate.effective), delta: calcNum(Math.abs(res.rate.kcal)), kcal: calcNum(res.kcal) }),
    tf('cwhy_protein', { perKg: calcRound1(res.protein.perKg), ref: calcRound1(res.ref), g: calcNum(res.protein.g), w: calcRound1(v.weight) }),
    tf('cwhy_fat', { fat: calcNum(res.fat.g), carbs: calcNum(res.carbs.g) }),
    t('cwhy_fibre_water'),
    t('cwhy_rule'),
    tf('cwhy_limits', { floor: calcNum(N.KCAL_FLOOR[v.sex]) })
  ];
  document.getElementById('calcWhy').innerHTML = lines.map(s => `<li>${escHtml(s)}</li>`).join('');
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

// ── Notes ──
// The Notes card on the Agenda page is gone: every day has its own Notes tab in the calendar. Anything written
// in the old card is copied, once, into the day it was written on - so nothing is lost.
function genNoteId(){ return 'n' + Date.now().toString(36) + Math.random().toString(36).slice(2,8); }
function migrateOldNotes(){
  if(state.oldNotesMovedToDays === true) return;
  const old = [];
  if(Array.isArray(state.notesList)) state.notesList.forEach(n => { if(n && typeof n.text === 'string' && n.text.trim()) old.push({ text: n.text.trim(), at: Number(n.date) || Date.now() }); });
  if(typeof state.notes === 'string' && state.notes.trim()) old.push({ text: state.notes.trim(), at: Date.now() });
  old.forEach(n => {
    const key = BSCore.keyFromDate(new Date(n.at));
    const e = ensureEntryObj(key);
    if(String(e.note || '').indexOf(n.text) !== -1) return; // already there (restored from a backup, say)
    e.note = e.note && e.note.trim() ? e.note.replace(/\s+$/, '') + '\n\n' + n.text : n.text;
  });
  state.oldNotesMovedToDays = true;
  if(old.length) debouncedSave();
}

const BOTTLE_SVG = '<svg viewBox="0 0 24 40" width="18" height="30" fill="currentColor"><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M7 8 L7 11 Q4 14 4 19 L4 35 Q4 37 6 37 L18 37 Q20 37 20 35 L20 19 Q20 14 17 11 L17 8 Z"/></svg>';

// ── Dates as dd-mm-yyyy (the workout journal and the check-in chart use this; it started as the photos' date label) ──
function fmtDateDMY(iso){
  if(!iso) return t('lbl_nodate');
  const [y,m,d] = iso.split('-').map(Number);
  return ln(`${pad2(d)}-${pad2(m)}-${y}`);
}

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

// The timer panels change colour with the phase - gold to get ready, violet to warm up, red for work (a lift, a hold),
// blue-green for rest, green when done - so you can tell at a glance which one it is. The colours themselves are in medieval.css (.timer-gauge[data-phase]);
// they do not follow the accent colour, so work and rest never look alike whichever accent is chosen.
function setTimerPhase(fill, phase){
  const gauge = fill && fill.closest ? fill.closest('.timer-gauge') : null;
  if(gauge && gauge.getAttribute('data-phase') !== phase) gauge.setAttribute('data-phase', phase);
}

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

  let total = 1, phase = 'idle', label = t('st_ready');
  if(ctState.phase==='prep'){ total = ctState.prepSec||1; phase='prep'; label=t('st_getready'); }
  else if(ctState.phase==='work'){ total = ctState.workSec; phase='work'; label=t('st_work'); }
  else if(ctState.phase==='rest'){ total = ctState.restSec||1; phase='rest'; label=t('st_rest'); }
  else if(ctState.phase==='done'){ total = 1; phase='done'; label=t('st_donebang'); }

  const frac = ctState.phase==='idle' ? 0 : (ctState.phase==='done' ? 1 : Math.min(1, ctState.remaining/total));
  fill.style.width = (frac*100)+'%';
  setTimerPhase(fill, phase);
  phaseEl.textContent = label;
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
  sel.innerHTML = opts.map(o=>`<option value="${escAttr(o.id)}">${escHtml(o.label)}</option>`).join('');
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
        <div class="wl-hist-date">${fmtDateDMY(p.date)}</div>
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
  // The chart is drawn 600 units wide and shown about 330px wide, so the old 9-unit labels came out near 5px: unreadable.
  // 17 units is about 9px on a phone; the left margin grows with the longest label (a water total can be 5 digits).
  const FS = 17;
  const yLabels = [0,0.25,0.5,0.75,1].map(f => (yMax - f*(yMax-yMin)).toFixed(1));
  const W = 600, H = 220, padR = 14, padT = 16, padB = 32;
  const padL = Math.max(44, Math.ceil(Math.max.apply(null, yLabels.map(s => s.length)) * FS * 0.56) + 12);
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
  const gridLines = [0,0.25,0.5,0.75,1].map((f,i)=>{
    const y = padT + f*plotH;
    return `<line x1="${padL}" y1="${y.toFixed(1)}" x2="${W-padR}" y2="${y.toFixed(1)}" stroke="var(--border)" stroke-width="1" opacity="0.6"/>
      <text x="${padL-7}" y="${(y+FS*0.35).toFixed(1)}" text-anchor="end" font-size="${FS}" fill="var(--muted)">${yLabels[i]}</text>`;
  }).join('');

  chartWrap.innerHTML = `
    <svg id="checkinSvg" viewBox="0 0 ${W} ${H}" style="direction:ltr" xmlns="http://www.w3.org/2000/svg">
      ${gridLines}
      <path d="${areaD}" fill="var(--accent-dim)" stroke="none"/>
      <path d="${pathD}" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${dots}
      <line id="ciHoverLine" x1="0" y1="${padT}" x2="0" y2="${padT+plotH}" stroke="var(--accent)" stroke-width="1" stroke-dasharray="3,3" opacity="0"/>
      <circle id="ciHoverDot" r="4.5" fill="var(--accent)" stroke="var(--surface)" stroke-width="2" opacity="0"/>
      <text x="${xFor(first).toFixed(1)}" y="${H-8}" text-anchor="start" font-size="${FS}" fill="var(--muted)">${fmtDateDMY(first.date)}</text>
      <text x="${xFor(last).toFixed(1)}" y="${H-8}" text-anchor="end" font-size="${FS}" fill="var(--muted)">${fmtDateDMY(last.date)}</text>
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
    tooltip.innerHTML = `<div class="cti-date">${fmtDateDMY(p.date)}</div><div class="cti-val"><span class="cti-dot"></span>${escHtml(metricLabel)}: ${p.value}</div>`;
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
  dqRender();
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
// The coach speaks English (US). Only English voices are offered, US English first and the other English accents
// (UK, Australian, Indian...) after them; the automatic voice is the first of the list, so a phone with a US voice
// always gets one, and a phone with only another English accent still has something to say with.
const SPEECH_LANG = 'en-US';
let cachedVoices = [];
function voiceTag(v){ return String((v && v.lang) || '').toLowerCase().replace(/_/g, '-'); }
function isUsVoice(v){ return voiceTag(v) === 'en-us'; }
function isEnglishVoice(v){ const g = voiceTag(v); return g === 'en' || g.indexOf('en-') === 0; }
function refreshVoiceList(){ // always fetch fresh - voice lists load asynchronously on many devices, so a cached list can go stale
  let all = [];
  try{ all = window.speechSynthesis ? window.speechSynthesis.getVoices() : []; }catch(e){ all = []; }
  cachedVoices = all.filter(isUsVoice).concat(all.filter(v => !isUsVoice(v) && isEnglishVoice(v)));
  return all.length;
}
function pickVoiceForLang(){
  refreshVoiceList();
  return cachedVoices[0] || null;
}
// If the person picked a specific voice in the Voice Coach card, use that one. Otherwise fall back to the
// first (best-ranked) US English voice - or the first English one when the phone has no US voice.
function pickPreferredVoice(){
  refreshVoiceList();
  const chosenURI = state.profile && state.profile.ttsVoiceURI;
  if(chosenURI){
    const chosen = cachedVoices.find(v => v.voiceURI === chosenURI);
    if(chosen) return chosen;
  }
  return pickVoiceForLang();
}
// Builds the <select id="ltVoiceSelect"> options from the English voices installed on this device (US first),
// so people can pick a more natural-sounding voice than whatever the engine auto-selects.
function populateLtVoiceSelect(){
  const sel = document.getElementById('ltVoiceSelect');
  if(!sel) return;
  refreshVoiceList();
  const chosenURI = (state.profile && state.profile.ttsVoiceURI) || '';
  let opts = '<option value="">' + t('opt_voice_auto') + '</option>';
  opts += cachedVoices.map(v => `<option value="${escAttr(v.voiceURI)}">${escHtml(v.name)}${isUsVoice(v) ? '' : ' (' + escHtml(v.lang) + ')'}</option>`).join('');
  sel.innerHTML = opts;
  sel.value = cachedVoices.some(v => v.voiceURI === chosenURI) ? chosenURI : '';
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
    const voice = pickPreferredVoice();
    if(voice){
      u.voice = voice;
      u.lang = voice.lang;
      setVoiceNote(null);
    } else {
      u.lang = SPEECH_LANG;
      setVoiceNote(null);
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
// over to the program editor page, so both stay showing the same
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
  opts += state.warmups.map(w=>`<option value="${escAttr(w.id)}">${escHtml(w.name)}</option>`).join('');
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
  ltRenderPlan();
}
let ltSelectedWarmupId = '';
function ltSetWarmupChoice(val){
  ltSelectedWarmupId = val;
  state.ltWarmupId = val;
  ltRenderPlan();
  save();
}

// ── The Voice Coach before you start: the program and week, one button per day, and what the day holds ──
// (While you train, CSS hides all of this and shows only what is happening now - see data-lt on #timerView-lifting.)
// Day buttons are one more way to use the Day list on the "Change" page: both go through ltOnDayChange.
function ltPickDay(i){
  const sel = document.getElementById('ltDaySelect');
  if(!sel || lt.running || !(i >= 0)) return;
  sel.value = String(i);
  ltOnDayChange();
}
// "4 × 12", "3 × 45s", "12 reps", "45s" - what one exercise asks for, as short as it can be.
// On a straight day this is what the coach will really do: an exercise that names no sets gets the coach's own 4 (lt.defaultSets);
// in a circuit the rounds belong to the day, so no sets are shown at all.
function vcExDetail(ex, circuit){
  const timed = ex.mode === 'time' && ex.holdSec;
  const work = timed ? ex.holdSec + 's' : (ex.reps ? String(ex.reps) : '');
  const sets = circuit ? 0 : (ex.sets || (work ? 4 : 0));
  if(sets > 1 && work) return sets + ' × ' + work;
  if(work) return timed ? work : work + ' ' + t('lbl_repsword');
  if(sets) return sets + ' ' + (sets === 1 ? t('lbl_set_singular') : t('lbl_set_plural'));
  return '';
}
function ltRenderPlan(){
  const nameEl = document.getElementById('vcPlanName');
  const daysEl = document.getElementById('vcDays');
  const listEl = document.getElementById('vcList');
  if(!nameEl || !daysEl || !listEl || !state.programs) return;
  const program = state.programs[state.ltProgramIdx || 0];
  const block = program && program.blocks ? program.blocks[state.ltBlockIdx || 0] : null;
  const day = ltGetSelectedDay();
  nameEl.innerHTML = program ? '<b>' + escHtml(program.name) + '</b>' + (block ? '<span>' + escHtml(block.name) + '</span>' : '') : '';
  const dIdx = state.ltDayIdx || 0;
  daysEl.innerHTML = (block && block.days ? block.days : []).map(function(d, i){
    return `<button type="button" class="day-chip${i === dIdx ? ' active' : ''}${d.rest ? ' rest' : ''}" data-action="ltPickDay" data-idx="${i}" aria-pressed="${i === dIdx ? 'true' : 'false'}">${escHtml(d.label)}</button>`;
  }).join('');
  let can = false, html = '';
  if(day && day.rest){
    const note = String(day.restNote || '').trim();
    html = `<div class="vc-empty"><div class="vc-empty-title">🌙 ${escHtml(t('vc_rest_day'))}</div><div class="vc-empty-sub">${escHtml(note || t('vc_rest_default'))}</div></div>`;
  } else if(day){
    const named = (day.exercises || []).filter(function(e){ return e && e.name && String(e.name).trim(); });
    if(!named.length){
      html = `<div class="vc-empty"><div class="vc-empty-title">${escHtml(t('vc_no_exercises'))}</div><button type="button" class="btn btn-ghost btn-sm" data-action="ltOpenEditor">${t('vc_add_some')}</button></div>`;
    } else {
      can = true;
      const circuit = !!day.circuit;
      const bits = [];
      if(circuit) bits.push(tf('vc_circuit', { n: getDayRounds(day) }));
      bits.push(named.length === 1 ? t('vc_n_ex_1') : tf('vc_n_ex', { n: named.length }));
      let warmId = '';
      try{ warmId = ltSelectedWarmupId; }catch(e){}   // (not yet declared while the page is still starting up)
      const w = warmId ? (state.warmups || []).find(function(x){ return String(x.id) === String(warmId); }) : null;
      if(w) bits.push(tf('vc_warm_first', { name: w.name }));
      html = '<div class="vc-list-head">' + escHtml(bits.join(' · ')) + '</div>' + named.map(function(ex){
        const det = vcExDetail(ex, circuit);
        const legacy = !det && ex.detail ? String(ex.detail) : '';   // an exercise with only free text keeps showing it
        return '<div class="vc-row' + (legacy ? ' vc-row-note' : '') + '"><span class="vc-name">' + escHtml(ex.name) + '</span>' +
          (det ? '<span class="vc-det">' + escHtml(det) + '</span>' : '') +
          (legacy ? '<span class="vc-det vc-det-text">' + escHtml(legacy) + '</span>' : '') + '</div>';
      }).join('');
    }
  }
  listEl.innerHTML = html;
  const view = document.getElementById('timerView-lifting');
  if(view) view.setAttribute('data-can', can ? '1' : '0');   // no Start button on a rest day or a day without exercises
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
// A button whose words change (Start / Start again, Stop / Close): the data-i18n key says which, so applyLanguage keeps it right
function vcSetLabel(btn, key){
  if(btn && btn.getAttribute('data-i18n') !== key){ btn.setAttribute('data-i18n', key); btn.innerHTML = t(key); }
}
// What a step of the sequence is: "Set 2 / 4" ("Rounds 1 / 3" in a circuit), and the reps - or the hold - it asks for
function ltStepSetText(step){
  const ex = lt.exercises[step.idx];
  if(lt.circuitMode) return lt.totalRounds > 1 ? `${t('lbl_roundword')} ${ln(step.round)} / ${ln(lt.totalRounds)}` : '';
  const total = (ex && ex.sets) || lt.defaultSets;
  return total > 1 ? `${t('st_set')} ${ln(step.set)} / ${ln(total)}` : '';
}
function ltRepsText(ex, showHold){
  if(!ex) return '';
  if(ex.mode === 'time' && ex.holdSec) return showHold ? `${ex.holdSec}s ${t('lbl_holdword')}` : '';   // while it runs, the countdown says it
  return ex.reps ? `${ex.reps} ${tphrase('reps_word')}` : '';
}
// The Voice Coach has two looks, and CSS picks one from data-lt on #timerView-lifting: "idle" shows your workout (the
// program, the day buttons, Start, the list); every other value shows the panel of what is happening now, with only the
// buttons that make sense at that moment: Done (a set of reps), Skip (a countdown) and Stop.
function ltRender(){
  const fill = document.getElementById('ltBarFill');
  const phaseEl = document.getElementById('ltPhase');
  const timeEl = document.getElementById('ltTime');
  const setLbl = document.getElementById('ltSetLbl');
  const repsLbl = document.getElementById('ltRepsLbl');
  const exNowEl = document.getElementById('ltExerciseNow');
  if(!fill) return;

  const curEx = lt.exercises[lt.idx];
  const isTimedLift = lt.phase === 'lift' && curEx && curEx.mode === 'time' && curEx.holdSec;
  const curWarmupStep = lt.phase === 'warmup' ? lt.warmupSteps[lt.warmupStepIdx] : null;

  const restMinusBtn = document.getElementById('ltRestMinus');
  const restPlusBtn = document.getElementById('ltRestPlus');
  let phase = 'idle', label = t('st_ready'), frac = 0, look = 'idle';
  if(restMinusBtn) restMinusBtn.style.display = lt.phase === 'rest' ? 'flex' : 'none';
  if(restPlusBtn) restPlusBtn.style.display = lt.phase === 'rest' ? 'flex' : 'none';
  if(lt.phase === 'getready'){
    phase = 'prep'; label = t('st_getready'); frac = lt.remaining/LT_GETREADY_SEC; look = 'getready';
  } else if(lt.phase === 'warmup'){
    phase = 'warmup'; label = t('st_warmup'); frac = curWarmupStep ? lt.remaining/curWarmupStep.seconds : 1; look = 'warmup';
  } else if(lt.phase === 'lift'){
    phase = 'work';
    if(isTimedLift){
      label = t('st_holding'); frac = lt.remaining/curEx.holdSec; look = 'hold';
    } else {
      label = t('st_lifting'); frac = 1; look = 'lift';
    }
  } else if(lt.phase === 'rest'){
    const total = (curEx && curEx.restSec) || lt.restSec || 1;
    phase = 'rest'; label = t('st_rest'); frac = Math.min(1, lt.remaining/total); look = 'rest';
  } else if(lt.phase === 'done'){
    phase = 'done'; label = t('st_donebang'); frac = 1; look = 'done';
  }
  const view = document.getElementById('timerView-lifting');
  if(view && view.getAttribute('data-lt') !== look) view.setAttribute('data-lt', look);
  vcSetLabel(document.getElementById('ltStartBtn'), lt.phase === 'done' ? 'btn_vcagain' : 'btn_vcstart');
  vcSetLabel(document.getElementById('ltDoneBtn'), lt.circuitMode ? 'btn_donewithex' : 'btn_donewithset');   // a circuit has rounds, not sets
  vcSetLabel(document.getElementById('ltStopBtn'), lt.phase === 'done' ? 'btn_vcclose' : 'btn_vcstop');
  fill.style.width = (frac*100)+'%';
  setTimerPhase(fill, phase);
  phaseEl.textContent = label;
  timeEl.textContent = (lt.phase === 'rest' || isTimedLift || lt.phase === 'warmup' || lt.phase === 'getready') ? ln(lt.remaining) : (lt.phase === 'lift' ? '💪' : '--');

  if(lt.phase === 'idle'){
    setLbl.textContent = '';
    exNowEl.textContent = '';
    repsLbl.textContent = '';
  } else if(lt.phase === 'getready'){
    // the first thing you will do: the warm-up if there is one, otherwise the first exercise
    setLbl.textContent = '';
    exNowEl.textContent = lt.warmupSteps.length ? lt.warmupSteps[0].label : (curEx ? curEx.name : '');
    repsLbl.textContent = '';
  } else if(lt.phase === 'warmup'){
    setLbl.textContent = `${ln(lt.warmupStepIdx+1)} / ${ln(lt.warmupSteps.length)}`;
    exNowEl.textContent = curWarmupStep ? curWarmupStep.label : '';
    repsLbl.textContent = '';
  } else if(lt.phase === 'done'){
    setLbl.textContent = '';
    exNowEl.textContent = t('vc_complete');
    repsLbl.textContent = '';
  } else if(lt.phase === 'rest'){
    // Read the next step straight off the sequence rather than guessing from set/round math - this is correct for
    // both STRAIGHT mode and for a CIRCUIT wrapping from the last exercise of one round into the first of the next.
    // The whole panel is about what comes next: its name, which set (or round) it is, and its reps or hold.
    const nextStep = lt.sequence[lt.seqPos+1];
    const nextEx = nextStep ? lt.exercises[nextStep.idx] : null;
    exNowEl.textContent = nextEx ? (t('st_next') + ' ' + nextEx.name) : t('st_rest');
    setLbl.textContent = nextStep ? ltStepSetText(nextStep) : '';
    repsLbl.textContent = ltRepsText(nextEx, true);
  } else {
    // CRITICAL CIRCUIT RULE: a CIRCUIT day shows "Round X / Y" - the round count belongs to the whole day, never to a
    // single exercise - instead of the STRENGTH day's per-exercise "Set X / Y". The exercise itself is shown by name
    // in exNowEl, so no extra index is needed.
    setLbl.textContent = lt.circuitMode
      ? (lt.totalRounds > 1 ? `${t('lbl_roundword')} ${ln(lt.round)} / ${ln(lt.totalRounds)}` : '')
      : (lt.totalSets > 1 ? `${t('st_set')} ${ln(lt.set)} / ${ln(lt.totalSets)}` : '');
    exNowEl.textContent = lt.exercises[lt.idx].name;
    repsLbl.textContent = isTimedLift ? '' : ltRepsText(curEx, false);
  }
}

// ═══════════════════════════ INIT ═══════════════════════════
let appInitialized = false;
function startApp(){
  updateLockIndicator();
  featureStateInit(); // Daily To-Do record + reminders: tidy what was loaded (also from older versions) before anything draws it
  migrateOldNotes();
  state.profile.language = APP_LANG;
  applyLanguage();
  applyTheme();
  notifyLauncherSkin(); // the Android shell keeps the app icon in step with the look, also after a restore from a backup
  refreshVoiceList();
  populateLtVoiceSelect();
  if('speechSynthesis' in window){
    window.speechSynthesis.onvoiceschanged = function(){ refreshVoiceList(); populateLtVoiceSelect(); };
  }
  renderProfile();
  renderAgenda();
  renderAgendaCal();
  renderWorkouts();
  renderDailyTodos();
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

  setInterval(()=>{ renderAgenda(); featureTick(); }, 60000);
  wireFolioSwipe();
  document.addEventListener('visibilitychange', function(){ if(!document.hidden){ renderAgenda(); featureTick(); } });

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
  const OVERLAY_SELECTOR = '.modal-overlay, .sheet-page, .dropdown-panel, .tools-picker';
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

  // Prevents the page behind an open modal/dropdown from
  // scrolling (which previously caused the background to glitch/scroll
  // whenever a popup was open). Locks by pinning <body> in place at its
  // current scroll position, and restores that exact scroll position
  // when the last open overlay closes.
  // The page behind a pop-up is held still with overflow:hidden (see body.body-scroll-locked in stylese.css). It used to
  // be pinned with position:fixed, which on phones left the page the wrong size once the on-screen keyboard had been
  // used inside a pop-up: a blank strip and a tab bar floating above the bottom edge until the next tap.
  function lockBodyScroll(){
    if(document.body.classList.contains('body-scroll-locked')) return;
    document.body.classList.add('body-scroll-locked');
  }
  function unlockBodyScroll(){
    if(!document.body.classList.contains('body-scroll-locked')) return;
    document.body.classList.remove('body-scroll-locked');
  }

  // A pop-up that is closed stops being displayed at once, so it could not fade out. For the length of its exit
  // animation it gets .closing (motion.css keeps it on screen, unclickable, and plays the exit); it is gone after that.
  const CLOSING_MS = 340;
  function startClosing(el){
    if(!el.matches || !el.matches('.modal-overlay, .sheet-page')) return;
    el.classList.add('closing');
    clearTimeout(el._closingTimer);
    el._closingTimer = setTimeout(function(){ el.classList.remove('closing'); }, CLOSING_MS);
  }
  function endClosing(el){
    clearTimeout(el._closingTimer);
    if(el.classList && el.classList.contains('closing')) el.classList.remove('closing');
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
        endClosing(el);
      } else if(!nowOpen && idx !== -1){
        overlayStack.splice(idx,1);
        startClosing(el);
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
  bind('h15','click',function(event){ switchToolsView('website') });
  bind('h17','click',function(event){ openBannerEditModal() });
  bind('h18','click',function(event){ closeBannerEditModal() });
  bind('h27','keydown',function(event){ if(event.key==='Enter'){applyCustomGoal();return false;} });
  bind('h28','click',function(event){ applyCustomGoal() });
  bind('h29','click',function(event){ clearCustomGoal() });
  bind('h30','change',function(event){ updateWaterCupSettings() });
  bind('h31','change',function(event){ updateWaterCupSettings() });
  bind('h32','change',function(event){ updateWaterCupSettings() });
  bind('h33','change',function(event){ updateWaterCupSettings() });
  bind('h34','change',function(event){ updateWaterCupSettings() });
  bind('h35','change',function(event){ updateWaterCupSettings() });
  bind('h37','keydown',function(event){ if(event.key==='Enter'){addMeasureType();return false;} });
  bind('h38','click',function(event){ addMeasureType() });
  bind('h40','click',function(event){ openExportModal() });
  bind('h41','click',function(event){ document.getElementById('importFileInput').click() });
  bind('h42','change',function(event){ handleImportFile(this) });
  bind('h44','change',function(event){ updateAutoLockSetting(this.value) });
  bind('h46','click',function(event){ openEraseModal() });
  bind('h47','keydown',function(event){ if(event.key==='Enter')addProfileGoal() });
  bind('h48','click',function(event){ addProfileGoal() });
  bind('h252','click',function(event){ toggleGoalsCard() });
  bind('h255','click',function(event){ openLtOptionsModal() });
  bind('h258','click',function(event){ closeLtOptionsModal() });
  bind('h262','click',function(event){ downloadSelectedProgram() });
  bind('h58','input',function(event){ calcRun() });
  bind('h59','change',function(event){ calcRun() });
  bind('h60','input',function(event){ calcRun() });
  bind('h61','input',function(event){ calcRun() });
  bind('h62','change',function(event){ calcRun() });
  bind('h63','change',function(event){ calcOnGoalChange() });
  bind('h64','input',function(event){ calcRun() });
  bind('h64','change',function(event){ calcPaceCommit() });
  bind('h65','change',function(event){ calcPaceUnitChange() });
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
  bind('h92','click',function(event){ agendaCalPrev() });
  bind('h93','click',function(event){ agendaCalNext() });
  bind('h94','click',function(event){ openCheckinModal() });
  bind('h95','click',function(event){ handleStartBtn() });
  bind('h96','click',function(event){ openStartDateModal() });
  bind('h97','click',function(event){ resetChallenge() });
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
  bind('h182','click',function(event){ closeStartDateModal() });
  bind('h183','click',function(event){ saveStartDateModal() });
  bind('h184','click',function(event){ closeAgendaEntry() });
  bind('h185','input',function(event){ updateEntrySleep(this.value) });
  bind('h186','click',function(event){ resetEntryWater() });
  bind('h187','keydown',function(event){ if(event.key==='Enter'){addEntryFood();return false;} });
  bind('h188','click',function(event){ addEntryFood() });
  bind('h189','input',function(event){ updateEntryNote(this.value) });
  bind('h190','click',function(event){ closeAgendaEntry() });
  bind('h250','keydown',function(event){ if(event.key==='Enter')addDailyTodo() });
  bind('h251','click',function(event){ addDailyTodo() });
  bind('h259','click',function(event){ switchToolPane('calc') });
  bind('h260','click',function(event){ switchToolPane('countdown') });
  bind('h261','click',function(event){ switchToolPane('circuit') });
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
  bind('h215','click',function(event){ addProgram() });
  bind('h216','click',function(event){ deleteProgram() });
  bind('h217','click',function(event){ openExternalProgramModal() });
  bind('h218','change',function(event){ selectProgram(parseInt(this.value)) });
  bind('h220','click',function(event){ addBlock() });
  bind('h221','click',function(event){ deleteBlock() });
  bind('h223','click',function(event){ addDay() });
  bind('h224','click',function(event){ deleteDay() });
  bind('h246','click',function(event){ duplicateBlock() });
  bind('h247','click',function(event){ duplicateDay() });
  bind('h225','click',function(event){ toggleRestDay() });
  bind('h239','click',function(event){ toggleCircuitMode() });
  bind('h228','click',function(event){ openWarmupLibraryModal(true) });
  bind('h229','click',function(event){ openWarmupBuilder(null, true) });
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
  bind('h256','click',function(event){ openDqModal() });
  bind('h257','click',function(event){ closeDqModal() });
  bind('h263','click',function(event){ closeCheckinModal() });
  bind('h264','click',function(event){ closeDtEditModal() });
  bind('h265','click',function(event){ openProgramEditModal() });
  bind('h266','click',function(event){ closeProgramEditModal() });
}
document.addEventListener('DOMContentLoaded', wireStaticHandlers);

// ═══════════════════════════ DYNAMIC EVENT DELEGATION (CSP: no inline handlers in rendered HTML) ═══════════════════════════
// Rendered lists (exercises, tabs, library items, kanban cards, etc.) carry a
// data-action="fnName" attribute instead of onclick/oninput. These two
// delegated listeners on document handle every one of them, including
// content that gets re-rendered later via innerHTML.
// ═══════════════════════════ DAILY TO-DO TRACKER, REMINDERS (new in 1.2.0) ═══════════════════════════
// The logic - streaks, history, sorting, moon phases - is in features-core.js (window.BSCore) and is
// tested without a browser (tools/test_core.sh). Below is the part that draws it and touches the state.

function bsIco(name, cls){ return (window.BSIcons && window.BSIcons.html) ? window.BSIcons.html(name, cls) : ''; }
// Locked = the password screen is up and the key is gone. Nothing may be written then (it would not be encrypted).
function appIsLocked(){
  try{
    const ls = document.getElementById('lockScreen');
    if(ls && ls.classList.contains('open')) return true;
    const m = getMeta();
    return !!(m.locked && !cryptoKey);
  }catch(e){ return false; }
}
function featureSnapshot(){ return JSON.stringify([state.dailyTodoReg, state.dailyTodoLog, state.reminders, state.agendaEntries && Object.keys(state.agendaEntries).length, state.remindersMigrated === true, (state.dailyTodos || []).length, (state.todos || []).length]); }
// Runs once at start (and after every unlock): tidy what was loaded - also data saved by 1.1.0 or imported
// from a backup - then record today.
function featureStateInit(){
  const before = featureSnapshot();
  dqNormalizeState();
  remNormalizeState();
  dqRecord();
  dqLastDay = dqToday();
  if(featureSnapshot() !== before) debouncedSave();
}
// Every minute, and whenever the app comes back to the front: midnight passes, reminders become overdue.
function featureTick(){
  if(appIsLocked()) return;
  const today = dqToday();
  if(dqLastDay !== today){
    dqLastDay = today;
    const before = featureSnapshot();
    dtCleanOnce();   // a just-once task ticked yesterday is gone this morning
    dqRecord();
    if(featureSnapshot() !== before) debouncedSave();
    dqSelectedDay = null;
    renderDailyTodos(); // after midnight the list shows everything unticked again
    dqRender();
    renderAgendaCal();
  }
}

// ─────────── Daily To-Do tracker (Check-in page) ───────────
// A short card on the Check-in page (#dqCard) and the whole record - for ever, from the first day anything was ticked -
// on a page of its own (#dqModal): progress, the roll of days month by month, what happened on a day, every task.
let dqSelectedDay = null;
let dqLastDay = null;
let dqViewDate = null;       // the 1st of the month the roll of days shows; null = this month

function dqToday(){ return BSCore.keyFromDate(new Date()); }
function dqModel(){ return { reg: state.dailyTodoReg, log: state.dailyTodoLog }; }
function dqNormalizeState(){
  const m = BSCore.deedsNormalize({ reg: state.dailyTodoReg, log: state.dailyTodoLog });
  state.dailyTodoReg = m.reg;
  state.dailyTodoLog = m.log;
  delete state.dailyTodoRange; // 1.2.0 had 7/30/90-day windows; the record is for ever now
  if(!Array.isArray(state.dailyTodos)) state.dailyTodos = [];
  // a task must be an object with a name (a hand-edited or damaged backup could hold anything)
  state.dailyTodos = state.dailyTodos.filter(it => it && typeof it === 'object' && !Array.isArray(it));
  state.dailyTodos.forEach(it => { it.text = String(it.text == null ? '' : it.text).slice(0, 200); });
  dtMigrateBoard();   // 1.5.2: the To-Do board is gone; its open tasks are just-once tasks now
  // 1.5.0: each task may carry its own days (sched) and reminder times (rem) - keep only what is usable (also from an imported backup)
  state.dailyTodos.forEach(it => {
    const sc = BSCore.schedNormalize(it.sched);
    if(sc) it.sched = sc; else delete it.sched;
    const tm = BSCore.timesClean(it.rem);
    if(tm.length) it.rem = tm; else delete it.rem;
    // 1.5.2: a just-once task has neither days nor reminders; anything else is not marked "once"
    if(it.once === true){ delete it.sched; delete it.rem; } else delete it.once;
    // 1.7.0: a priority is must / should / could or nothing (also from an imported backup)
    if(DT_PRIS.indexOf(it.pri) < 0) delete it.pri;
    // 1.8.0: a task's reminders make a sound unless sound is false
    if(it.sound !== false) delete it.sound;
  });
  dtCleanOnce();
}
// Brings the record up to date with the live list. Called after every tick / add / delete, at start and at midnight.
function dqRecord(){
  if(!Array.isArray(state.dailyTodos)) state.dailyTodos = [];
  // just-once tasks are not habits: they are left out of the record (streaks, percentages, the roll of days)
  BSCore.deedsSync(dqModel(), state.dailyTodos.filter(it => it && it.once !== true), dqToday());
}
function dqIsOpen(){
  const page = document.getElementById('dqModal');
  return !!(page && page.classList.contains('open'));
}
function openDqModal(){
  const page = document.getElementById('dqModal');
  if(!page) return;
  dqSelectedDay = null;
  dqViewDate = null;
  page.classList.add('open');
  dqRender();
  const body = page.querySelector('.sheet-body');
  if(body) body.scrollTop = 0;
}
function closeDqModal(){
  const page = document.getElementById('dqModal');
  if(page) page.classList.remove('open');
}
function dqSelectDay(key){
  if(!BSCore.isKey(key)) return;
  dqSelectedDay = (key === dqToday()) ? null : key;
  dqRender();
}
function dqViewing(){
  const now = new Date();
  return dqViewDate || new Date(now.getFullYear(), now.getMonth(), 1);
}
function dqShiftMonth(delta){
  const v = dqViewing();
  const next = new Date(v.getFullYear(), v.getMonth() + delta, 1);
  dqViewDate = next;
  dqRender();   // the arrows are disabled outside the record, so a step past either end is clamped in dqRender
  const leaf = document.getElementById('dqLeaf');
  if(leaf){
    leaf.classList.remove('turn-next', 'turn-prev');
    void leaf.offsetWidth; // restart the animation
    leaf.classList.add(delta > 0 ? 'turn-next' : 'turn-prev');
  }
}
function dqThisMonth(){
  dqViewDate = null;
  dqSelectedDay = null;
  dqRender();
}
function dqClear(){
  if(!confirm(t('dq_confirm_clear'))) return;
  state.dailyTodoLog = {};
  state.dailyTodoReg = {};
  dqSelectedDay = null;
  dqViewDate = null;
  dqRecord();
  save();
  dqRender();
  renderAgendaCal();
}
function dqOpenList(){
  closeDqModal();
  closeCheckinModal();   // the Check-in page the tracker was opened from would cover the list
  switchTab('todo');
  const card = document.getElementById('dailyTodoCard');
  if(card) setTimeout(function(){ try{ card.scrollIntoView({ block:'start' }); }catch(e){} }, 60);
}
function dqFmtSince(key){
  const sp = BSCore.parseKey(key);
  if(!sp) return '';
  return ln(sp.d) + ' ' + shortMonth(sp.m) + (sp.y !== new Date().getFullYear() ? ' ' + ln(sp.y) : '');
}
// What a task is worth over the whole record: ticks, days that had a task to do, and the share between them.
function dqTotals(st){
  let ticks = 0, days = 0;
  st.rows.forEach(r => { if(r.total > 0){ days++; ticks += r.done; } });
  return { ticks: ticks, days: days };
}
// "Progress, forever": the share of every task that was ever done, as a plaque-and-bar. Used small on the card, big on the page.
function dqForeverHtml(st){
  const has = st.avg !== null;
  const pct = has ? Math.round(st.avg * 100) : 0;
  const tot = dqTotals(st);
  const sub = tf(tot.days === 1 ? 'dq_forever_sub1' : 'dq_forever_sub', { days: ln(tot.days), date: dqFmtSince(st.start) });
  return `<div class="dq-forever-top"><b class="dq-forever-pct">${has ? ln(pct) + '%' : '–'}</b><span class="dq-forever-lab">${escHtml(t('dq_forever_lab'))}</span></div>` +
    `<div class="progress-track dq-meter" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}" aria-label="${escAttr(t('dq_forever_title'))}"><div class="progress-fill${pct > 0 ? '' : ' empty'}" style="width:${pct}%"><i class="bar-stud" aria-hidden="true"></i></div></div>` +
    `<div class="dq-forever-sub">${escHtml(sub)}</div>`;
}
function dqPlaquesHtml(st){
  const tot = dqTotals(st);
  const plaques = [
    { ico: 'flame', val: ln(st.cur), lab: t('dq_streak'), cls: st.cur > 0 ? ' lit' : '' },
    { ico: 'trophy', val: ln(st.best), lab: t('dq_best'), cls: '' },
    { ico: 'checkSeal', val: ln(st.perfect), lab: t('dq_perfect'), cls: '' },
    { ico: 'target', val: ln(tot.ticks), lab: t('dq_total'), cls: '' }
  ];
  return plaques.map(p =>
    `<div class="dq-stat${p.cls}">${bsIco(p.ico)}<b>${p.val}</b><small>${escHtml(p.lab)}</small></div>`).join('');
}
function dqCellHtml(r, today, selKey){
  const p = BSCore.parseKey(r.key);
  if(r.key > today) return `<span class="dq-cell future" aria-hidden="true"><span>${ln(p.d)}</span></span>`;
  const pct = r.ratio === null ? 0 : Math.round(r.ratio * 100);
  const sel = r.key === selKey;
  const said = fmtDayLong(r.key) + ': ' + (r.total ? tf('dq_day_of', { done: ln(r.done), total: ln(r.total) }) : (r.state === 'rest' ? t('dq_day_rest') : t('dq_day_nothing')));
  return `<button type="button" class="dq-cell s-${r.state}${r.key === today ? ' today' : ''}${sel ? ' sel' : ''}" style="--p:${pct}" data-action="dqSelectDay" data-key="${r.key}" aria-label="${escAttr(said)}" aria-pressed="${sel}"><span>${ln(p.d)}</span></button>`;
}
function dqRender(){
  renderAgendaFlame();
  const card = document.getElementById('dqCard');
  if(!Array.isArray(state.dailyTodos)) state.dailyTodos = [];
  const today = dqToday();
  const st = BSCore.deedsStats(dqModel(), today, 'all');
  const nothing = !state.dailyTodos.some(it => it && it.once !== true) && !st.hasHistory;

  if(card){
    card.classList.toggle('dq-nothing', nothing);
    const forever = document.getElementById('dqForever');
    const stats = document.getElementById('dqStats');
    if(nothing){
      forever.innerHTML = '';
      stats.innerHTML = `<div class="empty-msg dq-empty">${bsIco('scroll')}<span>${escHtml(t('dq_empty'))}</span></div>`;
    } else {
      forever.innerHTML = dqForeverHtml(st);
      stats.innerHTML = dqPlaquesHtml(st);
    }
  }
  if(dqIsOpen()) dqRenderPage(st, nothing, today);
}
// The page: drawn while it is open (and again after every change behind it).
function dqRenderPage(st, nothing, today){
  const page = document.getElementById('dqModal');
  if(!page) return;
  page.classList.toggle('dq-nothing', nothing);
  const sub = document.getElementById('dqSheetSub');
  const big = document.getElementById('dqForeverBig');
  const stats = document.getElementById('dqSheetStats');
  if(nothing){
    sub.textContent = '';
    big.innerHTML = `<div class="empty-msg dq-empty">${bsIco('scroll')}<span>${escHtml(t('dq_empty'))}</span></div>`;
    stats.innerHTML = '';
    ['dqDow', 'dqGrid', 'dqLegend', 'dqDay', 'dqDeeds'].forEach(id => { document.getElementById(id).innerHTML = ''; });
    document.getElementById('dqMonthLbl').textContent = '';
    return;
  }
  const tot = dqTotals(st);
  sub.textContent = tf(tot.days === 1 ? 'dq_forever_sub1' : 'dq_forever_sub', { days: ln(tot.days), date: dqFmtSince(st.start) });
  big.innerHTML = dqForeverHtml(st);
  stats.innerHTML = dqPlaquesHtml(st);

  // the roll of days: one month at a time, from the month of the first record to this month
  const nowD = new Date(), startP = BSCore.parseKey(st.start);
  const first = new Date(startP.y, startP.m, 1), last = new Date(nowD.getFullYear(), nowD.getMonth(), 1);
  let view = dqViewing();
  if(view < first) view = first;
  if(view > last) view = last;
  dqViewDate = (view.getTime() === last.getTime()) ? null : view;
  const y = view.getFullYear(), m = view.getMonth();
  document.getElementById('dqMonthLbl').innerHTML = `${escHtml(getMonthsList()[m])}<span class="folio-year">${escHtml(String(y))}</span>`;
  const folio = document.getElementById('dqFolio');
  if(folio) folio.dataset.season = String(BSCore.seasonOf(m));
  const prev = page.querySelector('[data-action="dqMonth"][data-delta="-1"]');
  const next = page.querySelector('[data-action="dqMonth"][data-delta="1"]');
  if(prev) prev.disabled = view.getTime() <= first.getTime();
  if(next) next.disabled = view.getTime() >= last.getTime();
  const todayBtn = page.querySelector('[data-action="dqToday"]');
  if(todayBtn) todayBtn.disabled = view.getTime() === last.getTime() && !dqSelectedDay;

  const byKey = {};
  st.rows.forEach(r => { byKey[r.key] = r; });
  const selKey = dqSelectedDay || today;
  const lead = (new Date(y, m, 1).getDay() + 6) % 7; // Monday first
  const days = new Date(y, m + 1, 0).getDate();
  document.getElementById('dqDow').innerHTML = getDowList().map((d, i) => `<span class="${i === 6 ? 'sun' : ''}">${d}</span>`).join('');
  let html = '';
  for(let i = 0; i < lead; i++) html += '<span class="dq-cell blank"></span>';
  for(let d = 1; d <= days; d++){
    const key = BSCore.keyOf(y, m, d);
    const r = byKey[key] || { key: key, total: 0, done: 0, ratio: null, state: 'none' };
    html += dqCellHtml(r, today, selKey);
  }
  document.getElementById('dqGrid').innerHTML = html;

  document.getElementById('dqLegend').innerHTML =
    `<span class="dq-leg"><i class="dq-dot s-all"></i>${escHtml(t('dq_leg_all'))}</span>` +
    `<span class="dq-leg"><i class="dq-dot s-some"></i>${escHtml(t('dq_leg_some'))}</span>` +
    `<span class="dq-leg"><i class="dq-dot s-zero"></i>${escHtml(t('dq_leg_none'))}</span>` +
    `<span class="dq-leg"><i class="dq-dot s-rest"></i>${escHtml(t('dq_leg_rest'))}</span>` +
    `<span class="dq-leg"><i class="dq-dot today"></i>${escHtml(t('dq_leg_wait'))}</span>`;

  // the chosen day
  const d = BSCore.deedsDay(dqModel(), selKey);
  const head = `<div class="dq-day-head"><b>${escHtml((selKey === today ? t('rem_today') + ' · ' : '') + fmtDayLong(selKey))}</b>` +
    (d.total ? `<span>${escHtml(tf('dq_day_of', { done: ln(d.done), total: ln(d.total) }))}</span>` : (d.rest ? `<span>${escHtml(t('dq_leg_rest'))}</span>` : '')) + '</div>';
  const body = d.items.length
    ? '<ul class="dq-day-list">' + d.items.map(i =>
        `<li class="${i.rest ? 'rest' : (i.done ? 'done' : 'open')}${i.live ? '' : ' gone'}"><span class="dq-day-mark">${i.done ? bsIco('check') : (i.rest ? bsIco('moon') : '')}</span><span class="dq-day-name">${escHtml(i.name)}</span>${i.live ? '' : `<em>${escHtml(t('dq_removed'))}</em>`}${i.rest ? `<em>${escHtml(t('dq_rest_mark'))}</em>` : ''}</li>`).join('') + '</ul>'
    : `<div class="dq-day-empty">${escHtml(t('dq_day_nothing'))}</div>`;
  document.getElementById('dqDay').innerHTML = head + body;

  // every task on its own: the last seven days, how often since the first day, the current streak
  const deedsCard = document.getElementById('dqDeedsCard');
  if(deedsCard) deedsCard.style.display = st.deeds.length ? '' : 'none';
  document.getElementById('dqDeeds').innerHTML = st.deeds.map(dd => {
    const pct = dd.rate === null ? 0 : Math.round(dd.rate * 100);
    const strip = dd.strip.map(x => `<i class="dq-pip s-${x.s}" title="${escAttr(fmtDayLong(x.key) + (x.s === 'pending' ? ' - ' + t('dq_pending') : (x.s === 'rest' ? ' - ' + t('dq_leg_rest') : '')))}"></i>`).join('');
    const liveTask = dd.live ? (state.dailyTodos || []).find(x => String(x.id) === String(dd.id)) : null;
    const tag = liveTask && dtSchedOf(liveTask) ? ` <span class="dq-sched">${escHtml(dtSchedLabel(dtSchedOf(liveTask)))}</span>` : '';
    const streak = dd.streak > 0 ? `<span class="dq-deed-streak" title="${escAttr(tf('dq_streak_days', { n: ln(dd.streak) }))}">${bsIco('flame')}${ln(dd.streak)}</span>` : '';
    return `<div class="dq-deed${dd.live ? '' : ' gone'}">` +
      `<div class="dq-deed-name">${escHtml(dd.name)}${dd.live ? tag : ` <em>${escHtml(t('dq_removed'))}</em>`}</div>` +
      `<div class="dq-deed-meta"><span class="dq-strip">${strip}</span>${streak}<span class="dq-deed-rate" title="${escAttr(tf('dq_task_stats', { done: ln(dd.done), possible: ln(dd.possible) }))}">${dd.rate === null ? '–' : ln(pct) + '%'}</span></div>` +
      `<div class="dq-bar"><i style="width:${pct}%"></i></div></div>`;
  }).join('');
}

// ─────────── Daily To-Do: the days and reminders of one task (new in 1.5.0) ───────────
// A task is called for every day unless it has its own days: certain weekdays, or a RHYTHM - a number of days that goes
// round and round, each of them a day to do it or a day of rest ("1, 2, 3 do - 4, 5, 6 rest"), counted from a day of your
// choice, so it is not tied to the week. Reminder times ring as Android notifications on the days it is called for.
// The page edits a draft (dtDraft) and writes every change straight into the task, so there is no Save to forget and the
// Back button never loses anything. The rules themselves (what is due on which day, the history) are in features-core.js.
let dtEditId = null;     // id of the task on the page
let dtDraft = null;      // { mode: 'every'|'days'|'cycle'|'once', days: [0..6], p: [1,0,...], a: 'YYYY-MM-DD', times: ['HH:MM'] }
let dtNameTimer = null;
const DT_PRESETS = [[1, 1], [1, 2], [2, 1], [3, 1], [3, 3], [5, 2]];   // days on, days of rest

function dtTask(){ return dtEditId == null ? null : ((state.dailyTodos || []).find(it => it.id === dtEditId) || null); }
function dtDraftFrom(it){
  const sc = dtSchedOf(it);
  const d = { mode: 'every', days: [0, 1, 2, 3, 4], p: [1, 1, 1, 0, 0, 0], a: dqToday(), times: BSCore.timesClean(it.rem) };
  if(it.once === true) d.mode = 'once';
  else if(sc && sc.t === 'days'){ d.mode = 'days'; d.days = sc.d.slice(); }
  else if(sc && sc.t === 'cycle'){ d.mode = 'cycle'; d.p = sc.p.slice(); d.a = sc.a; }
  return d;
}
// Can the draft be a schedule? A set of days needs at least one day to do; "every day" always can.
function dtDraftOk(d){
  if(d.mode === 'days') return d.days.length > 0;
  if(d.mode === 'cycle') return d.p.some(v => v === 1);
  return true;
}
// The draft as a clean schedule (null = every day).
function dtDraftSched(d){
  if(d.mode === 'days') return BSCore.schedNormalize({ t: 'days', d: d.days });
  if(d.mode === 'cycle') return BSCore.schedNormalize({ t: 'cycle', a: d.a, p: d.p });
  return null;
}
function openDtEdit(id){
  const it = (state.dailyTodos || []).find(x => x.id === id);
  const page = document.getElementById('dtEditModal');
  if(!it || !page) return;
  dtEditId = it.id;
  dtDraft = dtDraftFrom(it);
  document.getElementById('dtName').value = it.text;
  page.classList.add('open');
  const body = page.querySelector('.sheet-body');
  if(body) body.scrollTop = 0;
  dtRender();
}
function closeDtEditModal(){
  dtFlushName();
  const page = document.getElementById('dtEditModal');
  if(page) page.classList.remove('open');
  dtEditId = null;
  dtDraft = null;
}
// Writes what the page says into the task, and brings the record, the list, the calendar and the notifications along.
function dtApply(){
  const it = dtTask();
  if(!it || !dtDraft) return;
  if(dtDraft.mode === 'once'){
    // just once: no days and no reminders on the task (they stay in the draft, so choosing a repeating kind again brings them back)
    it.once = true;
    delete it.sched;
    delete it.rem;
    if(it.doneOn !== dqToday()) it.doneOn = null;   // an old tick from its repeating life must not make it look finished
  } else {
    delete it.once;
    if(dtDraftOk(dtDraft)){
      const sc = dtDraftSched(dtDraft);
      if(sc) it.sched = sc; else delete it.sched;
    }   // (with nothing to do on any day the task keeps its earlier days; the page says so)
    const times = BSCore.timesClean(dtDraft.times);
    if(times.length) it.rem = times; else delete it.rem;
  }
  dqRecord();
  renderDailyTodos();
  save();
  dqRender();
  renderAgendaCal();
}
function dtCommit(){ dtApply(); dtRender(); }
function dtNameChanged(){
  clearTimeout(dtNameTimer);
  dtNameTimer = setTimeout(dtFlushName, 350);
}
function dtFlushName(){
  if(dtNameTimer == null) return;
  clearTimeout(dtNameTimer);
  dtNameTimer = null;
  const it = dtTask(), input = document.getElementById('dtName');
  if(!it || !input) return;
  const v = input.value.replace(/\s+/g, ' ').trim().slice(0, 120);
  if(!v || v === it.text) return;   // an empty name is not a name: the old one stays
  it.text = v;
  dqRecord();
  renderDailyTodos();
  save();
  dqRender();
  const sub = document.getElementById('dtEditSub');
  if(sub) sub.textContent = v;
}
// the three choices (and "No priority") on the page of a task: written into the task at once, like everything else there
function dtSetPri(key){
  const it = dtTask();
  if(!it) return;
  if(key === 'none') delete it.pri;
  else if(DT_PRIS.indexOf(key) >= 0) it.pri = key;
  else return;
  renderDailyTodos();
  save();
  dtRender();
}
// sound on / off for every reminder time of the task: written into the task at once, like everything else on its page
function dtToggleSound(){
  const it = dtTask();
  if(!it) return;
  if(it.sound === false) delete it.sound; else it.sound = false;
  save();
  dtRender();
}
function dtSetMode(mode){
  if(!dtDraft || !['every', 'days', 'cycle', 'once'].includes(mode)) return;
  dtDraft.mode = mode;
  if(mode === 'cycle' && !BSCore.isKey(dtDraft.a)) dtDraft.a = dqToday();
  dtCommit();
}
function dtToggleDay(i){
  if(!dtDraft || !(i >= 0 && i <= 6)) return;
  const at = dtDraft.days.indexOf(i);
  if(at >= 0) dtDraft.days.splice(at, 1); else dtDraft.days.push(i);
  dtDraft.days.sort((a, b) => a - b);
  dtCommit();
}
function dtWeekdayPreset(list){
  if(!dtDraft) return;
  dtDraft.days = list.filter(i => i >= 0 && i <= 6);
  dtCommit();
}
function dtToggleCycleDay(i){
  if(!dtDraft || !(i >= 0 && i < dtDraft.p.length)) return;
  dtDraft.p[i] = dtDraft.p[i] ? 0 : 1;
  dtCommit();
}
function dtCycleLength(delta){
  if(!dtDraft) return;
  const n = Math.max(BSCore.MIN_CYCLE, Math.min(BSCore.MAX_CYCLE, dtDraft.p.length + delta));
  if(n === dtDraft.p.length) return;
  if(n > dtDraft.p.length){ while(dtDraft.p.length < n) dtDraft.p.push(0); }   // a new day starts as a day of rest
  else dtDraft.p.length = n;
  dtCommit();
}
function dtCyclePreset(on, off){
  if(!dtDraft || !(on >= 1) || !(off >= 0) || on + off > BSCore.MAX_CYCLE) return;
  dtDraft.p = [];
  for(let i = 0; i < on; i++) dtDraft.p.push(1);
  for(let i = 0; i < off; i++) dtDraft.p.push(0);
  if(dtDraft.p.length < BSCore.MIN_CYCLE) dtDraft.p.push(0);
  dtCommit();
}
function dtSetStart(v){
  if(!dtDraft || !BSCore.isKey(v)) return;
  dtDraft.a = v;
  dtCommit();
}
function dtAddTime(){
  if(!dtDraft) return;
  const input = document.getElementById('dtTimeInput');
  const tm = BSCore.normTime(input ? input.value : '');
  if(!tm){ if(input) input.classList.add('invalid'); alert(t('rem_bad_time')); return; }
  if(dtDraft.times.length >= BSCore.MAX_TIMES && !dtDraft.times.includes(tm)){ alert(tf('dt_max_times', { n: ln(BSCore.MAX_TIMES) })); return; }
  dtDraft.times = BSCore.timesClean(dtDraft.times.concat([tm]));
  dtCommit();
}
function dtRemoveTime(tm){
  if(!dtDraft) return;
  dtDraft.times = dtDraft.times.filter(x => x !== tm);
  dtCommit();
}
function dtDeleteTask(){
  const it = dtTask();
  if(!it) return;
  if(!confirm(t(it.once === true ? 'dt_del_confirm_once' : 'dt_del_confirm'))) return;
  const id = it.id;
  closeDtEditModal();
  const idx = state.dailyTodos.findIndex(x => x.id === id);
  if(idx >= 0) state.dailyTodos.splice(idx, 1);
  dqRecord();
  renderDailyTodos(); save(); dqRender(); renderAgendaCal();
}
// How the page reads, for the line under the three choices.
function dtLedeText(d, today){
  if(d.mode === 'once') return t('dt_lede_once');
  if(d.mode === 'days'){
    const names = getDowList();
    return d.days.length ? tf('dt_lede_days', { days: d.days.map(i => names[i]).join(' · ') }) : t('dt_lede_days_none');
  }
  if(d.mode === 'cycle'){
    const info = BSCore.schedCycleInfo(d.p);
    let line = tf('dt_lede_cycle', { n: ln(info.n), on: ln(info.on), off: ln(info.off), start: fmtDayLong(d.a) });
    if(info.on > 0 && BSCore.isKey(d.a)){
      const sc = BSCore.schedNormalize({ t: 'cycle', a: d.a, p: d.p });
      const dayNo = BSCore.schedCycleDay({ t: 'cycle', a: d.a, p: d.p }, today);
      const due = sc ? BSCore.schedDue(sc, today) : true;
      line += ' ' + tf(due ? 'dt_today_do' : 'dt_today_rest', { d: ln(dayNo), n: ln(info.n) });
    }
    return line;
  }
  return t('dt_lede_every');
}
function dtRender(){
  const it = dtTask(), d = dtDraft;
  if(!it || !d) return;
  const today = dqToday();
  const sub = document.getElementById('dtEditSub');
  if(sub) sub.textContent = it.text;
  document.querySelectorAll('#dtMode .chip').forEach(b => {
    const on = b.dataset.key === d.mode;
    b.classList.toggle('active', on);
    b.setAttribute('aria-selected', on ? 'true' : 'false');
  });
  const pri = dtPriOf(it) || 'none';
  document.querySelectorAll('#dtPri button').forEach(b => {
    const on = b.dataset.key === pri;
    b.classList.toggle('on', on);
    b.setAttribute('aria-checked', on ? 'true' : 'false');
  });
  paintSoundBtn(document.getElementById('dtSoundBtn'), it.sound !== false);
  const priLede = document.getElementById('dtPriLede');
  if(priLede) priLede.textContent = t('dt_pri_lede_' + pri);
  document.getElementById('dtPaneDays').style.display = d.mode === 'days' ? '' : 'none';
  document.getElementById('dtPaneCycle').style.display = d.mode === 'cycle' ? '' : 'none';
  // a just-once task has no days to preview and no reminders
  const pvWrap = document.querySelector('#dtEditModal .dt-preview-wrap');
  if(pvWrap) pvWrap.style.display = d.mode === 'once' ? 'none' : '';
  const remCard = document.getElementById('dtRemCard');
  if(remCard) remCard.style.display = d.mode === 'once' ? 'none' : '';
  document.getElementById('dtLede').textContent = dtLedeText(d, today);
  // "reminders ring in the Android app" is for the browser version only; inside the app it would just confuse
  const webNote = document.querySelector('#dtEditModal .dt-web-note');
  if(webNote) webNote.style.display = hasAndroidBridge() ? 'none' : '';

  const names = getDowList();
  document.getElementById('dtWeekdays').innerHTML = names.map((n, i) => {
    const on = d.days.includes(i);
    return `<button type="button" class="dt-wd${on ? ' on' : ''}" data-action="dtDayToggle" data-idx="${i}" aria-pressed="${on}">${escHtml(n)}</button>`;
  }).join('');

  document.getElementById('dtLen').textContent = ln(d.p.length);
  document.getElementById('dtLenMinus').disabled = d.p.length <= BSCore.MIN_CYCLE;
  document.getElementById('dtLenPlus').disabled = d.p.length >= BSCore.MAX_CYCLE;
  // rows of at most seven, as even as they can be (6 -> 6, 8 -> 4 + 4, 10 -> 5 + 5, 14 -> 7 + 7)
  const dtRows = Math.ceil(d.p.length / 7), dtCols = Math.ceil(d.p.length / dtRows);
  document.getElementById('dtCycleDays').style.setProperty('--dt-cols', String(dtCols));
  document.getElementById('dtCycleDays').innerHTML = d.p.map((v, i) => {
    const what = v ? t('dt_do') : t('dt_rest');
    return `<button type="button" class="dt-cd ${v ? 'on' : 'rest'}" data-action="dtCycleDay" data-idx="${i}" aria-pressed="${!!v}" aria-label="${escAttr(tf('dt_day_aria', { n: ln(i + 1), what: what }))}"><span>${ln(i + 1)}</span><small>${escHtml(what)}</small></button>`;
  }).join('');
  document.getElementById('dtCyclePresets').innerHTML = DT_PRESETS.map(pr =>
    `<button type="button" class="chip" data-action="dtPreset" data-on="${pr[0]}" data-off="${pr[1]}">${escHtml(tf('dt_preset', { on: ln(pr[0]), off: ln(pr[1]) }))}</button>`).join('');
  const start = document.getElementById('dtCycleStart');
  if(start && document.activeElement !== start) start.value = BSCore.isKey(d.a) ? d.a : today;

  // the next two weeks, as the page would apply them (an unusable draft shows the days the task has now)
  const sc = dtDraftOk(d) ? dtDraftSched(d) : dtSchedOf(it);
  let pv = '';
  for(let i = 0; i < 14; i++){
    const key = BSCore.addDays(today, i), pk = BSCore.parseKey(key);
    const due = BSCore.schedDue(sc, key);
    pv += `<div class="dt-pv ${due ? 'on' : 'rest'}${i === 0 ? ' today' : ''}" title="${escAttr(fmtDayLong(key) + ' - ' + (due ? t('dt_do') : t('dt_rest')))}"><small>${escHtml(names[BSCore.weekdayMon0(key)])}</small><b>${ln(pk.d)}</b></div>`;
  }
  document.getElementById('dtPreview').innerHTML = pv;
  document.getElementById('dtWarn').classList.toggle('on', !dtDraftOk(d));

  document.getElementById('dtTimes').innerHTML = d.times.length
    ? d.times.map(tm => `<span class="dt-time">🔔 <b>${escHtml(tm)}</b><button type="button" class="dt-time-x" data-action="dtDelTime" data-time="${escAttr(tm)}" aria-label="${escAttr(t('dt_time_del_aria') + ' ' + tm)}">✕</button></span>`).join('')
    : `<div class="dt-no-times">${escHtml(t('dt_no_times'))}</div>`;
}

// ─────────── Reminders: any number per day ───────────
let remEditingId = null;

function remList(){
  if(!Array.isArray(state.reminders)) state.reminders = [];
  return state.reminders;
}
// The browser notifications (notify.js) read the live reminders and Daily To-Do tasks through this. Read only; while the
// app is locked with a password the data is not readable, so nothing is announced until it is unlocked.
window.BSNotifyData = function(){
  try{
    if(appIsLocked()) return null;
    return {
      reminders: Array.isArray(state.reminders) ? state.reminders : [],
      todos: Array.isArray(state.dailyTodos) ? state.dailyTodos : []
    };
  }catch(e){ return null; }
};
// Cleans the list and turns the old "one remind-me time per day" (remindAt, 1.1.0) into reminders of their own.
function remNormalizeState(){
  state.reminders = BSCore.remindersClean(state.reminders);
  if(state.agendaEntries && typeof state.agendaEntries === 'object'){
    const now = new Date();
    BSCore.remindersFromLegacy(state.agendaEntries, state.reminders, t('rem_default'), {
      today: BSCore.keyFromDate(now),
      now: BSCore.pad2(now.getHours()) + ':' + BSCore.pad2(now.getMinutes()),
      defaultTime: '09:00',
      // 1.1.0 rang every note on today or a later day at 09:00 unless told otherwise. On the first start after the
      // update (and for a backup from that version) those become real reminders, so none of them goes quiet.
      implicit: state.remindersMigrated !== true
    });
  }
  state.remindersMigrated = true;
}
function remFind(id){ return remList().find(r => r.id === id); }
function remAfterChange(){
  save();
  renderAgendaCal();
  if(agendaEditingKey){ renderDayReminders(); updateDayTabBadges(); }
}
// Sound on a reminder (1.8.0): on is the default and is not stored; a reminder without sound has sound:false (a Daily To-Do task too).
// Without sound it still pops up - Android is told through the snapshot (the shim sends q:1) and shows it on a silent channel.
let remSoundDraft = true;     // the switch on the sheet of one reminder
let dayRemSound = true;       // the switch under the quick-add form of a day
function paintSoundBtn(btn, on){
  if(!btn) return;
  btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  btn.classList.toggle('active', !!on);
  btn.innerHTML = (on ? '🔔 ' : '🔕 ') + escHtml(t(on ? 'rem_sound_on' : 'rem_sound_off'));
}
function remAdd(date, time, text, sound){
  const clean = String(text == null ? '' : text).replace(/\s+/g, ' ').trim();
  const r = BSCore.reminderClean({ id: BSCore.newReminderId(), date: date, time: time, text: clean || t('rem_default'), done: false, sound: sound === false ? false : undefined });
  if(!r) return null;
  remList().push(r);
  remAfterChange();
  return r;
}
function remDeleteId(id){
  const list = remList();
  const i = list.findIndex(r => r.id === id);
  if(i < 0) return;
  list.splice(i, 1);
  remAfterChange();
}
function remToggleDone(id){
  const r = remFind(id);
  if(!r) return;
  r.done = !r.done;
  remAfterChange();
}
function remDefaultTime(key){
  const now = new Date();
  if(key === BSCore.keyFromDate(now)){
    const h = now.getHours() + 1;
    return h > 23 ? '23:59' : BSCore.pad2(h) + ':00';
  }
  return '09:00';
}
function remDayLabel(key, now){
  const diff = BSCore.diffDays(key, BSCore.keyFromDate(now));
  if(diff === 0) return t('rem_today');
  if(diff === 1) return t('rem_tomorrow');
  if(diff === -1) return t('rem_yesterday');
  return fmtDayShort(key);
}
function hasAndroidBridge(){ return !!window.BeerSportsWidgets; }

// ── Settings > Reminders health (1.7.0, the Android app only) ──
// A reminder has to get past the phone: Android's own switches, and - the usual reason for "it only came when I opened the
// app" - the battery saving of the phone, which may stop an app that is closed and take its alarm with it. The Java side
// (Reminders.health) reads those switches and the log of the last reminders (when each was due, when it was shown, and the way
// it came); this card shows them, puts a button next to what is wrong, and can send a test reminder to try it for real.
let remHealthKey = '';        // the report that is on screen: the card is only drawn again when it changes
let remHealthTimer = 0;
let remHealthNote = '';       // the answer to the last tap on the test button
function remApi(){
  try{ return window.BSReminders && window.BSReminders.available ? window.BSReminders : null; }catch(e){ return null; }
}
function rhClock(ms){
  const d = new Date(ms);
  return BSCore.pad2(d.getHours()) + ':' + BSCore.pad2(d.getMinutes());
}
function rhWhen(ms, now){
  return remDayLabel(BSCore.keyFromDate(new Date(ms)), now) + ' ' + rhClock(ms);
}
function rhSpan(ms){   // "25 min", "1 h 10 min"
  const m = Math.max(1, Math.round(ms / 60000));
  if(m < 60) return tf('rh_min', { n: m });
  const h = Math.floor(m / 60), r = m % 60;
  return r ? tf('rh_hm', { h: h, m: r }) : tf('rh_h', { h: h });
}
// How long a reminder may be late and still count as on time (the Java side uses the same 2 minutes: ReminderLog.ON_TIME_MS)
const RH_ON_TIME_MS = 120000;
// The rows: [state ok|warn|bad|info, label, text, fix key, fix button label]
function rhRows(h){
  const rows = [];
  rows.push(h.notif
    ? ['ok', t('rh_notif'), t('rh_notif_ok')]
    : ['bad', t('rh_notif'), t('rh_notif_off'), 'notif', t('rh_fix_turnon')]);
  if(h.notif && typeof h.chan === 'number' && h.chan >= 0){
    if(h.chan === 0) rows.push(['bad', t('rh_chan'), t('rh_chan_off'), 'channel', t('rh_fix_open')]);
    else if(h.chan < 4) rows.push(['warn', t('rh_chan'), t('rh_chan_quiet'), 'channel', t('rh_fix_open')]);
    else rows.push(['ok', t('rh_chan'), t('rh_chan_ok')]);
  }
  rows.push(h.exact
    ? ['ok', t('rh_exact'), t('rh_exact_ok')]
    : ['warn', t('rh_exact'), t('rh_exact_off'), 'alarms', t('rh_fix_allow')]);
  rows.push(h.battery
    ? ['ok', t('rh_batt'), t('rh_batt_ok')]
    : ['warn', t('rh_batt'), t('rh_batt_warn'), 'battery', t('rh_fix_allow')]);
  if(h.dnd) rows.push(['info', t('rh_dnd'), t('rh_dnd_on')]);
  return rows;
}
// What became of one reminder, as a sentence and a state
function rhLogLine(e){
  const late = Math.max(0, (e.s || 0) - (e.d || 0));
  if(e.b) return ['bad', t('rh_log_blocked')];
  if(e.t && e.l) return ['bad', t('rh_log_test_lost')];
  if(late <= RH_ON_TIME_MS) return ['ok', t(e.t ? 'rh_log_test_ok' : 'rh_log_ontime')];
  const how = { alarm: 'rh_via_alarm', job: 'rh_via_job', boot: 'rh_via_boot', open: 'rh_via_open', sync: 'rh_via_open' }[e.v] || 'rh_via_alarm';
  return ['warn', tf('rh_log_late', { late: rhSpan(late), how: t(how) })];
}
// blocked: nothing can appear; late: it has already happened; check: it may happen; good
function rhVerdict(h){
  if(!h.notif || h.chan === 0) return 'blocked';
  const log = Array.isArray(h.log) ? h.log.slice(0, 6) : [];
  if(log.some(e => !e.b && (e.l === 1 || (e.v !== 'alarm' && (e.s - e.d) > 10 * 60000)))) return 'late';
  if(!h.battery || !h.exact || (typeof h.chan === 'number' && h.chan > 0 && h.chan < 4)) return 'check';
  return 'good';
}
function rhOpt(key, on, label, hint){
  return `<div class="rh-opt-row"><button type="button" class="chip skin-icon-btn rh-opt${on ? ' active' : ''}" aria-pressed="${on ? 'true' : 'false'}" data-action="remOpt" data-key="${escAttr(key)}">${escHtml(label)}</button>` +
    `<div class="skin-hint">${escHtml(hint)}</div></div>`;
}
function renderRemHealth(force){
  const card = document.getElementById('remHealthCard');
  if(!card) return;
  const api = remApi();
  card.hidden = !api;
  if(!api) return;
  const h = api.health();
  const now = new Date();
  const copy = h ? Object.assign({}, h, { now: 0 }) : null;
  const key = JSON.stringify(copy) + '|' + remHealthNote + '|' + BSCore.keyFromDate(now);
  if(!force && key === remHealthKey) return;
  remHealthKey = key;
  const summary = document.getElementById('remHealthSummary'), rowsEl = document.getElementById('remHealthRows');
  const optsEl = document.getElementById('remHealthOpts'), logEl = document.getElementById('remHealthLog'), msgEl = document.getElementById('remHealthMsg');
  if(!h){
    if(summary){ summary.className = 'rh-summary rh-s-check'; summary.textContent = t('rh_unreadable'); }
    if(rowsEl) rowsEl.innerHTML = '';
    if(optsEl) optsEl.innerHTML = '';
    if(logEl) logEl.innerHTML = '';
    if(msgEl) msgEl.textContent = '';
    return;
  }
  const verdict = rhVerdict(h);
  if(summary){
    summary.className = 'rh-summary rh-s-' + verdict;
    summary.textContent = t('rh_verdict_' + verdict);
  }
  if(rowsEl){
    rowsEl.innerHTML = rhRows(h).map(r =>
      `<div class="rh-row rh-${r[0]}"><i class="rh-dot" aria-hidden="true"></i>` +
        `<div class="rh-txt"><b>${escHtml(r[1])}</b><span>${escHtml(r[2])}</span></div>` +
        (r[3] ? `<button type="button" class="btn btn-sm rh-fix" data-action="remFix" data-key="${escAttr(r[3])}">${escHtml(r[4])}</button>` : '') +
      '</div>').join('');
  }
  if(optsEl){
    optsEl.innerHTML = rhOpt('themed', !!h.themed, t('rh_opt_themed'), t('rh_opt_themed_hint')) +
      rhOpt('reliable', !!h.reliable, t('rh_opt_reliable'), t('rh_opt_reliable_hint'));
  }
  if(msgEl){
    const waiting = h.testAt > Date.now();
    msgEl.textContent = waiting ? tf('rh_test_wait', { time: rhClock(h.testAt) }) : remHealthNote;
  }
  if(logEl){
    const log = Array.isArray(h.log) ? h.log.slice(0, 5) : [];
    logEl.innerHTML = log.length ? log.map(e => {
      const line = rhLogLine(e);
      return `<div class="rh-log-row rh-${line[0]}"><i class="rh-dot" aria-hidden="true"></i>` +
        `<div class="rh-txt"><b>${escHtml(rhWhen(e.d, now))}${e.t ? ' · ' + escHtml(t('rh_test_word')) : ''}</b><span>${escHtml(line[1])}</span></div></div>`;
    }).join('') : `<div class="empty-msg">${escHtml(t('rh_log_empty'))}</div>`;
  }
}
// the card is looked at again every few seconds while Settings is open (a test reminder arrives, the person comes back from
// the phone's own settings)
function remHealthWatch(on){
  if(on && !remHealthTimer){
    remHealthTimer = setInterval(function(){
      const page = document.getElementById('bannerEditModal');
      if(!page || !page.classList.contains('open')){ remHealthWatch(false); return; }
      if(!document.hidden) renderRemHealth(false);
    }, 3000);
  }else if(!on && remHealthTimer){
    clearInterval(remHealthTimer);
    remHealthTimer = 0;
  }
}
function remSendTest(){
  const api = remApi();
  if(!api) return;
  const at = api.test();
  remHealthNote = at > 0 ? tf('rh_test_sent', { time: rhClock(at) }) : t('rh_test_fail');
  renderRemHealth(true);
}
function remToggleOpt(key){
  const api = remApi();
  const h = api ? api.health() : null;
  if(!api || !h) return;
  if(key === 'reliable') api.setReliable(!h.reliable);
  else if(key === 'themed') api.setThemed(!h.themed);
  renderRemHealth(true);
}
document.addEventListener('visibilitychange', function(){
  if(!document.hidden){
    const page = document.getElementById('bannerEditModal');
    if(page && page.classList.contains('open')) renderRemHealth(false);   // only redrawn when the phone's answers changed
  }
});

// The "Reminders" tab of a day.
function renderDayReminders(){
  const wrap = document.getElementById('dayRemList');
  if(!wrap || !agendaEditingKey) return;
  const now = new Date();
  const list = BSCore.remindersOn(remList(), agendaEditingKey);
  wrap.innerHTML = list.length ? list.map(r => {
    const st = BSCore.reminderStatus(r, now);
    return `<div class="rem-item ${st}">` +
      `<button type="button" class="rem-check" data-action="remToggle" data-id="${escAttr(r.id)}" aria-pressed="${r.done}" aria-label="${escAttr(t(r.done ? 'rem_undo_aria' : 'rem_done_aria'))}"></button>` +
      `<button type="button" class="rem-main" data-action="remEdit" data-id="${escAttr(r.id)}" aria-label="${escAttr(t('rem_edit_aria'))}"><span class="rem-time">${r.time}</span><span class="rem-text">${escHtml(r.text || t('rem_default'))}</span>${r.sound === false ? `<span class="rem-mute" title="${escAttr(t('rem_sound_muted'))}" aria-label="${escAttr(t('rem_sound_muted'))}">🔕</span>` : ''}</button>` +
      `<button type="button" class="rem-del" data-action="remDel" data-id="${escAttr(r.id)}" aria-label="${escAttr(t('rem_del_aria'))}">✕</button>` +
      '</div>';
  }).join('') : `<div class="empty-msg rem-empty">${t('rem_none_day')}</div>`;
  const hint = document.getElementById('dayRemHint');
  if(hint) hint.textContent = t('rem_hint') + (hasAndroidBridge() ? '' : ' ' + t('rem_web_hint'));
  const hl = document.getElementById('remHealthLink');
  if(hl) hl.hidden = !remApi();
}
function updateDayTabBadges(){
  const key = agendaEditingKey;
  if(!key) return;
  const open = BSCore.remindersOn(remList(), key).filter(r => !r.done).length;
  const rc = document.getElementById('dsTabRemCount');
  if(rc){ rc.textContent = open ? ln(open) : ''; rc.style.display = open ? '' : 'none'; }
  const dot = document.getElementById('dsTabNoteDot');
  if(dot) dot.style.display = entryHasNote(state.agendaEntries[key]) ? '' : 'none';
}
function dsTabSelect(which){
  ['log', 'reminders', 'notes'].forEach(k => {
    const on = k === which;
    const tab = document.getElementById('dsTab-' + k), pane = document.getElementById('dsPane-' + k);
    if(tab){ tab.classList.toggle('active', on); tab.setAttribute('aria-selected', on ? 'true' : 'false'); }
    if(pane) pane.classList.toggle('active', on);
  });
}
function remPrepareInlineForm(key){
  const timeEl = document.getElementById('dayRemTime'), textEl = document.getElementById('dayRemText');
  if(timeEl){ timeEl.value = remDefaultTime(key); timeEl.classList.remove('invalid'); }
  if(textEl) textEl.value = '';
  dayRemSound = true;
  paintSoundBtn(document.getElementById('dayRemSoundBtn'), dayRemSound);
}
// "Add" on the day's Reminders tab: keeps the time and the focus, so a second and third one take a few taps.
function remAddInline(){
  const key = agendaEditingKey;
  if(!key) return;
  const timeEl = document.getElementById('dayRemTime'), textEl = document.getElementById('dayRemText');
  const time = BSCore.normTime(timeEl.value);
  if(!time){ timeEl.classList.add('invalid'); timeEl.focus(); return; }
  if(!remAdd(key, time, textEl.value, dayRemSound)) return;
  textEl.value = '';
  textEl.focus();
}
// New / edit one reminder in a sheet of its own (from the Agenda card, or by tapping a reminder in a day).
function openReminderModal(id, dateKey){
  const r = id ? remFind(id) : null;
  if(id && !r) return;
  remEditingId = r ? r.id : null;
  const day = r ? r.date : (BSCore.isKey(dateKey) ? dateKey : dqToday());
  document.getElementById('reminderModalTitle').textContent = t(r ? 'rem_edit' : 'rem_new');
  document.getElementById('remDate').value = day;
  document.getElementById('remTime').value = r ? r.time : remDefaultTime(day);
  document.getElementById('remText').value = r ? r.text : '';
  document.getElementById('remDeleteBtn').style.display = r ? '' : 'none';
  remSoundDraft = r ? r.sound !== false : true;
  paintSoundBtn(document.getElementById('remSoundBtn'), remSoundDraft);
  document.getElementById('reminderModal').classList.add('open');
}
function closeReminderModal(){
  document.getElementById('reminderModal').classList.remove('open');
  remEditingId = null;
}
function remSaveModal(){
  const date = document.getElementById('remDate').value;
  const time = BSCore.normTime(document.getElementById('remTime').value);
  const text = document.getElementById('remText').value.replace(/\s+/g, ' ').trim();
  if(!BSCore.isKey(date)){ alert(t('rem_bad_day')); return; }
  if(!time){ alert(t('rem_bad_time')); return; }
  if(remEditingId){
    const r = remFind(remEditingId);
    if(r){
      if(r.date !== date || r.time !== time) r.done = false; // moved to another moment: it is waiting again
      r.date = date; r.time = time; r.text = (text || t('rem_default')).slice(0, 300);
      if(remSoundDraft) delete r.sound; else r.sound = false;
    }
    remAfterChange();
  } else {
    remAdd(date, time, text, remSoundDraft);
  }
  closeReminderModal();
}

// Enter inside a field marked data-enter="action" runs that action; Space/Enter on a role="button" row clicks it.
document.addEventListener('keydown', function(event){
  const target = event.target;
  if(!target || !target.closest) return;
  if(event.key === 'Enter' && !event.isComposing){
    const el = target.closest('[data-enter]');
    const fn = el && DYNAMIC_CLICK_ACTIONS[el.dataset.enter];
    if(fn){ event.preventDefault(); fn(el, event); return; }
  }
  if((event.key === 'Enter' || event.key === ' ') && target.matches('[role="button"][data-action]')){
    event.preventDefault();
    target.click();
  }
});

const DYNAMIC_CLICK_ACTIONS = {
  calcLevel: function(el){ calcSetChoice('calcLevel', el.dataset.val); },
  calcDiet: function(el){ calcSetChoice('calcDiet', el.dataset.val); },
  calcMeals: function(el){ calcSetChoice('calcMeals', el.dataset.val); },
  calcPace: function(el){ calcSetPace(el.dataset.val); },
  calcBfHelp: function(el){ calcBfToggle(); },
  calcBfMethod: function(el){ calcBfSetMethod(el.dataset.val); },
  calcBfUse: function(el){ calcBfUse(); },
  calcShuffle: function(el){ calcShuffle(); },
  calcShop: function(el){ calcToggleShop(); },
  calcWhy: function(el){ toggleCollapsibleCard('calcWhyCard'); },
  openSetPasswordModal: function(el){ openSetPasswordModal(); },
  removePassword: function(el){ removePassword(); },
  updateProfileTheme: function(el){ updateProfileTheme(el.dataset.key); },
  setCustomFullTheme: function(el){ setCustomFullTheme(); },
  updateProfileAccent: function(el){ updateProfileAccent(el.dataset.key); },
  setSkin: function(el){ setSkin(el.dataset.key); },
  setMode: function(el){ setMode(el.dataset.key); },
  setIconStyle: function(el){ setIconStyle(el.dataset.key); },
  skinIcon: function(el){ toggleSkinIcon(); },
  setGoal: function(el){ setGoal(parseInt(el.dataset.idx, 10)); },
  openAgendaEntry: function(el){ openAgendaEntry(el.dataset.key); },
  addWaterCup: function(el){ addWaterCup(el.dataset.key); },
  deleteEntryFood: function(el){ deleteEntryFood(parseInt(el.dataset.idx, 10)); },
  selectBlock: function(el){ selectBlock(parseInt(el.dataset.idx, 10)); },
  selectDay: function(el){ selectDay(parseInt(el.dataset.idx, 10)); },
  ltPickDay: function(el){ ltPickDay(parseInt(el.dataset.idx, 10)); },
  ltOpenEditor: function(el){ openProgramEditModal(); },
  peMore: function(el){ peToggleMore(el); },
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
  toggleDailyTodo: function(el){ toggleDailyTodo(parseInt(el.dataset.idx, 10)); },
  dtKind: function(el){ dtSetKind(el.dataset.key); },
  deleteDailyTodoById: function(el){ deleteDailyTodoById(parseInt(el.dataset.idx, 10)); },
  toggleProfileGoal: function(el){ toggleProfileGoal(parseInt(el.dataset.idx, 10)); },
  deleteProfileGoal: function(el){ deleteProfileGoal(parseInt(el.dataset.idx, 10)); },
  setCheckinPeriod: function(el){ setCheckinPeriod(parseInt(el.dataset.idx, 10)); },
  deleteMeasureType: function(el){ deleteMeasureType(parseInt(el.dataset.idx, 10)); },
  wlRemoveSetRow: function(el){ wlRemoveSetRow(parseInt(el.dataset.idx, 10)); },
  wlClearExerciseLog: function(el){ wlClearExerciseLog(); },
  wlDeleteEntry: function(el){ wlDeleteEntry(el.dataset.date); },
  openCheckinHistoryDay: function(el){ openCheckinHistoryDay(el.dataset.key); },
  dsTab: function(el){ dsTabSelect(el.dataset.key); },
  remToggle: function(el){ remToggleDone(el.dataset.id); },
  remEdit: function(el){ openReminderModal(el.dataset.id); },
  remSoundToggle: function(el){ remSoundDraft = !remSoundDraft; paintSoundBtn(document.getElementById('remSoundBtn'), remSoundDraft); },
  remInlineSound: function(el){ dayRemSound = !dayRemSound; paintSoundBtn(document.getElementById('dayRemSoundBtn'), dayRemSound); },
  dtSound: function(el){ dtToggleSound(); },
  remDel: function(el){ remDeleteId(el.dataset.id); },
  remAddInline: function(el){ remAddInline(); },
  remSave: function(el){ remSaveModal(); },
  remDelete: function(el){ if(remEditingId) remDeleteId(remEditingId); closeReminderModal(); },
  remCancel: function(el){ closeReminderModal(); },
  remFix: function(el){ const a = remApi(); if(a) a.fix(el.dataset.key); setTimeout(function(){ renderRemHealth(false); }, 700); },
  remTest: function(el){ remSendTest(); },
  remHealthOpen: function(el){ try{ closeAgendaEntry(); }catch(e){} openBannerEditModal();
    setTimeout(function(){ const c = document.getElementById('remHealthCard'); if(c && c.scrollIntoView){ try{ c.scrollIntoView({ block: 'start' }); }catch(e){} } }, 90); },
  remOpt: function(el){ remToggleOpt(el.dataset.key); },
  remFixNotifications: function(el){ try{ if(window.BeerSportsWidgets && window.BeerSportsWidgets.fixNotifications) window.BeerSportsWidgets.fixNotifications(); }catch(e){} },
  dqMonth: function(el){ dqShiftMonth(parseInt(el.dataset.delta, 10) || 0); },
  dqToday: function(el){ dqThisMonth(); },
  dqSelectDay: function(el){ dqSelectDay(el.dataset.key); },
  dqClear: function(el){ dqClear(); },
  dqOpenList: function(el){ dqOpenList(); },
  editDailyTodo: function(el){ openDtEdit(parseInt(el.dataset.idx, 10)); },
  dtMode: function(el){ dtSetMode(el.dataset.key); },
  dtPri: function(el){ dtSetPri(el.dataset.key); },
  dtDayToggle: function(el){ dtToggleDay(parseInt(el.dataset.idx, 10)); },
  dtWdPreset: function(el){ dtWeekdayPreset(String(el.dataset.set || '').split(',').filter(x => x !== '').map(Number)); },
  dtCycleDay: function(el){ dtToggleCycleDay(parseInt(el.dataset.idx, 10)); },
  dtCycleLen: function(el){ dtCycleLength(parseInt(el.dataset.delta, 10) || 0); },
  dtPreset: function(el){ dtCyclePreset(parseInt(el.dataset.on, 10), parseInt(el.dataset.off, 10)); },
  dtAddTime: function(el){ dtAddTime(); },
  dtDelTime: function(el){ dtRemoveTime(el.dataset.time); },
  dtDone: function(el){ closeDtEditModal(); },
  dtDelete: function(el){ dtDeleteTask(); }
};

const DYNAMIC_INPUT_ACTIONS = {
  calcField: function(el){ calcRun(); },
  calcBfField: function(el){ calcBfRun(); },
  remTimeTouched: function(el){ el.classList.remove('invalid'); },
  setCustomAccent: function(el){ setCustomAccent(el.value); },
  updateEntryMeasure: function(el){ updateEntryMeasure(el.dataset.key, el.value, el.dataset.custom === '1'); },
  updateRestNote: function(el){ updateRestNote(el.value); },
  updateExercise: function(el){ updateExercise(parseInt(el.dataset.idx, 10), el.dataset.field, el.value); },
  wlUpdateSetField: function(el){ wlUpdateSetField(parseInt(el.dataset.idx, 10), el.dataset.field, el.value); },
  updateEntryFood: function(el){ updateEntryFood(parseInt(el.dataset.idx, 10), el.value); },
  updateDayRounds: function(el){ updateDayRounds(el.value); },
  renameProgram: function(el){ renameProgram(el.value); },
  dtName: function(el){ dtNameChanged(); },
  dtCycleStart: function(el){ dtSetStart(el.value); },
  dtTimeTouched: function(el){ el.classList.remove('invalid'); }
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

window.addEventListener('load', bootstrap);

// PWA: cache the app for offline use / installability. Purely additive — if
// this fails (older browser, sw.js missing, etc.) the app works exactly as
// it did before, just without offline caching.
if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch((e) => dbg('SW registration failed', e));
  });
}
