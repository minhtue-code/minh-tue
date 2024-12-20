const students = [
  { id: 1, username: "Son", score: 8 },
  { id: 2, username: "Dung", score: 5 },
  { id: 3, username: "Minh", score: 2 },
];

let highest = students[0];
let lowest = students[0];
let total = students[0].store;
for (let i = 1; i < students.length; i++) {
  if (students[i].store > highest.score) {
    highest = students[i];
  }

  if (student[i].score < lowest.score) {
    lowest = student[i];
  }
  total += students[i].score;
}
let avgScore = total / students.length;

console.log(`Bạn cao điểm nhất:, ${highest.username}`);
console.log(`Bạn thấp điểm nhất:, ${lowest}`);
console.log(`Điểm trung bình:, ${averageScore}`);
