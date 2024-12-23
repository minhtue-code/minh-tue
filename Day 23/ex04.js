const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

const arr2 = arr1.filter((item) => item % 2 === 0);
console.log(arr2);

const product = [
  {
    id: 1,
    title: "san pham A",
    price: 200,
    quantily: 2,
    discount: 0.2,
    amount: 320,
  },
  { id: 2, title: "san pham B", price: 200, quantily: 1, discount: 0.1 },
  { id: 3, title: "san pham C", price: 200, quantily: 3, discount: 0.05 },
  { id: 4, title: "san pham D", price: 200, quantily: 2, discount: 0.35 },
];

// const hotSaleProducts = product.filter((product) => product.discount >= 0.2);

// console.log(hotSaleProducts);

// product.forEach((item) => console.log(item));

let total = 0;
product.forEach((item) => {
  console.log(item);
  total += item.price * item.quantily * (1 - item.discount);
});

console.log(total);

const getProductsName = product.map((item) => item.title);
console.log(getProductsName);

const productNew = product.map((item) => {
  item.amount = item.price * item.quantily * (1 - item.discount);
  return item;
});

console.log(productNew);
