function countStr(str) {
  const hashMap = str.split('').reduce((acc, item) => {
    // eslint-disable-next-line no-param-reassign
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
    // eslint-disable-next-line no-restricted-syntax
  for (const a of Object.values(hashMap)) {
    console.log(a);
  }
}
module.exports = countStr;
