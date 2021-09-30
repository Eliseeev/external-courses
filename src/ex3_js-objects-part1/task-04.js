// eslint-disable-next-line consistent-return
function isThere(str, obj) {
  if (obj.b !== str) {
    const newObj = obj;
    newObj.b = 'new';
    return newObj;
  }
}

const myString = 'new';
const vegetablesObj = {
  veg1: 'Cucumber',
  veg2: 'Carrot',
  veg3: 'Beet',
};
myString();
vegetablesObj();
module.exports = isThere;
