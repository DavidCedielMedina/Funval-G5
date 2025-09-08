import { habilidad } from "./habilidades.js";

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

//-----------habilidades---------

let habilidadesList=document.getElementById("habilidadeslist")

for (let index = 0; index < habilidad.length; index++) {

    let nivel=habilidad[index].nivel;
    let color="";

    switch (true) {
      case nivel >0 && nivel<=40:
        color= "bg-gradient-to-r from-red-700 via-red-600 to-red-500";
        break;

      case nivel>41 && nivel<=70:
        color= "bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500";
        break;

      case nivel>71 && nivel<=100:
        color= "bg-gradient-to-r from-green-700 via-green-600 to-green-500";
        break;  
      
    }

    habilidadesList.innerHTML += `
          <li class="text-xl">${habilidad[index].nombre}</li>
          <div class="w-full bg-gray-500/20 rounded-2xl">
          <div class="w-[${nivel}%] ${color} rounded-2xl px-2">${nivel}%</div>
        </div>
        `;
        console.log(habilidadesList.innerHTML)    
} //profe aun tengo fallas en esto pero intentare solucionarlo, es trabajo desde 0 profe solo lo idee y lo intente pero me falta


let aside=document.getElementById("aside")
let boton=document.getElementById("botonsito")

boton.addEventListener("click", function () {
  aside.classList.toggle("hidden")
})