const users = [
  { id: 1, name: "Hoang" },
  { id: 3, name: "Thang" },
  { id: 2, name: "Dung" },
];

users.sort((a, b) => a.id - b.id);

const usersList = document.getElementById("user-list");

for (let i = 0; i < users.length; i++) {
  const user = users[i];
  const li = document.createElement("li");
  li.textContent = `id: ${user.id}, name: ${user.name}`;
  usersList.appendChild(li);
}

const products = [
  { id: 1, title: "Samsung Galaxy 19", price: 2000, quantity: 2 },
  { id: 2, title: "Oppo corolla X", price: 1200, quantity: 1 },
  { id: 3, title: "Iphone 16 pro max", price: 2100, quantity: 3 },
];
/**
 * Xây dựng giao diện bảng sản phẩm với mỗi sản phẩm có thêm cột tổng giá trị theo từng sản phẩm.
 * Dòng cuối bảng tính tổng giá trị danh sách sản phẩm
 * Thực hiện tất cả bằng JavaScript
 */
