function returnCopyObj(object1) {
  const newObject = { ...object1 };
  return newObject;
}
module.exports = returnCopyObj;
