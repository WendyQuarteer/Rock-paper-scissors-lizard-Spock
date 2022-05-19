//prepare variables for the options
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");
//make a string of the options for the player to use.
const options = [rock, paper, scissors, lizard, spock];

//add function to display the winner of the current game.
function result(player, computer) {
    let winner = document.getElementById("winner");
    console.log(player);
    console.log(computer)
            if (player === computer)
            {
                winner.innerText = ("It\s a Tie.");
            }
            if (player === rock.title) {
                if (computer === scissors.title || computer === lizard.title) {
                    winner.innerText = ('You win!');
                } else {
                    winner.innerText = ('Computer wins!');
                }
            }
            if (player === scissors) {
                if (computer === lizard.title || computer === paper.title) {
                    winner.innerText = ('You win!');
                } else {
                    winner.innerText = ('Computer wins!');
                }
            }
            if (player === lizard) {
                if (computer === paper.title || computer === spock.title) {
                    winner.innerText = ('Computer wins!');
                } else {
                    winner.innerText = ('You win!');
                }
            }
            if (player === paper) {
                if (computer === rock.title || computer === spock.title) {
                    winner.innerText = ('Computer wins!');
                } else {
                    winner.innerText = ('You win!');
                }
            }
            if (player === spock.title) {
                if (computer === rock.title || computer === scissors.title) {
                    winner.innerText = ('Computer wins!');
                } else {
                    winner.innerText = ('You win!');
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


    })
});



