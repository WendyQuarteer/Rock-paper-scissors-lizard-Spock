//prepare variables for the options
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");
//make a string of the options for the player to use.
const options = [rock, paper, scissors, lizard, spock];

//add function when player clicks any of the choices.
options.forEach(option => {
    option.addEventListener("click", function () {
        //player's choice
        //prepare variable player's choice, so we can work with it.
        const playerComment = document.getElementById("playerComment");
        const playerChoice = option.title;
        playerComment.innerText = (`You choose ${playerChoice}!`);

        //computer's choice
        const computerComment = document.getElementById("computerComment");
        const random = Math.floor(Math.random() * 5);
        const computerChoice = options[random].title;
        console.log(computerChoice);
        computerComment.innerText = (`Computer chose ${computerChoice}!`);
    })
});

//prepare variable to comment the result.
//let result = document.getElementById("winner");
//result.innerText = (`${winner} won this game!`);


