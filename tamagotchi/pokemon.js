// import

/**
 * @param {Array} pokemonPNG Array of all Pokemon Images (charmander, squirtle, bulbasaur, jigglypuff, evoli,  pikachu);
 * Here are all images of pokemon listed in an array and a class;
 * Boss-rank: Pummeluff (100 HP), Evoli (200 HP), Pikachu (300 HP);
 */

let pokemonPNG = [];
let health;
let pokemonGif = [];

function preload() {
  for (let p = 0; p < 6; p++) {
    pokemonPNG[p] = loadImage("pokemonImages/pokemon" + p + ".png");
  }
  for (let g = 0; g < 3; g++) {
    pokemonGif[g] = loadImage("pokemonGifs/" + g + "gif");
  }
}

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
    image(pokemonPNG[0], this.x, this.y, this.w, this.h);
    // image(gif, this.x, this.y, this.w, this.h);
    health = 200;
  }
  //starter
  //GER: Schiggy
  squirtle() {
    image(pokemonPNG[1], this.x, this.y, this.w, this.h);
    health = 200;
  }
  //starter
  //GER: Bisasam
  bulbasaur() {
    image(pokemonPNG[2], this.x, this.y, this.w, this.h);
    health = 200;
  }
  //first boss, lowest health
  //GER: Pummeluff
  jigglypuff() {
    image(pokemonPNG[3], this.x, this.y, this.w, this.h);
    health = 100;
  }
  //third boss, medium health
  evoli() {
    image(pokemonPNG[4], this.x, this.y, this.w, this.h);
    health = 200;
  }

  //endboss, highest health
  pikachu() {
    image(pokemonPNG[5], this.x, this.y, this.w, this.h);
    health = 300;
  }
}

let starter = new Pokemon(100, 100, 100, 100);
let enemy = new Pokemon(200, 200, 100, 120);

function draw() {
  starter.charmander();
  enemy.evoli();
}

// export
