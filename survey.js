const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = {
  q1: 'What\'s your name? ',
  q2: 'What\'s an activity you like doing?',
  q3: 'What do you listen to while doing that?',
  q4: 'Which meal is your favourite (eg: dinner, brunch, etc.)',
  q5: 'What\'s your favourite thing to eat for that meal?',
  q6: 'Which sport is your absolute favourite?',
  q7: 'What is your superpower? ',
};

let answers = {};

rl.question(questions.q1, (answer) => {
  answers.name = answer;
  console.log(`Nice to meet you: ${answer} !`);

  rl.question(questions.q2, (answer) => {
    answers.activity = answer;

    rl.question(questions.q3, (answer) => {
      answers.music = answer;

      rl.question(questions.q4, (answer) => {
        answers.meal = answer;

        rl.question(questions.q5, (answer) => {
          answers.favoriteFood = answer;

          rl.question(questions.q6, (answer) => {
            answers.sport = answer;

            rl.question(questions.q7, (answer) => {
              answers.superPower = answer;
              console.log(`Thank you for your valuable feedback`);
              console.log(answers);
              
              rl.close();
            });
          });
        });
      });
    });
  });
});