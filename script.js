const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let human_answer = "";
let computer_answer = null;
let computer_guess = "";

const reset = document.querySelector("#reset");
reset.addEventListener("click", e => {
    window.location.reload()
})

function guess(computer_answer) {
    if (computer_answer < .3333) {
    return "paper";
    } else if (computer_answer > .3333 && computer_answer < .6666) {
    return "rock";
    } else {
    return "scissors";
    }
}


function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    playRound();
    function whoWon() {
        if (humanScore > computerScore) {
            document.getElementById("game-status").textContent = "Game Over: You Win";
            document.getElementById("game-status").style.color = "green";
        } else {
            document.getElementById("game-status").textContent = "Game Over: You Lose";
            document.getElementById("game-status").style.color = "red";
        }
    }
    
    function gameOver(computer_guess,human_answer) {
        if (humanScore < 5 && computerScore < 5) {
            who_wins(computer_guess,human_answer);
            document.getElementById("computer").textContent = `Computer: ${computer_guess}`;
            document.getElementById("human").textContent = `Human Answer: ${human_answer}`;
            document.getElementById("computer-score").textContent = `Computer: ${computerScore}`;
            document.getElementById("human-score").textContent = `Human Answer: ${humanScore}`;
            document.getElementById("game-status").textContent = "Game in Progress";
        } else {
            whoWon();
        }
    }

    function playRound() {
        rock.addEventListener("click", e => {
        human_answer = "rock";
        computer_answer = Math.random();
        computer_guess = guess(computer_answer);
        gameOver(computer_guess,human_answer);
        })

        paper.addEventListener("click", e => {
        human_answer = "paper";
        computer_answer = Math.random();
        computer_guess = guess(computer_answer);
        gameOver(computer_guess,human_answer);
        })

        scissors.addEventListener("click", e => {
        human_answer = "scissors";
        computer_answer = Math.random();
        computer_guess = guess(computer_answer);
        gameOver(computer_guess,human_answer);
        })
    }

    function who_wins(computer_guess,human_answer) {
        if (computer_guess == "paper" && human_answer == "paper") {
            document.getElementById("message").textContent = "Draw";
            document.getElementById("message").style.color = "black";
        }
        else if (computer_guess == "paper" && human_answer == "scissors") {
            document.getElementById("message").textContent = "You Won This Round";
            document.getElementById("message").style.color = "green";
            humanScore++
        }
        else if (computer_guess == "paper" && human_answer == "rock") {
            document.getElementById("message").textContent = "You Lost This Round";
            document.getElementById("message").style.color = "red";
            computerScore++
        }
        else if (computer_guess == "rock" && human_answer == "rock") {
            document.getElementById("message").textContent = "Draw";
            document.getElementById("message").style.color = "black";
        }
        else if (computer_guess == "rock" && human_answer == "paper") {
            document.getElementById("message").textContent = "You Won This Round";
            document.getElementById("message").style.color = "green";
            humanScore++
        }
        else if (computer_guess == "rock" && human_answer == "scissors") {
            document.getElementById("message").textContent = "You Lost This Round";
            document.getElementById("message").style.color = "red";
            computerScore++
        }
        else if (computer_guess == "scissors" && human_answer == "paper") {
            document.getElementById("message").textContent = "You Lost This Round";
            document.getElementById("message").style.color = "red";
            computerScore++
        }
        else if (computer_guess == "scissors" && human_answer == "rock") {
            document.getElementById("message").textContent = "You Won This Round";
            document.getElementById("message").style.color = "green";
            humanScore++
        }
        else if (computer_guess == "scissors" && human_answer == "scissors") {
            document.getElementById("message").textContent = "Draw";
            document.getElementById("message").style.color = "black";
        }
    }
}

playGame();
