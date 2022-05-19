//prepare variables for the options
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");
//make a string of the options for the player to use.
const options = [rock, paper, scissors, lizard, spock];
let playerWins = 0;
let computerWins = 0;

//add function to display the winner of the current game and add a point for the winner.
function result(player, computer) {
    const winner = document.getElementById("winner");

            if (player === computer)
            {
                winner.innerText = ("It\s a Tie.");
            }
            if (player === rock.title) {
                if (computer === scissors.title || computer === lizard.title) {
                    winner.innerText = ('You win!');
                    playerWins++;
                } else {
                    winner.innerText = ('Computer wins!');
                    computerWins++;
                }
            }
            if (player === scissors.title) {
                if (computer === lizard.title || computer === paper.title) {
                    winner.innerText = ('You win!');
                    playerWins++;
                } else {
                    winner.innerText = ('Computer wins!');
                    computerWins++;
                }
            }
            if (player === lizard.title) {
                if (computer === paper.title || computer === spock.title) {
                    winner.innerText = ('You win');
                    playerWins++;
                } else {
                    winner.innerText = ('Computer wins!');
                    computerWins++;
                }
            }
            if (player === paper.title) {
                if (computer === rock.title || computer === spock.title) {
                    winner.innerText = ('You win');
                    playerWins++;
                } else {
                    winner.innerText = ('Computer wins!');
                    computerWins++;
                }
            }
            if (player === spock.title) {
                if (computer === rock.title || computer === scissors.title) {
                    winner.innerText = ('You win');
                    playerWins++;
                } else {
                    winner.innerText = ('Computer wins!');
                    computerWins++;
                }
            }
    }



//add function when player clicks any of the choices.
options.forEach(option => {
    option.addEventListener("click", function () {
        //player's choice.
        //prepare variable player's choice, so we can work with it.
        const playerComment = document.getElementById("playerComment");
        const playerChoice = option.title;
        playerComment.innerText = (`You choose ${playerChoice}!`);

        //computer's choice.
        const computerComment = document.getElementById("computerComment");
        const random = Math.floor(Math.random() * 5);
        const computerChoice = options[random].title;
        computerComment.innerText = (`Computer chose ${computerChoice}!`);
        result(playerChoice, computerChoice);
        const points = document.getElementById("points");
        points.innerText = (`You: ${playerWins} / Computer: ${computerWins}`);

    })
});



