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
