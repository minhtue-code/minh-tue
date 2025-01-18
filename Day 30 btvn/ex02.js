function renderOrder(cart) {
  let html = `
    <table border="1">
      <thead>
        <tr>
          <th>Tên sản phẩm</th>
          <th>Đơn giá</th>
          <th>Số lượng</th>
          <th>Thành tiền</th>
        </tr>
      </thead>
      <tbody>
  `;

  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const total = item.price * item.quantity;
    totalPrice += total;

    const nameStyle = item.hotSale ? 'style="color: red;"' : "";
    const totalStyle = item.hotSale ? 'style="color: red;"' : "";

    html += `
      <tr>
        <td ${nameStyle}>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.quantity}</td>
        <td ${totalStyle}>${total}</td>
      </tr>
    `;
  }

  html += `
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">Tổng tiền</td>
          <td>${totalPrice}</td>
        </tr>
      </tfoot>
    </table>
  `;

  document.body.innerHTML = html;
}

const cart = [
  { id: 1, name: "T-Shirt", price: 100000, quantity: 2, hotSale: false },
  { id: 2, name: "Jean", price: 200000, quantity: 1, hotSale: false },
  { id: 3, name: "Skirt", price: 150000, quantity: 3, hotSale: true },
  { id: 4, name: "Shirt", price: 120000, quantity: 2, hotSale: false },
  { id: 5, name: "Jacket", price: 250000, quantity: 1, hotSale: true },
];

renderOrder(cart);
