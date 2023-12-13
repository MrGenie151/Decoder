const dictionary = {
  "a": "Ṑ",
  "b": "᭧",
  "c": "搙",
  "d": "ぬ",
  "e": "吻",
  "f": "䃣",
  "g": "峄",
  "h": "",
  "i": "鵤",
  "j": "獺",
  "k": "멖",
  "l": "脟",
  "m": "㠫",
  "n": "ⴄ",
  "o": "ऒ",
  "p": "ꓷ",
  "q": "",
  "r": "",
  "s": "꥔",
  "t": "牊",
  "u": "",
  "v": "泶",
  "w": "躹",
  "x": "赛",
  "y": "㈜",
  "z": "䞕",
  "A": "䦷",
  "B": "猗",
  "C": "샦",
  "D": "䲽",
  "E": "㍼",
  "F": "㉇",
  "G": "귶",
  "H": "",
  "I": "喠",
  "J": "诺",
  "K": "佀",
  "L": "粞",
  "M": "★",
  "N": "濿",
  "O": "緆",
  "P": "",
  "Q": "",
  "R": "椇",
  "S": "ﴽ",
  "T": "썒",
  "U": "뎭",
  "V": "踸",
  "W": "̥",
  "X": "۹",
  "Y": "涚",
  "Z": "ꘜ"
};

function codeify(string) {
  let result = string;
  for (let orig in dictionary) {
    if (Object.prototype.hasOwnProperty.call(dictionary, orig)) {
      const replace = dictionary[orig];
      const regex = new RegExp(orig, "g");
      result = result.replace(regex, replace);
    }
  }
  return result;
}

function decode(string) {
  let result = string;
  for (let orig in dictionary) {
    if (Object.prototype.hasOwnProperty.call(dictionary, orig)) {
      const replace = dictionary[orig];
      const regex = new RegExp(replace, "g");
      result = result.replace(regex, orig);
    }
  }
  return result;
}

const encodedString = codeify("Hello World, you freak");
console.log(encodedString);

const decodedString = decode(encodedString);
console.log(decodedString);

function encode() {
	$("#encode-output").val(codeify($("#encode-input").val()))
}

function decodestr() {
  $("#decode-output").val(decode($("#decode-input").val()));
}
