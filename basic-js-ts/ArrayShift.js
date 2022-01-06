console.log("+++++++++++++++++++++++++++++++ Array shift +++++++++++++++++++++++++++++++");

function shift(arr, direction, index) {
  let i = 0;

  while (i < index) {
    if (direction == "right") arr.unshift(arr.pop());
    else arr.push(arr.shift());
    // console.log(`arr`, i, arr);
    i++;
  }

  return arr;
}

console.log(">", shift(["john", "jane", "sarah", "alex"], "left", 2));
console.log(">", shift([1, 2, 3, 4, 5], "right", 3));
