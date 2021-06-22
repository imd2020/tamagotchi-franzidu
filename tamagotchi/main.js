window.draw = draw;
// window.mouseClicked = mouseClicked;


// IMPORTS
// pokedex
import { outtaScreen } from "./pokedex.js";
// states
import Screen from "./states.js";

let screen = new Screen();


// draw
function draw() {
  screen.draw();
  outtaScreen();
}
