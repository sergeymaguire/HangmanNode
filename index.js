let Letter = require("./letter.js");




var letter = new Letter("Jurassic Park");
var guess = "y";
var l = letter.guess(guess);
logGuess(guess, l);


guess = "j";

l = letter.guess(guess);
logGuess(guess, l);

guess = "u";

l = letter.guess(guess);
logGuess(guess, l);

var x = letter.letterHasBeenGuessed("j");
console.log("should be j = " + x);

x = letter.letterHasBeenGuessed("w");
console.log("w should return _ = " + x);

x = letter.letterHasBeenGuessed("J");
console.log("J should return j = " + x);

function logGuess(guess, result) {
    if (result)
        console.log(guess + " is right");
    else
        console.log(guess + " is wrong");
}