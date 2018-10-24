var Letter = function (word) {
    this.word = word.toLowerCase();
    this.guessedLettersTrueFalse = [];

    for (let i = 0; i < word.length; i++)
        this.guessedLettersTrueFalse[i] = false;

    this.letterHasBeenGuessed = function (letter) {
        letter = letter.toLowerCase();
        for (let i = 0; i < this.guessedLettersTrueFalse.length; i++) {
            if (this.word[i] === letter && this.guessedLettersTrueFalse[i])
                return this.word[i];
        }
        return "_";

    };
    this.guess = function (letter) {
        letter = letter.toLowerCase();
        let guessedRight = false;
        for (let i = 0; i < this.word.length; i++) {
            if (this.word[i] === letter) {
                this.guessedLettersTrueFalse[i] = true;
                guessedRight = true;
            }
        }
        return guessedRight;
    }
}
module.exports = Letter;