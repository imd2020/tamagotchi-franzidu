export default class Starter {
  constructor(x, y, w, h, starter) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.starter = starter;
    this.health = 0;
  }
  // GER: Glumanda
  charmander() {
    image(this.starter[0], this.x, this.y, this.w, this.h);
    this.health = 200;
  }
  // GER: Schiggy
  squirtle() {
    image(this.starter[1], this.x, this.y, this.w, this.h);
    this.health = 200;
  }
  // GER: Bisasam
  bulbasaur() {
    image(this.starter[2], this.x, this.y, this.w, this.h);
    this.health = 200;
  }
}