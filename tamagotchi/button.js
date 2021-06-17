let hit;

export default class Button {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  hitBox() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      //return true
      hit = true;
      console.log(hit);
    } //return false
  }
  displayButton() {
    push();
    strokeWeight(5);
    stroke(0);
    fill(255);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
  // buttonAttack() {
  //   text("attack", this.x + 50, this.y + 50);
  //   //import attack.tackle
  //   //enemy gets damage of tackle
  // }
}
