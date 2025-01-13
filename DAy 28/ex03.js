// const infor = {
//   email: "kieu@gmail.com",
// };
// let str = JSON.stringify(infor);
// console.log(str);
// console.log(typeof str);
// console.log(JSON.parse(str));

import greet from "./ex02";

const datas = null;
console.log(JSON.stringify(NaN));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));
console.log(JSON.stringify(true));
console.log(JSON.stringify(""));
console.log(JSON.stringify(0));
console.log(JSON.stringify([]));
console.log(JSON.stringify(Infinity));

// console.log(JSON.parse(NaN));
console.log(JSON.parse(null));
// console.log(JSON.parse(undefined));
console.log(JSON.parse(true));
// console.log(JSON.parse(""));
console.log(JSON.parse(0));
// console.log(JSON.parse([]));
// console.log(JSON.parse(Infinity));

console.log("___________");
const user = {
  fullname: "KIEU MINH TUE",
  address: undefined,
  greet() {
    console.log("hello");
  },
  now: new Date(),
};

console.log(JSON.parse(JSON.stringify(user)));

/**
 * có thể sử dụng JSON đẻ sao chép dữ liệuliệu
 */

console.log([1, 2, 3, , , 9]);

console.log(JSON.stringify([1, 2, 3, , , 9]));
console.log(JSON.parse(JSON.stringify([1, 2, 3, , , 9])));
