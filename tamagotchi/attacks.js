// import

/**
 *@param hit hitting true/false the opposing pokemon
 */

//damage they are causing the attacking pokemon
let damage;

function setup() {
  frameRate(10);
}

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

// if attack true, the attack causes the opposing pokemon damage
let attack = new Attack(true);
// the attack to perform
attack.tackle();

// export
