import Undead from '../undead';

test('Test undead character class', () => {
  const undead = new Undead('Bub');
  expect(undead).toEqual({
    name: 'Bub',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Test undead damage', () => {
  const undead = new Undead('Bub');
  undead.damage(30);
  expect(undead.health).toBe(77.5);
});
