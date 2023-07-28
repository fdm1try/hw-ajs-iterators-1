import Zombie from '../zombie';

test('Test zombie character class', () => {
  const zombie = new Zombie('Ed');
  expect(zombie).toEqual({
    name: 'Ed',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Test zombie damage', () => {
  const zombie = new Zombie('Ed');
  zombie.damage(30);
  expect(zombie.health).toBe(73);
});
