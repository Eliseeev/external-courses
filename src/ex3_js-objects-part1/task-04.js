function isThere(str, obj) {
  let newObj;
  if (obj.b !== str) {
    newObj = obj;
    newObj.b = 'new';
    return newObj;
  }
  return newObj;
}
module.exports = isThere;
