const megaObject = {
  number: 32,
  name: 'John',
  age: 43,
  '': 'Emptiness',
  recursive: {
    num1: 5,
    weather: 'Rainy',
    weight: 89,
    color: 'Green',
  },
};
megaObject();
function deepClone(copy) {
  const newObj = JSON.parse(JSON.stringify(copy));
  return newObj;
}
module.exports = deepClone;
