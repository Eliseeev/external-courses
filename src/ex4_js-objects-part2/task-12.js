function roundUp(oneNum, twoNum) {
  const resNum = +oneNum + +twoNum;
  // eslint-disable-next-line no-restricted-properties
  const res = Math.round(resNum * Math.pow(10, 3)) / Math.pow(10, 3);
  return res;
}
module.exports = roundUp;
