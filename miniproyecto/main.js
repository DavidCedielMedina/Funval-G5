
let todo = document.querySelector("#todo");
let botoncito = document.querySelector("#AcceptConditions");
botoncito.addEventListener("click", function () {
todo.classList.toggle("dark");
});

let abrircard1=document.querySelector("#open-card1");
let modalcard1=document.getElementById("card1");
let closecard1=document.querySelector("#model1");

abrircard1.addEventListener("click",function (){
  modalcard1.classList.replace("hidden","flex")
})

closecard1.addEventListener("click",function () {
  modalcard1.classList.replace("flex","hidden")
})

let abrircard2=document.querySelector("#open-card2");
let modalcard2=document.getElementById("card2");
let closecard2=document.querySelector("#model2");

abrircard2.addEventListener("click",function (){
  modalcard2.classList.replace("hidden","flex")
})

closecard2.addEventListener("click",function () {
  modalcard2.classList.replace("flex","hidden")
})

let abrircard3=document.querySelector("#open-card3");
let modalcard3=document.getElementById("card3");
let closecard3=document.querySelector("#model3");

abrircard3.addEventListener("click",function (){
  modalcard3.classList.replace("hidden","flex")
})

closecard3.addEventListener("click",function () {
  modalcard3.classList.replace("flex","hidden")
})