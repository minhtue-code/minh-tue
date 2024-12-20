const list = ["a", "b", "c", "d"];

let myString = list.join(); // default : noi cac phan tu boi dau ,
let myString1 = list.join("");
console.log(myString);
console.log(myString1);

console.log(list.toString());

console.log(list.reverse());

let paragraph =
  "lorem , gr b rbg btr brt btrm brtmb hi mai tue rtbmtobm tbmtobtm er rrmevmrv lv";

console.log(paragraph.split(""));

let myArr = paragraph.split(",");

console.log(myArr.join(""));
