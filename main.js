import {Fleet, cannon} from './scripts/index.js'
/*----------------------------------------------------------------------------*/
//MAIN GAME
/*----------------------------------------------------------------------------*/

const arena = document.querySelector(".arena")
const button = document.querySelector(".cannon__button")
const starFleet = new Fleet
starFleet.buildFleet()
arena.innerHTML = starFleet.entireFleetHTML

button.addEventListener("click", ()=>{
  starFleet.updateFleetStatus(cannon(starFleet))
  arena.innerHTML=starFleet.entireFleetHTML
})

document.addEventListener("keydown", (event)=>{
  if(event.key === " "){
    starFleet.updateFleetStatus(cannon(starFleet))
    arena.innerHTML=starFleet.entireFleetHTML
  }
})