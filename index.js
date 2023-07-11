let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
// let sumEl = document.querySelector('#sum-el')
let cardEl = document.getElementById('card-el');

let player = {
  name: "Uthso",
  chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let card = Math.ceil(Math.random() * 13);

  if (card === 1) {
    return 11;
  } else if (card > 10) {
    return 10;
  } else {
    return card;
  }
}

function startGame() {
  firstCard = getRandomCard();
  secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message = 'Do you want to draw a new card?';
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
  sumEl.textContent = 'Sum: ' + sum;
  cardEl.textContent = 'Cards: ';
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += `${cards[i]} `;
  }
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    sum += card;
    // Push the card to the cards array
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}
