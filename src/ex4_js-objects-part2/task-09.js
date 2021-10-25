function addWord(str1, str2, num) {
  const words = str1.split(' ');
  const newWords = words.reduce((acc, word, index) => {
    if (num + 1 === index) {
      acc.push(str2);
      acc.push(word);
    } else {
      acc.push(word);
    }
    return acc;
  }, []);
  return newWords.join(' ');
}

module.exports = addWord;
