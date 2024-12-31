let myStr = new String("Alo");
console.log(myStr);
console.log(myStr.valueOf());

/**
 * string ->string
 * Number -> number
 * boolean -> boolean
 * array -> array
 * Object -> Object
 */

function Book(title, author, year, production) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.production = production;
}

const myBook = new Book("Kiem tien khong kho", "Tuekt", 2024, "thổ tang");

console.log(myBook);

/**
 * không lạm dụng các hàm khởi tạo có sẵn built-in funtion constructor vì:
 * - khong phản ánh đúng kiểu dữ liệu
 * -dài dòng không cần thiết
 * - lãng phí bộ nhớ
 * - giảm hiệu suất
 */
