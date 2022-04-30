/*----------------------------------------------------------------------------*/
//SHIP CLASS
/*----------------------------------------------------------------------------*/
export class Ship {
    constructor(type, startingHP, decrement, shipNumber) {
        this.type = type;
        this.startingHP = startingHP;
        this.currentHP = startingHP;
        this.decrement = decrement;
        this.shipNumber = shipNumber;
        this.isDestroyed = false;
    }

    //Method which reduces a ships' hP and detects if ship is destroyed
    updateShip() {
        this.currentHP -= this.decrement;
        if (this.currentHP <= 0) {
            this.isDestroyed = true;
        }
    }

    //Will generate an html element of the ship
    get generatedShipHTML() {
        const profileHTML = `
        <div class = "Ship-${this.shipNumber} ship">
            <i class="fa-solid fa-place-of-worship ship__icon ship__icon--${
                this.type
            } fa-3x"></i>
            <div class = "ship__health-bar">
            <div class = "ship__health-bar__meter" style="height:${
                (this.currentHP * 100) / this.startingHP
            }%;"
            ></div>
            </div>
            <p class = "ship__text">${this.type} Ship</p>

        </div>`;

        const hiddenHTML = `
        <div class = "Ship-${this.shipNumber} ship hidden">
            <i class="fa-solid fa-place-of-worship ship__icon ship__icon--${
                this.type
            } fa-3x"></i>
            <div class = "ship__health-bar">
            <div class = "ship__health-bar__meter" style="height:${
                (this.currentHP * 100) / this.startingHP
            }%;"
            ></div>
            </div>
            <p class = "ship__text">${this.type} Ship</p>
        </div>`;
        return this.isDestroyed ? hiddenHTML : profileHTML;
    }
}
/*----------------------------------------------------------------------------*/
//FLEET CLASS
/*----------------------------------------------------------------------------*/
export class Fleet {
    constructor() {
        this.assignedShips = [];
    }

    //Will first add ships to the fleet
    buildFleet() {
        this.assignedShips.push(new Ship("Mother", 100, 9, 1));
        for (let i = 0; i < 5; i++) {
            this.assignedShips.push(new Ship("Defence", 80, 10, i + 2));
        }
        for (let i = 0; i < 8; i++) {
            this.assignedShips.push(new Ship("Attack", 45, 12, i + 7));
        }
    }

    //Updates status of ships depending on targeted ship number
    updateFleetStatus(targetedShipNumber) {
        this.assignedShips.forEach((ship) => {
            if (ship.shipNumber === targetedShipNumber) {
                ship.updateShip();
            }
        });
    }

    //Will generate the html of all the ships in the fleet
    get entireFleetHTML() {
        return this.assignedShips
            .map((ship) => ship.generatedShipHTML)
            .join("");
    }
}
/*----------------------------------------------------------------------------*/
//CANNON FUNCTION
/*----------------------------------------------------------------------------*/

/*Makes an array from non-destroyed ships in fleet and then selects a random ship to target and return its number 
so it can only hit living alien ships */
export const cannon = (enemyFleet) => {
    const availableTargets = enemyFleet.assignedShips
        .map((ship) => {
            if (ship.isDestroyed === false) return ship.shipNumber;
        })
        .filter((items) => items != undefined);

    const randomTarget =
        availableTargets[Math.floor(Math.random() * availableTargets.length)];
    return randomTarget;
};
