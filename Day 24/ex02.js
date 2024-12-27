//  concat()
//  ES6 với array
//  flat()
//  sort()
//  reduce()

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

console.log(arr1.concat(arr2));

const arr1Copy1 = [].concat(arr1);
const arr1Copy2 = arr1.concat();

console.log(arr1 === arr2);
console.log(arr1Copy2 === arr1);
arr1Copy1.push("AAA");
arr1Copy2.push("BBB");
console.log(arr1);

/**Shallow copy
 *
 * deep copy
 * - JSON: nhược điểm là không xử lí được phương thức và các gí trị đặc biệt
 * - Dùng thư viện: lodash
 * - structuredclone()
 */

console.log(arr1);
console.log(arr1 === arr1Copy1); // false - đây là 2 mảng khác nhau nhưng chỉ là bản sao nông.
console.log(arr1[2] === arr1Copy1[2]); // true -

const arr1DeepCopy = structuredClone(arr1); // deep copy

arr1DeepCopy[3][0] = "F99";
console.log(arr1);
