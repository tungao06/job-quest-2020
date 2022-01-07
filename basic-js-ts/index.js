console.log("+++++++++++++++++++++++++++++++ Fibonacci Sequence +++++++++++++++++++++++++++++++");

function fib(num) {
  let result = Array.from({ length: num + 1 }, (_, i) => i + 1).reduce(
    (acc, val, i, arr) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );

  return result.pop();
}

console.log(">", fib(1));
console.log(">", fib(3));
console.log(">", fib(12));

console.log("+++++++++++++++++++++++++++++++ Array shift +++++++++++++++++++++++++++++++");

function shift(arr, direction, index) {
  let i = 0;

  while (i < index) {
    if (direction == "right") arr.unshift(arr.pop());
    else arr.push(arr.shift());
    i++;
  }

  return arr;
}

console.log(">", shift(["john", "jane", "sarah", "alex"], "left", 2));
console.log(">", shift([1, 2, 3, 4, 5], "right", 3));

console.log("+++++++++++++++++++++++++++++++ Second max +++++++++++++++++++++++++++++++");

function secondMax(arr) {
  try {
    let uniqueArray = arr
      .sort((a, b) => a - b)
      .filter((item, pos) => {
        return arr.indexOf(item) == pos;
      });

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

console.log("+++++++++++++++++++++++++++++++ FizzBuzz...But +++++++++++++++++++++++++++++++");

function fizzBuzz(val) {
  const boolStrings = {
    "01": "Fizz",
    "02": "Fizz",
    "03": "Fizz",
    "04": "Fizz",
    10: "Buzz",
    20: "Buzz",
    "00": "FizzBuzz",
  };
  return boolStrings[`${val % 3}${val % 5}`] ?? val;
}

console.log(fizzBuzz(21));
console.log(fizzBuzz(25));
console.log(fizzBuzz(45));
