// incLudes()
//  concat()
//  filter()
//  ES6 với array
//  flat()
//  sort()
//  * reduce()

const arr1 = [1, "2", 3, 4, 5, "F6", NaN];
console.log(arr1.includes(NaN));
console.log(arr1.find((item) => item % 2 === 0));
console.log(arr1.findIndex((item) => item === "F6"));

const arrFilter = arr1.filter((item) => {
  return item % 2 !== 0;
});

console.log(arrFilter);

const students = [
  { id: 1, fullname: "Le Van Minh", age: 28, address: "Nghe An" },
  { id: 2, fullname: "Hoang Quang Thang", age: 18, address: "Vinh Phuc" },
  { id: 3, fullname: "Kieu Minh Tue", age: 21, address: "Vinh Phuc" },
];

const filter1 = students.filter((items) => items.age > 18);
console.log(filter1);

const someResult = students.some((item) => item.age > 27);
const everyResult = students.every((item) => item.age >= 18);
console.log(someResult);
console.log(everyResult);

//  some chỉ cần 1 phần tử đạt điều kiện là sẽ trả về true còn ko có giá trị nào sẽ trả về false
//   every yêu cần tất cả phần tử đạt điều kiện  nếu  1 phần tử ko đạt điều kiện thì sẽ trả về false
// NaN ko bằng chính nó
