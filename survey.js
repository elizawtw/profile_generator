const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (answer1) => {
  
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favourite? ", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            console.log(`My name is ${answer1}. An activity that I like doing is ${answer2}. I listen to ${answer3} while doing that. My favourite meal is ${answer4}. My favourite thing to eat is ${answer5} for ${answer4}. My favourite sport is ${answer6}.`);
    
            rl.close();
          });
        });
      });
    });
  });

});