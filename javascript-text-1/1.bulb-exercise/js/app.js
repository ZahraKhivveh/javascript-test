let btn=document.querySelector(".button");
let img=document.querySelector(".oo-img");

let isON=false;

btn.addEventListener("click" , function(){
  if(isON){
    img.setAttribute("src" , "./pics/bulboff.gif");
    btn.innerHTML="Turn ON the bulb";
    isON = false; 
  }else{
    img.setAttribute("src" , "./pics/bulbon.gif");
    btn.innerHTML="Turn OFF the bulb";
    isON=true;
  }

}
);