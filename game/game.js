function computerPlay() {
    let options = ["ROCK", "PAPER", "SCISSORS"];
    let random = Math.floor(Math.random() * options.length);
    let randomValue = options[random];

    //console.log(randomValue);
    return randomValue;
}

// const computerSelection = computerPlay();
// let playerSelection = prompt("Enter PAPER/ ROCK/ SCISSORS:", "text");

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

    for (let i = 0; i < 5; i++) {
        let ronda = i + 1;
        let computerSelection = computerPlay();

        let playerSelection = prompt("Enter PAPER/ ROCK/ SCISSORS:", "text");

        console.log("Result of round number: " + ronda + " is: " + playRound(computerSelection, playerSelection));

        result = playRound(computerSelection, playerSelection);

        if (result == "YOU WIN") {
            countWins = countWins + 1;
        } else if (result == "YOU LOSE") {
            countLose = countLose + 1;
        } else if (result == "NOBODY WINS") {
            countTie = countTie + 1;
        }

    }

    console.log(countWins, countLose, countTie);

    if (countWins > countLose) {
        console.log("You are the winner of the game!!")
    } else if (countWins < countLose) {
        console.log("Sorry you lost the game!!");
    } else if (countWins == countLose) {
        console.log("You tied the game!!")
    }
}

game();