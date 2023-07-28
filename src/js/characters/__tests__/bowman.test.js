import Bowman from '../bowman';

test('Test bowman character class', () => {
  const bowman = new Bowman('Jake');
  expect(bowman).toEqual({
    name: 'Jake',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Test bowman damage', () => {
  const bowman = new Bowman('Jake');
  bowman.damage(30);
  expect(bowman.health).toBe(77.5);
});
