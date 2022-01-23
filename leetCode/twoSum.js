var twoSum = function (nums, targetSum) {
  // let isFound = false;
  if (nums.length == 1) {
    return [];
  }

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == targetSum) {
        return [i, j];
      }
    }
  }
  return [];
};
