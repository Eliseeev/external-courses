function reduce(array, callback, initialValue) {
  let i = 0;
  let previousValue = initialValue;
  if (arguments.length < 3) {
    i = 1;
    previousValue = array[0];
  }
  for (; i < array.length; i += 1) {
    const currentItem = array[i];

    previousValue = callback(previousValue, currentItem, i, array);
  }
  return previousValue;
}

module.exports = reduce;
