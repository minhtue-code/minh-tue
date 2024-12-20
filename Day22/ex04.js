const produst = {
  title: "San pham A",
  price: 200,
  description: "mo ta san pham",
  stock: 200,
  sku: "sp01234",
  size: "XX",
};

// const title = produst.title;
// const price = produst.price;
// const description = produst.description;

const { title, price, ...other } = produst;

// destructuring áp dụng với object và array
// rest parameter: là phần còn lai của obj (array) khi destructuring
// rest luôn xuất hiện ở cuối khai báo trong cấu trúc destructuring
console.log(price);
console.log(other);

// spread Oparater
// dùng để trải các phần tử (hoặc thuộc tính) của array (object) cũ vào một khai báo array (object) mới.
//  spread có thể sử dụng để shallow copy, gom (gộp) object, ar
const productCopy = { ...produst, cocol: " red", isFreeShip: true };
console.log(productCopy);

const infor1 = { a: 1, b: 2 };
const infor2 = { c: 3, d: 4 };

const infor3 = { ...infor1, ...infor2 };
console.log(infor3);

const newobj = new object();
