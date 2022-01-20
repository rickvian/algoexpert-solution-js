//predefined values
const fibbonaciMap = {
  1: 0,
  2: 1,
};

function getNthFib(n) {
  //algoexpert start from index 0
  if (n == 0) return 0;
  if (n == 1) return 1;

  if (n in fibbonaciMap) {
    return fibbonaciMap[n];
  } else {
    let currentValue = getNthFib(n - 1) + getNthFib(n - 2);
    fibbonaciMap[n] = currentValue;
    return currentValue;
  }
}

function getNthFibAlgoexpert(n) {
  //algoexpert start with 1
  if (n == 1) return 0;
  if (n == 2) return 1;

  if (n in fibbonaciMap) {
    return fibbonaciMap[n];
  } else {
    let currentValue = getNthFib(n - 1) + getNthFib(n - 2);
    fibbonaciMap[n] = currentValue;
    return currentValue;
  }
}

const result = getNthFib(0);

console.log(result);
