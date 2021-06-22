import HealthBar from "./healthBar.js";

export default class Starter {
  constructor(x, y, w, h, health, starter, posHealthX, posHealthY) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.starter = starter;
    this.health = health;
    this.healthBar = new HealthBar(posHealthX,posHealthY);
    this.maxHealth = health;
  }
  display() {
    image(this.starter, this.x, this.y, this.w, this.h);
    this.healthBar.display();
    this.healthBar.mechanic(this.health, this.maxHealth);
  }
  damage(damage){
    this.health -= damage;
  }
}