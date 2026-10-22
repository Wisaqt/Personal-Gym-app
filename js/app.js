// ==========================================================================
// MY GYM LOG - PWA UPGRADE (VANILLA JAVASCRIPT)
// Multi-Profile, Editable Program, Session Tracking, Accurate Timer, 
// Offline Cache, Nutrition & History Dashboard
// ==========================================================================
"use strict";

// Active Profile: "wisakol" or "monik" (stored in sessionStorage)
const currentProfile = typeof sessionStorage !== "undefined" ? sessionStorage.getItem("gym-profile") : null;

// ==========================================================================
// EXERCISE DATABASE WITH ENRICHED MUSCLE TARGETS & INSTRUCTIONS
// ==========================================================================
const EXERCISES = {
  "inc": {
    "category": "Chest",
    "name": "Barbell Incline Bench Press",
    "img": "Barbell_Incline_Bench_Press_-_Medium_Grip",
    "target": "Upper Chest",
    "metType": "heavy",
    "video": "Lxm_jICneM8",
    "equipment": "Incline Bench (30°), Barbell",
    "equipmentList": [
      "Barbells",
      "Incline Bench"
    ],
    "reviewer": "Jim Parker, CPT, B.A. Kinesiology",
    "setsLogged": "3,953,814",
    "popularity": "39th",
    "difficulty": "Intermediate",
    "strengthScore": "96 mSCORE 6th",
    "workouts": [
      {
        "rank": "#2",
        "title": "Best Upper Body Workouts With Garage Gym For Women"
      },
      {
        "rank": "#2",
        "title": "Best Upper Body Workouts With Garage Gym To Build Muscle Mass"
      },
      {
        "rank": "#2",
        "title": "Best Upper Body Workouts With Garage Gym To Build Strength"
      },
      {
        "rank": "#2",
        "title": "Best Push Day Workouts With Barbells To Build Muscle Mass"
      }
    ],
    "alternatives": [
      "dbi",
      "dbb",
      "fly"
    ],
    "muscles": [
      "Upper Pecs (Clavicular Head)",
      "Front Delts",
      "Triceps"
    ],
    "cues": "Bench at ~30°. Retract shoulder blades back and down, lower bar to upper chest, keep elbows ~45° from torso.",
    "steps": [
      "Set incline bench angle to ~30° (higher shifts load to shoulders).",
      "Grip the bar slightly wider than shoulder width with thumbs wrapped.",
      "Unrack, retract your scapulae, and plant your feet firmly on the floor.",
      "Lower bar smoothly to your upper chest / collarbone area (2s tempo).",
      "Press upward and slightly back toward the rack to full extension."
    ],
    "mistake": "Setting bench to 45°+ or flaring elbows out 90° horizontally.",
    "primaryMuscles": [
      "Upper Pectorals (Clavicular Head)"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Triceps Brachii"
    ],
    "stabilizers": [
      "Rotator Cuff",
      "Serratus Anterior"
    ],
    "startPos": "Lie on bench angled at 30°. Plant feet firmly, grip barbell slightly wider than shoulders, pull shoulder blades back and down.",
    "breathing": "Inhale slowly as you lower the bar to upper chest; exhale powerfully as you press up.",
    "safety": "Do not set bench steeper than 30–35° to avoid excessive shoulder impingement. Never bounce the bar off collarbone."
  },
  "bb": {
    "category": "Chest",
    "name": "Barbell Flat Bench Press",
    "img": "Barbell_Bench_Press_-_Medium_Grip",
    "target": "Mid & Lower Chest",
    "metType": "heavy",
    "video": "rT7DgCr-3pg",
    "equipment": "Flat Bench, Barbell",
    "alternatives": ["dbb","inc","dips","cbl_fly","pushup"],
    "muscles": [
      "Sternocostal Pectorals",
      "Triceps",
      "Anterior Delts"
    ],
    "cues": "Feet planted, slight lower-back arch, glutes stay on bench. Lower to mid-chest, press upward in slight J-curve.",
    "steps": [
      "Lie with eyes directly beneath the racked barbell.",
      "Grip outside shoulder width, squeeze bar tightly, pull shoulder blades back.",
      "Lower under control to lower sternum / nipple line.",
      "Press bar powerfully upward and slightly backward."
    ],
    "mistake": "Bouncing bar off the sternum or lifting hips off the bench.",
    "primaryMuscles": [
      "Middle & Lower Pectorals (Sternocostal Head)"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Anterior Deltoids"
    ],
    "stabilizers": [
      "Rotator Cuff",
      "Latissimus Dorsi",
      "Core"
    ],
    "startPos": "Lie flat with eyes under bar. Grip slightly wider than shoulder width. Create a slight natural arch in lower back with glutes touching bench.",
    "breathing": "Inhale and brace core on descent to mid-chest; exhale as you press upward to lockout.",
    "safety": "Keep wrists straight above elbows. Do not flare elbows out 90°—tuck them to roughly 45–60° from torso."
  },
  "fly": {
    "category": "Chest",
    "name": "Machine Chest Fly (Pec Deck)",
    "img": "Butterfly",
    "target": "Chest Isolation",
    "metType": "isolation",
    "video": "Z57CtFmRMxA",
    "equipment": "Pec Deck Machine",
    "alternatives": ["cbl_fly","db_fly","pushup"],
    "muscles": [
      "Sternal Pectorals",
      "Serratus Anterior"
    ],
    "cues": "Chest proud, shoulders down. Slight bend in elbows, squeeze at center, return slowly with full stretch.",
    "steps": [
      "Adjust seat height so handles align with mid-chest.",
      "Maintain a fixed soft bend in elbows throughout movement.",
      "Bring handles together in front and hold peak squeeze for 1 second.",
      "Open arms wide under slow resistance until deep stretch is reached."
    ],
    "mistake": "Letting shoulders roll forward and hunched during the eccentric stretch.",
    "primaryMuscles": [
      "Sternal Pectoralis Major (Inner/Middle Chest)"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Serratus Anterior"
    ],
    "stabilizers": [
      "Biceps Brachii (Short Head)",
      "Core"
    ],
    "startPos": "Adjust seat height so handles align with mid-chest. Sit tall with back flat against pad and elbows slightly bent.",
    "breathing": "Inhale as handles open out wide to stretch chest; exhale as you squeeze handles together in front.",
    "safety": "Avoid over-stretching arms behind shoulders on the opening phase. Maintain consistent slight elbow bend throughout."
  },
  "dbi": {
    "category": "Chest",
    "name": "Dumbbell Incline Bench Press",
    "img": "Incline_Dumbbell_Press",
    "target": "Upper Chest",
    "metType": "compound",
    "video": "8iPEnn-ltC8",
    "equipment": "Incline Bench, Dumbbells",
    "alternatives": ["inc","dbb","cbl_fly"],
    "muscles": [
      "Upper Chest",
      "Anterior Delts",
      "Triceps"
    ],
    "cues": "Stack wrists over elbows, lower dumbbells smoothly to chest stretch, then press up and slightly inward.",
    "steps": [
      "Sit back on incline bench, kick dumbbells up onto shoulders with knees.",
      "Keep elbows tucked at a 45° to 60° angle.",
      "Lower dumbbells until deep chest stretch is felt beside upper torso.",
      "Press upward without clanking weights at top."
    ],
    "mistake": "Clanking dumbbells together at lockout (drops tension on pecs).",
    "primaryMuscles": [
      "Upper Pectorals (Clavicular Head)"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Triceps Brachii"
    ],
    "stabilizers": [
      "Rotator Cuff",
      "Biceps Brachii (Stabilizing)"
    ],
    "startPos": "Sit on 30° incline bench with dumbbells on thighs. Kick dumbbells up to shoulder level and retract shoulder blades.",
    "breathing": "Inhale on controlled 2-3 second descent; exhale as dumbbells are pressed up in slight arc.",
    "safety": "Keep dumbbells slightly angled (neutral-to-pronated 45°) rather than strictly flared straight across."
  },
  "dbb": {
    "category": "Chest",
    "name": "Dumbbell Flat Bench Press",
    "img": "Dumbbell_Bench_Press",
    "target": "Overall Chest",
    "metType": "compound",
    "video": "VmB1G1K7v94",
    "equipment": "Flat Bench, Dumbbells",
    "alternatives": ["bb","dbi","dips","pushup"],
    "muscles": [
      "Pectoralis Major",
      "Triceps"
    ],
    "cues": "Lower dumbbells alongside chest with elbows angled ~45°, press smoothly without banging weights together.",
    "steps": [
      "Lie back with dumbbells held over chest, wrists straight.",
      "Lower dumbbells smoothly until handles touch chest level.",
      "Drive weights up in smooth arc."
    ],
    "mistake": "Flaring elbows wide or losing shoulder retraction.",
    "primaryMuscles": [
      "Pectoralis Major (Overall Chest)"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Anterior Deltoids"
    ],
    "stabilizers": [
      "Rotator Cuff",
      "Core"
    ],
    "startPos": "Lie flat on bench holding dumbbells directly over chest with elbows under wrists.",
    "breathing": "Inhale as you lower weights with control to chest level; exhale as you press them back together.",
    "safety": "Never drop dumbbells directly sideways when finished—bring knees up to lower weights safely."
  },
  "ic": {
    "category": "Biceps",
    "name": "Incline Dumbbell Curl",
    "img": "Alternate_Incline_Dumbbell_Curl",
    "target": "Biceps (Long Head)",
    "metType": "isolation",
    "video": "soxrZlIl35U",
    "equipment": "Incline Bench (45°), Dumbbells",
    "alternatives": ["bc","dbc","preacher_curl","cable_curl"],
    "muscles": [
      "Biceps Brachii (Long Head)"
    ],
    "cues": "Lean back with arms hanging straight down. Curl upward without swinging elbows forward; full stretch at bottom.",
    "steps": [
      "Sit back on 45° incline bench, let arms hang perpendicular to floor.",
      "Keep upper arms pinned vertically, curl dumbbells up.",
      "Squeeze biceps firmly at top, lower under control for 2–3 seconds."
    ],
    "mistake": "Swinging elbows forward to engage front deltoids.",
    "primaryMuscles": [
      "Biceps Brachii (Long Head)"
    ],
    "secondaryMuscles": [
      "Brachialis",
      "Brachioradialis"
    ],
    "stabilizers": [
      "Anterior Deltoids",
      "Wrist Flexors"
    ],
    "startPos": "Sit back on incline bench set to 45–60°. Let arms hang straight down perpendicular to floor holding dumbbells.",
    "breathing": "Exhale as you curl dumbbells upward while supinating wrists; inhale on smooth controlled descent.",
    "safety": "Do not let shoulders roll forward or elbows drift forward during the curl. Keep upper arms fixed in place."
  },
  "bc": {
    "category": "Biceps",
    "name": "Barbell Bicep Curl",
    "img": "Barbell_Curl",
    "target": "Overall Biceps",
    "metType": "isolation",
    "video": "kwG2ipFRgfo",
    "equipment": "Barbell or EZ-Bar",
    "alternatives": ["dbc","preacher_curl","cable_curl","spider_curl"],
    "muscles": [
      "Biceps Brachii",
      "Brachialis"
    ],
    "cues": "Keep elbows pinned to your sides, prevent torso swing. Squeeze biceps at top, lower under control for 2–3s.",
    "steps": [
      "Stand tall, shoulder-width underhand grip.",
      "Pin elbows against ribcage and curl bar up without leaning back.",
      "Hold squeeze at top, lower slowly."
    ],
    "mistake": "Using hip momentum or swinging backwards.",
    "primaryMuscles": [
      "Biceps Brachii (Short & Long Heads)"
    ],
    "secondaryMuscles": [
      "Brachialis",
      "Brachioradialis"
    ],
    "stabilizers": [
      "Forearm Flexors",
      "Core",
      "Glutes"
    ],
    "startPos": "Stand with feet shoulder-width apart, holding barbell with underhand shoulder-width grip, chest proud.",
    "breathing": "Exhale as you curl the bar up toward shoulders; inhale as you lower under strict control.",
    "safety": "Avoid swinging torso backward to gain momentum. If body sways, lower the weight."
  },
  "ham": {
    "category": "Biceps",
    "name": "Dumbbell Hammer Curl",
    "img": "Hammer_Curls",
    "target": "Brachialis & Forearms",
    "metType": "isolation",
    "video": "TwD-YGVP4Bk",
    "equipment": "Dumbbells",
    "alternatives": ["dbc","cable_curl","conc_curl"],
    "muscles": [
      "Brachialis",
      "Brachioradialis",
      "Biceps"
    ],
    "cues": "Maintain neutral grip (palms facing each other) throughout. Keep elbows stationary, lower under control.",
    "steps": [
      "Hold dumbbells at sides with neutral palms facing inward.",
      "Curl weights upward toward shoulders without twisting wrists.",
      "Pause at top, lower slowly under control."
    ],
    "mistake": "Twisting wrists or rocking torso.",
    "primaryMuscles": [
      "Brachialis",
      "Brachioradialis (Outer Forearms)"
    ],
    "secondaryMuscles": [
      "Biceps Brachii"
    ],
    "stabilizers": [
      "Wrist Extensors & Flexors"
    ],
    "startPos": "Stand or sit tall holding dumbbells at sides with palms facing inward toward each other (neutral grip).",
    "breathing": "Exhale as you curl weights upward keeping palms facing each other; inhale lowering to full extension.",
    "safety": "Keep elbows glued by ribs and resist shrugging your shoulders at the top."
  },
  "dbc": {
    "category": "Biceps",
    "name": "Dumbbell Bicep Curl",
    "img": "Dumbbell_Bicep_Curl",
    "target": "Overall Biceps",
    "metType": "isolation",
    "video": "ykJmrZ5v0Oo",
    "equipment": "Dumbbells",
    "equipmentList": [
      "Dumbbells"
    ],
    "reviewer": "Jim Parker, CPT, B.A. Kinesiology",
    "setsLogged": "4,120,500",
    "popularity": "14th",
    "difficulty": "Beginner",
    "strengthScore": "94 mSCORE 4th",
    "workouts": [
      {
        "rank": "#1",
        "title": "Monday Hypertrophy Bicep Peak Builder"
      },
      {
        "rank": "#2",
        "title": "Upper Body Dumbbell Arm Workouts"
      },
      {
        "rank": "#3",
        "title": "Complete Garage Gym Arm Protocol"
      }
    ],
    "alternatives": [
      "bc",
      "ham",
      "ic"
    ],
    "muscles": [
      "Biceps Brachii",
      "Brachialis",
      "Forearms"
    ],
    "cues": "Supinate wrists (turn palms up) as you lift. Keep elbows steady at sides without using momentum.",
    "steps": [
      "Start with dumbbells at sides with a neutral grip.",
      "Supinate hands as you lift so palms face upward and shoulders at peak contraction.",
      "Hold the peak squeeze for 1 second at top.",
      "Lower under control for 2–3 seconds back to neutral sides."
    ],
    "mistake": "Swinging back and forth or using hip momentum.",
    "primaryMuscles": [
      "Biceps Brachii"
    ],
    "secondaryMuscles": [
      "Brachialis",
      "Brachioradialis"
    ],
    "stabilizers": [
      "Forearms",
      "Core"
    ],
    "startPos": "Stand tall with dumbbells at sides, palms facing inward or forward.",
    "breathing": "Exhale while curling upward, rotating wrists outward (supinating) at top; inhale returning to bottom.",
    "safety": "Do not hyperextend lower back. Keep movement strictly isolated to elbow joint flexion."
  },
  "lp": {
    "category": "Back",
    "name": "Lat Pulldown",
    "img": "Wide-Grip_Lat_Pulldown",
    "target": "Lats & Upper Back",
    "metType": "compound",
    "video": "CAwf7n6Luuc",
    "equipment": "Lat Pulldown Cable Machine",
    "alternatives": ["pullup","lat_pulldown_close","rw","bor"],
    "muscles": [
      "Latissimus Dorsi",
      "Teres Major",
      "Biceps"
    ],
    "cues": "Chest elevated, slight lean back. Pull bar toward upper chest driving elbows down; avoid yanking with your neck.",
    "steps": [
      "Grip bar slightly wider than shoulder width.",
      "Lean torso back ~15°, pull bar straight down to collarbone.",
      "Drive elbows down and back, squeeze lats.",
      "Control the eccentric return until lats stretch fully overhead."
    ],
    "mistake": "Leaning back 45° to turn it into a momentum row.",
    "primaryMuscles": [
      "Latissimus Dorsi (Lats)"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Biceps Brachii",
      "Rhomboids",
      "Lower Trapezius"
    ],
    "stabilizers": [
      "Rotator Cuff",
      "Posterior Deltoids"
    ],
    "startPos": "Sit with thighs secured snugly under pads. Grip bar slightly wider than shoulder width with overhand grip.",
    "breathing": "Inhale sitting tall; exhale as you pull bar down toward upper collarbone, driving elbows downward.",
    "safety": "Do not pull bar behind neck. Do not swing torso back past 15–20° angle."
  },
  "rc": {
    "category": "Back",
    "name": "Seated Cable Row (Close Grip)",
    "img": "Seated_Cable_Rows",
    "target": "Lats & Mid Back",
    "metType": "compound",
    "video": "GZbfZ033f74",
    "equipment": "Cable Row Machine, V-Grip Handle",
    "alternatives": ["rw","bor","db_row","tbar"],
    "muscles": [
      "Lats",
      "Rhomboids",
      "Mid Traps"
    ],
    "cues": "Brace chest against pad, pull elbows past torso, retract shoulder blades, return under control.",
    "steps": [
      "Sit upright with knees slightly bent, feet on footplates.",
      "Pull V-handle into lower belly, driving elbows past torso.",
      "Retract shoulder blades together, extend arms back with control."
    ],
    "mistake": "Rounding lower spine or heaving with hips.",
    "primaryMuscles": [
      "Latissimus Dorsi",
      "Rhomboids"
    ],
    "secondaryMuscles": [
      "Middle Trapezius",
      "Biceps Brachii",
      "Erector Spinae"
    ],
    "stabilizers": [
      "Core",
      "Hamstrings"
    ],
    "startPos": "Sit on bench with slight knee bend, feet securely braced on footplates. Grasp V-bar handle with neutral grip.",
    "breathing": "Inhale leaning slightly forward at hips; exhale as you sit tall and pull handle to lower abdomen.",
    "safety": "Keep lower back neutral and flat. Never round lumbar spine to pull heavier weight."
  },
  "rw": {
    "category": "Back",
    "name": "Seated Machine Row (Wide Grip)",
    "img": "Leverage_Iso_Row",
    "target": "Mid & Upper Back",
    "metType": "compound",
    "video": "H75im9fAUMc",
    "equipment": "Row Machine, Wide Handles",
    "alternatives": ["bor","db_row","tbar","rc"],
    "muscles": [
      "Upper Back",
      "Rhomboids",
      "Rear Delts"
    ],
    "cues": "Flaring elbows slightly outward, pull handle toward upper abdomen and squeeze mid-back rhomboids.",
    "steps": [
      "Chest on support pad, overhand wide grip.",
      "Pull handles back flaring elbows ~45-60 degrees.",
      "Squeeze shoulder blades firmly together."
    ],
    "mistake": "Shrugging shoulders into ears.",
    "primaryMuscles": [
      "Middle Trapezius",
      "Rhomboids",
      "Rear Deltoids"
    ],
    "secondaryMuscles": [
      "Latissimus Dorsi",
      "Biceps Brachii"
    ],
    "stabilizers": [
      "Rotator Cuff",
      "Erector Spinae"
    ],
    "startPos": "Adjust chest pad so wide handles are reached with arms almost fully extended. Keep chest firmly on pad.",
    "breathing": "Exhale as you pull handles back, flaring elbows out wide (~60–75°) and pinching shoulder blades; inhale return.",
    "safety": "Avoid letting chest peel off the pad during the pull. Pull with back muscles, not just forearms."
  },
  "sh": {
    "category": "Shoulders",
    "name": "Dumbbell / Barbell Shrug",
    "img": "Barbell_Shrug",
    "target": "Upper Trapezius",
    "metType": "isolation",
    "video": "cJRVVxmytaM",
    "equipment": "Dumbbells or Barbell",
    "alternatives": ["db_shrug","upright_row","facepull"],
    "muscles": [
      "Upper Trapezius",
      "Levator Scapulae"
    ],
    "cues": "Elevate shoulders straight up toward ears, hold contraction for 1 second. Avoid rolling shoulders.",
    "steps": [
      "Hold heavy weights at sides, chest high.",
      "Elevate shoulders straight up toward ears.",
      "Hold peak contraction for 1 full second, lower slowly."
    ],
    "mistake": "Rolling shoulders in circles.",
    "primaryMuscles": [
      "Upper Trapezius"
    ],
    "secondaryMuscles": [
      "Levator Scapulae"
    ],
    "stabilizers": [
      "Forearm Flexors (Grip Strength)",
      "Core"
    ],
    "startPos": "Stand upright holding heavy dumbbells at sides or barbell at thighs with arms straight.",
    "breathing": "Exhale as you shrug shoulders straight up toward ears; pause for 1 second; inhale lowering with control.",
    "safety": "Never roll shoulders in circular motion—this stresses cervical spine and rotator cuff. Shrug straight up and down."
  },
  "sp": {
    "category": "Shoulders",
    "name": "Dumbbell Shoulder Press",
    "img": "Dumbbell_Shoulder_Press",
    "target": "Deltoids",
    "metType": "compound",
    "video": "qEwKCR5JCog",
    "equipment": "Upright 90° Bench, Dumbbells",
    "alternatives": ["ohp","arnold_press","lr"],
    "muscles": [
      "Anterior Delts",
      "Lateral Delts",
      "Triceps"
    ],
    "cues": "Upright 90° bench, brace core, avoid over-arching lower back. Press overhead to near lockout, lower to ear level.",
    "steps": [
      "Sit upright with back supported, dumbbells at ear height.",
      "Brace core and press dumbbells overhead in a smooth upward arc.",
      "Lower slowly back to ear level."
    ],
    "mistake": "Excessively arching lower back off the seat.",
    "primaryMuscles": [
      "Anterior Deltoids",
      "Lateral Deltoids"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Upper Trapezius",
      "Upper Pecs"
    ],
    "stabilizers": [
      "Rotator Cuff",
      "Core",
      "Serratus Anterior"
    ],
    "startPos": "Sit with back supported. Hold dumbbells at ear height with elbows positioned roughly 45° forward of shoulders.",
    "breathing": "Inhale to brace; exhale as you press dumbbells vertically overhead until arms extend.",
    "safety": "Do not allow elbows to flare completely behind your head. Avoid excessive lumbar arching."
  },
  "lr": {
    "category": "Shoulders",
    "name": "Dumbbell Lateral Raise",
    "img": "Side_Lateral_Raise",
    "target": "Side Deltoids",
    "metType": "isolation",
    "video": "3VcKaXpzqRo",
    "equipment": "Light Dumbbells",
    "alternatives": ["cable_lateral_raise","sp","arnold_press","facepull"],
    "muscles": [
      "Lateral Deltoid"
    ],
    "cues": "Use controlled weight, slight bend in elbows. Lead with elbows to shoulder level, lower smoothly for 2–3 seconds.",
    "steps": [
      "Hinge slightly at hips with soft elbows.",
      "Raise arms out to sides leading with elbows until parallel to floor.",
      "Lower under control for 2–3 seconds."
    ],
    "mistake": "Swinging heavy dumbbells with body momentum.",
    "primaryMuscles": [
      "Lateral Deltoids (Side Delts)"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Upper Trapezius",
      "Supraspinatus"
    ],
    "stabilizers": [
      "Core",
      "Wrist Extensors"
    ],
    "startPos": "Stand or sit with slight forward torso tilt. Hold dumbbells at sides with palms facing inward, elbows slightly unlocked.",
    "breathing": "Exhale as you raise weights out to sides until parallel to floor; inhale lowering under 2s control.",
    "safety": "Lead with elbows rather than wrists. Stop at shoulder height—raising higher shifts work to traps."
  },
  "rf": {
    "category": "Shoulders",
    "name": "Reverse Fly Machine (Reverse Pec Deck)",
    "img": "Reverse_Machine_Flyes",
    "target": "Rear Deltoids",
    "metType": "isolation",
    "video": "6yMdhi2DVao",
    "equipment": "Reverse Pec Deck Machine",
    "alternatives": ["facepull","db_rear_delt_fly","rw"],
    "muscles": [
      "Posterior Deltoids",
      "Rhomboids"
    ],
    "cues": "Brace chest against pad, sweep arms wide aligned with shoulders, firmly contract rear delts at peak.",
    "steps": [
      "Sit facing pad, handles at shoulder height.",
      "Sweep arms backward in wide arc keeping elbows soft.",
      "Squeeze rear deltoids, return slowly."
    ],
    "mistake": "Bending elbows too much like a row.",
    "primaryMuscles": [
      "Posterior Deltoids (Rear Delts)"
    ],
    "secondaryMuscles": [
      "Rhomboids",
      "Middle & Lower Trapezius",
      "Infraspinatus"
    ],
    "stabilizers": [
      "Rotator Cuff",
      "Core"
    ],
    "startPos": "Sit facing machine with chest on pad. Adjust seat so handles are at shoulder level. Grasp neutral or horizontal handles.",
    "breathing": "Exhale as you sweep arms out and back in wide arc; inhale controlling weight back to starting stretch.",
    "safety": "Keep arms relatively straight with soft elbow bend. Do not shrug traps up to your neck."
  },
  "leg": {
    "category": "Legs",
    "name": "45° Leg Press",
    "img": "Leg_Press",
    "target": "Quadriceps & Glutes",
    "metType": "heavy",
    "video": "IZxyjW7MPJQ",
    "equipment": "Leg Press Machine",
    "alternatives": ["barbell_squat","hack_squat","front_squat","bulgarian_split"],
    "muscles": [
      "Quadriceps",
      "Glutes",
      "Hamstrings"
    ],
    "cues": "Feet shoulder-width apart, lower sled to ~90° knee angle. Keep lower back pinned to seat; do not violently lock out knees.",
    "steps": [
      "Feet shoulder-width on platform, back and hips flat against backrest.",
      "Lower sled under control until knees reach 90°.",
      "Press through mid-foot and heels to drive sled back up.",
      "Do NOT hyperextend or slam knees at lockout."
    ],
    "mistake": "Allowing lower back/tailbone to peel off the seat.",
    "primaryMuscles": [
      "Quadriceps (Vastus Lateralis, Medialis, Intermedius, Rectus Femoris)"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Adductor Magnus",
      "Hamstrings"
    ],
    "stabilizers": [
      "Calves",
      "Core"
    ],
    "startPos": "Sit with back and hips firmly pressed against pad. Place feet shoulder-width apart in middle of sled footplate.",
    "breathing": "Inhale deeply as you release safety pins and lower sled until knees reach 90°; exhale pressing through midfoot/heels.",
    "safety": "CRITICAL: Never lock knees out completely at top of press! Never let lower back or tailbone lift off pad."
  },
  "le": {
    "category": "Legs",
    "name": "Leg Extension",
    "img": "Leg_Extensions",
    "target": "Quadriceps",
    "metType": "isolation",
    "video": "YyvSfV-77y4",
    "equipment": "Leg Extension Machine",
    "alternatives": ["barbell_squat","hack_squat","leg"],
    "muscles": [
      "Quadriceps (Rectus Femoris & Vastus)"
    ],
    "cues": "Align knees with machine pivot, extend fully and pause 1 second at top contraction, lower slowly.",
    "steps": [
      "Align knee joints with pivot point.",
      "Extend legs to full lockout, squeeze quads hard for 1 second.",
      "Lower under controlled eccentric tension."
    ],
    "mistake": "Kicking weights explosively without peak contraction.",
    "primaryMuscles": [
      "Quadriceps (Rectus Femoris & Vastus Group)"
    ],
    "secondaryMuscles": [],
    "stabilizers": [
      "Core",
      "Hip Flexors"
    ],
    "startPos": "Align knee joint directly with machine pivot axis. Adjust shin pad to rest comfortably just above ankles.",
    "breathing": "Exhale as you extend knees smoothly to full horizontal extension; inhale on controlled 2-3 second return.",
    "safety": "Do not use ballistic kicking momentum. Pause for a split second at top contraction."
  },
  "lc": {
    "category": "Legs",
    "name": "Lying Leg Curl",
    "img": "Lying_Leg_Curls",
    "target": "Hamstrings",
    "metType": "isolation",
    "video": "1Tq3QdYUuHs",
    "equipment": "Lying Leg Curl Machine",
    "alternatives": ["rdl","seated_leg_curl","deadlift"],
    "muscles": [
      "Hamstrings (Biceps Femoris, Semitendinosus)"
    ],
    "cues": "Keep hips pressed flat against pad, curl heels toward glutes, lower under control without lifting pelvis.",
    "steps": [
      "Lie face down, pad resting behind lower calves.",
      "Keep hips pinned to pad, curl heels toward glutes.",
      "Squeeze hamstrings at top, lower slowly."
    ],
    "mistake": "Lifting hips off bench to yank the weight up.",
    "primaryMuscles": [
      "Hamstrings (Biceps Femoris, Semitendinosus, Semimembranosus)"
    ],
    "secondaryMuscles": [
      "Gastrocnemius (Calves)"
    ],
    "stabilizers": [
      "Tibialis Anterior"
    ],
    "startPos": "Lie face down with knees just off edge of bench. Pad rests against lower calves just below calves.",
    "breathing": "Exhale as you curl heels upward toward glutes; inhale as you slowly lower weight back to starting stretch.",
    "safety": "Keep hips glued to bench pad—do not allow lower back to arch upward to help lift the weight."
  },
  "cr": {
    "category": "Legs",
    "name": "Calf Raise",
    "img": "Standing_Calf_Raises",
    "target": "Calves",
    "metType": "core",
    "video": "-M4-G8p8fmc",
    "equipment": "Standing or Seated Calf Machine / Platform",
    "alternatives": ["seated_calf"],
    "muscles": [
      "Gastrocnemius",
      "Soleus"
    ],
    "cues": "Full deep stretch at bottom, pause 1 second at peak contraction, avoid bouncing.",
    "steps": [
      "Balls of feet on step edge, heels hanging off.",
      "Drop heels down for a full deep stretch.",
      "Rise high onto toes and hold peak squeeze for 1 second.",
      "Lower slowly without bouncing."
    ],
    "mistake": "Bouncing quickly without holding the stretch.",
    "primaryMuscles": [
      "Gastrocnemius (Outer & Inner Calf)"
    ],
    "secondaryMuscles": [
      "Soleus",
      "Plantaris"
    ],
    "stabilizers": [
      "Foot Intrinsic Muscles",
      "Ankle Stabilizers"
    ],
    "startPos": "Position balls of feet on block with heels hanging off edge. Keep knees straight but not hyperextended.",
    "breathing": "Exhale pressing through balls of feet to maximum height; pause 1s; inhale lowering to deep comfortable stretch.",
    "safety": "Do not bounce at the bottom. Control the transition between stretch and contraction."
  },
  "pd": {
    "category": "Triceps",
    "name": "Cable Tricep Pushdown",
    "img": "Triceps_Pushdown",
    "target": "Triceps",
    "metType": "isolation",
    "video": "2-LAMcpzODU",
    "equipment": "Cable Pulley, Straight Bar or V-Bar",
    "alternatives": ["re","oe","skullcrushers","dips_bench","close_grip_bench"],
    "muscles": [
      "Triceps Lateral & Medial Heads"
    ],
    "cues": "Lock elbows against ribcage, pivot only at forearms, fully extend downward and squeeze triceps.",
    "steps": [
      "Pin elbows against sides with slight forward torso lean.",
      "Push bar straight down until arms are locked.",
      "Squeeze triceps at bottom, resist up to 90 degrees."
    ],
    "mistake": "Letting elbows swing forward and backward.",
    "primaryMuscles": [
      "Triceps Brachii (Lateral & Medial Heads)"
    ],
    "secondaryMuscles": [
      "Triceps Long Head"
    ],
    "stabilizers": [
      "Anconeus",
      "Core",
      "Forearms"
    ],
    "startPos": "Stand facing cable stack. Grip bar attachment at chest height with elbows tucked firmly by ribcage.",
    "breathing": "Exhale pushing bar downward until arms are completely straight; inhale returning to 90° elbow bend.",
    "safety": "Keep upper arms stationary at sides. Do not let shoulders roll forward or lean body weight over bar."
  },
  "re": {
    "category": "Triceps",
    "name": "Cable Rope Tricep Extension",
    "img": "Triceps_Pushdown_-_Rope_Attachment",
    "target": "Triceps Isolation",
    "metType": "isolation",
    "video": "vB5OHsJ3EME",
    "equipment": "Cable Pulley, Rope Attachment",
    "alternatives": ["pd","oe","skullcrushers","tricep_kickback"],
    "muscles": [
      "Triceps Brachii"
    ],
    "cues": "Keep elbows fixed, flare rope ends apart at full lockout, resist the eccentric phase upward.",
    "steps": [
      "Hold rope with neutral grip, elbows pinned to sides.",
      "Extend down and pull rope apart at bottom lockout.",
      "Control weight back up slowly."
    ],
    "mistake": "Using shoulders and body weight to push down.",
    "primaryMuscles": [
      "Triceps Brachii (Lateral & Long Heads)"
    ],
    "secondaryMuscles": [
      "Triceps Medial Head"
    ],
    "stabilizers": [
      "Anconeus",
      "Wrist Stabilizers"
    ],
    "startPos": "Attach rope to high pulley. Hold rope with neutral grip (thumbs up), elbows pinned to sides.",
    "breathing": "Exhale pushing downward and flaring rope ends outward at bottom; inhale returning slowly.",
    "safety": "Resist elbows swinging forward and backward. Focus on squeezing triceps at full extension."
  },
  "oe": {
    "category": "Triceps",
    "name": "Overhead Cable Tricep Extension",
    "img": "Cable_Rope_Overhead_Triceps_Extension",
    "target": "Triceps (Long Head)",
    "metType": "isolation",
    "video": "_gsUokN_Abg",
    "equipment": "Cable Station, Rope",
    "alternatives": ["skullcrushers","dips_bench","pd"],
    "muscles": [
      "Triceps Long Head"
    ],
    "cues": "Point elbows forward close to head, achieve deep stretch behind head, extend until arms are straight.",
    "steps": [
      "Face away from high cable holding rope behind neck.",
      "Keep elbows pointing forward close to ears.",
      "Extend arms forward overhead to full lockout."
    ],
    "mistake": "Flaring elbows wide out.",
    "primaryMuscles": [
      "Triceps Brachii (Long Head)"
    ],
    "secondaryMuscles": [
      "Triceps Lateral & Medial Heads"
    ],
    "stabilizers": [
      "Core",
      "Scapular Stabilizers"
    ],
    "startPos": "Set cable low or high, face away from pulley holding rope behind neck with elbows pointing forward and high.",
    "breathing": "Inhale with triceps stretched behind head; exhale extending arms overhead to straight lockout.",
    "safety": "Keep ribcage down and core braced to avoid arching spine under overhead load."
  },
  "cc": {
    "category": "Abs",
    "name": "Standing / Kneeling Cable Crunch",
    "img": "Cable_Crunch",
    "target": "Abdominals",
    "metType": "core",
    "video": "2fORO4v19qQ",
    "equipment": "High Cable Pulley, Rope",
    "alternatives": ["hanging_leg_raise","ab_wheel","plank"],
    "muscles": [
      "Rectus Abdominis"
    ],
    "cues": "Keep hips static. Flex spine to bring ribs toward pelvis, exhale deeply at peak contraction.",
    "steps": [
      "Hold rope beside ears, keep hips stationary.",
      "Curl ribcage toward hips rounding your spine.",
      "Exhale and contract abs, return slowly."
    ],
    "mistake": "Bending at the hips like a bow instead of flexing the spine.",
    "primaryMuscles": [
      "Rectus Abdominis (Six-Pack Core)"
    ],
    "secondaryMuscles": [
      "Obliques (Internal & External)"
    ],
    "stabilizers": [
      "Serratus Anterior",
      "Transverse Abdominis"
    ],
    "startPos": "Kneel beneath high pulley holding rope at temple/ear level. Hips stay high and stationary.",
    "breathing": "Exhale curling torso downward, bringing elbows toward knees by flexing spine; inhale slowly rising.",
    "safety": "Flex from the waist and abs—do not sit back on your heels or pull using arms and lats."
  },
  "sb": {
    "category": "Abs",
    "name": "Dumbbell Side Bend",
    "img": "Dumbbell_Side_Bend",
    "target": "Obliques",
    "metType": "core",
    "video": "jVcx3XwN3Ew",
    "equipment": "Single Dumbbell",
    "alternatives": ["russian_twist","plank"],
    "muscles": [
      "Obliques",
      "Quadratus Lumborum"
    ],
    "cues": "Bend strictly sideways in frontal plane. Use smooth, controlled reps without jerky swinging.",
    "steps": [
      "Hold dumbbell in one hand at side, opposite hand behind head.",
      "Bend directly sideways towards the dumbbell.",
      "Contract obliques to pull back upright."
    ],
    "mistake": "Holding dumbbells in both hands.",
    "primaryMuscles": [
      "Obliques (Internal & External)"
    ],
    "secondaryMuscles": [
      "Quadratus Lumborum",
      "Erector Spinae"
    ],
    "stabilizers": [
      "Forearm Flexors (Grip)",
      "Gluteus Medius"
    ],
    "startPos": "Stand tall holding a single dumbbell in one hand at side, opposite hand behind ear or on hip.",
    "breathing": "Inhale bending sideways toward the weighted side; exhale contracting opposite oblique to stand upright.",
    "safety": "Do not hold dumbbells in both hands at once (creates see-saw counterweight). Avoid twisting spine."
  },
  "kr": {
    "category": "Abs",
    "name": "Vertical Knee Raise (Captain's Chair)",
    "img": "Knee_Hip_Raise_On_Parallel_Bars",
    "target": "Lower Abs & Hip Flexors",
    "metType": "core",
    "video": "RD_A-Z15Er4",
    "equipment": "Captain's Chair / Dip Station",
    "alternatives": ["hanging_leg_raise","ab_wheel","cc"],
    "muscles": [
      "Lower Rectus Abdominis",
      "Iliopsoas"
    ],
    "cues": "Back firmly against pad, raise knees using core strength, slightly tilt pelvis upward at peak, lower slowly.",
    "steps": [
      "Forearms braced on armrests, back pressed flat against pad.",
      "Raise knees toward chest while tilting pelvis up at the top.",
      "Lower slowly under control without swinging."
    ],
    "mistake": "Using swinging momentum without curling the pelvis.",
    "primaryMuscles": [
      "Lower Rectus Abdominis"
    ],
    "secondaryMuscles": [
      "Iliopsoas (Hip Flexors)",
      "Obliques"
    ],
    "stabilizers": [
      "Shoulder Depressors",
      "Forearms"
    ],
    "startPos": "Support body on Captain's Chair pads with forearms flat and back resting against pad, legs hanging.",
    "breathing": "Exhale as you raise knees up toward chest, curling pelvis upward at the top; inhale lowering smoothly.",
    "safety": "Do not swing legs with momentum. Focus on tilting pelvis upward to activate lower abs."
  },
  "gb": {
    "category": "Legs",
    "name": "Bodyweight Glute Bridge",
    "img": "Glute_Bridge",
    "target": "Glutes",
    "metType": "isolation",
    "equipment": "Bodyweight (mat)",
    "alternatives": ["hip_thrust","rdl","barbell_squat"],
    "muscles": [
      "Glutes",
      "Hamstrings"
    ],
    "cues": "Feet flat and hip-width, drive through your heels, squeeze glutes at the top, keep ribs down.",
    "steps": [
      "Lie on your back with knees bent and feet flat on the floor, hip-width apart.",
      "Drive through your heels to raise your hips until your body forms a straight line from knees to shoulders.",
      "Squeeze glutes firmly at the top, keep ribs down, then lower under control."
    ],
    "mistake": "Over-arching the lower back at the top.",
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Erector Spinae"
    ],
    "stabilizers": [
      "Transverse Abdominis",
      "Adductor Muscles"
    ],
    "startPos": "Lie on back with knees bent at 90° and feet flat on floor, hip-width apart. Arms at sides.",
    "breathing": "Exhale driving through heels to raise hips until knees, hips, and shoulders form straight line; inhale down.",
    "safety": "Squeeze glutes hard at the top without over-arching lower back or hyperextending lumbar spine."
  },
  "srm": {
    "category": "Back",
    "name": "Seated Row Machine",
    "img": "Seated_Cable_Rows",
    "target": "Mid Back",
    "metType": "compound",
    "equipment": "Seated Row Machine",
    "muscles": [
      "Rhomboids",
      "Lats",
      "Rear Delts"
    ],
    "cues": "Chest on the pad, pull elbows back, squeeze shoulder blades, return slowly.",
    "steps": [
      "Sit with chest braced firmly against the pad, reaching forward with arms extended to grip handles.",
      "Pull handles toward your torso, driving elbows back and squeezing shoulder blades together.",
      "Hold peak squeeze for a moment, then slowly extend arms back to starting position."
    ],
    "mistake": "Shrugging shoulders or using momentum.",
    "primaryMuscles": [
      "Rhomboids",
      "Middle Trapezius",
      "Latissimus Dorsi"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Posterior Deltoids",
      "Brachialis"
    ],
    "stabilizers": [
      "Erector Spinae",
      "Rotator Cuff"
    ],
    "startPos": "Sit tall with chest against pad. Grasp handles with arms extended and feet braced on footrests.",
    "breathing": "Exhale pulling handles toward abdomen while squeezing shoulder blades back; inhale returning with control.",
    "safety": "Keep spine neutral throughout. Do not swing torso back to yank weight."
  }
,
  "dips": {
    "category": "Chest",
    "name": "Chest Dips (Parallel Bars)",
    "img": "Chest_Dip",
    "target": "Lower Chest & Triceps",
    "metType": "compound",
    "equipment": "Parallel Dip Bars",
    "muscles": [
      "Lower Pectorals",
      "Triceps Brachii",
      "Anterior Deltoids"
    ],
    "cues": "Lean torso forward ~30°, flare elbows slightly, lower until elbows reach 90°, press up without locking out elbows harshly.",
    "steps": [
      "Grasp parallel bars, suspend yourself with arms straight and elbows unlocked.",
      "Cross ankles and tilt torso forward ~30° to target pecs.",
      "Lower under control until upper arms are parallel with the floor.",
      "Press powerfully through palms back to starting height."
    ],
    "mistake": "Staying completely upright (shifts load entirely to triceps) or dropping too deep.",
    "primaryMuscles": [
      "Lower Pectorals (Sternocostal Head)"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Anterior Deltoids"
    ],
    "stabilizers": [
      "Core",
      "Serratus Anterior",
      "Rotator Cuff"
    ],
    "startPos": "Support body weight on parallel bars with arms extended and torso tilted slightly forward.",
    "breathing": "Inhale descending until chest stretch is felt; exhale pressing upward.",
    "safety": "Stop descent at 90° elbow bend if you feel shoulder discomfort.",
    "alternatives": ["rw","rc","bor","db_row"]
  },
  "pushup": {
    "category": "Chest",
    "name": "Push-Ups (Standard & Deficit)",
    "img": "Pushups",
    "target": "Chest & Core",
    "metType": "compound",
    "equipment": "Bodyweight",
    "muscles": [
      "Pectoralis Major",
      "Triceps Brachii",
      "Core"
    ],
    "cues": "Hands just outside shoulders, plank body in a straight line, touch chest to floor, drive through whole hand.",
    "steps": [
      "Set hands slightly wider than shoulder-width, fingers pointing slightly out.",
      "Squeeze glutes and brace abs so hips do not sag.",
      "Lower entire body under control until chest is 1 inch off the floor.",
      "Push floor away forcefully until elbows are extended."
    ],
    "mistake": "Hips sagging downward or flaring elbows 90° like a T-shape.",
    "primaryMuscles": [
      "Pectoralis Major"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Anterior Deltoids"
    ],
    "stabilizers": [
      "Rectus Abdominis",
      "Glutes",
      "Serratus Anterior"
    ],
    "startPos": "High plank position, wrists under shoulders, neck neutral.",
    "breathing": "Inhale down to floor; exhale pushing back to top plank.",
    "safety": "Keep elbows tucked at a 45° arrow angle to protect rotator cuffs.",
    "alternatives": [
      "bb",
      "dbb",
      "inc",
      "dips",
      "fly"
    ]
  },
  "cbl_fly": {
    "category": "Chest",
    "name": "Cable Crossover Chest Fly",
    "img": "Cable_Crossover",
    "target": "Chest Isolation & Peak Squeeze",
    "metType": "isolation",
    "equipment": "Dual Cable Machine",
    "muscles": [
      "Sternal Pectorals",
      "Anterior Deltoids"
    ],
    "cues": "Staggered stance, slight elbow bend, hug a large tree with your arms, squeeze pecs hard at center.",
    "steps": [
      "Set pulleys high or mid-chest height. Grasp handles and take 1 step forward in staggered stance.",
      "Keep a fixed soft bend in elbows throughout.",
      "Bring hands together in a wide hugging arc until knuckles touch or cross slightly.",
      "Return slowly under tension to a full chest stretch."
    ],
    "mistake": "Bending and straightening elbows like a press instead of hugging like a fly.",
    "primaryMuscles": [
      "Pectoralis Major (Sternal Head)"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Serratus Anterior"
    ],
    "stabilizers": [
      "Core",
      "Biceps Brachii (Short Head)"
    ],
    "startPos": "Standing between cable towers with slight forward torso lean and staggered feet.",
    "breathing": "Inhale as cables pull arms backward; exhale squeezing handles together in front.",
    "safety": "Do not let cables wrench shoulders past comfortable active range.",
    "alternatives": [
      "fly",
      "db_fly",
      "inc",
      "bb"
    ]
  },
  "dec_bb": {
    "category": "Chest",
    "name": "Decline Barbell Bench Press",
    "img": "Decline_Barbell_Bench_Press",
    "target": "Lower Chest",
    "metType": "heavy",
    "equipment": "Decline Bench (-15° to -30°), Barbell",
    "muscles": [
      "Lower Pectorals",
      "Triceps Brachii"
    ],
    "cues": "Secure ankles under pads, grip slightly wider than shoulders, lower to bottom of sternum, press straight up.",
    "steps": [
      "Hook shins securely beneath the ankle pads and lie back on decline bench.",
      "Grip barbell outside shoulder width and unrack directly over lower chest.",
      "Lower bar smoothly to lower edge of sternum.",
      "Press vertically to lockout."
    ],
    "mistake": "Lowering bar too high on collarbone or failing to lock ankles in roller pads.",
    "primaryMuscles": [
      "Lower Pectorals (Abdominal Head)"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Anterior Deltoids"
    ],
    "stabilizers": [
      "Latissimus Dorsi",
      "Core"
    ],
    "startPos": "Securely locked into decline bench with shoulders pinned to pad.",
    "breathing": "Inhale down to lower sternum; exhale pressing bar upward.",
    "safety": "Always use collar clips and a spotter or power rack safety pins on decline.",
    "alternatives": [
      "bb",
      "dips",
      "dbb"
    ]
  },
  "db_fly": {
    "category": "Chest",
    "name": "Dumbbell Flat Bench Fly",
    "img": "Dumbbell_Flyes",
    "target": "Chest Stretch & Isolation",
    "metType": "isolation",
    "equipment": "Flat Bench, Dumbbells",
    "muscles": [
      "Pectoralis Major",
      "Serratus Anterior"
    ],
    "cues": "Palms facing in, fixed bend in elbows, open wide like wings until chest stretches, squeeze back up.",
    "steps": [
      "Lie flat holding dumbbells extended above chest with palms facing each other.",
      "Maintain a constant 15–20° bend at the elbows.",
      "Lower dumbbells in wide lateral arc until deep chest stretch is reached.",
      "Contract pecs to reverse the motion along the same circular arc."
    ],
    "mistake": "Straightening arms or dropping elbows too far below bench height.",
    "primaryMuscles": [
      "Pectoralis Major"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids"
    ],
    "stabilizers": [
      "Biceps Brachii",
      "Rotator Cuff"
    ],
    "startPos": "Flat on bench with dumbbells held above mid-chest and shoulder blades retracted.",
    "breathing": "Inhale on the wide opening arc; exhale squeezing dumbbells back together.",
    "safety": "Keep weights moderate to protect the anterior shoulder capsule.",
    "alternatives": [
      "fly",
      "cbl_fly",
      "dbb",
      "bb"
    ]
  },
  "pullup": {
    "category": "Back",
    "name": "Pull-Ups (Overhand Grip)",
    "img": "Pullups",
    "target": "Lats & Upper Back Width",
    "metType": "compound",
    "equipment": "Pull-Up Bar",
    "muscles": [
      "Latissimus Dorsi",
      "Biceps",
      "Teres Major",
      "Rhomboids"
    ],
    "cues": "Overhand grip wider than shoulders, pull elbows down toward back pockets, chest to bar, controlled dead hang.",
    "steps": [
      "Grasp bar with overhand grip wider than shoulder width.",
      "Depress scapulae first, then pull elbows down toward your ribs.",
      "Pull until your chin clears the bar or collarbone touches.",
      "Lower under complete control back to a full dead hang stretch."
    ],
    "mistake": "Kicking legs / kipping or doing half-reps without full extension.",
    "primaryMuscles": [
      "Latissimus Dorsi",
      "Teres Major"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Rhomboids",
      "Middle Trapezius"
    ],
    "stabilizers": [
      "Core",
      "Forearms / Grip"
    ],
    "startPos": "Full hang with arms straight, grip secure, feet crossed behind.",
    "breathing": "Exhale as you pull chin over bar; inhale lowering to dead hang.",
    "safety": "Engage shoulders before initiating the pull to protect rotator cuffs.",
    "alternatives": [
      "lp",
      "lat_pulldown_close",
      "rc",
      "rw"
    ]
  },
  "bor": {
    "category": "Back",
    "name": "Barbell Bent-Over Row",
    "img": "Bent_Over_Barbell_Row",
    "target": "Back Thickness & Lats",
    "metType": "heavy",
    "equipment": "Barbell, Weight Plates",
    "muscles": [
      "Latissimus Dorsi",
      "Rhomboids",
      "Trapezius",
      "Erector Spinae"
    ],
    "cues": "Hinge hips back 45°, flat spine, pull bar to belly button, squeeze shoulder blades together at top.",
    "steps": [
      "Hinge at hips with knees slightly bent until torso is roughly 45° to floor.",
      "Grip bar with overhand grip just outside knees with neutral spine.",
      "Drive elbows back toward ceiling, pulling bar into lower ribcage/navel.",
      "Lower bar smoothly until lats stretch fully at the bottom."
    ],
    "mistake": "Rounding lower back or yanking torso upright using momentum.",
    "primaryMuscles": [
      "Latissimus Dorsi",
      "Rhomboids",
      "Middle/Lower Traps"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Posterior Deltoids"
    ],
    "stabilizers": [
      "Erector Spinae",
      "Hamstrings",
      "Glutes",
      "Core"
    ],
    "startPos": "Hinged at hips with flat back, shoulders slightly higher than hips, bar hanging below knees.",
    "breathing": "Inhale at the bottom stretch; exhale pulling elbows back into navel.",
    "safety": "Never allow lumbar spine to round under heavy loads.",
    "alternatives": [
      "rc",
      "rw",
      "db_row",
      "tbar",
      "srm"
    ]
  },
  "db_row": {
    "category": "Back",
    "name": "One-Arm Dumbbell Row",
    "img": "One-Arm_Dumbbell_Row",
    "target": "Unilateral Lat & Upper Back",
    "metType": "compound",
    "equipment": "Flat Bench, Dumbbell",
    "muscles": [
      "Latissimus Dorsi",
      "Rhomboids",
      "Biceps"
    ],
    "cues": "Knee and hand on bench, flat back, pull dumbbell in an arc toward hip, squeeze lat at top.",
    "steps": [
      "Place same-side knee and hand on flat bench; plant opposite foot out wide.",
      "Hold dumbbell in free hand with arm fully extended toward floor.",
      "Drive elbow backward toward your hip pocket, keeping elbow close to torso.",
      "Lower under control for full stretch without twisting torso."
    ],
    "mistake": "Twisting torso at the top or yanking weight with bicep instead of lat.",
    "primaryMuscles": [
      "Latissimus Dorsi"
    ],
    "secondaryMuscles": [
      "Rhomboids",
      "Biceps Brachii",
      "Rear Deltoid"
    ],
    "stabilizers": [
      "Core",
      "Erector Spinae"
    ],
    "startPos": "Supported on bench with spine parallel to floor and free arm extended.",
    "breathing": "Exhale rowing dumbbell to hip; inhale lowering to floor stretch.",
    "safety": "Keep hips and shoulders square to the bench throughout.",
    "alternatives": [
      "rc",
      "rw",
      "bor",
      "tbar"
    ]
  },
  "tbar": {
    "category": "Back",
    "name": "T-Bar Row",
    "img": "T-Bar_Row_with_Handle",
    "target": "Mid-Back Thickness & Lats",
    "metType": "compound",
    "equipment": "T-Bar Landmine / Machine, V-Grip Handle",
    "muscles": [
      "Mid-Back",
      "Latissimus Dorsi",
      "Rhomboids"
    ],
    "cues": "Straddle bar, hinge hips back, chest up, pull V-handle to lower chest/upper abdomen, pause 1s.",
    "steps": [
      "Straddle the bar with feet shoulder-width apart and knees soft.",
      "Hinge forward at 45° with flat back and grasp V-grip handle.",
      "Pull the weight toward abdomen by driving elbows up and back.",
      "Lower smoothly until arms are straight and lats feel elongated."
    ],
    "mistake": "Standing upright on every rep instead of maintaining rigid hip hinge.",
    "primaryMuscles": [
      "Rhomboids",
      "Middle Trapezius",
      "Latissimus Dorsi"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Rear Delts"
    ],
    "stabilizers": [
      "Erector Spinae",
      "Hamstrings",
      "Core"
    ],
    "startPos": "Straddling bar in 45° hinge with chest proud and spine locked.",
    "breathing": "Inhale down; exhale pulling weight toward upper abs.",
    "safety": "Keep core tightly braced to protect lumbar spine.",
    "alternatives": [
      "bor",
      "rw",
      "rc",
      "db_row"
    ]
  },
  "deadlift": {
    "category": "Back",
    "name": "Barbell Conventional Deadlift",
    "img": "Barbell_Deadlift",
    "target": "Posterior Chain (Back, Glutes, Hamstrings)",
    "metType": "heavy",
    "equipment": "Olympic Barbell, Bumper/Iron Plates",
    "muscles": [
      "Erector Spinae",
      "Gluteus Maximus",
      "Hamstrings",
      "Lats",
      "Traps"
    ],
    "cues": "Bar over mid-foot, shins to bar, pull slack out of bar, push floor away with legs, stand tall.",
    "steps": [
      "Stand with feet hip-width apart, barbell cutting over middle of feet.",
      "Hinge down and grip bar outside knees with arms perpendicular to floor.",
      "Bring shins to touch bar, pull shoulder blades down, create full body tension.",
      "Drive floor away through mid-foot, extending hips and knees simultaneously."
    ],
    "mistake": "Rounding lumbar spine or hyperextending backward at the top.",
    "primaryMuscles": [
      "Erector Spinae",
      "Gluteus Maximus",
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Latissimus Dorsi",
      "Trapezius",
      "Forearms / Grip",
      "Core"
    ],
    "stabilizers": [
      "Quadriceps",
      "Rhomboids"
    ],
    "startPos": "Feet hip-width, bar touching shins, hips between shoulders and knees, back flat.",
    "breathing": "Deep belly breath and brace at floor; exhale through teeth at the top.",
    "safety": "Never let bar drift forward away from shins during the lift.",
    "alternatives": [
      "rdl",
      "leg",
      "gb",
      "bor"
    ]
  },
  "lat_pulldown_close": {
    "category": "Back",
    "name": "Close-Grip V-Bar Lat Pulldown",
    "img": "V-Bar_Pulldown",
    "target": "Lower Lats & Mid-Back",
    "metType": "compound",
    "equipment": "Cable Pulldown Machine, V-Handle",
    "muscles": [
      "Lower Latissimus Dorsi",
      "Biceps",
      "Rhomboids"
    ],
    "cues": "Attach V-grip, lean back ~10–15°, pull handle down to upper chest, squeeze lats hard at bottom.",
    "steps": [
      "Sit with thighs snug beneath roller pads, holding V-grip attachment.",
      "Tilt torso back 10–15° with chest high.",
      "Drive elbows down and back, pulling V-handle to touch upper sternum.",
      "Control the rise until arms are fully overhead and lats stretch."
    ],
    "mistake": "Rocking torso violently back and forth to sling the weight down.",
    "primaryMuscles": [
      "Latissimus Dorsi (Lower fibers)"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Brachialis",
      "Rhomboids"
    ],
    "stabilizers": [
      "Core",
      "Rear Deltoids"
    ],
    "startPos": "Seated tall under thigh pads with arms fully extended overhead holding V-bar.",
    "breathing": "Exhale pulling handle down; inhale releasing arms up with control.",
    "safety": "Keep movement smooth without aggressive swinging at the lumbar spine.",
    "alternatives": [
      "lp",
      "pullup",
      "rw",
      "straight_arm_pulldown"
    ]
  },
  "straight_arm_pulldown": {
    "category": "Back",
    "name": "Straight-Arm Cable Lat Pulldown",
    "img": "Straight-Arm_Pulldown",
    "target": "Lat Isolation & Teres Major",
    "metType": "isolation",
    "equipment": "Cable Tower, Straight or Rope Bar",
    "muscles": [
      "Latissimus Dorsi",
      "Teres Major",
      "Triceps Long Head"
    ],
    "cues": "Slight torso lean, arms nearly straight, sweep bar down in wide arc to thighs, squeeze lats.",
    "steps": [
      "Grasp bar with overhand grip at eye level and step back 2 feet.",
      "Hinge hips slightly with elbows locked in a soft 5° bend.",
      "Pull bar down in a wide circular arc until it touches upper thighs.",
      "Allow bar to rise slowly back to head level while resisting the pull."
    ],
    "mistake": "Bending elbows into a tricep pushdown instead of keeping arms extended.",
    "primaryMuscles": [
      "Latissimus Dorsi"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Triceps (Long Head)"
    ],
    "stabilizers": [
      "Rectus Abdominis",
      "Posterior Delts"
    ],
    "startPos": "Standing hinged 20° with arms extended forward holding high cable bar.",
    "breathing": "Inhale allowing bar to elevate; exhale sweeping bar down to thighs.",
    "safety": "Keep shoulders packed down away from ears.",
    "alternatives": [
      "lp",
      "lat_pulldown_close",
      "pullup"
    ]
  },
  "ohp": {
    "category": "Shoulders",
    "name": "Overhead Barbell Military Press",
    "img": "Standing_Military_Press",
    "target": "Anterior Delts & Shoulder Power",
    "metType": "heavy",
    "equipment": "Olympic Barbell, Squat / Press Rack",
    "muscles": [
      "Anterior Deltoids",
      "Lateral Delts",
      "Triceps",
      "Upper Chest"
    ],
    "cues": "Squeeze glutes and abs, forearms vertical, tuck chin, press bar straight up, push head through at top.",
    "steps": [
      "Rest bar on front delts with grip just outside shoulders.",
      "Brace glutes and core to create an unyielding pillar.",
      "Tilt head slightly back and press bar vertically close to face.",
      "Lock out overhead, bringing head forward so ears align with biceps."
    ],
    "mistake": "Excessive backward arching at the lower back (spine hyperextension).",
    "primaryMuscles": [
      "Anterior Deltoids",
      "Lateral Deltoids"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Upper Pectorals",
      "Trapezius"
    ],
    "stabilizers": [
      "Core",
      "Glutes",
      "Serratus Anterior"
    ],
    "startPos": "Standing with bar racked on collarbones, wrists stacked over vertical forearms.",
    "breathing": "Inhale and brace core; exhale pressing overhead to full extension.",
    "safety": "Keep glutes squeezed throughout to lock pelvis and shield lumbar spine.",
    "alternatives": [
      "sp",
      "arnold_press",
      "lr"
    ]
  },
  "arnold_press": {
    "category": "Shoulders",
    "name": "Arnold Dumbbell Press",
    "img": "Arnold_Dumbbell_Press",
    "target": "Full Deltoid Complex (Front, Side, Rear)",
    "metType": "compound",
    "equipment": "Adjustable Bench, Dumbbells",
    "muscles": [
      "Anterior Deltoid",
      "Lateral Deltoid",
      "Triceps"
    ],
    "cues": "Start with palms facing chest, rotate wrists outward as you press up, palms face forward at top.",
    "steps": [
      "Sit tall with back supported, holding dumbbells at chest with palms facing you.",
      "Begin pressing up while simultaneously rotating palms outward 180°.",
      "Finish at top lockout with palms facing forward.",
      "Reverse rotation smoothly as you descend back to chin height."
    ],
    "mistake": "Rushing the rotation or dropping dumbbells too quickly.",
    "primaryMuscles": [
      "Anterior Deltoids",
      "Lateral Deltoids"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Supraspinatus"
    ],
    "stabilizers": [
      "Rotator Cuff",
      "Upper Trapezius"
    ],
    "startPos": "Seated with dumbbells held in front of collarbones, palms facing inward.",
    "breathing": "Exhale during rotation and upward press; inhale descending and rotating back.",
    "safety": "Keep weights moderate to protect rotator cuff tendons during rotation.",
    "alternatives": [
      "sp",
      "ohp",
      "lr"
    ]
  },
  "facepull": {
    "category": "Shoulders",
    "name": "Cable Face Pull",
    "img": "Face_Pull",
    "target": "Rear Delts, Rotator Cuff & Posture",
    "metType": "isolation",
    "equipment": "Cable Tower, Rope Attachment",
    "muscles": [
      "Posterior Deltoids",
      "Infraspinatus",
      "Rhomboids",
      "Traps"
    ],
    "cues": "Set cable to eye level, pull rope to nose/eyes, separate hands wide, rotate thumbs backward.",
    "steps": [
      "Set cable pulley at upper chest/face height with rope attachment.",
      "Grasp rope with thumbs pointing backward toward you.",
      "Pull hands directly toward your bridge of nose while pulling rope ends apart.",
      "Hold peak external rotation for 1 second, feeling rear shoulders burn."
    ],
    "mistake": "Using too much weight and yanking torso backward or leading with elbows down.",
    "primaryMuscles": [
      "Posterior Deltoids",
      "Infraspinatus / Teres Minor"
    ],
    "secondaryMuscles": [
      "Rhomboids",
      "Middle Trapezius"
    ],
    "stabilizers": [
      "Biceps Brachii",
      "Core"
    ],
    "startPos": "Standing with staggered stance holding rope attachment with arms straight.",
    "breathing": "Exhale pulling rope to eye level; inhale returning forward.",
    "safety": "Essential posture exercise—prioritize high quality contractions over weight.",
    "alternatives": [
      "rf",
      "db_rear_delt_fly",
      "lr"
    ]
  },
  "cable_lateral_raise": {
    "category": "Shoulders",
    "name": "Single-Arm Cable Lateral Raise",
    "img": "Side_Lateral_Raise",
    "target": "Lateral Delts (Constant Tension)",
    "metType": "isolation",
    "equipment": "Cable Tower, D-Handle",
    "muscles": [
      "Lateral Deltoid"
    ],
    "cues": "Cable at lowest setting behind back or in front, lead with elbow, raise to shoulder height, 2s descent.",
    "steps": [
      "Set cable pulley to lowest position. Stand side-on holding handle in outside hand.",
      "Maintain a 10° soft bend in elbow throughout.",
      "Raise arm out to side until hand is level with shoulder.",
      "Lower under steady cable resistance back across body."
    ],
    "mistake": "Shrugging neck/traps to hoist the cable up.",
    "primaryMuscles": [
      "Lateral Deltoid (Side Shoulder)"
    ],
    "secondaryMuscles": [
      "Anterior Deltoid",
      "Supraspinatus"
    ],
    "stabilizers": [
      "Core",
      "Trapezius"
    ],
    "startPos": "Standing side-on to cable machine with hand resting across thigh holding handle.",
    "breathing": "Exhale raising arm out to side; inhale lowering across body.",
    "safety": "Do not elevate arm higher than shoulder level to avoid impingement.",
    "alternatives": [
      "lr",
      "sp",
      "arnold_press"
    ]
  },
  "upright_row": {
    "category": "Shoulders",
    "name": "Barbell / Cable Upright Row",
    "img": "Upright_Barbell_Row",
    "target": "Side Delts & Upper Traps",
    "metType": "compound",
    "equipment": "EZ Bar / Barbell / Cable",
    "muscles": [
      "Lateral Deltoid",
      "Upper Trapezius"
    ],
    "cues": "Grip shoulder width (never too narrow), pull elbows up and out, stop at mid-chest height.",
    "steps": [
      "Hold bar in front of thighs with shoulder-width overhand grip.",
      "Lead with elbows, pulling bar upward close to torso.",
      "Stop when elbows reach shoulder height and bar is at lower chest.",
      "Lower under control back to thighs."
    ],
    "mistake": "Using a super narrow grip and pulling bar to chin (causes shoulder impingement).",
    "primaryMuscles": [
      "Lateral Deltoids",
      "Upper Trapezius"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Biceps Brachii"
    ],
    "stabilizers": [
      "Core",
      "Brachialis"
    ],
    "startPos": "Standing tall with barbell resting against front of thighs.",
    "breathing": "Exhale pulling elbows upward; inhale lowering bar to thighs.",
    "safety": "Use shoulder-width grip and stop bar at chest height to protect subacromial space.",
    "alternatives": [
      "lr",
      "sh",
      "facepull"
    ]
  },
  "db_shrug": {
    "category": "Shoulders",
    "name": "Dumbbell Shrug",
    "img": "Dumbbell_Shrug",
    "target": "Upper Traps Isolation",
    "metType": "isolation",
    "equipment": "Dumbbells",
    "muscles": [
      "Upper Trapezius",
      "Levator Scapulae"
    ],
    "cues": "Arms straight at sides, shrug shoulders straight up toward ears, hold 2 seconds, lower slowly.",
    "steps": [
      "Stand holding heavy dumbbells at sides with neutral grip.",
      "Elevate shoulders straight up as high as possible toward ears.",
      "Squeeze traps hard at top for 2 full seconds.",
      "Lower shoulders down smoothly to a full stretch."
    ],
    "mistake": "Rolling shoulders in circles (wastes energy and stresses neck joints).",
    "primaryMuscles": [
      "Upper Trapezius"
    ],
    "secondaryMuscles": [
      "Levator Scapulae",
      "Forearms"
    ],
    "stabilizers": [
      "Rhomboids",
      "Core"
    ],
    "startPos": "Standing tall with dumbbells at sides, arms extended, posture upright.",
    "breathing": "Exhale elevating shoulders; inhale lowering under control.",
    "safety": "Only move straight up and down—never roll shoulders backward or forward.",
    "alternatives": [
      "sh",
      "upright_row"
    ]
  },
  "db_rear_delt_fly": {
    "category": "Shoulders",
    "name": "Dumbbell Bent-Over Rear Delt Fly",
    "img": "Rear_Delt_Dumbbell_Raise",
    "target": "Posterior Delts & Upper Back",
    "metType": "isolation",
    "equipment": "Dumbbells",
    "muscles": [
      "Posterior Deltoids",
      "Rhomboids"
    ],
    "cues": "Hinge forward until torso is parallel to floor, fly dumbbells out to sides like wings, lead with elbows.",
    "steps": [
      "Hinge at hips with flat back until torso is near parallel to floor.",
      "Hang dumbbells below chest with palms facing each other and soft elbows.",
      "Raise arms out to sides in wide arc until parallel to floor.",
      "Lower slowly back to center."
    ],
    "mistake": "Swinging torso up and down to build momentum.",
    "primaryMuscles": [
      "Posterior Deltoids"
    ],
    "secondaryMuscles": [
      "Rhomboids",
      "Middle Trapezius"
    ],
    "stabilizers": [
      "Erector Spinae",
      "Hamstrings"
    ],
    "startPos": "Hinged at hips with flat spine and arms hanging straight down.",
    "breathing": "Exhale raising dumbbells out to sides; inhale lowering.",
    "safety": "Keep weights light and focus on pure rear delt contraction.",
    "alternatives": [
      "rf",
      "facepull"
    ]
  },
  "preacher_curl": {
    "category": "Biceps",
    "name": "EZ-Bar Preacher Curl",
    "img": "Preacher_Curl",
    "target": "Biceps Short Head & Strict Isolation",
    "metType": "isolation",
    "equipment": "Preacher Bench, EZ-Curl Bar",
    "muscles": [
      "Biceps Brachii (Short Head)",
      "Brachialis"
    ],
    "cues": "Armpits snug over pad, triceps flush against cushion, curl up, stop short of perpendicular, don't hyperextend at bottom.",
    "steps": [
      "Sit with armpits locked over top of preacher bench, triceps resting flat on pad.",
      "Grasp inner grips of EZ bar with underhand grip.",
      "Curl bar upward smoothly until forearms are near vertical.",
      "Lower bar slowly until arms are nearly straight (keep slight elbow tension)."
    ],
    "mistake": "Snapping elbows straight at the bottom (high risk of bicep tendon strain).",
    "primaryMuscles": [
      "Biceps Brachii (Short Head)"
    ],
    "secondaryMuscles": [
      "Brachialis",
      "Brachioradialis"
    ],
    "stabilizers": [
      "Forearms"
    ],
    "startPos": "Seated with arms resting flat against angled preacher pad holding EZ-bar.",
    "breathing": "Exhale curling bar upward; inhale descending with 2-second tempo.",
    "safety": "Always stop descent just shy of complete elbow lockout.",
    "alternatives": [
      "bc",
      "dbc",
      "ic",
      "cable_curl"
    ]
  },
  "conc_curl": {
    "category": "Biceps",
    "name": "Dumbbell Concentration Curl",
    "img": "Concentration_Curls",
    "target": "Biceps Peak Isolation",
    "metType": "isolation",
    "equipment": "Flat Bench, Dumbbell",
    "muscles": [
      "Biceps Brachii",
      "Brachialis"
    ],
    "cues": "Sit on bench edge, brace tricep against inner thigh, curl dumbbell to face, squeeze peak for 1 second.",
    "steps": [
      "Sit on bench with legs spread, holding dumbbell with elbow braced against inside of thigh.",
      "Curl dumbbell up toward face while keeping upper arm pinned firmly to thigh.",
      "Hold peak bicep squeeze for 1 second at top.",
      "Lower under control to full arm extension."
    ],
    "mistake": "Swinging torso backward to cheat the weight up.",
    "primaryMuscles": [
      "Biceps Brachii"
    ],
    "secondaryMuscles": [
      "Brachialis",
      "Brachioradialis"
    ],
    "stabilizers": [
      "Forearms"
    ],
    "startPos": "Seated with elbow locked against inner thigh and arm hanging straight down.",
    "breathing": "Exhale curling to chin; inhale lowering with control.",
    "safety": "Keep upper body motionless to isolate bicep completely.",
    "alternatives": [
      "dbc",
      "bc",
      "preacher_curl"
    ]
  },
  "cable_curl": {
    "category": "Biceps",
    "name": "Standing Cable Biceps Curl",
    "img": "Cable_Curl",
    "target": "Biceps (Constant Tension)",
    "metType": "isolation",
    "equipment": "Low Cable Tower, Straight or EZ Bar",
    "muscles": [
      "Biceps Brachii",
      "Forearms"
    ],
    "cues": "Elbows pinned to sides, chest up, curl cable bar to shoulders, don't let elbows drift forward.",
    "steps": [
      "Attach bar to lowest cable pulley. Stand facing machine with elbows at sides.",
      "Curl bar upward in a smooth arc toward collarbones.",
      "Squeeze biceps at top peak contraction.",
      "Lower bar slowly under constant cable tension."
    ],
    "mistake": "Letting elbows flare forward or swaying back.",
    "primaryMuscles": [
      "Biceps Brachii"
    ],
    "secondaryMuscles": [
      "Brachialis",
      "Brachioradialis"
    ],
    "stabilizers": [
      "Core",
      "Forearms"
    ],
    "startPos": "Standing tall holding cable bar with palms up and elbows tucked to ribcage.",
    "breathing": "Exhale curling upward; inhale lowering under control.",
    "safety": "Continuous tension makes light-to-moderate weight highly effective.",
    "alternatives": [
      "bc",
      "dbc",
      "preacher_curl"
    ]
  },
  "spider_curl": {
    "category": "Biceps",
    "name": "Incline Dumbbell Spider Curl",
    "img": "Spider_Curl",
    "target": "Biceps Peak Contraction",
    "metType": "isolation",
    "equipment": "Incline Bench (45°), Dumbbells",
    "muscles": [
      "Biceps Brachii (Short Head)"
    ],
    "cues": "Chest against 45° incline pad, arms hanging straight down, curl dumbbells upward without swinging.",
    "steps": [
      "Lie chest-down on 45° incline bench with arms hanging vertically.",
      "Hold dumbbells with palms facing up.",
      "Curl weights upward toward forehead, keeping upper arms perpendicular to floor.",
      "Squeeze peak at top and lower smoothly."
    ],
    "mistake": "Flaring elbows backward instead of keeping them pointed toward floor.",
    "primaryMuscles": [
      "Biceps Brachii (Short Head)"
    ],
    "secondaryMuscles": [
      "Brachialis"
    ],
    "stabilizers": [
      "Forearms"
    ],
    "startPos": "Prone on incline bench with arms hanging completely vertical.",
    "breathing": "Exhale curling up; inhale lowering slowly.",
    "safety": "Eliminates all momentum and lower back swinging.",
    "alternatives": [
      "bc",
      "preacher_curl",
      "dbc"
    ]
  },
  "skullcrushers": {
    "category": "Triceps",
    "name": "Lying EZ-Bar Skull Crushers",
    "img": "Lying_Triceps_Extension",
    "target": "Triceps Long & Medial Heads",
    "metType": "compound",
    "equipment": "Flat Bench, EZ-Curl Bar",
    "muscles": [
      "Triceps Brachii (Long & Medial Heads)"
    ],
    "cues": "Upper arms angled slightly back, bend at elbows to lower bar to crown of head, extend elbows to press up.",
    "steps": [
      "Lie on flat bench holding EZ bar with arms extended, angled slightly back toward head.",
      "Keep upper arms stationary; bend only at elbows to lower bar toward forehead or crown.",
      "Lower until elbows reach 90° or deeper stretch.",
      "Extend forearms powerfully back to starting angle."
    ],
    "mistake": "Flaring elbows wide or moving upper arms forward and back like a pullover.",
    "primaryMuscles": [
      "Triceps Brachii (Long & Medial Heads)"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids"
    ],
    "stabilizers": [
      "Core",
      "Rotator Cuff"
    ],
    "startPos": "Flat on bench with arms angled 10° back behind vertical.",
    "breathing": "Inhale as bar lowers to forehead; exhale driving bar back up.",
    "safety": "Keep elbows tucked inward throughout rep to avoid elbow tendonitis.",
    "alternatives": [
      "oe",
      "pd",
      "re",
      "close_grip_bench"
    ]
  },
  "dips_bench": {
    "category": "Triceps",
    "name": "Bench Triceps Dips",
    "img": "Bench_Dips",
    "target": "Triceps Brachii",
    "metType": "compound",
    "equipment": "Gym Bench",
    "muscles": [
      "Triceps Brachii",
      "Anterior Deltoids"
    ],
    "cues": "Hands on bench edge close to hips, back slides close to bench, lower to 90° elbow bend, press up.",
    "steps": [
      "Sit on edge of bench, place palms flat next to hips with fingers over edge.",
      "Slide hips forward off bench with legs extended straight or bent.",
      "Lower hips toward floor by bending elbows to 90°.",
      "Press through palms to lockout."
    ],
    "mistake": "Drifting hips too far forward away from bench (hyper-stresses front shoulder).",
    "primaryMuscles": [
      "Triceps Brachii"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Pectorals"
    ],
    "stabilizers": [
      "Core"
    ],
    "startPos": "Hands on bench edge, hips suspended in air, back brushing edge of bench.",
    "breathing": "Inhale down; exhale pressing arms straight.",
    "safety": "Keep back within 2 inches of bench edge to keep shoulder in safe alignment.",
    "alternatives": [
      "pd",
      "skullcrushers",
      "re"
    ]
  },
  "close_grip_bench": {
    "category": "Triceps",
    "name": "Close-Grip Barbell Bench Press",
    "img": "Close-Grip_Barbell_Bench_Press",
    "target": "Triceps Power & Overload",
    "metType": "heavy",
    "equipment": "Flat Bench, Olympic Barbell",
    "muscles": [
      "Triceps Brachii",
      "Inner Chest",
      "Front Delts"
    ],
    "cues": "Grip shoulder width (hands ~14 inches apart), tuck elbows tight to ribs, lower to sternum, press up.",
    "steps": [
      "Lie on bench, grip bar directly in line with shoulders (never too close together).",
      "Unrack and stabilize bar over chest.",
      "Lower bar to lower sternum while keeping elbows tucked close to ribcage.",
      "Drive bar upward using pure triceps horsepower."
    ],
    "mistake": "Placing hands only 4 inches apart (wrenches wrists and elbows).",
    "primaryMuscles": [
      "Triceps Brachii (All 3 Heads)"
    ],
    "secondaryMuscles": [
      "Pectoralis Major",
      "Anterior Deltoids"
    ],
    "stabilizers": [
      "Rotator Cuff",
      "Lats"
    ],
    "startPos": "Flat on bench with shoulder-width grip and tucked elbows.",
    "breathing": "Inhale down to ribs; exhale pressing bar upward.",
    "safety": "Shoulder-width grip is optimal for maximum tricep activation and wrist health.",
    "alternatives": [
      "pd",
      "skullcrushers",
      "bb"
    ]
  },
  "tricep_kickback": {
    "category": "Triceps",
    "name": "Dumbbell Triceps Kickback",
    "img": "Triceps_Kickback",
    "target": "Triceps Peak Contraction",
    "metType": "isolation",
    "equipment": "Flat Bench, Dumbbell",
    "muscles": [
      "Triceps Brachii (Lateral Head)"
    ],
    "cues": "Upper arm parallel to floor, pin elbow to side, extend forearm straight back, lock out for 1 second.",
    "steps": [
      "Place one knee and hand on flat bench, holding dumbbell in free hand.",
      "Elevate upper arm until it is parallel to your torso and lock it in place.",
      "Extend forearm backward until entire arm is straight.",
      "Hold peak contraction for 1 second, then lower forearm forward to 90°."
    ],
    "mistake": "Dropping upper arm down or swinging dumbbell like a pendulum.",
    "primaryMuscles": [
      "Triceps Brachii (Lateral & Medial Heads)"
    ],
    "secondaryMuscles": [
      "Posterior Deltoid"
    ],
    "stabilizers": [
      "Core"
    ],
    "startPos": "Hinged at hips with upper arm pinned parallel to torso and elbow bent at 90°.",
    "breathing": "Exhale extending arm backward; inhale returning to 90°.",
    "safety": "Keep weights moderate to ensure full lockout at top.",
    "alternatives": [
      "re",
      "pd",
      "oe"
    ]
  },
  "barbell_squat": {
    "category": "Legs",
    "name": "Barbell Back Squat",
    "img": "Barbell_Squat",
    "target": "Quads, Glutes & Core Strength",
    "metType": "heavy",
    "equipment": "Squat Rack, Olympic Barbell",
    "muscles": [
      "Quadriceps",
      "Gluteus Maximus",
      "Adductors",
      "Erector Spinae"
    ],
    "cues": "Bar across upper traps, chest proud, brace abs, sit down between hips to parallel, drive up through whole foot.",
    "steps": [
      "Step under bar, rest it across upper traps (high bar), unrack and take 2 steps back.",
      "Set feet slightly outside shoulder width with toes angled out 15–30°.",
      "Take deep belly breath, brace core, and descend by breaking at hips and knees simultaneously.",
      "Squat until hip crease is at or below top of knees, then drive up through mid-foot."
    ],
    "mistake": "Knees caving inward (valgus collapse) or heels lifting off the floor.",
    "primaryMuscles": [
      "Quadriceps",
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Adductor Magnus",
      "Soleus"
    ],
    "stabilizers": [
      "Rectus Abdominis",
      "Erector Spinae",
      "Obliques"
    ],
    "startPos": "Bar resting on traps, feet shoulder-width, chest up, core braced.",
    "breathing": "Inhale deeply into belly and brace before descent; exhale as you pass sticking point on way up.",
    "safety": "Never let knees cave inward—push knees out tracking in line with toes.",
    "alternatives": [
      "leg",
      "front_squat",
      "hack_squat",
      "bulgarian_split"
    ]
  },
  "front_squat": {
    "category": "Legs",
    "name": "Barbell Front Squat",
    "img": "Front_Barbell_Squat",
    "target": "Quad Focus & Upright Core",
    "metType": "heavy",
    "equipment": "Squat Rack, Olympic Barbell",
    "muscles": [
      "Quadriceps",
      "Core",
      "Glutes"
    ],
    "cues": "Clean grip or crossed arms, elbows high, upright chest, sit straight down, drive knees forward over toes.",
    "steps": [
      "Rest bar across anterior deltoids and clavicles with elbows pointing straight forward.",
      "Keep chest proudly vertical and feet shoulder-width apart.",
      "Descend straight down with knees tracking over toes.",
      "Drive back to standing without letting elbows drop."
    ],
    "mistake": "Letting elbows drop down (dumps the bar forward).",
    "primaryMuscles": [
      "Quadriceps (Rectus Femoris & Vastus Lateralis)"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Thoracic Spine Extensors"
    ],
    "stabilizers": [
      "Rectus Abdominis",
      "Calves"
    ],
    "startPos": "Bar resting on front shoulders with elbows pointing high horizontally.",
    "breathing": "Deep breath and tight brace before descending; exhale ascending.",
    "safety": "Demands high ankle and wrist mobility—cross-arm grip is a great alternative.",
    "alternatives": [
      "barbell_squat",
      "hack_squat",
      "leg",
      "le"
    ]
  },
  "hack_squat": {
    "category": "Legs",
    "name": "Machine Hack Squat",
    "img": "Hack_Squat",
    "target": "Quad Hypertrophy & Deep Range",
    "metType": "compound",
    "equipment": "Hack Squat Machine",
    "muscles": [
      "Quadriceps",
      "Glutes"
    ],
    "cues": "Back flat against pad, feet shoulder width on platform, lower smoothly to 90°+, drive through mid-foot.",
    "steps": [
      "Step onto platform with shoulders against pads and back flat against cushion.",
      "Place feet shoulder width near middle of platform.",
      "Release safety handles and descend under control into a deep squat.",
      "Drive through platform to full extension without slamming knees."
    ],
    "mistake": "Letting lower back peel away from the pad at bottom of the movement.",
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus"
    ],
    "stabilizers": [
      "Calves"
    ],
    "startPos": "Locked into hack machine with shoulders and back supported by pads.",
    "breathing": "Inhale descending; exhale driving platform away.",
    "safety": "Keep lumbar spine firmly pressed into backrest throughout.",
    "alternatives": [
      "leg",
      "barbell_squat",
      "le"
    ]
  },
  "bulgarian_split": {
    "category": "Legs",
    "name": "Dumbbell Bulgarian Split Squat",
    "img": "Bulgarian_Split_Squat",
    "target": "Unilateral Quads & Glute Maximus",
    "metType": "compound",
    "equipment": "Bench, Dumbbells",
    "muscles": [
      "Quadriceps",
      "Gluteus Maximus",
      "Hamstrings"
    ],
    "cues": "Rear foot on bench laces-down, front foot out far, lower rear knee toward floor, push through front heel.",
    "steps": [
      "Stand 2–3 feet in front of bench. Place top of one foot laces-down on bench.",
      "Hold dumbbells at sides with upright or slight forward torso lean.",
      "Lower back knee smoothly toward floor until front thigh is parallel to ground.",
      "Drive through front heel and mid-foot to stand back up."
    ],
    "mistake": "Front foot placed too close to bench (crams knee and prevents depth).",
    "primaryMuscles": [
      "Quadriceps",
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Adductors"
    ],
    "stabilizers": [
      "Gluteus Medius",
      "Core",
      "Ankle Stabilizers"
    ],
    "startPos": "Split stance with one rear foot elevated on bench holding dumbbells.",
    "breathing": "Inhale down to floor; exhale pushing front leg straight.",
    "safety": "Start with bodyweight to master balance before adding heavy dumbbells.",
    "alternatives": [
      "leg",
      "barbell_squat",
      "walking_lunge"
    ]
  },
  "rdl": {
    "category": "Legs",
    "name": "Romanian Deadlift (Barbell / Dumbbell)",
    "img": "Romanian_Deadlift",
    "target": "Hamstrings & Glute Stretch",
    "metType": "compound",
    "equipment": "Barbell or Pair of Dumbbells",
    "muscles": [
      "Hamstrings",
      "Gluteus Maximus",
      "Erector Spinae"
    ],
    "cues": "Slight knee bend, push hips far back to wall, bar brushes thighs, feel deep hamstring stretch, snap hips forward.",
    "steps": [
      "Stand tall holding barbell with overhand grip at thighs.",
      "Unlock knees slightly (15°) and keep them locked at that same angle.",
      "Hinge hips backward as far as possible, sliding bar down thighs and shins.",
      "When hamstrings reach maximum stretch, squeeze glutes to bring hips forward to standing."
    ],
    "mistake": "Bending knees into a regular squat or rounding the lower back.",
    "primaryMuscles": [
      "Hamstrings (Biceps Femoris, Semitendinosus)"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Erector Spinae",
      "Adductor Magnus"
    ],
    "stabilizers": [
      "Lats",
      "Upper Traps",
      "Core"
    ],
    "startPos": "Standing upright with bar against thighs, shoulders back, core braced.",
    "breathing": "Inhale hinging hips backward; exhale contracting glutes back to upright.",
    "safety": "Keep bar in contact with legs throughout to minimize spinal shear.",
    "alternatives": [
      "lc",
      "seated_leg_curl",
      "deadlift",
      "gb"
    ]
  },
  "hip_thrust": {
    "category": "Legs",
    "name": "Barbell Hip Thrust",
    "img": "Barbell_Hip_Thrust",
    "target": "Glute Maximus Overload",
    "metType": "compound",
    "equipment": "Bench, Barbell with Pad",
    "muscles": [
      "Gluteus Maximus",
      "Hamstrings"
    ],
    "cues": "Shoulder blades against bench, barbell across hips with pad, feet flat, drive hips up to ceiling, hold 1s.",
    "steps": [
      "Sit on floor with upper back against bench edge and barbell cushioned over hips.",
      "Set feet shoulder-width apart with shins vertical at top of movement.",
      "Drive through heels to bridge hips up until thighs and torso align horizontally.",
      "Squeeze glutes hard at top for 1 full second, then lower under control."
    ],
    "mistake": "Arching lower back instead of pivoting at hips with chin tucked.",
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Adductor Magnus"
    ],
    "stabilizers": [
      "Core",
      "Erector Spinae"
    ],
    "startPos": "Upper back on bench, hips on floor with bar over hips, knees bent 90°.",
    "breathing": "Inhale down; exhale bridging hips upward.",
    "safety": "Always use a barbell foam pad or folded mat over hips.",
    "alternatives": [
      "gb",
      "rdl",
      "barbell_squat"
    ]
  },
  "seated_leg_curl": {
    "category": "Legs",
    "name": "Seated Leg Curl Machine",
    "img": "Seated_Leg_Curl",
    "target": "Hamstring Isolation (High Hip Flexion)",
    "metType": "isolation",
    "equipment": "Seated Leg Curl Machine",
    "muscles": [
      "Hamstrings"
    ],
    "cues": "Thigh pad snug above knees, back flat, curl heels down under seat, hold 1 second, resist return.",
    "steps": [
      "Adjust backrest so knees align with machine pivot point.",
      "Lock top thigh pad firmly across lower quadriceps.",
      "Curl heels downward and backward toward seat underside.",
      "Hold peak contraction for 1 second, then control return to straight legs."
    ],
    "mistake": "Letting thighs lift off the seat during the curl.",
    "primaryMuscles": [
      "Hamstrings (Biceps Femoris, Semimembranosus)"
    ],
    "secondaryMuscles": [
      "Gastrocnemius"
    ],
    "stabilizers": [
      "Core"
    ],
    "startPos": "Seated with legs extended over padded roller and thigh pad secured.",
    "breathing": "Exhale curling heels under seat; inhale returning legs forward.",
    "safety": "Seated position places hamstrings in optimal stretch for muscle growth.",
    "alternatives": [
      "lc",
      "rdl"
    ]
  },
  "seated_calf": {
    "category": "Legs",
    "name": "Seated Calf Raise Machine",
    "img": "Seated_Calf_Raise",
    "target": "Soleus (Lower Calf)",
    "metType": "isolation",
    "equipment": "Seated Calf Raise Machine",
    "muscles": [
      "Soleus",
      "Gastrocnemius"
    ],
    "cues": "Balls of feet on block, pads on lower thighs, drop heels deep for 2s stretch, push up onto big toes.",
    "steps": [
      "Sit on machine and place balls of feet on block with heels hanging free.",
      "Secure thigh pad over lower quads and release safety bar.",
      "Lower heels fully for a deep 2-second calf stretch.",
      "Drive balls of feet down to raise heels as high as possible."
    ],
    "mistake": "Bouncing weights up and down fast using Achilles tendon spring.",
    "primaryMuscles": [
      "Soleus"
    ],
    "secondaryMuscles": [
      "Gastrocnemius"
    ],
    "stabilizers": [
      "Tibialis Posterior"
    ],
    "startPos": "Seated with thigh pad clamped and balls of feet on edge of platform.",
    "breathing": "Inhale lowering heels to full stretch; exhale pushing onto tiptoes.",
    "safety": "Paused reps at the bottom stretch stimulate calf muscle rather than elastic tendon.",
    "alternatives": [
      "cr"
    ]
  },
  "walking_lunge": {
    "category": "Legs",
    "name": "Dumbbell Walking Lunges",
    "img": "Dumbbell_Lunges",
    "target": "Quads, Glutes & Dynamic Balance",
    "metType": "compound",
    "equipment": "Dumbbells",
    "muscles": [
      "Quadriceps",
      "Gluteus Maximus",
      "Hamstrings",
      "Calves"
    ],
    "cues": "Step forward, drop back knee straight down, push through front heel into the next stride.",
    "steps": [
      "Stand holding dumbbells at sides with tall posture.",
      "Take a comfortable stride forward and plant front foot flat.",
      "Lower hips until back knee taps floor lightly with front shin vertical.",
      "Drive through front heel to step forward directly into next lunge stride."
    ],
    "mistake": "Taking strides that are too short (knees shoot way past toes with heel lifting).",
    "primaryMuscles": [
      "Quadriceps",
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Calves",
      "Adductors"
    ],
    "stabilizers": [
      "Core",
      "Ankle & Hip Stabilizers"
    ],
    "startPos": "Standing with dumbbells held at sides, ready to step forward.",
    "breathing": "Inhale descending into lunge; exhale stepping through to next stride.",
    "safety": "Keep torso upright to avoid excessive forward lean.",
    "alternatives": [
      "bulgarian_split",
      "barbell_squat",
      "leg"
    ]
  },
  "plank": {
    "category": "Abs",
    "name": "Forearm Core Plank",
    "img": "Plank",
    "target": "Deep Core & Isometric Stability",
    "metType": "isolation",
    "equipment": "Exercise Mat",
    "muscles": [
      "Transverse Abdominis",
      "Rectus Abdominis",
      "Glutes"
    ],
    "cues": "Forearms on ground, elbows under shoulders, squeeze glutes, pull belly button into spine, don't sag.",
    "steps": [
      "Place forearms on floor with elbows directly under shoulders.",
      "Extend legs back on toes, creating straight line from head to heels.",
      "Squeeze glutes, quads, and abdominal wall with maximum tension.",
      "Hold rigid position while breathing smoothly through nose."
    ],
    "mistake": "Allowing hips to sag down or piking hips high in the air.",
    "primaryMuscles": [
      "Transverse Abdominis",
      "Rectus Abdominis"
    ],
    "secondaryMuscles": [
      "Internal/External Obliques",
      "Glutes"
    ],
    "stabilizers": [
      "Serratus Anterior",
      "Shoulders"
    ],
    "startPos": "Prone position supported on elbows and toes with flat back.",
    "breathing": "Breathe rhythmically in through nose and out through mouth without relaxing core.",
    "safety": "Stop immediately if you feel pain in the lumbar spine.",
    "alternatives": [
      "cc",
      "kr",
      "hanging_leg_raise",
      "ab_wheel"
    ]
  },
  "hanging_leg_raise": {
    "category": "Abs",
    "name": "Hanging Leg Raise (Pull-Up Bar)",
    "img": "Hanging_Leg_Raise",
    "target": "Lower Abs & Hip Flexors",
    "metType": "isolation",
    "equipment": "Pull-Up Bar",
    "muscles": [
      "Lower Rectus Abdominis",
      "Hip Flexors",
      "Obliques"
    ],
    "cues": "Hang from bar, tilt pelvis up first, raise legs/knees to 90°+, lower slowly without swinging like a swing.",
    "steps": [
      "Hang from pull-up bar with overhand grip and dead body posture.",
      "Posteriorly tilt pelvis to engage lower abdominals.",
      "Raise straight legs or knees up until thighs are parallel to floor or higher.",
      "Lower legs slowly back to dead hang without swinging."
    ],
    "mistake": "Using momentum and swinging hips back and forth on every rep.",
    "primaryMuscles": [
      "Lower Rectus Abdominis"
    ],
    "secondaryMuscles": [
      "Iliopsoas (Hip Flexors)",
      "Obliques"
    ],
    "stabilizers": [
      "Forearms / Grip",
      "Lats"
    ],
    "startPos": "Full hang from pull-up bar with shoulders depressed and legs together.",
    "breathing": "Exhale as legs raise up; inhale lowering down with control.",
    "safety": "Begin with bent-knee raises to protect lower back before progressing to straight legs.",
    "alternatives": [
      "kr",
      "cc",
      "ab_wheel"
    ]
  },
  "ab_wheel": {
    "category": "Abs",
    "name": "Ab Wheel Rollout",
    "img": "Ab_Roller",
    "target": "Core Anti-Extension Power",
    "metType": "compound",
    "equipment": "Ab Wheel / Barbell with Small Plates",
    "muscles": [
      "Rectus Abdominis",
      "Transverse Abdominis",
      "Lats"
    ],
    "cues": "Kneel on pad, round upper back slightly, roll wheel forward under control, pull back with abs not hips.",
    "steps": [
      "Kneel on comfortable mat holding handles of ab wheel directly beneath shoulders.",
      "Round upper back slightly and tuck pelvis to pre-engage abdominals.",
      "Roll wheel slowly forward as far as you can maintain a neutral, flat spine.",
      "Pull wheel back toward knees by aggressively contracting abs."
    ],
    "mistake": "Letting lower back sag into an arch as the wheel rolls forward.",
    "primaryMuscles": [
      "Rectus Abdominis",
      "Transverse Abdominis"
    ],
    "secondaryMuscles": [
      "Latissimus Dorsi",
      "Hip Flexors"
    ],
    "stabilizers": [
      "Shoulders",
      "Pectorals"
    ],
    "startPos": "Kneeling on mat with hands gripping wheel under chest.",
    "breathing": "Inhale rolling forward; exhale violently contracting abs to roll back.",
    "safety": "Only roll out as far as your core can hold without any lower back sag.",
    "alternatives": [
      "cc",
      "hanging_leg_raise",
      "plank"
    ]
  },
  "russian_twist": {
    "category": "Abs",
    "name": "Weighted Russian Twist",
    "img": "Russian_Twist",
    "target": "Obliques & Rotational Core",
    "metType": "isolation",
    "equipment": "Medicine Ball / Dumbbell / Plate",
    "muscles": [
      "Internal & External Obliques",
      "Rectus Abdominis"
    ],
    "cues": "Sit on floor, lean torso back 45°, elevate heels, rotate weight side to side under control.",
    "steps": [
      "Sit on floor with knees bent and feet elevated 3 inches off ground.",
      "Lean torso back 45° to engage abdominal wall.",
      "Hold weight at chest and rotate torso smoothly from right side to left side.",
      "Touch weight lightly beside hip on each rep."
    ],
    "mistake": "Just waving hands side to side without rotating the actual shoulders and ribcage.",
    "primaryMuscles": [
      "Internal & External Obliques"
    ],
    "secondaryMuscles": [
      "Rectus Abdominis",
      "Hip Flexors"
    ],
    "stabilizers": [
      "Erector Spinae"
    ],
    "startPos": "Seated V-sit with knees bent, feet elevated, holding weight at center chest.",
    "breathing": "Breathe rhythmically with each side-to-side twist.",
    "safety": "Keep spine elongated rather than hunched over to protect intervertebral discs.",
    "alternatives": [
      "sb",
      "cc",
      "plank"
    ]
  }
};

const ABS_ROUTINE = ["Abs", [
  ["cc", "2–3", "10–15"],
  ["sb", "2–3", "10–15 each side"],
  ["kr", "2–3", "8–15"]
]];

// Default hardcoded programs (read-only reference and fallback source)
const DEFAULT_WISAKOL_DAYS = [
  {
    d: "Mon",
    t: "Chest + Biceps",
    c: "red",
    g: [
      ["Chest", [
        ["inc", 3, "6–10", "Set bench incline to notch 4 (~30°)."],
        ["bb", 3, "6–10"],
        ["fly", 3, "10–15", "Perform 3rd if machine is available."],
        ["dbi", 3, "8–12"]
      ]],
      ["Biceps", [
        ["ic", 3, "10–15", "Perform 1st. Set bench incline to notch 4."],
        ["dbc", 3, "8–12", "Perform 2nd. Rotate wrists up at top for full supination."],
        ["ham", 3, "10–15", "Perform last."]
      ]],
      ABS_ROUTINE
    ]
  },
  {
    d: "Tue",
    t: "Back + Shoulders",
    c: "blue",
    g: [
      ["Back", [
        ["lp", 3, "8–12"],
        ["rc", 3, "8–12"],
        ["rw", 3, "8–12"],
        ["sh", 3, "10–15"]
      ]],
      ["Shoulders", [
        ["sp", 3, "8–12", "Perform 2nd to last. Use an upright 90° bench."],
        ["lr", 3, "12–20"],
        ["rf", 3, "12–20", "Perform 3rd. Reverse position facing pad."]
      ]],
      ABS_ROUTINE
    ]
  },
  {
    d: "Wed",
    t: "Legs + Triceps",
    c: "green",
    g: [
      ["Legs", [
        ["leg", 3, "8–12", "Primary squat alternative. Target ~100 kg with controlled depth."],
        ["le", 3, "10–15"],
        ["lc", 3, "10–15"],
        ["cr", 3, "12–20"]
      ]],
      ["Triceps", [
        ["pd", 3, "8–12"],
        ["re", 3, "10–15"],
        ["oe", 3, "10–15"]
      ]],
      ABS_ROUTINE
    ]
  },
  {
    d: "Thu",
    t: "Rest Day",
    c: "yellow",
    g: []
  },
  {
    d: "Fri",
    t: "Chest + Shoulders + Triceps (Hypertrophy)",
    c: "red",
    g: [
      ["Chest", [
        ["inc", "2–3", "8–12", "Set bench incline to notch 4."],
        ["dbb", "2–3", "8–12"],
        ["fly", 2, "10–15"],
        ["dbi", 2, "8–12"]
      ]],
      ["Shoulders", [
        ["sp", 2, "8–12", "Use upright 90° bench."],
        ["lr", 2, "12–20"],
        ["rf", 2, "12–20"]
      ]],
      ["Triceps", [
        ["pd", 2, "10–15"],
        ["oe", 2, "10–15"]
      ]],
      ABS_ROUTINE
    ]
  },
  {
    d: "Sat",
    t: "Back + Biceps (Hypertrophy)",
    c: "blue",
    g: [
      ["Back", [
        ["lp", "2–3", "8–12"],
        ["rc", "2–3", "8–12"],
        ["rw", 2, "8–12"],
        ["sh", 3, "10–15"]
      ]],
      ["Biceps", [
        ["dbc", 2, "8–12"],
        ["ham", 2, "10–15"]
      ]],
      ABS_ROUTINE
    ]
  },
  {
    d: "Sun",
    t: "Rest Day",
    c: "yellow",
    g: []
  }
];

const DEFAULT_MONIK_DAYS = [
  {
    d: "Mon", t: "Legs + Glutes", c: "red", g: [
      ["Lower Body", [["leg", 3, "8–12"], ["le", 2, "10–15"], ["lc", 3, "10–15"], ["cr", 2, "12–20"], ["gb", 2, "12–15"]]]
    ]
  },
  {
    d: "Tue", t: "Back + Shoulders", c: "blue", g: [
      ["Back", [["lp", 3, "8–12"], ["srm", 3, "8–12"]]],
      ["Shoulders", [["sp", 2, "8–12"], ["lr", 2, "12–20"], ["rf", 2, "12–20"]]]
    ]
  },
  {
    d: "Wed", t: "Chest + Arms + Abs", c: "purple", g: [
      ["Chest", [["dbb", 3, "8–12"], ["fly", 2, "10–15"]]],
      ["Arms", [["dbc", 2, "10–15"], ["pd", 2, "10–15"]]],
      ["Abs", [["cc", 2, "10–15"], ["kr", 2, "8–15"]]]
    ]
  },
  { d: "Thu", t: "Rest Day", c: "mute", g: [], msg: "No weight training. Optional easy walking. Prioritize sleep and recovery." },
  {
    d: "Fri", t: "Glutes + Legs + Light Upper Body", c: "green", g: [
      ["Lower Body", [["gb", 3, "12–15"], ["leg", 2, "10–12"], ["lc", 2, "10–15"]]],
      ["Light Upper Body", [["lp", 2, "10–12"], ["lr", 2, "12–20"]]],
      ["Abs", [["sb", 2, "10–15 per side"]]]
    ]
  },
  { d: "Sat", t: "Active Recovery", c: "yellow", g: [], msg: "Optional 20–30 minutes of comfortable walking. No need for another hard gym session." },
  { d: "Sun", t: "Full Rest", c: "mute", g: [], msg: "Rest and recover before Monday." }
];

// ==========================================================================
// STORAGE & PROFILE ISOLATION UTILITIES
// ==========================================================================
function resolveKey(key) {
  if (key === "gym-theme") return key;
  if (currentProfile === "monik") return "monik-" + key;
  return key;
}

const store = {
  get(key) {
    try {
      const item = localStorage.getItem(resolveKey(key));
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.warn("Storage get failed for", key, e);
      return null;
    }
  },
  set(key, val) {
    try {
      localStorage.setItem(resolveKey(key), JSON.stringify(val));
    } catch (e) {
      console.warn("Storage set failed for", key, e);
    }
  },
  remove(key) {
    try {
      localStorage.removeItem(resolveKey(key));
    } catch (e) { }
  }
};

function selectProfile(p) {
  sessionStorage.setItem("gym-profile", p);
  location.reload();
}

function switchProfile() {
  sessionStorage.removeItem("gym-profile");
  location.reload();
}

// ==========================================================================
// EDITABLE PROGRAM MANAGER (PROFILE ISOLATED)
// ==========================================================================
function getDefaultProgram(profile) {
  const p = profile || currentProfile;
  const source = p === "monik" ? DEFAULT_MONIK_DAYS : DEFAULT_WISAKOL_DAYS;
  return JSON.parse(JSON.stringify(source));
}

function getProgram() {
  const custom = store.get("gym-program");
  if (custom && Array.isArray(custom) && custom.length === 7) {
    if (currentProfile !== "monik" && custom[5] && custom[5].g && custom[5].g[0]) {
      const backExs = custom[5].g[0][1] || [];
      if (!backExs.some(item => item[0] === "sh")) {
        backExs.push(["sh", 3, "10–15"]);
        store.set("gym-program", custom);
      }
    }
    return custom;
  }
  return getDefaultProgram();
}

function saveProgram(programDays) {
  store.set("gym-program", programDays);
}

function resetProgram() {
  const def = getDefaultProgram();
  saveProgram(def);
  return def;
}

function resetDayToDefault(dayIndex) {
  const def = getDefaultProgram();
  const current = getProgram();
  if (def[dayIndex] && current[dayIndex]) {
    current[dayIndex] = JSON.parse(JSON.stringify(def[dayIndex]));
    saveProgram(current);
  }
}

function toggleRestDay(dayIndex) {
  const current = getProgram();
  const day = current[dayIndex];
  if (!day) return;

  const isCurrentlyRest = !day.g || day.g.length === 0;

  if (isCurrentlyRest) {
    // Turn into workout day
    if (day.savedConfig && day.savedConfig.g && day.savedConfig.g.length > 0) {
      day.t = day.savedConfig.t || "Custom Workout";
      day.c = day.savedConfig.c || "blue";
      day.g = day.savedConfig.g;
    } else {
      const def = getDefaultProgram()[dayIndex];
      if (def && def.g && def.g.length > 0) {
        day.t = def.t;
        day.c = def.c;
        day.g = JSON.parse(JSON.stringify(def.g));
      } else {
        day.t = "Custom Workout";
        day.c = "blue";
        day.g = [["Main Exercises", []]];
      }
    }
  } else {
    // Turn into rest day: preserve current configuration in savedConfig!
    day.savedConfig = {
      t: day.t,
      c: day.c,
      g: JSON.parse(JSON.stringify(day.g))
    };
    day.t = "Rest Day";
    day.c = "mute";
    day.g = [];
    day.msg = "Active recovery. No weight training scheduled today. Prioritize sleep, hydration, and nutrition.";
  }

  saveProgram(current);
}

function updateDayTitle(dayIndex, newTitle) {
  const current = getProgram();
  if (current[dayIndex] && newTitle.trim()) {
    current[dayIndex].t = newTitle.trim();
    saveProgram(current);
  }
}

function getDayWorkoutInfo(dayIdx, daysList) {
  const allDays = daysList || getProgram();
  const d = allDays[dayIdx];
  if (!d) return null;

  const dayNamesFull = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const dayFullName = dayNamesFull[dayIdx] || d.d;

  // 1. Check if the day currently has active exercises
  const hasActiveExercises = d.g && d.g.length > 0 && d.g.some(g => (g[1] || []).length > 0);
  if (hasActiveExercises) {
    const exList = [];
    let setsTotal = 0;
    d.g.forEach(g => {
      (g[1] || []).forEach(item => {
        const ex = EXERCISES[item[0]];
        exList.push({
          code: item[0],
          name: ex ? ex.name : item[0],
          target: ex ? (ex.target || (ex.primaryMuscles && ex.primaryMuscles[0]) || "") : "",
          sets: item[1] || 3,
          reps: item[2] || "8–12",
          note: item[3] || "",
          groupName: g[0] || "Main Exercises"
        });
        setsTotal += Number(String(item[1]).slice(-1)) || 3;
      });
    });

    return {
      dayIdx,
      dayShort: d.d,
      dayFullName,
      title: d.t,
      color: d.c || "blue",
      isCurrentlyRest: false,
      hasExercises: true,
      exercises: exList,
      groups: d.g,
      setsTotal,
      previewStr: `💪 ${exList.slice(0, 3).map(e => e.name).join(', ')}${exList.length > 3 ? ' +' + (exList.length - 3) + ' more' : ''} (${setsTotal} sets)`
    };
  }

  // 2. If it is currently a Rest Day, recover from savedConfig or default program
  let backupG = null;
  let backupTitle = "";
  let backupColor = "blue";

  if (d.savedConfig && d.savedConfig.g && d.savedConfig.g.length > 0 && d.savedConfig.g.some(g => (g[1] || []).length > 0)) {
    backupG = d.savedConfig.g;
    backupTitle = d.savedConfig.t || "Custom Workout";
    backupColor = d.savedConfig.c || "blue";
  } else {
    const def = getDefaultProgram()[dayIdx];
    if (def && def.g && def.g.length > 0 && def.g.some(g => (g[1] || []).length > 0)) {
      backupG = def.g;
      backupTitle = def.t;
      backupColor = def.c || "blue";
    }
  }

  if (backupG) {
    const exList = [];
    let setsTotal = 0;
    backupG.forEach(g => {
      (g[1] || []).forEach(item => {
        const ex = EXERCISES[item[0]];
        exList.push({
          code: item[0],
          name: ex ? ex.name : item[0],
          target: ex ? (ex.target || (ex.primaryMuscles && ex.primaryMuscles[0]) || "") : "",
          sets: item[1] || 3,
          reps: item[2] || "8–12",
          note: item[3] || "",
          groupName: g[0] || "Main Exercises"
        });
        setsTotal += Number(String(item[1]).slice(-1)) || 3;
      });
    });

    return {
      dayIdx,
      dayShort: d.d,
      dayFullName,
      title: backupTitle,
      color: backupColor,
      isCurrentlyRest: true,
      hasExercises: true,
      exercises: exList,
      groups: backupG,
      setsTotal,
      previewStr: `💪 ${exList.slice(0, 3).map(e => e.name).join(', ')}${exList.length > 3 ? ' +' + (exList.length - 3) + ' more' : ''} (${setsTotal} sets)`
    };
  }

  // 3. Pure rest day (no exercises)
  return {
    dayIdx,
    dayShort: d.d,
    dayFullName,
    title: d.t || "Rest Day",
    color: d.c || "mute",
    isCurrentlyRest: true,
    hasExercises: false,
    exercises: [],
    groups: [],
    setsTotal: 0,
    previewStr: '🧘 Rest Day (Active recovery & light walking)'
  };
}

function copyDayProgram(fromIndex, toIndex) {
  const current = getProgram();
  const targetDay = current[toIndex];
  if (!targetDay) return;

  const info = getDayWorkoutInfo(fromIndex, current);
  if (info && info.hasExercises) {
    targetDay.t = info.title;
    targetDay.c = info.color;
    targetDay.g = JSON.parse(JSON.stringify(info.groups || []));
    targetDay.msg = "";
    targetDay.savedConfig = null;
  } else {
    const sourceDay = current[fromIndex];
    if (sourceDay) {
      targetDay.t = sourceDay.t;
      targetDay.c = sourceDay.c;
      targetDay.g = JSON.parse(JSON.stringify(sourceDay.g || []));
      targetDay.msg = sourceDay.msg || "";
      targetDay.savedConfig = null;
    }
  }
  saveProgram(current);
}

function matchesCategory(groupName, cat) {
  if (!groupName || !cat) return false;
  const g = groupName.toLowerCase().trim();
  const c = cat.toLowerCase().trim();
  if (g === c || g.includes(c) || c.includes(g)) return true;
  if (c === "chest" && (g.includes("chest") || g.includes("pec"))) return true;
  if (c === "back" && (g.includes("back") || g.includes("lat") || g.includes("rhomboid") || g.includes("pull"))) return true;
  if (c === "shoulders" && (g.includes("shoulder") || g.includes("delt") || g.includes("trap"))) return true;
  if (c === "biceps" && (g.includes("bicep") || g.includes("curl"))) return true;
  if (c === "triceps" && (g.includes("tricep") || g.includes("dip") || g.includes("pushdown") || g.includes("skullcrusher"))) return true;
  if (c === "legs" && (g.includes("leg") || g.includes("quad") || g.includes("glute") || g.includes("hamstring") || g.includes("calf") || g.includes("squat") || g.includes("lower"))) return true;
  if (c === "abs" && (g.includes("abs") || g.includes("core") || g.includes("abdominis") || g.includes("oblique"))) return true;
  if (g.includes("upper body") && (c === "chest" || c === "back" || c === "shoulders" || c === "biceps" || c === "triceps" || c === "arms")) return true;
  if (g === "workout" || g === "exercises" || g === "general" || g.includes("full body")) return true;
  return false;
}

function addExerciseToDay(dayIndex, groupIndex, exCode, sets = 3, reps = "8–12", note = "") {
  const current = getProgram();
  let day = current[dayIndex];
  if (!day) return;

  // If currently a rest day, initialize workout day
  if (!day.g || day.g.length === 0) {
    day.g = [];
    day.t = "Workout Day";
    day.c = "blue";
  }

  const ex = EXERCISES[exCode];
  let category = (ex && ex.category) || "";
  if (!category && ex && ex.target) {
    const t = ex.target.toLowerCase();
    if (t.includes("chest") || t.includes("pec")) category = "Chest";
    else if (t.includes("back") || t.includes("lat") || t.includes("rhomboid")) category = "Back";
    else if (t.includes("delt") || t.includes("shoulder") || t.includes("trap")) category = "Shoulders";
    else if (t.includes("bicep")) category = "Biceps";
    else if (t.includes("tricep")) category = "Triceps";
    else if (t.includes("quad") || t.includes("hamstring") || t.includes("glute") || t.includes("calf") || t.includes("leg")) category = "Legs";
    else if (t.includes("abs") || t.includes("abdominis") || t.includes("core") || t.includes("oblique")) category = "Abs";
  }
  if (!category) category = "Exercises";

  let targetGroupIdx = -1;

  // 1. If a specific group was clicked, only add there if the category actually matches!
  if (groupIndex !== null && groupIndex !== undefined && day.g[groupIndex]) {
    if (matchesCategory(day.g[groupIndex][0], category)) {
      targetGroupIdx = groupIndex;
    }
  }

  // 2. Otherwise search for any existing group in this day that matches this category
  if (targetGroupIdx === -1) {
    for (let i = 0; i < day.g.length; i++) {
      if (matchesCategory(day.g[i][0], category)) {
        targetGroupIdx = i;
        break;
      }
    }
  }

  // 3. If no matching category exists in today's workout, create the category section (e.g. "Chest")!
  if (targetGroupIdx === -1) {
    day.g.push([category, []]);
    targetGroupIdx = day.g.length - 1;
  }

  // Push exercise straight into the matching group
  day.g[targetGroupIdx][1].push([exCode, sets, reps, note]);
  saveProgram(current);
}

function removeExerciseFromDay(dayIndex, groupIndex, exIndex) {
  const current = getProgram();
  const day = current[dayIndex];
  if (day && day.g && day.g[groupIndex] && day.g[groupIndex][1]) {
    day.g[groupIndex][1].splice(exIndex, 1);
    // If group is now empty, remove this entire category section from the day!
    if (day.g[groupIndex][1].length === 0) {
      day.g.splice(groupIndex, 1);
    }
    saveProgram(current);
  }
}

function moveExerciseInDay(dayIndex, groupIndex, exIndex, direction) {
  const current = getProgram();
  const day = current[dayIndex];
  if (!day || !day.g || !day.g[groupIndex]) return;
  const list = day.g[groupIndex][1];
  const newIndex = exIndex + direction;
  if (newIndex >= 0 && newIndex < list.length) {
    const item = list.splice(exIndex, 1)[0];
    list.splice(newIndex, 0, item);
    saveProgram(current);
  }
}

function updateExerciseConfig(dayIndex, groupIndex, exIndex, { sets, reps, note }) {
  const current = getProgram();
  const day = current[dayIndex];
  if (day && day.g && day.g[groupIndex] && day.g[groupIndex][1][exIndex]) {
    const item = day.g[groupIndex][1][exIndex];
    if (sets !== undefined) item[1] = sets;
    if (reps !== undefined) item[2] = reps;
    if (note !== undefined) item[3] = note;
    saveProgram(current);
  }
}

// Current program in memory
let DAYS = getProgram();

// ==========================================================================
// APP STATE & CONSTANTS
// ==========================================================================
const now = new Date();
const todayIdx = (now.getDay() + 6) % 7; // Monday = 0, Sunday = 6
let sel = todayIdx;
let tab = "w"; // "w" (workout), "f" (food), "k" (walk), "h" (history/progress)
const openDetails = {};

function ymd(date) {
  const d = new Date(date);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function esc(str) {
  if (str == null) return "";
  return String(str).replace(/[&<>'"]/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char] || char));
}

function getDateForDay(dayIndex) {
  const d = new Date(now);
  d.setDate(now.getDate() - todayIdx + dayIndex);
  return d;
}

function getSelectedDateKey() {
  return ymd(getDateForDay(sel));
}

function getTodayKey() {
  return ymd(now);
}

// Goals
const goals = Object.assign(
  { kcal: 1900, pro: 120, steps: 8000, wt: 70 },
  store.get("gym-goals") || {}
);

let weights = store.get("gym-weights") || {};
let foodLibrary = store.get("gym-foods") || {};
let walkData = store.get("gym-walk") || {};

function getWorkoutData(dateKey) {
  return store.get("gym-wo-" + dateKey) || {};
}

function getTicksData(dateKey) {
  return store.get("gym-ticks-" + dateKey) || {};
}

function getFoodData(dateKey) {
  return store.get("gym-food-" + dateKey) || [];
}

// ==========================================================================
// WORKOUT SESSIONS & HISTORY TRACKING
// ==========================================================================
function getSessionsHistory() {
  return store.get("gym-sessions") || [];
}

function saveSessionsHistory(sessions) {
  store.set("gym-sessions", sessions);
}

function getActiveSession() {
  return store.get("gym-active-session");
}

function saveActiveSession(session) {
  if (!session) {
    store.remove("gym-active-session");
  } else {
    store.set("gym-active-session", session);
  }
}

function startOrResumeWorkoutSession(dayIdx) {
  let session = getActiveSession();
  const dateKey = getSelectedDateKey();
  if (!session || session.status !== "in_progress") {
    session = {
      id: "sess_" + Date.now(),
      dayIndex: dayIdx !== undefined ? dayIdx : sel,
      dateKey: dateKey,
      startTime: Date.now(),
      status: "in_progress",
      completedSets: {},
      notes: ""
    };
    saveActiveSession(session);
  }
  return session;
}

function recordSetInSession(key, setIdx, isTicked, weight, reps) {
  let session = getActiveSession();
  if (!session || session.status !== "in_progress") {
    session = startOrResumeWorkoutSession(sel);
  }
  const setKey = `${key}-${setIdx}`;
  if (isTicked) {
    session.completedSets[setKey] = {
      timestamp: Date.now(),
      weight: weight || weights[key.split("-")[1]] || 0,
      reps: reps || ""
    };
  } else {
    delete session.completedSets[setKey];
  }
  saveActiveSession(session);
}

function finishActiveWorkoutSession() {
  const session = getActiveSession();
  if (!session) return null;

  const endTime = Date.now();
  const durationMins = Math.max(1, Math.round((endTime - session.startTime) / 60000));
  const plan = DAYS[session.dayIndex || sel];
  const ticks = getTicksData(session.dateKey);
  const completedSetsCount = Object.values(ticks).flat().filter(Boolean).length;
  const autoBurn = calcAutoWorkoutBurn(session.dateKey, session.dayIndex);

  const completedSession = {
    id: session.id,
    dateKey: session.dateKey,
    dayIndex: session.dayIndex,
    title: plan ? plan.t : "Workout",
    startTime: session.startTime,
    endTime: endTime,
    durationMins: durationMins,
    setsCount: completedSetsCount,
    kcalBurned: autoBurn,
    notes: session.notes || "",
    status: "completed"
  };

  const history = getSessionsHistory();
  history.unshift(completedSession);
  saveSessionsHistory(history);
  saveActiveSession(null);

  return completedSession;
}

function cancelActiveWorkoutSession() {
  saveActiveSession(null);
}

// Get previous performance for an exercise
function getPreviousPerformance(exCode) {
  // Check completed sessions and historical ticks
  const history = getSessionsHistory();
  const weight = weights[exCode];

  // Look for any session with performance for this exercise
  if (weight) {
    return {
      weight: weight,
      reps: "Logged working weight",
      formatted: `Last: ${weight} kg`
    };
  }
  return null;
}

// Get exercise personal record (PR)
function getExercisePR(exCode) {
  const w = Number(weights[exCode]);
  if (w > 0) {
    return { weight: w, formatted: `Best: ${w} kg` };
  }
  return null;
}

// ==========================================================================
// ACCURATE REST TIMER (TIMESTAMP-BASED FOR RELIABILITY WHEN BACKGROUNDED)
// ==========================================================================
let restTimerState = {
  active: false,
  paused: false,
  pauseTimeRemaining: 0,
  targetEndTime: 0,
  totalDuration: 90,
  remainingSeconds: 0,
  exerciseName: "",
  intervalId: null
};

function playChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.5);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.5);
  } catch { }
}

function startRestTimer(duration = 90, exName = "") {
  if (restTimerState.intervalId) {
    clearInterval(restTimerState.intervalId);
    restTimerState.intervalId = null;
  }

  const nowMs = Date.now();
  restTimerState = {
    active: true,
    paused: false,
    pauseTimeRemaining: 0,
    targetEndTime: nowMs + duration * 1000,
    totalDuration: duration,
    remainingSeconds: duration,
    exerciseName: exName,
    intervalId: null
  };

  updateTimerTick();
  restTimerState.intervalId = setInterval(updateTimerTick, 500);
}

function updateTimerTick() {
  if (!restTimerState.active) {
    renderFloatingTimer();
    return;
  }

  if (restTimerState.paused) {
    renderFloatingTimer();
    return;
  }

  const nowMs = Date.now();
  const diffMs = restTimerState.targetEndTime - nowMs;
  const secs = Math.max(0, Math.ceil(diffMs / 1000));
  restTimerState.remainingSeconds = secs;

  if (secs <= 0) {
    stopRestTimer(true);
  } else {
    renderFloatingTimer();
  }
}

function pauseOrResumeRestTimer() {
  if (!restTimerState.active) return;
  if (!restTimerState.paused) {
    // Pause
    restTimerState.paused = true;
    restTimerState.pauseTimeRemaining = Math.max(0, restTimerState.targetEndTime - Date.now());
  } else {
    // Resume
    restTimerState.paused = false;
    restTimerState.targetEndTime = Date.now() + restTimerState.pauseTimeRemaining;
  }
  renderFloatingTimer();
}

function addRestTimerSeconds(addSecs = 30) {
  if (!restTimerState.active) {
    startRestTimer(addSecs);
    return;
  }
  if (restTimerState.paused) {
    restTimerState.pauseTimeRemaining += addSecs * 1000;
  } else {
    restTimerState.targetEndTime += addSecs * 1000;
  }
  restTimerState.totalDuration += addSecs;
  updateTimerTick();
}

function restartRestTimer() {
  if (!restTimerState.active) return;
  startRestTimer(restTimerState.totalDuration, restTimerState.exerciseName);
}

function stopRestTimer(completed = false) {
  if (restTimerState.intervalId) {
    clearInterval(restTimerState.intervalId);
  }
  restTimerState.active = false;
  restTimerState.intervalId = null;
  restTimerState.remainingSeconds = 0;

  if (completed) {
    playChime();
    try {
      if (navigator.vibrate) navigator.vibrate([250, 100, 250, 100, 400]);
    } catch { }
  }

  renderFloatingTimer();
}

function renderFloatingTimer() {
  let timerEl = document.getElementById("floatingTimer");

  if (!restTimerState.active) {
    if (timerEl) timerEl.remove();
    return;
  }

  if (!timerEl) {
    timerEl = document.createElement("div");
    timerEl.id = "floatingTimer";
    timerEl.className = "floating-timer";
    document.body.appendChild(timerEl);
  }

  const secs = restTimerState.remainingSeconds;
  const mins = Math.floor(secs / 60);
  const remSecs = secs % 60;
  const timeStr = mins > 0 ? `${mins}m ${String(remSecs).padStart(2, '0')}s` : `${secs}s`;

  timerEl.innerHTML = `
    <div class="timer-pulse ${restTimerState.paused ? 'paused' : ''}">
      <div class="timer-indicator"></div>
      <div>
        <div class="timer-countdown">${timeStr} Rest</div>
        ${restTimerState.exerciseName ? `<div style="font-size:11px;color:var(--mute);max-width:110px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${esc(restTimerState.exerciseName)}</div>` : ''}
      </div>
    </div>
    <div class="timer-actions">
      <button class="timer-action-btn" id="timerAdd30" title="Add 30 seconds">+30s</button>
      <button class="timer-action-btn" id="timerPause" title="${restTimerState.paused ? 'Resume' : 'Pause'}">${restTimerState.paused ? '▶' : '⏸'}</button>
      <button class="timer-action-btn" id="timerRestart" title="Restart">↺</button>
      <button class="timer-action-btn" id="timerStop" title="Stop">✕</button>
    </div>
  `;
}

document.addEventListener("click", e => {
  if (!e.target) return;
  if (e.target.id === "timerAdd30") {
    addRestTimerSeconds(30);
  } else if (e.target.id === "timerPause") {
    pauseOrResumeRestTimer();
  } else if (e.target.id === "timerRestart") {
    restartRestTimer();
  } else if (e.target.id === "timerStop") {
    stopRestTimer(false);
  }
});

// ==========================================================================
// METABOLIC ENGINE (STRAVA STYLE)
// ==========================================================================
function calcAutoWorkoutBurn(dateKey, planDayIndex) {
  const ticks = getTicksData(dateKey);
  const plan = DAYS[planDayIndex !== undefined ? planDayIndex : sel];
  if (!plan || !plan.g) return 0;

  const wt = goals.wt || 70;
  const weightFactor = wt / 70;
  let autoKcal = 0;

  plan.g.forEach(group => {
    const exercises = group[1];
    exercises.forEach(item => {
      const code = item[0];
      const key = `${planDayIndex !== undefined ? planDayIndex : sel}-${code}`;
      const setTicks = ticks[key] || [];
      const completedCount = setTicks.filter(Boolean).length;
      if (!completedCount) return;

      const ex = EXERCISES[code];
      const metType = (ex && ex.metType) || "compound";

      let kcalPerSet = 18;
      if (metType === "heavy") kcalPerSet = 23;
      else if (metType === "compound") kcalPerSet = 18;
      else if (metType === "isolation") kcalPerSet = 14;
      else if (metType === "core") kcalPerSet = 11;

      autoKcal += completedCount * kcalPerSet * weightFactor;
    });
  });

  return Math.round(autoKcal);
}

function getEffectiveWorkoutBurn(dateKey, planDayIndex) {
  const wo = getWorkoutData(dateKey);
  if (wo && wo.kcal > 0) return wo.kcal;
  return calcAutoWorkoutBurn(dateKey, planDayIndex);
}

function calcWalkBurn(t) {
  const steps = (t && t.steps) || 0;
  const minutes = (t && t.min) || 0;
  const wt = goals.wt || 70;
  if (steps > 0) {
    return Math.round(steps * 0.04 * (wt / 70));
  }
  return Math.round(3.5 * wt * minutes / 60);
}

function stepsToDistance(steps) {
  if (!steps) return "0.0";
  return (steps * 0.000762).toFixed(1);
}

function calcActiveMinutes(wo, walk) {
  const liftSets = Object.values(getTicksData(getSelectedDateKey())).flat().filter(Boolean).length;
  const liftMins = (wo && wo.min) || Math.round(liftSets * 2.5);
  const walkMins = (walk && walk.min) || Math.round(((walk && walk.steps) || 0) / 100);
  return liftMins + walkMins;
}

// ==========================================================================
// COLLAPSIBLE STRAVA ACTIVITY HUB
// ==========================================================================
function isStravaCollapsed() {
  return !!store.get("gym-strava-collapsed");
}

function toggleStravaHub() {
  const current = isStravaCollapsed();
  store.set("gym-strava-collapsed", !current);
  render();
}

function renderStravaHub(selectedDateStr, planDayIndex) {
  const workoutBurn = getEffectiveWorkoutBurn(selectedDateStr, planDayIndex);
  const dayWalk = walkData[selectedDateStr] || {};
  const walkBurn = calcWalkBurn(dayWalk);
  const totalBurn = workoutBurn + walkBurn;

  const baseKcal = goals.kcal || 1900;
  const totalDailyBudget = baseKcal + totalBurn;

  const foodList = getFoodData(selectedDateStr);
  let totalEaten = 0;
  foodList.forEach(item => totalEaten += Number(item.k) || 0);

  const remainingKcal = totalDailyBudget - totalEaten;
  const isDeficit = remainingKcal >= 0;

  const walkSteps = dayWalk.steps || 0;
  const distanceKm = stepsToDistance(walkSteps);
  const totalActiveMins = calcActiveMinutes(getWorkoutData(selectedDateStr), dayWalk);
  const collapsed = isStravaCollapsed();

  if (collapsed) {
    return `
      <div class="strava-hub compact" onclick="toggleStravaHub()">
        <div class="strava-hub-compact-row">
          <div style="display:flex;align-items:center;gap:8px;font-weight:700;font-size:13px;color:var(--accent);">
            <span>⚡ METABOLIC HUB</span>
            <span style="font-size:12px;color:var(--ink);font-weight:600;">🔥 ${totalBurn} kcal · 👟 ${distanceKm}km · ⏱️ ${totalActiveMins}m</span>
          </div>
          <div style="display:flex;align-items:center;gap:6px;">
            <span class="status-pill ${isDeficit ? 'under' : 'over'}" style="font-size:10px;padding:2px 6px;">
              ${isDeficit ? `${remainingKcal} left` : `${Math.abs(remainingKcal)} over`}
            </span>
            <button class="btn-icon" aria-label="Expand Metabolic Hub" style="font-size:12px;">▾</button>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="strava-hub">
      <div class="strava-hub-header">
        <div class="strava-hub-title" onclick="toggleStravaHub()" style="cursor:pointer;">
          <span>⚡ DAILY ACTIVITY HUB</span>
        </div>
        <div style="display:flex;align-items:center;gap:6px;">
          <span class="strava-badge">AUTO-CALCULATED</span>
          <button class="btn-icon" onclick="toggleStravaHub()" aria-label="Collapse Metabolic Hub" title="Collapse" style="font-size:12px;">▴</button>
        </div>
      </div>

      <div class="strava-grid">
        <div class="strava-metric highlight">
          <div class="metric-val">${totalBurn}</div>
          <div class="metric-label">🔥 Burned (kcal)</div>
        </div>
        <div class="strava-metric">
          <div class="metric-val">${distanceKm}</div>
          <div class="metric-label">👟 Distance (km)</div>
        </div>
        <div class="strava-metric">
          <div class="metric-val">${totalActiveMins}m</div>
          <div class="metric-label">⏱️ Active Time</div>
        </div>
      </div>

      <!-- Live All-In-One Calorie Balance -->
      <div class="calorie-balance-card">
        <div class="calorie-formula-row">
          <span>Base <b>${baseKcal}</b> + Lift <b>${workoutBurn}</b> + Walk <b>${walkBurn}</b></span>
          <span>Eaten: <b>${totalEaten}</b></span>
        </div>
        <div class="calorie-balance-summary">
          <div>
            <div class="main-num ${isDeficit ? 'positive' : 'negative'}">
              ${Math.abs(remainingKcal)} <span style="font-size: 16px; color: var(--mute);">kcal</span>
            </div>
            <div style="font-size: 12px; color: var(--mute); font-weight: 600;">
              ${isDeficit ? "Remaining to eat" : "Calorie surplus"}
            </div>
          </div>
          <span class="status-pill ${isDeficit ? 'under' : 'over'}">
            ${isDeficit ? "ON TRACK" : "OVER BUDGET"}
          </span>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// VIDEO & EXERCISE DETAIL MODAL WITH PRIMARY & SECONDARY MUSCLE TARGETS
// ==========================================================================
const VERIFIED_VIDEOS = [];
const FITBOD_SLUGS = {
  bb: "barbell-bench-press", dbb: "dumbbell-bench-press", ham: "hammer-curls",
  dbc: "dumbbell-bicep-curl", lp: "lat-pulldown", sp: "dumbbell-shoulder-press", rc: "cable-row"
};


// ==========================================================================
// ANATOMICAL MUSCLE DIAGRAM ENGINE (ANTERIOR & POSTERIOR VISUAL MAPPING)
// Highlights primary muscles in vibrant red/coral and secondary in emerald green
// ==========================================================================
const EXERCISE_ANATOMY = {
  inc: { primary: ["chest"], secondary: ["delts-front", "triceps"], primaryLabels: ["Upper Chest (Clavicular Pecs)"], secondaryLabels: ["Front Deltoids", "Triceps"] },
  bb: { primary: ["chest"], secondary: ["triceps", "delts-front"], primaryLabels: ["Mid & Lower Chest (Sternocostal Pecs)"], secondaryLabels: ["Triceps Brachii", "Front Deltoids"] },
  fly: { primary: ["chest"], secondary: ["delts-front"], primaryLabels: ["Sternal Chest (Inner/Mid Pecs)"], secondaryLabels: ["Front Deltoids"] },
  dbi: { primary: ["chest"], secondary: ["delts-front", "triceps"], primaryLabels: ["Upper Chest"], secondaryLabels: ["Front Deltoids", "Triceps"] },
  dbb: { primary: ["chest"], secondary: ["triceps", "delts-front"], primaryLabels: ["Overall Chest"], secondaryLabels: ["Triceps", "Front Deltoids"] },
  ic: { primary: ["biceps"], secondary: ["forearms"], primaryLabels: ["Biceps (Long Head)"], secondaryLabels: ["Forearms"] },
  bc: { primary: ["biceps"], secondary: ["forearms"], primaryLabels: ["Biceps Brachii"], secondaryLabels: ["Brachialis", "Forearms"] },
  ham: { primary: ["forearms", "biceps"], secondary: ["biceps"], primaryLabels: ["Brachialis & Forearms"], secondaryLabels: ["Biceps"] },
  dbc: { primary: ["biceps"], secondary: ["forearms"], primaryLabels: ["Biceps Brachii"], secondaryLabels: ["Forearms"] },
  lp: { primary: ["lats"], secondary: ["biceps", "traps-mid", "delts-rear"], primaryLabels: ["Lats (Latissimus Dorsi)"], secondaryLabels: ["Biceps", "Mid Back / Rhomboids", "Rear Deltoids"] },
  rc: { primary: ["lats", "traps-mid"], secondary: ["biceps", "delts-rear"], primaryLabels: ["Lats & Mid Back"], secondaryLabels: ["Biceps", "Rear Deltoids"] },
  rw: { primary: ["traps-mid", "delts-rear"], secondary: ["lats", "biceps"], primaryLabels: ["Mid Back & Rear Deltoids"], secondaryLabels: ["Lats", "Biceps"] },
  sh: { primary: ["traps-upper"], secondary: ["forearms"], primaryLabels: ["Upper Trapezius"], secondaryLabels: ["Forearms (Grip)"] },
  sp: { primary: ["delts-front", "delts-side"], secondary: ["triceps", "traps-upper"], primaryLabels: ["Shoulders (Front & Side Delts)"], secondaryLabels: ["Triceps", "Upper Trapezius"] },
  lr: { primary: ["delts-side"], secondary: ["traps-upper", "delts-front"], primaryLabels: ["Lateral Deltoids (Side Delts)"], secondaryLabels: ["Upper Trapezius", "Front Deltoids"] },
  rf: { primary: ["delts-rear"], secondary: ["traps-mid", "traps-upper"], primaryLabels: ["Rear Deltoids (Posterior)"], secondaryLabels: ["Mid Back", "Upper Trapezius"] },
  leg: { primary: ["quads"], secondary: ["glutes", "hamstrings", "calves"], primaryLabels: ["Quadriceps (Thighs)"], secondaryLabels: ["Glutes", "Hamstrings", "Calves"] },
  le: { primary: ["quads"], secondary: [], primaryLabels: ["Quadriceps"], secondaryLabels: ["None"] },
  lc: { primary: ["hamstrings"], secondary: ["calves"], primaryLabels: ["Hamstrings"], secondaryLabels: ["Calves"] },
  cr: { primary: ["calves"], secondary: [], primaryLabels: ["Calves (Gastrocnemius)"], secondaryLabels: ["Soleus"] },
  pd: { primary: ["triceps"], secondary: ["forearms"], primaryLabels: ["Triceps Brachii"], secondaryLabels: ["Forearms"] },
  re: { primary: ["triceps"], secondary: [], primaryLabels: ["Triceps (Lateral Head)"], secondaryLabels: ["None"] },
  oe: { primary: ["triceps"], secondary: [], primaryLabels: ["Triceps (Long Head)"], secondaryLabels: ["None"] },
  cc: { primary: ["abs"], secondary: ["obliques"], primaryLabels: ["Abdominals (Core)"], secondaryLabels: ["Obliques"] },
  sb: { primary: ["obliques"], secondary: ["abs", "lowerback"], primaryLabels: ["Obliques (Side Core)"], secondaryLabels: ["Lower Back", "Abs"] },
  kr: { primary: ["abs"], secondary: ["obliques"], primaryLabels: ["Lower Abdominals"], secondaryLabels: ["Hip Flexors", "Obliques"] },
  gb: { primary: ["glutes"], secondary: ["hamstrings", "lowerback"], primaryLabels: ["Gluteus Maximus"], secondaryLabels: ["Hamstrings", "Lower Back"] },
  srm: { primary: ["traps-mid", "lats"], secondary: ["biceps", "delts-rear"], primaryLabels: ["Mid Back & Rhomboids"], secondaryLabels: ["Lats", "Biceps"] },

  // ── Shoulders ────────────────────────────────────────────────────────
  cable_lateral_raise: { primary: ["delts-side"], secondary: ["traps-upper", "delts-front"], primaryLabels: ["Lateral Deltoid (Side Shoulder)"], secondaryLabels: ["Upper Trapezius", "Anterior Deltoid"] },
  upright_row:  { primary: ["delts-side", "traps-upper"], secondary: ["delts-front", "biceps"], primaryLabels: ["Lateral Delts & Upper Traps"], secondaryLabels: ["Front Deltoids", "Biceps"] },
  dumbbell_shrug: { primary: ["traps-upper"], secondary: ["delts-rear"], primaryLabels: ["Upper Trapezius"], secondaryLabels: ["Rear Deltoids"] },
  rear_delt_raise: { primary: ["delts-rear"], secondary: ["traps-mid", "traps-upper"], primaryLabels: ["Rear Deltoids (Posterior)"], secondaryLabels: ["Mid Traps", "Upper Traps"] },
  arnold_press: { primary: ["delts-front", "delts-side"], secondary: ["triceps", "traps-upper"], primaryLabels: ["Front & Side Deltoids"], secondaryLabels: ["Triceps", "Upper Trapezius"] },
  military_press: { primary: ["delts-front", "delts-side"], secondary: ["triceps", "traps-upper"], primaryLabels: ["Anterior & Lateral Deltoids"], secondaryLabels: ["Triceps Brachii", "Upper Traps"] },
  facepull: { primary: ["delts-rear"], secondary: ["traps-mid", "traps-upper"], primaryLabels: ["Rear Deltoids"], secondaryLabels: ["Mid Traps / Rhomboids"] },

  // ── Biceps ───────────────────────────────────────────────────────────
  preacher_curl:      { primary: ["biceps"], secondary: ["forearms"], primaryLabels: ["Biceps (Short Head)"], secondaryLabels: ["Forearms / Brachialis"] },
  concentration_curl: { primary: ["biceps"], secondary: ["forearms"], primaryLabels: ["Biceps Brachii (Peak)"], secondaryLabels: ["Brachialis"] },
  cable_curl:  { primary: ["biceps"], secondary: ["forearms"], primaryLabels: ["Biceps (Constant Tension)"], secondaryLabels: ["Forearms"] },
  spider_curl: { primary: ["biceps"], secondary: [], primaryLabels: ["Biceps (Long Head)"], secondaryLabels: ["None"] },

  // ── Triceps ──────────────────────────────────────────────────────────
  skull_crusher:     { primary: ["triceps"], secondary: [], primaryLabels: ["Triceps (Long Head)"], secondaryLabels: ["None"] },
  lying_triceps_ext: { primary: ["triceps"], secondary: [], primaryLabels: ["Triceps (Long Head)"], secondaryLabels: ["None"] },
  bench_dips:        { primary: ["triceps"], secondary: ["chest", "delts-front"], primaryLabels: ["Triceps Brachii"], secondaryLabels: ["Chest", "Front Deltoids"] },
  close_grip_bench:  { primary: ["triceps"], secondary: ["chest", "delts-front"], primaryLabels: ["Triceps (All Heads)"], secondaryLabels: ["Chest", "Front Deltoids"] },
  triceps_kickback:  { primary: ["triceps"], secondary: [], primaryLabels: ["Triceps (Lateral Head)"], secondaryLabels: ["None"] },

  // ── Chest ────────────────────────────────────────────────────────────
  chest_dip:       { primary: ["chest"], secondary: ["triceps", "delts-front"], primaryLabels: ["Lower Chest (Sternal Pecs)"], secondaryLabels: ["Triceps", "Front Deltoids"] },
  pushups:         { primary: ["chest"], secondary: ["triceps", "delts-front"], primaryLabels: ["Pectoralis Major"], secondaryLabels: ["Triceps", "Front Deltoids"] },
  cable_crossover: { primary: ["chest"], secondary: ["delts-front"], primaryLabels: ["Inner & Mid Chest"], secondaryLabels: ["Front Deltoids"] },
  decline_bench:   { primary: ["chest"], secondary: ["triceps", "delts-front"], primaryLabels: ["Lower Chest (Sternocostal)"], secondaryLabels: ["Triceps", "Front Deltoids"] },
  dumbbell_flyes:  { primary: ["chest"], secondary: ["delts-front"], primaryLabels: ["Mid & Outer Chest"], secondaryLabels: ["Front Deltoids"] },

  // ── Back ─────────────────────────────────────────────────────────────
  pullups:               { primary: ["lats"], secondary: ["biceps", "traps-mid", "delts-rear"], primaryLabels: ["Latissimus Dorsi"], secondaryLabels: ["Biceps", "Mid Back", "Rear Delts"] },
  bent_over_row:         { primary: ["lats", "traps-mid"], secondary: ["biceps", "delts-rear", "lowerback"], primaryLabels: ["Lats & Mid Back"], secondaryLabels: ["Biceps", "Rear Deltoids", "Erectors"] },
  one_arm_row:           { primary: ["lats", "traps-mid"], secondary: ["biceps", "delts-rear"], primaryLabels: ["Lats & Upper Back"], secondaryLabels: ["Biceps", "Rear Deltoids"] },
  tbar_row:              { primary: ["lats", "traps-mid"], secondary: ["biceps", "delts-rear"], primaryLabels: ["Mid Back Thickness & Lats"], secondaryLabels: ["Biceps", "Rear Deltoids"] },
  deadlift:              { primary: ["lats", "lowerback"], secondary: ["glutes", "hamstrings", "traps-upper"], primaryLabels: ["Lats & Lower Back (Erectors)"], secondaryLabels: ["Glutes", "Hamstrings", "Traps"] },
  vbar_pulldown:         { primary: ["lats"], secondary: ["biceps", "traps-mid"], primaryLabels: ["Lats (Inner / V-taper)"], secondaryLabels: ["Biceps", "Mid Back"] },
  straight_arm_pulldown: { primary: ["lats"], secondary: ["traps-mid", "abs"], primaryLabels: ["Lats (Long Head Stretch)"], secondaryLabels: ["Mid Back", "Core"] },

  // ── Legs ─────────────────────────────────────────────────────────────
  barbell_squat:     { primary: ["quads"], secondary: ["glutes", "hamstrings", "calves"], primaryLabels: ["Quadriceps"], secondaryLabels: ["Glutes", "Hamstrings", "Calves"] },
  front_squat:       { primary: ["quads"], secondary: ["glutes", "calves"], primaryLabels: ["Quads (Vastus Medialis Emphasis)"], secondaryLabels: ["Glutes", "Calves"] },
  hack_squat:        { primary: ["quads"], secondary: ["glutes", "hamstrings"], primaryLabels: ["Quadriceps"], secondaryLabels: ["Glutes", "Hamstrings"] },
  bulgarian_split:   { primary: ["quads", "glutes"], secondary: ["hamstrings", "calves"], primaryLabels: ["Quads & Glutes"], secondaryLabels: ["Hamstrings", "Calves"] },
  rdl:               { primary: ["hamstrings", "glutes"], secondary: ["lowerback", "calves"], primaryLabels: ["Hamstrings & Glutes"], secondaryLabels: ["Lower Back", "Calves"] },
  hip_thrust:        { primary: ["glutes"], secondary: ["hamstrings", "quads"], primaryLabels: ["Gluteus Maximus"], secondaryLabels: ["Hamstrings", "Quads"] },
  seated_leg_curl:   { primary: ["hamstrings"], secondary: ["calves"], primaryLabels: ["Hamstrings (Seated)"], secondaryLabels: ["Calves"] },
  seated_calf_raise: { primary: ["calves"], secondary: [], primaryLabels: ["Soleus (Deep Calves)"], secondaryLabels: ["None"] },
  dumbbell_lunges:   { primary: ["quads", "glutes"], secondary: ["hamstrings", "calves"], primaryLabels: ["Quads & Glutes"], secondaryLabels: ["Hamstrings", "Calves"] },

  // ── Abs / Core ───────────────────────────────────────────────────────
  plank:             { primary: ["abs"], secondary: ["obliques", "lowerback"], primaryLabels: ["Transverse Abdominis (Core)"], secondaryLabels: ["Obliques", "Lower Back"] },
  hanging_leg_raise: { primary: ["abs"], secondary: ["obliques"], primaryLabels: ["Lower Abdominals"], secondaryLabels: ["Obliques", "Hip Flexors"] },
  ab_roller:         { primary: ["abs"], secondary: ["obliques", "lowerback"], primaryLabels: ["Rectus Abdominis (Full)"], secondaryLabels: ["Obliques", "Lower Back"] },
  russian_twist:     { primary: ["obliques"], secondary: ["abs"], primaryLabels: ["Obliques (Rotational Core)"], secondaryLabels: ["Rectus Abdominis"] },

  // ── Correct-code entries (real exercise codes from EXERCISES object) ──
  dips:              { primary: ["chest"], secondary: ["triceps", "delts-front"], primaryLabels: ["Lower Chest (Sternal Pecs)"], secondaryLabels: ["Triceps", "Front Deltoids"] },
  pushup:            { primary: ["chest"], secondary: ["triceps", "delts-front"], primaryLabels: ["Pectoralis Major"], secondaryLabels: ["Triceps", "Front Deltoids"] },
  cbl_fly:           { primary: ["chest"], secondary: ["delts-front"], primaryLabels: ["Inner & Mid Chest"], secondaryLabels: ["Front Deltoids"] },
  dec_bb:            { primary: ["chest"], secondary: ["triceps", "delts-front"], primaryLabels: ["Lower Chest (Sternocostal)"], secondaryLabels: ["Triceps", "Front Deltoids"] },
  db_fly:            { primary: ["chest"], secondary: ["delts-front"], primaryLabels: ["Mid & Outer Chest"], secondaryLabels: ["Front Deltoids"] },
  pullup:            { primary: ["lats"], secondary: ["biceps", "traps-mid", "delts-rear"], primaryLabels: ["Latissimus Dorsi"], secondaryLabels: ["Biceps", "Mid Back", "Rear Delts"] },
  bor:               { primary: ["lats", "traps-mid"], secondary: ["biceps", "delts-rear", "lowerback"], primaryLabels: ["Lats & Mid Back"], secondaryLabels: ["Biceps", "Rear Deltoids", "Erectors"] },
  db_row:            { primary: ["lats", "traps-mid"], secondary: ["biceps", "delts-rear"], primaryLabels: ["Lats & Upper Back"], secondaryLabels: ["Biceps", "Rear Deltoids"] },
  tbar:              { primary: ["lats", "traps-mid"], secondary: ["biceps", "delts-rear"], primaryLabels: ["Mid Back Thickness & Lats"], secondaryLabels: ["Biceps", "Rear Deltoids"] },
  lat_pulldown_close:{ primary: ["lats"], secondary: ["biceps", "traps-mid"], primaryLabels: ["Lats (Inner / V-taper)"], secondaryLabels: ["Biceps", "Mid Back"] },
  ohp:               { primary: ["delts-front", "delts-side"], secondary: ["triceps", "traps-upper"], primaryLabels: ["Anterior & Lateral Deltoids"], secondaryLabels: ["Triceps Brachii", "Upper Traps"] },
  db_shrug:          { primary: ["traps-upper"], secondary: ["delts-rear"], primaryLabels: ["Upper Trapezius"], secondaryLabels: ["Rear Deltoids"] },
  db_rear_delt_fly:  { primary: ["delts-rear"], secondary: ["traps-mid", "traps-upper"], primaryLabels: ["Rear Deltoids (Posterior)"], secondaryLabels: ["Mid Traps", "Upper Traps"] },
  conc_curl:         { primary: ["biceps"], secondary: ["forearms"], primaryLabels: ["Biceps Brachii (Peak)"], secondaryLabels: ["Brachialis"] },
  skullcrushers:     { primary: ["triceps"], secondary: [], primaryLabels: ["Triceps (Long Head)"], secondaryLabels: ["None"] },
  dips_bench:        { primary: ["triceps"], secondary: ["chest", "delts-front"], primaryLabels: ["Triceps Brachii"], secondaryLabels: ["Chest", "Front Deltoids"] },
  tricep_kickback:   { primary: ["triceps"], secondary: [], primaryLabels: ["Triceps (Lateral Head)"], secondaryLabels: ["None"] },
  seated_calf:       { primary: ["calves"], secondary: [], primaryLabels: ["Soleus (Deep Calves)"], secondaryLabels: ["None"] },
  walking_lunge:     { primary: ["quads", "glutes"], secondary: ["hamstrings", "calves"], primaryLabels: ["Quads & Glutes"], secondaryLabels: ["Hamstrings", "Calves"] },
  ab_wheel:          { primary: ["abs"], secondary: ["obliques", "lowerback"], primaryLabels: ["Rectus Abdominis (Full)"], secondaryLabels: ["Obliques", "Lower Back"] }
};

let _diagramUidCounter = 0;

function renderMuscleDiagram(exCode) {
  _diagramUidCounter++;
  const uid = 'dia_' + _diagramUidCounter + '_' + Math.random().toString(36).slice(2, 7);
  const anatomy = EXERCISE_ANATOMY[exCode] || { primary: [], secondary: [], primaryLabels: ["Target Muscle"], secondaryLabels: ["None"] };
  const primaryGroups = anatomy.primary || [];
  const secondaryGroups = anatomy.secondary || [];

  const primaryColor = "#ef4444"; // bold vibrant red (Primary)
  const secondaryColor = "#10b981"; // bold vibrant green (Secondary)
  const neutralMuscle = "#64748b"; // clearly visible slate gray (Never invisible!)
  const bodyBase = "#475569";
  const bodyOutline = "#1e293b";

  const getColor = groupName => {
    if (primaryGroups.includes(groupName)) return primaryColor;
    if (secondaryGroups.includes(groupName)) return secondaryColor;
    return neutralMuscle;
  };

  const getGlow = groupName => {
    if (primaryGroups.includes(groupName)) return `filter="url(#glow-p-${uid})" style="filter:drop-shadow(0 0 3.5px #ef4444);"`;
    if (secondaryGroups.includes(groupName)) return `filter="url(#glow-s-${uid})" style="filter:drop-shadow(0 0 3.5px #10b981);"`;
    return '';
  };

  const primaryLabelsHtml = (anatomy.primaryLabels && anatomy.primaryLabels.length)
    ? anatomy.primaryLabels.map(l => `<span class="legend-muscle-tag primary">${l}</span>`).join(", ")
    : '<span style="color:var(--mute);">None</span>';

  const secondaryLabelsHtml = (anatomy.secondaryLabels && anatomy.secondaryLabels.length)
    ? anatomy.secondaryLabels.map(l => `<span class="legend-muscle-tag secondary">${l}</span>`).join(", ")
    : '<span style="color:var(--mute);">None</span>';

  const svgHtml = `
<svg viewBox="0 0 380 340" width="100%" height="auto" class="muscle-anatomy-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-p-${uid}" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#ef4444" flood-opacity="0.9"/>
    </filter>
    <filter id="glow-s-${uid}" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#10b981" flood-opacity="0.9"/>
    </filter>
  </defs>

  <style>
    .m-p { stroke: #1e293b; stroke-width: 1.5; stroke-linejoin: round; }
    .b-bg { fill: #475569; stroke: #1e293b; stroke-width: 1.5; }
    .lbl { fill: #94a3b8; font-family: 'Barlow', system-ui, sans-serif; font-size: 11px; font-weight: 800; text-anchor: middle; letter-spacing: 0.5px; }
  </style>

  <!-- ANTERIOR (FRONT) -->
  <g transform="translate(10, 10)">
    <text x="85" y="325" class="lbl">FRONT (ANTERIOR)</text>
    
    <!-- Head & Neck -->
    <ellipse cx="85" cy="20" rx="13" ry="16" class="b-bg" />
    <path class="b-bg" d="M78 34 L92 34 L98 48 L72 48 Z" />

    <!-- Traps Front -->
    <path class="m-p" ${getGlow('traps-upper')} fill="${getColor('traps-upper')}" d="M78 38 L92 38 L100 48 L70 48 Z" />

    <!-- Chest -->
    <path class="m-p" ${getGlow('chest')} fill="${getColor('chest')}" d="M70 48 L85 50 L85 80 C74 81, 62 76, 54 66 C57 56, 63 50, 70 48 Z" />
    <path class="m-p" ${getGlow('chest')} fill="${getColor('chest')}" d="M100 48 L85 50 L85 80 C96 81, 108 76, 116 66 C113 56, 107 50, 100 48 Z" />

    <!-- Shoulders Front -->
    <path class="m-p" ${getGlow('delts-front')} fill="${getColor('delts-front')}" d="M52 52 C57 48, 66 48, 70 49 L56 68 C50 63, 49 57, 52 52 Z" />
    <path class="m-p" ${getGlow('delts-front')} fill="${getColor('delts-front')}" d="M118 52 C113 48, 104 48, 100 49 L114 68 C120 63, 121 57, 118 52 Z" />

    <!-- Shoulders Side -->
    <path class="m-p" ${getGlow('delts-side')} fill="${getColor('delts-side')}" d="M52 52 C48 57, 46 64, 48 72 L54 69 C53 64, 53 59, 56 55 Z" />
    <path class="m-p" ${getGlow('delts-side')} fill="${getColor('delts-side')}" d="M118 52 C122 57, 124 64, 122 72 L116 69 C117 64, 117 59, 114 55 Z" />

    <!-- Biceps -->
    <path class="m-p" ${getGlow('biceps')} fill="${getColor('biceps')}" d="M47 72 C44 83, 43 95, 48 106 L54 102 C51 93, 51 83, 55 74 Z" />
    <path class="m-p" ${getGlow('biceps')} fill="${getColor('biceps')}" d="M123 72 C126 83, 127 95, 122 106 L116 102 C119 93, 119 83, 115 74 Z" />

    <!-- Forearms -->
    <path class="m-p" ${getGlow('forearms')} fill="${getColor('forearms')}" d="M46 108 C41 122, 36 138, 33 152 L40 154 C43 140, 50 126, 53 110 Z" />
    <path class="m-p" ${getGlow('forearms')} fill="${getColor('forearms')}" d="M124 108 C129 122, 134 138, 137 152 L130 154 C127 140, 120 126, 117 110 Z" />
    <circle cx="32" cy="162" r="5" class="b-bg" />
    <circle cx="138" cy="162" r="5" class="b-bg" />

    <!-- Abdominals -->
    <g ${getGlow('abs')}>
      <rect x="75" y="82" width="9" height="11" rx="2" class="m-p" fill="${getColor('abs')}" />
      <rect x="86" y="82" width="9" height="11" rx="2" class="m-p" fill="${getColor('abs')}" />
      <rect x="75" y="95" width="9" height="11" rx="2" class="m-p" fill="${getColor('abs')}" />
      <rect x="86" y="95" width="9" height="11" rx="2" class="m-p" fill="${getColor('abs')}" />
      <rect x="75" y="108" width="9" height="12" rx="2" class="m-p" fill="${getColor('abs')}" />
      <rect x="86" y="108" width="9" height="12" rx="2" class="m-p" fill="${getColor('abs')}" />
    </g>

    <!-- Obliques -->
    <path class="m-p" ${getGlow('obliques')} fill="${getColor('obliques')}" d="M64 82 C68 96, 68 110, 72 122 L75 119 C72 108, 72 96, 74 84 Z" />
    <path class="m-p" ${getGlow('obliques')} fill="${getColor('obliques')}" d="M106 82 C102 96, 102 110, 98 122 L95 119 C98 108, 98 96, 96 84 Z" />

    <!-- Pelvis -->
    <path class="b-bg" d="M74 124 L96 124 L92 142 L78 142 Z" />

    <!-- Quads -->
    <path class="m-p" ${getGlow('quads')} fill="${getColor('quads')}" d="M68 138 C63 158, 60 182, 62 210 C68 215, 76 215, 80 210 C83 186, 83 162, 79 140 Z" />
    <path class="m-p" ${getGlow('quads')} fill="${getColor('quads')}" d="M102 138 C107 158, 110 182, 108 210 C102 215, 94 215, 90 210 C87 186, 87 162, 91 140 Z" />

    <!-- Knees -->
    <ellipse cx="71" cy="216" rx="6" ry="4" class="b-bg" />
    <ellipse cx="99" cy="216" rx="6" ry="4" class="b-bg" />

    <!-- Calves Front -->
    <path class="m-p" ${getGlow('calves')} fill="${getColor('calves')}" d="M65 222 C61 238, 61 260, 66 288 C69 290, 74 290, 76 287 C77 262, 78 240, 76 222 Z" />
    <path class="m-p" ${getGlow('calves')} fill="${getColor('calves')}" d="M105 222 C109 238, 109 260, 104 288 C101 290, 96 290, 94 287 C93 262, 92 240, 94 222 Z" />

    <!-- Feet -->
    <path class="b-bg" d="M62 292 C58 300, 63 306, 75 306 L75 292 Z" />
    <path class="b-bg" d="M108 292 C112 300, 107 306, 95 306 L95 292 Z" />
  </g>

  <!-- POSTERIOR (BACK) -->
  <g transform="translate(190, 10)">
    <text x="85" y="325" class="lbl">BACK (POSTERIOR)</text>

    <!-- Head & Neck Back -->
    <ellipse cx="85" cy="20" rx="13" ry="16" class="b-bg" />

    <!-- Traps Upper -->
    <path class="m-p" ${getGlow('traps-upper')} fill="${getColor('traps-upper')}" d="M78 34 L92 34 L106 48 L85 64 L64 48 Z" />

    <!-- Mid Traps / Rhomboids -->
    <path class="m-p" ${getGlow('traps-mid')} fill="${getColor('traps-mid')}" d="M85 64 L100 54 L96 82 L85 92 L74 82 L70 54 Z" />

    <!-- Rear Delts -->
    <path class="m-p" ${getGlow('delts-rear')} fill="${getColor('delts-rear')}" d="M52 52 C57 48, 65 48, 68 52 L57 69 C52 64, 50 59, 52 52 Z" />
    <path class="m-p" ${getGlow('delts-rear')} fill="${getColor('delts-rear')}" d="M118 52 C113 48, 105 48, 102 52 L113 69 C118 64, 120 59, 118 52 Z" />

    <!-- Triceps -->
    <path class="m-p" ${getGlow('triceps')} fill="${getColor('triceps')}" d="M47 70 C44 82, 43 96, 48 107 L54 103 C51 94, 51 82, 55 74 Z" />
    <path class="m-p" ${getGlow('triceps')} fill="${getColor('triceps')}" d="M123 70 C126 82, 127 96, 122 107 L116 103 C119 94, 119 82, 115 74 Z" />

    <!-- Forearms Back -->
    <path class="m-p" ${getGlow('forearms')} fill="${getColor('forearms')}" d="M46 110 C41 124, 36 140, 33 154 L40 156 C43 142, 50 128, 53 112 Z" />
    <path class="m-p" ${getGlow('forearms')} fill="${getColor('forearms')}" d="M124 110 C129 124, 134 140, 137 154 L130 156 C127 142, 120 128, 117 112 Z" />
    <circle cx="32" cy="162" r="5" class="b-bg" />
    <circle cx="138" cy="162" r="5" class="b-bg" />

    <!-- Lats -->
    <path class="m-p" ${getGlow('lats')} fill="${getColor('lats')}" d="M69 58 L76 80 L76 108 C66 102, 61 86, 56 74 C58 68, 64 62, 69 58 Z" />
    <path class="m-p" ${getGlow('lats')} fill="${getColor('lats')}" d="M101 58 L94 80 L94 108 C104 102, 109 86, 114 74 C112 68, 106 62, 101 58 Z" />

    <!-- Lower Back -->
    <path class="m-p" ${getGlow('lowerback')} fill="${getColor('lowerback')}" d="M78 95 L92 95 L94 122 L76 122 Z" />

    <!-- Glutes -->
    <path class="m-p" ${getGlow('glutes')} fill="${getColor('glutes')}" d="M68 126 C76 124, 84 125, 85 134 C85 150, 76 158, 66 156 C60 152, 62 136, 68 126 Z" />
    <path class="m-p" ${getGlow('glutes')} fill="${getColor('glutes')}" d="M102 126 C94 124, 86 125, 85 134 C85 150, 94 158, 104 156 C110 152, 108 136, 102 126 Z" />

    <!-- Hamstrings -->
    <path class="m-p" ${getGlow('hamstrings')} fill="${getColor('hamstrings')}" d="M66 160 C63 178, 61 194, 64 206 C69 210, 76 210, 79 206 C80 190, 82 174, 82 160 Z" />
    <path class="m-p" ${getGlow('hamstrings')} fill="${getColor('hamstrings')}" d="M104 160 C107 178, 109 194, 106 206 C101 210, 94 210, 91 206 C90 190, 88 174, 88 160 Z" />

    <!-- Knees Back -->
    <ellipse cx="71" cy="214" rx="6" ry="4" class="b-bg" />
    <ellipse cx="99" cy="214" rx="6" ry="4" class="b-bg" />

    <!-- Calves Back -->
    <path class="m-p" ${getGlow('calves')} fill="${getColor('calves')}" d="M63 220 C59 238, 59 260, 65 288 C68 290, 73 290, 76 287 C78 262, 79 240, 76 220 Z" />
    <path class="m-p" ${getGlow('calves')} fill="${getColor('calves')}" d="M107 220 C111 238, 111 260, 105 288 C102 290, 97 290, 94 287 C92 262, 91 240, 94 220 Z" />

    <!-- Feet Back -->
    <path class="b-bg" d="M62 292 C58 300, 63 306, 75 306 L75 292 Z" />
    <path class="b-bg" d="M108 292 C112 300, 107 306, 95 306 L95 292 Z" />
  </g>
</svg>
  `;

  return `
    <div class="muscle-anatomy-card">
      <div class="muscle-anatomy-header">
        <h3 class="muscle-anatomy-title">Target muscles worked</h3>
      </div>
      <div class="muscle-anatomy-body">
        <div class="muscle-anatomy-svg-wrapper">
          ${svgHtml}
        </div>
        <div class="muscle-anatomy-legend">
          <div class="legend-group">
            <div class="legend-header">
              <span class="legend-dot primary"></span>
              <span class="legend-label">PRIMARY MUSCLES</span>
            </div>
            <div class="legend-items primary-text">
              ${primaryLabelsHtml}
            </div>
          </div>
          <div class="legend-group" style="margin-top:14px;">
            <div class="legend-header">
              <span class="legend-dot secondary"></span>
              <span class="legend-label">SECONDARY MUSCLES</span>
            </div>
            <div class="legend-items secondary-text">
              ${secondaryLabelsHtml}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function formGuideUrl(code) {
  const ex = EXERCISES[code];
  if (!ex) return "#";
  const q = ex.name.replace(/\(.*?\)/g, "").trim() + " proper form";
  return "https://www.youtube.com/results?search_query=" + encodeURIComponent(q);
}

function guideLinksHtml(code) {
  const ex = EXERCISES[code];
  const ytUrl = ex.yt
    ? (ex.yt.startsWith('http') ? ex.yt : 'https://www.youtube.com/watch?v=' + ex.yt)
    : formGuideUrl(code);
  const slug = ex.fitbod || FITBOD_SLUGS[code];
  const fbUrl = slug ? (slug.startsWith('http') ? slug : 'https://fitbod.me/exercises/' + slug) : null;

  let html = `<a class="btn full" style="text-decoration:none;" href="${esc(ytUrl)}" target="_blank" rel="noopener noreferrer">▶ ${ex.yt ? 'Watch Form Video' : 'Watch Form Guide'} ↗</a>`;
  if (fbUrl) {
    html += `<a class="btn ghost full" style="text-decoration:none;margin-top:8px;" href="${esc(fbUrl)}" target="_blank" rel="noopener noreferrer">Fitbod page ↗</a>`;
  }
  return html;
}

function demoImagesHtml(ex) {
  if (!ex.img) return '';
  const local = `images/${ex.img}/`;
  const remote = `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${ex.img}/`;
  const img = (n, cls) =>
    `<img class="demo-img ${cls}" src="${local}${n}.jpg" alt="${esc(ex.name)} position ${n + 1}" onerror="this.onerror=null;this.src='${remote}${n}.jpg'">`;
  return img(0, 'f1') + img(1, 'f2');
}

function openVideoModal(exCode, initialTab = 'about', fromLibrary = false) {
  const ex = EXERCISES[exCode];
  if (!ex) return;

  let overlay = document.getElementById('videoModal');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'videoModal';
    overlay.className = 'modal-overlay';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', e => {
      if (e.target === overlay) {
        closeVideoModal();
        closeExerciseLibraryModal();
      }
    });
  }

  const verified = VERIFIED_VIDEOS.includes(exCode);

  const equipArr = ex.equipmentList || (ex.equipment ? ex.equipment.split(',').map(s => s.trim()) : ['Gym Equipment']);
  const equipHtml = equipArr.map(eq => `<span class="fitbod-equip-chip"><span>🏋️</span> ${esc(eq)}</span>`).join('');

  // PRIMARY TARGETS
  const primaryMusclesArr = ex.primaryMuscles || [ex.target || "Target Muscle"];
  const primaryHtml = primaryMusclesArr.map(m => `<span class="modal-tag primary" style="font-weight:700;">🎯 ${esc(m)}</span>`).join('');

  // SECONDARY MUSCLES
  const secMusclesArr = ex.secondaryMuscles || (ex.muscles ? ex.muscles.filter(m => !primaryMusclesArr.includes(m)) : []);
  const secondaryHtml = secMusclesArr.length > 0
    ? secMusclesArr.map(m => `<span class="modal-tag secondary">⚡ ${esc(m)}</span>`).join('')
    : '<span style="font-size:13px;color:var(--mute);">None / Primarily isolated</span>';

  // STABILIZERS
  const stabilizersArr = ex.stabilizers || [];
  const stabHtml = stabilizersArr.length > 0
    ? stabilizersArr.map(m => `<span class="modal-tag stabilizer">🛡️ ${esc(m)}</span>`).join('')
    : '';

  // INSTRUCTIONS TAB STEPS
  const stepsHtml = (ex.steps || []).map((step, idx) => `
    <div class="guide-step"><span class="guide-step-num">${idx + 1}</span><span>${esc(step)}</span></div>`).join('');

  const altKeys = ex.alternatives || Object.keys(EXERCISES).filter(k => k !== exCode && EXERCISES[k].target === ex.target).slice(0, 3);
  const altHtml = altKeys.map(k => {
    const a = EXERCISES[k];
    if (!a) return '';
    return `
      <div class="alt-item" style="display:flex;justify-content:space-between;align-items:center;gap:10px;">
        <div style="display:flex;align-items:center;gap:10px;flex:1;cursor:pointer;" onclick="openVideoModal('${k}', 'about', ${fromLibrary ? 'true' : 'false'})">
          <div style="width:40px;height:40px;border-radius:6px;background:var(--bg-subtle);display:flex;align-items:center;justify-content:center;font-size:18px;overflow:hidden;flex-shrink:0;">
            ${a.img ? `<img src="images/${esc(a.img)}/0.jpg" onerror="this.src='https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${esc(a.img)}/0.jpg'" style="width:100%;height:100%;object-fit:cover;">` : '🏋️'}
          </div>
          <div>
            <div class="alt-name">${esc(a.name)}</div>
            <div class="alt-reason">${esc(a.category || a.target)} • ${esc(a.equipment || 'Alternative')}</div>
          </div>
        </div>
        <div style="display:flex;gap:6px;align-items:center;">
          <button class="btn ghost" style="padding:4px 8px;font-size:11px;" onclick="addExerciseToDay(sel, null, '${k}'); closeVideoModal(); closeExerciseLibraryModal(); render(); if (typeof showToast === 'function') showToast('Added ' + ${JSON.stringify(a.name).replace(/"/g, '&quot;')} + ' to today!');">+ Add to Today</button>
          <span style="font-size:16px;color:var(--accent);cursor:pointer;" onclick="openVideoModal('${k}', 'about', ${fromLibrary ? 'true' : 'false'})">➔</span>
        </div>
      </div>`;
  }).join('');

  const lastWeight = weights[exCode];
  const tabs = [
    ["about", "About", "panelAbout"],
    ["instructions", "Instructions", "panelInstructions"],
    ["reps", "Weight & Rest", "panelReps"],
    ["alternatives", "Alternatives", "panelAlternatives"]
  ];
  const tabBarHtml = tabs.map(t => `<button class="fitbod-tab ${initialTab === t[0] ? 'active' : ''}" data-target="${t[2]}">${t[1]}</button>`).join('');
  const show = name => (initialTab === name ? 'block' : 'none');

  overlay.innerHTML = `
    <div class="modal-sheet">
      <div class="modal-drag-bar"></div>
      <div class="modal-header" style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
        <div style="display:flex;align-items:center;gap:10px;min-width:0;flex:1;">
          ${fromLibrary ? `
            <button class="modal-back-btn" id="modalBackToLibBtn" aria-label="Back to Exercise Library" title="Back to Exercise Library">
              <span>←</span> <span>Exercise Library</span>
            </button>
          ` : ''}
          <h2 class="fitbod-title" style="margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${esc(ex.name)}</h2>
        </div>
        <button class="modal-close-btn" id="closeModalBtn" aria-label="Close to Home" title="Back to Home">×</button>
      </div>

      <div class="fitbod-layout">
        <div class="fitbod-media-col">
          <div class="video-wrapper" id="videoContainer">
            ${verified ? `<video id="exVideo" src="videos/${esc(exCode)}.mp4" autoplay loop muted playsinline preload="auto" controls></video>` : demoImagesHtml(ex)}
          </div>
          <div style="margin:8px 0 4px;">${guideLinksHtml(exCode)}</div>
          ${ex.cues ? `
            <div style="background:var(--bg-subtle);border:1px solid var(--line);border-radius:var(--radius-sm);padding:10px 12px;margin-top:10px;font-size:13px;line-height:1.4;">
              <span style="font-weight:700;color:var(--accent);display:block;margin-bottom:3px;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">💡 Form Cue</span>
              ${esc(ex.cues)}
            </div>` : ''}
        </div>

        <div class="fitbod-info-col">
          <div class="fitbod-tabs" id="modalTabBar">${tabBarHtml}</div>

          <!-- ABOUT TAB (WITH ANATOMICAL MUSCLE DIAGRAM & CLASSIFICATION) -->
          <div id="panelAbout" class="fitbod-tab-panel" style="display:${show('about')};">
            ${renderMuscleDiagram(exCode)}

            <div style="margin-top:14px;">
              <div style="font-size:11px;font-weight:800;color:var(--mute);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">
                EQUIPMENT & DETAILS
              </div>
              <div class="fitbod-equip-chips">${equipHtml}</div>
              ${ex.difficulty ? `<div style="font-size:12px;color:var(--mute);margin-top:6px;">Difficulty: <b style="color:var(--ink);">${esc(ex.difficulty)}</b></div>` : ''}
            </div>
          </div>

          <!-- INSTRUCTIONS TAB -->
          <div id="panelInstructions" class="fitbod-tab-panel" style="display:${show('instructions')};">
            ${ex.startPos ? `
              <div style="background:var(--bg-subtle);border-left:3px solid var(--accent);padding:10px 12px;border-radius:4px;margin-bottom:14px;font-size:13px;line-height:1.4;">
                <b style="color:var(--ink);display:block;margin-bottom:2px;">📍 Starting Position:</b>
                ${esc(ex.startPos)}
              </div>` : ''}

            <div class="fitbod-section-title">Step-by-Step Execution</div>
            ${stepsHtml}

            ${ex.breathing ? `
              <div style="background:rgba(59,130,246,0.1);border-left:3px solid #3b82f6;padding:10px 12px;border-radius:4px;margin:12px 0;font-size:13px;line-height:1.4;">
                <b style="color:#60a5fa;display:block;margin-bottom:2px;">💨 Breathing Guidance:</b>
                ${esc(ex.breathing)}
              </div>` : ''}

            ${ex.mistake ? `<div class="mistake-box"><b>⚠️ Common Mistake:</b> ${esc(ex.mistake)}</div>` : ''}

            ${ex.safety ? `
              <div style="background:rgba(239,68,68,0.1);border-left:3px solid #ef4444;padding:10px 12px;border-radius:4px;margin-top:10px;font-size:13px;line-height:1.4;">
                <b style="color:#f87171;display:block;margin-bottom:2px;">🛡️ Safety Consideration:</b>
                ${esc(ex.safety)}
              </div>` : ''}
          </div>

          <!-- WEIGHT & REST TAB -->
          <div id="panelReps" class="fitbod-tab-panel" style="display:${show('reps')};">
            <div class="fitbod-section-title">Working Weight & Rest Timer</div>
            <div class="reps-card">
              <div style="font-size:14px;margin-bottom:8px;">
                Current logged weight: <b>${lastWeight ? esc(lastWeight) + ' kg' : 'No weight set yet'}</b>
              </div>
              <div style="font-size:13px;line-height:1.4;color:var(--ink-secondary);margin-bottom:12px;">
                <b>Progressive Overload Rule:</b> When you complete all prescribed sets with clean form and zero breakdown, increase weight by 1–2.5 kg next session.
              </div>
              <div style="display:flex;gap:8px;">
                <button class="btn ghost full" id="modalStartTimer90">⏱️ 90s Timer</button>
                <button class="btn ghost full" id="modalStartTimer120">⏱️ 120s Timer</button>
              </div>
              <button class="btn ghost full" style="margin-top:8px;" onclick="openPlateCalculatorModal(${Number(lastWeight) || 60})">🏋️ Calculate Barbell Plates (${lastWeight ? lastWeight + 'kg' : '60kg'})</button>
            </div>
          </div>

          <!-- ALTERNATIVES TAB -->
          <div id="panelAlternatives" class="fitbod-tab-panel" style="display:${show('alternatives')};">
            <div class="fitbod-section-title">Exercise Alternatives</div>
            <div class="alt-list">${altHtml || '<div style="color:var(--mute);font-size:13px;">No alternatives mapped yet.</div>'}</div>
          </div>

          <div style="display:flex;gap:8px;margin-top:16px;">
            <button class="btn full" id="modalDoneBtn">Got It, Let's Lift! 💪</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Fallback video handling
  const container = document.getElementById('videoContainer');
  const showFallback = msg => {
    container.innerHTML = `
      <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:16px;color:var(--mute);font-size:14px;">
        <div style="font-size:32px;margin-bottom:6px;">🎬</div>
        <div>${msg}</div>
      </div>`;
  };
  const vid = document.getElementById('exVideo');
  if (!vid && !ex.img) {
    showFallback('No verified demo video yet. Use the form guide below.');
  } else if (vid) {
    vid.addEventListener('error', () => showFallback("This video couldn't load. Use the form guide below."));
    const p = vid.play();
    if (p && p.catch) p.catch(() => { });
    setTimeout(() => {
      if (document.getElementById('exVideo') === vid && vid.readyState < 2) {
        showFallback("This video is taking too long. Use the form guide below.");
      }
    }, 10000);
  }

  // Tabs
  const tabButtons = overlay.querySelectorAll('.fitbod-tab');
  tabButtons.forEach(btn => {
    btn.onclick = () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      overlay.querySelectorAll('.fitbod-tab-panel').forEach(p => p.style.display = 'none');
      const panel = document.getElementById(btn.dataset.target);
      if (panel) panel.style.display = 'block';
    };
  });

  const timer90Btn = document.getElementById('modalStartTimer90');
  if (timer90Btn) {
    timer90Btn.onclick = () => {
      startRestTimer(90, ex.name);
      closeVideoModal();
    };
  }
  const timer120Btn = document.getElementById('modalStartTimer120');
  if (timer120Btn) {
    timer120Btn.onclick = () => {
      startRestTimer(120, ex.name);
      closeVideoModal();
    };
  }

  const backLibBtn = document.getElementById('modalBackToLibBtn');
  if (backLibBtn) {
    backLibBtn.onclick = () => {
      closeVideoModal();
      openExerciseLibraryModal();
    };
  }

  document.getElementById('closeModalBtn').onclick = () => {
    closeVideoModal();
    closeExerciseLibraryModal();
  };
  document.getElementById('modalDoneBtn').onclick = () => {
    closeVideoModal();
    closeExerciseLibraryModal();
  };

  requestAnimationFrame(() => overlay.classList.add('active'));
}

function closeVideoModal() {
  const overlay = document.getElementById('videoModal');
  if (!overlay) return;
  const vid = document.getElementById('exVideo');
  if (vid) { vid.pause(); vid.removeAttribute('src'); vid.load(); }
  overlay.classList.remove('active');
  setTimeout(() => {
    if (!overlay.classList.contains('active')) overlay.innerHTML = '';
  }, 260);
}

window.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeVideoModal();
    closeExerciseLibraryModal();
    closeEditModal();
    closeAddExerciseModal();
    closeCopyWorkoutModal();
  }
});

// ==========================================================================
// EDIT EXERCISE MODAL (SETS, REPS, WEIGHT, NOTE)
// ==========================================================================
function openEditExerciseModal(dayIdx, groupIdx, exIdx) {
  const day = DAYS[dayIdx];
  if (!day || !day.g || !day.g[groupIdx] || !day.g[groupIdx][1][exIdx]) return;
  const item = day.g[groupIdx][1][exIdx];
  const exCode = item[0];
  const ex = EXERCISES[exCode] || { name: exCode };
  const currentWeight = weights[exCode] || "";

  let modal = document.getElementById("editExModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "editExModal";
    modal.className = "modal-overlay";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-sheet" style="max-width: 440px;">
      <div class="modal-drag-bar"></div>
      <div class="modal-header">
        <h2 class="fitbod-title">Edit Exercise</h2>
        <button class="modal-close-btn" onclick="closeEditModal()">×</button>
      </div>
      <div style="padding: 16px 20px;">
        <h3 style="margin: 0 0 4px; font-size: 18px; color: var(--ink);">${esc(ex.name)}</h3>
        <p style="margin: 0 0 16px; font-size: 13px; color: var(--mute);">${esc(day.t)} · ${esc(day.g[groupIdx][0])}</p>

        <div style="display:flex;gap:12px;margin-bottom:14px;">
          <label style="flex:1;font-size:12px;color:var(--mute);font-weight:600;">
            Planned Sets
            <input type="number" id="editSetsInput" min="1" max="10" value="${esc(item[1])}" style="width:100%;margin-top:4px;">
          </label>
          <label style="flex:1;font-size:12px;color:var(--mute);font-weight:600;">
            Target Reps Range
            <input type="text" id="editRepsInput" value="${esc(item[2])}" placeholder="e.g. 8–12" style="width:100%;margin-top:4px;">
          </label>
        </div>

        <div style="margin-bottom:14px;">
          <label style="font-size:12px;color:var(--mute);font-weight:600;display:block;">
            Working Weight (kg)
            <input type="number" id="editWeightInput" step="0.5" min="0" value="${esc(currentWeight)}" placeholder="0.0" style="width:100%;margin-top:4px;">
          </label>
        </div>

        <div style="margin-bottom:18px;">
          <label style="font-size:12px;color:var(--mute);font-weight:600;display:block;">
            Notes & Form Reminder
            <input type="text" id="editNoteInput" value="${esc(item[3] || '')}" placeholder="e.g. Set bench to notch 4" style="width:100%;margin-top:4px;">
          </label>
        </div>

        <div style="display:flex;gap:10px;">
          <button class="btn full" id="saveEditExBtn">Save Changes</button>
          <button class="btn ghost" onclick="closeEditModal()">Cancel</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("saveEditExBtn").onclick = () => {
    const newSets = Number(document.getElementById("editSetsInput").value) || item[1];
    const newReps = document.getElementById("editRepsInput").value.trim() || item[2];
    const newWeight = document.getElementById("editWeightInput").value.trim();
    const newNote = document.getElementById("editNoteInput").value.trim();

    updateExerciseConfig(dayIdx, groupIdx, exIdx, { sets: newSets, reps: newReps, note: newNote });

    if (newWeight !== "") {
      weights[exCode] = newWeight;
      store.set("gym-weights", weights);
    }

    closeEditModal();
    render();
  };

  requestAnimationFrame(() => modal.classList.add("active"));
}

function closeEditModal() {
  const modal = document.getElementById("editExModal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(() => modal.remove(), 260);
  }
}

// ==========================================================================
// ADD EXERCISE PICKER MODAL (SEARCH EXISTING 28 OR CUSTOM)
// ==========================================================================
function openAddExerciseModal(dayIdx, groupIdx) {
  let modal = document.getElementById("addExModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "addExModal";
    modal.className = "modal-overlay";
    document.body.appendChild(modal);
  }

  const day = DAYS[dayIdx];
  const groupName = (day && day.g && day.g[groupIdx]) ? day.g[groupIdx][0] : "Workout";

  let selectedCategory = "All";
  const gLower = groupName.toLowerCase();
  if (gLower.includes("chest") || gLower.includes("pec")) selectedCategory = "Chest";
  else if (gLower.includes("back") || gLower.includes("lat") || gLower.includes("pull")) selectedCategory = "Back";
  else if (gLower.includes("shoulder") || gLower.includes("delt")) selectedCategory = "Shoulders";
  else if (gLower.includes("arm") || gLower.includes("bicep") || gLower.includes("tricep")) selectedCategory = "Arms";
  else if (gLower.includes("leg") || gLower.includes("quad") || gLower.includes("glute") || gLower.includes("squat") || gLower.includes("hamstring")) selectedCategory = "Legs";
  else if (gLower.includes("abs") || gLower.includes("core")) selectedCategory = "Abs";

  let searchQ = "";
  const categories = ["All", "Chest", "Back", "Shoulders", "Arms", "Legs", "Abs"];

  function filterExercises() {
    const list = Object.entries(EXERCISES).map(([code, ex]) => ({ code, ...ex }));
    return list.filter(ex => {
      const matchSearch = !searchQ || 
        ex.name.toLowerCase().includes(searchQ.toLowerCase()) || 
        (ex.target && ex.target.toLowerCase().includes(searchQ.toLowerCase())) ||
        (ex.primaryMuscles && ex.primaryMuscles.some(m => m.toLowerCase().includes(searchQ.toLowerCase())));
      if (!matchSearch) return false;

      if (selectedCategory === "All") return true;
      const t = ((ex.target || '') + " " + (ex.primaryMuscles || []).join(" ")).toLowerCase();
      if (selectedCategory === "Chest") return t.includes("chest") || t.includes("pec");
      if (selectedCategory === "Back") return t.includes("back") || t.includes("lat") || t.includes("rhomboid");
      if (selectedCategory === "Shoulders") return t.includes("delt") || t.includes("shoulder") || t.includes("trap");
      if (selectedCategory === "Arms") return t.includes("bicep") || t.includes("tricep") || t.includes("arm");
      if (selectedCategory === "Legs") return t.includes("quad") || t.includes("hamstring") || t.includes("glute") || t.includes("calf") || t.includes("squat");
      if (selectedCategory === "Abs") return t.includes("abs") || t.includes("abdominis") || t.includes("core") || t.includes("oblique");
      return true;
    });
  }

  function renderAddModal() {
    const filtered = filterExercises();

    // Collect all exercises already on this day
    const existingCodes = new Set();
    const curPlan = DAYS[dayIdx];
    if (curPlan && curPlan.g) {
      curPlan.g.forEach(g => {
        if (Array.isArray(g[1])) {
          g[1].forEach(item => {
            if (item && item[0]) existingCodes.add(item[0]);
          });
        }
      });
    }

    modal.innerHTML = `
      <div class="modal-sheet" style="max-height:88vh;display:flex;flex-direction:column;">
        <div class="modal-drag-bar"></div>
        <div class="modal-header" style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
          <div style="display:flex;align-items:center;gap:10px;min-width:0;">
            <button class="modal-back-btn" onclick="closeAddExerciseModal()" aria-label="Cancel" title="Back to Workout">
              <span>←</span> <span>Back</span>
            </button>
            <div>
              <h2 class="fitbod-title" style="margin:0;font-size:20px;">+ Add Exercise</h2>
              <div style="font-size:13px;color:var(--mute);">Tap any exercise to add to today's workout • ${filtered.length} available</div>
            </div>
          </div>
          <button class="modal-close-btn" onclick="closeAddExerciseModal()" title="Close" aria-label="Close">×</button>
        </div>

        <div style="padding: 12px 16px; border-bottom: 1px solid var(--line);">
          <input type="text" id="addExSearchInput" value="${searchQ}" placeholder="🔍 Search exercises by name, muscle, or equipment..." style="width:100%;height:44px;padding:10px 16px;border-radius:10px;border:1px solid var(--line);background:var(--card);color:var(--ink);font-size:15px;margin-bottom:10px;">
          <div style="display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;">
            ${categories.map(cat => `
              <button class="library-filter-pill ${selectedCategory === cat ? 'active' : ''}" onclick="window.setAddExCategory('${cat}')">${cat}</button>
            `).join('')}
          </div>
        </div>

        <div style="flex:1;overflow-y:auto;padding:14px 16px;">
          <div class="library-card-grid">
            ${filtered.map(ex => {
              const isAdded = existingCodes.has(ex.code);
              return `
              <div class="ex-card-item add-ex-card ${isAdded ? 'is-added' : ''}" data-code="${esc(ex.code)}" data-name="${esc(ex.name)}">
                <div style="display:flex;align-items:center;gap:14px;min-width:0;flex:1;">
                  <div class="ex-card-thumb">
                    ${ex.img ? `<img src="images/${esc(ex.img)}/0.jpg" onerror="this.src='https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${esc(ex.img)}/0.jpg'" alt="${esc(ex.name)}">` : '🏋️'}
                  </div>
                  <div style="min-width:0;">
                    <div class="ex-card-name" style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
                      <span>${esc(ex.name)}</span>
                      ${isAdded ? `<span class="added-badge-pill">✓ In Workout</span>` : ''}
                    </div>
                    <div class="ex-card-sub">
                      <span class="ex-badge">${esc(ex.category || ex.target || 'General')}</span>
                      <span>• ${esc(ex.equipment || 'Exercise')}</span>
                    </div>
                  </div>
                </div>
                <div style="display:flex;align-items:center;gap:6px;" class="action-btn-slot">
                  ${isAdded ? `
                    <span class="btn-added-mark">✓ Added</span>
                  ` : `
                    <button type="button" class="btn btn-primary" style="padding:7px 14px;font-size:13px;font-weight:700;border-radius:20px;white-space:nowrap;pointer-events:none;">+ Add</button>
                  `}
                </div>
              </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;

    modal.querySelectorAll('.add-ex-card').forEach(card => {
      card.onclick = () => {
        const code = card.dataset.code;
        const name = card.dataset.name || code;

        // Show the mark immediately on the card
        card.classList.add('is-added');
        const slot = card.querySelector('.action-btn-slot');
        if (slot) {
          slot.innerHTML = `<span class="btn-added-mark animate-pop">✓ Added</span>`;
        }
        const nameEl = card.querySelector('.ex-card-name');
        if (nameEl && !nameEl.querySelector('.added-badge-pill')) {
          const b = document.createElement('span');
          b.className = 'added-badge-pill animate-pop';
          b.textContent = '✓ In Workout';
          nameEl.appendChild(b);
        }

        existingCodes.add(code);
        window._lastAddedExCode = code;
        const exObj = EXERCISES[code];
        const catName = (exObj && exObj.category) || groupName;
        addExerciseToDay(dayIdx, groupIdx, code);
        render();
        if (typeof showToast === 'function') {
          showToast(`Added ${name} to ${catName}!`);
        }

        setTimeout(() => {
          closeAddExerciseModal();
        }, 450);
      };
    });

    const searchInput = document.getElementById("addExSearchInput");
    if (searchInput) {
      searchInput.oninput = e => {
        searchQ = e.target.value;
        renderAddModal();
        const fresh = document.getElementById("addExSearchInput");
        if (fresh) { fresh.focus(); fresh.setSelectionRange(fresh.value.length, fresh.value.length); }
      };
    }
    window.setAddExCategory = cat => {
      selectedCategory = cat;
      renderAddModal();
    };
  }

  renderAddModal();
  requestAnimationFrame(() => modal.classList.add("active"));
}

function closeAddExerciseModal() {
  const modal = document.getElementById("addExModal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(() => modal.remove(), 260);
  }
}

// ==========================================================================
// TOAST NOTIFICATION HELPER
// ==========================================================================
function showToast(message, icon = "✅") {
  let toast = document.getElementById("appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.className = "app-toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span style="font-size:16px;">${icon}</span> <span>${esc(message)}</span>`;
  toast.classList.add("visible");
  if (window._toastTimeout) clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove("visible");
  }, 2600);
}

// Preset routines helper (standard splits)
function getPresetWorkouts() {
  const def = getDefaultProgram();
  const presets = [];
  def.forEach((d, idx) => {
    if (d.g && d.g.length > 0 && d.g.some(g => (g[1] || []).length > 0)) {
      const dayNamesFull = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      const exList = [];
      let setsTotal = 0;
      d.g.forEach(g => {
        (g[1] || []).forEach(item => {
          const ex = EXERCISES[item[0]];
          exList.push({
            code: item[0],
            name: ex ? ex.name : item[0],
            target: ex ? (ex.target || (ex.primaryMuscles && ex.primaryMuscles[0]) || "") : "",
            sets: item[1] || 3,
            reps: item[2] || "8–12",
            note: item[3] || "",
            groupName: g[0] || "Main Exercises"
          });
          setsTotal += Number(String(item[1]).slice(-1)) || 3;
        });
      });

      presets.push({
        dayIdx: idx,
        dayShort: d.d,
        dayFullName: dayNamesFull[idx] || d.d,
        title: d.t,
        color: d.c || "blue",
        isCurrentlyRest: false,
        hasExercises: true,
        exercises: exList,
        groups: d.g,
        setsTotal,
        previewStr: `💪 ${exList.slice(0, 3).map(e => e.name).join(', ')}${exList.length > 3 ? ' +' + (exList.length - 3) + ' more' : ''} (${setsTotal} sets)`
      });
    }
  });
  return presets;
}

// ==========================================================================
// COPY WORKOUT MODAL (SELECT ANY DAY / PRESET + CHOOSE EXERCISES)
// ==========================================================================
let _copyWorkoutState = {
  targetDayIdx: null,
  activeTab: "days" // "days" | "presets"
};

function openCopyWorkoutModal(targetDayIdx, activeTab = "days") {
  _copyWorkoutState.targetDayIdx = targetDayIdx;
  _copyWorkoutState.activeTab = activeTab;

  let modal = document.getElementById("copyWorkoutModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "copyWorkoutModal";
    modal.className = "modal-overlay";
    document.body.appendChild(modal);
  }

  const dayNamesFull = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const targetDay = DAYS[targetDayIdx];
  const targetName = dayNamesFull[targetDayIdx] || targetDay.d;

  // Render Days Tab Content
  let daysOptionsHtml = "";
  DAYS.forEach((d, idx) => {
    if (idx === targetDayIdx) return;
    const info = getDayWorkoutInfo(idx, DAYS);

    if (info.hasExercises) {
      const restPill = info.isCurrentlyRest
        ? `<span style="background:rgba(239,68,68,0.18);color:var(--accent);font-size:10px;font-weight:700;padding:2px 6px;border-radius:4px;margin-left:4px;">Resting</span>`
        : "";

      daysOptionsHtml += `
        <div class="picker-item copy-card-item" data-source-type="day" data-idx="${idx}" style="display:flex;justify-content:space-between;align-items:center;padding:12px;margin-bottom:10px;border-radius:10px;background:var(--card);border:1px solid var(--line);cursor:pointer;">
          <div style="flex:1;padding-right:12px;">
            <div style="font-weight:700;font-size:15px;color:var(--ink);display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
              <span style="background:var(--accent);color:#fff;font-size:11px;font-weight:800;padding:2px 6px;border-radius:4px;">${info.dayShort}</span>
              <span>${info.dayFullName}</span>
              <span style="font-size:13px;color:var(--ink-secondary);font-weight:600;">• ${esc(info.title)}</span>
              ${restPill}
            </div>
            <div style="font-size:12px;color:var(--mute);margin-top:4px;line-height:1.3;">
              ${esc(info.previewStr)}
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end;">
            <button class="btn btn-primary-copy copy-choose-btn" data-source-type="day" data-idx="${idx}" style="white-space:nowrap;padding:7px 12px;font-size:12px;font-weight:700;">
              Choose Exercises ➔
            </button>
            <button class="btn ghost copy-quick-btn" data-source-type="day" data-idx="${idx}" style="white-space:nowrap;padding:4px 8px;font-size:11px;color:var(--mute);">
              Copy All (${info.exercises.length})
            </button>
          </div>
        </div>
      `;
    } else {
      // Pure rest day
      daysOptionsHtml += `
        <div class="picker-item" style="display:flex;justify-content:space-between;align-items:center;padding:12px;margin-bottom:10px;border-radius:10px;background:var(--card);border:1px solid var(--line);opacity:0.85;">
          <div style="flex:1;padding-right:12px;">
            <div style="font-weight:700;font-size:15px;color:var(--ink);display:flex;align-items:center;gap:6px;">
              <span style="background:var(--line-highlight);color:var(--mute);font-size:11px;font-weight:800;padding:2px 6px;border-radius:4px;">${info.dayShort}</span>
              <span>${info.dayFullName}</span>
              <span style="font-size:13px;color:var(--ink-secondary);font-weight:600;">• Rest Day</span>
            </div>
            <div style="font-size:12px;color:var(--mute);margin-top:4px;line-height:1.3;">
              🧘 Rest Day (Active recovery & light walking)
            </div>
          </div>
          <button class="btn ghost copy-rest-btn" data-src="${idx}" style="white-space:nowrap;padding:6px 12px;font-size:11px;">
            Copy Rest Day
          </button>
        </div>
      `;
    }
  });

  // Render Presets Tab Content
  const presets = getPresetWorkouts();
  let presetsHtml = "";
  presets.forEach((p, pIdx) => {
    presetsHtml += `
      <div class="picker-item copy-card-item" data-source-type="preset" data-idx="${pIdx}" style="display:flex;justify-content:space-between;align-items:center;padding:12px;margin-bottom:10px;border-radius:10px;background:var(--card);border:1px solid var(--line);cursor:pointer;">
        <div style="flex:1;padding-right:12px;">
          <div style="font-weight:700;font-size:15px;color:var(--ink);display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
            <span style="background:var(--card-highlight);color:var(--accent);border:1px solid var(--accent);font-size:11px;font-weight:800;padding:2px 6px;border-radius:4px;">${p.dayShort} Preset</span>
            <span>${esc(p.title)}</span>
          </div>
          <div style="font-size:12px;color:var(--mute);margin-top:4px;line-height:1.3;">
            ${esc(p.previewStr)}
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end;">
          <button class="btn btn-primary-copy copy-choose-btn" data-source-type="preset" data-idx="${pIdx}" style="white-space:nowrap;padding:7px 12px;font-size:12px;font-weight:700;">
            Choose Exercises ➔
          </button>
          <button class="btn ghost copy-quick-btn" data-source-type="preset" data-idx="${pIdx}" style="white-space:nowrap;padding:4px 8px;font-size:11px;color:var(--mute);">
            Copy All (${p.exercises.length})
          </button>
        </div>
      </div>
    `;
  });

  modal.innerHTML = `
    <div class="modal-sheet" style="max-width:520px;max-height:88vh;display:flex;flex-direction:column;">
      <div class="modal-drag-bar"></div>
      <div class="modal-header">
        <div>
          <h2 class="fitbod-title" style="margin:0;">Copy Workout to ${targetName}</h2>
          <div style="font-size:12px;color:var(--mute);margin-top:2px;">Target day: <b>${targetName}</b> (${esc(targetDay.t)})</div>
        </div>
        <button class="modal-close-btn" onclick="closeCopyWorkoutModal()">×</button>
      </div>

      <!-- Tab Switcher -->
      <div style="display:flex;gap:8px;padding:8px 16px;background:var(--bg-subtle);border-bottom:1px solid var(--line);">
        <button class="copy-tab-btn ${activeTab === 'days' ? 'active' : ''}" id="tabDaysBtn" style="flex:1;padding:8px 12px;border-radius:6px;font-size:13px;font-weight:700;border:none;cursor:pointer;background:${activeTab === 'days' ? 'var(--card)' : 'transparent'};color:${activeTab === 'days' ? 'var(--ink)' : 'var(--mute)'};border:${activeTab === 'days' ? '1px solid var(--line)' : 'none'};">
          📅 Weekly Days
        </button>
        <button class="copy-tab-btn ${activeTab === 'presets' ? 'active' : ''}" id="tabPresetsBtn" style="flex:1;padding:8px 12px;border-radius:6px;font-size:13px;font-weight:700;border:none;cursor:pointer;background:${activeTab === 'presets' ? 'var(--card)' : 'transparent'};color:${activeTab === 'presets' ? 'var(--ink)' : 'var(--mute)'};border:${activeTab === 'presets' ? '1px solid var(--line)' : 'none'};">
          ⭐ Standard Splits
        </button>
      </div>

      <div style="flex:1;overflow-y:auto;padding:12px 16px;">
        <div id="tabDaysContent" style="display:${activeTab === 'days' ? 'block' : 'none'};">
          <div style="font-size:12px;color:var(--mute);margin-bottom:10px;">
            Select a day from your schedule. Even if a day was set to rest, its workout exercises are preserved and selectable below:
          </div>
          ${daysOptionsHtml}
        </div>
        <div id="tabPresetsContent" style="display:${activeTab === 'presets' ? 'block' : 'none'};">
          <div style="font-size:12px;color:var(--mute);margin-bottom:10px;">
            Choose from the original standard workout routines:
          </div>
          ${presetsHtml}
        </div>
      </div>
    </div>
  `;

  // Tab switching handlers
  const tabDaysBtn = document.getElementById("tabDaysBtn");
  const tabPresetsBtn = document.getElementById("tabPresetsBtn");
  const tabDaysContent = document.getElementById("tabDaysContent");
  const tabPresetsContent = document.getElementById("tabPresetsContent");

  if (tabDaysBtn && tabPresetsBtn) {
    tabDaysBtn.onclick = () => {
      _copyWorkoutState.activeTab = "days";
      tabDaysBtn.style.background = "var(--card)";
      tabDaysBtn.style.color = "var(--ink)";
      tabDaysBtn.style.border = "1px solid var(--line)";
      tabPresetsBtn.style.background = "transparent";
      tabPresetsBtn.style.color = "var(--mute)";
      tabPresetsBtn.style.border = "none";
      tabDaysContent.style.display = "block";
      tabPresetsContent.style.display = "none";
    };
    tabPresetsBtn.onclick = () => {
      _copyWorkoutState.activeTab = "presets";
      tabPresetsBtn.style.background = "var(--card)";
      tabPresetsBtn.style.color = "var(--ink)";
      tabPresetsBtn.style.border = "1px solid var(--line)";
      tabDaysBtn.style.background = "transparent";
      tabDaysBtn.style.color = "var(--mute)";
      tabDaysBtn.style.border = "none";
      tabDaysContent.style.display = "none";
      tabPresetsContent.style.display = "block";
    };
  }

  // Click delegation
  modal.onclick = e => {
    // 1. Copy Pure Rest Day
    const restBtn = e.target.closest(".copy-rest-btn");
    if (restBtn) {
      const srcIdx = Number(restBtn.dataset.src);
      copyDayProgram(srcIdx, targetDayIdx);
      closeCopyWorkoutModal();
      showToast(`🧘 Copied Rest Day to ${targetName}`);
      render();
      return;
    }

    // 2. Quick Copy All Button
    const quickBtn = e.target.closest(".copy-quick-btn");
    if (quickBtn) {
      e.stopPropagation();
      const type = quickBtn.dataset.sourceType;
      const idx = Number(quickBtn.dataset.idx);
      let info = null;
      if (type === "preset") {
        info = presets[idx];
      } else {
        info = getDayWorkoutInfo(idx, DAYS);
      }
      if (info && info.hasExercises) {
        applyCopiedExercises(targetDayIdx, info, info.exercises);
        closeCopyWorkoutModal();
        showToast(`Copied ${info.exercises.length} exercises from ${info.dayFullName || info.title} into ${targetName}!`);
        render();
      }
      return;
    }

    // 3. Choose Exercises Button / Card Click
    const chooseBtn = e.target.closest(".copy-choose-btn") || e.target.closest(".copy-card-item");
    if (chooseBtn) {
      const type = chooseBtn.dataset.sourceType;
      const idx = Number(chooseBtn.dataset.idx);
      let info = null;
      if (type === "preset") {
        info = presets[idx];
      } else {
        info = getDayWorkoutInfo(idx, DAYS);
      }
      if (info && info.hasExercises) {
        openCopyExerciseChoiceModal(targetDayIdx, info);
      }
      return;
    }
  };

  requestAnimationFrame(() => modal.classList.add("active"));
}

// STEP 2: EXERCISE CHOICE MODAL (SELECT/DESELECT SPECIFIC EXERCISES)
function openCopyExerciseChoiceModal(targetDayIdx, sourceInfo) {
  let modal = document.getElementById("copyWorkoutModal");
  if (!modal) return;

  const dayNamesFull = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const targetName = dayNamesFull[targetDayIdx] || (DAYS[targetDayIdx] && DAYS[targetDayIdx].d) || "Selected Day";

  const exercises = sourceInfo.exercises || [];

  let exercisesListHtml = "";
  exercises.forEach((item, exIdx) => {
    exercisesListHtml += `
      <label class="copy-ex-item" data-ex-idx="${exIdx}" style="display:flex;align-items:center;gap:12px;padding:11px 14px;background:var(--card);border:1px solid var(--line);border-radius:10px;cursor:pointer;transition:border-color 0.2s, background 0.2s;">
        <input type="checkbox" class="copy-ex-check" data-idx="${exIdx}" checked style="width:18px;height:18px;accent-color:var(--accent);cursor:pointer;flex-shrink:0;">
        <div style="flex:1;min-width:0;">
          <div style="font-weight:700;font-size:14px;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${esc(item.name)}</div>
          <div style="font-size:12px;color:var(--mute);display:flex;gap:8px;margin-top:3px;align-items:center;flex-wrap:wrap;">
            <span style="font-weight:600;color:var(--ink-secondary);">${esc(item.sets)} sets × ${esc(item.reps)}</span>
            <span>•</span>
            <span>${esc(item.groupName)}</span>
          </div>
        </div>
      </label>
    `;
  });

  modal.innerHTML = `
    <div class="modal-sheet" style="max-width:520px;max-height:88vh;display:flex;flex-direction:column;">
      <div class="modal-drag-bar"></div>
      
      <!-- Header with Back Button -->
      <div class="modal-header" style="align-items:flex-start;padding-bottom:10px;">
        <div>
          <button class="btn ghost" id="backToSourcesBtn" style="font-size:12px;padding:4px 8px;margin-bottom:6px;display:inline-flex;align-items:center;gap:4px;">
            ← Back to Day List
          </button>
          <h2 class="fitbod-title" style="font-size:22px;margin:0;">Choose Exercises</h2>
          <div style="font-size:12px;color:var(--mute);margin-top:2px;">
            From <b>${sourceInfo.dayFullName || sourceInfo.title}</b> (${esc(sourceInfo.title)}) ➔ <b>${targetName}</b>
          </div>
        </div>
        <button class="modal-close-btn" onclick="closeCopyWorkoutModal()">×</button>
      </div>

      <!-- Controls Row: Select All / Clear All & Counter -->
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:var(--bg-subtle);border-bottom:1px solid var(--line);">
        <button class="btn ghost" id="toggleSelectAllExBtn" style="font-size:12px;padding:4px 10px;font-weight:700;">
          Select All / None
        </button>
        <span id="selectedCountBadge" style="font-size:12px;font-weight:700;color:var(--accent);">
          ${exercises.length} of ${exercises.length} selected
        </span>
      </div>

      <!-- Scrollable Exercises List -->
      <div id="copyExerciseList" style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:8px;">
        ${exercisesListHtml}
      </div>

      <!-- Sticky Confirmation Footer -->
      <div style="padding:12px 16px;border-top:1px solid var(--line);background:var(--card);display:flex;flex-direction:column;gap:8px;">
        <button class="btn full" id="confirmCopySelectedBtn" style="font-weight:700;font-size:14px;padding:12px;">
          Copy ${exercises.length} Exercises to ${targetName} ➔
        </button>
      </div>
    </div>
  `;

  // Back button
  const backBtn = document.getElementById("backToSourcesBtn");
  if (backBtn) {
    backBtn.onclick = () => {
      openCopyWorkoutModal(targetDayIdx, _copyWorkoutState.activeTab);
    };
  }

  const checkboxes = modal.querySelectorAll(".copy-ex-check");
  const countBadge = document.getElementById("selectedCountBadge");
  const confirmBtn = document.getElementById("confirmCopySelectedBtn");
  const toggleAllBtn = document.getElementById("toggleSelectAllExBtn");

  function updateConfirmationState() {
    const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
    if (countBadge) {
      countBadge.textContent = `${checkedCount} of ${checkboxes.length} selected`;
    }
    if (confirmBtn) {
      if (checkedCount === 0) {
        confirmBtn.disabled = true;
        confirmBtn.textContent = "Select at least 1 exercise";
        confirmBtn.style.opacity = "0.5";
      } else {
        confirmBtn.disabled = false;
        confirmBtn.style.opacity = "1";
        confirmBtn.textContent = `Copy ${checkedCount} Selected Exercise${checkedCount > 1 ? 's' : ''} to ${targetName} ➔`;
      }
    }
  }

  // Toggle all button
  if (toggleAllBtn) {
    toggleAllBtn.onclick = () => {
      const allChecked = Array.from(checkboxes).every(cb => cb.checked);
      checkboxes.forEach(cb => {
        cb.checked = !allChecked;
      });
      updateConfirmationState();
    };
  }

  // Checkbox change listener
  checkboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      updateConfirmationState();
    });
  });

  // Confirm copy action
  if (confirmBtn) {
    confirmBtn.onclick = () => {
      const selected = [];
      checkboxes.forEach(cb => {
        if (cb.checked) {
          const idx = Number(cb.dataset.idx);
          if (exercises[idx]) selected.push(exercises[idx]);
        }
      });

      if (selected.length === 0) return;

      applyCopiedExercises(targetDayIdx, sourceInfo, selected);
      closeCopyWorkoutModal();
      showToast(`Copied ${selected.length} exercises into ${targetName}!`);
      render();
    };
  }
}

// APPLY COPIED EXERCISES TO TARGET DAY
function applyCopiedExercises(targetDayIdx, sourceInfo, selectedExercises) {
  const current = getProgram();
  const targetDay = current[targetDayIdx];
  if (!targetDay) return;

  targetDay.t = sourceInfo.title || "Custom Workout";
  targetDay.c = sourceInfo.color || "blue";
  targetDay.msg = ""; // Clear rest day message
  targetDay.savedConfig = null;

  // Group the selected exercises maintaining original grouping
  const groupMap = new Map();
  selectedExercises.forEach(item => {
    const gName = item.groupName || "Main Exercises";
    if (!groupMap.has(gName)) {
      groupMap.set(gName, []);
    }
    groupMap.get(gName).push([item.code, item.sets, item.reps, item.note || ""]);
  });

  targetDay.g = Array.from(groupMap.entries()).map(([gName, exs]) => [gName, exs]);

  saveProgram(current);
}

function closeCopyWorkoutModal() {
  const modal = document.getElementById("copyWorkoutModal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(() => modal.remove(), 260);
  }
}

// ==========================================================================
// WORKOUT SESSION COMPLETION MODAL
// ==========================================================================
function openSessionCompletionModal(completed) {
  let modal = document.getElementById("completionModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "completionModal";
    modal.className = "modal-overlay";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-sheet" style="max-width: 440px; text-align: center;">
      <div class="modal-drag-bar"></div>
      <div style="padding: 24px 20px;">
        <div style="font-size: 52px; margin-bottom: 8px;">🏆</div>
        <h2 style="font-family:'Barlow Condensed',sans-serif;font-size:32px;font-weight:700;color:var(--ink);margin:0 0 6px;">
          Workout Completed!
        </h2>
        <p style="font-size:14px;color:var(--mute);margin:0 0 20px;">
          Great job! Your session has been recorded into your training history.
        </p>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px;text-align:left;">
          <div style="background:var(--bg-subtle);padding:12px;border-radius:8px;">
            <div style="font-size:12px;color:var(--mute);">⏱️ Duration</div>
            <div style="font-size:22px;font-weight:700;color:var(--ink);">${completed.durationMins}m</div>
          </div>
          <div style="background:var(--bg-subtle);padding:12px;border-radius:8px;">
            <div style="font-size:12px;color:var(--mute);">💪 Completed Sets</div>
            <div style="font-size:22px;font-weight:700;color:var(--accent);">${completed.setsCount}</div>
          </div>
          <div style="background:var(--bg-subtle);padding:12px;border-radius:8px;grid-column:span 2;">
            <div style="font-size:12px;color:var(--mute);">🔥 Estimated Calorie Burn</div>
            <div style="font-size:22px;font-weight:700;color:#f97316;">${completed.kcalBurned} kcal</div>
          </div>
        </div>

        <button class="btn full" id="closeCompletionModalBtn">Save & View Summary</button>
      </div>
    </div>
  `;

  document.getElementById("closeCompletionModalBtn").onclick = () => {
    modal.classList.remove("active");
    setTimeout(() => modal.remove(), 260);
    render();
  };

  requestAnimationFrame(() => modal.classList.add("active"));
}

// ==========================================================================
// BACKUP & RESTORE JSON HANDLER
// ==========================================================================
function exportUserDataJson() {
  const data = {
    app: "My Gym Log",
    version: "2.0",
    profile: currentProfile || "wisakol",
    timestamp: new Date().toISOString(),
    goals: store.get("gym-goals"),
    program: store.get("gym-program"),
    weights: store.get("gym-weights"),
    foods: store.get("gym-foods"),
    walk: store.get("gym-walk"),
    sessions: store.get("gym-sessions")
  };

  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `gym-log-backup-${currentProfile || 'user'}-${getTodayKey()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importUserDataJson(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (!parsed || !parsed.app) {
        alert("Invalid backup file. Missing required My Gym Log data structure.");
        return;
      }
      if (confirm(`Import backup for "${parsed.profile || 'profile'}" from ${parsed.timestamp || 'previous save'}? This will safely update your program and saved weights.`)) {
        if (parsed.goals) store.set("gym-goals", parsed.goals);
        if (parsed.program) store.set("gym-program", parsed.program);
        if (parsed.weights) store.set("gym-weights", parsed.weights);
        if (parsed.foods) store.set("gym-foods", parsed.foods);
        if (parsed.walk) store.set("gym-walk", parsed.walk);
        if (parsed.sessions) store.set("gym-sessions", parsed.sessions);
        alert("Backup imported successfully!");
        location.reload();
      }
    } catch (err) {
      alert("Error parsing backup JSON file: " + err.message);
    }
  };
  reader.readAsText(file);
}

// ==========================================================================
// THEME MANAGEMENT
// ==========================================================================
function initTheme() {
  const saved = store.get("gym-theme");
  if (saved === "dark" || saved === "light") {
    document.documentElement.setAttribute("data-theme", saved);
  }
  updateThemeIcon();
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const isDark = current === "dark" || (!current && window.matchMedia("(prefers-color-scheme: dark)").matches);
  const next = isDark ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  store.set("gym-theme", next);
  updateThemeIcon();
}

function updateThemeIcon() {
  const current = document.documentElement.getAttribute("data-theme");
  const isDark = current === "dark" || (!current && window.matchMedia("(prefers-color-scheme: dark)").matches);
  const btn = document.getElementById("themeBtn");
  if (btn) btn.textContent = isDark ? "☀️" : "🌙";
}

function calculateStreak() {
  let streak = 0;
  for (let i = 0; i < 30; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const dateKey = ymd(d);
    const daySteps = (walkData[dateKey] && walkData[dateKey].steps) || 0;
    const ticks = getTicksData(dateKey);
    const hasWorkout = Object.keys(ticks).some(k => (ticks[k] || []).some(Boolean));

    if (daySteps >= (goals.steps || 8000) || hasWorkout) {
      streak++;
    } else if (i === 0) {
      continue;
    } else {
      break;
    }
  }
  return streak;
}

// ==========================================================================
// NAVIGATION & VIEWS
// ==========================================================================
const appEl = document.getElementById("app");

function renderBottomNav() {
  let navEl = document.getElementById("bottomNav");
  if (!navEl) {
    navEl = document.createElement("nav");
    navEl.id = "bottomNav";
    navEl.className = "bottom-nav";
    document.body.appendChild(navEl);
  }

  navEl.innerHTML = `
    <button class="nav-tab" data-t="w" aria-pressed="${tab === 'w'}">
      <span class="tab-icon">🏋️</span>
      <span class="tab-text">Workout</span>
    </button>
    <button class="nav-tab" data-t="f" aria-pressed="${tab === 'f'}">
      <span class="tab-icon">🥗</span>
      <span class="tab-text">Nutrition</span>
    </button>
    <button class="nav-tab" data-t="k" aria-pressed="${tab === 'k'}">
      <span class="tab-icon">👟</span>
      <span class="tab-text">Walk & Steps</span>
    </button>
    <button class="nav-tab" data-t="h" aria-pressed="${tab === 'h'}">
      <span class="tab-icon">📈</span>
      <span class="tab-text">Progress</span>
    </button>
  `;

  navEl.onclick = e => {
    const btn = e.target.closest("button.nav-tab");
    if (!btn || !btn.dataset.t) return;
    tab = btn.dataset.t;
    render();
  };
}

function render() {
  DAYS = getProgram();
  renderBottomNav();
  const accentColor = tab === "w" ? (DAYS[sel] ? DAYS[sel].c : "red") : (tab === "f" ? "green" : (tab === "k" ? "blue" : "purple"));
  document.documentElement.style.setProperty("--accent", `var(--${accentColor})`);

  if (tab === "w") {
    appEl.innerHTML = renderWorkoutView();
  } else if (tab === "f") {
    appEl.innerHTML = renderFoodView();
  } else if (tab === "k") {
    appEl.innerHTML = renderWalkView();
  } else {
    appEl.innerHTML = renderProgressView();
  }
}

// ==========================================================================
// 1. WORKOUT VIEW (EDITABLE, SESSIONS, MUSCLES, PERFORMANCE)
// ==========================================================================
function renderWorkoutView() {
  const selectedDate = getDateForDay(sel);
  const selectedDateStr = ymd(selectedDate);
  const ticks = getTicksData(selectedDateStr);
  const wo = getWorkoutData(selectedDateStr);

  const stravaHubHtml = renderStravaHub(selectedDateStr, sel);

  // Day strip
  let daysHtml = '<div class="days-strip" role="group" aria-label="Weekly Calendar">';
  DAYS.forEach((p, i) => {
    const dayDate = getDateForDay(i);
    const dayNum = dayDate.getDate();
    const isToday = i === todayIdx;
    const isSelected = i === sel;
    const dayTicks = getTicksData(ymd(dayDate));
    const hasFinishedSets = Object.keys(dayTicks).some(k => (dayTicks[k] || []).some(Boolean));
    const isRest = !p.g || p.g.length === 0;

    daysHtml += `
      <button class="day-btn ${isToday ? 'is-today' : ''} ${hasFinishedSets ? 'has-ticks' : ''} ${isRest ? 'is-rest' : ''}" data-i="${i}" aria-pressed="${isSelected}">
        <span class="day-label">${p.d}</span>
        <span class="day-num">${dayNum}</span>
        <span class="status-dot"></span>
      </button>
    `;
  });
  daysHtml += '</div>';

  const plan = DAYS[sel] || { t: "Day", g: [] };
  const isRest = !plan.g || plan.g.length === 0;

  // Active session banner
  const activeSession = getActiveSession();
  let sessionBannerHtml = "";
  if (activeSession && activeSession.status === "in_progress") {
    const elapsedMins = Math.max(1, Math.round((Date.now() - activeSession.startTime) / 60000));
    sessionBannerHtml = `
      <div class="active-session-banner">
        <div>
          <div style="font-weight:700;font-size:14px;color:var(--ink);">⚡ Workout in Progress</div>
          <div style="font-size:12px;color:var(--mute);">Started ${elapsedMins}m ago</div>
        </div>
        <div style="display:flex;gap:6px;">
          <button class="btn" id="finishWorkoutBtn" style="padding:6px 12px;font-size:12px;">Finish</button>
          <button class="btn ghost" id="cancelWorkoutBtn" style="padding:6px 8px;font-size:12px;">✕</button>
        </div>
      </div>
    `;
  } else if (!isRest) {
    sessionBannerHtml = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin: 10px 0;">
        <button class="btn ghost" id="startWorkoutBtn" style="font-size:13px;padding:6px 14px;">▶ Start Session Timer</button>
        <span style="font-size:12px;color:var(--mute);">${plan.d} Workout</span>
      </div>
    `;
  }

  // Day editor header controls
  const dayControlsHtml = `
    <div class="day-edit-toolbar">
      <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
        <span style="font-size:13px;font-weight:700;color:var(--ink);margin-right:2px;">
          📅 ${esc(plan.d)}
        </span>
        <button class="day-action-pill" id="editDayTitleBtn" title="Rename Day Title">✏️ Rename</button>
        <button class="day-action-pill" onclick="openPlateCalculatorModal(60)" title="Barbell Plate Calculator">🏋️ Plates</button>
        <button class="day-action-pill" onclick="openExerciseLibraryModal()" title="Browse Exercise Library">📚 Exercise Library (68)</button>
        <button class="day-action-pill ${isRest ? 'active' : ''}" id="toggleRestBtn" title="Toggle Rest Day">
          ${isRest ? '🏋️ Turn to Workout' : '🧘 Set as Rest'}
        </button>
      </div>
      <div style="display:flex;align-items:center;gap:6px;">
        <button class="day-action-pill" id="copyDayBtn" title="Copy workout from another day">📋 Copy from Day</button>
        <button class="day-action-pill" id="resetDayBtn" title="Reset this day to default">↺ Default</button>
      </div>
    </div>
  `;

  if (isRest) {
    const restMsg = plan.msg || "No lifting scheduled today. Focus on light walking, hydration, and recovery.";
    return daysHtml + stravaHubHtml + dayControlsHtml + `
      <div class="card" style="text-align: center; padding: 28px 16px;">
        <div style="font-size: 44px; margin-bottom: 8px;">🧘‍♂️</div>
        <h2 style="font-family: 'Barlow Condensed'; font-size: 30px; color: var(--ink); margin: 0 0 6px;">${esc(plan.t)}</h2>
        <p style="color: var(--mute); max-width: 320px; margin: 0 auto 18px; line-height: 1.5; font-size: 14px;">
          ${esc(restMsg)}
        </p>

        <div style="background: var(--bg-subtle); border-radius: var(--radius-md); padding: 16px; max-width: 360px; margin: 0 auto; text-align: left; border: 1px solid var(--line);">
          <div style="font-size: 12px; font-weight: 700; color: var(--accent); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
            🏋️ Want to workout today?
          </div>
          <p style="font-size: 13px; color: var(--mute); margin: 0 0 12px; line-height: 1.4;">
            Copy Monday, Tuesday, or any other scheduled workout straight to this day, or add exercises manually.
          </p>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <button class="btn full" onclick="openCopyWorkoutModal(${sel})">
              📋 Copy Monday, Tuesday or Any Day
            </button>
            <button class="btn ghost full" onclick="openAddExerciseModal(${sel}, 0)">
              + Add Exercises Manually
            </button>
          </div>
        </div>
      </div>
    `;
  }

  let doneSets = 0;
  let totalSets = 0;
  let groupsHtml = "";

  plan.g.forEach((group, gIdx) => {
    const groupName = group[0];
    const exercises = group[1];

    let groupExercisesHtml = "";
    exercises.forEach((item, exIdx) => {
      const code = item[0];
      const ex = EXERCISES[code] || { name: code, target: "", cues: "", primaryMuscles: [] };
      const setCount = Number(String(item[1]).slice(-1)) || 3;
      const key = `${sel}-${code}`;
      const setTicks = ticks[key] || [];

      totalSets += setCount;
      doneSets += setTicks.filter(Boolean).length;

      let setButtons = "";
      for (let s = 0; s < setCount; s++) {
        const isTicked = !!setTicks[s];
        setButtons += `<button class="set-btn" data-k="${esc(key)}" data-n="${s}" data-g="${gIdx}" data-ex="${exIdx}" aria-pressed="${isTicked}" aria-label="Set ${s + 1}">${s + 1}</button>`;
      }

      const noteText = item[3] ? `<div class="coach-note">💡 ${esc(item[3])}</div>` : "";
      const currentWeight = weights[code] || "";
      const isOpen = openDetails[key] ? " open" : "";

      // Performance
      const prevPerf = getPreviousPerformance(code);
      const perfBadge = prevPerf ? `<span class="perf-tag">${esc(prevPerf.formatted)}</span>` : "";

      groupExercisesHtml += `
        <details class="ex-card" data-id="${esc(key)}"${isOpen}>
          <summary class="ex-summary">
            <div class="ex-title-wrap">
              <div class="ex-title-row" style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
                <h3>${esc(ex.name)}</h3>
                ${window._lastAddedExCode === code ? `<span class="new-added-badge">✨ Newly Added</span>` : ''}
              </div>
              <div class="ex-meta-row">
                <span>${esc(item[1])} sets × ${esc(item[2])} reps</span>
                ${perfBadge}
              </div>
            </div>
            <div class="summary-right">
              <button class="btn-demo" data-demo="${esc(code)}" title="Watch Form Video">
                ▶ Demo
              </button>
              <span class="chev-icon">›</span>
            </div>
          </summary>
          <div class="ex-body">
            ${noteText}
            <div class="sets-row">
              ${setButtons}
              <label class="weight-input-wrap">
                kg
                <input type="number" inputmode="decimal" min="0" step="0.5" data-w="${esc(code)}" value="${esc(currentWeight)}" placeholder="0.0">
              </label>
            </div>
            <ul class="cue-box">
              <li><b>Form cue:</b> ${esc(ex.cues)}</li>
            </ul>
            <details class="card-anatomy-dropdown">
              <summary class="card-anatomy-summary">
                <span>🎯 View Target Muscles Worked</span>
                <span class="chev-icon">›</span>
              </summary>
              <div style="padding-top:8px;">
                ${renderMuscleDiagram(code)}
              </div>
            </details>
            <div class="ex-card-actions">
              <button class="card-action-btn" data-edit-ex="${sel}_${gIdx}_${exIdx}">✏️ Edit</button>
              <button class="card-action-btn" data-move-up="${sel}_${gIdx}_${exIdx}" ${exIdx === 0 ? 'disabled' : ''}>▲ Up</button>
              <button class="card-action-btn" data-move-down="${sel}_${gIdx}_${exIdx}" ${exIdx === exercises.length - 1 ? 'disabled' : ''}>▼ Down</button>
              <button class="card-action-btn danger" data-del-ex="${sel}_${gIdx}_${exIdx}">🗑️ Remove</button>
            </div>
          </div>
        </details>
      `;
    });

    groupsHtml += `
      <div class="muscle-group-container">
        <div class="section-title-row">
          <div class="section-title">${esc(groupName)}</div>
          <button class="add-ex-pill" data-add-group="${gIdx}">+ Add Exercise</button>
        </div>
        ${groupExercisesHtml || '<div style="color:var(--mute);font-size:13px;padding:8px 0;">No exercises in this group.</div>'}
      </div>
    `;
  });

  const effectiveBurn = getEffectiveWorkoutBurn(selectedDateStr, sel);

  return `
    ${daysHtml}
    ${stravaHubHtml}
    ${sessionBannerHtml}
    ${dayControlsHtml}
    
    <div class="workout-head">
      <h2>${esc(plan.t)}</h2>
      <span class="progress-pill">${doneSets} / ${totalSets} sets</span>
    </div>
    
    ${groupsHtml}

    <div style="text-align:center;margin: 16px 0;">
      <button class="btn ghost full" onclick="openAddExerciseModal(${sel}, 0)">+ Add Another Exercise</button>
    </div>

    ${currentProfile === "monik" ? `
      <details class="card" style="margin-top: 14px;">
        <summary style="font-weight: 700; font-size: 15px; color: #b388ff; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center;">
          <span>📖 Ate Monik's Training Rules</span>
          <span style="font-size: 12px; font-weight: 500; color: var(--mute);">Tap to view</span>
        </summary>
        <ul style="margin: 12px 0 0; padding-left: 18px; font-size: 13.5px; line-height: 1.6; color: var(--ink);">
          <li style="margin-bottom: 8px;"><b>Start light:</b> Use weights she can control with good form.</li>
          <li style="margin-bottom: 8px;"><b>Rest intervals:</b> Rest 1–2 minutes for smaller exercises and 2–3 minutes for harder compound exercises.</li>
          <li style="margin-bottom: 8px;"><b>Progress gradually:</b> Increase reps first, then add a little weight once she completes all reps with good form.</li>
          <li style="margin-bottom: 8px;"><b>Avoid training to failure:</b> Stop most sets with 2–3 good reps left.</li>
          <li style="margin-bottom: 8px;"><b>Muscle & fat loss:</b> Strength training builds muscle, but fat loss depends on nutrition and activity.</li>
          <li><b>Consistency:</b> Follow the program for 8–12 weeks and review progress.</li>
        </ul>
      </details>
    ` : ''}

    <div class="card" style="margin-top: 14px;">
      <h3>Workout Calorie Calculator</h3>
      <p style="font-size: 13px; color: var(--mute); margin: 0 0 10px;">
        Sets automatically compute calories burned based on exercise intensity & body weight (${goals.wt || 70}kg).
      </p>
      <div class="row">
        <input id="wom" type="number" inputmode="numeric" placeholder="Duration (min)" value="${esc(wo.min || "")}" aria-label="Minutes trained">
        <input id="wok" type="number" inputmode="numeric" placeholder="kcal override (optional)" value="${esc(wo.kcal || "")}" aria-label="Calories burned override">
      </div>
      <button class="btn full" id="wosave">Save Override</button>
      <p class="mute" style="margin: 8px 0 0; font-size: 13px;">
        Current Workout Burn: <b>${effectiveBurn} kcal</b> ${wo.kcal > 0 ? "(manual override)" : `(auto-calculated: ${doneSets} sets)`}
      </p>
    </div>

    <div class="foot-actions">
      <button class="btn ghost" id="rt">⏱️ 90s Timer</button>
      <button class="btn ghost" id="reset">Reset Sets</button>
    </div>
  `;
}

// ==========================================================================
// 2. FOOD VIEW (ENHANCED QUANTITY, EDITING, PREVIOUS DAYS)
// ==========================================================================
let foodDateOffset = 0; // 0 = today, -1 = yesterday, etc.

function getFoodActiveDate() {
  const d = new Date(now);
  d.setDate(d.getDate() + foodDateOffset);
  return d;
}

function renderFoodView() {
  const activeDate = getFoodActiveDate();
  const dateKey = ymd(activeDate);
  const isToday = foodDateOffset === 0;
  const foodList = getFoodData(dateKey);

  const stravaHubHtml = renderStravaHub(dateKey, (activeDate.getDay() + 6) % 7);

  let totalCalories = 0;
  let totalProtein = 0;
  foodList.forEach(item => {
    totalCalories += Number(item.k) || 0;
    totalProtein += Number(item.p) || 0;
  });

  const workoutBurn = getEffectiveWorkoutBurn(dateKey, (activeDate.getDay() + 6) % 7);
  const walkBurn = calcWalkBurn(walkData[dateKey]);
  const totalBurn = workoutBurn + walkBurn;
  const baseKcal = goals.kcal || 1900;
  const calorieTarget = baseKcal + totalBurn;
  const remainingKcal = calorieTarget - totalCalories;

  const calPercent = calorieTarget > 0 ? Math.min(100, Math.round(totalCalories / calorieTarget * 100)) : 0;
  const proteinPercent = goals.pro > 0 ? Math.min(100, Math.round(totalProtein / goals.pro * 100)) : 0;

  const mealCategories = ["Breakfast", "Lunch", "Dinner", "Snack"];

  let mealsHtml = "";
  if (!foodList.length) {
    mealsHtml = '<p class="mute" style="text-align: center; padding: 18px 0;">No meals logged yet for this date.</p>';
  } else {
    mealCategories.forEach(meal => {
      const items = foodList.map((f, idx) => ({ ...f, origIdx: idx })).filter(f => f.m === meal);
      if (!items.length) return;

      const itemsList = items.map(item => `
        <div class="item">
          <span>
            <b>${esc(item.n)}</b> ${item.qty ? `<span style="color:var(--mute);font-size:12px;">(${esc(item.qty)})</span>` : ''}<br>
            <span style="font-size: 13px; color: var(--mute);">${item.k} kcal${item.p ? ` · ${item.p}g protein` : ""}</span>
          </span>
          <div style="display:flex;align-items:center;gap:6px;">
            <button class="btn-icon" data-del-food="${item.origIdx}" aria-label="Remove item">×</button>
          </div>
        </div>
      `).join("");

      mealsHtml += `
        <div class="card">
          <h3>${esc(meal)}</h3>
          ${itemsList}
        </div>
      `;
    });
  }

  const foodOptions = Object.keys(foodLibrary).map(name =>
    `<option value="${esc(name)}">`
  ).join("");

  return `
    ${stravaHubHtml}

    <!-- Food Date Navigation Bar -->
    <div style="display:flex;justify-content:space-between;align-items:center;margin: 12px 0 16px;">
      <button class="day-action-pill" id="foodPrevDayBtn">‹ Previous Day</button>
      <span style="font-weight:700;font-size:14px;color:var(--ink);">
        ${isToday ? 'Today' : activeDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
      </span>
      <button class="day-action-pill" id="foodNextDayBtn" ${isToday ? 'disabled' : ''}>Next Day ›</button>
    </div>

    <div class="card">
      <div class="big-stat">${totalCalories} <span style="font-size: 20px; color: var(--mute);">/ ${calorieTarget} kcal</span></div>
      <div class="bar ${remainingKcal < 0 ? 'over' : ''}">
        <i style="width: ${calPercent}%"></i>
      </div>
      <div style="font-weight: 600; margin-top: 2px;">
        ${remainingKcal >= 0 ? `${remainingKcal} kcal remaining` : `<span style="color: var(--red);">${Math.abs(remainingKcal)} kcal over limit</span>`}
      </div>
      <div style="font-size: 12px; color: var(--mute); margin: 4px 0 10px;">
        Auto-adjusted: Base ${baseKcal} + Lift ${workoutBurn} + Walk ${walkBurn}
      </div>

      <div class="bar">
        <i style="width: ${proteinPercent}%; background: var(--blue);"></i>
      </div>
      <div style="font-size: 13px; color: var(--mute); font-weight: 600;">
        Protein: <b style="color: var(--ink);">${totalProtein}g</b> / ${goals.pro}g
      </div>

      <div class="row" style="margin-top: 14px;">
        <label style="flex: 1; font-size: 12px; color: var(--mute);">
          Base Calorie Target
          <input type="number" inputmode="numeric" data-g="kcal" value="${esc(goals.kcal || 1900)}">
        </label>
        <label style="flex: 1; font-size: 12px; color: var(--mute);">
          Protein Target (g)
          <input type="number" inputmode="numeric" data-g="pro" value="${esc(goals.pro)}">
        </label>
      </div>
    </div>

    <form class="card" id="foodForm" onsubmit="return false;">
      <h3>Log Meal ${!isToday ? `(${dateKey})` : ''}</h3>
      <div class="row">
        <input id="fn" list="fl" placeholder="Food name (e.g. Chicken breast)" autocomplete="off" required>
      </div>
      <div class="row">
        <input id="fq" type="text" placeholder="Portion/Qty (e.g. 150g)" style="flex:1;">
        <input id="fk" type="number" inputmode="numeric" min="0" placeholder="kcal" style="flex:1;" required>
        <input id="fp" type="number" inputmode="numeric" min="0" placeholder="protein (g)" style="flex:1;">
      </div>
      <div class="row">
        <select id="fm" style="width:100%;">
          ${mealCategories.map(m => `<option value="${m}">${m}</option>`).join("")}
        </select>
      </div>
      <button class="btn full" id="fa" type="submit">+ Add Food</button>
      <datalist id="fl">${foodOptions}</datalist>
    </form>

    ${mealsHtml}
  `;
}

// ==========================================================================
// 3. WALK VIEW (STRAVA-INSPIRED ACTIVITY TRACKER)
// ==========================================================================
function renderWalkView() {
  const todayKey = getTodayKey();
  const todayWalk = walkData[todayKey] || {};
  const daysHistory = [];
  let currentStreak = calculateStreak();

  const stravaHubHtml = renderStravaHub(todayKey, todayIdx);

  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const dateKey = ymd(d);
    const daySteps = (walkData[dateKey] && walkData[dateKey].steps) || 0;
    const dayLiftBurn = getEffectiveWorkoutBurn(dateKey, (d.getDay() + 6) % 7);
    const dayWalkBurn = calcWalkBurn(walkData[dateKey]);
    daysHistory.push({
      label: "SMTWTFS"[d.getDay()],
      steps: daySteps,
      liftBurn: dayLiftBurn,
      walkBurn: dayWalkBurn,
      totalBurn: dayLiftBurn + dayWalkBurn,
      isToday: i === 0
    });
  }

  const maxBurn = Math.max(...daysHistory.map(d => d.totalBurn), 600, 1);
  const stepsToday = todayWalk.steps || 0;
  const stepTarget = goals.steps || 8000;
  const percentDone = Math.min(100, Math.round(stepsToday / stepTarget * 100));
  const burnedKcal = calcWalkBurn(todayWalk);
  const distanceKm = stepsToDistance(stepsToday);

  const chartBars = daysHistory.map(day => {
    const barHeightPercent = Math.min(100, Math.round(day.totalBurn / maxBurn * 85));
    const isGoalMet = day.steps >= stepTarget;
    return `
      <div>
        <i class="${isGoalMet ? 'hit' : ''}" style="height: ${barHeightPercent}%"></i>
        <span>${day.label}${day.isToday ? '•' : ''}</span>
      </div>
    `;
  }).join("");

  return `
    ${stravaHubHtml}

    <div class="card">
      <div class="big-stat">${stepsToday.toLocaleString()} <span style="font-size: 20px; color: var(--mute);">/ ${stepTarget.toLocaleString()} steps</span></div>
      <div class="bar">
        <i style="width: ${percentDone}%"></i>
      </div>
      <div style="font-weight: 600; font-size: 14px; margin-top: 4px;">
        👟 <b>${distanceKm} km</b> walked · 🔥 <b>${burnedKcal} kcal</b> burned
      </div>
    </div>

    <form class="card" id="walkForm" onsubmit="return false;">
      <h3>Log Daily Walking (Auto-Calculated)</h3>
      <div class="row">
        <input id="ws" type="number" inputmode="numeric" min="0" placeholder="Step count (e.g. 8500)" value="${esc(todayWalk.steps || "")}">
        <input id="wm" type="number" inputmode="numeric" min="0" placeholder="Minutes walked (optional)" value="${esc(todayWalk.min || "")}">
      </div>
      <button class="btn full" id="wsave" type="submit">Update Activity</button>
      <div class="row" style="margin-top: 14px;">
        <label style="flex: 1; font-size: 12px; color: var(--mute);">
          Daily Step Goal
          <input type="number" inputmode="numeric" min="1000" data-g="steps" value="${esc(goals.steps)}">
        </label>
        <label style="flex: 1; font-size: 12px; color: var(--mute);">
          Body Weight (kg)
          <input type="number" inputmode="decimal" min="20" step="0.5" data-g="wt" value="${esc(goals.wt)}">
        </label>
      </div>
    </form>

    <div class="card">
      <h3>Last 7 Days (Total Activity Burn)</h3>
      <div class="chart">
        ${chartBars}
      </div>
      <p style="margin: 8px 0 0; font-size: 12px; color: var(--mute);">
        Combined daily calorie burn (Workout lifting + walking steps). Streak: <b>${currentStreak} days</b> 🔥
      </p>
    </div>
  `;
}

// ==========================================================================
// 4. PROGRESS & HISTORY DASHBOARD
// ==========================================================================
let selectedProgressEx = "inc";

function renderProgressView() {
  const sessions = getSessionsHistory();
  const allExCodes = Object.keys(EXERCISES);

  // Exercise progress details
  const ex = EXERCISES[selectedProgressEx] || EXERCISES.inc;
  const currentWeight = weights[selectedProgressEx];
  const pr = getExercisePR(selectedProgressEx);

  let sessionListHtml = "";
  if (!sessions.length) {
    sessionListHtml = '<p class="mute" style="text-align: center; padding: 18px 0;">No completed workout sessions recorded yet. Finish a workout to log history!</p>';
  } else {
    sessionListHtml = sessions.slice(0, 10).map(s => `
      <div class="item" style="padding: 10px 0; border-bottom: 1px solid var(--line);">
        <div>
          <b>${esc(s.title || 'Workout')}</b> · <span style="color:var(--mute);font-size:12px;">${s.dateKey}</span><br>
          <span style="font-size: 13px; color: var(--mute);">⏱️ ${s.durationMins || 0}m · 💪 ${s.setsCount || 0} sets · 🔥 ${s.kcalBurned || 0} kcal</span>
        </div>
        <span class="status-pill under" style="font-size:10px;">DONE</span>
      </div>
    `).join("");
  }

  return `
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <h3>📈 Exercise Progress Tracker</h3>
        <span class="badge" style="background:var(--accent);color:#fff;">${esc(ex.name)}</span>
      </div>

      <div style="margin-bottom:14px;">
        <label style="font-size:12px;color:var(--mute);font-weight:600;display:block;margin-bottom:4px;">
          Select Exercise
        </label>
        <select id="progressExSelect" style="width:100%;padding:10px;border-radius:8px;background:var(--card);color:var(--ink);border:1px solid var(--line);">
          ${allExCodes.map(code => `<option value="${code}" ${code === selectedProgressEx ? 'selected' : ''}>${esc(EXERCISES[code].name)} (${esc(EXERCISES[code].target)})</option>`).join("")}
        </select>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;">
        <div style="background:var(--bg-subtle);padding:12px;border-radius:8px;">
          <div style="font-size:12px;color:var(--mute);">Current Working Weight</div>
          <div style="font-size:22px;font-weight:700;color:var(--ink);">${currentWeight ? esc(currentWeight) + ' kg' : 'Not set'}</div>
        </div>
        <div style="background:var(--bg-subtle);padding:12px;border-radius:8px;">
          <div style="font-size:12px;color:var(--mute);">Personal Record</div>
          <div style="font-size:22px;font-weight:700;color:var(--accent);">${pr ? esc(pr.weight) + ' kg' : '—'}</div>
        </div>
      </div>


      <!-- 1RM Calculator Widget (Category 3) -->
      <div style="background:var(--card);border:1px solid var(--line);border-radius:8px;padding:12px;margin-bottom:14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <b style="font-size:13px;color:var(--ink);">🎯 1-Rep Max (1RM) Estimator</b>
          <button class="day-action-pill" onclick="openPlateCalculatorModal(weights[selectedProgressEx] || 60)">🏋️ Calculate Plates</button>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:8px;">
          <div>
            <label style="font-size:11px;color:var(--mute);display:block;margin-bottom:2px;">Lift Weight (kg)</label>
            <input type="number" id="calc1rmWeight" value="${currentWeight || 60}" step="2.5" style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--line);background:var(--bg-subtle);color:var(--ink);font-weight:700;">
          </div>
          <div>
            <label style="font-size:11px;color:var(--mute);display:block;margin-bottom:2px;">Reps Completed</label>
            <input type="number" id="calc1rmReps" value="8" min="1" max="30" style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--line);background:var(--bg-subtle);color:var(--ink);font-weight:700;">
          </div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;background:var(--bg-subtle);padding:8px 12px;border-radius:6px;">
          <span style="font-size:12px;color:var(--mute);">Estimated 1RM (Epley):</span>
          <span id="calc1rmResult" style="font-size:18px;font-weight:800;color:var(--accent);">
            ${Math.round((Number(currentWeight || 60)) * (1 + 8 / 30))} kg
          </span>
        </div>
      </div>

      <div style="background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.2);padding:12px;border-radius:8px;font-size:13px;line-height:1.4;">
        <b style="color:var(--accent);display:block;margin-bottom:3px;">💡 Progression Suggestion:</b>
        ${currentWeight ? `When you hit all prescribed sets for ${esc(ex.name)} at ${currentWeight}kg with crisp tempo, increase to ${Number(currentWeight) + 2.5}kg.` : 'Log your working weight during sets to generate custom progressive overload advice.'}
      </div>
    </div>

    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <h3>Workout History</h3>
        <span style="font-size:12px;color:var(--mute);">${sessions.length} sessions</span>
      </div>
      ${sessionListHtml}
    </div>

    <!-- Backup & Data Export Section -->
    <div class="card">
      <h3>Data Management & Offline PWA</h3>
      <p style="font-size:13px;color:var(--mute);margin:0 0 12px;line-height:1.4;">
        Your logs, custom programs, and nutrition are safely saved in local storage on this device.
      </p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        <button class="btn ghost" id="exportBackupBtn" style="flex:1;">💾 Export JSON</button>
        <button class="btn ghost" onclick="exportWorkoutsCsv()" style="flex:1;">📊 Export CSV</button>
        <button class="btn ghost" id="pwaInstallBtn" onclick="promptPwaInstall()" style="flex:1;display:none;background:var(--accent);color:#fff;">📲 Install App</button>
        <label class="btn ghost" style="flex:1;text-align:center;cursor:pointer;display:flex;align-items:center;justify-content:center;">
          📥 Import Backup
          <input type="file" id="importBackupInput" accept=".json" style="display:none;">
        </label>
      </div>
      <button class="btn ghost full" id="resetProgramBtn" style="margin-top:10px;color:var(--red);">↺ Reset Program to Default</button>
    </div>
  `;
}

// ==========================================================================
// PROFILE PICKER & HEADER
// ==========================================================================
function renderProfilePicker() {
  const headerDate = document.getElementById("headerDate");
  if (headerDate) headerDate.textContent = "Select Profile";
  const badge = document.getElementById("profileBadge");
  if (badge) badge.style.display = "none";
  const switchBtn = document.getElementById("switchProfileBtn");
  if (switchBtn) switchBtn.style.display = "none";

  appEl.innerHTML = `
    <div class="profile-picker-container" style="min-height: 72vh; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px 16px; text-align: center;">
      <div style="font-size: 54px; margin-bottom: 12px; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));">🏋️‍♀️</div>
      <h2 style="font-family: 'Barlow Condensed', sans-serif; font-size: 34px; font-weight: 700; color: var(--ink); margin: 0 0 8px; letter-spacing: 0.5px;">
        Who is training today?
      </h2>
      <p style="color: var(--mute); font-size: 15px; margin: 0 0 32px; max-width: 320px; line-height: 1.4;">
        Select your profile to load your personalized workout plan and tracking logs.
      </p>

      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 340px;">
        <button class="profile-card-btn wisakol" onclick="selectProfile('wisakol')">
          <div style="text-align: left;">
            <div style="font-family: 'Barlow Condensed', sans-serif; font-size: 26px; font-weight: 700; line-height: 1.1; color: var(--accent);">Wisakol</div>
            <div style="font-size: 13px; font-weight: 500; font-family: 'Barlow', sans-serif; color: var(--mute); margin-top: 4px;">Hypertrophy Program • Advanced Tracker</div>
          </div>
          <span style="font-size: 22px; color: var(--accent);">➔</span>
        </button>

        <button class="profile-card-btn monik" onclick="selectProfile('monik')">
          <div style="text-align: left;">
            <div style="font-family: 'Barlow Condensed', sans-serif; font-size: 26px; font-weight: 700; line-height: 1.1; color: #b388ff;">Ate Monik</div>
            <div style="font-size: 13px; font-weight: 500; font-family: 'Barlow', sans-serif; color: var(--mute); margin-top: 4px;">5-Day Beginner Program • Legs & Glutes Focus</div>
          </div>
          <span style="font-size: 22px; color: #b388ff;">➔</span>
        </button>
      </div>
    </div>
  `;
}

function initHeader() {
  const badge = document.getElementById("profileBadge");
  const switchBtn = document.getElementById("switchProfileBtn");
  const dateEl = document.getElementById("headerDate");

  if (currentProfile) {
    const profileName = currentProfile === "monik" ? "Ate Monik" : "Wisakol";
    if (badge) {
      badge.textContent = profileName;
      badge.style.display = "inline-flex";
      badge.className = "profile-badge " + (currentProfile === "monik" ? "monik" : "wisakol");
    }
    if (switchBtn) {
      switchBtn.style.display = "inline-flex";
      switchBtn.onclick = switchProfile;
    }
    if (dateEl) {
      const d = new Date();
      const options = { weekday: 'short', month: 'short', day: 'numeric' };
      dateEl.textContent = d.toLocaleDateString('en-US', options);
    }
  } else {
    if (badge) badge.style.display = "none";
    if (switchBtn) switchBtn.style.display = "none";
    if (dateEl) dateEl.textContent = "Select Profile";
  }
}

// ==========================================================================
// EVENT LISTENERS & GLOBAL INTERACTIONS
// ==========================================================================
document.getElementById("themeBtn").addEventListener("click", toggleTheme);

appEl.addEventListener("click", e => {
  const btn = e.target.closest("button");

  // Video demo button
  if (btn && btn.dataset.demo) {
    e.preventDefault();
    e.stopPropagation();
    openVideoModal(btn.dataset.demo);
    return;
  }

  // Day strip button
  if (btn && btn.dataset.i !== undefined) {
    sel = Number(btn.dataset.i);
    render();
    return;
  }

  // Set logging click
  if (btn && btn.classList.contains("set-btn")) {
    const key = btn.dataset.k;
    const setIdx = Number(btn.dataset.n);
    const selectedDateStr = getSelectedDateKey();
    const ticks = getTicksData(selectedDateStr);
    ticks[key] = ticks[key] || [];
    const isNowTicked = !ticks[key][setIdx];
    ticks[key][setIdx] = isNowTicked;
    store.set("gym-ticks-" + selectedDateStr, ticks);

    // Record in active session
    const exCode = key.split("-")[1];
    recordSetInSession(key, setIdx, isNowTicked, weights[exCode], "");

    // Trigger timer automatically on completion
    if (isNowTicked) {
      try { if (navigator.vibrate) navigator.vibrate(40); } catch(e){}
      let timerSecs = 90;
      if (currentProfile === "monik") {
        const ex = EXERCISES[exCode];
        if (ex && (ex.metType === "heavy" || ex.metType === "compound")) {
          timerSecs = 150;
        } else {
          timerSecs = 90;
        }
      }
      startRestTimer(timerSecs, (EXERCISES[exCode] && EXERCISES[exCode].name) || "Rest");
    }

    render();
    return;
  }

  // Edit exercise button on card
  if (btn && btn.dataset.editEx) {
    const [d, g, ex] = btn.dataset.editEx.split("_").map(Number);
    openEditExerciseModal(d, g, ex);
    return;
  }

  // Move exercise up
  if (btn && btn.dataset.moveUp) {
    const [d, g, ex] = btn.dataset.moveUp.split("_").map(Number);
    moveExerciseInDay(d, g, ex, -1);
    render();
    return;
  }

  // Move exercise down
  if (btn && btn.dataset.moveDown) {
    const [d, g, ex] = btn.dataset.moveDown.split("_").map(Number);
    moveExerciseInDay(d, g, ex, 1);
    render();
    return;
  }

  // Delete exercise
  if (btn && btn.dataset.delEx) {
    if (confirm("Remove this exercise from your workout day?")) {
      const [d, g, ex] = btn.dataset.delEx.split("_").map(Number);
      removeExerciseFromDay(d, g, ex);
      render();
    }
    return;
  }

  // Add exercise to group
  if (btn && btn.dataset.addGroup !== undefined) {
    openAddExerciseModal(sel, Number(btn.dataset.addGroup));
    return;
  }

  // Day editor buttons
  if (btn && btn.id === "editDayTitleBtn") {
    const curTitle = DAYS[sel].t;
    const newTitle = prompt("Enter workout title for this day:", curTitle);
    if (newTitle && newTitle.trim()) {
      updateDayTitle(sel, newTitle);
      render();
    }
    return;
  }

  if (btn && btn.id === "toggleRestBtn") {
    toggleRestDay(sel);
    render();
    return;
  }

  if (btn && btn.id === "copyDayBtn") {
    openCopyWorkoutModal(sel);
    return;
  }

  if (btn && btn.id === "resetDayBtn") {
    if (confirm(`Reset ${DAYS[sel].d} (${DAYS[sel].t}) to default program schedule?`)) {
      resetDayToDefault(sel);
      render();
    }
    return;
  }

  // Session controls
  if (btn && btn.id === "startWorkoutBtn") {
    startOrResumeWorkoutSession(sel);
    render();
    return;
  }

  if (btn && btn.id === "finishWorkoutBtn") {
    const completed = finishActiveWorkoutSession();
    if (completed) openSessionCompletionModal(completed);
    return;
  }

  if (btn && btn.id === "cancelWorkoutBtn") {
    if (confirm("Cancel active workout session?")) {
      cancelActiveWorkoutSession();
      render();
    }
    return;
  }

  // Reset sets button
  if (btn && btn.id === "reset") {
    if (confirm("Reset logged sets for this day?")) {
      const selectedDateStr = getSelectedDateKey();
      store.set("gym-ticks-" + selectedDateStr, {});
      render();
    }
    return;
  }

  // Rest timer 90s button
  if (btn && btn.id === "rt") {
    startRestTimer(90, "Rest");
    return;
  }

  // Food deletion
  if (btn && btn.dataset.delFood !== undefined) {
    const delIdx = Number(btn.dataset.delFood);
    const activeDate = getFoodActiveDate();
    const dateKey = ymd(activeDate);
    const foodList = getFoodData(dateKey);
    if (delIdx >= 0 && delIdx < foodList.length) {
      foodList.splice(delIdx, 1);
      store.set("gym-food-" + dateKey, foodList);
      render();
    }
    return;
  }

  // Food date navigation
  if (btn && btn.id === "foodPrevDayBtn") {
    foodDateOffset--;
    render();
    return;
  }
  if (btn && btn.id === "foodNextDayBtn") {
    foodDateOffset++;
    render();
    return;
  }

  // Add food button
  if (btn && btn.id === "fa") {
    submitFoodForm();
    return;
  }

  // Workout override save
  if (btn && btn.id === "wosave") {
    const minVal = Number(document.getElementById("wom").value) || 0;
    const kcalVal = Number(document.getElementById("wok").value) || 0;
    const selectedDateStr = getSelectedDateKey();
    store.set("gym-wo-" + selectedDateStr, { min: minVal, kcal: kcalVal });
    render();
    return;
  }

  // Walk activity save
  if (btn && btn.id === "wsave") {
    const stepsVal = Number(document.getElementById("ws").value) || 0;
    const minVal = Number(document.getElementById("wm").value) || 0;
    const todayKey = getTodayKey();
    walkData[todayKey] = { steps: stepsVal, min: minVal };
    store.set("gym-walk", walkData);
    render();
    return;
  }

  // Backup buttons
  if (btn && btn.id === "exportBackupBtn") {
    exportUserDataJson();
    return;
  }

  if (btn && btn.id === "saveDemosOfflineBtn") {
    saveAllDemosOffline();
    return;
  }

  if (btn && btn.id === "resetProgramBtn") {
    if (confirm("Reset entire weekly program to default? Your workout history and logged weights will be preserved.")) {
      resetProgram();
      render();
    }
    return;
  }
});

// Import backup file change listener
appEl.addEventListener("change", e => {
  if (e.target && e.target.id === "importBackupInput" && e.target.files && e.target.files[0]) {
    importUserDataJson(e.target.files[0]);
  } else if (e.target && e.target.id === "progressExSelect") {
    selectedProgressEx = e.target.value;
    render();
  }
});

// Live 1RM Calculator input listener
appEl.addEventListener("input", e => {
  if (e.target && (e.target.id === "calc1rmWeight" || e.target.id === "calc1rmReps")) {
    const wEl = document.getElementById("calc1rmWeight");
    const rEl = document.getElementById("calc1rmReps");
    const resEl = document.getElementById("calc1rmResult");
    if (wEl && rEl && resEl) {
      const w = Number(wEl.value) || 0;
      const r = Number(rEl.value) || 1;
      const est1rm = Math.round(w * (1 + r / 30));
      resEl.textContent = est1rm + " kg";
    }
  }
});

function submitFoodForm() {
  const nameEl = document.getElementById("fn");
  const qtyEl = document.getElementById("fq");
  const kcalEl = document.getElementById("fk");
  const proEl = document.getElementById("fp");
  const mealEl = document.getElementById("fm");
  if (!nameEl || !kcalEl) return;

  const foodName = nameEl.value.trim();
  const quantity = qtyEl ? qtyEl.value.trim() : "";
  const calories = Number(kcalEl.value);
  const protein = Number(proEl ? proEl.value : 0) || 0;
  const meal = mealEl ? mealEl.value : "Snack";

  if (!foodName || calories <= 0) {
    nameEl.focus();
    return;
  }

  const activeDate = getFoodActiveDate();
  const dateKey = ymd(activeDate);
  const foodList = getFoodData(dateKey);
  foodList.push({ n: foodName, qty: quantity, k: calories, p: protein, m: meal });

  foodLibrary[foodName.toLowerCase()] = { k: calories, p: protein };
  store.set("gym-food-" + dateKey, foodList);
  store.set("gym-foods", foodLibrary);
  render();
}

// Preserve accordion openness
appEl.addEventListener("toggle", e => {
  if (e.target.dataset && e.target.dataset.id) {
    openDetails[e.target.dataset.id] = e.target.open;
  }
}, true);

// Realtime weight input saving
appEl.addEventListener("input", e => {
  const weightId = e.target.dataset.w;
  if (weightId) {
    weights[weightId] = e.target.value;
    store.set("gym-weights", weights);
    return;
  }

  if (e.target.id === "fn") {
    const query = e.target.value.trim().toLowerCase();
    const entry = foodLibrary[query];
    if (entry) {
      const kcalEl = document.getElementById("fk");
      const proEl = document.getElementById("fp");
      if (kcalEl && !kcalEl.value) kcalEl.value = entry.k;
      if (proEl && !proEl.value && entry.p) proEl.value = entry.p;
    }
  }
});

// Goals change handler
appEl.addEventListener("change", e => {
  const target = e.target;
  if (target.dataset.g) {
    const goalKey = target.dataset.g;
    const num = Number(target.value);
    if (num > 0) {
      goals[goalKey] = num;
      store.set("gym-goals", goals);
      render();
    }
  }
});

// Enter key submit
appEl.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    if (e.target.closest("#foodForm")) {
      e.preventDefault();
      submitFoodForm();
    } else if (e.target.closest("#walkForm")) {
      e.preventDefault();
      const saveBtn = document.getElementById("wsave");
      if (saveBtn) saveBtn.click();
    }
  }
});


// ==========================================================================
// BARBELL PLATE CALCULATOR (CATEGORY 1)
// ==========================================================================
function closePlateCalculatorModal() {
  const m = document.getElementById("plateCalcModal");
  if (m) m.classList.remove("active");
}

function openPlateCalculatorModal(initialWeight = 60) {
  let modal = document.getElementById("plateCalcModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "plateCalcModal";
    modal.className = "modal-overlay";
    document.body.appendChild(modal);
    modal.addEventListener("click", e => {
      if (e.target === modal) closePlateCalculatorModal();
    });
  }

  let barWeight = 20;
  let targetWeight = Number(initialWeight) || 60;

  function calculatePlates(target, bar) {
    const plates = [25, 20, 15, 10, 5, 2.5, 1.25];
    let remainingPerSide = Math.max(0, (target - bar) / 2);
    const result = [];
    plates.forEach(p => {
      const count = Math.floor(remainingPerSide / p);
      if (count > 0) {
        for (let i = 0; i < count; i++) result.push(p);
        remainingPerSide = Math.round((remainingPerSide - count * p) * 100) / 100;
      }
    });
    return { plates: result, remainder: remainingPerSide };
  }

  function renderCalc() {
    const { plates, remainder } = calculatePlates(targetWeight, barWeight);
    const sideWeight = Math.max(0, (targetWeight - barWeight) / 2);
    
    const counts = {};
    plates.forEach(p => counts[p] = (counts[p] || 0) + 1);
    const summaryText = Object.keys(counts).length ? 
      Object.entries(counts).map(([p, c]) => `${c} × ${p}kg`).join(' + ') : 'None (Bar only)';

    // Build plate discs HTML for one side
    const platesHtml = plates.map(p => {
      const cls = 'p' + String(p).replace('.', '_');
      return `<div class="plate-disc ${cls}">${p}</div>`;
    }).join('');
    // Reversed plates for left side (largest plate nearest bar)
    const platesHtmlRev = [...plates].reverse().map(p => {
      const cls = 'p' + String(p).replace('.', '_');
      return `<div class="plate-disc ${cls}">${p}</div>`;
    }).join('');

    const fullBarbellHtml = `
      <div style="display:flex;align-items:center;justify-content:center;overflow-x:auto;padding:12px 4px;">
        <!-- Left end cap -->
        <div style="width:12px;height:24px;background:var(--mute);border-radius:3px 0 0 3px;flex-shrink:0;"></div>
        <!-- Left collar -->
        <div style="width:8px;height:30px;background:#6b7280;flex-shrink:0;"></div>
        <!-- Left plates (reversed — biggest nearest bar) -->
        <div style="display:flex;flex-direction:row-reverse;align-items:center;gap:1px;">
          ${platesHtmlRev || '<div style="width:4px;height:20px;background:transparent;"></div>'}
        </div>
        <!-- Left collar clamp -->
        <div style="width:6px;height:26px;background:#9ca3af;flex-shrink:0;"></div>
        <!-- Center bar shaft -->
        <div style="flex:1;min-width:60px;max-width:120px;height:10px;background:linear-gradient(180deg,#94a3b8 0%,#475569 50%,#94a3b8 100%);border-radius:2px;position:relative;">
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;color:#fff;letter-spacing:0.5px;">${barWeight}kg</div>
        </div>
        <!-- Right collar clamp -->
        <div style="width:6px;height:26px;background:#9ca3af;flex-shrink:0;"></div>
        <!-- Right plates -->
        <div style="display:flex;flex-direction:row;align-items:center;gap:1px;">
          ${platesHtml || '<div style="width:4px;height:20px;background:transparent;"></div>'}
        </div>
        <!-- Right collar -->
        <div style="width:8px;height:30px;background:#6b7280;flex-shrink:0;"></div>
        <!-- Right end cap -->
        <div style="width:12px;height:24px;background:var(--mute);border-radius:0 3px 3px 0;flex-shrink:0;"></div>
      </div>
    `;

    modal.innerHTML = `
      <div class="modal-sheet">
        <div class="modal-drag-bar"></div>
        <div class="modal-header">
          <h2 class="fitbod-title">🏋️ Barbell Plate Calculator</h2>
          <button class="modal-close-btn" onclick="closePlateCalculatorModal()">×</button>
        </div>
        <div style="padding: 14px 16px;">
          <!-- Target Weight input -->
          <div style="margin-bottom: 12px;">
            <label style="font-size:12px;font-weight:700;color:var(--mute);display:block;margin-bottom:4px;">TOTAL TARGET WEIGHT (KG)</label>
            <div style="display:flex;gap:8px;">
              <input type="number" id="plateTargetInput" value="${targetWeight}" step="2.5" min="${barWeight}" style="flex:1;padding:12px 14px;font-size:22px;font-weight:800;border-radius:8px;border:1px solid var(--line);background:var(--card);color:var(--ink);">
              <button class="btn ghost" id="plateMinusBtn" style="padding:0 14px;font-size:18px;">-2.5</button>
              <button class="btn ghost" id="platePlusBtn" style="padding:0 14px;font-size:18px;">+2.5</button>
            </div>
          </div>

          <!-- Barbell Weight selector -->
          <div style="margin-bottom: 14px;">
            <label style="font-size:12px;font-weight:700;color:var(--mute);display:block;margin-bottom:6px;">BARBELL WEIGHT</label>
            <div style="display:grid;grid-template-columns:repeat(4, 1fr);gap:6px;">
              ${[20, 15, 10, 7].map(bw => `
                <button class="btn ghost ${barWeight === bw ? 'primary' : ''}" style="padding:8px 0;font-size:12px;font-weight:700;${barWeight === bw ? 'background:var(--accent);color:#fff;border-color:var(--accent);' : ''}" onclick="window.setBarWeight(${bw})">
                  ${bw} kg ${bw === 20 ? '(Olympic)' : bw === 7 ? '(EZ)' : ''}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Full Barbell Visualizer -->
          <label style="font-size:12px;font-weight:700;color:var(--mute);display:block;margin-bottom:4px;">FULL BARBELL LOADING</label>
          <div style="background:var(--card);border:1px solid var(--line);border-radius:10px;overflow:hidden;margin-bottom:12px;">
            ${fullBarbellHtml}
          </div>

          <!-- Summary Box -->
          <div class="plate-summary-box">
            <div class="plate-summary-title">Each Side (${sideWeight} kg)</div>
            <div class="plate-summary-text">${summaryText}</div>
            ${remainder > 0 ? `<div style="font-size:12px;color:var(--red);margin-top:4px;">⚠️ ${remainder * 2}kg difference with standard plates</div>` : ''}
          </div>

          <!-- Quick Weight Presets -->
          <div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;margin-top:10px;">
            ${[40, 60, 80, 100, 120, 140].map(w => `
              <button class="btn ghost" style="padding:6px 10px;font-size:12px;" onclick="window.setTargetWeight(${w})">${w}kg</button>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    const input = document.getElementById("plateTargetInput");
    if (input) {
      input.oninput = e => {
        targetWeight = Number(e.target.value) || barWeight;
        renderCalc();
      };
    }
    const minus = document.getElementById("plateMinusBtn");
    if (minus) {
      minus.onclick = () => {
        targetWeight = Math.max(barWeight, targetWeight - 2.5);
        renderCalc();
      };
    }
    const plus = document.getElementById("platePlusBtn");
    if (plus) {
      plus.onclick = () => {
        targetWeight = targetWeight + 2.5;
        renderCalc();
      };
    }

    window.setBarWeight = bw => {
      barWeight = bw;
      if (targetWeight < barWeight) targetWeight = barWeight;
      renderCalc();
    };
    window.setTargetWeight = tw => {
      targetWeight = tw;
      renderCalc();
    };
  }

  renderCalc();
  requestAnimationFrame(() => modal.classList.add("active"));
}

// ==========================================================================
// EXERCISE LIBRARY BROWSER (ALL 68 EXERCISES)
// ==========================================================================
function closeExerciseLibraryModal() {
  const m = document.getElementById("exLibraryModal");
  if (m) m.classList.remove("active");
}

function openExerciseLibraryModal() {
  let modal = document.getElementById("exLibraryModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "exLibraryModal";
    modal.className = "modal-overlay";
    document.body.appendChild(modal);
    modal.addEventListener("click", e => {
      if (e.target === modal) closeExerciseLibraryModal();
    });
  }

  let selectedCategory = "All";
  let searchQ = "";

  const categories = ["All", "Chest", "Back", "Shoulders", "Arms", "Legs", "Abs"];

  function filterExercises() {
    const list = Object.entries(EXERCISES).map(([code, ex]) => ({ code, ...ex }));
    return list.filter(ex => {
      const matchSearch = !searchQ || 
        ex.name.toLowerCase().includes(searchQ.toLowerCase()) || 
        (ex.target && ex.target.toLowerCase().includes(searchQ.toLowerCase())) ||
        (ex.primaryMuscles && ex.primaryMuscles.some(m => m.toLowerCase().includes(searchQ.toLowerCase())));
      if (!matchSearch) return false;

      if (selectedCategory === "All") return true;
      const t = ((ex.target || '') + " " + (ex.primaryMuscles || []).join(" ")).toLowerCase();
      if (selectedCategory === "Chest") return t.includes("chest") || t.includes("pec");
      if (selectedCategory === "Back") return t.includes("back") || t.includes("lat") || t.includes("rhomboid");
      if (selectedCategory === "Shoulders") return t.includes("delt") || t.includes("shoulder") || t.includes("trap");
      if (selectedCategory === "Arms") return t.includes("bicep") || t.includes("tricep") || t.includes("arm");
      if (selectedCategory === "Legs") return t.includes("quad") || t.includes("hamstring") || t.includes("glute") || t.includes("calf") || t.includes("squat");
      if (selectedCategory === "Abs") return t.includes("abs") || t.includes("abdominis") || t.includes("core") || t.includes("oblique");
      return true;
    });
  }

  function renderLibrary() {
    const filtered = filterExercises();

    modal.innerHTML = `
      <div class="modal-sheet" style="max-height:88vh;display:flex;flex-direction:column;">
        <div class="modal-drag-bar"></div>
        <div class="modal-header" style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
          <div style="display:flex;align-items:center;gap:10px;min-width:0;">
            <button class="modal-back-btn" onclick="closeExerciseLibraryModal()" aria-label="Back to Home" title="Back to Home">
              <span>←</span> <span>Home</span>
            </button>
            <div>
              <h2 class="fitbod-title" style="margin:0;font-size:20px;">📚 Exercise Library</h2>
              <div style="font-size:13px;color:var(--mute);">${filtered.length} of ${Object.keys(EXERCISES).length} exercises</div>
            </div>
          </div>
          <button class="modal-close-btn" onclick="closeExerciseLibraryModal()" title="Close to Home" aria-label="Close to Home">×</button>
        </div>

        <div style="padding: 12px 16px; border-bottom: 1px solid var(--line);">
          <input type="text" id="libSearchInput" value="${searchQ}" placeholder="🔍 Search by name, target, or equipment..." style="width:100%;height:44px;padding:10px 16px;border-radius:10px;border:1px solid var(--line);background:var(--card);color:var(--ink);font-size:15px;margin-bottom:10px;">
          <div style="display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;">
            ${categories.map(cat => `
              <button class="library-filter-pill ${selectedCategory === cat ? 'active' : ''}" onclick="window.setLibCategory('${cat}')">${cat}</button>
            `).join('')}
          </div>
        </div>

        <div style="flex:1;overflow-y:auto;padding:14px 16px;">
          <div class="library-card-grid">
            ${filtered.map(ex => `
              <div class="ex-card-item" onclick="closeExerciseLibraryModal(); openVideoModal('${ex.code}', 'about', true);">
                <div style="display:flex;align-items:center;gap:14px;min-width:0;flex:1;">
                  <div class="ex-card-thumb">
                    ${ex.img ? `<img src="images/${esc(ex.img)}/0.jpg" onerror="this.src='https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${esc(ex.img)}/0.jpg'" alt="${esc(ex.name)}">` : '🏋️'}
                  </div>
                  <div style="min-width:0;">
                    <div class="ex-card-name">${esc(ex.name)}</div>
                    <div class="ex-card-sub">
                      <span class="ex-badge">${esc(ex.category || ex.target || 'General')}</span>
                      <span>• ${esc(ex.equipment || 'Exercise')}</span>
                    </div>
                  </div>
                </div>
                <div style="color:var(--accent);font-size:18px;font-weight:700;padding-right:4px;">➔</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    const searchInput = document.getElementById("libSearchInput");
    if (searchInput) {
      searchInput.oninput = e => {
        searchQ = e.target.value;
        renderLibrary();
        const fresh = document.getElementById("libSearchInput");
        if (fresh) { fresh.focus(); fresh.setSelectionRange(fresh.value.length, fresh.value.length); }
      };
    }
    window.setLibCategory = cat => {
      selectedCategory = cat;
      renderLibrary();
    };
  }

  renderLibrary();
  requestAnimationFrame(() => modal.classList.add("active"));
}

// ==========================================================================
// CSV EXPORT (CATEGORY 3)
// ==========================================================================
function exportWorkoutsCsv() {
  const allDates = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith("gym-ticks-")) {
      const dt = key.replace("gym-ticks-", "");
      if (dt && !allDates.includes(dt)) allDates.push(dt);
    }
  }
  allDates.sort();

  let csv = "Date,Day_Index,Exercise_Code,Exercise_Name,Target,Set_Number,Completed,Logged_Weight_Kg\n";
  allDates.forEach(dt => {
    const ticks = store.get("gym-ticks-" + dt) || {};
    Object.entries(ticks).forEach(([k, setArr]) => {
      const parts = k.split("-");
      const dayIdx = parts[0];
      const exCode = parts[1];
      const ex = EXERCISES[exCode] || { name: exCode, target: "" };
      const w = weights[exCode] || "";
      if (Array.isArray(setArr)) {
        setArr.forEach((done, sIdx) => {
          csv += `"${dt}",${dayIdx},"${exCode}","${ex.name.replace(/"/g, '""')}","${(ex.target || '').replace(/"/g, '""')}",${sIdx + 1},${done ? 'YES' : 'NO'},"${w}"\n`;
        });
      }
    });
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `gym-workout-log-${ymd(new Date())}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ==========================================================================
// PWA INSTALLATION HELPER (CATEGORY 4)
// ==========================================================================
let deferredInstallPrompt = null;
window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const pwaBtn = document.getElementById("pwaInstallBtn");
  if (pwaBtn) pwaBtn.style.display = "inline-flex";
});

function promptPwaInstall() {
  if (!deferredInstallPrompt) {
    alert("To install this app on your phone:\n\n• On iPhone (Safari): Tap the Share button ➔ 'Add to Home Screen'\n• On Android (Chrome): Tap the 3 dots ➔ 'Install app' or 'Add to Home screen'");
    return;
  }
  deferredInstallPrompt.prompt();
  deferredInstallPrompt.userChoice.then(choiceResult => {
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted PWA installation");
    }
    deferredInstallPrompt = null;
  });
}


// Offline / Online detection banner
function updateOfflineBanner() {
  const banner = document.getElementById('offlineBanner');
  if (banner) {
    banner.style.display = navigator.onLine ? 'none' : 'block';
  }
}

window.addEventListener('online', updateOfflineBanner);
window.addEventListener('offline', updateOfflineBanner);

// ==========================================================================
// STARTUP INITIALIZATION
// ==========================================================================
updateOfflineBanner();
initTheme();
initHeader();
if (!currentProfile) {
  renderProfilePicker();
} else {
  render();
}
