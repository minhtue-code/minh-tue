function inSoChinhPhuong() {
  let n = parseInt(prompt("Nhập số n: "));

  if (n <= 0) {
    console.log("nhập một số nguyên dương.");
    return;
  }

  console.log(`Các số chính phương từ 1 đến ${n} là:`);

  let i = 1;
  while (i * i <= n) {
    console.log(i * i);
    i++;
  }
}

inSoChinhPhuong();
