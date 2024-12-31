Array.prototype.filter2 = function (callback, thisArg) {
  const resultArray = [];
  if (typeof callback !== "function") {
    console.log("Callback phải là một hàm");
    return resultArray;
  }

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      const value = this[i];
      if (callback.call(thisArg, value, i, this)) {
        resultArray.push(value);
      }
    }
  }

  return resultArray;
};

const arr = [1, 2, 3, 4, 5];
const result = arr.filter2((value) => {
  return value % 2 !== 0;
});
console.log(result);
