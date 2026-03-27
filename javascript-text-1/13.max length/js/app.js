let input = document.querySelector("input");
let maxLength = document.querySelector(".max-length");
let num11 = +input.getAttribute("maxlength");

function show(){
maxLength.innerHTML= num11-input.value.length;
}

input.addEventListener("keyup" , show);