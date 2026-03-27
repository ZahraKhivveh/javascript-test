let generateBtn = document.querySelector(".generate-btn");
let colorCard = document.querySelector(".color-card");
let colorCode = document.querySelector(".color-code");

function changeColor(){
let red = Math.floor(Math.random() *255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);
colorCard.style.backgroundColor = `rgb( ${red} , ${green} , ${blue} )`;
colorCode.innerHTML = `RGB( ${red} , ${green} , ${blue} )`;
}
generateBtn.addEventListener("click" , changeColor);
