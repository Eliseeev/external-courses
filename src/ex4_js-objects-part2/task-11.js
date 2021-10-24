function countStr(str) {
  const hashMap = str.split('').reduce((acc, item) => {
    const currentAcc = acc;
    currentAcc[item] = (currentAcc[item] || 0) + 1;
    return currentAcc;
  }, {});
  Object.values(hashMap).forEach((element) => console.log(element));
}

module.exports = countStr;
