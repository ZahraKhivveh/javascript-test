// ! introduce with java script:
/*console.log("Hi this is Zahra Khivveh");
// ! variables:
let username="Zahra Khivveh";
console.log(username);
username="maryam";
console.log(username);
const web="International Web";
console.log(web);
// ! Data type: String - Number - boolean - undefined
let name= "javascript";
console.log(typeof name);
let age= 35;
console.log(typeof age);
let access= false;
console.log(typeof access);
let test;
console.log(typeof test);
// ! Comments /* */
// ! convert of Data Type:
/*let age2= "25";
console.log(typeof age2);  
let age4= "ali";
console.log(typeof Number(age4));
let age3= "false";
console.log(typeof age3);
let age5 = "reza";
console.log(typeof Boolean(age5));
let age6= false;
console.log(typeof Number(age6));
let age7= 55;
let age8=Boolean(age7)
console.log(typeof Boolean(age7));
console.log(typeof Boolean(age8));
// ! user entries: prompt() - confirm() - alert()
let userAge= +prompt("please enter your age" , "0");
confirm(`Are you really ${userAge}?`);
alert (`You are ${userAge} years old.`);
console.log(userAge);
console.log(typeof userAge);
// ! + - * / %
let num1=10; let num2=5; let num3=40;
console.log(num1 * num2);
console.log(num3-num1);
console.log(2**10);
console.log(200/50-8+10*2);
// ! EXERCISE--01
let Number1= +prompt("enter your first number:" , "0");
let Number2= +prompt("enter your second number:" , "0");
let calc= prompt("enter your calculation:");
if(isNaN(Number1 && Number2)){
    alert(`just enter number`);
}else{
if(calc==="+"){
    let sum=Number1+Number2;
    alert(sum);
}}
// ! EXERCISE--02
let price= +prompt("please enter your price" ,"0");
let discount= +prompt("please enter your discount" , "0");
let final= price -(price/100)*discount;
alert(final);
// ! === !== > <  <= >=
let num1=10; let num2=5; let num3=40;
g1= num1 === num2;
console.log(g1);
g2= num1 !== num2;
console.log(g2);
// ! conditions
let num1= 100;
let num2=200;
if(num1 > num2){
    alert("right!");   
}else{
    alert("not!!")
}
// ! EXERCISE--03
let userNumber= +prompt("enter your number:");
if(userNumber%2===1){
    alert("this is odd.");
}else{
    alert("this is even.");
}
// ! EXERCISE--04
let num1= +prompt("please enter number1");
let num2= +prompt("please enter number2");
let num3= +prompt("please enter number3");
let sum= (num1 + num2 + num3)/3;
alert(sum);
// ! EXERCISE--05
let age= +prompt("How old are you?");
if(age <= 18){
    alert("you cant access!");
}else{
    alert("welcome!");
}
// ! EXERCISE--06
let num1=+prompt("please enter your number1");
let num2=+prompt("please enter your number2");
let final= num1**num2;
alert(final);
// ! EXERCISE--07
let age=+prompt("what is your year?", "1404");
let calc= 1404-age;
alert(`you are ${calc} years old`);
// ! EXERCISE--08
let userTime=+prompt("please enter your minutes","0");
let hours=Math.floor(userTime/60);
let minute= userTime % 60 ;
alert(`${hours}:${minute}`);
// ! EXERCISE--09
let score=+prompt("please enter your score");
if( (score>20 || score<0) || isNaN(score) ) {
    alert(`your wrong!`);
}else{
    if(score>15){
        alert("you are grade A");
    }else if(score >= 12){
        alert("you are grade B"); 
    }else{
        alert("you are grade C");
    }

}
// ! EXERCISE--010
let age=+prompt("How old are you?");
let sex =prompt("Are you male or female?");
if(isNaN(age)){
    alert(`just enter number.`);
}else{
if(sex ==="male" || sex==="female"){
    if((age<18) || (sex==="female")){
        alert(`you can not.`);
    }else{
        alert(`you can.`);
    }
}else{
    alert("sex is wrong.");
}
}