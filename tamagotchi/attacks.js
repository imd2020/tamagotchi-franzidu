// import

/**
 *
 */

let damage;

class Attack {
  constructor(hit) {
    this.hit = hit;
  }
  tackle() {
    damage = random(20, 40);
  }
  heuler() {
    damage = 0;
  }
  aeroAss() {
    damage = random(10, 30);
  }
  glut() {
    damage = random(20, 40);
  }
  blubbstrahl() {
    damage = random(20, 65);
  }
  zauberblatt() {
    damage = random(20, 60);
  }
  donnerschock() {
    damage = random(20, 55);
  }
  gesang() {
    damage = 0;
  }
}

let attack = new Attack(true);
attack.tackle();

// export
