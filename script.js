//homework 3_8 1-masala


"use strict";
let $form=document.querySelector("#form");
let $distance=document.querySelector("#distance");
let $boxFoot=document.querySelector("#box");
let $boxBice=document.querySelector("#box2");
let $boxCar=document.querySelector("#box3");
let $boxPlane=document.querySelector("#box4");


$form.addEventListener("submit", function(evt){
   evt.preventDefault();

   

   
 let myFunction = function(distance){
    let v1=(distance/3.6).toFixed(2);
    let v2=(distance/20.1).toFixed(2);
    let v3=(distance/70).toFixed(2);
    let v4=(distance/200).toFixed(2);


  $boxFoot.innerHTML=`
  <h3 style="text-align: center;">Piyoda</h3>
  <p style="text-align: center;">${v1 + " soat"} </p>
  `;
  $boxBice.innerHTML=`
  <h3 style="text-align: center;">Velosiped</h3>
  <p style="text-align: center;">${v2 + " soat"} </p>
  `;
  $boxCar.innerHTML=`
  <h3 style="text-align: center;">Mashina</h3>
  <p style="text-align: center;">${v3 + " soat"} </p>
  `;
  $boxPlane.innerHTML=`
  <h3 style="text-align: center;">Samolyot</h3>
  <p style="text-align: center;">${v4 + " soat"} </p>
  `;

}
myFunction($distance.value - 0)

 
 });


 

//homework-3_8 2-masala

let userFunction = function(x){
 if(x%5==0 && x%3==0) {
     let result="FizzBuzz";

     return result;
 } else if(x%5==0){
     let result="Buzz";

     return result;
 } else if(x%3==0){
     let result="Fizz";

     return result;
 }else{
     
    return x;
 }
}
console.log(userFunction(15));





