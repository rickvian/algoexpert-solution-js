const firstNonRepeatingCharacter = (string) => {
  const charMap = {};

  for (let i = 0; i < string.length; i++) {
    if (charMap.hasOwnProperty(string[i])) {
      charMap[string[i]] = -1;
    } else {
      charMap[string[i]] = i;
    }
  }

  let min = Infinity;
  for (let key in charMap) {
    if (charMap[key] >= 0 && charMap[key] < min) {
      // if unique, and smaller
      min = charMap[key];
    }
  }

  if (min == Infinity) {
    return -1;
  } else {
    return min;
  }
};

// const result = firstNonRepeatingCharacter("faadabcbbebdf");

const result = firstNonRepeatingCharacter("aabcc");
console.log(result);
