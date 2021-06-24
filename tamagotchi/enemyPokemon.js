import Starter from "./starterPokemon.js";

export default class Enemy extends Starter {
  constructor(
    x,
    y,
    w,
    h,
    health,
    asset,
    possibleRandomAttacks,
    posHealthX,
    posHealthY
  ) {
    super(x, y, w, h, health, asset, posHealthX, posHealthY);
    this.possibleRandomAttacks = possibleRandomAttacks;
  }
  getRandomAttack() {
    return random(this.possibleRandomAttacks);
  }
}
