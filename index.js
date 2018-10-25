let debug = false;// make this false before submitting homework
let Word = require("./word.js"),
    Letter = require("./letter.js"),
    color = require("colors"),
    gameWords = debug? ["a giant brown trout"]:["Jurassic Park", "Brody", "Trout", "Escondido"],
    i = Math.floor(Math.random() * gameWords.length),
    starting = true,
    word = new Word(gameWords[i]);

var stdin = process.openStdin();

function askUserIfHeWantsToPlayGame(cli, play) {
    console.log("Would you like to play some hangman(y/n)".magenta);
    cli.addListener("data", function (d) {
         play(d.toString().trim());
    });

}

function play(response) {
    console.log("*************************************************************WELCOME TO HANGMAN!******************************************************************".bold.bgBlue)
    var quit = console.log("To quit anytime press CTRL C!".america)
    if(debug)
      console.log(word.getActualWord());//debug only

    if (starting) {
        starting = false;
        return;
    }
    word.guess(response);
    console.log("Your Current Word: " + word.getWord());
    console.log("Recently Guessed Letter : " + response)
    console.log("***************************************************************************************************************************************************".bold.bgBlue)
    if(word.wonGame()) {
        console.log("CONGRATS YOU HAVE WON!!!".underline.green);
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