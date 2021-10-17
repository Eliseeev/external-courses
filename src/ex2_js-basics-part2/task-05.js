function maxValue(mass) {
  const last = Math.max.apply(null, mass);
  return last;
}
module.exports = maxValue;
