const superObj = {
  name: 'Mike',
  surname: 'Vazovsky',
  age: 23,
  color: 'Green',
};
function dopyObj(object1) {
  const newObject = { ...object1 };
  return newObject;
}
superObj();
module.exports = dopyObj;
