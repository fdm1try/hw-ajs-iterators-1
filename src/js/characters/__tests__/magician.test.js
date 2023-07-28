import Magician from '../magician';

test('Test magician character class', () => {
  const magician = new Magician('Gandalf');
  expect(magician).toEqual({
    name: 'Gandalf',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Test magician damage', () => {
  const magician = new Magician('Gandalf');
  magician.damage(30);
  expect(magician.health).toBe(82);
});
