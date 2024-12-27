/**
 * sort()
 * 2 cách dùng: có callback hoặc không có callback.
 * Cách dùng 1: sort()
 * - trước khi sắp xếp thì chuyển đổi sang chuỗi và sắp xếp theo chuỗi
 *
 * Cách dùng 2: sort (compareFn)
 *
 * -a-b < 0 : sắp xếp tăng dần
 * - a -b >0 : sắp xếp giảm
 * -a- b = 0 hoặc giá trị không so sánh được thì giữ nguyên
 */

// const arr1 = [5, 4, 2, 3];
// const arr2 = ["Hoang", "Dung", "Duy", "Minh"];
// console.log(arr1.sort());
// console.log(arr1);
// console.log(arr2.sort());

// console.log(arr1.sort((a, b) => b - a));

const students = [
  { id: 1, fullname: "Le Van Minh", age: 28, address: "Nghe An" },
  { id: 2, fullname: "Hoang Quang Thang", age: 18, address: "Vinh Phuc" },
  { id: 6, fullname: "Nguyen Van Anh Cong", age: 22, address: "Ha Noi" },
  { id: 3, fullname: "Kieu Minh Tue", age: 21, address: "Vinh Phuc" },
  { id: 4, fullname: "Nguyen Van Cong", age: 18, address: "Ha Noi" },
  { id: 5, fullname: "Nguyen Minh Cong", age: 22, address: "Ha Noi" },
];

// students.sort((a, b) => a.age - b.age);
// console.log(students);

function sortbyName(data) {
  data.sort((a, b) => {
    let aFullnameArr = a.fullname.split(" ");
    let bFullnameArr = b.fullname.split(" ");
    console.log(aFullnameArr, bFullnameArr);
    let aFirstName = aFullnameArr.pop();
    let bFirstName = bFullnameArr.pop();
    console.log(aFirstName, bFirstName);
    // so sánh 2 firstname
    if (aFirstName < bFirstName) return -1;
    if (aFirstName > bFirstName) return 1;
    // nếu firstname giống hệt nhau thì kiểm tra họ và tên đệm
    console.log(aFullnameArr.join(" "));
    console.log(bFullnameArr.join(" "));
    if (aFullnameArr.join(" ") < bFullnameArr.join(" "));
    return -1;
  });
}
sortbyName(students);
console.log(students);
