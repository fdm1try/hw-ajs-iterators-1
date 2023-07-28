export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('This character is already in the team.');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }

  toArray() {
    return [...this.members];
  }

  [Symbol.iterator]() {
    return this.members[Symbol.iterator]();
  }
}
