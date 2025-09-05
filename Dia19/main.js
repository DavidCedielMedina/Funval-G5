/* var  nombre="jesus";
let  apellido="cediel";
const edad = 23;

let info= "hola "+ nombre+" "+apellido+" tu edad es "+edad+".";
let info2=`hola ${nombre} ${apellido} tu tienes ${edad} años de edad.`
console.log(info)
console.log(info2)



let estudiantes=[
    "santiago",
    "luis",
    "geraldine",
    "jesus",
    "mario"
];

let lista=document.getElementById("list")
let listado="";
for (let index = 0; index < estudiantes.length; index++) {
    listado.innerHTML+=`<li>${estudiantes[index]}</li>`;

}
let item=document.createElement(`li`)
item.textContent=listado
 */

/* let listado = document.querySelector("#lista");

for (let index = 0; index < estudiantes.length; index++) {
  listado.innerHTML += `<li class="text-red-800 font-bold">${estudiantes[index]}</li>`;
}
let itemli = document.createElement("li");
itemli.textContent = "Kevin";
itemli.classList.add("text-red-800", "font-bold");
listado.appendChild(itemli); */


/* 
💡 EJERCICIO: "Liga de Superhéroes"
1. Desestructura el array para obtener el primer héroe, el segundo héroe, y el resto en otro array.  
2. Crea un nuevo array de héroes que incluya a los originales y agrega uno nuevo con el spread operator (...).  
3. Desestructura un héroe en sus propiedades (nombre, poder, fuerza) y usa template literals para mostrar su descripción en consola.  
4. Agrega un botón que, al hacer clic, muestre en el DOM una lista de héroes con sus niveles de fuerza.
*/
// Array de superhéroes
const heroes = [
  { nombre: "Iron Man", poder: "Armadura tecnológica", fuerza: 85 },
  { nombre: "Thor", poder: "Martillo Mjolnir", fuerza: 95 },
  { nombre: "Hulk", poder: "Fuerza sobrehumana", fuerza: 100 },
  { nombre: "Black Widow", poder: "Espionaje y combate", fuerza: 75 },
];

let [heroe1,heroe2,heroe3,heroe4]=heroes;
console.log(`heroes que ocupan los 2 primeros puestos`, heroe1, heroe2) 
let heroesdesterrados=[heroe3,heroe4]
console.log("heroes en otro array", heroesdesterrados)

let newHeros=[...heroes,{nombre:"Jesus", poder:"experto en crear bugs", fuerza:10}]
console.log(newHeros)

let [newHero1,newHero2, newHero3, newHero4,newHero5]=newHeros;

let chucho=`bienvenido ${newHero5.nombre} tu super poder es ${newHero5.poder}
 y  tu humilde fuerza es de ${newHero5.fuerza} `
 console.log(chucho)