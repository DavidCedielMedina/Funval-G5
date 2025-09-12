/* fetch("https://jsonplaceholder.typicode.com/posts")
 .then((info)=>info.json())
 .then((datos)=>
 {console.log(datos)});

 async function traerData() {
    let extracto= await fetch("https://jsonplaceholder.typicode.com/posts");
    let datos= await extracto.json();
    console.log(datos)
 }

traerData(); 

const { info } = require("autoprefixer");*/

/* const { data } = require("autoprefixer") */



//----------ejercicio--------------
/* let cajita=document.getElementById("cajita")

fetch("https://jsonplaceholder.typicode.com/users")
.then((info)=>info.json())
.then((usersData)=>{
    console.log(usersData)
    usersData.forEach(usuario=> {
        cajita.innerHTML +=`
        

<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm bg-gradient-to-tl from-blue-950 via-black/60 to-blue-950 ">
    
    <h2 class="text-amber-300">Nombre:</h2>
    <h5 class="mb-2 text-2xl font-semibold tracking-tight  font-serif text-white"> ${usuario.name}</h5>
    <h2 class="text-amber-300">Nombre de Empresa:</h2>
    <h5 class="mb-2 text-2xl font-semibold tracking-tight  font-serif text-white"> ${usuario.company.name}</h5>
    <h2 class="text-amber-300">Estado:</h2>
    <h5 class="mb-2 text-2xl font-semibold tracking-tight  font-serif text-white"> ${usuario.company.catchPhrase}</h5>

    
    
    
</div>
`
    });
}); */


/* axios("https://jsonplaceholder.typicode.com/posts")
.then(({data})=> console.log(data))
.catch((Error)=>console.log(Error))

async function extraer() {
    try {
     let {data}= await axios("https://jsonplaceholder.typicode.com/posts");
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

extraer(); */

/* 
  solo quiero q rendericen a los usuarios q tengan mas de 25 años y ademas 
  quiero q puedan mostrar los hobbies pero con colores diferentes 
  ejemplo
  videjuegos red svg mando
  caminar  verde  una persona corriendo
  ver peliculas azul cinta*/

axios("./usuarios.json")
    .then(({data})=>{
        console.log(data)
    })
    .catch((error)=>{
        console.log(error)
    })

let cajita=document.getElementById("cajita")

data.filter(({edad})=>edad>25);{
    console.log(data)
}