// const list = ["table" , " television" , "pen"]

// let re list.indexOf("pen");

// console.log(result);

const products = [
  { id: 1, title: "Product A", price: 200 },
  { id: 2, title: "Product B" },
  { id: 3, title: "Product C", price: 200 },
];

function validationProduct(product) {
  if (
    !product.price ||
    typeof product.price !== "number" ||
    product.price !== product.price ||
    product.price < 0
  ) {
    return false;
  }
  return true;
}

for (let i = 0; i < products.length; i++) {
  if (!validationProduct(products[i])) {
    console.log(i);
  }
}

const list = [1, 2, 3, "f8", NaN, { fullname: "Kieu Minh Tue" }];

console.log(list, index0f(NaN));
console.log(list.indexOf({ fullname: " Kieu Minh Tue" }));
