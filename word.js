const Letter = require("./letter.js");

var Word = function (word) {
    this.guessingWord = [...word].map(letter => new Letter(letter));
    this.showWord = function () {
        return this.guessingWord.reduce((guessWord, ObjLetter) => guessWord + ObjLetter.checkLetterGuess(), "");
    }
    this.checkLetter = function (letter) {
        for (let objLetter of this.guessingWord) {
            objLetter.checkUserGuess(letter);
        }
    }
}

module.exports = Word;

var word = new Word("Hello World");
