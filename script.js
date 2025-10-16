const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
let human_answer = "";
let computer_answer = null;
let computer_guess = "";


rock.addEventListener("click", e => {
    human_answer = "rock";
    computer_answer = Math.random();
    computer_guess = guess(computer_answer);
    document.getElementById("computer").textContent = `Computer: ${computer_guess}`;
    document.getElementById("human").textContent = `Human Answer: ${human_answer}`;
    who_wins(computer_guess, human_answer);
})

paper.addEventListener("click", e => {
    human_answer = "paper";
    computer_answer = Math.random();
    computer_guess = guess(computer_answer);
    document.getElementById("computer").textContent = `Computer: ${computer_guess}`;
    document.getElementById("human").textContent = `Human Answer: ${human_answer}`;
    who_wins(computer_guess, human_answer);
})

scissors.addEventListener("click", e => {
    human_answer = "scissors";
    computer_answer = Math.random();
    computer_guess = guess(computer_answer);
    document.getElementById("computer").textContent = `Computer: ${computer_guess}`;
    document.getElementById("human").textContent = `Human Answer: ${human_answer}`;
    who_wins(computer_guess, human_answer);
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

function who_wins(computer_guess,human_answer) {
    if (computer_guess == "paper" && human_answer == "paper") {
        document.getElementById("message").textContent = "Draw";
        document.getElementById("message").style.color = "black";
    }
    else if (computer_guess == "paper" && human_answer == "scissors") {
        document.getElementById("message").textContent = "You Win";
        document.getElementById("message").style.color = "green";
    }
    else if (computer_guess == "paper" && human_answer == "rock") {
        document.getElementById("message").textContent = "You Lose";
        document.getElementById("message").style.color = "red";
    }
    else if (computer_guess == "rock" && human_answer == "rock") {
        document.getElementById("message").textContent = "Draw";
        document.getElementById("message").style.color = "black";
    }
    else if (computer_guess == "rock" && human_answer == "paper") {
        document.getElementById("message").textContent = "You Win";
        document.getElementById("message").style.color = "green";
    }
    else if (computer_guess == "rock" && human_answer == "scissors") {
        document.getElementById("message").textContent = "You Lose";
        document.getElementById("message").style.color = "red";
    }
    else if (computer_guess == "scissors" && human_answer == "paper") {
        document.getElementById("message").textContent = "You Lose";
        document.getElementById("message").style.color = "red";
    }
    else if (computer_guess == "scissors" && human_answer == "rock") {
        document.getElementById("message").textContent = "You Win";
        document.getElementById("message").style.color = "green";
    }
    else if (computer_guess == "scissors" && human_answer == "scissors") {
        document.getElementById("message").textContent = "Draw";
        document.getElementById("message").style.color = "black";
    }
}