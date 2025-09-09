//fila de motos para la gasolina

/* console.log("moto1")
console.log("moto2")
console.log("moto3")
console.log("moto4")
console.log("moto5")
console.log("moto6")
console.log("moto7")
console.log("moto8")
 */
//atencion
/* setTimeout(()=>{
    console.log("dar buena atencion al cliente")
} , 3000)
console.log("cantidad de galosina")
console.log("mientras el cliente habre la tapa")

console.log("poner la pistola de carga en la boca del tanque")
setTimeout(() => {
   console.log("cantidad comprada lista") 
}, 3000);

console.log("recibir pago mientras se llena")
console.log("regresar vueltos si es el caso") */

//-----crear promesa-------

/* function promesa() {
    return new Promise((resolve,reject)=>{
        let cumplio=false;
        setTimeout(()=>{
            if(cumplio){
                resolve("el dia llego, la promesa se cumplio")
            }else{
                reject("hay promesas que no se cumplen y dias que nunca llegan")
            }
        }, 2000);
    });
}; */
//------consumir---------
/* promesa()
    .then((winner) => {
        console.log(winner);
    })
    .catch((loser)=>{
        console.log(loser)
    })  */

    //----------------ejercicio---------------------

/* let listaEstudiantes = [
  { nombre: "Juan", Pais: "Argentina", edad: 20 },
  { nombre: "Harold", Pais: "PERU", edad: 13 },
  { nombre: "Charlie", Pais: "Chile", edad: 14 },
  { nombre: "CHENTE", Pais: "Mexico", edad: 31 },
  { nombre: "FAUSTO", Pais: "BOLIVIA", edad: 17 },
  { nombre: "MARIA", Pais: "PERU", edad: 18 },
  { nombre: "DIEGO", Pais: "Peru", edad: 23 },
  { nombre: "Martin" },
];
let superPromesa = new Promise((resolve, reject) => {
  let siLlego = true;
  setTimeout(() => {
    if (siLlego) {
      resolve(listaEstudiantes);
    } else {
      reject("error 404 se cayo la base de datos :v");
    }
  }, 3000);
}); */

/* filtrar solo a los estudiantes mayores de edad y q ademas sean de Peru */

/* let estudiantesFiltrados=listaEstudiantes.filter((estudiante)=>estudiante.edad>17 && estudiante.Pais.toLocaleLowerCase()==="peru")


superPromesa
    .then((winner) => {
        let estudiantesfil=estudiantesFiltrados;
        console.log("Estudiantes mayores de peru")
        console.log(estudiantesfil)
    })
    .catch((noCumple)=>{
        console.log(noCumple)
    }) */



function tomarPedido(pedido, callback) {
  console.log(`Cliente llegó y pidió: ${pedido}`);
  callback(pedido);
}


function cocina(pedido) {
  return new Promise((resolve, reject) => {
    let tiempoPreparacion;

    switch (pedido) {
      case "Pizza":
        tiempoPreparacion = 3000; 
        break;
      case "Hamburguesa":
        tiempoPreparacion = 2000; 
        break;
      case "Ensalada":
        tiempoPreparacion = 1000; 
        break;
      default:
        return reject(" Plato no disponible");
    }

    console.log(`Cocinando ${pedido}...`);
    setTimeout(() => {
      console.log(`${pedido} lista en ${tiempoPreparacion / 1000} segundos`);
      resolve(pedido);
    }, tiempoPreparacion);
  });
}


async function servircomercobrar(pedido) {
  try {
    console.log(`Sirviendo ${pedido} al cliente...`);

    await new Promise((resolve) => {
      console.log("Cliente esta comiendo...");
      setTimeout(resolve, 2000);
    });

    console.log("Comida Pagada, Sin propina");
  } catch (error) {
    console.log(error);
  }
}

tomarPedido("Hamburguesa", (pedido) => {
  console.log(`Pedido recibido: ${pedido}`);

  cocina(pedido)
    .then((pedidoListo) => servircomercobrar(pedidoListo))
    .catch((error) => console.log(error));
});