function generateDocument1(characters, document) {
  // Write your code here.
  const charMap = {};
  if (document.length == 0) return true;

  //build characters stocks
  for (let i = 0; i < characters.length; i++) {
    console.log(characters[i]);

    if (charMap.hasOwnProperty(characters[i])) {
      charMap[characters[i]]++;
    } else {
      charMap[characters[i]] = 1;
    }
  }

  for (let j = 0; j < document.length; j++) {
    if (!charMap.hasOwnProperty(document[j])) return false;
    // else it must have
    charMap[document[j]]--; // take one item out
    if (charMap[document[j]] < 0) return false; // if less than 0, meaning cannot fulfill
  }

  console.log(charMap);

  return true;
}

function generateDocument2(characters, document) {
  // Write your code here.
  const charMap = {};
  if (document == "") return true;

  //build characters stocks
  for (const char of characters) {
    console.log(char);
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (const char of document) {
    console.log(char);
    if (!charMap.hasOwnProperty(char) || charMap[char] == 0) return false;
    // else it must have that char stock...
    charMap[char]--; // take one item out
  }

  return true;
}

console.log(generateDocument2("a", "abaewfawr"));
