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

function getHumanChoice() {
    let input = prompt("Please type in your input");
    return input;
}

function playGame() {

    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore += 1
            console.log("You lose! Paper beats Rock.")
        }

        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore += 1
            console.log("You win! Paper beats Rock.")
        }

        else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore += 1
            console.log("You lose! Rock beats Scissors.")
        }

        else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore += 1
            console.log("You win! Rock beats Scissors.")
        }

        else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore += 1
            console.log("You lose! Scissors beats Paper.")
        }

        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore += 1
            console.log("You win! Scissors beats Paper.")
        }

        else {
            console.log("It's a tie!")
        }
    }

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);


    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);


    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);


    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);


    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    if (humanScore > computerScore) {
        console.log("You are the winner!")
    }

    else if (humanScore < computerScore) {
        console.log("You are the loser!")
    }

    else {
        console.log("It's a tie!")
    }
}

playGame()