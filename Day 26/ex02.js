// let str1 = "";
// let str2 = '';
let str3 = ``; // template stringstring
let str4 = new String(123); // hạn chế không dùng cách này
console.log(str4);

let str5 = "F8 - hoc lap trinh de di lam!";

console.log(str5[5]);
console.log(str5[-1]);
console.log(str5[15]);
str5[0] = "H";
console.log(str5); //immutate = bat bien

// duyệt qua các ký tự của chuỗichuỗi
// for (value of str5) {
//   console.log(value);
// }

// nối chuỗi
let str6 = str5 + "!!";
console.log(str6);
console.log(str5.concat("??", "@@"));
console.log(`${str5} luong cao`);

console.log(str5);
console.log(new String());
