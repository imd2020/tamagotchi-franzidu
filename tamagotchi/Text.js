let myFont = loadFont("assets/Lo-Res/Lo-Res 12 Regular.ttf");
export default class Text {
  constructor(x, y, message, size) {
    this.x = x;
    this.y = y;
    this.message = message;
    this.size = size;
  }
  display() {
    push();
    stroke(0);
    strokeWeight(1);
    textFont(myFont);
    textSize(this.size);
    text(this.message, this.x, this.y);
    pop();
  }
}
