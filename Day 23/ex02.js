/**
 *  find()
 * findLast()
 * findIndex()
 * findLastIndex()
 * incLudes()
 * concat()
 * filter()
 * forEach()
 * map()
 *
 * ES6 với rray.
 */

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

const evenElement = arr1.find((item) => item % 2 === 0);
console.log(evenElement);

const element = arr1.find((item) => item > 100);
const element1 = arr1.findLast(function (item) {
  return item > 3;
});
console.log(element);
console.log(element1);

/**
 * find (Callback)
 * - trả về phần tử đầu tiên tìm thấy thỏa mãn điều kiện.
 * - nếu không tìm thấy -> undefined
 *
 * findLast (callback)
 * - trả về phần tử cuối tìm thấy thỏa mãn điều kiện
 *
 *  findIndex(): trả về index của phần tử đàu tiên thỏa mãn điều kiện
 *
 * findLastIndex(): trả về index của phần tử cuối cùng thỏa mãn điều kiện
 *
 * nếu ko tìm thấy phần tử thì findIndex, findlastindex trả về trừ 1
 *
 * inclues(searchElement, fromIndex): Trả về giá trị boolean theo giá trị tìm kiếm
 * - fromIndex [optional]: vị trí bắt đầu tìm kiếm , nếu không có thì tìm từ đầu mảng.
 */

const index1 = arr1.findIndex((items) => items === 4);
const incluesVaLue = arr1.includes(5);

console.log(index1);
console.log(incluesVaLue);
