const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Invalid name length.');
    }
    if (!types.includes(type)) {
      throw new Error('Invalid type');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Can not level up a dead character.');
    }
    this.level += 1;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    this.health = this.health >= 0 ? this.health : 0;
  }
}
