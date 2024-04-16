

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const btnRoll = document.querySelector('.btn--roll');

const bntNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const hold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

//starting condintion

let scores, currentScore, activePlayer, playing;
// switch function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}
// initialisation player
const init = function () {
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');

  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);
  player0El.classList.add(`player--active`);
  player1El.classList.remove(`player--active`);
}
init();
// Rooling dice



btnRoll.addEventListener('click', function () {
  // 1.Generating a random dice roll
  if (playing) {


    const random = Math.floor(Math.random() * 6 + 1);

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${random}.png`;
    // 3. check if 1 : if true switch to next player
    if (random !== 1) {
      //Add dice to current score
      currentScore += random;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;


    }
    else {
      // switchting the player
      switchPlayer();


    }
  }
})





btnHold.addEventListener('click', function () {
  // 1.add current score to active player 
  if (playing) {


    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // check if players score is >=100
    if (scores[activePlayer] >= 20) {
      // finish
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    }
    // switch player
    switchPlayer();
  }
})

bntNew.addEventListener('click', init);

