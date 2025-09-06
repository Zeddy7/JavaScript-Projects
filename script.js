const playerChoice = document.getElementById('playerChoice'),
    computerChoiceHtml = document.getElementById('computerChoice'),
    result = document.getElementById('result'),
    playerScore = document.getElementById('playerScore'),
    computerScoreHtml = document.getElementById('computerScore'),
    finalScore = document.getElementById('finalScore'),
    againButton = document.getElementById('againButton');
let humanScore = 0,
    computerScore = 0,
    choices = ['rock', 'paper', 'scissors'];
againButton.style.display = "none";

function playRound(humanChoice) {
    while (humanScore < 5 && computerScore < 5) {
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        if (humanChoice === computerChoice) {
            playerChoice.textContent = `PLAYER: ${humanChoice}`
            computerChoiceHtml.textContent = `COMPUTER: ${computerChoice}`
            result.textContent = `IT'S A TIE`;
        } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
            humanChoice === 'paper' && computerChoice === 'rock' ||
            humanChoice === 'scissors' && computerChoice === 'paper') {
                humanScore++;
                playerChoice.textContent = `PLAYER: ${humanChoice}`
                computerChoiceHtml.textContent = `COMPUTER: ${computerChoice}`
                result.textContent = `YOU WON`;
            } else {
                computerScore++;
                playerChoice.textContent = `PLAYER: ${humanChoice}`
                computerChoiceHtml.textContent = `COMPUTER: ${computerChoice}`
                result.textContent = `YOU LOST`;
            }
            playerScore.textContent = `PLAYER SCORE: ${humanScore}`
            computerScoreHtml.textContent = `COMPUTER SCORE: ${computerScore}`
            break
    }
    if (humanScore === 5 && computerScore === 5) {
            finalScore.textContent = 'It is a Tie'
            againButton.style.display = "block";
        } else if (humanScore === 5) {
            finalScore.textContent = 'YOU WIN THE GAME!'
            againButton.style.display = "block";
        } else if (computerScore === 5) {
            finalScore.textContent = 'YOU LOSE THE GAME'
            againButton.style.display = "block";
        }
}

function playAgain() {
    againButton.style.display = "none";
    humanScore = 0,
    computerScore = 0;
    playerScore.textContent = ``
    computerScoreHtml.textContent = ``
    playerChoice.textContent = ``
    computerChoiceHtml.textContent = ``
    result.textContent = ``;
    finalScore.textContent = ''
    result.textContent = "";
}