// --------------------
// WORD DATA
// --------------------
const wordSets = {
  controlled_or: [
    { word: "fort", parts: ["f", "or", "t"], image: "zimages/controlledr_or/fort" },
    { word: "porch", parts: ["p", "or", "ch"], image: "zimages/controlledr_or/porch" },
    { word: "short", parts: ["sh", "or", "t"], image: "zimages/controlledr_or/short" },
    { word: "sport", parts: ["sp", "or", "t"], image: "zimages/controlledr_or/sport" },
    { word: "stork", parts: ["st", "or", "k"], image: "zimages/controlledr_or/stork" },
    { word: "storm", parts: ["st", "or", "m"], image: "zimages/controlledr_or/storm" },
    { word: "sword", parts: ["s", "w", "or", "d"], image: "zimages/controlledr_or/sword" },
    { word: "thorn", parts: ["th", "or", "n"], image: "zimages/controlledr_or/thorn" }
  ],
  controlled_ir: [
    { word: "dirt", parts: ["d", "ir", "t"], image: "zimages/controlledr_ir/dirt" },
    { word: "first", parts: ["f", "ir", "s", "t"], image: "zimages/controlledr_ir/first" },
    { word: "shirt", parts: ["sh", "ir", "t"], image: "zimages/controlledr_ir/shirt" },
    { word: "skirt", parts: ["sk", "ir", "t"], image: "zimages/controlledr_ir/skirt" },
    { word: "stir", parts: ["s", "t", "ir"], image: "zimages/controlledr_ir/stir" },
    { word: "third", parts: ["th", "ir", "d"], image: "zimages/controlledr_ir/third" },
    { word: "twirl", parts: ["tw", "ir", "l"], image: "zimages/controlledr_ir/twirl" },
    { word: "squirt", parts: ["squ", "ir", "t"], image: "zimages/controlledr_ir/squirt" }
  ],

  // --------------------
  // LONG VOWELS
  // --------------------
  longvowels_a: [
    { word: "brake", parts: ["br", "a", "k", "e"], image: "zimages/longvowels/a_brake" },
    { word: "cape", parts: ["c", "a", "p", "e"], image: "zimages/longvowels/a_cape" },
    { word: "chase", parts: ["ch", "a", "s", "e"], image: "zimages/longvowels/a_chase" },
    { word: "crate", parts: ["cr", "a", "t", "e"], image: "zimages/longvowels/a_crate" },
    { word: "grade", parts: ["gr", "a", "d", "e"], image: "zimages/longvowels/a_grade" },
    { word: "lame", parts: ["l", "a", "m", "e"], image: "zimages/longvowels/a_lame" },
    { word: "mane", parts: ["m", "a", "n", "e"], image: "zimages/longvowels/a_mane" },
    { word: "pane", parts: ["p", "a", "n", "e"], image: "zimages/longvowels/a_pane" },
    { word: "paste", parts: ["p", "a", "s", "t", "e"], image: "zimages/longvowels/a_paste" },
    { word: "save", parts: ["s", "a", "v", "e"], image: "zimages/longvowels/a_save" },
    { word: "tape", parts: ["t", "a", "p", "e"], image: "zimages/longvowels/a_tape" }
  ],
  longvowels_i: [
    { word: "bride", parts: ["br", "i", "d", "e"], image: "zimages/longvowels/i_bride" },
    { word: "pine", parts: ["p", "i", "n", "e"], image: "zimages/longvowels/i_pine" },
    { word: "shine", parts: ["sh", "i", "n", "e"], image: "zimages/longvowels/i_shine" },
    { word: "spine", parts: ["sp", "i", "n", "e"], image: "zimages/longvowels/i_spine" },
    { word: "stripe", parts: ["str", "i", "p", "e"], image: "zimages/longvowels/i_stripe" }
  ],
  longvowels_o: [
    { word: "choke", parts: ["ch", "o", "k", "e"], image: "zimages/longvowels/o_choke" },
    { word: "dome", parts: ["d", "o", "m", "e"], image: "zimages/longvowels/o_dome" },
    { word: "globe", parts: ["gl", "o", "b", "e"], image: "zimages/longvowels/o_globe" },
    { word: "smoke", parts: ["sm", "o", "k", "e"], image: "zimages/longvowels/o_smoke" },
    { word: "stove", parts: ["st", "o", "v", "e"], image: "zimages/longvowels/o_stove" }
  ],
  longvowels_u: [
    { word: "dune", parts: ["d", "u", "n", "e"], image: "zimages/longvowels/u_dune" },
    { word: "flute", parts: ["fl", "u", "t", "e"], image: "zimages/longvowels/u_flute" },
    { word: "mule", parts: ["m", "u", "l", "e"], image: "zimages/longvowels/u_mule" },
    { word: "mute", parts: ["m", "u", "t", "e"], image: "zimages/longvowels/u_mute" },
    { word: "plume", parts: ["pl", "u", "m", "e"], image: "zimages/longvowels/u_plume" },
    { word: "prune", parts: ["pr", "u", "n", "e"], image: "zimages/longvowels/u_prune" },
    { word: "tune", parts: ["t", "u", "n", "e"], image: "zimages/longvowels/u_tune" }
  ],

  // --------------------
  // CONSONANT BLEND L
  // --------------------
  consonantblend_l: [
    { word: "blimp", parts: ["bl", "i", "m", "p"], image: "zimages/consonantblend_l/blimp" },
    { word: "clam", parts: ["cl", "a", "m"], image: "zimages/consonantblend_l/clam" },
    { word: "clap", parts: ["cl", "a", "p"], image: "zimages/consonantblend_l/clap" },
    { word: "clock", parts: ["cl", "o", "ck"], image: "zimages/consonantblend_l/clock" },
    { word: "flag", parts: ["fl", "a", "g"], image: "zimages/consonantblend_l/flag" },
    { word: "flame", parts: ["fl", "a", "m", "e"], image: "zimages/consonantblend_l/flame" },
    { word: "flap", parts: ["fl", "a", "p"], image: "zimages/consonantblend_l/flap" },
    { word: "floss", parts: ["fl", "o", "ss"], image: "zimages/consonantblend_l/floss" },
    { word: "glad", parts: ["gl", "a", "d"], image: "zimages/consonantblend_l/glad" },
    { word: "glass", parts: ["gl", "a", "ss"], image: "zimages/consonantblend_l/glass" },
    { word: "globe", parts: ["gl", "o", "b", "e"], image: "zimages/consonantblend_l/globe" },
    { word: "plug", parts: ["pl", "u", "g"], image: "zimages/consonantblend_l/plug" },
    { word: "sled", parts: ["sl", "e", "d"], image: "zimages/consonantblend_l/sled" },
    { word: "sleep", parts: ["sl", "ee", "p"], image: "zimages/consonantblend_l/sleep" },
    { word: "sleeve", parts: ["sl", "ee", "v", "e"], image: "zimages/consonantblend_l/sleeve" },
    { word: "slide", parts: ["sl", "i", "d", "e"], image: "zimages/consonantblend_l/slide" },
    { word: "slime", parts: ["sl", "i", "m", "e"], image: "zimages/consonantblend_l/slime" }
  ],

  // --------------------
  // CONSONANT BLEND R
  // --------------------
  consonantblend_r: [
    { word: "braid", parts: ["br", "ai", "d"], image: "zimages/consonantblend_r/braid" },
    { word: "brick", parts: ["br", "i", "ck"], image: "zimages/consonantblend_r/brick" },
    { word: "broom", parts: ["br", "oo", "m"], image: "zimages/consonantblend_r/broom" },
    { word: "crate", parts: ["cr", "a", "t", "e"], image: "zimages/consonantblend_r/crate" },
    { word: "cross", parts: ["cr", "o", "ss"], image: "zimages/consonantblend_r/cross" },
    { word: "dress", parts: ["dr", "e", "ss"], image: "zimages/consonantblend_r/dress" },
    { word: "drill", parts: ["dr", "i", "ll"], image: "zimages/consonantblend_r/drill" },
    { word: "drink", parts: ["dr", "i", "n", "k"], image: "zimages/consonantblend_r/drink" },
    { word: "frame", parts: ["fr", "a", "m", "e"], image: "zimages/consonantblend_r/frame" },
    { word: "frost", parts: ["fr", "o", "s", "t"], image: "zimages/consonantblend_r/frost" },
    { word: "grill", parts: ["gr", "i", "ll"], image: "zimages/consonantblend_r/grill" },
    { word: "print", parts: ["pr", "i", "n", "t"], image: "zimages/consonantblend_r/print" },
    { word: "prize", parts: ["pr", "i", "z", "e"], image: "zimages/consonantblend_r/prize" },
    { word: "train", parts: ["tr", "ai", "n"], image: "zimages/consonantblend_r/train" },
    { word: "trash", parts: ["tr", "a", "sh"], image: "zimages/consonantblend_r/trash" },
    { word: "trunk", parts: ["tr", "u", "n", "k"], image: "zimages/consonantblend_r/trunk" }
  ],

  // --------------------
  // CONSONANT BLEND S
  // --------------------
  consonantblend_s: [
    { word: "scab", parts: ["sc", "a", "b"], image: "zimages/consonantblend_s/scab" },
    { word: "scarf", parts: ["sc", "ar", "f"], image: "zimages/consonantblend_s/scarf" },
    { word: "scoop", parts: ["sc", "oo", "p"], image: "zimages/consonantblend_s/scoop" },
    { word: "skate", parts: ["sk", "a", "t", "e"], image: "zimages/consonantblend_s/skate" },
    { word: "skull", parts: ["sk", "u", "ll"], image: "zimages/consonantblend_s/skull" },
    { word: "skunk", parts: ["sk", "u", "n", "k"], image: "zimages/consonantblend_s/skunk" },
    { word: "smell", parts: ["sm", "e", "ll"], image: "zimages/consonantblend_s/smell" },
    { word: "smock", parts: ["sm", "o", "ck"], image: "zimages/consonantblend_s/smock" },
    { word: "sneeze", parts: ["sn", "ee", "z", "e"], image: "zimages/consonantblend_s/sneeze" },
    { word: "snip", parts: ["sn", "i", "p"], image: "zimages/consonantblend_s/snip" },
    { word: "snore", parts: ["sn", "or", "e"], image: "zimages/consonantblend_s/snore" },
    { word: "snout", parts: ["sn", "ou", "t"], image: "zimages/consonantblend_s/snout" },
    { word: "stack", parts: ["st", "a", "ck"], image: "zimages/consonantblend_s/stack" },
    { word: "stem", parts: ["st", "e", "m"], image: "zimages/consonantblend_s/stem" },
    { word: "sting", parts: ["st", "i", "ng"], image: "zimages/consonantblend_s/sting" },
    { word: "storm", parts: ["st", "or", "m"], image: "zimages/consonantblend_s/storm" },
    { word: "sweet", parts: ["sw", "ee", "t"], image: "zimages/consonantblend_s/sweet" },
    { word: "swim", parts: ["sw", "i", "m"], image: "zimages/consonantblend_s/swim" }
  ],

  // --------------------
  // DIAGRAPHS
  // --------------------
  diagraphs_ch: [
    { word: "beach", parts: ["b", "ea", "ch"], image: "zimages/diagraphs/ch/beach" },
    { word: "bunch", parts: ["b", "u", "n", "ch"], image: "zimages/diagraphs/ch/bunch" },
    { word: "chat", parts: ["ch", "a", "t"], image: "zimages/diagraphs/ch/chat" },
    { word: "cheek", parts: ["ch", "ee", "k"], image: "zimages/diagraphs/ch/cheek" },
    { word: "cheese", parts: ["ch", "ee", "s", "e"], image: "zimages/diagraphs/ch/cheese" },
    { word: "chest", parts: ["ch", "e", "s", "t"], image: "zimages/diagraphs/ch/chest" },
    { word: "chimp", parts: ["ch", "i", "m", "p"], image: "zimages/diagraphs/ch/chimp" },
    { word: "chip", parts: ["ch", "i", "p"], image: "zimages/diagraphs/ch/chip" },
    { word: "chop", parts: ["ch", "o", "p"], image: "zimages/diagraphs/ch/chop" },
    { word: "church", parts: ["ch", "ur", "ch"], image: "zimages/diagraphs/ch/church" },
    { word: "couch", parts: ["c", "ou", "ch"], image: "zimages/diagraphs/ch/couch" },
    { word: "lunch", parts: ["l", "u", "n", "ch"], image: "zimages/diagraphs/ch/lunch" },
    { word: "march", parts: ["m", "ar", "ch"], image: "zimages/diagraphs/ch/march" },
    { word: "peach", parts: ["p", "ea", "ch"], image: "zimages/diagraphs/ch/peach" },
    { word: "pinch", parts: ["p", "i", "n", "ch"], image: "zimages/diagraphs/ch/pinch" },
    { word: "punch", parts: ["p", "u", "n", "ch"], image: "zimages/diagraphs/ch/punch" },
    { word: "search", parts: ["s", "ear", "ch"], image: "zimages/diagraphs/ch/search" },
    { word: "teach", parts: ["t", "ea", "ch"], image: "zimages/diagraphs/ch/teach" },
    { word: "torch", parts: ["t", "or", "ch"], image: "zimages/diagraphs/ch/torch" }
  ],

  diagraphs_ng: [
    { word: "bang", parts: ["b", "a", "ng"], image: "zimages/diagraphs/ng/bang" },
    { word: "fang", parts: ["f", "a", "ng"], image: "zimages/diagraphs/ng/fang" },
    { word: "gong", parts: ["g", "o", "ng"], image: "zimages/diagraphs/ng/gong" },
    { word: "king", parts: ["k", "i", "ng"], image: "zimages/diagraphs/ng/king" },
    { word: "long", parts: ["l", "o", "ng"], image: "zimages/diagraphs/ng/long" },
    { word: "lung", parts: ["l", "u", "ng"], image: "zimages/diagraphs/ng/lung" },
    { word: "pong", parts: ["p", "o", "ng"], image: "zimages/diagraphs/ng/pong" },
    { word: "ring", parts: ["r", "i", "ng"], image: "zimages/diagraphs/ng/ring" },
    { word: "rung", parts: ["r", "u", "ng"], image: "zimages/diagraphs/ng/rung" },
    { word: "sing", parts: ["s", "i", "ng"], image: "zimages/diagraphs/ng/sing" },
    { word: "song", parts: ["s", "o", "ng"], image: "zimages/diagraphs/ng/song" },
    { word: "spring", parts: ["sp", "r", "i", "ng"], image: "zimages/diagraphs/ng/spring" },
    { word: "sting", parts: ["st", "i", "ng"], image: "zimages/diagraphs/ng/sting" },
    { word: "string", parts: ["str", "i", "ng"], image: "zimages/diagraphs/ng/string" },
    { word: "strong", parts: ["str", "o", "ng"], image: "zimages/diagraphs/ng/strong" },
    { word: "swing", parts: ["sw", "i", "ng"], image: "zimages/diagraphs/ng/swing" },
    { word: "tong", parts: ["t", "o", "ng"], image: "zimages/diagraphs/ng/tong" },
    { word: "wing", parts: ["w", "i", "ng"], image: "zimages/diagraphs/ng/wing" }
  ],

  diagraphs_sh: [
    { word: "blush", parts: ["bl", "u", "sh"], image: "zimages/diagraphs/sh/blush" },
    { word: "cash", parts: ["c", "a", "sh"], image: "zimages/diagraphs/sh/cash" },
    { word: "ship", parts: ["sh", "i", "p"], image: "zimages/diagraphs/sh/ship" },
    { word: "shrimp", parts: ["sh", "r", "i", "m", "p"], image: "zimages/diagraphs/sh/shrimp" },
    { word: "shrug", parts: ["sh", "r", "u", "g"], image: "zimages/diagraphs/sh/shrug" }
  ],

  diagraphs_th: [
    { word: "bath", parts: ["b", "a", "th"], image: "zimages/diagraphs/th/bath" },
    { word: "earth", parts: ["ear", "th"], image: "zimages/diagraphs/th/earth" },
    { word: "moth", parts: ["m", "o", "th"], image: "zimages/diagraphs/th/moth" },
    { word: "sloth", parts: ["sl", "o", "th"], image: "zimages/diagraphs/th/sloth" },
    { word: "thick", parts: ["th", "i", "ck"], image: "zimages/diagraphs/th/thick" },
    { word: "thief", parts: ["th", "ie", "f"], image: "zimages/diagraphs/th/thief" },
    { word: "think", parts: ["th", "i", "n", "k"], image: "zimages/diagraphs/th/think" },
    { word: "thorn", parts: ["th", "or", "n"], image: "zimages/diagraphs/th/thorn" },
    { word: "three", parts: ["th", "r", "ee"], image: "zimages/diagraphs/th/three" },
    { word: "thumb", parts: ["th", "u", "m", "b"], image: "zimages/diagraphs/th/thumb" },
    { word: "tooth", parts: ["t", "oo", "th"], image: "zimages/diagraphs/th/tooth" }
  ]
};

// --------------------
// ELEMENTS
// --------------------
const image = document.getElementById("image");
const lettersDiv = document.getElementById("letters");
const blendBtn = document.getElementById("blendBtn");
const racetrack = document.getElementById("racetrack");
const dice = document.getElementById("dice");
const diceSound = document.getElementById("diceSound");
const popup = document.getElementById("playerPopup");
const startRaceBtn = document.getElementById("startRaceBtn");
const animalChoicesDiv = document.getElementById("animalChoices");
const playerCountBtns = document.getElementById("playerCountBtns");

// --------------------
// DETECT SELECTED SET FROM URL (Step 1 of Password Game logic)
// --------------------
const urlParams = new URLSearchParams(window.location.search);
const selectedSet = urlParams.get("set") || "or"; // fallback if missing
console.log("✅ Selected set:", selectedSet);

// --------------------
// VARIABLES
// --------------------
let players = [];
let tiles = [];
let finishedPlayers = [];
let currentWord = null;
let diceRolling = false;
let currentPlayer = 0;
let usedEmojis = new Set();
let trackEmojis = [];
let trackPath = [];
const animalEmojis = ["🐨","🐰","🐱","🐶","🐻","🐼","🐷","🐮","🦊","🐯"];
let currentWordIndex = 0;
let wordList = wordSets[selectedSet] || []; // Step 2 – load correct list

// --------------------
// INITIAL LOAD
// --------------------
window.addEventListener("load", () => {
  initPlayerPopup();
  dice.classList.add("disabledDice");
});

// --------------------
// PLAYER POPUP
// --------------------
function initPlayerPopup() {
  popup.style.display = "flex";
  players = [];
  usedEmojis.clear();
  playerCountBtns.innerHTML = "";
  animalChoicesDiv.innerHTML = "";
  startRaceBtn.disabled = true;

  for (let i = 2; i <= 8; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.classList.add("player-num-btn");
    btn.onclick = () => renderAnimalChoices(i);
    playerCountBtns.appendChild(btn);
  }
}

function renderAnimalChoices(count) {
  animalChoicesDiv.innerHTML = "";
  players = new Array(count).fill(null);
  usedEmojis.clear();
  startRaceBtn.disabled = true;

  for (let i = 0; i < count; i++) {
    const row = document.createElement("div");
    row.className = "player-row";
    const label = document.createElement("span");
    label.textContent = `Player ${i + 1}: `;
    row.appendChild(label);

    animalEmojis.forEach((emoji) => {
      const btn = document.createElement("button");
      btn.textContent = emoji;
      btn.onclick = () => toggleEmojiSelection(i, btn, emoji);
      row.appendChild(btn);
    });

    animalChoicesDiv.appendChild(row);
  }
}

function toggleEmojiSelection(playerIndex, btn, emoji) {
  if (players[playerIndex] && players[playerIndex].emoji === emoji) {
    players[playerIndex] = null;
    btn.classList.remove("selected");
    usedEmojis.delete(emoji);
    updateDisabledButtons();
    startRaceBtn.disabled = true;
    return;
  }

  if (players[playerIndex]) usedEmojis.delete(players[playerIndex].emoji);
  if (usedEmojis.has(emoji)) return;

  players[playerIndex] = { emoji, position: 0, finished: false, rank: null };
  btn.parentElement.querySelectorAll("button").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
  usedEmojis.add(emoji);
  updateDisabledButtons();
  if (players.every(p => p && p.emoji)) startRaceBtn.disabled = false;
}

function updateDisabledButtons() {
  document.querySelectorAll("#animalChoices button").forEach((btn) => {
    const emoji = btn.textContent;
    btn.disabled = usedEmojis.has(emoji);
    btn.style.backgroundColor = btn.disabled ? "#007bff" : "";
    btn.style.color = btn.disabled ? "white" : "";
  });

  document.querySelectorAll("#animalChoices button.selected").forEach((btn) => {
    btn.disabled = false;
    btn.style.backgroundColor = "#ffd700";
    btn.style.color = "black";
  });
}

startRaceBtn.onclick = () => {
  popup.style.display = "none";
  startGame();
};

// --------------------
// START GAME
// --------------------
function startGame() {
  initWordSet();
  initGame();
}

// --------------------
// WORD SYSTEM (Steps 2–4)
// --------------------
function initWordSet() {
  if (!wordSets[selectedSet]) {
    console.error("❌ Word set not found:", selectedSet);
    return;
  }

  wordList = wordSets[selectedSet];
  currentWordIndex = 0;
  loadWord(currentWordIndex);
}

function loadWord(index) {
  if (index < 0) index = wordList.length - 1;
  if (index >= wordList.length) index = 0;
  currentWordIndex = index;
  currentWord = wordList[currentWordIndex];
  loadImage(currentWord.image);
  createLetters(currentWord.parts);
}

function loadImage(basePath) {
  const imgEl = document.getElementById("image");
  const exts = [".png", ".jpeg", ".jpg"];
  let loaded = false;

  exts.forEach(ext => {
    const testSrc = `${basePath}${ext}`;
    const testImg = new Image();
    testImg.onload = () => {
      if (!loaded) {
        imgEl.src = testSrc;
        loaded = true;
      }
    };
    testImg.src = testSrc;
  });

  setTimeout(() => {
    if (!loaded) imgEl.src = "zimages/placeholder.png";
  }, 800);
}

function createLetters(parts) {
  const lettersDiv = document.getElementById("letters");
  lettersDiv.innerHTML = "";

  parts.forEach((p, i) => {
    const btn = document.createElement("button");
    btn.className = "letter-btn";
    btn.textContent = p;

    // ✅ Automatically highlight last 'e' if the full word ends with 'e'
    const isLast = i === parts.length - 1;
    const isMagicE = isLast && p.toLowerCase() === "e";
    if (isMagicE) {
      btn.classList.add("blended");       // yellow style
      btn.classList.add("fixedE");        // special marker for JS logic
      btn.disabled = true;                // cannot be toggled
    } else {
      btn.addEventListener("click", () => btn.classList.toggle("selected"));
    }

    lettersDiv.appendChild(btn);
  });
}

// --------------------
// BLEND EFFECT
// --------------------
blendBtn.addEventListener("click", () => {
  const selected = document.querySelectorAll(".letter-btn.selected, .letter-btn.fixedE");
  if (selected.length === 0) return;

  selected.forEach(b => b.classList.add("blended"));
  lettersDiv.classList.add("bounceVibrateGroup");

  dice.classList.add("disabledDice");

  setTimeout(() => {
    lettersDiv.classList.remove("bounceVibrateGroup");
    dice.classList.remove("disabledDice");
  }, 1500);
});

// --------------------
// DICE ROLL + RACETRACK LOGIC (unchanged)
// --------------------
// (Keep your existing dice + initGame + movePlayer + highlightCurrentPlayer sections here, unchanged.)

// --------------------
// DICE ROLL
// --------------------
dice.addEventListener("click", async () => {
  if (diceRolling || dice.classList.contains("disabledDice")) return;
  diceRolling = true;
  diceSound.play();

  for (let i = 0; i < 10; i++) {
    const tempNum = Math.floor(Math.random() * 6) + 1;
    dice.textContent = ["⚀","⚁","⚂","⚃","⚄","⚅"][tempNum - 1];
    await new Promise((r) => setTimeout(r, 100));
  }

  const result = Math.floor(Math.random() * 6) + 1;
  dice.textContent = ["⚀","⚁","⚂","⚃","⚄","⚅"][result - 1];
  dice.classList.add("disabledDice");

  await movePlayer(result);
  diceRolling = false;
});

// --------------------
// RACETRACK
// --------------------
function initGame() {
  racetrack.innerHTML = "";
  tiles = [];
  finishedPlayers = [];

  const rows = 6, cols = 9;
  const grid = Array.from({ length: rows }, () => Array(cols).fill("grass"));
  const dirs = [
    { r: 0, c: 1, arrow: "→" },
    { r: 1, c: 0, arrow: "↓" },
    { r: 0, c: -1, arrow: "←" },
    { r: -1, c: 0, arrow: "↑" },
  ];
  const inBounds = (r, c) => r >= 0 && r < rows && c >= 0 && c < cols;

  // 🎲 Pick random start within safe grid boundaries
  let startR = Math.floor(Math.random() * (rows - 2)) + 1;
  let startC = Math.floor(Math.random() * (cols - 2)) + 1;
  let dir = 0;
  const path = [{ r: startR, c: startC }];
  grid[startR][startC] = "start";

  // 🔄 Build a looping path
  for (let i = 0; i < 150; i++) {
    const d = dirs[dir];
    const nr = path[path.length - 1].r + d.r;
    const nc = path[path.length - 1].c + d.c;

    if (!inBounds(nr, nc)) {
      dir = (dir + 1) % 4;
      continue;
    }

    const touching = dirs.filter(
      x =>
        inBounds(nr + x.r, nc + x.c) &&
        grid[nr + x.r][nc + x.c] === "path"
    );
    if (touching.length > 1) {
      dir = (dir + 1) % 4;
      continue;
    }

    // ✅ Close the loop when it reconnects to start
    if (grid[nr][nc] === "start" && path.length > 8) {
      path.push({ r: nr, c: nc });
      break;
    }

    grid[nr][nc] = "path";
    path.push({ r: nr, c: nc });

    if (Math.random() < 0.3)
      dir = (dir + (Math.random() < 0.5 ? 1 : 3)) % 4;
  }

  // 🏁 Mark the last as end
  const end = path[path.length - 1];
  grid[end.r][end.c] = "end";

  // ✅ NEW LINE: store correct track tile order for player movement
  trackPath = path.map(pos => pos.r * cols + pos.c);


  // 🌿 Decorate surroundings and render grid
  let lightningPositions = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const div = document.createElement("div");
      div.className = "tile " + grid[r][c];
      div.style.fontSize = "2.6em";
      div.style.textAlign = "center";

      if (grid[r][c] === "start") div.textContent = "🏁";
      else if (grid[r][c] === "end") div.textContent = "🏆";
      else if (grid[r][c] === "path") {
        const tileIndex = r * cols + c;

        // ⚡🔥 BONUS TILE GENERATION — now 25% total with pattern assist
        if ((r + c) % 4 === 0 && Math.random() < 0.4) {
          // ⚡ Lightning every few tiles (pattern-based)
          div.textContent = "⚡";
          div.classList.add("lightning-tile");
          lightningPositions.push(tileIndex);

        } else if ((r + c) % 5 === 0 && Math.random() < 0.4) {
          // 🔥 Fire every few tiles (pattern-based)
          div.textContent = "🔥";
          div.classList.add("fire-tile");

        } else if (Math.random() < 0.15 && !lightningPositions.includes(tileIndex)) {
          // Extra random lightning chance
          div.textContent = "⚡";
          div.classList.add("lightning-tile");
          lightningPositions.push(tileIndex);

        } else if (Math.random() < 0.15 && 
                   !lightningPositions.some(p => Math.abs(tileIndex - p) <= 2)) {
          // Extra random fire chance
          div.textContent = "🔥";
          div.classList.add("fire-tile");

        } else {
          // Regular path tile
          div.textContent = "⬜";
        }

      } else if (Math.random() < 0.12) {
        // 🌳 Decorative grass candy tiles
        const decorEmojis = ["🍭", "🍬", "🍫", "🍩", "🧁", "🍪"];
        const chosen = decorEmojis[Math.floor(Math.random() * decorEmojis.length)];
        div.textContent = chosen;

        div.style.fontSize = "4.2em";  // 👈 make decorative tiles bigger
      }

      racetrack.appendChild(div);
      if (["start", "path", "end"].includes(grid[r][c])) tiles.push(r * cols + c);
    }
  }

  // ✅ Spawn players visually centered on the 🏁 start tile (absolute to racetrack)
  const startTile = racetrack.querySelector(".tile.start");
  if (startTile && players.length > 0) {
    trackEmojis.forEach(el => el.remove());
    trackEmojis = [];

    // Get racetrack + start tile positions
    const trackRect = racetrack.getBoundingClientRect();
    const startRect = startTile.getBoundingClientRect();

    players.forEach((p) => {
      const emojiSpan = document.createElement("span");
      emojiSpan.className = "animal";
      emojiSpan.textContent = p.emoji;
      emojiSpan.style.position = "absolute";
      emojiSpan.style.zIndex = "10";

      // Center perfectly on the start tile
      emojiSpan.style.left = `${startRect.left - trackRect.left + startRect.width / 2}px`;
      emojiSpan.style.top = `${startRect.top - trackRect.top + startRect.height / 2}px`;
      emojiSpan.style.transform = "translate(-50%, -50%)";

      racetrack.appendChild(emojiSpan);

      trackEmojis.push(emojiSpan);
      p.element = emojiSpan;
      p.position = 0;
    });
  }
}

// --------------------
// SHUFFLE BUTTON — rebuild track + realign players
// --------------------
// --------------------
// SHUFFLE BUTTON — rebuild track + realign players
// --------------------
document.getElementById("shuffleTrackBtn").addEventListener("click", () => {
  initGame(); // rebuild new random track

  // 🧹 Reset player states for new game
  finishedPlayers = [];
  players.forEach(p => {
    p.finished = false;
    p.position = 0;

    // 👇 Add this line here
    if (p.element) p.element.classList.remove("finished");
  });
  currentPlayer = 0;

  // Respawn player emojis centered relative to racetrack
  requestAnimationFrame(() => {
    const startTile = racetrack.querySelector(".tile.start");
    if (!startTile || players.length === 0) return;

    racetrack.querySelectorAll(".animal").forEach(el => el.remove());

    const trackRect = racetrack.getBoundingClientRect();
    const startRect = startTile.getBoundingClientRect();

    players.forEach(p => {
      const span = document.createElement("span");
      span.className = "animal";
      span.textContent = p.emoji;
      span.style.position = "absolute";
      span.style.zIndex = "10";

      span.style.left = `${startRect.left - trackRect.left + startRect.width / 2}px`;
      span.style.top = `${startRect.top - trackRect.top + startRect.height / 2}px`;
      span.style.transform = "translate(-50%, -50%)";

      racetrack.appendChild(span);
      p.element = span;
    });

    highlightCurrentPlayer();
  });
});


// --------------------
// PLAYER MOVEMENT
// --------------------
// --------------------
// PLAYER MOVEMENT (⚡🔥 bonus supported, smooth glide, disable on finish)
// --------------------
async function movePlayer(steps) {
  const player = players[currentPlayer];
  const playerEl = player.element;

  // Prevent already finished players from moving again
  if (player.finished) {
    nextTurn();
    return;
  }

  // ✅ STEP 1 — move according to dice result
  await glidePlayer(player, steps);

  // ✅ STEP 2 — check if landed on bonus tile
  const currentTile = racetrack.children[trackPath[player.position]];
  if (currentTile.classList.contains("lightning-tile") || currentTile.classList.contains("fire-tile")) {
    const emoji = currentTile.textContent.trim();
    const bonusSteps = emoji === "⚡" ? 2 : emoji === "🔥" ? 1 : 0;

    if (bonusSteps > 0) {
      // 🌟 Add tile expand animation before gliding
      currentTile.classList.add("active-bonus");
      await new Promise(r => setTimeout(r, 600));
      currentTile.classList.remove("active-bonus");

      await glidePlayer(player, bonusSteps);
    }
  }

  // ✅ STEP 3 — finish line check
  const finalIndex = trackPath.length - 1;
  if (player.position >= finalIndex) {
    player.position = finalIndex;
    player.finished = true;

    // 👇 Add this line right after marking as finished
    playerEl.classList.add("finished");

    // Move emoji to final trophy tile visually (stay inside racetrack)
    const finalTile = racetrack.children[trackPath[finalIndex]];
    const rect = finalTile.getBoundingClientRect();
    const trackRect = racetrack.getBoundingClientRect();

    playerEl.style.transition = "all 0.4s ease";
    playerEl.style.left = `${rect.left - trackRect.left + rect.width / 2}px`;
    playerEl.style.top = `${rect.top - trackRect.top + rect.height / 2}px`;
    playerEl.style.transform = "translate(-50%, -50%) scale(1)";

    finishedPlayers.push(player);
    player.rank = finishedPlayers.length;

    alert(`${player.emoji} finished! Rank: ${player.rank}`);

    // 🏁 All players finished?
    if (finishedPlayers.length === players.length) {
      const list = finishedPlayers.map(x => `${x.rank}️⃣ ${x.emoji}`).join("\n");
      alert(`🏁 Race Finished!\n${list}`);
      showPlayerPopup();
      return;
    }

    nextTurn();
    return;
  }

  // ✅ STEP 4 — move to next turn (skip finished players)
  nextTurn();
}

// --------------------
// SHARED GLIDE LOGIC
// --------------------
async function glidePlayer(player, steps) {
  const playerEl = player.element;

  let newPos = Math.min(player.position + steps, trackPath.length - 1);

  // Move step by step along tiles visually
  for (let i = player.position + 1; i <= newPos; i++) {
    const tileIndex = trackPath[i];
    const tile = racetrack.children[tileIndex];
    const rect = tile.getBoundingClientRect();
    const trackRect = racetrack.getBoundingClientRect();

    playerEl.style.transition = "all 0.35s ease";
    playerEl.style.left = `${rect.left - trackRect.left + rect.width / 2}px`;
    playerEl.style.top = `${rect.top - trackRect.top + rect.height / 2}px`;

    await new Promise(r => setTimeout(r, 350));
  }

  player.position = newPos;
}

// --------------------
// TURN HANDLING
// --------------------
function nextTurn() {
  let startIndex = currentPlayer;
  do {
    currentPlayer = (currentPlayer + 1) % players.length;
  } while (players[currentPlayer].finished && currentPlayer !== startIndex);

  // If all players finished, stop the game loop
  if (players.every(p => p.finished)) return;

  highlightCurrentPlayer();
}

function highlightCurrentPlayer() {
  players.forEach((p, i) => {
    if (p.element)
      p.element.style.filter = i === currentPlayer ? "drop-shadow(0 0 20px yellow)" : "none";
  });
}

// --------------------
// ANIMAL POSITION
// --------------------
function positionAnimal(p, tileIndex) {
  const allTiles = document.querySelectorAll(".tile");
  const tile = allTiles[tileIndex];
  if (!tile) return;

  // make the tile a positioning container
  tile.style.position = "relative";

  // place emoji INSIDE that tile
  tile.appendChild(p.element);
  p.element.style.top = "50%";
  p.element.style.left = "50%";
  p.element.style.transform = "translate(-50%, -50%)";
}


// --------------------
// WORD NAVIGATION CONTROLS
// --------------------
document.getElementById("prevWordBtn").addEventListener("click", () => {
  loadWord(currentWordIndex - 1);
});

document.getElementById("nextWordBtn").addEventListener("click", () => {
  loadWord(currentWordIndex + 1);
});

document.getElementById("shuffleBtn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * wordList.length);
  loadWord(randomIndex);
});


// --------------------
// MAIN MENU BUTTON LINK
// --------------------
document.getElementById("mainMenuBtn").addEventListener("click", () => {
  window.location.href = "main.html"; // Navigate back to your main menu page
});