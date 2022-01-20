const palindrome = (text) => {
  let isPalindrome = true;
  for (let i = 0; i < Math.floor(text.length / 2); i++) {
    const left = text[i];
    const right = text[text.length - 1 - i];
    isPalindrome = isPalindrome && left == right;
  }

  return isPalindrome;
};

const res = palindrome("kodok");
