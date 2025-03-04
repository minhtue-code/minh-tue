console.time("Fetch Products");
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.timeEnd("time Products");
    console.log(data);
  });

console.time("Fetch Category List");
fetch("https://dummyjson.com/products/category-list")
  .then((res) => res.json())
  .then((data) => {
    console.timeEnd("time Category List");
    console.log(data);
  });
Promise.race([fetch1(), fetch2()])
  .then((data) => {
    console.log("Kết quả trả về trước:", data);
  })
  .catch((err) => {
    console.error("Lỗi:", err);
  });
