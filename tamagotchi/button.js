// let hit = false;

export default class Button {
  constructor(x, y, w, h, message) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.message = message;
  }
  hitBox() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h &&
      mouseIsPressed === true
    ) {
      return true;
      // hit = true;
      // console.log(hit);
    }
    return false;
  }
  standardButton() {
    push();
    strokeWeight(5);
    stroke(0);
    fill(255);
    rect(this.x, this.y, this.w, this.h, 10);
    pop();
  }
  attackButton() {
    push();
    strokeWeight(5);
    stroke(0);
    fill(255);
    rect(this.x, this.y, this.w, this.h, 10);
    pop();
  }
}
