function nameObj(name, Obj) {
  return Object.getPrototypeOf(Obj)[name];
}

module.exports = nameObj;
