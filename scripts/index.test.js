import {Ship} from './index'

describe("------Tests for the Ship Class------- \n", () => {
    

    describe("updateShip() Test", () => {   
        test("updateShip reduces current HP of ship by the given decrement value", () => {
            const testShip = new Ship("prototype", 37, 5, 420);
            testShip.updateShip()
            expect(testShip.currentHP).toBe(32);
        });

        test("When ship HP runs out, updateShip() changes the status of ship.isDestroyed", () => {
            const testShip = new Ship("prototype", 37, 37, 420);
            testShip.updateShip()
            expect(testShip.isDestroyed).toBe(true);
        });
    });

    describe("generatedShipHTML() Test", () => {   
        test("When the ship is not destroyed, return regular HTML", () => {
            const testShip = new Ship("prototype", 37, 5, 420);
            testShip.updateShip()
            expect(testShip.generatedShipHTML).toBe(`
        <div class = "Ship-${testShip.shipNumber}">
            <h1>${testShip.type} Ship-${testShip.shipNumber}</h1>
            <h1>${testShip.currentHP}</h1>
        </div>`
            );
        });

        test("When ship is destroyed, return kaboom", () => {
            const testShip = new Ship("prototype", 37, 37, 420);
            testShip.updateShip()
            expect(testShip.generatedShipHTML).toBe("kaboom");
        });
    });

  });