function getComputerChoice() {
    var options = {1: "rock",
                   2: "paper",
                   3: "scissors"}

    var key = Math.floor(Math.random() * 3 + 1)

    return options[key]
};

console.log(getComputerChoice())