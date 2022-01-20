// https://leetcode.com/problems/string-compression/
// 443. String Compression

export function compress(chars) {
  // Write your code here.
  if (!chars.length) return 0;

  let blockCounter = 1;
  let result = [];

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] == chars[i + 1]) {
      blockCounter++;
    } else {
      // extract to result
      if (blockCounter == 1) {
        result.push(chars[i]);
      } else {
        result.push(chars[i], ...`${blockCounter}`.split(""));
      }
      blockCounter = 1; // reset
    }
  }

  chars.splice(0, chars.length);

  chars.push(...result);

  return chars.length;
}

// var compress = function(chars) {
//   if (!chars.length) return 0;
//   let j = 0;
//   let cur = chars[0];
//   let counter = 0;
//   for (let i = 0; i <= chars.length; i++) {
//     if (chars[i] === cur) {
//       counter++;
//     } else {
//       chars[j] = cur;
//       if (counter > 1) {
//         const s = counter.toString();
//         for (let k = 0; k < s.length; k++) chars[++j] = s[k];
//       }
//       j++;
//       cur = chars[i];
//       counter = 1;
//     }
//   }
//   return j;
// };

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
); // return 4

console.log(compress(["a"]));

console.log(compress(["a", "b", "b"]));
console.log(compress(["a", "a", "a"]));

console.log(
  compress([
    "a",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
  ])
); // return 4
