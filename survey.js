const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question("What's your name? Nicknames are also acceptable: ", (answer) => {
    console.log(`Nice to meet you: ${answer}`);
    rl.question("What's an activity you like doing the most? ", (answer) => {
        console.log(`Great that's a nice choice: ${answer}`);
        rl.question("What do you listen to while doing that? ", (answer) => {
            console.log(`${answer} is an amazing choice`);
            rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
                console.log(`${answer} is our favourite meal too`);
                rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
                    console.log(`Chosing ${answer} is quite a healthy choice`);
                    rl.question("Which sport is your absolute favourite? ", (answer) => {
                        console.log(`${answer} is the best game we heard of so far`);
                        rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
                            console.log(`Indeed ${answer} makes you unique`);
                        
                            rl.close();
                        });
                        
              //          rl.close();
                    });
                
            //        rl.close();
                });
                
            
          //      rl.close();
            });
        
        //    rl.close();
        });
    
      //  rl.close();
    });

    //rl.close();
});

  //rl.close();
});












