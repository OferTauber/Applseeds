// John and Mike both play basketball in different teams. In the latest 3 games,
// John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94
// and 123 points.
const john_team_scors = [89, 120, 103];
const mike_team_scors = [116, 94, 123];

// 1. Calculate the average score for each team
average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

const john_team_avr = average(john_team_scors);
const mike_team_avr = average(mike_team_scors);

// 2. Decide which teams wins in average (highest average score), and print the
// winner to the console. Also include the average score in the output.

winnerAnnouncing = () => {
  let winner = '';
  let winner_avr = 0;
  if (john_team_avr > mike_team_avr) {
    winner = "Johan's team";
    winner_avr = john_team_avr;
  } else {
    winner = "Mike's team";
    winner_avr = mike_team_avr;
  }

  console.log(`${winner} wins, with arerage score of ${winner_avr}`);
};

winnerAnnouncing();

// 3. Then change the scores to show different winners. Don't forget to take into
// account there might be a draw (the same average score)

// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105
// points. Like before, log the average winner to the console.
winnerAnnouncing_3 = () => {
  let winner = '';
  let winner_avr = 0;
  if (john_team_avr > mike_team_avr) {
    if (john_team_avr > mary_team_avr) {
      winner = "Johan's team";
      winner_avr = john_team_avr;
    } else {
      winner = "Mary's team";
      winner_avr = mary_team_avr;
    }
  } else {
    if (mike_team_avr > mary_team_avr) {
      winner = "Mike's team";
      winner_avr = mike_team_avr;
    } else {
      winner = "Mary's team";
      winner_avr = mary_team_avr;
    }
  }

  console.log(`${winner} wins, with arerage score of ${winner_avr}`);
};

// 5. Like before, change the scores to generate different winners, keeping in
// mind there might be draws.
const mary_team_scor = [97, 134, 105];
const mary_team_avr = average(mary_team_scor);

winnerAnnouncing_3();
