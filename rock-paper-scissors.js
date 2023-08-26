let totalWins = 0;
let totalLoses = 0;
let totalTies = 0;


function getComputerChoice(){
    let options = ["rock","paper", "scissors"];

    let roll = Math.floor(Math.random() * options.length);

    return options[roll];
}

function getPlayerChoice(){
    let options = ["rock","paper", "scissors"];

    let choice;

    while (options.includes(choice) == false) {
        choice = prompt("Enter 'Rock', 'Paper', or 'Scissors': ");
    }

    return choice.toLowerCase().trim()
}

function decideWinner(playerChoice, computerChoice){
    if (playerChoice == "rock") {
        if (computerChoice == "rock") {
            return "tie";
        }
        else if (computerChoice == "paper") {
            return "computer";
        }
        else if (computerChoice == "scissors") {
            return "player";
        } 
    }

    if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            return "player";
        }
        else if (computerChoice == "paper") {
            return "tie";
        }
        else if (computerChoice == "scissors") {
            return "computer";
        } 
    }

    if (playerChoice == "scissors") {
        if (computerChoice == "rock") {
            return "computer";
        }
        else if (computerChoice == "paper") {
            return "player";
        }
        else if (computerChoice == "scissors") {
            return "tie";
        } 
    }
}

function tallyGames(outcome) {
    if (outcome == "player"){
        totalWins +=1;
    } else if (outcome == "computer"){
        totalLoses +=1;
    } else if (outcome == "tie"){
        totalTies +=1;
    }
}

function scoreBoard(){
    console.log(`Wins: ${totalWins}`)
    console.log(`Loses: ${totalLoses}`)
    console.log(`Ties: ${totalTies}`)
}

function playByPlay(playerChoice,computerChoice){
    console.log(`You played: ${playerChoice}`);
    console.log(`Computer played: ${computerChoice}`);
}

function declareWinner(outcome) {
    if (outcome=="player"){
        console.log("Congrats! You win!")
    } else if (outcome=="computer"){
        console.log("Sorry! You lose!")
    } else if (outcome=="tie"){
        console.log("Tie . . .")
    }
}

function game(){

    let compChoice = getComputerChoice()
    let humanChoice = getPlayerChoice()
    let winner = decideWinner(humanChoice,compChoice)
    tallyGames(winner)
    playByPlay(humanChoice,compChoice)
    declareWinner(winner)
    scoreBoard()
    
}

function playerChoice(event){
    let choice = this.getAttribute('data-selection');
    console.log(choice);
}

const playerButtons = document.querySelectorAll('.player-buttons > button');

console.log(playerButtons.length);

playerButtons.forEach(button => button.addEventListener('click', playerChoice));