export default function canIterate(object) {
  if (!object || !object[Symbol.iterator]) {
    return false;
  }
  const iterator = object[Symbol.iterator]();
  if (!('next' in iterator) || typeof iterator.next !== 'function') {
    return false;
  }
  const item = iterator.next();
  if (item.done === true) {
    return true;
  }
  if (!('value' in item) || !('done' in item)) {
    return false;
  }
  return true;
}
