//----declaraciones----
let clickselecX=document.getElementById("selecX");
let clickselecO=document.getElementById("selecO");
let clickgameCPU=document.getElementById("GameCPU");
let clickgamePlayer=document.getElementById("GamePlayer");
const cj=document.querySelectorAll(".cj");
let tablerodeJugadas=[null,null,null,null,null,null,null,null,null];
let modalsito=document.getElementById("modalsito")




//--------logica--------
function ganador() {
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
for (let index = 0; index < casosGanadores.length; index++) {
  let [a,b,c]=casosGanadores[index];
  if (tablerodeJugadas[a] && tablerodeJugadas[a]===tablerodeJugadas[b]&& tablerodeJugadas[a]===tablerodeJugadas[c]) {
    return tablerodeJugadas[a];}}
    if (!tablerodeJugadas.includes(null)) {
    return "empate";
  }
    return null;
} 
modalsito.classList.replace("hidden","flex")

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


function cambioDeTurno() {
  playerInit=(playerInit== svgX) ? svgO:svgX
}

cj.forEach(celda => {
    celda.addEventListener("click", () => {   
    celda.innerHTML = playerInit;
    cambioDeTurno()
  });
});


 /* let gamePlayer=clickgamePlayer.addEventListener("click",() => {})  */
/* let selecX=clickselecX.addEventListener("click") */
/* selecO=clickselecO.addEventListener("click")
gameCPU=clickgameCPU.addEventListener("click")
 */
/*let verificacionX=true;
let verificacionO=false;*/



