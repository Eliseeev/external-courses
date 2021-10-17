function megaFunc(enumeration) {
  let sumZero = 0;
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < enumeration.length; i += 1) {
    if (enumeration[i] !== null && enumeration[i] !== undefined) {
    // Определение колличества нулей
      if (enumeration[i] === 0) {
        sumZero += 1;
      }
      // Определение колличества чётных элементов
      if (enumeration[i] !== 0 && enumeration[i] % 2 === 0) {
        sumEven += 1;
      }
      // Определение колличества нечётных элементов
      if (enumeration[i] % 2 !== 0) {
        sumOdd += 1;
      }
    }
  }
  const generalMass = [sumEven, sumOdd, sumZero];
  return generalMass;
}
megaFunc([1, null, '*']);
module.exports = megaFunc;
