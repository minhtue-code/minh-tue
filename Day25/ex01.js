// const arr1 = [1, 2, 3, 4, 5];

// let total = 0;
// for (let i = 0; i < arr1.length; i++) {
//   total += arr1[i];
// }
// console.log(total);

// let total2 = arr1.reduce((accumulator, currentValue, index, arr) => {
//   console.log(`accumlator: ${accumulator}`);
//   console.log(`currentValue: ${currentValue}`);
//   console.log(`index: ${index}`);
//   console.log(`arr: ${arr}`);
//   accumulator += currentValue;
//   return accumulator;
// }, -15);
// console.log(total2);

// const arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 11];

// function isPrime(n) {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// let result = arr2.reduce((acc, cur) => {
//   if (isPrime(cur)) {
//     return acc * cur;
//   }
//   return acc;
// }, 1);

// console.log(result);

const fruits = [
  "apple",
  "banana",
  "orange",
  "kiwi",
  "orange",
  "apple",
  "kiwi",
  ,
  ,
  ,
  ,
  "apple",
];

const count = fruits.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur] += 1;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});
console.log(count);

function fruitsRemoveDuplicated(arr) {
  const uniqueFruits = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueFruits.includes(arr[i])) {
      uniqueFruits.push(arr[i]);
    }
  }
  return uniqueFruits;
}

const result = fruitsRemoveDuplicated(fruits);
console.log(result);
