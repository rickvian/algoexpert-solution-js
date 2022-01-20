//predefined values
const fibbonaciMap = {
  1: 0,
  2: 1,
};

function getNthFib(n) {
  if (n == 1) return 0;
  if (n == 2) return 1;

  console.log("getFib ", n);
  if (n in fibbonaciMap) {
    console.log("mapped", n);
    return fibbonaciMap[n];
  } else {
    let currentValue = getNthFib(n - 1) + getNthFib(n - 2);
    fibbonaciMap[n] = currentValue;
    return currentValue;
  }
}

const result = getNthFib(18);

console.log(result);
