var Letter = function (letter) {
    this.letter = letter;
    this.isLetterGuess = letter === " " ? true : false;
    this.isLetterGuess = () => this.isLetterGuess ? this.letter : " _ ";
    this.checkUserGuess = guessLetter => {
        if (guessLetter === this.letter) {
            this.isLetterGuess = true;
        }
    }
}

module.exports = Letter;