// const obj1 = {};
// const obj2 = new Object();
// const obj3 = Object.create({});
// console.log(obj3);

const user = {
  name: "tue",
  sayHello() {
    console.log("Hello");
  },
};

const client = Object.create(user, {
  name: {
    value: "nguyen hoang",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  age: { value: 33, writable: false, enumerable: false, configurable: false },
  address: { value: "BG", enumerable: true },
  email: { value: "kieuminhtue@gmai.com", enumerable: true },
});
console.log(client);

console.log(client.name);
client.sayHello();
client.name = "F8";
client.age = 3;
console.log(client);

for (let key in client) {
  console.log(`${key} : ${client[key]}`);
}

Object.defineProperty(client, name, {
  writable: false,
  enumerable: false,
  configurable: false,
  value: "tran Duy Hung",
});
console.log(client);

Object.defineProperties(client, {
  address: {},
  age: {},
});
/**
 * Object.create(proto, propertiesObject)
 * proto:
 * -proto là object muốn kế thừa thuộc tính, phương thức.
 * - null: Tạo ra object không kế thừa gì cả
 * propertiesObject :
 * - một Object chứa những thuộc tính, phương thức thêm vào cho object.create
 * - writable: default value = false, có thể ghi lại được hay không.
 * - enumerable: default value = false, có xuất hiện trong for...in không
 * - configurable: default value = false, có thể đặt lại các thiết lập cho proprety đó hay khôngkhông
 */

// const nullObj = Object.create(null);
// const normalObj = {};
// console.log(nullObj);
// console.log(normalObj);
