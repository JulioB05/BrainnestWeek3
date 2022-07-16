function computerPlay() {
    let options = ["ROCK", "PAPER", "SCISSORS"];
    let random = Math.floor(Math.random() * options.length);
    let randomValue = options[random];

    //console.log(randomValue);
    return (randomValue);
}
// const computerSelection = computerPlay();
// let playerSelection = prompt("Enter PAPER/ ROCK/ SCISSORS:", "text");

function playerSelection() {
    let input = prompt("Enter PAPER/ ROCK/ SCISSORS:", 0);
    let upInput = input.toUpperCase();
    let playerSelection = "";
    if (upInput == "ROCK") {
        playerSelection = upInput;
    } else if (upInput == "PAPER") {
        playerSelection = upInput;
    } else if (upInput == "SCISSORS") {
        playerSelection = upInput;
    } else {
        console.log("Enter a valid value!")
        playerSelection = prompt("PLEASE ENTER PAPER/ ROCK/ SCISSORS:", 0).toUpperCase();
    }
    return (playerSelection);
}

function playRound(computerSelection, playerSelection) {
    let upperPlayer = playerSelection.toUpperCase();
    let result = "";

    switch (upperPlayer + computerSelection) {
        case "PAPERPAPER":
            result = "NOBODY WINS";
            break;
        case "PAPERROCK":
            result = "YOU WIN";
            break;
        case "PAPERSCISSORS":
            result = "YOU LOSE";
            break;
        case "ROCKPAPER":
            result = "YOU LOSE";
            break;
        case "ROCKROCK":
            result = "NOBODY WINS";
            break;
        case "ROCKSCISSORS":
            result = "YOU WIN";
            break;
        case "SCISSORSPAPER":
            result = "YOU WIN";
            break;
        case "SCISSORSROCK":
            result = "YOU LOSE"
            break;
        case "SCISSORSSCISSORS":
            result = "NOBODY WINS";
            break;
    }
    return (result);
}
// console.log("Player selection: " + playerSelection + " and computer selection: " + computerSelection)
// console.log(playRound(computerSelection, playerSelection));

function game() {
    let countWins = 0;
    let countLose = 0;
    let countTie = 0;
    let rounds = prompt("How many rounds do you want to play?", 0);
    let numRounds = Number(rounds);

    for (let i = 0; i < numRounds; i++) {
        let ronda = i + 1;
        let nplayerSelection = playerSelection();
        let computerSelection = computerPlay();

        console.log("Computer Select: " + computerSelection + " and player select: " + nplayerSelection);

        console.log("Result of round number: " + ronda + " is: " + playRound(computerSelection, nplayerSelection));

        let result = playRound(computerSelection, nplayerSelection);

        if (result == "YOU WIN") {
            countWins = countWins + 1;
        } else if (result == "YOU LOSE") {
            countLose = countLose + 1;
        } else if (result == "NOBODY WINS") {
            countTie = countTie + 1;
        }
    }

    console.log("Rounds won: " + countWins + " | Lost rounds: " + countLose + " | Tied rounds: " + countTie)

    if (countWins > countLose) {
        console.log("You are the winner of the game!!")
    } else if (countWins < countLose) {
        console.log("Sorry you lost the game!!");
    } else if (countWins == countLose) {
        console.log("You tied the game!!")
    }
}

game();