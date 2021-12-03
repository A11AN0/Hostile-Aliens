class Ship {
  constructor(type, startingHP, decrement, shipNumber){
    this.type = type;
    this.currentHP = startingHP;
    this.decrement = decrement;
    this.shipNumber = shipNumber;
  }

  
  //Will simply update ship
  updateShip() {
    this.currentHP -= this.decrement 
  }

  //Will generate an html element of the ship
  get generatedShipHTML() {
    const profileHTML = `
        <div class = "Ship-${this.shipNumber}">
            <h1>${this.type} Ship-${this.shipNumber}</h1>
            <h1>${this.currentHP}</h1>
        </div>`;
    return this.currentHP > 0? profileHTML : "kaboom"
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



const body = document.querySelector("body")
const starFleet = new Fleet
starFleet.buildFleet()
body.innerHTML = starFleet.entireFleetHTML

document.addEventListener("click", ()=>{
  const randomNumber = Math.round(Math.floor(Math.random() * 14) + 1);
  starFleet.updateFleetStatus(randomNumber)
  body.innerHTML=starFleet.entireFleetHTML
})









