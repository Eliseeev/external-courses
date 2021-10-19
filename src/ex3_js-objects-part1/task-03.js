function myspace(string, mass) {
  // eslint-disable-next-line no-restricted-syntax
  for (const code of Object.keys(mass)) {
    if (string === code) {
      return true;
    }
  }
  return false;
}
module.exports = myspace;
