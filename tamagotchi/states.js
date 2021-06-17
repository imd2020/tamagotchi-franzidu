let state = "start";

class Screen {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  start() {}
  guide() {}
  hatching() {}
  battle() {}
  winner() {}
  loosing() {}
}

function draw() {
  // Screens
  if (state === "start") {
    screen.start();
    win = false;
    loose = false;
  } else if (state === "guide") {
    screen.guide();
  } else if (state === "hatching") {
    screen.hatching();
  } else if (state === "battle") {
    screen.battle();
  } else if (state === "winner") {
    screen.winner();
    win = true;
    loose = false;
  } else if (state === "looser") {
    screen.loosing();
    win = false;
    loose = true;
  }
  // start
}
