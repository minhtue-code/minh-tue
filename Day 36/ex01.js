function task1() {
  console.log("tank1 doing");
  setTimeout(() => {
    console.log("tank1 done");
  }, 3000);
}

function task2() {
  console.log("tank2 doing");
  setTimeout(() => {
    console.log("tank2 done");
  }, 2000);
}

task1();
task2();
