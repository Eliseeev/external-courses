function filter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    if (callback(element, i, array)) {
      result.push(element);
    }
  }
  return result;
}
module.exports = filter;
