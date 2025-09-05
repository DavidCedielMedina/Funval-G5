/*  let botoncito=document.querySelector("#boton");
let fotofiona=document.querySelector("#foto");
 
 botoncito.addEventListener("click", function () {
    botoncito.classList.replace("bg-blue-600","bg-red-700")
}) 

    
 botoncito.addEventListener("click",  function () { 
    fotofiona.setAttribute("src","https://i.pinimg.com/originals/17/11/42/171142be15ad76710183193d68084a3b.jpg") 
  
    if (botoncito.classList.contains("bg-green-600", "rounded-4")) { 
         botoncito.classList.replace("bg-green-800","bg-red-600")
     } else{
        botoncito.classList.replace("bg-green-600","bg-red-800")

} botoncito.textContent="ogra?"}
)  */

let form=document.querySelector("#formulario")

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let info={};
    let nameInput=document.querySelector("#name")
    let edadInput=document.querySelector("#edad")
    let miembroInput=document.querySelector("#miembro")
    info.nombre=nameInput;
    info.edad=edadInput;
    info.miembro=miembroInput;
    console.log(form)
})