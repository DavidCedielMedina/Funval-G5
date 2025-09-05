/* let edad = 0;
 edad=parseInt(prompt("cual es tu edad?")); */

 /*if (edad>65) {
    console.log("eres un adulto mayor(tercera edad)")
} else {
    console.log("no eres un adulto mayor(tercera edad)")
} */

/* if (edad>=18) {
    if (edad>65) {
        console.log("felicidades recibes un descuento del 30%")
    } else {
        console.log("bienvenido")
    }
} else {
    console.log("fuera de aqui")
}*/
//---------bucles------
/* let num=0;
let factorial=1;
for (let i = 1; i <=num; i++) {
    factorial=factorial*i;
}
console.log(factorial) */

//------------Arrays-----------
/* let frutas=["manzana","pera","banana","frutilla"]

let eleccion= "frutilla";
let siono=false
for (let index = 0; index < frutas.length; index++) {
    let element= frutas[index];  
    if (element===eleccion) {
        siono=true;
        console.log("en un ratit`s te lo preparo caserito")
    } 
} 
if (!siono) {
    console.log("ya no tengo casero")
}  */
        
/* let array=[
    [45, 36, 76],
    [9, 123, 683],
    [9, 5, 6],
]; */

/* let valor1=0;
let valor2=0;
let valor3=0;

for (let index = 0; index < array.length; index++) {
    valor1=array[0][0]
    valor2=array[1][1]
    valor3=array[2][2]
    suma=valor1+valor2+valor3
}
console.log(suma) */

/* let suma=0;
for (let index = 0; index < array.length; index++) {
    suma=suma+array[index][index];       
    }
    console.log(suma) 
    
 --------------diagonal principal-------------- 
let principal = 0;
let secundaria = 0;
for (let index = 0; index < matriz.length; index++) {
  principal = principal + matriz[index][index];
}
console.log(principal);
 --------------diagonal secundaria---------------- 
let contador = matriz.length;
for (let index = 0; index < matriz.length; index++) {
  secundaria = secundaria + matriz[contador - 1][index];
  contador--;
}
console.log(secundaria);    
*/

/* 
    crear un objeto de tipo Persona 
    por lo meno tener 3 tipos de datos diferentes
    y un array
*/

/* let Persona={
    nombre:"jesus",
    Edad: 23,
    nacionalidad:"colombiano",
    esRetornado:true,
    anime:["black Clover","one piece","jujutzu"]
}; */

let estudiantes = [
  {
    nombre: "Juan",
    edad: 28,
    notas: [23, 34, 45, 67, 89],
  },
  {
    nombre: "Pedro",
    edad: 20,
    notas: [23, 34, 45, 67, 89],
  },
  {
    nombre: "Santiago",
    edad: 65,
    notas: [23, 34, 45, 67, 89],
  },
  {
    nombre: "Ricardo",
    edad: 16,
    notas: [23, 34, 45, 67, 89],
  },
];

for (let index = 0; index < estudiantes.length; index++) {
  let estudiante = estudiantes[index];
  if (estudiante.edad >= 18) {
    console.log(estudiante.nombre, estudiante.edad);
  }
}