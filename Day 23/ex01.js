//* pop : xoá ở cuối bảng
// push : thêm ở cuối bảng
// shift : bớt ở đầu bảng
//unshift: thêm ở đầu bảng
//indexof : trả về index của phần tử
// join : chuyển mảng thành chuỗi
// reverse : đảo ngược mảng
// slice (start, end):
//

// const myStudents = ["Minh", "Tue", "Vinh", "2", "4", "5"];

// const result = myStudents.slice(1, 3);
// console.log(result);
// console.log(myStudents);

// const myStudentsCopy = myStudents.slice();
// console.log(myStudentsCopy === myStudents);

/**
 * slice(start, end)
 *  - tạo mảng mới từ một phần của mảng cũ
 * - nếu start ->end -> mảng rỗng
 * - nếu chỉ số âm thì đếm từ cuối mảng với index = -1
 *
 */

const mystudents = ["A", "B", "C", "D", "E", "F"];

const result = mystudents.splice(1, Infinity, "F8", " Học lập trình");
console.log(result);
console.log(mystudents);

/**
 *  splice (start, deleteCount, item1...itemN)
 * -thay đổi mảng gốc
 * - NẾu không truyền tham số -> cắt đuộc mảng rỗng
 * - Start: vị trí bắt đầu cắt ( Nếu start âm -> đếm từ cuối bảng)
 * - nếu start < -array.length thì start ->0
 *
 * - deleteCount : số lượng hần tử bị cắt - nhận giá trị nguyên dương, nếu là âm -> 0, nếu muốn cắt mảng thì truyền Infinity
 * - item1...itemN: Các phần tử được thêm vào mảng ban dầu ( bắt đầu từ vị trí start)
 *
 *
 */

const arr1 = ["A", "B", "C", "D"];
const arr2 = arr1.splice(-1);
console.log(arr2);
console.log(arr1);

const data = ["F8", undefined, 0, "Hoang", "Tue", 100, NaN, "Dong", ""];

/**
 * loại bỏ các falsy value khỏi data
 */

const datas = [];
for (let i = 0; i < data.length; i++) {
  if (data[i]) {
    datas.push(data[i]);
  }
}
console.log(datas);

for (let i = 0; i < data.length; i++) {
  if (!data[i]) {
    data.splice(i, 1);
    i--;
  }
}
console.log(data);
