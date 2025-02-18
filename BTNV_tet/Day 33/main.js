/**
 * POST - Create
 * GET - Read
 * PUT - Update
 * DELETE -Delete
 *
 * = CRUD
 */
const registerForm = document.querySelector("#registerForm");

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(registerForm);
  const userInfor = Object.fromEntries(formData);
  console.log(userInfor);

  fetch("http://localhost:3000/users", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(userInfor),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.accessToken) {
        if (confirm("Dang ky thanh cong, dang nhap trang chu")) {
          location.href = "login.html";
        } else {
          alert(data);
          registerForm.reset();
          return;
        }
      }
    })
    .catch((err) => console.log(err));
});
