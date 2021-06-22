import Starter from "./starterPokemon.js";

export default class Enemy extends Starter {
  constructor(x, y, w, h, health, asset, possibleRandomAttacks,posHealthX, posHealthY) {
    super(x, y, w, h, health, asset, posHealthX, posHealthY);
    this.possibleRandomAttacks = possibleRandomAttacks;
  }
  getRandomAttack() {
    let attackIndex = Math.floor(random(this.possibleRandomAttacks));
    return this.possibleRandomAttacks[attackIndex];
  }
}

