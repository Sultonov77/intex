// login form section
let elLoginForm = document.querySelector(".login-form");
const isRegistered = JSON.parse(localStorage.getItem("isRegistered"));
elLoginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = {
    username: e.target.username.value,
    password: e.target.password.value,
  };
  if (isRegistered) {
    if (
      data.username != ''&&
      data.username == isRegistered.newUsername &&
      data.password == isRegistered.newPassword
    ) {
      elLoginForm.lastElementChild.innerHTML = `
        <img src="./images/icons/loading.png" alt="loading" width="40" class="mx-auto scale-[1.3]">`;
      setTimeout(() => (window.location.pathname = "../admin.html"), 1000);
    } else {
      alert("Введенная информация неверна, попробуйте еще раз");
    }
  } else {
    if (data.username == "Samandar" && data.password == "123") {
      elLoginForm.lastElementChild.innerHTML = `
        <img src="./images/icons/loading.png" alt="loading" width="40" class="mx-auto scale-[1.3]">`;
      setTimeout(() => (window.location.pathname = "../admin.html"), 1000);
    } else {
      alert("Введенная информация неверна, попробуйте еще раз");
    }
  }
});
