import { Ship, Fleet, cannon } from "./index";

describe("------Tests for the Ship Class------- \n", () => {
    describe("updateShip() Test", () => {
        test("updateShip reduces current HP of ship by the given decrement value", () => {
            const testShip = new Ship("prototype", 37, 5, 420);
            testShip.updateShip();
            expect(testShip.currentHP).toBe(32);
        });

        test("When ship HP runs out, updateShip() changes the status of ship.isDestroyed", () => {
            const testShip = new Ship("prototype", 37, 37, 420);
            testShip.updateShip();
            expect(testShip.isDestroyed).toBe(true);
        });
    });

    describe("generatedShipHTML() Test", () => {
        test("When ship is not destroyed, return correct HTML", () => {
            const testShip = new Ship("prototype", 37, 4, 420);
            testShip.updateShip();
            expect(testShip.generatedShipHTML).toBe(`
        <div class = "Ship-${testShip.shipNumber} ship">
            <i class="fa-solid fa-place-of-worship ship__icon ship__icon--${
                testShip.type
            } fa-3x"></i>
            <div class = "ship__health-bar">
            <div class = "ship__health-bar__meter" style="height:${
                (testShip.currentHP * 100) / testShip.startingHP
            }%;"
            ></div>
            </div>
            <p class = "ship__text">${testShip.type} Ship</p>
        </div>`);
        });

        test("When ship is destroyed, return correct HTML \n", () => {
            const testShip = new Ship("prototype", 37, 37, 420);
            testShip.updateShip();
            expect(testShip.generatedShipHTML).toBe(`
        <div class = "Ship-${testShip.shipNumber} ship hidden">
            <i class="fa-solid fa-place-of-worship ship__icon ship__icon--${
                testShip.type
            } fa-3x"></i>
            <div class = "ship__health-bar">
            <div class = "ship__health-bar__meter" style="height:${
                (testShip.currentHP * 100) / testShip.startingHP
            }%;"
            ></div>
            </div>
            <p class = "ship__text">${testShip.type} Ship</p>
        </div>`);
        });
    });
});

describe("------Tests for the Fleet Class------- \n", () => {
    describe("buildFleet() Test", () => {
        test("Should add all ships in fleet to assignedShips array.", () => {
            const alienFleet = new Fleet();
            alienFleet.buildFleet();
            expect(alienFleet.assignedShips[0].shipNumber).toBe(1);
            expect(alienFleet.assignedShips.length).toBe(14);
        });
    });

    describe("updateFleetStatus() Test", () => {
        test("Given the number of the target ship, should apply the hP decrement", () => {
            const alienFleet = new Fleet();
            alienFleet.buildFleet();
            alienFleet.updateFleetStatus(12);
            expect(alienFleet.assignedShips[11].currentHP).toBe(33);
        });
    });
});

describe("------Tests for Cannon()------- \n", () => {
    test("Given a built fleet, return a random target ship number", () => {
        const alienFleet = new Fleet();
        alienFleet.buildFleet();
        const targetedShipNumber = cannon(alienFleet);
        expect(targetedShipNumber).toBeGreaterThan(0);
        expect(targetedShipNumber).toBeLessThan(15);
    });
});
