
let Word = require("./word.js");
let gameWords = ["Jurassic Park", "Brody", "Trout", "Escondido"];
var word = gameWords[Math.floor(Math.random() * gameWords.length)];
var word = new Word(gameWords[i]);
var guess = "s";
console.log(word.getWord());// prints original word
word.guess(guess);
console.log(word.getWord());//prints results after guess



