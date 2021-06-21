export default class Text {
  constructor(x, y, message) {
    this.x = x;
    this.y = y;
    this.message = message;
  }
  standardText() {
    push();
    stroke(0);
    strokeWeight(1);
    textSize(20);
    text(this.message, this.x, this.y);
    pop();
  }
  bigText() {
    push();
    stroke(0);
    strokeWeight(1);
    textSize(40);
    text(this.message, this.x, this.y);
    pop();
  }
}
