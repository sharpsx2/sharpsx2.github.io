/* PassMan 1.0.0 - Copyright SharpSX 2021 - 2021. All rights reserved. */
function generateRandomPassword() {
  let allSymbolsSeperate = [
    "§",
    "½",
    "1",
    "!",
    "@",
    "2",
    "#",
    "3",
    "£",
    "¤",
    "4",
    "$",
    "%",
    "5",
    "&",
    "6",
    "/",
    "7",
    "{",
    "(",
    "8",
    "[",
    ")",
    "9",
    "]",
    "=",
    "0",
    "}",
    "?",
    "+",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "å",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "ö",
    "ä",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ",",
    ".",
    "-",
    "_"
  ];
  let r1 =
    allSymbolsSeperate[Math.floor(Math.random() * allSymbolsSeperate.length)];
  let r2 =
    allSymbolsSeperate[Math.floor(Math.random() * allSymbolsSeperate.length)];
  let r3 =
    allSymbolsSeperate[Math.floor(Math.random() * allSymbolsSeperate.length)];
  r3 = r3[0].toUpperCase() + r3.slice(1);
  let r4 =
    allSymbolsSeperate[Math.floor(Math.random() * allSymbolsSeperate.length)];
  let r5 =
    allSymbolsSeperate[Math.floor(Math.random() * allSymbolsSeperate.length)];
  r5 = r5[0].toUpperCase() + r5.slice(1);
  let r6 =
    allSymbolsSeperate[Math.floor(Math.random() * allSymbolsSeperate.length)];
  let r7 =
    allSymbolsSeperate[Math.floor(Math.random() * allSymbolsSeperate.length)];
  let r8 =
    allSymbolsSeperate[Math.floor(Math.random() * allSymbolsSeperate.length)];
  let r9 =
    allSymbolsSeperate[Math.floor(Math.random() * allSymbolsSeperate.length)];
  let r10 =
    allSymbolsSeperate[Math.floor(Math.random() * allSymbolsSeperate.length)];
  r10 = r10[0].toUpperCase() + r10.slice(1);
  let r11 =
    allSymbolsSeperate[Math.floor(Math.random() * allSymbolsSeperate.length)];
  let r12 =
    allSymbolsSeperate[Math.floor(Math.random() * allSymbolsSeperate.length)];
  let r13 =
    allSymbolsSeperate[Math.floor(Math.random() * allSymbolsSeperate.length)];
  let r14 =
    allSymbolsSeperate[Math.floor(Math.random() * allSymbolsSeperate.length)];
  let r15 =
    allSymbolsSeperate[Math.floor(Math.random() * allSymbolsSeperate.length)];
  r15 = r15[0].toUpperCase() + r15.slice(1);
  let r16 =
    allSymbolsSeperate[Math.floor(Math.random() * allSymbolsSeperate.length)];
  let r17 =
    allSymbolsSeperate[Math.floor(Math.random() * allSymbolsSeperate.length)];
  let r18 =
    allSymbolsSeperate[Math.floor(Math.random() * allSymbolsSeperate.length)];
  let r19 =
    allSymbolsSeperate[Math.floor(Math.random() * allSymbolsSeperate.length)];
  let r20 =
    allSymbolsSeperate[Math.floor(Math.random() * allSymbolsSeperate.length)];
  const finalPassword =
    r1 +
    r2 +
    r3 +
    r4 +
    r5 +
    r6 +
    r7 +
    r8 +
    r9 +
    r10 +
    r11 +
    r12 +
    r13 +
    r14 +
    r15 +
    r16 +
    r17 +
    r18 +
    r19 +
    r20;
  alert("Your new password is: " + finalPassword);
  console.log("Task completed succesfully.");
}

function generateWordPassword() {
  let adjectives = [
    "Different",
    "Bigger",
    "Great",
    "Few",
    "Long",
    "Adventurous",
    "aggressive",
    "agreeable",
    "alert",
    "alive",
    "amused",
    "angry",
    "attractive",
    "bad",
    "beautiful",
    "ugly",
    "bald",
    "tall",
    "short",
    "light",
    "heavy",
    "bright",
    "magical",
    "dark",
    "first",
    "second",
    "third",
    "the",
    "new",
    "old",
    "shiny",
    "funny"
  ];
  let subjectives = [
    "Football",
    "Basketball",
    "Table",
    "Lamp",
    "Bench",
    "Game",
    "Video",
    "Guy",
    "phone",
    "lemonade",
    "school",
    "college",
    "furnace",
    "monkey",
    "bell",
    "sugar",
    "tea",
    "rum",
    "coffee",
    "car",
    "computer",
    "chair",
    "salt",
    "mouse",
    "pizza",
    "dollar",
    "euro",
    "cola",
    "cent"
  ]; 
  let verbs = [
    "Fly",
    "Stand",
    "Play",
    "sit",
    "dance",
    "party",
    "fight",
    "laugh",
    "cry",
    "run",
    "walk",
    "drive",
    "achieve",
    "accelerate",
    "admire",
    "admit",
    "allow",
    "apply",
    "appear",
    "appoint",
    "analyze"
  ];
  let randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  randomAdjective = randomAdjective[0].toUpperCase() + randomAdjective.slice(1);
  let randomSubjective =
    subjectives[Math.floor(Math.random() * subjectives.length)];
  randomSubjective =
    randomSubjective[0].toUpperCase() + randomSubjective.slice(1);
  let randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  randomVerb = randomVerb[0].toUpperCase() + randomVerb.slice(1);
  let randomEndTag = Math.floor(Math.random() * 99) + 1;
  const finalPassword =
    randomAdjective + randomSubjective + randomVerb + randomEndTag;
  alert("Your new password is: " + finalPassword);
  console.log("Task completed succesfully.");
  
}
