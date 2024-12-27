const fruits = [
  "apple",
  "banana",
  "kiwi",
  "kiwi",
  "banana",
  "orange",
  "apple",
  "kiwi",
];

function removeDuplicate(arr) {
  const uniqueFruits = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueFruits.includes(arr[i])) {
      uniqueFruits.push(arr[i]);
    }
  }
  return uniqueFruits;
}

const result = removeDuplicate(fruits);
console.log(result);
