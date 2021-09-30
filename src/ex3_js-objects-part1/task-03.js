// eslint-disable-next-line no-unused-vars
const testString1 = 'a';
// eslint-disable-next-line no-unused-vars
const date1 = {
  c: undefined,
  a: 'Alex',
  e: 'name',
};
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
