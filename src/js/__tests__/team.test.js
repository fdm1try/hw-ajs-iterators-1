import Team from '../team';
import Bowman from '../characters/bowman';
import Swordsman from '../characters/swordsman';
import Magician from '../characters/magician';
import Undead from '../characters/undead';
import Zombie from '../characters/zombie';
import Daemon from '../characters/daemon';

test('Adding two identical characters to the team using the add() method leads to an error.', () => {
  const team = new Team();
  const bowman = new Bowman('John');
  const addTwice = () => {
    team.add(bowman);
    team.add(bowman);
  };
  expect(addTwice).toThrow();
});

test('Adding two identical characters to the team using the addAll() method does not lead to an error and there will be only one character in the team.', () => {
  const team = new Team();
  const bowman = new Bowman('John');
  team.addAll(bowman, bowman);
  expect(team.toArray()).toEqual([bowman]);
});

test('Adding several characters to the team using the add() and addAll() methods should not lead to an error, the toArray() method returns the masive characters in the sequence in which they were added to the team.', () => {
  const team = new Team();
  const bowman = new Bowman('Bowman');
  const archer = new Bowman('Archer');
  const swordsman = new Swordsman('Swordsman');
  const magician = new Magician('Magician');
  const undead = new Undead('Undead');
  const zombie = new Zombie('Zombie');
  const daemon = new Daemon('Daemon');
  team.add(bowman);
  team.add(swordsman);
  team.add(magician);
  team.addAll(bowman, archer, swordsman, magician, undead, zombie, daemon);
  expect(team.toArray()).toEqual([bowman, swordsman, magician, archer, undead, zombie, daemon]);
});

test('Iterator yields the characters in the order they are added', () => {
  const team = new Team();
  const bowman = new Bowman('Bowman');
  const archer = new Bowman('Archer');
  const swordsman = new Swordsman('Swordsman');
  const magician = new Magician('Magician');
  const undead = new Undead('Undead');
  const zombie = new Zombie('Zombie');
  const daemon = new Daemon('Daemon');
  team.add(bowman);
  team.add(swordsman);
  team.add(magician);
  team.addAll(bowman, archer, swordsman, magician, undead, zombie, daemon);
  expect([...team]).toEqual([bowman, swordsman, magician, archer, undead, zombie, daemon]);
});
