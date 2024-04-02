const rock = document.querySelector("#btnRock");
const paper = document.querySelector("#btnPaper");
const scissors = document.querySelector("#btnScissors");
const playerScoreDisplay = document.querySelector("#scorePlayer");
const computerScoreDisplay = document.querySelector("#scoreComputer");
const result = document.querySelector("#result");


let playerSelection;
let playerScore = 0;
let computerScore = 0;
let winner = "";

function resetGame() {
    setTimeout(() => {
        playerScore = 0;
        computerScore = 0;
        playerScoreDisplay.innerText = playerScore;
        computerScoreDisplay.innerText = computerScore;
        result.innerText = "";
    },5000)};


function getComputerChoice() {
            let choice = ["rock", "paper", "scissors"];
            let random = choice[Math.floor(Math.random() * choice.length)];
            return random;
        }
function playRound(playerSelection, computerSelection) {

            computerSelection = getComputerChoice();
            console.log("Player: " + playerSelection)
            console.log("Computer: " + computerSelection)

            if (playerSelection == "rock" && computerSelection == "scissors") {
                console.log("Your win!, Rock beats scissors")
                playerScore++
            }
            else if (playerSelection == "scissors" && computerSelection == "paper") {
                console.log("Your win!, Scissors beats paper")
                playerScore++
            }
            else if (playerSelection == "paper" && computerSelection == "rock") {
                console.log("Your win!, Paper beats rock")
                playerScore++
            }
            else if (playerSelection == "paper" && computerSelection == "scissors") {
                console.log("Your Lose!, Scissors beats paper")
                computerScore++
            }
            else if (playerSelection == "scissors" && computerSelection == "rock") {
                console.log("Your lose!, Rock beats scissors")
                computerScore++
            }
            else if (playerSelection == "rock" && computerSelection == "paper") {
                console.log("Your lose!, Paper beats rock")
                computerScore++
            }
            else {
                console.log("It's a draw")
            }


            playerScoreDisplay.innerText = playerScore;
            computerScoreDisplay.innerText = computerScore;

            if (playerScore == 5) {
                result.innerText = "You win the game!";
                resetGame();
            }
            if (computerScore == 5) {
                result.innerText = "Computer win the game!"
                resetGame();
            }

        }

rock.addEventListener('click', () => {
            playerSelection = rock.innerText.toLowerCase();
            // console.log(playerSelection)
            playRound(playerSelection);

        });
    paper.addEventListener('click', () => {
        playerSelection = paper.innerText.toLowerCase();
        // console.log(playerSelection)
        playRound(playerSelection);

    });
    scissors.addEventListener('click', () => {
        playerSelection = scissors.innerText.toLowerCase();
        // console.log(playerSelection)
        playRound(playerSelection);

    });