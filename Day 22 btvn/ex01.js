let users = [];

function register(name, password, email) {
  if (!name || !password || !email) {
    console.log("Vui lòng điền đầy đủ thông tin");
    return;
  }

  users.push({ name, password, email, role: "user" });
  console.log(users);
}

register("Tue", "1234", "tuepromax@gmail.com");
register("Thang", "5678", "thangquangpham1@gmail.com");
register("Long", "3232", "longnguyen@gmail.com");
