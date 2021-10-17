// eslint-disable-next-line consistent-return
function digit(check) {
  if (check % 2 !== 0 && check !== 1 && check < 1000 && check > 0) {
    return `Число ${check} - простое число`;
  } if (check % 2 === 0 && check !== 0 && check < 1000 && check > 0) {
    return `Число ${check} - составное число`;
  }
  if (check > 1000) {
    return 'Данные неверны';
  }
  if (check < 0) {
    return 'Данные неверны';
  }
  if (check === 0) {
    return 'Не причисляется ни к простым, ни к составным числам';
  }
  if (check === 1) {
    return 'Не причисляется ни к простым, ни к составным числам';
  }
}
module.exports = digit;
