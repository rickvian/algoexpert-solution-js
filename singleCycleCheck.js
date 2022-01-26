const hasSingleCycle = (array) => {
  const getIndex = (currentIndex, array) => {
    console.log(currentIndex);
    const jump = array[currentIndex];
    let nextIndex = (currentIndex + jump) % array.length;
    console.log(nextIndex);
    if (nextIndex >= 0) {
      console.log("here");
      return nextIndex;
    }
    //negative jump
    console.log("here");
    return array.length + nextIndex;
  };

  // console.log(getIndex(8, array))
  // return false

  let passedItemCount = 0;
  let i = 0;

  if (array[0] == 0) return false; // edge case on always visit first node

  // return false; //# debug

  while (passedItemCount < array.length) {
    //if i is previously passed index
    console.log(i, passedItemCount);

    i = getIndex(i, array);
    passedItemCount++;
    console.log(i, array[i]);
    if (i == 0) {
      if (passedItemCount == array.length) {
        return true;
      } else {
        console.log("this case");
        return false;
      }
    }
  }
  return false;
};

console.log(hasSingleCycle([2, 3, 1, -4, -4, 2])); // true

console.log(hasSingleCycle([1, -1, 1, -1])); // false

console.log(hasSingleCycle([1, 2, 3, 4, -2, 3, 7, 8, -26])); // true
