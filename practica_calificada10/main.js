let cajita=document.getElementById("Cajitadecards")

const fetchUser=async ()=> {
    try {
        let respuesta= await fetch("https://jsonplaceholder.typicode.com/users");
    let datos=await respuesta.json();
    datos.forEach((usuario) => {
        cajita.innerHTML+=`<div
        class="flex flex-col gap-3 p-4 m-5 bg-gradient-to-tr from-[#31326F] via-[#4e6299] to-[#637AB9] rounded-2xl drop-shadow-[5px_5px_0px_#4FB7B3]"
      >
        <h3 class="text-white text-"><strong>Nombre: </strong></h3>
        <p>${usuario.name}</p>
        <h3 class="text-white text-"><strong>Usuario: </strong></h3>
        <p>${usuario.username}</p>
        <h3 class="text-white text-"><strong>Email: </strong></h3>
        <p>${usuario.email}</p>
        <h3 class="text-white text-"><strong>Empresa: </strong></h3>
        <p>${usuario.company.name}</p>
      </div>`;
    });
} catch (error){
        console.log("Error al cargar los usuarios. Inténtalo de nuevo más tarde");
    }
      
    
};
fetchUser()