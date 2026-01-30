let provinceInput = document.querySelector(".province-select");
let cityInput = document.querySelector(".city-select");

let all ={
  fars:["شیراز" , "زرقان" , "لامرد" , "نوراباد"],
  khoozestan:["اهواز" , "ابادان" , "حمیدیه"],
khorasan:["مشهد" , "بیرجند" , "بجنورد"],
isfahan:["اصفهان" , "نجف اباد" , "کاشان"],
mazandaran:["ساری" , "امل" ,"بابل"],
};

provinceInput.addEventListener("change" , function(){
  let province = provinceInput.value ;
});
//* onChange (input - selectBox)

const textInput = document.querySelector(".text-input");
const checkInput = document.querySelector(".check-input");
const citiesSelectBox = document.querySelector("#cities");

// textInput.addEventListener("change", function () {
//   console.log("Input Changed");
// });

// checkInput.addEventListener("change", function () {
//   console.log("CheckBox Changed ->", checkInput.checked);
// });

// citiesSelectBox.addEventListener("change", function () {
//   console.log("City Changed -> ", citiesSelectBox.value);
// });

function selectCity() {
  console.log("City Changed -> ", citiesSelectBox.value);
}
