let debug = true; // make this false before submitting homework
let Word = require("./word.js"),
  Letter = require("./letter.js"),
  guessesRemaining = 5;
(color = require("colors")),
  (gameWords = debug
    ? ["a giant brown trout"]
    : [
        "Jurassic Park",
        "Brody",
        "Trout",
        "Escondido",
        "San Diego Padres",
        "UCSD Coding Bootcamp",
        "Pulp Fiction",
        "Cat",
        "Dog",
        "Bob Saget",
        "Donald Trump",
        "Elvis Presly",
        "Ennis"
      ]),
  (i = Math.floor(Math.random(45) * gameWords.length)),
  (starting = true),
  (word = new Word(gameWords[i]));

var stdin = process.openStdin();

function askUserIfHeWantsToPlayGame(cli, play) {
  console.log("Would you like to play some hangman(y/n)".magenta);
  cli.addListener("data", function(d) {
    let s = d.toString().trim();
    if (validInput(s)) play(s);
  });
}
function validInput(s) {
  if (s.length > 1) {
    console.log("You can only enter one letter at a time: ".underline.red + s);
    return false;
  }
  if (!s.match(/[a-z]/i)){ 
      console.log("You can only enter an alphabetic letter...".bgCyan);
  return false;
  }

  return true;
}
function play(response) {
  console.log(
    "**********************************WELCOME TO HANGMAN!******************************************"
      .bold.bgBlue + "\n"
  );
  console.log("To quit anytime press CTRL C!".america + "\n");
  console.log(
    "To play enter a letter and then press enter.  You will have to press enter for every key you press!"
      .bold + "\n"
  );
  if (guessesRemaining <= 0) {
    console.log("Sorry you lost try again".bgRed + "\n");
    console.log(
      "The word you were trying to guess is: " + word.getActualWord()
    );
    process.exit(3);
  }
  guessesRemaining--;
  if (debug) console.log(word.getActualWord()); //debug only

  if (starting) {
    starting = false;
    return;
  }
  word.guess(response);
  console.log("Your Current Word: " + word.getWord() + "\n");
  console.log("Recently Guessed Letter : ".america + response + "\n");
  console.log(guessesRemaining);
  if (word.wonGame()) {
    console.log("CONGRATS YOU HAVE WON!!!".underline.green);
    process.exit(4);
    guessesRemaining;
  }
}

askUserIfHeWantsToPlayGame(stdin, play);
