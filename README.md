# Hostile Aliens

<p align="center">
  <img src="./styles/images/stillDemo.png" alt="Hostile Aliens Demo">
</p>

### Hostile Aliens is an space-invaders inspired project which I built using a test driven and object oriented approach. I built it using JS, HTML and Sass. To play, simply click the fire button and watch the HP of a random alien ship decrease. Alternatively, you can just press the space-bar for faster gameplay.

## Description

This project uses OOP and TDD paradigmns in order to form what could be the basis of a fully, fledged space invaders game. There are 3 classes of ships, (mother ship, defence ship and attack ship) all with varying hP levels. The amount of total hP for each of the classes decreases respectively, with mothership having the greatest amount of hP.

There is only one mothership in the fleet, surrounded by multiple defence and attack ships. Upon each click of the 'Fire' button; or press of the spacebar; Any random ship will be 'shot at'; this is represented as a decrease in hP. The game ends when the mothership's hP reaches 0.

---

<p align="center">
  <img src="./styles/images/demo.gif" alt="Hostile Aliens Gif">
</p>

---

| Table of Contents               |
| ------------------------------- |
| [User Story](#UserStory)        |
| [Functionality](#Functionality) |
| [Technology](#Technology)       |
| [License](#License)             |
| [Contributors](#Contributors)   |
| [Links](#Links)                 |

---

## User Story

-   **As a player I would like to play a game that includes enemy fleet of alien ships**
-   Given when I launch the game I should see an alien fleet with one mothership, and multiple attack and defense ships with full HP.
-   Given when I am playing the game I should be able to click a 'fire' button to shoot at a random alien ship.
-   Given when I click the 'fire' button I should see the HP of a random alien ship decrease.
-   Given when the HP of an an alien attack or defense ship reaches 0, it should disappear.
-   Given when the HP of the mothership reaches 0, the game should end with an option to restart.

## Functionality

Ships were constructed by declaring a Ship class which uses parameters of ship type, startingHP, decrement and shipNumber to determine the starting HP, HP loss per hit(decrement) among other properties.

The inner HTML of each ship class object is returned using the ship class objects's _generatedShipHTML_ getter. Each object of the ship class also has an _updateShip_ method which is responsible for changing the ship's health and _isDestroyed_ status depending on whether it has been hit by the cannon and/or it's HP has been completely exhausted depending on how many shot's it has sustained.

```js
/*
Ship class Method which reduces a ships' hP and detects if
ship is destroyed
*/
    updateShip() {
        this.currentHP -= this.decrement;
        if (this.currentHP <= 0) {
            this.isDestroyed = true;
        }
    }
```

The fleet class is responsible mainly for generating a fleet of different alien ships, and returning the HTML for the entire fleet by mapping to an array and returning the result of each object's _generatedShipHTML_ getter

Finally, the cannon function, when given a fleet class object as a parameter, will search the enemy fleet assigned ship array for the number of each ship that is not destroyed, select a random number and return the number of the ship to be targeted. This number is then used by the enemy fleet class object using it's _updateFleetStatus_ method which will alter the properties of a ship within its assigned ship array.

```js
/*
Fleet class method whic updates status of ships
depending on targeted ship number
*/
    updateFleetStatus(targetedShipNumber) {
        this.assignedShips.forEach((ship) => {
            if (ship.shipNumber === targetedShipNumber) {
                ship.updateShip();
            }
        });
    }
```

JEST unit tests were performed on the ship and fleet classes for updating of ship status, including their returned HTML values.

-There is more info in the index.js file!

## Technology

-   JavaScript
-   JEST
-   HTML
-   SASS
-   NPM
-   GIT & GitHub
-   Object Oriented Programming

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Future Developments

-   Guide at the start, informing user how to play
-   Sounds when shooting, and visual representation of cannon shot
-   Animation of alien ship when hit by cannon
-   Refactoring of code, for readability and reusability

## Contributions

This was a solo project :)

## Links

#### Github Repo

https://github.com/A11AN0/Hostile-Aliens

#### Deployed App

https://a11an0.github.io/Hostile-Aliens/

#### Thanks for reading!-Allan :)
