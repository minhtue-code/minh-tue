const students = [
  { name: "Minh", age: 18 },
  { name: "Thang", age: 20 },
  { name: "Son", age: 24 },
];

for (let i = 0; i < students.length; i++) {
  if (students[i].age < 20) {
    console.log(`Name: ${students[i].name}, Age: ${students[i].age}`);
  }
}

// for (value of students) {
//   if (value.age < 20) {
//     console.log(value);
//   }
// }
