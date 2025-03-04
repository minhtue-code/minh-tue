const fetch1 = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};

const fetch2 = () => {
  return fetch("https://dummyjson.com/products/categories").then((res) =>
    res.json()
  );
};

Promise.race([fetch1(), fetch2()])
  .then((data) => {
    console.log("Kết quả trả về trước:", data);
  })
  .catch((err) => {
    console.error("Lỗi:", err);
  });
