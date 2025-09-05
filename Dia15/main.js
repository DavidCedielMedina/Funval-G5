 let estudiantesFunval1 = [
  "Pedro",
  "David",
  "Nefi",
  "Santiago",
  "Roberto",
  "Mario",
  ""
]; 
//usando inclutes, metodo
 /* if (estudiantesFunval1.includes("luis")) {
    console.log("luis está en esta lista");
} else {
    console.log("luis no está en la lista");
} */
 
//solucion 1
  let verdadero1;
 let verdadero2;
for ( let index = 0 ; index < estudiantesFunval1.length; index++) {
    if (estudiantesFunval1[index]==="luis") {
        verdadero=true;
        } 
        
     else {
        verdadero1=false        
    }  if (estudiantesFunval1[index]==="Santiago") {
        verdadero2=true;
        } 
        
     else {
        verdadero=false        
    }}
    if (verdadero1) {
        console.log("luis esta en esta lista")
    } else {
        console.log("luis no esta en la lista")
    } 

    if (verdadero2) {
        console.log("santiago esta en esta lista")
    } else {
        console.log("santiago no esta en la lista")
    }  

//solucion 2
/* let verdadero=false
for ( let index = 0 ; index < estudiantesFunval1.length; index++) {
    if (estudiantesFunval1[index]==="luis") {
        verdadero=true;
        console.log("si esta");
        break;
        } 
}
if (!verdadero) {
    console.log("no esta")
} */
//funcion para sacar promedio
/* function promedio(array) {
    for (let index = 0; index < array.length; index++) {
            suma=(suma+array[index].valor)
            total=suma  
    }

    console.log(total/array.length)  
} */

 
/* se le dara un array de notas de un estudiante debera sacar el promedio
(sumar notas y dividerlas en la cantidad de notas) de nuestro estudiante y verificar 
    si esta aprobado o reprobado la nota minima de aprobacion es de 51
*/

/*  let notasEstudiante = [65, 44, 90, 10, 51, 0];

function promedio(a,b) {
    return a+b;
}
let total=0;
let suma=0;
for (let index = 0; index < notasEstudiante.length; index++) {
    suma=suma+notasEstudiante[index] 
} 
console.log(suma)
total=suma/notasEstudiante.length
console.log(total) */


    /* ejercicio quiero q vean un objeto del mundo real
y lo puedan codigicar en un objeto manipulable
acceder a almenos 2 valores atraves de sus llaves
agregar almenos 2 pares de llave valor y 
eliminar 1 ya existente */
   
/* materiales escolares */

/* let materialesEscolares={
    muchila:"totto",
    esfero:"pilot",
    tarea:false,
    recreo:2000
}
console.log(materialesEscolares);
materialesEscolares.cuaderno="norma";
materialesEscolares.dinero=100;
console.log(materialesEscolares);
delete materialesEscolares.dinero;
materialesEscolares.recreo=1500;
materialesEscolares.tarea=true;
console.log(materialesEscolares);
 */

// 14. Promedio de valores
// Dado un array de objetos {nombre, precio},
//  calcula el precio promedio de todos los productos.

 /* let productos=[
    {nombre:"hamburguesa", valor:30},
    {nombre:"perro caliente", valor:25},
    {nombre:"pizza", valor:15},
    {nombre:"picada", valor:40},
    {nombre:"salchipapa", valor:20},
    {nombre:"broster", valor:50},
    {nombre:"pechuga rellena", valor:45}
]
let total=0;
let suma=0;
promedio(productos) */

/*  for (let index = 0; index < productos.length; index++) {
            suma=(suma+productos[index].valor)
            total=suma  
    }
    console.log(total/productos.length)  */
    


/* for (let index = 0; index < productos.length; index++) {
    console.log(productos.length)
    
} */

 /* let listaEstudiantes = [
  {
    nombre: "Mario",
    Pais: "Argentina",
    notas: [20, 55, 78, 90, 12],
  },
  {
    nombre: "Nefi",
    Pais: "Mexico",
    notas: [100, 90, 78, 90, 0],
  },
  {
    nombre: "Santiago",
    Pais: "Argentina",
    notas: [70, 80, 77, 0, 11],
  },
  {
    nombre: "Geraldine",
    Pais: "Peru",
    notas: [20, 10, 0, 0, 100],
  },
  {
    nombre: "Jesus",
    Pais: "Colombia",
    notas: [70, 60, 80, 32, 22],
  },
]; */
/* 
quiero un programa q pueda mostrarme el nombre de los estudiantes aprobados cuando promedio
es mayor a 75, mostrar a los estudiantes aprobados junto con su nota de aprobacion 
-mostrar de q pais tenemos la mayor cantidad de estudiantes aprobados y la cantidad q tiene
ejemplo ARGENTINA 12
*/
/* function suma(a,b) {
    return a+b
}
let not=0;
let sumaTotal=0;

for (let index = 0; index < listaEstudiantes.length; index++) {
    sumaTotal=suma(sumaTotal,listaEstudiantes[index].notas)
    not
    
}
let x=4 */
