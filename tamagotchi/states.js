//Imports
import Button from "./button.js";
import Text from "./Text.js";
import Starter from "./starterPokemon.js";
import Enemy from "./enemyPokemon.js";
import Attack from "./attacks.js";

//Arrays
let charmanderGraphic = loadImage("assets/starters/starter0.gif");
let pikachuGraphic = loadImage("assets/enemys/enemy2.gif");

//Variables
let win = false;
let loose = false;
//load images
let battleField = loadImage("assets/battleField.png");
let backgroundStandard = loadImage("assets/backgroundStandard.png");

//main buttons
let startButton = new Button(375, 240, 250, 100);
let startText = new Text(425, 300, "Lets go!", 40);
let guideButton = new Button(300, 140, 400, 300);
let guideText = new Text(
  350,
  180,
  "Welcome to pokemon tamagochi! \nYour suggested pokemon is \ncharmander! \nYou have a health of 200 HP,\nso does your opponent. \nUse your attacks to fight him! \nBut remember : \nNot every attack \ndoes the same damage!",
  20
);
let nextButton = new Button(610, 370, 70, 50);
let nextText = new Text(625, 400, "Next", 20);
let playAgainButton = new Button(375, 340, 250, 100);
let playAgainText = new Text(425, 400, "Try again", 40);

//attacks
let tackle = new Attack("tackle", 20, 40); //tackle
let growl = new Attack("growl", 0, 0); //heuler
let bite = new Attack("bite", 10, 30); //biss
let ember = new Attack("ember", 20, 40); //glut
// let bubbleBeam = new Attack("bubble beam", 20, 65); //blubbstrahl
// let megicalLeaf = new Attack("magical leaf", 20, 60); //Zauberblatt
let thunderShock = new Attack("thunder shock", 20, 55); //donnerschock
// let sing = new Attack("sing", 0, 0); //gesang

//Pokemon
let ownPokemon = new Starter(
  320,
  210,
  100,
  100,
  200,
  charmanderGraphic,
  490,
  280
);
let opponent = new Enemy(
  580,
  130,
  100,
  100,
  200,
  pikachuGraphic,
  [thunderShock, bite, tackle, growl],
  390,
  170
);

let currentAttackOpponent = opponent.getRandomAttack();

//attackbuttons
let attackButton1 = new Button(290, 340, 200, 50); //left up
let attackText1 = new Text(340, 380, "Tackle", 30);

let attackButton2 = new Button(510, 340, 200, 50); //right up
let attackText2 = new Text(560, 380, "Ember", 30);

let attackButton3 = new Button(290, 400, 200, 50); //left down
let attackText3 = new Text(340, 440, "Bite", 30);

let attackButton4 = new Button(510, 400, 200, 50); //right down
let attackText4 = new Text(560, 440, "Growl", 30);

//text
let winner = new Text(420, 300, "WINNER", 40);
let looser = new Text(420, 300, "LOOSER", 40);

export default class Screen {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.state = "start";
  }
  start() {
    image(backgroundStandard, 265, 112, 470, 360);
    startButton.standardButton();

    startText.display();
    if (startButton.hitBox()) {
      this.state = "guide";
    }
  }
  guide() {
    image(backgroundStandard, 265, 112, 470, 360);
    //guide
    guideButton.standardButton();
    guideText.display();
    //next button
    nextButton.standardButton();
    nextText.display();
    if (nextButton.hitBox()) {
      this.state = "battle";
    }
  }
  battle() {
    image(battleField, 265, 112, 470, 360);
    ownPokemon.display();
    opponent.display();

    //buttons/attacks
    attackButton1.standardButton();
    attackText1.display();
    if (attackButton1.hitBox()) {
      opponent.damage(tackle.perform());
      ownPokemon.damage(currentAttackOpponent.perform());
      console.log("opponent" + opponent.health);
      console.log("own" + ownPokemon.health);
    }
    attackButton2.standardButton();
    attackText2.display();
    if (attackButton2.hitBox()) {
      opponent.damage(ember.perform());
      ownPokemon.damage(currentAttackOpponent.perform());
      console.log(opponent.health);
    }
    attackButton3.standardButton();
    attackText3.display();
    if (attackButton3.hitBox()) {
      opponent.damage(bite.perform());
      ownPokemon.damage(currentAttackOpponent.perform());
      console.log(opponent.health);
    }
    attackButton4.standardButton();
    attackText4.display();
    if (attackButton4.hitBox()) {
      opponent.damage(growl.perform());
      ownPokemon.damage(currentAttackOpponent.perform());
      console.log(opponent.health);
    }
    //state change
    if (opponent.health <= 0) {
      this.state = "winner";
    }
    if (ownPokemon.health <= 0) {
      this.state = "looser";
    }
  }
  winner() {
    image(backgroundStandard, 265, 112, 470, 360);
    winner.display();
    playAgainButton.standardButton();
    playAgainText.display();
    if (playAgainButton.hitBox()) {
      this.state = "start";
      opponent.health = 200;
      ownPokemon.health = 200;
    }
  }
  loosing() {
    image(backgroundStandard, 265, 112, 470, 360);
    looser.display();
    playAgainButton.standardButton();
    playAgainText.display();
    if (playAgainButton.hitBox()) {
      this.state = "start";
      opponent.health = 200;
      ownPokemon.health = 200;
    }
  }
  draw() {
    //States
    if (this.state === "start") {
      this.start();
      win = false;
      loose = false;
    } else if (this.state === "guide") {
      this.guide();
    } else if (this.state === "hatching") {
      this.hatching();
    } else if (this.state === "battle") {
      this.battle();
    } else if (this.state === "winner") {
      this.winner();
      win = true;
      loose = false;
    } else if (this.state === "looser") {
      this.loosing();
      win = false;
      loose = true;
    }
  }
}
