import {Fleet, cannon} from './scripts/index.js'
/*----------------------------------------------------------------------------*/
//MAIN GAME
/*----------------------------------------------------------------------------*/

const arena = document.querySelector(".arena")
const button = document.querySelector(".cannon__button")
const starFleet = new Fleet
starFleet.buildFleet()
arena.innerHTML = starFleet.entireFleetHTML

const isGameOver = () =>{
  const motherShip = document.querySelector(".Ship-1")
  if(starFleet.assignedShips[0].isDestroyed === true){
    const restart = confirm("Mother ship destroyed, would you like to play again?");
    if(restart === true){window.location = "/"}
  }
}

button.addEventListener("click", ()=>{
  starFleet.updateFleetStatus(cannon(starFleet))
  arena.innerHTML=starFleet.entireFleetHTML
  isGameOver()
})

document.addEventListener("keydown", (event)=>{
  if(event.key === " "){
    starFleet.updateFleetStatus(cannon(starFleet))
    arena.innerHTML=starFleet.entireFleetHTML
    isGameOver()
  }
})