const obj1 = { email: "kieuminhtue@gmail.com" };
const obj2 = { passwork: "123456" };

// const objResult = Object.assign(
//   obj1,
//   obj2,
//   { address: "BG" },
//   { address: "HN" }
// );

// console.log(obj1);
// console.log(objResult);
// console.log(Obj1 === objResult);

objResult.age = 33;

console.log(obj1);

const product1 = { title: "san pham A", price: 200 };

const product2 = product1;

product2.price.price = 1000;

console.log(product1);
// console.log(obj2);

const objCopy = Object.assign({}, obj1);
// console.log(objCopy);
