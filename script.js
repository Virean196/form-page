const submit_button = document.getElementById("submit-button");
const password_field = document.getElementById("password-field");
const confirm_password_field = document.getElementById("confirm-password-field");
const email_field = document.getElementById("email-field");

function checkPasswordsMatch() {
  if (password_field.value != confirm_password_field.value) {
    // password_field.style.borderColor = "red";
    // confirm_password_field.style.borderColor = "red";
    password_field.classList.add("error");
    confirm_password_field.classList.add("error");
  }
  else {
    password_field.classList.remove("error");
    confirm_password_field.classList.remove("error");
    password_field.classList.add("success");
    confirm_password_field.classList.add("success");

  }
}

window.onload = function () {
  password_field.addEventListener('input', checkPasswordsMatch);
  confirm_password_field.addEventListener('input', checkPasswordsMatch);
}
