// preload function for preloading the arrays of the gifs for the pokemon (starter and enemy);
// here I codet a for loop for automatically loading the gifs(images) with their own variable (s and e);
function preload() {
  for (let s = 0; s < 3; s++) {
    starter[s] = loadImage("starters/starter" + s + ".gif");
  }
  for (let e = 0; e < 3; e++) {
    enemy[e] = loadImage("enemys/enemy" + e + ".gif");
  }
}

let health;
// class pokemon with all pokemon i need (starter and enemy);
// here I give those pokemon a start-health and an image(gif);
class Pokemon {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  //starter
  //GER: Glumanda
  charmander() {
    image(starter[0], this.x, this.y, this.w, this.h);
    // image(gif, this.x, this.y, this.w, this.h);
    health = 200;
  }
  //starter
  //GER: Schiggy
  squirtle() {
    image(starter[1], this.x, this.y, this.w, this.h);
    health = 200;
  }
  //starter
  //GER: Bisasam
  bulbasaur() {
    image(starter[2], this.x, this.y, this.w, this.h);
    health = 200;
  }
  //first boss, lowest health
  //GER: Pummeluff
  jigglypuff() {
    image(enemy[0], this.x, this.y, this.w, this.h);
    health = 100;
  }
  //third boss, medium health
  evoli() {
    image(enemy[1], this.x, this.y, this.w, this.h);
    health = 200;
  }
  //endboss, highest health
  pikachu() {
    image(enemy[2], this.x, this.y, this.w, this.h);
    health = 300;
  }
}

// loaded pokemon from the class above
let starter = new Pokemon(400, 350, 100, 100);
let enemy = new Pokemon(400, 250, 100, 100);

// function draw to get the visible pokemon and pokedex on the canvas

function draw() {
  background(255);
  starter.charmander();
  enemy.evoli();
}
