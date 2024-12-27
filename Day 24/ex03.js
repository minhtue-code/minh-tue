// flat

const arr = [1, 2, 3, , , [4, 5, [6, 7]]];

console.log(arr.flat(Infinity)); // default 1 level

console.log(arr.flat(0)); // shallow copy
console.log(arr.flat(0) === arr);

console.log(arr);

// flat(depth) : làm phẳng mảng
// không thay đổimangr ban đầu
// - dafault : khi không truyền tham số , deepth = 1
// - depth: nhận giá trị nguyên dương, là cấp độ làm phẳng ở cấp độ đầu tiên, depth =1
// - khi muốn làm phẳng hết toàn bộ, dùng value "infinity"
// - depth không họp lệ ( số âm, các kiểu dữ liệu không phải số) thì bị convert về 0
// - muốn xóa phần tử empty ở mảng thưa thì có thể dùng flat
