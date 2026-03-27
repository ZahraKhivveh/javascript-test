let button = document.querySelector(".button");
let ooImg = document.querySelector(".oo-img");
let isOn = false;
function bulbOn(){
  if(isOn){
   ooImg.setAttribute("src" , "./pics/bulboff.gif");
   button.innerHTML = "لامپ را روشن کن";
   isOn = false;
  }else{
    ooImg.setAttribute("src" , "./pics/bulbon.gif")
    button.innerHTML = "لامپ را خاموش کن";
    isOn = true;
  }
}
button.addEventListener("click" , bulbOn);