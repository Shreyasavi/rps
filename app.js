const move =['Rock', 'Paper', 'Scissors'];

const playerSelection = "rock";
const computerSelection = computerPlay();

function computerPlay(){
    return move[Math.floor(Math.random() * move.length)]
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock" && computerSelection === "Paper")
        return "Sorry, You lost"
    else if(playerSelection === "rock" && computerSelection === "Scissors") 
        return "Congrats, You won!"
    else if (playerSelection === "rock" && computerSelection === "Rock")
        return "It's a tie!"
    
}

function game(){
    return playRound(playerSelection, computerSelection)
}

console.log(game());