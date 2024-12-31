// Wrapper Object:
//Auto boxing : cơ chế tự động bọc các biến bởi object để sử dụng phương thức có sẵn từ function constructor của kiểu dữ liệu đó Sau khi Js thực hiện xong phương thức thì Wrapper object tự đuọc phá bỏ để dữ liệu trở về trạng thái ban đầu.

const myStr = "kieu minh tue";
console.log(myStr.toLocaleUpperCase());
console.log(myStr);

//null và undefined không có hàm tạo riêng , không có phương thức
console.log(typeof null);

console.log(typeof undefined);

function User(email, name, address) {
  this.email = email;
  this.name = name;
  this.address = address;

  this.hello = function () {
    console.log(`xin chao, minh la ${name}, minh den tu ${address}`);
  };
}

User.prototype.hello = function () {
  console.log(`xin chao minh la ${this.name},minh den tu ${this.address}`);
};
const tue = new User("kieuminhtue@gmail.com", "kieu tue", "VP");

console.log(Object.getPrototypeOf(tue));

console.log(tue.__proto__);

console.log(tue.hasOwnProperty("name"));
console.log(tue.hasOwnProperty("email"));
console.log(tue.hasOwnProperty("hello1"));
console.log(tue.hasOwnProperty("hello2"));
tue.hello();

console.log(Object.keys(tue));
