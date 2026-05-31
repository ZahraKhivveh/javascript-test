const calculateBtn = document.querySelector(".calculate-button");
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const modal = document.querySelector(".modal-screen");
const modalCloseBtn = document.querySelector(".close");
const modalContinueBtn = document.querySelector(".continue");
const closeXBtn = document.querySelector(".close-x-btn");
const bmiResult = document.querySelector(".result");
const bmiStatus = document.querySelector(".status");


function calculateBmi(){
  const height = +heightInput.value;
  const weight = +weightInput.value;
  const bmi = (weight / Math.pow(height , 2)) .toFixed(3)
  bmiResult.innerHTML = bmi ; 
    modal.classList.remove("hidden");
  if (bmi < 18.5) {
    bmiStatus.innerHTML = "کم وزن";
    bmiResult.classList.add("not-bad");
    bmiStatus.classList.add("not-bad");
  }else if (bmi >= 18.5 && bmi <= 24.9){
    bmiStatus.innerHTML="نرمال";
    bmiResult.classList.add("good");
    bmiStatus.classList.add("good");
  }else{
    bmiStatus.innerHTML = "چاق";
    bmiResult.classList.add("bad");
    bmiStatus.classList.add("bad");
  }
}
function closeModal(){
  modal.classList.add("hidden");
  weightInput.value = "";
  heightInput.value = "";
}

calculateBtn.addEventListener("click" , calculateBmi);
modalCloseBtn.addEventListener("click" , closeModal);
closeXBtn.addEventListener("click" , closeModal);
document.body.addEventListener("click" , function(event){
  if(event.key === "Escape"){
    closeModal();
  }
});