import Zombie from '../class_zombie';
import Bowman from '../class_bowman';
import Swordsman from '../class_swordsman';
import Magician from '../class_magician';
import Undead from '../class_undead';
import Daemon from '../class_daemon';

test.each([
  21, 'moreThen10simbols', 'a',
])('cheking class Zombie wrong name', (name) => {
  expect(() => {
    const character = new Zombie(name);
  }).toThrow('incorrect values');
  expect(() => {
    const character = new Bowman(name);
  }).toThrow('incorrect values');
  expect(() => {
    const character = new Magician(name);
  }).toThrow('incorrect values');
  expect(() => {
    const character = new Undead(name);
  }).toThrow('incorrect values');
  expect(() => {
    const character = new Daemon(name);
  }).toThrow('incorrect values');
});

test('cheking class Zombie right name', () => {
  const character = new Zombie('Zombie');
  expect(character.name).toBe('Zombie');
  expect(character.type).toBe('Zombie');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(40);
  expect(character.defence).toBe(10);
});

test('cheking class Bowman right name', () => {
  const character = new Bowman('Bowman');
  expect(character.name).toBe('Bowman');
  expect(character.type).toBe('Bowman');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
});

test('cheking class Swordsman right name', () => {
  const character = new Swordsman('Swordsman');
  expect(character.name).toBe('Swordsman');
  expect(character.type).toBe('Swordsman');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(40);
  expect(character.defence).toBe(10);
});

test('cheking class Magician right name', () => {
  const character = new Magician('Magician');
  expect(character.name).toBe('Magician');
  expect(character.type).toBe('Magician');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(10);
  expect(character.defence).toBe(40);
});

test('cheking class Undead right name', () => {
  const character = new Undead('Undead');
  expect(character.name).toBe('Undead');
  expect(character.type).toBe('Undead');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
});

test('cheking class Undead right name', () => {
  const character = new Daemon('Daemon');
  expect(character.name).toBe('Daemon');
  expect(character.type).toBe('Daemon');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(10);
  expect(character.defence).toBe(40);
});
