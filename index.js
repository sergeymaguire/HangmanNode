const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World\n');
});

server.listen(4242, () => {
  console.log('Server is running...');
});

var guessesRemaining = 10  
var guessedLetters = []
var display = 0
var currentWord

function startGame() {
  console.log('---------------------------------------------------------')
  console.log('')
  console.log('Welcome to Hangman!')
  console.log('')
  console.log('---------------------------------------------------------')
  if(guessedLetters.length > 0){
    guessedLetters = []
  }

const readline = require('readline');

readline.emitKeypressEvents(process.stdin);


process.stdin.on('keypress', (str, key) => {
  console.log( str);
  guessesRemaining--;
  console.log(guessesRemaining);
  if (guessesRemaining === 0){
      console.log("You lose! Try Again!")
      guessesRemaining;
      gameLost();
  }
  //console.log(str);
  if(str === undefined)
  console.log("Please pick a real letter")
  guessesRemaining;
})
}
startGame();

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var recursiveAsyncReadLine = function () {
    rl.question("Please Choose an option:\n"
        + "1) Play the Game!\n"
        + "2) Restart the Game\n"
        + "3) Exit the game :(\n"
        , function (line) {

            switch (line){
                case "1":
                    console.log("this is option 1");
                    break;
                case "2":
                    console.log("this is option 2");
                    break;
                case "3":
                    return rl.close();
                    break;
                default:
                    console.log("No such option. Please enter another: ");
            }
    recursiveAsyncReadLine();
    });
};

recursiveAsyncReadLine();
