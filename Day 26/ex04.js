/**
 * phương thức biến đổi chuỗi :
 * toUpperCase(), toLowerCase(), trim(), replace(), replaceAll(), split()
 * phương thức kiểm tra, duyệt chuỗi
 *
 */

let str = "F8 - Hoc Code";

console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str.trim()); // Bor khoảng trắng ở đầu và cuối.

/**
 * 1. Thay  đổi dể style
 * 2. để tìm kiếm, duyệt mà không phân biệt hoa, thường
 */

console.log(str.replace("code", "lap trinh")); // thay thế keyword đầu tiên tìm thấy

console.log(str.replaceAll("code", "lap trinh"));

console.log(str.split()); // array co 1 phan tu duy nhat
console.log(str.split("")); // tach het

console.log(str.length);

console.log(str.split(",", 2));
console.log(str.split(",", -2));
console.log(str.split(",", NaN));
console.log(str.split(",", "abcabc"));

/**
 * split(separator, limit)
 *
 * - separator: phàn tử phân tách
 * - limit?: giới hạn số lượng phần tử của mảng kết quả
 * - Trruyền 0 hoặc không hợp lệ -> mảng rỗng
 * - Truyền số âm hoặc không hợp lệ -> default valuevalue
 */
