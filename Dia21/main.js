/* function saludo(nombre,callback) {
    callback(nombre);
}

function saludar(nombrePersona) {
    console.log(`bienvenido ${nombrePersona}`);
}

saludo("jesus",saludar)
 */

//----map----
/* let numeros=[
    1,2,3,4,50,6,25,40
] */
//find
/* let mayor = numeros.find((element) => element > 15);
console.log(mayor);

const inventario = [
  { nombre: "manzanas", cantidad: 2 },
  { nombre: "bananas", cantidad: 0 },
  { nombre: "cerezas", cantidad: 5 },
];

const resultado = inventario.find((fruta) => fruta.nombre === "cerezas");

console.log(resultado) */
//some
/* let comprueba = (element) => element > 4 ;
console.log(numeros.some(comprueba)); */

//map
/* let doble = numeros.map(function (x) {
  return x * 2;});

console.log(doble) */

//------------Ejercicios-------------
//1
let numeros=[
    11,5,55,9,23,5,67,3
];

let multiplicacion=numeros.map((numero)=>numero*2)
console.log(multiplicacion)
//2
let edades=[
    {nombre:"jesus",edad:23},
    {nombre:"david",edad:25},
    {nombre:"luna",edad:17},
    {nombre:"mary",edad:55},
    {nombre:"adara",edad:15}
]

const result = edades.filter((edad) => edad.edad >=18);  
console.log(result)  
//3
let nombres=[
    "jesus",
    "david",
    "ampar",
    "richard",
    "carlos",
    "james",
    "jhoselyne",
]

nombres.forEach((element) => console.log(`hola,${element}`));
//4

let pares=((par)=>par%2===0)
console.log(numeros.some(pares))
//5
let nombreMayorACincoLetras=nombres.find(nombre=>nombre.length>5)
console.log(nombreMayorACincoLetras)

//6
let array=[
    -1,3,6,-7,50,-24
]

let primerNegativo=array.findIndex((numero)=>numero<0)
console.log(primerNegativo)
//7

let paresAlCuadrado=numeros.map((num)=> num%2===0)
console.log(paresAlCuadrado.filter((num)=>num%2===0))