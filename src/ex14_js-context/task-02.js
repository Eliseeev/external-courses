class Hangman {
  word = ''

  hiddenWord = []

  incorrectLetters = []

  attempts = 6

  constructor(word) {
    this.word = word;
    this.hiddenWord = Array.from({ length: word.length }, () => '_');
  }

  guess(letter) {
    if (letter.length > 1) return console.log('Should be only 1 character!!');

    if (this.word.includes(letter.toLowerCase())) {
      this.word.split('').forEach((element, index) => {
        if (element === letter.toLowerCase()) {
          this.hiddenWord[index] = element;
        }
      });

      if (this.word === this.hiddenWord.join('')) {
        console.log(`${this.word} ---> You won!`);
        return this;
      }

      console.log(this.hiddenWord.join(''));

      return this;
    }

    this.incorrectLetters.push(letter.toLowerCase());
    this.attempts -= 1;
    return `wrong letter, errors left ${this.attempts} | ${this.incorrectLetters.join(',')}`;
  }

  getGuessedString() {
    return this.hiddenWord.join('');
  }

  getErrorsLeft() {
    return this.attempts;
  }

  getWrongSymbols() {
    return this.incorrectLetters;
  }

  getStatus() {
    return `${this.hiddenWord.join('')} | errors left ${this.attempts}`;
  }

  startAgain(newWord) {
    this.word = newWord;
    this.hiddenWord = Array.from({ length: newWord.length }, () => '_');
    this.incorrectLetters = [];
    this.attempts = 6;

    return this;
  }
}
module.exports = Hangman();
