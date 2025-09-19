//----declaraciones----
let intro=document.getElementById("intro");
let selecX=document.getElementById("selecX");
let selecO=document.getElementById("selecO");
let gameCPU=document.getElementById("GameCPU");
let gamePlayer=document.getElementById("GamePlayer");
let retum=document.getElementById("retum")
let cajamayor=document.getElementById("cajamayor")
let juego=document.getElementById("juego");
let cj=document.querySelectorAll(".cj");
let tablerodeJugadas=[null,null,null,null,null,null,null,null,null];
let modalsito=document.getElementById("modalsito")
//--------logica del inicio-------
selecO.addEventListener("click",function selec() {
  
})

function clickSelec(x,y) {
  x.addEventListener(("click"),()=>{
    x.classList.toggle("bg-gray-600")
    y.classList.remove("bg-gray-600")
  })
    
  
    y.addEventListener(("click"),()=>{
    y.classList.toggle("bg-gray-600")
    x.classList.remove("bg-gray-600")}) 
    
  }

  function starPlayer(x,y,z) {
    x.addEventListener("click",()=>{
    y.classList.toggle("hidden")
    z.classList.toggle("hidden")
    })    
  }
    
starPlayer(gamePlayer,juego,intro)
clickSelec(selecX,selecO)



//--------logica--------
function ganador(x,y) {
  const casosGanadores=[
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],     
     [2,5,8],
     [0,4,8],
     [6,4,2]
];
return casosGanadores.some((casosGanadores)=>
casosGanadores.every((index)=>x[index]===y))
} 


//----selec x || o-----

const svgO=`<svg
            class="h-15 w-15 fill-[#f2b237]"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            style="enable-background: new 0 0 100 100"
            xml:space="preserve"
          >
            <g>
              <path
                class="st1"
                d="M100,50c0,27.6-22.4,50-50,50S0,77.6,0,50S22.3,0,50,0S100,22.4,100,50z M69.9,50c0-11-9-20-20-20s-20,9-20,20
		s9,20,20,20S69.9,61,69.9,50z"
              />
            </g>
          </svg>`
const svgX=`<svg
            class="h-15 w-15 fill-[#31c4be]"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            style="enable-background: new 0 0 100 100"
            xml:space="preserve"
          >
            <path
              class="st0"
              d="M96.3,16.4L83.6,3.6c-2.3-2.3-6.1-2.3-8.5,0L50,28.8L24.8,3.6c-2.3-2.3-6.1-2.3-8.5,0L3.6,16.4
	            c-2.3,2.3-2.3,6.1,0,8.5L28.7,50L3.6,75.2c-2.3,2.3-2.3,6.1,0,8.5l12.7,12.7c2.3,2.3,6.1,2.3,8.5,0L50,71.2l25.2,25.2
	            c2.3,2.3,6.1,2.3,8.5,0l12.7-12.7c2.3-2.3,2.3-6.1,0-8.5L71.2,50l25.2-25.2C98.7,22.5,98.7,18.7,96.3,16.4z"
            />
          </svg>`

let playerInit=svgX


//-------cambio de turno---------
function cambioDeTurno() {
  playerInit=(playerInit== svgX) ? svgO:svgX
}
//-------verificacion de ganador-------
 function winner(params) {
  
 }
//------juego-------
  cj.forEach(celda => {
    celda.addEventListener("click", () => {
    if (celda.innerHTML!=="") return;
    celda.innerHTML = playerInit;
    if(ganador(tablerodeJugadas,playerInit)){
      modalsito.classList.remove("hidden");
      return;
    }
    cambioDeTurno()
  });
});
cambioDeTurno();

//--------click para reiniciar--------
retum.addEventListener("click",(()=>{
  cj.forEach(celda => {
    celda.innerHTML = "";
    playerInit=svgX
  });
}))

console.log(cajamayor)


