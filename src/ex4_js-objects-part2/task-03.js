function cutBegEnd(string) {
  if (string[0] === ' ' && string[string.length - 1] === ' ') {
    return string.substring(1, string.length - 1);
  }
  return string;
}

module.exports = cutBegEnd;
