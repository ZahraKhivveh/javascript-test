const input = document.querySelector("input");
const remaining = document.querySelector(".max-length");
const inputMaxLength = +input.getAttribute("maxlength");

input.addEventListener("keyup", function () {
  remaining.innerHTML = inputMaxLength - input.value.length;
}); 
