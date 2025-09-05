/*crear una etiqueta h1 p y div en el html
    selecionar la etiqueta h1 y cambiar el texto y el color de texto
     (pueden usar tailwind o css puro)
    modificar el color de fond de la etiqueta p y el tamaño de texto 
    y con el div agregarle por lo menos 2 hijos 
        uno de esos hijos debera ser IMG
        y el otro sera un p
*/

let modificacion=document.getElementsByClassName("sudtitulo");
let cTitulo = document.getElementById("titulo");
let pModificar = document.getElementsByTagName("p");
let elemento = document.querySelector("p")
console.log(elemento)

let mSubtitulo = document.querySelector("#subtitulo");
mSubtitulo.textContent="que se dice madrecita";
let contenedor= document.querySelector(".cajita");
contenedor.innerHTML+=`<p class="bg-blue-950">muy buenos dias Toros...</p>
<img src="https://wallpaperaccess.com/full/4324228.jpg" alt="">`;

let title=document.querySelector("#titulo")
title.textContent="Somos los Extraterrestres....";
//title.style.fontSize = "45px";
//title.style.backgroundColor= "green";
//title.classList.add("agregar clase");
//title.classList.remove("quitar clase");
//title.classList.toggle("agrega la clase si no esta y si esta la elimina");
title.classList.add("bg-pink-800", "text-2xl")
let parr=document.querySelector(".parrafo")
parr.classList.add("bg-black","text-yellow-500")



/* 
    crear en HTML 
    un etiqeuta de tipo div con h2
    con javascript deberan crear un h1 con el nombre de un producto
    una eitiqueta img para la imagen del producto
    y una etiqueta de tipo parrafo para la descripcion del producto
    y un boton de comprar 
    dberan eliminar el h2 nativo y colocar en orden las etiquetas queda prohibido utilizar INERHTML
*/

let camCaj=document.querySelector("#cajita2")





/* let dids=document.querySelector("div")
dids.();

let newTitle= document.createElement("h1")
newTitle.textContent="nuevo producto"

let newImg= document.createElement("img")
newImg.textContent="https://m.media-amazon.com/images/I/71Jd+MvGKbL._AC_SL1500_.jpg"

let newParrafo=document.createElement("p")
newParrafo.textContent="Carrito remoto de dritft recargable."

let newButton=document.createElement("button")
newButton.textContent="comprar"*/ 