let citySelect = document.querySelector(".city-select");
let provinceSelect = document.querySelector(".province-select");

let cities ={
  فارس:["شیراز" , "زرقان" , "لامرد" , "نوراباد"],
  خوزستان:["اهواز" , "ابادان" , "حمیدیه"],
خراسان:["مشهد" , "بیرجند" , "بجنورد"],
اصفهان:["اصفهان" , "نجف اباد" , "کاشان"],
مازندران:["ساری" , "امل" ,"بابل"],
};

let provinces = Object.keys(cities);

let newProvinceOption;
provinces.forEach(function( province){
newProvinceOption = document.createElement("option");
newProvinceOption.innerHTML = province;
newProvinceOption.value = province;
newProvinceOption.className ="px-4";
newProvinceOption.style.color = "blue";
provinceSelect.append(newProvinceOption);
});

provinceSelect.addEventListener("change" , function(){
 let province = provinceSelect.value;
 let cityOf = cities[province];

 citySelect.innerHTML="";
 let newProvinceOption;
 cityOf.forEach(function(city){
  newProvinceOption = document.createElement("option");
  newProvinceOption.innerHTML = city;
  newProvinceOption.value = city;
  newProvinceOption.style.color = "green";
  citySelect.append(newProvinceOption);
 });
});