const users = [
  { id: 1, usersname: "Minh", address: "NgheAn" },
  { id: 2, usersname: "Tue", address: "VinhPhuc" },
  { id: 3, usersname: "Son", address: "HaNoi" },
  { id: 4, usersname: "Cong", address: "HaNoi" },
  { id: 5, usersname: "Toan", address: "HaNAm" },
  { id: 6, usersname: "Giang", address: "HaNoi" },
];

const usersGroupByAddress = [];
for (let i = 0; i < users.length; i++) {
  const user = users[i];
  const key = user.address;

  if (!usersGroupByAddress[key]) {
    usersGroupByAddress[key] = [];
  }
  usersGroupByAddress[key].push(user);
}

console.log(usersGroupByAddress);

for (value of users) {
  console.log(value.address);
  if (!usersGroupByAddress[value.address]) {
    usersGroupByAddress[value.address];
  }
  usersGroupByAddress[value.address].push(value);
}
console.log(usersGroupByAddress);
