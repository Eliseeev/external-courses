function addWord(str1, str2, num) {
  // eslint-disable-next-line no-param-reassign
  num = 2;
  const mass = str1.split(' ');
  mass.splice(num, 0, str2);
  const fullSent = mass.join(' ');
  return fullSent;
}
module.exports = addWord;
