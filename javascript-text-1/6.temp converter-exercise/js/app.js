let tempInput = document.querySelector(".temp-input");
let clearBtn = document.querySelector(".clear-btn");
let convertBtn = document.querySelector(".convert-btn");
const resultElem = document.querySelector(".f-result");

function calc(){
  let temp = +tempInput.value;
  if(!isNaN(temp)){
    let tempF = temp*1.8 + 32 ;
    resultElem.innerHTML = tempF ;
  }
}
function clearData(){
  tempInput.value="";
  tempInput.innerHTML="";
}
convertBtn.addEventListener("click" , calc);
clearBtn.addEventListener("click" , clearData);