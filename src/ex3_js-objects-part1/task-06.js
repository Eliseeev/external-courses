/* eslint-disable no-restricted-syntax */
function deepCopy(src) {
  const result = Array.isArray(src) ? [] : {};
  // eslint-disable-next-line guard-for-in
  for (const prop in src) {
    const value = src[prop];
    if (value && typeof value === 'object') {
      result[prop] = deepCopy(value);
    } else {
      result[prop] = value;
    }
  }
  return result;
}
module.exports = deepCopy;
