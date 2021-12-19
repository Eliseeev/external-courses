// eslint-disable-next-line func-names
const Calculator = (function () {
  let total = 0;

  function add(value = 0) {
    total += value;
    return this;
  }

  function subtract(value = 0) {
    total -= value;
    return this;
  }

  function divide(value = 1) {
    total /= value;
    return this;
  }

  function multiply(value = 1) {
    total *= value;
    return this;
  }

  function getResult() {
    return total;
  }

  function reset() {
    total = 0;
    return this;
  }

  function setState(state) {
    total = state;
    return this;
  }

  function fetchData(callback) {
    setTimeout(() => { callback(500); }, 3000);
  }

  return {
    add, subtract, getResult, setState, fetchData, divide, multiply, reset,
  };
}());
module.exports = Calculator();
