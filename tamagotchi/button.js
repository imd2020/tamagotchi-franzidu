export default class Button {
  constructor(x, y, w, h, message) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.message = message;
    this.opacity = 1;
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
    fill(255, 255, 255, this.opacity);
    rect(this.x, this.y, this.w, this.h, 10);

    gsap.to(this, {
      duration: 1,
      opacity: 200,
      onComplete: () => {
        gsap.to(this, {
          duration: 1,
          opacity: 100,
        });
      },
    });
    pop();
  }
}
