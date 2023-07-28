import Daemon from '../daemon';

test('Test daemon character class', () => {
  const daemon = new Daemon('Abigor');
  expect(daemon).toEqual({
    name: 'Abigor',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Test magician damage', () => {
  const daemon = new Daemon('Abigor');
  daemon.damage(30);
  expect(daemon.health).toBe(82);
});
