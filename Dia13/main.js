/* let n1= parseInt(prompt("ingresa un numero que quieras multiplicar"))
let n2= parseInt(prompt("ingresa un numero de cuantas veces lo multiplicaras"))
let resultado=0;

for (let j=1; j <=n1; j++ ) {
    res=res + n2;
}
alert(res)
 */


/* function invertirTexto (palabra) {
    return texto.split("").reverse().join("");
}
console.log(invertirTexto("Hola Mundo")); */ 

/* Ejercicio 2: Validación de Contraseña Segura
Contexto: Crear un sistema que pida una contraseña y verifique si cumple con las reglas:
Al menos 8 caracteres.
Debe contener al menos 1 número.
Debe contener al menos 1 letra mayúscula.
Debe contener al menos 1 letra minúscula. */

function validarContraseña(contraseña) {
  for (let i = 0; i < contraseña.length; i++) {
    if (!isNaN(contraseña[i]) && contraseña[i] !== " ") {
      return "La contraseña es valida  (contiene al menos un numero)";
    }
  }
  return "La contraseña no es valida  (debe contener al menos un numero)";
}

console.log(validarContraseña("chucho"));
console.log(validarContraseña("chucho13"));   
console.log(validarContraseña("a41dfadf"));
