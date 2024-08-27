// register form section
let elRegisterForm = document.querySelector(".register-form");
elRegisterForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const newData = {
    newUsername: e.target.username.value,
    newPassword: e.target.password.value,
  };
  if (newData.newUsername != '') {
    elRegisterForm.lastElementChild.innerHTML = `
        <img src="./images/icons/loading.png" alt="loading" width="40" class="mx-auto scale-[1.3]">`;
    localStorage.setItem("isRegistered", JSON.stringify(newData));
    setTimeout(() => (window.location.pathname = "/"), 1000);
  } else {
    alert("Требуется информация");
  }
 
});
