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

//----------ejercicio--------------
let cajita=document.getElementById("cajita")

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
});


