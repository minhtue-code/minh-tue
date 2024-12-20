let data = [];
function handleRegister(name, password, email) {
  if (name && password && email) {
    data.push({ name, password, email, role: "user" });
    console.log("Đăng ký thành công!");
  } else {
    console.log("Thông tin không đầy đủ!");
  }
}

function handleLogin(email, password) {
  const user = data.find(
    (users) => users.email === email && users.password === password
  );
  if (user) {
    console.log("Đăng nhập thành công!", user);
  } else {
    console.log("Thông tin đăng nhập không hợp lệ!");
  }
}

handleRegister("Kieu Minh Tue", "123", "kieuminhtue@gmail.com");
handleRegister("Hoang Quang Thang", "456", "hoangquangthang@gmail.com");

handleLogin("kieuminhtue@gmail.com", "12");
handleLogin("hoangquangthang@gmail.com", " 456");
