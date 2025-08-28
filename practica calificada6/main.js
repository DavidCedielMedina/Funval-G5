/* function ingresar(valor1) {
    return valor1+saldo
};
function retirar(valor1) {
    return saldo-valor1
}; */


    let intro = false; // para controlar el ciclo
let nombreUsuario;
let clave;

do {
  nombreUsuario = prompt("Ingresa el usuario").toLowerCase(); // lo paso a minúsculas
  clave = parseInt(prompt("Ingresa tu contraseña de 4 dígitos"));

  if (nombreUsuario === "jesus" && clave === 2468) {
    alert(nombreUsuario + " bienvenido, tu usuario y contraseña son correctas");
    intro = true; // ya entró correctamente
  } else {
    alert("Vuelve a intentarlo");
  }
} while (intro === false);

/* } while (intro === false);

let nombreUsuario =prompt("Ingresa el usuario")
    let clave=parseInt(prompt("ingresa tu contraseña de 4 digitos"))
    do {
        (intro===nombreUsuario.toLocaleLowerCase("jesus") && clave===2468); {
            intro=true
            
        alert(nombre+ " bienvenido tu usuario y contraseña son correctas")
        ( alert("vuelve a intentarlo")) 
     }
        
    } while (intro==true); */
      
     
        
    

    





/* let saldo=100.0;
let menu;
do{ menu=parseInt(prompt(`seleccione su tipo de transaccion:

                1.Ingresar Monto 

                2.Retirar Monto 

                3.Consultar Saldo
                
                4.salir`
))


while ( menu<1 ||  menu>4 )  {
    alert("elija una opcion correcta")
    menu=prompt(`seleccione su tipo de transaccion:

                1.Ingresar Monto 

                2.Retirar Monto 

                3.Consultar Saldo
                
                4.salir`            
)  
}
     switch (menu) {
   case 1: 
        let tramite1 = ingresar(valor1 = parseFloat(prompt("valor de ingreso")))
        saldo=tramite1
        alert(" su saldo actual es " + (tramite1 +"$"))                   
        break;
              
             
 case 2:
        let tramite2 = retirar(valor1 = parseFloat(prompt("valor de retiro")))
         while (tramite2>saldo || tramite2<0) {
            alert("no tienes el saldo suficiente")
            tramite2 = retirar(valor1 =prompt("valor de retiro")) 
        }
        saldo=tramite2
        alert(" su saldo restante es " + (tramite2)+"$")
        break;
        

case 3:
        alert(" su saldo actual es " + saldo +"$")
        break;

case 4:
        alert("esperamos haberte ofrecido un buen servicio")
        break;
}}
        while (menu !== 4);

 */