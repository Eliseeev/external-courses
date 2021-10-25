function sorting(something) {
  if (typeof something === 'string') {
    return 'string';
  }
  if (typeof something === 'number' && !isNaN(something)) {
    return 'number';
  }
  if (isNaN(something)) {
    return undefined;
  }

  return undefined;
}
module.exports = sorting;
