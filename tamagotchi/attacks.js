export default class Attack {
  constructor(name, minDamage, maxDamage) {
    this.name = name;
    this.minDamage = minDamage;
    this.maxDamage = maxDamage;
  }
  perform() {
    let damage = Math.floor(random(this.minDamage, this.maxDamage));
    console.log(
      `${this.name} is being performed and resulted in ${damage} damage`
    );
    return damage;
  }
}
