import Zombie from '../class_zombie';
import Bowman from '../class_bowman';
import Swordsman from '../class_swordsman';
import Magician from '../class_magician';
import Undead from '../class_undead';
import Daemon from '../class_daemon';

test.each([
  21, 'moreThen10simbols', 'a',
])('cheking class Zombie wrong name', (name) => {
  expect(() => new Zombie(name)).toThrow('incorrect values');
  expect(() => new Bowman(name)).toThrow('incorrect values');
  expect(() => new Magician(name)).toThrow('incorrect values');
  expect(() => new Undead(name)).toThrow('incorrect values');
  expect(() => new Daemon(name)).toThrow('incorrect values');
});

test('cheking class Zombie right name', () => {
  const character = new Zombie('Zombie');
  const expected = {
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(character).toEqual(expected);
});

test('cheking class Bowman right name', () => {
  const character = new Bowman('Bowman');
  const expected = {
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toEqual(expected);
});

test('cheking class Swordsman right name', () => {
  const character = new Swordsman('Swordsman');
  const expected = {
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(character).toEqual(expected);
});

test('cheking class Magician right name', () => {
  const character = new Magician('Magician');
  const expected = {
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(character).toEqual(expected);
});

test('cheking class Undead right name', () => {
  const character = new Undead('Undead');
  const expected = {
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toEqual(expected);
});

test('cheking class Daemon right name', () => {
  const character = new Daemon('Daemon');
  const expected = {
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(character).toEqual(expected);
});
