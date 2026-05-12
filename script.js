const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const resultsDiv = document.querySelector('#results');
const scoreDiv = document.querySelector('#score');

rockButton.addEventListener('click', () => {
    playRound("rock", getComputerChoice())
})

paperButton.addEventListener('click', () => {
    playRound("paper", getComputerChoice())
})

scissorsButton.addEventListener('click', () => {
    playRound("scissors", getComputerChoice())
})

function getComputerChoice() {
    let randomNumber = Math.random()
    if (randomNumber < 0.33) {
        return ("rock")
    }
    else if (randomNumber >= 0.33 && randomNumber < 0.66) {
        return ("paper")
    }

    else {
        return ("scissors")
    }
}

let humanScore = 0
let computerScore = 0

scoreDiv.textContent = `Human: ${humanScore}, Computer: ${computerScore}`


function playRound(humanChoice, computerChoice) {

    if (humanScore === 5 || computerScore === 5) {
        return;
    }

    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore += 1
        resultsDiv.textContent = "You lose! Paper beats Rock."
    }

    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1
        resultsDiv.textContent = "You win! Paper beats Rock."
    }

    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore += 1
        resultsDiv.textContent = "You lose! Rock beats Scissors."
    }

    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore += 1
        resultsDiv.textContent = "You win! Rock beats Scissors."
    }

    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore += 1
        resultsDiv.textContent = "You lose! Scissors beats Paper."
    }

    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1
        resultsDiv.textContent = "You win! Scissors beats Paper."
    }

    else {
        resultsDiv.textContent = "It's a tie!"
    }

    scoreDiv.textContent = `Human: ${humanScore}, Computer: ${computerScore}`

    if (humanScore === 5) {
        resultsDiv.textContent = "Congratulations! You won the game!"
    }

    else if (computerScore === 5) {
        resultsDiv.textContent = "Sorry! The computer won the game!"
    }
}