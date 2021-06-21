//Imports

import Button from "./button.js";
import Text from "./Text.js";

//Variables
// let starter = [];
// let enemy = [];

//load images
let battleField = loadImage("battleField.png");
let backgroundStandard = loadImage("backgroundStandard.png");
let egg = loadImage("eggs/egg1.png");

//main buttons
let startButton = new Button(375, 240, 250, 100);
let startText = new Text(425, 300, "Lets go!");
let guideButton = new Button(300, 140, 400, 300);
let guideText = new Text(
  350,
  180,
  "Welcome to pokemon tamagochi! \n hier könnte ihre werbung stehen"
);
let smallButton = new Button(610, 370, 70, 50);
let smallText = new Text(625, 400, "Next");

//attackbuttons
let attackButton1 = new Button(290, 340, 200, 50); //left up
let attackButton2 = new Button(510, 340, 200, 50); //right up
let attackButton3 = new Button(290, 400, 200, 50); //left down
let attackButton4 = new Button(510, 400, 200, 50); //right down
//PokemonAttackButtons
// let starterPokemon = new Starter(300, 200, 150, 150, starter);
// let enemyPokemon = new Enemy(550, 100, 150, 150, enemy);

export default class Screen {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  start() {
    image(backgroundStandard, 265, 112, 470, 360);
    startButton.standardButton();
    startText.bigText();
    // startButton.hitBox();
  }
  guide() {
    image(backgroundStandard, 265, 112, 470, 360);
    guideButton.standardButton();
    guideText.standardText();
    smallButton.standardButton();
    smallText.standardText();
    //smallButton.hitBox();
  }
  hatching() {
    image(backgroundStandard, 265, 112, 470, 360);
    image(egg, 375, 175, 250, 250);
  }
  battle() {
    image(battleField, 265, 112, 470, 360);
    attackButton1.attackButton();
    attackButton2.attackButton();
    attackButton3.attackButton();
    attackButton4.attackButton();
    //HIER ATTACKEN EINFÜGEN
  }
  winner() {
    image(backgroundStandard, 265, 112, 470, 360);
  }
  loosing() {
    image(backgroundStandard, 265, 112, 470, 360);
  }
}
