document
  .querySelector("#registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const user = Object.fromEntries(formData);

    if (user.password !== user.confirmPassword) {
      alert("mật khẩu không đúngđúng!");
      return;
    }

    fetch(`http://localhost:3000/users?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          alert("Email đã tồn tạitại!");
        } else {
          delete user.confirmPassword;

          fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          }).then(() => {
            alert("Đăng ký thành công! Chuyển hướng đến đăng nhập.");
            window.location.href = "login.html";
          });
        }
      });
  });
