let a = 2;
let b = 3;
let c = 1;


if (a > b) {
    let temp = a;
    a = b;
    b = temp;
}

if (b > c) {
    let temp = b;
    b = c;
    c = temp;
}

if (a > b) {
    let temp = a;
    a = b;
    b = temp;
}

console.log("Thứ tự tăng dần là:", a, b, c);
