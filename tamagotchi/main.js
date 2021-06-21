window.draw = draw;
window.preload = preload;
window.mouseClicked = mouseClicked;

// IMPORTS
// pokedex
import { innerScreen } from "./pokedex.js";
import { outtaScreen } from "./pokedex.js";

// states
import Screen from "./states.js";

// variables
let win = false;
let loose = false;
let state = "start";

// let ownPokemon;
// let starter = [];
let enemy = [];

// preload
function preload() {
  //pokemon (enemy & starter)
  let charmander = loadImage("starters/starter0.gif");
  // for (let s = 0; s < 3; s++) {
  //   starter[s] = loadImage("starters/starter" + s + ".gif");
  // }
  for (let e = 0; e < 3; e++) {
    enemy[e] = loadImage("enemys/enemy" + e + ".gif");
  }
  // enemy = loadImage("enemys/enemy0.gif");

  //eggs hatchingScreen
  for (let eggImages = 0; eggImages < 4; eggImages++) {
    eggs[eggImages] = loadImage("egg" + eggImages + ".png");
  }
}

let screen = new Screen();

// draw
function draw() {
  innerScreen();

  //States
  if (state === "start") {
    screen.start();
    win = false;
    loose = false;
  } else if (state === "guide") {
    screen.guide();
  } else if (state === "hatching") {
    screen.hatching();
  } else if (state === "battle") {
    screen.battle();
  } else if (state === "winner") {
    screen.winner();
    win = true;
    loose = false;
  } else if (state === "looser") {
    screen.loosing();
    win = false;
    loose = true;
  }

  outtaScreen();
}

function mouseClicked() {
  if (
    mouseX < bla &&
    mouseX > bla + w &&
    mouseY < blub &&
    mouseY > blub + h &&
    state === "hatching"
  ) {
    hatchingcounter++;
  }
  if (hatchingcounter === 5) {
    starterPokemon(random(0, 2));
    image(starterPokemon[bliblablub]);
  }
  // HIER EIER REIHENFOLGE EINFÜGEN
}
