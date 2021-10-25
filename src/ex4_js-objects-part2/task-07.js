function cut(str, num) {
  let sum;
  const lenStr = str.length;
  if (lenStr > num) {
    const cutStr = str.slice(0, num - 1);
    const addEllipsis = '…'.repeat(1);
    sum = cutStr + addEllipsis;
    return sum;
  }
  return sum;
}

module.exports = cut;
