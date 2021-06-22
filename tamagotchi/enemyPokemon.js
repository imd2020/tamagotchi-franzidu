import Starter from "./starterPokemon.js";

export default class Enemy extends Starter {
  constructor(x, y, w, h, health, asset, possibleRandomAttacks) {
    super(x, y, w, h, health, asset, possibleRandomAttacks);
    this.possobleRandomAttacks = possibleRandomAttacks;
  }
  get randomAttack() {
    let attackIndex = Math.floor(random(this.possibleRandomAttacks));
    return this.possibleRandomAttacks[attackIndex];
  }
}
//  // first boss, lowest health
//   // GER: Pummeluff
//   jigglypuff() {
//     image(this.enemy[0], this.x, this.y, this.w, this.h);
//     this.health = 100;
//     // this.enemy.position(this.x, this.y);
//   }
//   // third boss, medium health
//   evoli() {
//     image(this.enemy[1], this.x, this.y, this.w, this.h);
//     this.health = 200;
//   }
//   // endboss, highest health
//   pikachu() {
//     image(this.enemy[2], this.x, this.y, this.w, this.h);
//     this.health = 300;
//   }
