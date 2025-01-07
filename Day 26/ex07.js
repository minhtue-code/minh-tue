/**
 *
 */

let str1 = "hello!";

console.log(str1.repeat(7));

// console.log(String.prototype);

console.log(str1.substring(1, 3));
console.log(str1.substring(1));
console.log(str1.substring(-1));
console.log(str1.substring(5, 2));

/**
 * substring(start,end)
 *
 * - nếu âm -> 0
 * - nếu > str.length -> length
 * - nếu start > end: Đảo ngược start và endend
 */

console.log("-----");

/**
 * slice(start,end)
 *
 * - nếu âm -> đếm từ cuối chuỗi
 * - nếu start > end: Chuỗi rỗng
 */

console.log(str1.slice(1, 3));
console.log(str1.slice(1));
console.log(str1.slice(-1));
console.log(str1.slice(5, 2));
console.log(str1.slice(NaN));

document.write(`<h1>t</h1>`);
