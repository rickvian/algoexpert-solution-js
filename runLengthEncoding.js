export function runLengthEncoding(string) {
  // Write your code here.
  let blockCounter = 1;
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i + 1] && blockCounter != 9) {
      blockCounter++;
    } else {
      // extract to result
      result += `${blockCounter}${string[i]}`;
      blockCounter = 1; // reset
    }
  }

  return result;
}

console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"));
