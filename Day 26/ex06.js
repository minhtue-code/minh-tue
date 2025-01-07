let str = "F8 - Hoc Lap Trinh de di lam";

console.log(str.charAt(0)); // ""
console.log(str.charAt(5)); // ""

console.log(str.indexOf("F")); // 0
console.log(str.indexOf("f")); // -1
console.log(str.indexOf("l"));

/**
 * indexOf ("keyword", positionStart)
 * - trả về vị trí của character tìm thấy khi và chỉ khi vị trí tìm thấy  nằm trong khoảng từ  đến positionStart đến length-1
 *
 */
console.log(str.lastIndexOf("l"));
console.log(str.includes(""));

console.log(str.includes("F8", 3));

let url = "https://fullstack.edu.vn";

console.log(url.startsWith("https://fullstack.edu.vn"));

let str2 = "HOm nay bna the nao?";
console.log(str2.endsWith("?"));
