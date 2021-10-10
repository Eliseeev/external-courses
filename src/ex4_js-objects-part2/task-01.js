function nameObj(name, Obj) {
  return Obj.__proto__[name];
}
module.exports = nameObj;
