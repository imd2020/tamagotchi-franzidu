export default class HealthBar {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  display() {
    push();
    stroke(0);
    strokeWeight(4);
    noFill();
    rect(this.x, this.y, 150, 20, 10);
    pop();
    push();
    fill(0);
    stroke(0);
    strokeWeight(1);
    textSize(15);
    text("HP", this.x - 30, this.y + 15);
    pop();
  }
  mechanic(health, maxHealth) {
    push();
    if (health < 50) {
      fill(255, 0, 0);
    } else if (health < 100) {
      fill(255, 200, 0);
    } else {
      fill(0, 255, 0);
    }
    noStroke();
    rect(this.x, this.y, map(health, 0, maxHealth, 0, 150), 20, 10);
    pop();
  }
}
