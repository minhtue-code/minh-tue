const task1 = new Promise((resolve, reject) => {
  console.log("task1 doing");
  setTimeout(() => {
    resolve("task1 done");
  }, 3000);
});

const task2 = () =>
  new Promise((resolve, reject) => {
    console.log("task2 doing");
    setTimeout(() => {
      resolve("task2 done");
    }, 2000);
  });

const task3 = () =>
  new Promise((resolve, reject) => {
    console.log("task2 doing");
    setTimeout(() => {
      resolve("task2 done");
    }, 1000);
  });

task1
  .then((result) => {
    console.log(result);
    return task2();
  })
  .then((result) => {
    console.log(result);
    return task3();
  });

console.time("promise");
fetch()
  .then((result) => {
    console.log(result);
    return task2();
  })
  .then((result) => {
    console.log(result);
    return task3();
  });
