function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"]
    let random = choice[Math.floor(Math.random() * choice.length)]
    return random
}
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("Your win!, Rock beats scissors")
        playerScore++
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("Your win!, Scissors beats paper")
        playerScore++
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("Your win!, Paper beats rock")
        playerScore++
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        console.log("Your Lose!, Paper beats rock")
        computerScore++
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log("Your lose!, Scissors beats paper")
        computerScore++
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        console.log("Your lose!, Paper beats rock")
        computerScore++
    }
    else{
        console.log("It's a draw")
    }

}

function playGame(){
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Insert your selection: ").toLowerCase()
        computerSelection = getComputerChoice();        
        playRound(playerSelection,computerSelection)
    }
    
    console.log("SCORE\n")
    console.log("Your score: " + playerScore  )
    console.log("Computer score: " + computerScore  )
    if(playerScore == computerScore){
        winner = "It's a draw"
    }else if (computerScore > playerScore){
        winner = "Computer"
    }else{
        winner = "You"
    }
    console.log("The winner is: " + winner)
}



let playerScore = 0
let computerScore = 0
let winner = ""

//   console.log(playerSelection)
console.log(playGame());

