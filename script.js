function getComputerChoice(options = 'rock paper scissors') {
    let words = options.split(' ');
    let random = Math.floor(Math.random() * words.length);
    return words[random];
}

function getHumanChoice() {
    let choice = prompt('Rock, Paper or Scissors: ').toLowerCase();
    return choice;
}

let humanScore = 0,
    computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('Tie');
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
                humanChoice === 'paper' && computerChoice === 'rock' ||
                humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore++;
            console.log(`You win. Computer chose ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose. Computer chose ${computerChoice}`);
   }
   return {humanScore, computerScore}
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`)
        let {humanScore, computerScore} = playRound(getHumanChoice(), getComputerChoice())
    }
    
    console.log(`Your score: ${humanScore}. Computer Score: ${computerScore}`)

    if (humanScore === computerScore) {
        console.log('It is a Tie')
    } else if (humanScore > computerScore) {
        console.log('You won!')
    } else {
        console.log('You lost')
    }
}

playGame()