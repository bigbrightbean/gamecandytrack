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
    { word: "thorn", parts: ["th", "or", "n"], image: "zimages/controlledr_or/thorn" },

    // -------------------------
    // ⭐ NEW WORDS — OR
    // -------------------------
    { word: "corn", parts: ["c", "or", "n"], image: "zimages/controlledr_or/corn" },              // new word
    { word: "fork", parts: ["f", "or", "k"], image: "zimages/controlledr_or/fork" },              // new word
    { word: "horn", parts: ["h", "or", "n"], image: "zimages/controlledr_or/horn" },              // new word
    { word: "north", parts: ["n", "or", "th"], image: "zimages/controlledr_or/north" },          // new word
    { word: "torch", parts: ["t", "or", "ch"], image: "zimages/controlledr_or/torch" },          // new word
    { word: "torn", parts: ["t", "or", "n"], image: "zimages/controlledr_or/torn" },              // new word
    { word: "worn", parts: ["w", "or", "n"], image: "zimages/controlledr_or/worn" },              // new word
    { word: "pork", parts: ["p", "or", "k"], image: "zimages/controlledr_or/pork" },              // new word
    { word: "cord", parts: ["c", "or", "d"], image: "zimages/controlledr_or/cord" },              // new word
    { word: "sort", parts: ["s", "or", "t"], image: "zimages/controlledr_or/sort" },              // new word
    { word: "snort", parts: ["sn", "or", "t"], image: "zimages/controlledr_or/snort" },          // new word
    { word: "stormy", parts: ["st", "or", "m", "y"], image: "zimages/controlledr_or/stormy" },   // new word

    // -------------------------
    // ⭐ EXTRA NEW WORDS — OR
    // -------------------------
    { word: "born", parts: ["b", "or", "n"], image: "zimages/controlledr_or/born" }, // new word
    { word: "form", parts: ["f", "or", "m"], image: "zimages/controlledr_or/form" }, // new word
    { word: "story", parts: ["st", "or", "y"], image: "zimages/controlledr_or/story" }, // new word
    { word: "store", parts: ["st", "or", "e"], image: "zimages/controlledr_or/store" }, // new word
    { word: "more", parts: ["m", "or", "e"], image: "zimages/controlledr_or/more" }, // new word
    { word: "ignore", parts: ["i", "g", "n", "or", "e"], image: "zimages/controlledr_or/ignore" }, // new word
    { word: "explore", parts: ["e", "x", "pl", "or", "e"], image: "zimages/controlledr_or/explore" }, // new word
    { word: "score", parts: ["sc", "or", "e"], image: "zimages/controlledr_or/score" }, // new word
    { word: "adore", parts: ["a", "d", "or", "e"], image: "zimages/controlledr_or/adore" } // new word
  ],

  controlled_ir: [
    { word: "dirt", parts: ["d", "ir", "t"], image: "zimages/controlledr_ir/dirt" },
    { word: "first", parts: ["f", "ir", "s", "t"], image: "zimages/controlledr_ir/first" },
    { word: "shirt", parts: ["sh", "ir", "t"], image: "zimages/controlledr_ir/shirt" },
    { word: "skirt", parts: ["sk", "ir", "t"], image: "zimages/controlledr_ir/skirt" },
    { word: "stir", parts: ["s", "t", "ir"], image: "zimages/controlledr_ir/stir" },
    { word: "third", parts: ["th", "ir", "d"], image: "zimages/controlledr_ir/third" },
    { word: "twirl", parts: ["tw", "ir", "l"], image: "zimages/controlledr_ir/twirl" },
    { word: "squirt", parts: ["squ", "ir", "t"], image: "zimages/controlledr_ir/squirt" },

    // -------------------------
    // ⭐ NEW WORDS — IR
    // -------------------------
    { word: "bird", parts: ["b", "ir", "d"], image: "zimages/controlledr_ir/bird" },              // new word
    { word: "girl", parts: ["g", "ir", "l"], image: "zimages/controlledr_ir/girl" },              // new word
    { word: "firm", parts: ["f", "ir", "m"], image: "zimages/controlledr_ir/firm" },              // new word
    { word: "chirp", parts: ["ch", "ir", "p"], image: "zimages/controlledr_ir/chirp" },          // new word
    { word: "birth", parts: ["b", "ir", "th"], image: "zimages/controlledr_ir/birth" },          // new word
    { word: "circle", parts: ["c", "ir", "c", "l", "e"], image: "zimages/controlledr_ir/circle" },   // new word
    { word: "dirty", parts: ["d", "ir", "t", "y"], image: "zimages/controlledr_ir/dirty" },      // new word
    { word: "thirst", parts: ["th", "ir", "s", "t"], image: "zimages/controlledr_ir/thirst" },       // new word
    { word: "swirl", parts: ["sw", "ir", "l"], image: "zimages/controlledr_ir/swirl" },          // new word
    { word: "thirty", parts: ["th", "ir", "t", "y"], image: "zimages/controlledr_ir/thirty" }, // new word
    { word: "dirty", parts: ["d", "ir", "t", "y"], image: "zimages/controlledr_ir/dirty" } // new word
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
    { word: "tape", parts: ["t", "a", "p", "e"], image: "zimages/longvowels/a_tape" },

    // -------------------------
    // ⭐ EXTRA NEW WORDS — A
    // -------------------------
    { word: "grape", parts: ["gr", "a", "p", "e"], image: "zimages/longvowels/a_grape" }, // new word
    { word: "shape", parts: ["sh", "a", "p", "e"], image: "zimages/longvowels/a_shape" }, // new word
    { word: "scale", parts: ["sc", "a", "l", "e"], image: "zimages/longvowels/a_scale" }, // new word
    { word: "plane", parts: ["pl", "a", "n", "e"], image: "zimages/longvowels/a_plane" } // new word
  ],


  longvowels_i: [
    { word: "bride", parts: ["br", "i", "d", "e"], image: "zimages/longvowels/i_bride" },
    { word: "pine", parts: ["p", "i", "n", "e"], image: "zimages/longvowels/i_pine" },
    { word: "shine", parts: ["sh", "i", "n", "e"], image: "zimages/longvowels/i_shine" },
    { word: "spine", parts: ["sp", "i", "n", "e"], image: "zimages/longvowels/i_spine" },
    { word: "stripe", parts: ["str", "i", "p", "e"], image: "zimages/longvowels/i_stripe" },

    // -------------------------
    // ⭐ EXTRA NEW WORDS — I
    // -------------------------
    { word: "slide", parts: ["sl", "i", "d", "e"], image: "zimages/longvowels/i_slide" }, // new word
    { word: "smile", parts: ["sm", "i", "l", "e"], image: "zimages/longvowels/i_smile" }, // new word
    { word: "while", parts: ["wh", "i", "l", "e"], image: "zimages/longvowels/i_while" }, // new word
    { word: "bribe", parts: ["br", "i", "b", "e"], image: "zimages/longvowels/i_bribe" } // new word
  ],


  longvowels_o: [
    { word: "choke", parts: ["ch", "o", "k", "e"], image: "zimages/longvowels/o_choke" },
    { word: "dome", parts: ["d", "o", "m", "e"], image: "zimages/longvowels/o_dome" },
    { word: "globe", parts: ["gl", "o", "b", "e"], image: "zimages/longvowels/o_globe" },
    { word: "smoke", parts: ["sm", "o", "k", "e"], image: "zimages/longvowels/o_smoke" },
    { word: "stove", parts: ["st", "o", "v", "e"], image: "zimages/longvowels/o_stove" },

    // -------------------------
    // ⭐ EXTRA NEW WORDS — O
    // -------------------------
    { word: "rope", parts: ["r", "o", "p", "e"], image: "zimages/longvowels/o_rope" }, // new word
    { word: "stone", parts: ["st", "o", "n", "e"], image: "zimages/longvowels/o_stone" }, // new word
    { word: "phone", parts: ["ph", "o", "n", "e"], image: "zimages/longvowels/o_phone" }, // new word
    { word: "throne", parts: ["thr", "o", "n", "e"], image: "zimages/longvowels/o_throne" } // new word
  ],


  longvowels_u: [
    { word: "dune", parts: ["d", "u", "n", "e"], image: "zimages/longvowels/u_dune" },
    { word: "flute", parts: ["fl", "u", "t", "e"], image: "zimages/longvowels/u_flute" },
    { word: "mule", parts: ["m", "u", "l", "e"], image: "zimages/longvowels/u_mule" },
    { word: "mute", parts: ["m", "u", "t", "e"], image: "zimages/longvowels/u_mute" },
    { word: "plume", parts: ["pl", "u", "m", "e"], image: "zimages/longvowels/u_plume" },
    { word: "prune", parts: ["pr", "u", "n", "e"], image: "zimages/longvowels/u_prune" },
    { word: "tune", parts: ["t", "u", "n", "e"], image: "zimages/longvowels/u_tune" },
    
    // -------------------------
    // ⭐ EXTRA NEW WORDS — U
    // -------------------------
    { word: "cube", parts: ["c", "u", "b", "e"], image: "zimages/longvowels/u_cube" }, // new word
    { word: "cute", parts: ["c", "u", "t", "e"], image: "zimages/longvowels/u_cute" }, // new word
    { word: "huge", parts: ["h", "u", "g", "e"], image: "zimages/longvowels/u_huge" }, // new word
    { word: "rude", parts: ["r", "u", "d", "e"], image: "zimages/longvowels/u_rude" } // new word
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
    { word: "slime", parts: ["sl", "i", "m", "e"], image: "zimages/consonantblend_l/slime" },


    { word: "black", parts: ["bl", "a", "ck"], image: "zimages/consonantblend_l/black" }, // new
    { word: "blast", parts: ["bl", "a", "s", "t"], image: "zimages/consonantblend_l/blast" }, // new
    { word: "blend", parts: ["bl", "e", "n", "d"], image: "zimages/consonantblend_l/blend" }, // new
    { word: "blink", parts: ["bl", "i", "n", "k"], image: "zimages/consonantblend_l/blink" }, // new
    { word: "block", parts: ["bl", "o", "ck"], image: "zimages/consonantblend_l/block" }, // new
    { word: "blaze", parts: ["bl", "a", "z", "e"], image: "zimages/consonantblend_l/blaze" }, // new

    { word: "cliff", parts: ["cl", "i", "ff"], image: "zimages/consonantblend_l/cliff" }, // new
    { word: "cling", parts: ["cl", "i", "ng"], image: "zimages/consonantblend_l/cling" }, // new
    { word: "clip", parts: ["cl", "i", "p"], image: "zimages/consonantblend_l/clip" }, // new
    { word: "climb", parts: ["cl", "i", "m", "b"], image: "zimages/consonantblend_l/climb" }, // new
    { word: "clown", parts: ["cl", "ow", "n"], image: "zimages/consonantblend_l/clown" }, // new
    { word: "close", parts: ["cl", "o", "s", "e"], image: "zimages/consonantblend_l/close" }, // new

    { word: "flake", parts: ["fl", "a", "k", "e"], image: "zimages/consonantblend_l/flake" }, // new
    { word: "fling", parts: ["fl", "i", "ng"], image: "zimages/consonantblend_l/fling" }, // new
    { word: "float", parts: ["fl", "oa", "t"], image: "zimages/consonantblend_l/float" }, // new
    { word: "flock", parts: ["fl", "o", "ck"], image: "zimages/consonantblend_l/flock" }, // new
    { word: "flute", parts: ["fl", "u", "t", "e"], image: "zimages/consonantblend_l/flute" }, // new
    { word: "flint", parts: ["fl", "i", "n", "t"], image: "zimages/consonantblend_l/flint" }, // new

    { word: "glove", parts: ["gl", "o", "v", "e"], image: "zimages/consonantblend_l/glove" }, // new
    { word: "glide", parts: ["gl", "i", "d", "e"], image: "zimages/consonantblend_l/glide" }, // new
    { word: "glow", parts: ["gl", "ow"], image: "zimages/consonantblend_l/glow" }, // new
    { word: "gleam", parts: ["gl", "ea", "m"], image: "zimages/consonantblend_l/gleam" }, // new
    { word: "glare", parts: ["gl", "a", "r", "e"], image: "zimages/consonantblend_l/glare" }, // new
    { word: "gloss", parts: ["gl", "o", "ss"], image: "zimages/consonantblend_l/gloss" }, // new

    { word: "place", parts: ["pl", "a", "c", "e"], image: "zimages/consonantblend_l/place" }, // new
    { word: "plant", parts: ["pl", "a", "n", "t"], image: "zimages/consonantblend_l/plant" }, // new
    { word: "plate", parts: ["pl", "a", "t", "e"], image: "zimages/consonantblend_l/plate" }, // new
    { word: "plank", parts: ["pl", "a", "n", "k"], image: "zimages/consonantblend_l/plank" }, // new
    { word: "pluck", parts: ["pl", "u", "ck"], image: "zimages/consonantblend_l/pluck" }, // new
    { word: "plain", parts: ["pl", "ai", "n"], image: "zimages/consonantblend_l/plain" }, // new

    { word: "slam", parts: ["sl", "a", "m"], image: "zimages/consonantblend_l/slam" }, // new
    { word: "slap", parts: ["sl", "a", "p"], image: "zimages/consonantblend_l/slap" }, // new
    { word: "slant", parts: ["sl", "a", "n", "t"], image: "zimages/consonantblend_l/slant" }, // new
    { word: "slick", parts: ["sl", "i", "ck"], image: "zimages/consonantblend_l/slick" }, // new
    { word: "slip", parts: ["sl", "i", "p"], image: "zimages/consonantblend_l/slip" }, // new
    { word: "sloth", parts: ["sl", "o", "th"], image: "zimages/consonantblend_l/sloth" } // new
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
    { word: "trunk", parts: ["tr", "u", "n", "k"], image: "zimages/consonantblend_r/trunk" },

    { word: "brag", parts: ["br", "a", "g"], image: "zimages/consonantblend_r/brag" }, // new
    { word: "brim", parts: ["br", "i", "m"], image: "zimages/consonantblend_r/brim" }, // new
    { word: "brush", parts: ["br", "u", "sh"], image: "zimages/consonantblend_r/brush" }, // new
    { word: "brass", parts: ["br", "a", "ss"], image: "zimages/consonantblend_r/brass" }, // new
    { word: "bread", parts: ["br", "ea", "d"], image: "zimages/consonantblend_r/bread" }, // new

    { word: "crab", parts: ["cr", "a", "b"], image: "zimages/consonantblend_r/crab" }, // new
    { word: "crack", parts: ["cr", "a", "ck"], image: "zimages/consonantblend_r/crack" }, // new
    { word: "crisp", parts: ["cr", "i", "s", "p"], image: "zimages/consonantblend_r/crisp" }, // new
    { word: "crow", parts: ["cr", "ow"], image: "zimages/consonantblend_r/crow" }, // new
    { word: "crust", parts: ["cr", "u", "s", "t"], image: "zimages/consonantblend_r/crust" }, // new

    { word: "drag", parts: ["dr", "a", "g"], image: "zimages/consonantblend_r/drag" }, // new
    { word: "drip", parts: ["dr", "i", "p"], image: "zimages/consonantblend_r/drip" }, // new
    { word: "droop", parts: ["dr", "oo", "p"], image: "zimages/consonantblend_r/droop" }, // new
    { word: "drain", parts: ["dr", "ai", "n"], image: "zimages/consonantblend_r/drain" }, // new
    { word: "draft", parts: ["dr", "a", "f", "t"], image: "zimages/consonantblend_r/draft" }, // new

    { word: "crab", parts: ["cr", "a", "b"], image: "zimages/consonantblend_r/crab" }, // new
    { word: "crack", parts: ["cr", "a", "ck"], image: "zimages/consonantblend_r/crack" }, // new
    { word: "crisp", parts: ["cr", "i", "s", "p"], image: "zimages/consonantblend_r/crisp" }, // new
    { word: "crow", parts: ["cr", "ow"], image: "zimages/consonantblend_r/crow" }, // new
    { word: "crust", parts: ["cr", "u", "s", "t"], image: "zimages/consonantblend_r/crust" }, // new

    { word: "drag", parts: ["dr", "a", "g"], image: "zimages/consonantblend_r/drag" }, // new
    { word: "drip", parts: ["dr", "i", "p"], image: "zimages/consonantblend_r/drip" }, // new
    { word: "droop", parts: ["dr", "oo", "p"], image: "zimages/consonantblend_r/droop" }, // new
    { word: "drain", parts: ["dr", "ai", "n"], image: "zimages/consonantblend_r/drain" }, // new
    { word: "draft", parts: ["dr", "a", "f", "t"], image: "zimages/consonantblend_r/draft" }, // new

    { word: "fry", parts: ["fr", "y"], image: "zimages/consonantblend_r/fry" }, // new
    { word: "fresh", parts: ["fr", "e", "sh"], image: "zimages/consonantblend_r/fresh" }, // new
    { word: "friend", parts: ["fr", "ie", "nd"], image: "zimages/consonantblend_r/friend" }, // new
    { word: "freight", parts: ["fr", "ei", "gh", "t"], image: "zimages/consonantblend_r/freight" }, // new
    { word: "fruit", parts: ["fr", "ui", "t"], image: "zimages/consonantblend_r/fruit" }, // new

    { word: "grab", parts: ["gr", "a", "b"], image: "zimages/consonantblend_r/grab" }, // new
    { word: "grain", parts: ["gr", "ai", "n"], image: "zimages/consonantblend_r/grain" }, // new
    { word: "grew", parts: ["gr", "ew"], image: "zimages/consonantblend_r/grew" }, // new
    { word: "grip", parts: ["gr", "i", "p"], image: "zimages/consonantblend_r/grip" }, // new
    { word: "groan", parts: ["gr", "oa", "n"], image: "zimages/consonantblend_r/groan" }, // new

    { word: "pram", parts: ["pr", "a", "m"], image: "zimages/consonantblend_r/pram" }, // new
    { word: "press", parts: ["pr", "e", "ss"], image: "zimages/consonantblend_r/press" }, // new
    { word: "pride", parts: ["pr", "i", "d", "e"], image: "zimages/consonantblend_r/pride" }, // new
    { word: "prank", parts: ["pr", "a", "n", "k"], image: "zimages/consonantblend_r/prank" }, // new
    { word: "prove", parts: ["pr", "o", "v", "e"], image: "zimages/consonantblend_r/prove" }, // new

    { word: "track", parts: ["tr", "a", "ck"], image: "zimages/consonantblend_r/track" }, // new
    { word: "trap", parts: ["tr", "a", "p"], image: "zimages/consonantblend_r/trap" }, // new
    { word: "tread", parts: ["tr", "ea", "d"], image: "zimages/consonantblend_r/tread" }, // new
    { word: "treat", parts: ["tr", "ea", "t"], image: "zimages/consonantblend_r/treat" }, // new
    { word: "trout", parts: ["tr", "ou", "t"], image: "zimages/consonantblend_r/trout" } // new
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
    { word: "swim", parts: ["sw", "i", "m"], image: "zimages/consonantblend_s/swim" },

    { word: "scale", parts: ["sc", "a", "l", "e"], image: "zimages/consonantblend_s/scale" }, // new
    { word: "scold", parts: ["sc", "o", "l", "d"], image: "zimages/consonantblend_s/scold" }, // new
    { word: "scout", parts: ["sc", "ou", "t"], image: "zimages/consonantblend_s/scout" }, // new
    { word: "screen", parts: ["scr", "ee", "n"], image: "zimages/consonantblend_s/screen" }, // new
    { word: "scrap", parts: ["scr", "a", "p"], image: "zimages/consonantblend_s/scrap" }, // new

    { word: "skid", parts: ["sk", "i", "d"], image: "zimages/consonantblend_s/skid" }, // new
    { word: "skill", parts: ["sk", "i", "ll"], image: "zimages/consonantblend_s/skill" }, // new
    { word: "skip", parts: ["sk", "i", "p"], image: "zimages/consonantblend_s/skip" }, // new
    { word: "skirt", parts: ["sk", "ir", "t"], image: "zimages/consonantblend_s/skirt" }, // new
    { word: "skate", parts: ["sk", "a", "t", "e"], image: "zimages/consonantblend_s/skate" }, // new

    { word: "smart", parts: ["sm", "ar", "t"], image: "zimages/consonantblend_s/smart" }, // new
    { word: "smash", parts: ["sm", "a", "sh"], image: "zimages/consonantblend_s/smash" }, // new
    { word: "smirk", parts: ["sm", "ir", "k"], image: "zimages/consonantblend_s/smirk" }, // new
    { word: "smoke", parts: ["sm", "o", "k", "e"], image: "zimages/consonantblend_s/smoke" }, // new

    { word: "snack", parts: ["sn", "a", "ck"], image: "zimages/consonantblend_s/snack" }, // new
    { word: "snap", parts: ["sn", "a", "p"], image: "zimages/consonantblend_s/snap" }, // new
    { word: "snake", parts: ["sn", "a", "k", "e"], image: "zimages/consonantblend_s/snake" }, // new
    { word: "snoop", parts: ["sn", "oo", "p"], image: "zimages/consonantblend_s/snoop" }, // new
    { word: "snow", parts: ["sn", "ow"], image: "zimages/consonantblend_s/snow" }, // new

    { word: "space", parts: ["sp", "a", "c", "e"], image: "zimages/consonantblend_s/space" }, // new
    { word: "spade", parts: ["sp", "a", "d", "e"], image: "zimages/consonantblend_s/spade" }, // new
    { word: "spend", parts: ["sp", "e", "n", "d"], image: "zimages/consonantblend_s/spend" }, // new
    { word: "spice", parts: ["sp", "i", "c", "e"], image: "zimages/consonantblend_s/spice" }, // new
    { word: "spoon", parts: ["sp", "oo", "n"], image: "zimages/consonantblend_s/spoon" }, // new

    { word: "stage", parts: ["st", "a", "g", "e"], image: "zimages/consonantblend_s/stage" }, // new
    { word: "stair", parts: ["st", "ai", "r"], image: "zimages/consonantblend_s/stair" }, // new
    { word: "straw", parts: ["st", "r", "aw"], image: "zimages/consonantblend_s/straw" }, // new
    { word: "string", parts: ["st", "r", "i", "ng"], image: "zimages/consonantblend_s/string" }, // new
    { word: "stone", parts: ["st", "o", "n", "e"], image: "zimages/consonantblend_s/stone" }, // new

    { word: "swirl", parts: ["sw", "ir", "l"], image: "zimages/consonantblend_s/swirl" }, // new
    { word: "swing", parts: ["sw", "i", "ng"], image: "zimages/consonantblend_s/swing" }, // new
    { word: "swarm", parts: ["sw", "ar", "m"], image: "zimages/consonantblend_s/swarm" }, // new
    { word: "swipe", parts: ["sw", "i", "p", "e"], image: "zimages/consonantblend_s/swipe" }, // new
    { word: "swoop", parts: ["sw", "oo", "p"], image: "zimages/consonantblend_s/swoop" } // new
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
    { word: "torch", parts: ["t", "or", "ch"], image: "zimages/diagraphs/ch/torch" },

    { word: "chin", parts: ["ch", "i", "n"], image: "zimages/diagraphs/ch/chin" }, // new
    { word: "chef", parts: ["ch", "e", "f"], image: "zimages/diagraphs/ch/chef" }, // new
    { word: "chess", parts: ["ch", "e", "ss"], image: "zimages/diagraphs/ch/chess" }, // new
    { word: "check", parts: ["ch", "e", "ck"], image: "zimages/diagraphs/ch/check" }, // new
    { word: "chick", parts: ["ch", "i", "ck"], image: "zimages/diagraphs/ch/chick" }, // new
    { word: "champ", parts: ["ch", "a", "m", "p"], image: "zimages/diagraphs/ch/champ" }, // new
    { word: "chunk", parts: ["ch", "u", "n", "k"], image: "zimages/diagraphs/ch/chunk" }, // new
    
    { word: "chase", parts: ["ch", "a", "s", "e"], image: "zimages/diagraphs/ch/chase" }, // new
    { word: "chore", parts: ["ch", "or", "e"], image: "zimages/diagraphs/ch/chore" }, // new
    { word: "chime", parts: ["ch", "i", "m", "e"], image: "zimages/diagraphs/ch/chime" }, // new

    { word: "chain", parts: ["ch", "ai", "n"], image: "zimages/diagraphs/ch/chain" }, // new
    { word: "chair", parts: ["ch", "air"], image: "zimages/diagraphs/ch/chair" }, // new
    { word: "chart", parts: ["ch", "ar", "t"], image: "zimages/diagraphs/ch/chart" }, // new
    { word: "cheap", parts: ["ch", "ea", "p"], image: "zimages/diagraphs/ch/cheap" }, // new
    { word: "cheat", parts: ["ch", "ea", "t"], image: "zimages/diagraphs/ch/cheat" }, // new

    { word: "chew", parts: ["ch", "ew"], image: "zimages/diagraphs/ch/chew" }, // new
    { word: "chili", parts: ["ch", "i", "l", "i"], image: "zimages/diagraphs/ch/chili" }, // new
    { word: "churn", parts: ["ch", "ur", "n"], image: "zimages/diagraphs/ch/churn" }, // new

    { word: "bench", parts: ["b", "e", "n", "ch"], image: "zimages/diagraphs/ch/bench" }, // new
    { word: "branch", parts: ["br", "a", "n", "ch"], image: "zimages/diagraphs/ch/branch" }, // new
    { word: "catch", parts: ["c", "a", "t", "ch"], image: "zimages/diagraphs/ch/catch" }, // new
    { word: "cinch", parts: ["c", "i", "n", "ch"], image: "zimages/diagraphs/ch/cinch" }, // new
    { word: "ditch", parts: ["d", "i", "t", "ch"], image: "zimages/diagraphs/ch/ditch" }, // new
    { word: "finch", parts: ["f", "i", "n", "ch"], image: "zimages/diagraphs/ch/finch" }, // new
    { word: "hatch", parts: ["h", "a", "t", "ch"], image: "zimages/diagraphs/ch/hatch" }, // new
    { word: "latch", parts: ["l", "a", "t", "ch"], image: "zimages/diagraphs/ch/latch" }, // new
    { word: "match", parts: ["m", "a", "t", "ch"], image: "zimages/diagraphs/ch/match" }, // new
    { word: "stretch", parts: ["str", "e", "t", "ch"], image: "zimages/diagraphs/ch/stretch" } // new
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
    { word: "wing", parts: ["w", "i", "ng"], image: "zimages/diagraphs/ng/wing" },

    { word: "hang", parts: ["h", "a", "ng"], image: "zimages/diagraphs/ng/hang" }, // new
    { word: "sang", parts: ["s", "a", "ng"], image: "zimages/diagraphs/ng/sang" }, // new
    { word: "sung", parts: ["s", "u", "ng"], image: "zimages/diagraphs/ng/sung" }, // new
    { word: "gang", parts: ["g", "a", "ng"], image: "zimages/diagraphs/ng/gang" }, // new

    { word: "clang", parts: ["cl", "a", "ng"], image: "zimages/diagraphs/ng/clang" }, // new
    { word: "slang", parts: ["sl", "a", "ng"], image: "zimages/diagraphs/ng/slang" }, // new
    { word: "cling", parts: ["cl", "i", "ng"], image: "zimages/diagraphs/ng/cling" }, // new
    { word: "sling", parts: ["sl", "i", "ng"], image: "zimages/diagraphs/ng/sling" }, // new
    { word: "fling", parts: ["fl", "i", "ng"], image: "zimages/diagraphs/ng/fling" }, // new
    { word: "flung", parts: ["fl", "u", "ng"], image: "zimages/diagraphs/ng/flung" }, // new

    { word: "bring", parts: ["br", "i", "ng"], image: "zimages/diagraphs/ng/bring" }, // new
    { word: "wring", parts: ["wr", "i", "ng"], image: "zimages/diagraphs/ng/wring" }, // new
    { word: "wrong", parts: ["wr", "o", "ng"], image: "zimages/diagraphs/ng/wrong" }, // new
    { word: "stung", parts: ["st", "u", "ng"], image: "zimages/diagraphs/ng/stung" }, // new
    { word: "sprung", parts: ["spr", "u", "ng"], image: "zimages/diagraphs/ng/sprung" }, // new

    { word: "thong", parts: ["th", "o", "ng"], image: "zimages/diagraphs/ng/thong" }, // new
    { word: "along", parts: ["a", "l", "o", "ng"], image: "zimages/diagraphs/ng/along" }, // new
    { word: "young", parts: ["y", "ou", "ng"], image: "zimages/diagraphs/ng/young" }, // new
    { word: "sitting", parts: ["s", "i", "tt", "i", "ng"], image: "zimages/diagraphs/ng/sitting" }, // new    
    { word: "ping", parts: ["p", "i", "ng"], image: "zimages/diagraphs/ng/ping" }, // new
    { word: "zing", parts: ["z", "i", "ng"], image: "zimages/diagraphs/ng/zing" } // new
  ],

  diagraphs_sh: [
    { word: "blush", parts: ["bl", "u", "sh"], image: "zimages/diagraphs/sh/blush" },
    { word: "cash", parts: ["c", "a", "sh"], image: "zimages/diagraphs/sh/cash" },
    { word: "ship", parts: ["sh", "i", "p"], image: "zimages/diagraphs/sh/ship" },
    { word: "shrimp", parts: ["sh", "r", "i", "m", "p"], image: "zimages/diagraphs/sh/shrimp" },
    { word: "shrug", parts: ["sh", "r", "u", "g"], image: "zimages/diagraphs/sh/shrug" },

    { word: "shock", parts: ["sh", "o", "ck"], image: "zimages/diagraphs/sh/shock" }, // new
    { word: "shook", parts: ["sh", "oo", "k"], image: "zimages/diagraphs/sh/shook" }, // new
    { word: "shoot", parts: ["sh", "oo", "t"], image: "zimages/diagraphs/sh/shoot" }, // new
    { word: "shack", parts: ["sh", "a", "ck"], image: "zimages/diagraphs/sh/shack" }, // new
    { word: "shell", parts: ["sh", "e", "ll"], image: "zimages/diagraphs/sh/shell" }, // new
    { word: "shelf", parts: ["sh", "e", "l", "f"], image: "zimages/diagraphs/sh/shelf" }, // new
    { word: "shrub", parts: ["sh", "r", "u", "b"], image: "zimages/diagraphs/sh/shrub" }, // new

    { word: "shade", parts: ["sh", "a", "d", "e"], image: "zimages/diagraphs/sh/shade" }, // new
    { word: "shake", parts: ["sh", "a", "k", "e"], image: "zimages/diagraphs/sh/shake" }, // new
    { word: "shine", parts: ["sh", "i", "n", "e"], image: "zimages/diagraphs/sh/shine" }, // new
    { word: "shrine", parts: ["sh", "r", "i", "n", "e"], image: "zimages/diagraphs/sh/shrine" }, // new

    { word: "sharp", parts: ["sh", "ar", "p"], image: "zimages/diagraphs/sh/sharp" }, // new
    { word: "sheep", parts: ["sh", "ee", "p"], image: "zimages/diagraphs/sh/sheep" }, // new
    { word: "sheet", parts: ["sh", "ee", "t"], image: "zimages/diagraphs/sh/sheet" }, // new
    { word: "shirt", parts: ["sh", "ir", "t"], image: "zimages/diagraphs/sh/shirt" }, // new
    { word: "shore", parts: ["sh", "or", "e"], image: "zimages/diagraphs/sh/shore" }, // new
    { word: "short", parts: ["sh", "or", "t"], image: "zimages/diagraphs/sh/short" }, // new
    { word: "shout", parts: ["sh", "ou", "t"], image: "zimages/diagraphs/sh/shout" }, // new

    { word: "shrink", parts: ["sh", "r", "i", "n", "k"], image: "zimages/diagraphs/sh/shrink" }, // new
    { word: "shrill", parts: ["sh", "r", "i", "ll"], image: "zimages/diagraphs/sh/shrill" }, // new
    { word: "shuffle", parts: ["sh", "u", "ff", "l", "e"], image: "zimages/diagraphs/sh/shuffle" }, // new

    { word: "shower", parts: ["sh", "ow", "er"], image: "zimages/diagraphs/sh/shower" }, // new
    { word: "shimmer", parts: ["sh", "i", "mm", "er"], image: "zimages/diagraphs/sh/shimmer" }, // new
    { word: "shiver", parts: ["sh", "i", "v", "er"], image: "zimages/diagraphs/sh/shiver" } // new
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
    { word: "tooth", parts: ["t", "oo", "th"], image: "zimages/diagraphs/th/tooth" },

    { word: "thank", parts: ["th", "a", "n", "k"], image: "zimages/diagraphs/th/thank" }, // new
    { word: "thin", parts: ["th", "i", "n"], image: "zimages/diagraphs/th/thin" }, // new
    { word: "thing", parts: ["th", "i", "ng"], image: "zimages/diagraphs/th/thing" }, // new
    { word: "then", parts: ["th", "e", "n"], image: "zimages/diagraphs/th/then" }, // new
    { word: "them", parts: ["th", "e", "m"], image: "zimages/diagraphs/th/them" }, // new
    { word: "thirst", parts: ["th", "ir", "s", "t"], image: "zimages/diagraphs/th/thirst" }, // new

    { word: "throb", parts: ["th", "r", "o", "b"], image: "zimages/diagraphs/th/throb" }, // new
    { word: "thud", parts: ["th", "u", "d"], image: "zimages/diagraphs/th/thud" }, // new
    { word: "thug", parts: ["th", "u", "g"], image: "zimages/diagraphs/th/thug" }, // new
    { word: "thumbs", parts: ["th", "u", "m", "b", "s"], image: "zimages/diagraphs/th/thumbs" }, // new
    { word: "thump", parts: ["th", "u", "m", "p"], image: "zimages/diagraphs/th/thump" }, // new
    { word: "thunder", parts: ["th", "u", "n", "d", "er"], image: "zimages/diagraphs/th/thunder" }, // new

    { word: "thatch", parts: ["th", "a", "t", "ch"], image: "zimages/diagraphs/th/thatch" }, // new
    { word: "thatch", parts: ["th", "a", "t", "ch"], image: "zimages/diagraphs/th/thatch" }, // new
    { word: "thaw", parts: ["th", "aw"], image: "zimages/diagraphs/th/thaw" }, // new
    { word: "thrice", parts: ["th", "r", "i", "c", "e"], image: "zimages/diagraphs/th/thrice" }, // new

    { word: "there", parts: ["th", "ere"], image: "zimages/diagraphs/th/there" }, // new
    { word: "these", parts: ["th", "e", "s", "e"], image: "zimages/diagraphs/th/these" }, // new
    { word: "they", parts: ["th", "ey"], image: "zimages/diagraphs/th/they" }, // new

    { word: "thrice", parts: ["th", "r", "i", "c", "e"], image: "zimages/diagraphs/th/thrice" }, // new
    { word: "throw", parts: ["th", "r", "ow"], image: "zimages/diagraphs/th/throw" }, // new
    { word: "thinker", parts: ["th", "i", "n", "k", "er"], image: "zimages/diagraphs/th/thinker" }, // new

    { word: "throne", parts: ["th", "r", "o", "n", "e"], image: "zimages/diagraphs/th/throne" }, // new
    { word: "throat", parts: ["th", "r", "oa", "t"], image: "zimages/diagraphs/th/throat" }, // new
    { word: "thrive", parts: ["th", "r", "i", "v", "e"], image: "zimages/diagraphs/th/thrive" } // new
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



/* ======================================================
   CONFETTI EXPLOSION — 50 PIECES, RANDOM SIZE, 2 SECONDS
   ====================================================== */
function burstConfetti(tile, emoji) {
  const rect = tile.getBoundingClientRect();
  const trackRect = racetrack.getBoundingClientRect();

  const centerX = rect.left - trackRect.left + rect.width / 2;
  const centerY = rect.top - trackRect.top + rect.height / 2;

  const pieces = 60;

  for (let i = 0; i < pieces; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.textContent = emoji;

    const size = (1 + Math.random() * 1.8).toFixed(2);

    const angle = Math.random() * Math.PI * 2;
    const distance = 250 + Math.random() * 150;

    piece.style.left = `${centerX}px`;
    piece.style.top = `${centerY}px`;

    piece.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    piece.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
    piece.style.setProperty("--size", size);

    racetrack.appendChild(piece);

    setTimeout(() => piece.remove(), 1400);
  }
}

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

  // ⭐ FIX — load placeholder first, then real image
  loadImage(currentWord.image);

  // ⭐ Build letter buttons for this word
  createLetters(currentWord.parts);
}


// --------------------
// PLACEHOLDER IMAGE LOADER
// --------------------
function loadImage(basePath) {
  const imgEl = document.getElementById("image");
  const placeholder = "zimages/zplaceholder.png";

  // ⭐ Always reset to placeholder FIRST
  imgEl.src = placeholder;

  const exts = [".png", ".jpg", ".jpeg"];
  let loaded = false;

  exts.forEach(ext => {
    const testImg = new Image();
    const testSrc = `${basePath}${ext}`;

    testImg.onload = () => {
      if (!loaded) {
        loaded = true;
        imgEl.src = testSrc;
      }
    };

    testImg.onerror = () => { /* ignore — placeholder remains */ };

    testImg.src = testSrc;
  });
}


// --------------------
// NEXT / PREVIOUS / SHUFFLE
// --------------------
function nextWord() {
  loadWord(currentWordIndex + 1);
}

function prevWord() {
  loadWord(currentWordIndex - 1);
}

function shuffleWord() {
  const rand = Math.floor(Math.random() * wordList.length);
  loadWord(rand);
}


// --------------------
// LETTER BUTTONS (your original)
// --------------------
function createLetters(parts) {
  const lettersDiv = document.getElementById("letters");
  lettersDiv.innerHTML = "";

  parts.forEach((p, i) => {
    const btn = document.createElement("button");
    btn.className = "letter-btn";
    btn.textContent = p;

    const isLast = i === parts.length - 1;
    const isMagicE = isLast && p.toLowerCase() === "e";

    if (isMagicE) {
      btn.classList.add("blended");
      btn.classList.add("fixedE");
      btn.disabled = true;
      btn.style.animation = "none";
    } else {
      btn.style.animation = "bounceVibrateGroup 0.8s infinite";

      btn.addEventListener("click", () => {
        btn.classList.toggle("selected");

        if (btn.classList.contains("selected")) {
          btn.style.animation = "none";
        } else {
          btn.style.animation = "bounceVibrateGroup 0.8s infinite";
        }

        updateBlendGlow();
      });
    }

    lettersDiv.appendChild(btn);
  });

  blendBtn.classList.remove("ready");
  blendBtn.classList.remove("pressed");
}

function updateBlendGlow() {
  const total = document.querySelectorAll(".letter-btn").length;
  const selected = document.querySelectorAll(".letter-btn.selected, .letter-btn.fixedE").length;

  if (selected === total) {
    blendBtn.classList.add("ready");
    blendBtn.style.animation = "bounceVibrateGroup 0.8s infinite";
  } else {
    blendBtn.classList.remove("ready");
    blendBtn.style.animation = "none";
  }
}


// --------------------
// BLEND EFFECT
// --------------------
blendBtn.addEventListener("click", () => {

  // Stop blend button animation
  blendBtn.classList.remove("ready");
  blendBtn.classList.add("pressed");
  blendBtn.style.animation = "none";

  const lettersDiv = document.getElementById("letters");
  const selected = document.querySelectorAll(".letter-btn.selected, .letter-btn.fixedE");
  if (selected.length === 0) return;

  // Turn ALL letters yellow + animate pop once
  selected.forEach(b => {
    b.classList.add("blended");
    b.style.animation = "bounceVibrateGroup 0.8s 1";
  });

  // Your old animation for the whole row still works
  lettersDiv.classList.add("bounceVibrateGroup");

  // Disable dice while blending
  dice.classList.add("disabledDice");
  dice.classList.remove("dice-active");
  dice.classList.remove("dice-hop");

  setTimeout(() => {
    lettersDiv.classList.remove("bounceVibrateGroup");

    dice.classList.remove("disabledDice");
    dice.classList.add("dice-active");

  }, 1500);
});



// --------------------
// DICE ROLL
// --------------------
dice.addEventListener("click", async () => {
  if (diceRolling || dice.classList.contains("disabledDice")) return;

  diceRolling = true;
  diceSound.play();

  // Stop idle glowing + bobbing
  dice.classList.remove("dice-active");

  // Start hop bounce animation
  dice.classList.add("dice-hop");

  // fast → medium → slow hops
  for (let i = 0; i < 10; i++) {
    const tempNum = Math.floor(Math.random() * 6) + 1;
    dice.textContent = ["⚀","⚁","⚂","⚃","⚄","⚅"][tempNum - 1];

    const speed = i < 3 ? 60 : i < 6 ? 110 : 160;
    await new Promise(r => setTimeout(r, speed));
  }

  const weighted = [3,4,5,6,3,4,5,6,6,5,4,3,2,1];  
  const result = weighted[Math.floor(Math.random() * weighted.length)];
  dice.textContent = ["⚀","⚁","⚂","⚃","⚄","⚅"][result - 1];

  dice.classList.remove("dice-hop");
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
      div.style.textAlign = "center";

      if (grid[r][c] === "start") div.textContent = "🏁";
      else if (grid[r][c] === "end") div.textContent = "🏆";
      else if (grid[r][c] === "path") {
        const tileIndex = r * cols + c;

        // ⚡🔥 BONUS TILE GENERATION — now 25% total with pattern assist
        // ⚡🔥 SMALL INCREASE FROM CURRENT VERSION
        if ((r + c) % 4 === 0 && Math.random() < 0.5) {
          // Slightly increased lightning pattern chance
          div.textContent = "⚡";
          div.classList.add("lightning-tile");
          lightningPositions.push(tileIndex);

        } else if ((r + c) % 5 === 0 && Math.random() < 0.5) {
          // Slightly increased fire pattern chance
          div.textContent = "🔥";
          div.classList.add("fire-tile");

        } else if (Math.random() < 0.20 && !lightningPositions.includes(tileIndex)) {
          // Slightly increased extra lightning
          div.textContent = "⚡";
          div.classList.add("lightning-tile");
          lightningPositions.push(tileIndex);

        } else if (Math.random() < 0.20 &&
                  !lightningPositions.some(p => Math.abs(tileIndex - p) <= 2)) {
          // Slightly increased extra fire
          div.textContent = "🔥";
          div.classList.add("fire-tile");

        } else {
          div.textContent = "⬜";
        }

      } else if (Math.random() < 0.20) {
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

    players.forEach((p, index) => {
      const emojiSpan = document.createElement("span");
      emojiSpan.className = "animal";
      emojiSpan.dataset.player = index;
      emojiSpan.textContent = p.emoji;
      emojiSpan.style.position = "absolute";

      // Player 1 always on top
      emojiSpan.style.zIndex = index === 0 ? "999" : "10";

      // ⭐ NEW: Player 1 glows on game load
      if (index === 0) {
        emojiSpan.classList.add("active-player");
      }

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

    players.forEach((p, index) => {
      const span = document.createElement("span");
      span.className = "animal";
      span.dataset.player = index;      // <-- NEW
      span.textContent = p.emoji;
      span.style.position = "absolute";

      span.style.zIndex = index === 0 ? "999" : "10";  // <-- NEW

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

        // 1️⃣ Confetti (1.3s)
        burstConfetti(currentTile, emoji);
        await new Promise(r => setTimeout(r, 1400));

        // 2️⃣ Tile pop (0.6s)
        currentTile.classList.add("active-bonus");
        await new Promise(r => setTimeout(r, 600));
        currentTile.classList.remove("active-bonus");

        // 3️⃣ Tiny delay for visual smoothness (no shake)
        await new Promise(r => requestAnimationFrame(r));
        await new Promise(r => setTimeout(r, 150));

        // 4️⃣ Smooth glide
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

    showSmallFinishPopup(player.emoji, `${player.emoji} finished! Rank: ${player.rank}`);

    // 🏁 All players finished?
    if (finishedPlayers.length === players.length) {

      // show final Race Finished popup first
      // ⭐ Show RACE FINISHED popup + last player’s rank together
      showSmallFinishPopup(
        "🏁",
        `RACE FINISHED!\n${player.emoji} finished! Rank: ${player.rank}`
      );
      
      // ⭐ After pressing OK → show FINAL RANKINGS
      nextPopupAction = () => {
        showRankingPopup();
      };

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

  // existing player highlighting stays
  players.forEach((p, i) => {
    if (p.element)
      p.element.style.filter = i === currentPlayer ? "drop-shadow(0 0 20px yellow)" : "none";
  });

  // 🔥 NEW: Dice glows & bobbing ONLY on the active player's turn
  if (!dice.classList.contains("disabledDice")) {
    dice.classList.add("dice-active");
  } else {
    dice.classList.remove("dice-active");
  }
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
// FINISH POPUPS
// --------------------
function showSmallFinishPopup(emoji, text) {
  document.getElementById("smallPopupEmoji").textContent = emoji;
  document.getElementById("smallPopupText").textContent = text;

  document.getElementById("smallFinishPopup").classList.remove("hidden");
}

document.getElementById("smallPopupBtn").onclick = () => {
  document.getElementById("smallFinishPopup").classList.add("hidden");
};

function showRankingPopup() {
  let html = "<div style='font-size:1em;'>";
  finishedPlayers.forEach(p => {
    html += `${p.rank}. ${p.emoji}<br>`;
  });
  html += "</div>";

  document.getElementById("rankingPopupEmoji").textContent = "🏆";
  document.getElementById("rankingPopupText").innerHTML = html;

  document.getElementById("rankingPopup").classList.remove("hidden");
}

document.getElementById("rankingPopupBtn").onclick = () => {
  document.getElementById("rankingPopup").classList.add("hidden");
};




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