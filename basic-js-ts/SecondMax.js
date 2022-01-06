console.log("+++++++++++++++++++++++++++++++ Second max +++++++++++++++++++++++++++++++");

function secondMax(arr) {
  try {
    let uniqueArray = arr
      .sort((a, b) => a - b)
      .filter((item, pos) => {
        return arr.indexOf(item) == pos;
      });

    // console.log(uniqueArray, uniqueArray.length - 2);
    if (uniqueArray.length > 1) {
      return uniqueArray[uniqueArray.length - 2];
    } else if (uniqueArray.length > 0) {
      return uniqueArray[uniqueArray.length - 1];
    } else {
      throw new Error("Error!");
    }
  } catch (error) {
    return error;
  }
}

console.log(secondMax([2, 3, 4, 5]));
console.log(secondMax([9, 2, 21, 21]));
console.log(secondMax([4, 4, 4, 4]));
console.log(secondMax([4123]));
console.log(secondMax([]));
