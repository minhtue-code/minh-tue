// let i = 0;
// for (; i >= 10; i++) {
//   console.log(i);
//   if (i >= 10) {
//     break;
//   }
// }

// let j = 0;
// total = 100;
// while (j <= 100) {
//   console.log(`gia tri cua j: ${j}`);
//   if (j % 2 === 0) {
//     console.log(`gia tri cua j: ${j}`);
//     total += j;
//   }
// }

function checkPrime(n) {
  let i = 2;
  while (i <= n) {
    if (n % i === 0) {
      console.log(`gia tri cua i: ${i}`, `gia tri cua n: ${n}`);
      return false;
    }
    i++;
  }
  return true;
}
function printPrime(n) {
  for (let i = 2; i <= n; i++) {
    checkPrime(i) && console.log(i);
  }
}

printPrime(10);

let index = 10;
do {
  console.log(index);
  index++;
} while (index <= 5);
