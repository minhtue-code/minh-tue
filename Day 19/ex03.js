// for (let i = 0; i < 10; i++) {
//   console.log(`gia tri cua ${i}`);
// }

function printPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log(`gia tri n: ${n}, gia tri i: = ${i}`);
      return false;
    }
  }
  return true;
}

function printPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log(`gia tri n: ${n}, gia tri i: = ${i}`);
    }
  }
}
printPrime(100);
