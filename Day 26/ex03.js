let content = "F8 - Hoc Lap Trinh";

function strReverse(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

let reversedStr = strReverse(content);
console.log(reversedStr);
