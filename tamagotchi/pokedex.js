let pokedexIMG = loadImage("assets/pokedexIMG.png");

export function innerScreen() {
  push();
  fill(255);
  noStroke();
  rect(265, 112, 470, 360);
  pop();
}
//measures innerScreen: 470x360

export function outtaScreen() {
  image(pokedexIMG, 0, -200, 1000, 1000);
}
