let Letter = require("./letter.js");
var Word = function (word) {
    word = word.toLowerCase();
    this.letters = [];

    for (let i = 0; i < word.length; i++) {
        let aLetter = new Letter(word[i]);
        this.letters[i] = aLetter;

    }

    this.getWord = function () {
        let theWord = [];
        for (let i = 0; i < this.letters.length; i++) {
            theWord.push(this.letters[i].getLetter())
        }
        return theWord.join("");
    };

    this.getActualWord = function () {
        let theWord = [];
        for (let i = 0; i < this.letters.length; i++) {
            theWord.push(this.letters[i].getActualLetter());
        }
        return theWord.join("");
    };

    this.guess = function (aLetter) {
        let theWord = [];
        for (let i = 0; i < this.letters.length; i++) {
            this.letters[i].guess(aLetter);
        }
    };

    this.wonGame = function (aLetter) {
        let theWord = [];
        for (let i = 0; i < this.letters.length; i++) {
            if (!this.letters[i].getGuessed())
                return false;
        }
        return true;
    };
}
module.exports = Word;