let provinceInput = document.querySelector(".province-select");
let cityInput = document.querySelector(".city-select");

let cities ={
  فارس:["شیراز" , "زرقان" , "لامرد" , "نوراباد"],
  خوزستان:["اهواز" , "ابادان" , "حمیدیه"],
خراسان:["مشهد" , "بیرجند" , "بجنورد"],
اصفهان:["اصفهان" , "نجف اباد" , "کاشان"],
مازندران:["ساری" , "امل" ,"بابل"],
};
let provinces = Object.keys(cities);  /array/

let newOption;
provinces.forEach(function(province) {
  newOption = document.createElement("option");
  newOption.className= "px-4";
  newOption.value = province;
  newOption.innerHTML=province;
  provinceInput.append(newOption);
});

provinceInput.addEventListener("change" , function(){
  let province = provinceInput.value ;
  let cityOf = cities[province];
 
  cityInput.innerHTML="";
  let newCityOption;
cityOf.forEach(function(city) {
  newCityOption = document.createElement("option");
  newCityOption.className= "px-4";
  newCityOption.value = city;
  newCityOption.innerHTML=city;
  cityInput.append(newCityOption);
});
});
