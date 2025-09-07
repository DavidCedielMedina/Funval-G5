
function cuadrado(lado) {
    return lado*lado; 
}

function rectangulo(base, altura){
    return base*altura
}
function triangulo(base, altura) {
    return (base*altura)/2
}

let menu= parseInt(prompt(`elija un numero:
    1.calcular el area de un cuadrado
    2.calcularel area de un rectangulo
    3.calcular el area de un triangulo`)) 

while ( menu<1 ||  menu>3 ) {
    alert("ingresa una opcion correcta");
    menu= parseInt(prompt(`elija un numero:
    1.calcular el area de un cuadrado
    2.calcularel area de un rectangulo
    3.calcular el area de un triangulo`))
}


switch (menu) {
    case 1:
        let areaCuadrado = cuadrado(lado= parseInt(prompt("ingresa el valor de los lados")))
        console.log("area cuadrado es "+areaCuadrado)
        break;

        case 2:
        let areaRectamgulo = rectangulo(base = parseInt(prompt("ingresa el valor de la base")),
                                        altura = parseInt(prompt("ingresa el valor de la altura")))
        console.log("area cuadrado es "+areaRectamgulo)
        break;

        case 3:
        let areaTriangulo = triangulo(base = parseInt(prompt("ingresa el valor de la base")),
                                        altura = parseInt(prompt("ingresa el valor de la altura")))
        console.log("area cuadrado es "+areaTriangulo)
        break;

    default:
        console.log("ingresa un valor correcto")
        break;
}

/* let edadProgra = 16;

while (edadProgra <= 18) {
  alert(edadProgra);
  edadProgra++;} */
