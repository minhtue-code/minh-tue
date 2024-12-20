const product = {
  title: "san pam a",
  price: 200,
  description: "thong tin chi tiet abc ...",
};
for (key in product) {
  console.log(`gia tri cua ${key} la ${product[key]}`);
}

// for (item of product) {
// console.log(item);
//}  sai
// for... of chi a'p dung voi array

//consoloe.log (product.lenth);   obj khong co thuoc tinh length

console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));

const arrInfor = [
  ["fullname", "hoangnm"],
  ["age", 32],
  ["address", " HN"],
];

const objInf = {};
for (value of arrInfor) {
  console.log(value);
  objInf[value[0]] = value[1];
}

console.log(objInf);

const cart = {
  product: [
    { id: 1, title: "san pham A", price: 200, quantily: 2 },
    { id: 2, title: "san pham B", price: 300, quantily: 4 },
    { id: 3, title: "san pham C", price: 230, quantily: 1 },
  ],
  getTotal: function () {
    let total = 0;
    for (let value of this.products) {
      total += value.price * value.quantily * value.quantily;
    }
    return total;
  },
};

console.log(cart.getTotal());

const userInfor = {
  fullname: "Kieu Tue",
  learn: function (lesson, time) {
    console.log(`${this.fullname} học ${lesson} lúc ${time}`);
  },
  getName: function () {
    console.log(this.fullname);
  },
};

// từ khóa `this` trỏ đến chính obj chứ từ khóa - nó có nghĩa là chính obj này.

userInfor.learn("js", "tối nay");
userInfor.getName();
