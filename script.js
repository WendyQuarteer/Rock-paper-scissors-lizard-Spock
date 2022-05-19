//prepare variables for the options
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");
//make a string of the options for the player to use
const options = [rock, paper, scissors, lizard, spock];
console.log(options);

//prepare variable player's choice, so we can work with it
let playerChoice = document.getElementById("chosenButton");
//console.log(playerChoice.innerText);

//add function when player clicks any of the choices
options.forEach(option => {
    option.addEventListener("click", function () {

        playerChoice.innerText = (`You choose ${option.title}!`);
    })
});





//prepare variable for comment each time player makes a choice.
//let playerChoice = document.getElementById("chosenButton");
//playerChoice.innerText = (`You choose ${options[]`};
//prepare variable for comment each time computer makes a choice.
//let computerChoice = document.getElementById("computerChose");
//computerChoice.innerText = (`I choose ${ }!`)
//prepare variable to comment the result.
//let result = document.getElementById("winner");
//result.innerText = (`${winner} won this game!`);


