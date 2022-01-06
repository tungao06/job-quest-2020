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
