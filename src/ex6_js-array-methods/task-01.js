function cutAreaArray(array, begin = 0, end = 0) {
  const start = (begin >= 0) ? begin : array.length + begin;

  let endTo = end || array.length;

  if (end < 0) {
    endTo = array.length + end;
  }

  const size = endTo - start;

  if (size > 0) {
    const clone = new Array(size);

    for (let index = 0; index < size; index += 1) {
      clone[index] = array[start + index];
    }
    return clone.filter((item) => item !== undefined);
  }
  return [];
}

module.exports = cutAreaArray;
