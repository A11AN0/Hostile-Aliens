import {Fleet, cannon} from './scripts/index.js'
/*----------------------------------------------------------------------------*/
//MAIN GAME
/*----------------------------------------------------------------------------*/

const body = document.querySelector("body")
const starFleet = new Fleet
starFleet.buildFleet()
body.innerHTML = starFleet.entireFleetHTML

document.addEventListener("click", ()=>{
  starFleet.updateFleetStatus(cannon(starFleet))
  body.innerHTML=starFleet.entireFleetHTML
})