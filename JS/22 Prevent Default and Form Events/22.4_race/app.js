'use strict';

// * Fnctions
function incrementLocation(player, game) {
  player.track[player.location].classList.remove('active');
  player.track[player.location + 1].classList.add('active');
  player.location++;
  if (player.location === player.track.length - 1) {
    gameOver(player, game);
  }
}

function gameOver(player, game) {
  game.gameIsOn = false;
  const winnigmassageAndBtn = document.createElement('div');
  winnigmassageAndBtn.innerHTML = `<h4>${player.name} win the game!</h4>
  <button class="play-agian">Play agian?</button>`;
  document.body.append(winnigmassageAndBtn);
  game.winnigmassageAndBtn = winnigmassageAndBtn;
  game.rematch = document.querySelector('.play-agian');
  game.rematch.addEventListener('click', (e) => {
    void e;
    gameSetup(game);
  });
}

function gameSetup(game) {
  game.player1.track[game.player1.location].classList.remove('active');
  game.player1.track[0].classList.add('active');
  game.player2.track[game.player2.location].classList.remove('active');
  game.player2.track[0].classList.add('active');

  game.gameIsOn = true;
  game.player1.location = 0;
  game.player2.location = 0;
  game.rematch = undefined;
  if (game.winnigmassageAndBtn) {
    game.winnigmassageAndBtn.remove();
    game.winnigmassageAndBtn = undefined;
  }
}

const game = {
  gameIsOn: false,
  winer: '',
  player1: {
    track: [...document.querySelectorAll('#player1-race > td')],
    location: 0,
    name: 'Player 1',
  },
  player2: {
    track: [...document.querySelectorAll('#player2-race > td')],
    location: 0,
    name: 'Player 2',
  },
  winnigmassageAndBtn: undefined,
};

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  if (game.gameIsOn) {
    if (e.key.toLowerCase() === 'a') incrementLocation(game.player2, game);
    if (e.key === 'ArrowRight') incrementLocation(game.player1, game);
  }
});

gameSetup(game);
