export default class Character {
  constructor(name) {
    this.name = name;
    this.type = undefined;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
    if (!(typeof name === 'string') || name.length < 2 || name.length > 10) {
      throw new Error('incorrect values');
    }
  }
}
