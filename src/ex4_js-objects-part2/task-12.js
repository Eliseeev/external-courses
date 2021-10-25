function roundUp(oneNum, twoNum) {
  return Math.round(((+oneNum + +twoNum) * 1000)) / 1000;
}

module.exports = roundUp;
