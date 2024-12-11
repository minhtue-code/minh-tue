function calcBMI() {
  let weight = parseFloat(prompt("nhap can nang (kg)"));
  let height = parseFloat(prompt("nhap chieu cao (m)"));
  if (weight !== weight || weight <= 0) {
    console.log("can nang khong hop le!");
  }

  if (height !== height || height <= 0) {
    console.log("chieu cao khong hop le!");
  }

  const BMI = weight / height ** 2;
  let content = "";

  if (BMI < 18.5) {
    let content = "";
    if (BMI < 18.5) {
      content = "hoi gay";
    } else if (BMI >= 18.5 && BMI < 23) {
      content = "binh thuong";
    } else if (BMI >= 23 && BMI < 25) {
      content = "hoi beo";
    } else if (BMI > 25) {
      content = "beo phi";
    }
  }

  console.log("chi so BMI cua ban la ${BMI}, ban ${content}");
}
calcBMI();
