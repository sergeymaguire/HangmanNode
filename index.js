let Word = require("./word.js"),
    Letter = require("./letter.js"),
    gameWords = ["Jurassic Park", "Brody", "Trout", "Escondido"],
    i = Math.floor(Math.random() * gameWords.length),
    starting = true,
    debug = true,
    word = new Word(gameWords[i]);

var stdin = process.openStdin();

function askUserIfHeWantsToPlayGame(cli, play) {
    console.log("Would you like to play some hangman(y/n)");
    cli.addListener("data", function (d) {
        play(d.toString().trim());
    });

}

function play(response) {
    if(debug)
      console.log(word.getActualWord());//debug only

    if (starting) {
        starting = false;
        return;
    }
    word.guess(response);
    console.log(word.getWord());
    if(word.wonGame()) {
        console.log("won");
        process.exit(4);
    }
}

askUserIfHeWantsToPlayGame(stdin, play);
//debug 
// test = new Word("joe");
// var x = test.getWord();
// test.guess("j");
// console.log(test.getWord());
// test.guess("o");
// console.log(test.getWord());
// test.guess("e");
// console.log(test.getWord());