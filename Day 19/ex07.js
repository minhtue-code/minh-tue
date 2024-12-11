const cart = [
  { id: 1, title: " tivi xiaomi x", price: 10000000, quanlity: 2 },
  { id: 2, title: " Iphone 16", price: 30000000, quanlity: 3 },
  { id: 3, title: " Iphone 16", price: 30000000, quanlity: 2 },
];

function calcPayment(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quanlity;
  }
  return total;
}

console.log(calcPayment(cart));
document.write(`tong gia tri don hang la: ${calcPayment(cart)} VND`);
