"use strict";

import { image } from "./main-character-assets.js";

const mainCharacter = document.getElementById("own-pixel-art-directions");

let currentDirection = {
  leftCounter: 1,
  rightCounter: 1,
  upCounter: 1,
  downCounter: 0,
};
let currentDirection2 = {};

const interval = 200;
let throttle = null;

document.addEventListener("keyup", () => {
  if (throttle) {
    clearTimeout(throttle);
    throttle = null;
  }
});

//el event listener podria estar aplicado solo a ciertas teclas, en vez de estar aplicado a cualquier tecla y despues se comprueba la tecla
document.addEventListener("keydown", (event) => {
  currentDirection2 = movement(event, currentDirection);
  if (currentDirection2) {
    currentDirection = currentDirection2;
  }
});

function changeImage(keyCode, counter) {
  if (counter % 2 !== 0) {
    mainCharacter.src = image(keyCode, 1);
  } else if (counter % 2 === 0 && (counter / 2) % 2 !== 0) {
    mainCharacter.src = image(keyCode, 2);
  } else if (counter % 2 === 0 && (counter / 2) % 2 === 0) {
    mainCharacter.src = image(keyCode, 4);
  }
}

function movement(event, currentDirection) {
  const { keyCode } = event;
  let { leftCounter, rightCounter, upCounter, downCounter } = currentDirection;

  if (!throttle) {
    if (keyCode === 37) {
      changeImage(keyCode, leftCounter);
      leftCounter++;
      rightCounter = 1;
      upCounter = 1;
      downCounter = 1;
    } else if (keyCode === 38) {
      changeImage(keyCode, upCounter);
      upCounter++;
      leftCounter = 1;
      rightCounter = 1;
      downCounter = 1;
    } else if (keyCode === 39) {
      changeImage(keyCode, rightCounter);
      rightCounter++;
      leftCounter = 1;
      upCounter = 1;
      downCounter = 1;
    } else if (keyCode == 40) {
      changeImage(keyCode, downCounter);
      downCounter++;
      leftCounter = 1;
      rightCounter = 1;
      upCounter = 1;
    }
    delayAction();

    return {
      leftCounter,
      rightCounter,
      upCounter,
      downCounter,
    };
  }
}

function delayAction() {
  throttle = setTimeout(() => {
    throttle = null;
  }, interval);
}
