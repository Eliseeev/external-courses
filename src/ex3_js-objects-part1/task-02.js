function acceptsObj(Object) {
  console.log(Object);
  return void 0;
}
// eslint-disable-next-line no-unused-vars
const specialObj = {
  error: NaN,
  number: 7,
  string: 'LoL',
  cake: 'Yum',
};
module.exports = acceptsObj;
