function getTopProducts(products, top) {
  let topProducts = [];

  for (let product of products) {
    let inserted = false;
    for (let i = 0; i < topProducts.length; i++) {
      if (product.price > topProducts[i].price) {
        topProducts.splice(i, 0, product);
        inserted = true;
        break;
      }
    }

    if (!inserted && topProducts.length < top) {
      topProducts.push(product);
    }

    if (topProducts.length > top) {
      topProducts.pop();
    }
  }

  return topProducts;
}

const products = [
  { id: 1, name: "Apple iPhone 12", price: 1000 },
  { id: 2, name: "Samsung Galaxy S21", price: 900 },
  { id: 3, name: "Xiaomi Mi 11", price: 800 },
  { id: 4, name: "Apple iPhone 11", price: 700 },
  { id: 5, name: "Samsung Galaxy S20", price: 600 },
  { id: 6, name: "Xiaomi Mi 10", price: 500 },
];

const result = getTopProducts(products, 3);
console.log(result);
