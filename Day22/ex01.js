const obj1 = {
  username: "tuekm",
};

//object value
/**key : value
 * key: là string hoặc symbol
 * value: có thể nhận mọi loại dữ liệu: number, string, array, object, function, null, ...
 * value là function thif gọi là phương thức.
 *
 * co' the' them, sua xo'a cac thuoc tinh cua obj
 * co' the' tao mo'i 1 obj vs new obj
 */

const userInfor = {
  fullname: "Kieu Minh Tue",
  address: "vinhx phuc",
  learn: function (lesson, time) {
    console.log(`Toi hoc ${lesson} vao luc ${time}`);
  },
};

console.log(userInfor.fullname);
userInfor.learn("JS", "12 h ");

const obj2 = new Object();
const obj3 = new Object({ title: "F8" });

console.log(obj3);

userInfor.age = 23;

console.log(userInfor);

userInfor.age = 24;

console.log(userInfor);

delete userInfor.age;

console.log(userInfor.age);

const newKey = "email";

userInfor[newKey] = "kieuminhtue@gmail.com";

console.log(userInfor);

userInfor[`so thich`] = ["game", "co vua", "king of grap", "lol", ""];
console.log(userInfor);

//  sử dụng dấu [] để khai báo key là chuỗi đặc biệt hoặc tham chiếu đến 1 biến.

let title = "Tivi samsung 64 inch";
let price = 3000;
let year = 2023;

const product = { title, price, year };
console.log(product);































