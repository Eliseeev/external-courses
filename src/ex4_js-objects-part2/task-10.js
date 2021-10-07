function inverted(string) {
  const spLine = string.split('');
  const revMass = spLine.reverse();
  const resInv = revMass.join('');
  return resInv;
}
module.exports = inverted;
