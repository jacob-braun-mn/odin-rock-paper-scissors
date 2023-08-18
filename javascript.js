function getComputerChoice() {
    let options = {1: "rock",
                   2: "paper",
                   3: "scissors"}

    let key = Math.floor(Math.random() * 3 + 1)

    return options[key]
};

function playRound(playerSelection, computerSelection) {
    let pLower = playerSelection.toLowerCase()
    let matchup = pLower + "-" + computerSelection
    let winner = "c"
    let win = ["rock-scissors", "scissors-paper", "paper-rock"]
    let draw = ["rock-rock", "scissors-scissors", "paper-paper"]
    if (win.includes(matchup)) {
        console.log("You win! " + playerSelection + " beats " + computerSelection + "!")
        winner = "p"
    } else if (draw.includes(matchup)) {
        console.log("Draw! Nobody wins.")
        winner = "d"
    } else {
        console.log("You lose! " + computerSelection + " beats " + playerSelection + "!")
    }
    return winner
}

// const playerSelection = "rock"
// const computerSelection = getComputerChoice()
// console.log(computerSelection)
// console.log(playRound(playerSelection, computerSelection))

function game() {
    let pScore = 0
    let cScore = 0
    let roundResult = "d"

    roundResult = playRound(prompt("Round 1:  What's your selection?"), getComputerChoice())
    if (roundResult === "p") {
        pScore = pScore + 1
    } else if (roundResult === "c") {
        cScore = cScore + 1
    }

    roundResult = playRound(prompt("Round 2:  What's your selection?"), getComputerChoice())
    if (roundResult === "p") {
        pScore = pScore + 1
    } else if (roundResult === "c") {
        cScore = cScore + 1
    }

    roundResult = playRound(prompt("Round 3:  What's your selection?"), getComputerChoice())
    if (roundResult === "p") {
        pScore = pScore + 1
    } else if (roundResult === "c") {
        cScore = cScore + 1
    }

    roundResult = playRound(prompt("Round 4:  What's your selection?"), getComputerChoice())
    if (roundResult === "p") {
        pScore = pScore + 1
    } else if (roundResult === "c") {
        cScore = cScore + 1
    }

    roundResult = playRound(prompt("Round 5:  What's your selection?"), getComputerChoice())
    if (roundResult === "p") {
        pScore = pScore + 1
    } else if (roundResult === "c") {
        cScore = cScore + 1
    }

    let message = ""

    if (pScore > cScore) {
        message = "You win " + pScore + " rounds to " + cScore + "!"
    } else if (cScore > pScore) {
        message = "You lose " + pScore + " rounds to " + cScore + "!"
    } else {
        message = "Draw! " + pScore + " to " + cScore
    }
    
    return message
};

console.log(game("rock"))