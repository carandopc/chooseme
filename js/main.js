window.onload = () => {
  listen();
}

listen = () => {
  var input = document.getElementById("input");
  input.addEventListener("input", (event) => translate(event.target.value));
  var output = document.getElementById("output");
  output.addEventListener("click", (event) => copy(event.target.innerHTML));
}

translate = (input) => {
  var text = trim(input);
  var tagalog = replace(text);
  var baybayin = parse(tagalog);

  var output = document.getElementById("output");
  output.innerHTML = baybayin;
}

trim = (input) => {
  if (input == null) {
    input = "";
  } else {
    input = input.trim().toLowerCase();
  }

  return input;
}

replace = (input) => {
  // ALLOW ONLY LETTERS, PERIOD, AND COMMA
  input = input.replace(/[^A-Za-z., ]/g, "");
  // COMBINE VOWELS
  input = input.replace(/e/g, "i");
  input = input.replace(/u/g, "o");
  // COMBINE CONSONANTS
  input = input.replace(/v/g, "b");
  input = input.replace(/[cq]/g, "k");
  input = input.replace(/r/g, "d");
  input = input.replace(/j/g, "h");
  input = input.replace(/ng/g, "+");
  input = input.replace(/f/g, "p");
  input = input.replace(/[xz]/g, "s");
  // COMBINE SPACES
  input = input.replace(/[ ]+/g, " ");

  return input;
}

let special = new Map();
special.set(" ", " ");
special.set(",", "\u1735");
special.set(".", "\u1736");

let vowels = new Map();
vowels.set("a", "\u1700");
vowels.set("i", "\u1701");
vowels.set("o", "\u1702");

let consonants = new Map();
consonants.set("b", "\u170A");
consonants.set("k", "\u1703");
consonants.set("d", "\u1707");
consonants.set("g", "\u1704");
consonants.set("h", "\u1711");
consonants.set("l", "\u170E");
consonants.set("m", "\u170B");
consonants.set("n", "\u1708");
consonants.set("+", "\u1705");
consonants.set("p", "\u1709");
consonants.set("s", "\u1710");
consonants.set("t", "\u1706");
consonants.set("w", "\u170F");
consonants.set("y", "\u170C");

let marks = new Map();
marks.set("a", "");
marks.set("i", "\u1712");
marks.set("o", "\u1713");
marks.set("+", "\u1714");

parse = (input) => {
  let count = 0;
  let output = "";

  while (count < input.length) {
    let currentChar = input.charAt(count);

    if (special.has(currentChar)) {
      output += special.get(currentChar);
      count++;
    } else if (vowels.has(currentChar)) {
      output += vowels.get(currentChar);
      count++;
    } else {
      output += consonants.get(currentChar);
      count++;

      let nextChar = input.charAt(count);

      if (vowels.has(nextChar)) {
        output += marks.get(nextChar);
        count++;
      } else {
        output += marks.get("+");
      }
    }
  }

  return output;
}

copy = (input) => {
  const text = document.createElement('textarea');
  text.value = input;
  document.body.appendChild(text);
  text.select();
  document.execCommand('copy');
  document.body.removeChild(text);
}