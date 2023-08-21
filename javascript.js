function getComputerChoice() {
    let options = {1: "rock",
                   2: "paper",
                   3: "scissors"}

    let key = Math.floor(Math.random() * 3 + 1)

    return options[key]
};

let pscore = 0
let cscore = 0

const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => button.addEventListener('click', playRound));

function playRound(e) {
    const container = document.querySelector(".currentround");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };

    const playerChoice = Array.from(e.srcElement.classList).filter((word) => word !== "btn").pop().toLowerCase();
    const computerChoice = getComputerChoice();
    const detailText = "You chose " + playerChoice + " and computer chose " + computerChoice;

    const matchup = playerChoice + "-" + computerChoice;
    const win = ["rock-scissors", "scissors-paper", "paper-rock"];
    const draw = ["rock-rock", "scissors-scissors", "paper-paper"];

    if (win.includes(matchup)) {
        const winner = "p"

        const title = document.createElement("h2");
        title.textContent = "Round detail:";
        container.appendChild(title);

        const header = document.createElement("h3");
        header.textContent = "You win!!!";
        container.appendChild(header);

        const detail = document.createElement("div");
        detail.textContent = detailText;
        container.appendChild(detail);

        pscore += 1

    } else if (draw.includes(matchup)) {
        const winner = "d"

        const title = document.createElement("h2");
        title.textContent = "Round detail:";
        container.appendChild(title);

        const header = document.createElement("h3");
        header.textContent = "Draw!!!";
        container.appendChild(header);

        const detail = document.createElement("div");
        detail.textContent = detailText;
        container.appendChild(detail);

    } else {
        const winner = "c"

        const title = document.createElement("h2");
        title.textContent = "Round detail:";
        container.appendChild(title);

        const header = document.createElement("h3");
        header.textContent = "You lose!!!";
        container.appendChild(header);

        const detail = document.createElement("div");
        detail.textContent = detailText;
        container.appendChild(detail);

        cscore += 1
    }

    const pScoreDisp = document.querySelector(".score.player")
    const cScoreDisp = document.querySelector(".score.computer")

    pScoreDisp.innerHTML = "Your score: " + pscore
    cScoreDisp.innerHTML = "Computer score: " + cscore

    if (pscore === 5) {
        game = document.querySelector(".game")
        while (game.firstChild) {
            game.removeChild(game.firstChild);
        };
    
        result = document.createElement("h1")
        result.textContent = "CONGRATULATIONS!!! You Win!"
        game.appendChild(result)
    }
    
    if (cscore === 5) {
        game = document.querySelector(".game")
        while (game.firstChild) {
            game.removeChild(game.firstChild);
        };
    
        result = document.createElement("h1")
        result.textContent = "You lose!  Better luck next time!"
        game.appendChild(result)
    }
}


