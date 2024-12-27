function fibonacci(n) {
  if (!Number.isInteger(n) || n < 1) {
    return "phần tử không hợp lệ";
  }

  let a = 0,
    b = 1;
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(a);
    [a, b] = [b, a + b];
  }
  return result;
}

console.log(fibonacci(10));
console.log(fibonacci(5));
console.log(fibonacci(0));
console.log(fibonacci(-5));
console.log(fibonacci("abc"));
console.log(fibonacci(1));
