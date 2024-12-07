// function sum(a,b) {
//     let result = a + b;
//     // console.log(result);
//     return result;
// }

// sum(10, 20);


// sum(10, 90);
// sum(10, 330);
// console.log(sum(15, 30));

// const result = sum(2, 3);
// console.log(result);

function circ0fRectangle(a, b) {
    return 2* (a+ b);
}
function area0fRectangle(a, b) {
    return a *b;
}
function areaCircle(a) {
    return 3.14 * a * a;
}   
console.log(circ0fRectangle(5, 10));
console.log(area0fRectangle(5,10));
console.log(areaCircle(5));

window.alert("xin chao!");
console.log("hihi");
let confirmValue = window.confirm("an dam ko");


let width = +window.prompt("nhap chieu dai");
let height = +window.prompt("nhap chieu cao");
console.log(typeof width, typeof height);
alert("chi vu hinh chu nhat la : " + circ0fRectangle(width, height))

