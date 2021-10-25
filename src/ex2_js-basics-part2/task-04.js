function check(array) {
  let flag = true;
  const firstEl = array[0];

  array.forEach((item) => {
    if (firstEl !== item) {
      flag = false;
    }
  });

  return flag;
}
module.exports = check;
