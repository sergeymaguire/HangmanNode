var Letter = function (letter) {
    this.letter = letter.toLowerCase();
    this.guessed = false;

    this.guess = function (letter) {
        if (!letter)
            return;

        letter = letter.toLowerCase();

        if (this.letter === letter) {
            this.guessed = true;
        }

        return this.guessed;
    }

    this.getGuessed = function() {
        return this.guessed;
    }
    this.getLetter = function () {
        if (this.guessed)
            return this.letter;

        return "_ ";

    };

    this.getActualLetter = function () {
        return this.letter;
    };

};
module.exports = Letter;