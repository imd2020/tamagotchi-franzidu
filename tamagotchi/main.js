// imports
import Button from "./button.js";
import Screen from "./states.js";
import Pokemon from "pokemon.js";
import { innerScreen, outtaScreen } from "./pokedex.js";
import { preload } from "./pokemon.js";

// variables
let state = "start";
let pokedexIMG = loadImage("pokedexIMG.png");
let health;
let hit;

// objects
let starter = new Pokemon(400, 350, 100, 100);
let oneButton = new Button(100, 200, 200, 100);
let twoButton = new Button(350, 200, 200, 100);

//code
function setup() {
  frameRate(10);
}

function draw() {
  //Pokemon
  starter.charmander();
  //Pokedex
  innerScreen();
  outtaScreen();
  //Buttons
  oneButton.displayButton();
  twoButton.displayButton();
  // Screens
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
  // start
}

function mouseClicked() {
  oneButton.hitBox();
  twoButton.hitBox();
}
