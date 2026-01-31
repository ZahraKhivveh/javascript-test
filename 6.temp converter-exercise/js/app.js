const tempInput = document.querySelector(".temp-input");
const resultElem = document.querySelector(".f-result");
const convertBtn = document.querySelector(".convert-btn");
const clearBtn = document.querySelector(".clear-btn");

function calcTemp(){
  let ctemp= +tempInput.value;
  if(!isNaN(ctemp)){
   let ftemp = ctemp *1.8 + 32;
   resultElem.innerHTML = ftemp;
  }
}
function clearData (){
  tempInput.value = "";
  resultElem.innerHTML = "";
}
convertBtn.addEventListener("click" , calcTemp);
clearBtn.addEventListener("click" , clearData );
