const studentListK12 = ["Minh", "Cong" , "Manh" , "Thong" , "Tue" , "Thang" , "Dung" , "Vinh" ,"Son"];

console.log(studentListK12.length);

console.log(typeof studentListK12);
console.log(Array.isArray (studentListK12));
console.log(Array.isArray("Ahihi"));

console.log(Array.isArray([]));
console.log(studentListK12[1]);
console.log(studentListK12[2]);
console.log(studentListK12[3]);
console.log(studentListK12[5]);

studentListK12[15] = "Cong";
console.log(studentListK12);
console.log(studentListK12.length);

