document
  .querySelector("#loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const user = Object.fromEntries(formData);

    fetch(`http://localhost:3000/users?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          const userData = data[0];

          if (userData.password === user.password) {
            localStorage.setItem("userId", userData.id);
            alert("Đăng nhập thành công! ");
            window.location.href = "task.html";
          } else {
            alert("Sai mật khẩu!");
          }
        } else {
          alert("Email không tồn tại!");
        }
      })
      .catch((err) => console.error("Lỗi:", err));
  });
