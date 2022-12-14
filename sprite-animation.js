"use strict";

const mainCharacter = document.getElementById("own-pixel-art-directions");

let leftCounter = 1;
let rightCounter = 1;
let upCounter = 1;
let downCounter = 0;
const interval = 200;
let throttle;

document.addEventListener("keyup", () => {
  if (throttle) {
    clearTimeout(throttle);
    throttle = null;
  }
});

document.addEventListener("keydown", (event) => {
  movement(event);
});

function movement(event) {
  if (!throttle) {
    if (event.key == "ArrowLeft") {
      console.log("0");
      if (leftCounter % 2 !== 0) {
        console.log("1");
        mainCharacter.src = "./assets/main-character-31.png";
      } else if (leftCounter % 2 === 0 && (leftCounter / 2) % 2 !== 0) {
        mainCharacter.src = "./assets/main-character-32.png";
        console.log("2");
      } else if (leftCounter % 2 === 0 && (leftCounter / 2) % 2 === 0) {
        mainCharacter.src = "./assets/main-character-34.png";
        console.log("3");
      }
      leftCounter++;
      rightCounter = 1;
      upCounter = 1;
      downCounter = 1;
    } else if (event.key == "ArrowRight") {
      console.log("0");
      if (rightCounter % 2 !== 0) {
        console.log("1");
        mainCharacter.src = "./assets/main-character-41.png";
      } else if (rightCounter % 2 === 0 && (rightCounter / 2) % 2 !== 0) {
        mainCharacter.src = "./assets/main-character-42.png";
        console.log("2");
      } else if (rightCounter % 2 === 0 && (rightCounter / 2) % 2 === 0) {
        mainCharacter.src = "./assets/main-character-44.png";
        console.log("3");
      }
      rightCounter++;
      leftCounter = 1;
      upCounter = 1;
      downCounter = 1;
    } else if (event.key == "ArrowUp") {
      console.log("0");
      if (upCounter % 2 !== 0) {
        console.log("1");
        mainCharacter.src = "./assets/main-character-21.png";
      } else if (upCounter % 2 === 0 && (upCounter / 2) % 2 !== 0) {
        mainCharacter.src = "./assets/main-character-22.png";
        console.log("2");
      } else if (upCounter % 2 === 0 && (upCounter / 2) % 2 === 0) {
        mainCharacter.src = "./assets/main-character-24.png";
        console.log("3");
      }
      upCounter++;
      leftCounter = 1;
      rightCounter = 1;
      downCounter = 1;
    } else if (event.key == "ArrowDown") {
      console.log("0");
      if (downCounter % 2 !== 0) {
        console.log("1");
        mainCharacter.src = "./assets/main-character-11.png";
      } else if (downCounter % 2 === 0 && (downCounter / 2) % 2 !== 0) {
        mainCharacter.src = "./assets/main-character-12.png";
        console.log("2");
      } else if (downCounter % 2 === 0 && (downCounter / 2) % 2 === 0) {
        mainCharacter.src = "./assets/main-character-14.png";
        console.log("3");
      }
      downCounter++;
      leftCounter = 1;
      rightCounter = 1;
      upCounter = 1;
    }
    throttle = setTimeout(() => {
      throttle = null;

      /* Your throttle interval - reduce/increase this number to suit you needs */
    }, interval);
  }
}
