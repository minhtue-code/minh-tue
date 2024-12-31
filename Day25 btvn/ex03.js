Array.prototype.map2 = function (callback, thisArg) {
  const resultArray = new Array(this.length);

  if (typeof callback !== "function") {
    console.log("Callback phải là một hàm");
    return resultArray;
  }

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      resultArray[i] = callback.call(thisArg, this[i], i, this);
    }
  }

  return resultArray;
};

Array.prototype.reduce2 = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  let accumulator = initialValue;
  let startIndex = 0;

  if (accumulator === undefined) {
    while (startIndex < this.length && !(startIndex in this)) {
      startIndex++;
    }
    if (startIndex >= this.length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = this[startIndex++];
  }

  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};

const arr1 = [1, 2, 3, 4, 5];
const result1 = arr1.reduce2((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(result1);

const arr2 = [];
try {
  const result2 = arr2.reduce2((accumulator, value) => {
    return accumulator + value;
  });
  console.log(result2);
} catch (e) {
  console.log(e.message);
}

const arr3 = [];
const result3 = arr3.reduce2((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(result3);
