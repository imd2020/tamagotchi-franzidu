window.draw = draw;
window.preload = preload;
window.mouseClicked = mouseClicked;

//imports
//Button
import Button from "./button.js";
//Pokedex
import { innerScreen } from "./pokedex.js";
import { outtaScreen } from "./pokedex.js";
//Pokemon
import Starter from "./starterPokemon.js";
import Enemy from "./enemyPokemon.js";

//variables
let starter = [];
let enemy = [];

// preload
function preload() {
  for (let s = 0; s < 3; s++) {
    starter[s] = loadImage("starters/starter" + s + ".gif");
  }
  for (let e = 0; e < 3; e++) {
    enemy[e] = loadImage("enemys/enemy" + e + ".gif");
  }
  enemy = loadImage("enemys/enemy0.gif");
}

//setup function in index.html

// objects
//Pokemon
let ownPokemon = new Starter(300, 200, 150, 150, starter);
let enemyPokemon = new Enemy(550, 100, 150, 150, enemy);
//attackButtons
let attackButton1 = new Button(290, 340, 200, 50); //left up
let attackButton2 = new Button(510, 340, 200, 50); //right up
let attackButton3 = new Button(290, 400, 200, 50); //left down
let attackButton4 = new Button(510, 400, 200, 50); //right down

// draw
function draw() {
  innerScreen();
  outtaScreen();
  
  ownPokemon.charmander();
  enemyPokemon.jigglypuff();

  attackButton1.displayButton();
  attackButton2.displayButton();
  attackButton3.displayButton();
  attackButton4.displayButton();
}

function mouseClicked() {
  attackButton1.hitBox();
  attackButton2.hitBox();
  attackButton3.hitBox();
  attackButton4.hitBox();
}
