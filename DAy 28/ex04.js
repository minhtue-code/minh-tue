// // const time1 = new Date();

// // console.log(time1);
// // console.log(typeof time1);
// // let time2 = new Date("2024-01-01 00:00:00");
// // console.log(new Date("2024-01-01 00:00:00"));

// // console.log(Date.now()); //Millisecond tính từ thời điểm 1/1/1970

// // console.log({ time2 });
// // console.log(time2.getFullYear());
// // console.log(time2.getMonth());
// // console.log(time2.getDate());
// // console.log(time2.getDay());
// // console.log(time2.getHours());
// // console.log(time2.getMinutes());
// // console.log(time2.getSeconds());
// // console.log(time2.getMilliseconds());
// // console.log(time2.getTime());

// //1
// function calculateAge() {
//   const birthDate = new Date(2003, 5, 7);
//   const currentDate = new Date();

//   const diff = currentDate - birthDate;
//   const daysLived = Math.floor(diff / (1000 * 60 * 60 * 24));

//   document.getElementById(
//     "result"
//   ).textContent = `Bạn đã sống ${daysLived} ngày`;
// }
// calculateAge();

// // 2
// function printMinutes() {
//   let time1 = Date.now() - new Date();
//   let time2 = new Date().setHours(0, 0, 0);
//   console.log(time1);
//   console.log(time2);
//   let time3 = time1 - time2;
//   console.log(time3);
//   let getDay = new Date().getDay();
//   if (getDay !== 0) {
//     time4 = (getDay - 1) * 24 * 60 * 60 * 1000;
//   } else {
//     time4 = 7 * 24 * 60 * 60 * 1000;
//   }
//   let minutes = (time3 + time4) / (1000 * 60);
//   console.log(minutes.toFixed());
// }
// printMinutes();
