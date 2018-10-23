// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end('Hello World\n');
// });

// server.listen(4242, () => {
//   console.log('Server is running...');
// });

// var guessesRemaining = 10  
// var guessedLetters = []
// var display = 0
// var currentWord

// function startGame() {
//   console.log('---------------------------------------------------------')
//   console.log('')
//   console.log('Welcome to Hangman!')
//   console.log('')
//   console.log('---------------------------------------------------------')
//   if(guessedLetters.length > 0){
//     guessedLetters = []
//   }

// const readline = require('readline');

// readline.emitKeypressEvents(process.stdin);
// //process.stdin.setRawMode(true);

// process.stdin.on('keypress', (str, key) => {
//   console.log("Your current guess: ");
//   console.log(guessesRemaining);
//   console.log(str);
//   //console.log(key)
// })
// }
// startGame();

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var recursiveAsyncReadLine = function () {
    rl.question("Please Choose an option:\n"
        + "1) Option 1\n"
        + "2) Option 2\n"
        + "3) Exit\n"
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
    recursiveAsyncReadLine(); //Calling this function again to ask new question
    });
};

recursiveAsyncReadLine();
