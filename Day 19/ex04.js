function printTriangle(n, character) {
  let text = "";
  for (let i = 1; i <= n; i++) {
    text += character;
    console.log(text);
  }
}

printTriangle(5, "$");
