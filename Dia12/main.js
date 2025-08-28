let nombreUsuario = prompt(`Ingres tu nombre`)
let diaDeLaSemana = prompt(`Elige un dia de la semana del 1-7:
    1.lunes
    2.martes
    3.miercoles
    4.jueves
    5.viernes
    6.sabado
    7.domingo`);


if (diaDeLaSemana>0 && diaDeLaSemana<6) {
    console.log(nombreUsuario+ " hoy tenemos clases en Funval")
} else if (diaDeLaSemana==6) {
    console.log(nombreUsuario+ " hoy es dia de descanso")
} else if (diaDeLaSemana==7){
    console.log(nombreUsuario+ " hoy es dia de ir a la iglesia")
} else {
    console.log(nombreUsuario+ " numero invalido")
}
