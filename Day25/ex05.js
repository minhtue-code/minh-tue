function User(email, name, address) {
  this.email = email;
  this.name = name;
  this.address = address;

  this.hello = function () {
    console.log(`xin chao, minh la ${name}, minh den tu ${address}`);
  };
}

User.prototype.getInfor = function () {
  console.log(
    `name ${this.name}, email ${this.email}, address ${this.address}`
  );
};

const tue = new User(": Tue@gmail.com", ": Tue", ": Vinh Phuc");
console.log(tue);
tue.hello();
tue.getInfor();

/**
 * dùng prototype khi nào:
 * - khi muốn tạo ra những phương thức, thuộc tính dùng chung.
 * - Dễ dàng kiểm soát hàng loạt
 * - Tối ưu bộ nhớ
 *
 * khai báo phương thức, thuộc tính trong constructor funtion khi nào:
 * - Dùng
 *
 */
