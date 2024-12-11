function calcBMI() {
  let content = "";
  let weight = parseFloat(prompt("nhap can nang (kg)"));
  let height = parseFloat(prompt("nhap chieu cao (m)"));
  const BMI = weight / height ** 2;
  if (weight <= 0) {
    console.log("can nang khong hop le!");
  }

  if (height <= 0) {
    console.log("chieu cao khong hop le!");
  }

  switch (true) {
    case BMI < 18.5:
      content += "hoi gay";
      break;

    case BMI >= 18.5 && BMI < 23:
      content += " binh thuong";
      break;

    case BMI >= 23 && BMI < 25:
      content += " hoi beo";
      break;
    default:
      content += "beo phi";
  }
  console.log(BMI);
  console.log(content);

  console.log(`chi so BMI cua ban la ${BMI}, ban ${content}`);
}

calcBMI();

function printDay(day) {
  switch (month) {
    case 0:
    case 1:
    case 2:
      return "Quy I";

    case 3:
    case 4:
    case 5:
      return "Quy II";

    case 6:
    case 7:
    case 8:
      return "Quy III";

    case 9:
    case 10:
    case 11:
      return "Quy IV";

    default:
      return "Invalid!";
  }
}

const now = new Date();
console.log(now.getMonth);
console.log();
