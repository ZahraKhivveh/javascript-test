let keyCode = document.querySelector(".keycode");
let keycodeTitle = document.querySelector(".keycode-title");
let location4 = document.querySelector(".location");
let key = document.querySelector(".key");
let which = document.querySelector(".which");
let code = document.querySelector(".code");

function showCode(event){
  event.preventDefault();
   //این برای جلوگیری از رفتار دکمه های کیبورد است//
  document.body.classList.add("key-pressed");

  keycodeTitle.innerHTML = event.which;
  keyCode.innerHTML = event.key;
  code.innerHTML= event.code;
  which.innerHTML = event.which;
  location4.innerHTML = event.location;
  key.innerHTML = event.key;
}

document.body.addEventListener("keydown" , showCode);