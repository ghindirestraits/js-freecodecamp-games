const computerChoiceDisp = document.getElementById('computer-choice');
const userChoiceDisp = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisp.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomNum = Math.floor(Math.random() * possibleChoices.length) + 1; // same as 3
    console.log(randomNum);

    if (randomNum === 1) {
        computerChoice = 'rock';
    } else if (randomNum === 2) {
        computerChoice = 'scissors';
    } else {
        computerChoice = 'paper';
    }
    
    computerChoiceDisp.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = `It's a draw!`;
    }

    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = `You win!`;
    }

    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = `You lose!`;
    }

    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = `You lose!`;
    }

    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = `You win!`;
    }

    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = `You lose!`;
    }

    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = `You win!`;
    }

    resultDisplay.innerHTML = result;
}