function validateRegistration() {
  var firstName = document.getElementById("firstName").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  var mobileNumber = document.getElementById("mobileNumber").value;
  var lastName = document.getElementById("lastName").value;
  var address = document.getElementById("address").value;

  var isValid = true;

  // Validate First Name
  if (!/^[a-zA-Z]{6,}$/.test(firstName)) {
    isValid = false;
    alert("First Name should contain alphabets only and be at least 6 characters long.");
  }

  // Validate Password
  if (password.length < 6) {
    isValid = false;
    alert("Password should be at least 6 characters long.");
  }

  // Validate Email
  if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
    isValid = false;
    alert("Please enter a valid email address.");
  }

  // Validate Mobile Number
  if (!/^\d{11}$/.test(mobileNumber)) {
    isValid = false;
    alert("Mobile Number should contain 11 digits only.");
  }

  // Validate Last Name
  if (lastName.trim() === "") {
    isValid = false;
    alert("Last Name should not be empty.");
  }

  // Validate Address
  if (address.trim() === "") {
    isValid = false;
    alert("Address should not be empty.");
  }

  return isValid;
}

const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

// pwShowHide.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     let getPwInput = icon.parentElement.querySelector("input");
//     if (getPwInput.type === "password") {
//       getPwInput.type = "text";
//       icon.classList.replace("uil-eye-slash", "uil-eye");
//     } else {
//       getPwInput.type = "password";
//       icon.classList.replace("uil-eye", "uil-eye-slash");
//     }
//   });
// });

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});
