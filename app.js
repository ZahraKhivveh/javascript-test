//  ?=========================================================================================
//  ?-------------------------------Elementary Level--------------------------------
//  ?=========================================================================================
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

// ! EXERCISE--011-------------------------------------------------------------------
let age=+prompt("How old are you?");
let sex =prompt("Are you male or female?");

if(isNaN(age)){
    alert(`just enter number.`);
}else{
if(sex !=="male" && sex !=="female"){
    alert("sex is wrong.");
}else{
    if((age<18) || (sex==="female")){
        alert(`you can not.`);
    }else{
        alert(`you can.`);
    }
}}
// ! Function -------------------------------------------------------------
function sum(num1,num2){
   let result= num1+num2;
   alert(result);
}
sum(5,2);
// !EXERCISE--012
let num1=+prompt("enter number one:");
let num2=+prompt("enter number two:");
function sum(num1 , num2){
    let result= num1 + num2;
    alert(result);
}
sum(num1 , num2);
// !EXERCISE--013
let num1=+prompt("enter your number");
function calc(num1){
    if(num1%2===1){
        alert("this is odd");
    }else{
        alert("this is even");
    }  
}
if(isNaN(num1)){
    alert(`just enter number`);
}else{
    calc(num1);
}
// !EXERCISE--014
let num1=+prompt("enter number1:");
let num2=+prompt("enter number2:");
let num3=+prompt("enter number3:");

function average(num1 , num2 , num3){
  let ave= (num1+num2+num3)/3;
  alert(ave);
}
if(isNaN(num1)|| isNaN(num2)|| isNaN(num3)){
    alert(`just enter number`);
}else{
    average(num1 , num2 , num3);

}
// !EXERCISE--015
let username=prompt("please enter your username:");
let password=prompt("please enter your password:");
if((username.length<8) || password.length<3){
    alert(`your length character has been wrong! `)
} else{
    alert(`DONE!`);
}
// !Some property
let text=" I Love JS  "; 
console.log(text.length);
console.log(text[3]);
console.log(text.charAt(3));
console.log(text.charCodeAt(3));
console.log(text.concat(" & wordpress"));
console.log(text.trim());
console.log(text.trimStart());
console.log(text.trimEnd());
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.includes("Qove"));
console.log(text.search("Qove"));
console.log(text.search("ove"));
console.log(text.indexOf("e"));
// !EXERCISE--016
let username=prompt("enter your username:");
if(username.toLowerCase().trim()==="ali"){
    alert("right");
}else{
    alert("you wrong!");
}
// !EXERCISE--017
let userSentences=prompt("please enter your sentences:");
let userWord=prompt("please enter your word:");
if(userSentences.trim().includes(userWord)){
    alert("you can find it.");
}else{
    alert(`failed`);
}
// !EXERCISE--018
let site= prompt("enter your url:");
if(site.trim().slice(0,5)==="https"){
 alert("you can find it.");
}else{
    alert(`failed`);   
}
// ! Math
let number=7;
console.log(number**2);
console.log(Math.pow(number , 3));
console.log(Math.sqrt(25));
console.log(Math.abs(-100));
console.log(Math.max(5,9,66,33,200,44));
console.log(Math.min(5,9,66,33,200,44));
console.log(Math.floor(19.93));
console.log(Math.trunc(19.93));
console.log(Math.round(14.9));
console.log(Math.ceil(19.3));
console.log(Math.random()*10000000);
console.log();
// !EXERCISE--019
let captcha=Math.floor(Math.random()*100000);
let userCaptcha=+prompt(`please enter the captcha:  ${captcha}`);
if(captcha === userCaptcha){
    alert(`right`);
}else{
    alert(`wrong`);
}
// ! =
let number = 8 ;
console.log(number);
number +=6;
console.log(number);
number +=7;
console.log(number);
number/=7;
console.log(number);
number*=10;
console.log(number);
number ++;
console.log(number);
number --;
console.log(number);
number-=10;
console.log(number);
--number;
console.log(number);
++number;
// ! LOOP - for ----------------------------------------------------------------------
let name1="zahra khivveh";
for(let i=0; i < name1.length; i++){
console.log(name1[i]);
}
let name2="ziba hooshmand";
for(let i=0; i < name2.length; i++){
    alert(name2[i]);
}
// !EXERCISE--020
for(i=0; i<101; i+=2){
    console.log(i);
}
for(i=99; i>0; i-=2){
    console.log([i]);
    
}
// !EXERCISE--021
let price;
let sum=0;
 for(i=0; i<5; i++){
price = +prompt(`enter your ${i+1} goods:`);
sum = sum+price;
}
alert(sum);
// !EXERCISE--022
let Number1;
let sum=0;
for(i=0; i<5; i++){
Number1= +prompt(`please enter your ${i+1} number:`);
sum+=Number1;
}
alert(`factor is ${sum/5}`);
// !EXERCISE--023
let count=0;
let num=prompt(`please enter your number:`);
 
if(isNaN(num)){
    alert(`just enter number!`);
 }else{
  if(num===0){
    count=1;
  }  else{
    for(i=0; num/10!==0; i++){
        num=Math.floor(num/10);
        count++;
    }
  } 
  alert(count);
 }
 // !EXERCISE--024
let sum=0;
let userNumber=prompt(`please enter your number:`);

if(isNaN(userNumber)){
    alert(`just enter number.`);
}else{
    if(userNumber===0){
        sum=0;
    }else{
        for(i=0; userNumber/10!==0; i++){
            sum+=(userNumber%10);                 
            userNumber=Math.floor(userNumber/10);
        }
    }
    alert(sum);
}
 // !EXERCISE--025
 let i=0;
 while(i<100){
    console.log(i);
    i+=2;
 }
  // !EXERCISE--026
let i=101;
while(i>0){
    console.log([i]);
    i-=2;
}
 // !EXERCISE--027
 let username="zahra";
 let i=0;
 while(i< username.length){
    console.log(username[i]);
    i++;
 }
 // !EXERCISE--028
 let userNumber=+prompt("enter number:");
 let count=0;
 let sum=0;
 if(isNaN(userNumber)){
    alert(`just enter number`);
 }else{
   if(userNumber===0){
    count=1;
   }else{
       let i=0;
       while(userNumber/10!==0){
        sum+=(userNumber%10);
        userNumber=Math.floor(userNumber/10);
        count++;
       }
   }
   alert(`${sum} & ${count}`);
 }
 // !EXERCISE--029
 let num1= +prompt("please enter number1:");
 let num2= +prompt("please enter number2:");
 let max=Math.max(num1 , num2);
 let min=Math.min(num1 , num2);

 if(isNaN(num1) || isNaN(num2)){
    alert(`just enter number`);
 }else{
    if(min %2===0){
        while(min<=max){
            console.log(min);
            min+=2;
        }
    }else{ min++;
        while(min <= max){
            console.log(min);
            min+=2;
        }
    }
 }
// !EXERCISE--030--------------------------------------------------------------
let count=0;
let userNumber=0;
let sum=0;
while(userNumber!==-1){
    sum +=userNumber;
    userNumber=+prompt("enter number: \n for stop press -1");
    
    if(userNumber!==-1){
        count++;
        
    }
}
alert(sum/count);
// ! Array
let userSentences=["aa" , "zz" , "pp" , "ee"];
userSentences[4]="mimi";
console.log(userSentences);
// !EXERCISE--031
let number=[];

let sum=0;
let count=0;
let userNumber=0;

while(userNumber!==-1){
    sum+=userNumber;
    userNumber=+prompt("enter number: \n press -1 for stop");
    if(userNumber!==-1){
        number.push(userNumber);
        count++;
    }
}
alert(sum/count);
console.log(number);
// ! object
let users=["ali" , "maryam"];
let user={
        id:1,
        name:"mania",
        phone:0123456789,
};
user.password="pki-kip";
delete user.name;
console.log(user.password);
// !EXERCISE--032
let users=[
    {id:1 , name:"ali" , age:32},
    {id:2 , name:"reza" , age:32},
    {id:3 , name:"navid" , age:32},
];
let newUser={ id:users.length+1 , name:"jj", }
users.push(newUser);
console.log(users);
// !EXERCISE--033
let firstName=prompt("please enter your first name:");
let lastName=prompt("please enter your last name:");
let age=+prompt("please enter your age:");
let email=prompt("please enter your email:");

let users=[
    {id:1, firstName1:"ali1", lastName1:"akbari1", age1:30, email1:"1gmail.com"},
    {id:2, firstName1:"ali2", lastName1:"akbari2", age1:30, email1:"2gmail.com"},
    {id:3, firstName1:"ali3", lastName1:"akbari3", age1:30, email1:"3gmail.com"},
];  

if(isNaN(age)|| age<18|| firstName.length<3 || firstName.length>10 || lastName.length<3 || 
lastName.length>15 || email.includes(".com") === -1){
    alert(`wrong`);
}else{
let newUser={
    id:users.length+1, firstName1:firstName, lastName1:lastName, age1:age, email1:email};
    users.push(newUser);
    console.log(users);
    console.log(typeof users[0].age1);
}
// ! ForEach---------------------------------------------------------------
let users=["aa" , "bb" , "cc"];
users.forEach(function(user){console.log(user);
});
// ! include
let student=["jj" , "mimi" , "ziz"];
console.log(student.includes("ziz"));
// !EXERCISE--034
let products=[
    {id:1 , title:"milk" , price:100 , qty:10},
    {id:2 , title:"candy" , price:200 , qty:100},
    {id:3 , title:"water" , price:10 , qty:0},
    {id:4 , title:"honey" , price:500 , qty:70},
    {id:5 , title:"fish" , price:5000 , qty:7},
    {id:6 , title:"bread" , price:5 , qty:0},
];
let basket=[
    {id:1 , title:"honey" , price:500 },
    {id:2 , title:"fish" , price:5000 },
    {id:3 , title:"bread" , price:5},
];
let userTitle=prompt("Please enter your product name:");

if(userTitle.length >0){
    let isInShop= products.some(function(product){
    return product.title === userTitle &&  product.qty>0 ;
  }) ;
  if(isInShop=== false){
        alert(`not exists`);
    }else{
        let newUser={
    id:products.length+1 , title:userTitle };
 products.forEach(function(product){
        if(product.title===userTitle){
            newUser.price===product.price;
        }
    });

    basket.push(newUser);
    console.log(basket); 
   
    let sum=0;
    basket.forEach(function(product){
        sum+=product.price;
    });
    alert(sum);}

}else{
    alert(`Please Enter Title!`);
    
}
// !EXERCISE--035-------------------------------------------------------------
let users=[
    {id:1 , Name:"reza0" , age:18 },
    {id:2 , Name:"reza1" , age:8 },
    {id:3 , Name:"reza2" , age:58 },
    {id:4 , Name:"reza3" , age:19 },
    {id:5 , Name:"reza4" , age:80 },
];
let u1= users.every(function(user){
    console.log(user);
    
    return user.age>=18;
});
if(u1 === true){
    alert(`welcome`);
}else{
    alert(`error`);
}
// !EXERCISE--37
let users = [
    {id:1 , name:"ali1" , pass:45525365},
    {id:2 , name:"ali2" , pass:45463365},
    {id:3 , name:"ali3" , pass:4574250365},
];
    let userName = prompt(`please enter your username.`);
     
    if(userName.trim().length === 0){
        alert(`please enter your username carefully!`);
    }else{
        let eka= users.find(function(user){
          return user.name === userName;
            
    });
    if(eka ===undefined){
        alert(`user name is wrong.`);
    }else{
              alert(eka.pass);
}
    }
// !EXERCISE--38
let Products=[
    {id:1 , title:"milk" , price:100 , qty:10},
    {id:2 , title:"candy" , price:200 , qty:10},
    {id:3 , title:"soap" , price:150 , qty:10},
    {id:4 , title:"ice" , price:10 , qty:10},
    {id:5 , title:"juice" , price:500 , qty:10},
    {id:6 , title:"oil" , price:300 , qty:10},
    {id:7 , title:"sausage" , price:700 , qty:10}
];
let basket = [
    {id:1 , title:"milk" , price:100},
    {id:2 , title:"candy" , price:200},
    {id:3 , title:"soap" , price:150},
];
let choice=+prompt("1.add \n 2.remove");

if(choice==1 || choice===2){
    if(choice === 1){
        let newTitleAdd= prompt(`please enter your new product for add`);
        if(newTitleAdd.trim().length>0){
             let isInShop= Products.find(function(product){
            return newTitleAdd === product.title && product.qty>0 ;
        })
        if(isInShop===undefined){
            alert(`not exist`);
        }else{
            let newBasket={
                id:basket.length+1 , title:isInShop.title , price:isInShop.price}
            basket.push(newBasket);
            
        }
        }else{
            alert(`your title incorrect!`)
        }
            console.log(basket);
            
         
    }else{
        if(choice === 2){
            let newTitleRemove= prompt(`please enter your product for remove`);
            if(newTitleRemove.trim().length>0){
            let remove= basket.findIndex(function(product){
                return product.title === newTitleRemove;
            })  
            if(remove === -1){
                alert(`your title is wrong`);
            }else{
                basket.splice(remove , 1);
            }
            }else{
                alert(`enter correct title`);
            }
            
            console.log(basket);
            
        }
        console.log(basket);
        
    }

}else{
    alert(`just enter number`);
}
// !EXERCISE--39---------------------------------------------------
let articles=[
    {id:1 , title:"react in web"}, 
    {id:2 , title:"css3 in web"}, 
    {id:3 , title:"html & react in web"}, 
    {id:4 , title:"java in web"}, 
    {id:5 , title:"react or java in web"}, 
    {id:6 , title:"html or node js in web"}, 
];
let userSearch=prompt(`enter your word:`);

if(userSearch.trim().length ===0){
    alert(`just enter your search`);
}else{
    let searchResult= articles.filter(function(article){
      return article.title.includes(userSearch);
    })
if(searchResult.length===0){
    alert(`no result!`);
}else{
    let result="";
    let i=0;
    searchResult.forEach(function(item){
        result+=i + "." + item.title + "\n";
        i++;
    })
    console.log(result);  
}
}
// !EXERCISE--40
const basket = [
  { id: 1, name: "laptop", price: 5000000 },
  { id: 2, name: "phone", price: 3000000 },
  { id: 3, name: "milk", price: 35000 },
  { id: 4, name: "water", price: 6000 },
  { id: 5, name: "coolpad", price: 400000 },
  { id: 6, name: "pencil", price: 9000 },
];
let filteredProduct= basket.filter(function(product){
    return product.price<100000;
});
postCost=filteredProduct.length*1000;

let sum=0;
basket.forEach(function(product){
    sum+=product.price;
});
let total= sum+ postCost;
alert(total);
// !EXERCISE--41
const basket = [
  { id: 1, name: "laptop", price: 5000000 },
  { id: 2, name: "phone", price: 3000000 },
  { id: 3, name: "milk", price: 35000 },
  { id: 4, name: "water", price: 6000 },
  { id: 5, name: "coolpad", price: 400000 },
  { id: 6, name: "pencil", price: 9000 },
];
let postCost=0;
let sum=0;
basket.map(function(product){
    if(product.price>100000){
        postCost+=100;
    }
    sum+=product.price
});
totalPrice=sum+postCost;
console.log(totalPrice);
// !EXERCISE--42
let number1=[1,2,3,4,5,6,7,8,9,];
let name1=["ali" , "reza" , "mamad", "nadia"];
// ! Fill
// name1.fill("jj");
console.log(name1);
// ! is Array
console.log(Array.isArray(name1));
// ! index of
console.log(name1.indexOf("reza"));
// ! slice 
console.log(number1.slice(2,4));
// ! splice
console.log(number1.splice(2,4));
// ! join
console.log(name1.join("-"));
// ! reverse 
console.log(number1.reverse());
console.log(name1.reverse()); 
// !!EXERCISE--43
let userWord =prompt(`enter word like gig:`);  /ali/
let convert1= userWord.split("");              /"a" "l" "i"/ 
let convert2= convert1.reverse();               /"i" "l" "a"/    
let convert3= convert2.join("");                /ila/
if(userWord === convert2){                       /===/
    alert(`right`);
}else{
    alert(`no wrong!`);
}
// !!EXERCISE--44 ---------------------------------------------------
const todos = [
  { id: 1, title: "learn js", isDone: false },
  { id: 2, title: "go to gym", isDone: false },
  { id: 3, title: "learn react", isDone: false },
];

let userTodo = prompt("choose option: \n 1.add todo \n 2.remove todo \n 3.change the status");
if(userTodo !==1 || userTodo !==2 || userTodo !==3 ){
    alert(`enter the true option!`);
}else{
        /add todo/ 
        if(userTodo === 1){
        let newUserTodo =prompt(`please enter your new Todo title`);
        let newTodo= {id:todos.length+1 , title:newUserTodo , isDone:false};
        todos.push(newTodo);
        console.log(newTodo);
        
    /remove todo/ 
    }else if(userTodo===2){
            let removeUserTodo =prompt(`please enter your Todo title for remove`);
            let removeTodo= todos.findIndex(function(todo){
                return todo.title === removeUserTodo;
            });
            if(removeTodo=== -1){
                alert(`not exist`);
        }else{
            alert(`successfully removed`);
        }
        console.log(todos);
        
    /change todo/ 
        }else{
            let isDoneUser =prompt(`please enter your todo name`);
            todos.forEach(function(todo){
                if(isDoneUser === todo.title){
                    todo.isDone===true;
                }else{
                    alert(`not founded`);
                }
            });
            console.log(todos);
            
        }
    
    }
// !!EXERCISE--45
let tasks={
    ali:["js" , "angular"],
    omid:["seo" , "wordpress"],
    meysam:["Ec6+" , "node"],
    nader:["python" , "react"],
};
let newTaskName=  prompt(`enter your employer command`);
let employName= prompt(`enter your employer`);

let employTask=tasks[employName];
if(employTask === undefined){
    alert(`we dont found them.`);
}else{
    employTask.push(newTaskName);
}
console.log(tasks);
// !!EXERCISE--46
let provices={
    fars:["lar" , "zaqan" , "abade"],
    tehran:["pardihs" , "shahriyar" , "rey"],
    khozestan:["abadan" ,"aghajary" , "hamidie"]
};
let userProvice= prompt(`enter your Provice`);
let proviceCity= provices[userProvice];

let cityText="";
let i=1;
if(provices===undefined){
    alert(`not founded`);
}else{
   proviceCity.forEach(function(city) {
    cityText +=i + "." + city + "\n";
    i++;
   }); 
}
alert(cityText);
// ! EXERCISE--47
let questions=[
    {id:1, theQuestion:"10+20" , answer:30},
    {id:2, theQuestion:"20+20" , answer:40},
    {id:3, theQuestion:"30+20" , answer:50},
    {id:4, theQuestion:"40+20" , answer:60},
    {id:5, theQuestion:"50+20" , answer:70},
];
let userAnswer="";
let score=0;
questions.forEach(function(question){
    userAnswer= prompt(question.theQuestion + "?");
    if(userAnswer.toLowerCase() === answer){
        score++;
    }
        
});
alert(`your score is ${score *20}`);
// ! EXERCISE--48
let number1=+prompt("please enter number 1:");
let number2=+prompt("please enter number 2:");
let calc=+prompt("which one? \n1.+ \n 2.- \n 3.* \n 4./");

if(isNaN(number1) || isNaN(number2)) {
alert(`just enter number`);
}else{
     if(calc!==1 &&  calc!==2 && calc!==3 && calc!==4) {
    alert("wrong sign!");
}else{
    if(calc ===1){
        let sum= number1 + number2 ;
        alert(`it is ${sum}`);
    }else
        if(calc===2){
            let nuines=number1 - number2;
            alert(`it is ${nuines}`);
        }else
            if(calc===3){
                let devid=number1 / number2;
                alert(`it is ${devid}`);
            }else{
                let multi=number1*number2;
                alert(`it is ${multi}`);
            }
}
   
}
// ! EXERCISE--48  
let text ="0123456789abcdefghijklmnopqrstuvwxyz";
let captcha="";
let randomIndex;
for(i=0; i<5; i++){
randomIndex= Math.floor(Math.random()* text.length);
captcha += text[randomIndex];
}
alert(captcha);
// ! EXERCISE--49
let products=[
    {id:1 , title:"milk1" , price:110 , shortLink:"hdfjs1"},
    {id:2 , title:"milk2" , price:120 , shortLink:"hdfjs2"},
    {id:3 , title:"milk3" , price:130 , shortLink:"hdfjs3"},
    {id:4 , title:"milk4" , price:140 , shortLink:"hdfjs4"},
    {id:5 , title:"milk5" , price:150 , shortLink:"hdfjs5"},
    {id:6 , title:"milk6" , price:160 , shortLink:"hdfjs6"},
];
let userLink=prompt(`please enter the name of product:`);
let mainProduct= products.find(function(product){
    return userLink === product.title;
});
if(mainProduct === undefined){
    alert(`no founded`);
}else{
    alert(`this is the ${mainProduct.title} - ${mainProduct.price}`);
}
// ! EXERCISE--50
// ? console.log(eval("2*10"));
let i=0;
let timer= setInterval(function(){
    console.log(i++);
    if(i===10){
        clearInterval(timer);
        alert(`DONE`);
    }
} , 1000);
// ! EXERCISE--51
let minute=+prompt(`enter your minute:`);
let second=+prompt(`enter your second:`);

let timer= setInterval(function(){
    if(second=== -1){
        minute--;
        second=59;
    }
    if(minute===0 && second===0 ){
        clearInterval(timer);
        alert(`DONE`);
    }
    console.log(`timer= ${minute} : ${second}`);
    second--;
} , 1000);
 // ! EXERCISE--52
 let hasProfile=false;
 setTimeout(function(){
    if(!hasProfile){
        alert(`choose a profile`);
    }
 },5000)
//  ?=========================================================================================
//  ?------------------------------Intermediate Level--------------------------------
//  ?=========================================================================================
 // ! EXERCISE--53
 let h2Elems= document.getElementsByTagName("h2");
 console.log(h2Elems);
 let idss= document.getElementById("h1yy");
 console.log(idss);
 let clasess= document.getElementsByClassName("unorder-list");
 console.log(clasess);
 let aa= document.querySelector(".unorder-list");
 console.log(aa);
 console.log(aa.className);
 aa.style.color="blue";
 // ! EXERCISE--54
 let btn= document.querySelector(".click-btn");
 function logger(){
     alert("your information has been done");
    }
    btn.onclick=logger;*/
// ! EXERCISE--55
  let btn= document.querySelector(".click-btn");
 function logger(){
     alert("your information has been done");
    }
    btn.addEventListener("click" , logger);
 
 
 
 
 
 
 
 

    
    


















