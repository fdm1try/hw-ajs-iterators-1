import Swordsman from '../swordsman';

test('Test swordsman character class', () => {
  const swordsman = new Swordsman('Luke');
  expect(swordsman).toEqual({
    name: 'Luke',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Test swordsman damage', () => {
  const swordsman = new Swordsman('Luke');
  swordsman.damage(30);
  expect(swordsman.health).toBe(73);
});
