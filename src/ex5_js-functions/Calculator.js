function Calculator() {
  let result = 0;
  // eslint-disable-next-line no-return-assign
  const chain = (fn) => (a) => {
    if (!isNaN(a)) {
      result = fn(result, a);
    }
    const concatFn = (b) => {
      if (isNaN(b)) return concatFn;

      result = fn(result, b);
      return concatFn;
    };

    concatFn.toString = () => result;
    return concatFn;
  };
  return {
    add: chain((a, b) => a + b),
    substract: chain((a, b) => a - b),
    multiple: chain((a, b) => a * b),
    devide: chain((a, b) => a / b),
    getResult: () => result,
    // eslint-disable-next-line no-return-assign
    reset: () => result = 0,
  };
}
// eslint-disable-next-line no-unused-vars
const calculator = Calculator();
module.exports = Calculator();
