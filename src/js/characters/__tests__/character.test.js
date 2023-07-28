import Character from '../base';

test('Test for error occurrence if the name length is less than 2 characters.', () => {
  function createCharacter() {
    let character = new Character('a', 'Bowman');
    if (character) {
      character = null;
    }
  }
  expect(createCharacter).toThrow();
});

test('Test for error occurrence if the name length is more than 10 characters.', () => {
  function createCharacter() {
    let character = new Character('abcdefghijk', 'Bowman');
    if (character) {
      character = null;
    }
  }
  expect(createCharacter).toThrow();
});

test('A test for the occurrence of an error if the wrong type of game character is specified.', () => {
  function createCharacter() {
    let character = new Character('John', 'Betman');
    if (character) {
      character = null;
    }
  }
  expect(createCharacter).toThrow();
});

test('Test character damage function', () => {
  const bowman = new Character('Jake', 'Bowman');
  bowman.damage(150);
  expect(bowman.health).toBe(0);
});

test('Test character level up', () => {
  const bowman = new Character('Jake', 'Bowman');
  bowman.attack = 25;
  bowman.defence = 25;
  bowman.damage(50);
  bowman.levelUp();
  expect([bowman.health, bowman.level]).toEqual([100, 2]);
});

test('A test for the occurrence of an error if you try to raise the level of a dead character.', () => {
  function levelUp() {
    const character = new Character('Jake', 'Bowman');
    character.health = 0;
    character.levelUp();
  }
  expect(levelUp).toThrow();
});
