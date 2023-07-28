import canIterate from '../app';

const dataSet = [
  ['array', true, []],
  ['set', true, new Set()],
  ['map', true, new Map()],
  ['string', true, 'Netology'],
  ['null', false, null],
  ['number', false, 1],
  ['object', false, {}],
];

const handler = test.each(dataSet);

handler('Iterativity test of the "%s" should be %p', (_, expected, object) => {
  const result = canIterate(object);
  expect(result).toBe(expected);
});

test('Iterator of the object must have the next() function', () => {
  const object = {
    [Symbol.iterator]: () => ({}),
  };
  const result = canIterate(object);
  expect(result).toBe(false);
});

test('Function next() of the iterator should return a value if not done', () => {
  const object = {
    [Symbol.iterator]: () => ({
      next: () => ({ done: false }),
    }),
  };
  const result = canIterate(object);
  expect(result).toBe(false);
});

test('The iterator should return not only the value, the done property of each iteration should be specified.', () => {
  const object = {
    [Symbol.iterator]: () => ({
      next: () => ({ value: 1 }),
    }),
  };
  const result = canIterate(object);
  expect(result).toBe(false);
});

test('If the iterations have ended, the done property should be set to true', () => {
  const object = {
    [Symbol.iterator]: () => ({
      next: () => ({ done: true }),
    }),
  };
  const result = canIterate(object);
  expect(result).toBe(true);
});
