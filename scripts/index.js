class Ship {
  constructor(type, startingHP, decrement, shipNumber){
    this.type = type;
    this.currentHP = startingHP;
    this.decrement = decrement;
    this.shipNumber = shipNumber;
    this.isDestroyed = false;
  }
 
  //Will simply update ship
  updateShip() {
    this.currentHP -= this.decrement 
    if(this.currentHP <= 0){this.isDestroyed = true}
    //ability to tell if ship is destroyed (will be handy for the gun)
  }

  //Will generate an html element of the ship
  get generatedShipHTML() {
    const profileHTML = `
        <div class = "Ship-${this.shipNumber}">
            <h1>${this.type} Ship-${this.shipNumber}</h1>
            <h1>${this.currentHP}</h1>
        </div>`;
    return this.isDestroyed? "kaboom": profileHTML 
  }

}

//Ship class seems to be working (basic preliminary tests)

class Fleet {
  constructor(){
    this.assignedShips = []
  }

  buildFleet(){
    this.assignedShips.push(new Ship("Mother", 100, 9, 1 ))
    for(let i=0; i<5; i++){
      this.assignedShips.push(new Ship("Defence", 80, 10, i+2))
    }
    for(let i = 0; i<8; i++){
      this.assignedShips.push(new Ship("Attack", 45, 12, i+7))
    }
  }

  updateFleetStatus(targetedShipNumber){
    this.assignedShips.forEach((ship) => {
      if(ship.shipNumber === targetedShipNumber){
        ship.updateShip()
      }
    })
  }

  get entireFleetHTML(){
    return this.assignedShips.map((ship)=>ship.generatedShipHTML).join("")
  }
}


//Very very basic logic of game works when tested with a 'click' event listener

//Cannon function (can only hit living alien ships)
const cannon = (enemyFleet) => {
  //Make an array of ship numbers from fleet if their this.destroyed = false
  const availableTargets = enemyFleet.assignedShips.map((ship)=>{
    if(ship.isDestroyed === false) return ship.shipNumber
  }).filter((items) => items != undefined)
  //Choose a random number from that array
  const randomTarget = availableTargets[Math.floor(Math.random()*availableTargets.length)]
  //return that random number 
  return randomTarget
  //therefore, will only hit ships that aren;t destroyed
}


const body = document.querySelector("body")
const starFleet = new Fleet
starFleet.buildFleet()
body.innerHTML = starFleet.entireFleetHTML

document.addEventListener("click", ()=>{
  starFleet.updateFleetStatus(cannon(starFleet))
  body.innerHTML=starFleet.entireFleetHTML
})









