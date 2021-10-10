function lowReg(string) {
  let result = '';
  const array = string.toLowerCase().split(' ');
  const capitalLizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  for (let i = 0; i < array.length; i += 1) {
    const elem = array[i];
    if (i === 0) {
      result += elem;
    } else {
      result += capitalLizeFirstLetter(elem);
    }
  }
  return result;
}
module.exports = lowReg;
