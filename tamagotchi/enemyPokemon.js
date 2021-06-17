export default class Enemy {
  constructor(x, y, w, h, enemy) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.enemy = enemy;
    this.health = 0;
    this.counter = 0;
  }

  // first boss, lowest health
  // GER: Pummeluff
  jigglypuff() {
    image(this.enemy[0], this.x, this.y, this.w, this.h);
    this.health = 100;
    // this.enemy.position(this.x, this.y);
  }
  // third boss, medium health
  evoli() {
    image(this.enemy[1], this.x, this.y, this.w, this.h);
    this.health = 200;
  }
  // endboss, highest health
  pikachu() {
    image(this.enemy[2], this.x, this.y, this.w, this.h);
    this.health = 300;
  }
}
