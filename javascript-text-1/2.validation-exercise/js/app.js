// let usernameInput = document.querySelector(".username");
// let passwordInput = document.querySelector(".password");

// let logBtn = document.querySelector(".login-button");

// let usernameMessage = document.querySelector(".username-message");
// let passwordMessage = document.querySelector(".passwordMessage");

// let successModal = document.querySelector(".modal-screen");
// let modalButton = document.querySelector(".modal-button");

// logBtn.addEventListener("click" , function(){
//   let username = usernameInput.value;
//   let password = passwordInput.value;

//   if(username.length > 3){
//     usernameMessage.classList.remove("hidden");
//     usernameMessage.classList.remove("unsuccess");
//     usernameMessage.classList.add("success");
//     usernameMessage.innerHTML = "نام کاربری صحیح می باشد";
//   }else{
//     usernameMessage.classList.remove("hidden");
//     usernameMessage.classList.add("unsuccess");
//     usernameMessage.classList.remove("success");
//     usernameMessage.innerHTML ="نام کاربری باید بیشتر از 3 کاراکتر باشد";
//   }

//   if(password.length>8){
//     passwordMessage.classList.remove("hidden");
//     passwordMessage.classList.remove("unsuccess");
//     passwordMessage.classList.add("success");
//      passwordMessage.innerHTML = "گذرواژه صحیح می باشد";
//   }else{
//     passwordMessage.classList.remove("hidden");
//     passwordMessage.classList.remove("success");
//     passwordMessage.classList.add("unsuccess");
//     passwordMessage.innerHTML = "گذرواژه باید بیشتر از 8 کاراکتر باشد";
//   }

//   if(username.length>3 && password.length>8 ){
//     successModal.classList.remove("hidden");
//   }
// });

// modalButton.addEventListener("click" , function(){
// successModal.classList.add("hidden");
// });
let usernameInput = document.querySelector(".username");
let passwordInput = document.querySelector(".password");  
let logBtn = document.querySelector(".login-button");
const usernameMessage = document.querySelector(".username-message");
const passwordMessage = document.querySelector(".password-message");
const successModal = document.querySelector(".modal-screen");
const modalButton = document.querySelector(".modal-button");

logBtn.addEventListener("click", function () {
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username.length > 3) {
    usernameMessage.classList.remove("hidden");
    usernameMessage.classList.remove("unsuccess");
    usernameMessage.classList.add("success");
    usernameMessage.innerHTML = "نام کاربری صحیح می باشد";
  } else {
    usernameMessage.classList.remove("hidden");
    usernameMessage.classList.remove("success");
    usernameMessage.classList.add("unsuccess");
    usernameMessage.innerHTML = "نام کاربری باید بیشتر از 3 کاراکتر باشد";
  }

  if (password.length > 8) {
    passwordMessage.classList.remove("hidden");
    passwordMessage.classList.remove("unsuccess");
    passwordMessage.classList.add("success");
    passwordMessage.innerHTML = "گذرواژه صحیح می باشد";
  } else {
    passwordMessage.classList.remove("hidden");
    passwordMessage.classList.remove("success");
    passwordMessage.classList.add("unsuccess");
    passwordMessage.innerHTML = "گذرواژه باید بیشتر از 8 کاراکتر باشد";
  }

  if (username.length > 3 && password.length > 8) {
    successModal.classList.remove("hidden");
  }
});

modalButton.addEventListener("click", function () {
  successModal.classList.add("hidden");
});
