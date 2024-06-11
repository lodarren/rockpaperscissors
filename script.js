// rock = 0, paper = 1, scissors = 2

var humanScore = 0;
var computerScore = 0;

function updateScore() {
    document.getElementById('playerScore').textContent = humanScore;
    document.getElementById('computerScore').textContent = computerScore;
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    return new Promise(function(resolve, reject) {
        document.getElementById('rock').addEventListener('click', function() {
            resolve(0);
        });

        document.getElementById('paper').addEventListener('click', function() {
            resolve(1);
        });

        document.getElementById('scissors').addEventListener('click', function() {
            resolve(2);
        });
    });
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === -1) {
        alert("Invalid input!");
        return;
    }

    if (humanChoice === computerChoice) {
        alert("It's a tie!");
    } else if ((humanChoice === 1 && computerChoice === 0) || (humanChoice === 2 && computerChoice === 1) || (humanChoice === 0 && computerChoice === 2)) { 
        alert("You won the round!");
        humanScore++;
    } else {
        alert("The computer won the round.");
        computerScore++;
    }
}

async function playGame() {
    alert("Let's play Rock, Paper, Scissors!");

    var rounds = 5;
    var currentRound = 0;

    while (currentRound < rounds) {
        var humanSelection = await getHumanChoice();
        var computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        updateScore();
        currentRound++;
    }

    endGame();
}

function endGame() {
    alert("The game has ended! Your score: " + humanScore + ", Computer score: " + computerScore);
    
    if (computerScore > humanScore) {
        alert("The computer won the game!");
    } else if (computerScore === humanScore) {
        alert("The game ends in a tie!");
    } else {
        alert("You won!");
    }
}

playGame();
