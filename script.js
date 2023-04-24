/* Game is in 3 parts: - 
Start function
-On start ask for `to what score`.
-Set user input to max possible score
-select a random choice via computer
-compare the choices in regular rock paper scissors manner
score function
-if computer wins add 1 to computer score and vice versa.
-if either score equals to inital user input end game and the scorer wins */
let finalScore;
function start(){
    finalScore = prompt(`To what score do u want 2 play till`, `Enter winning points here`)
}
let compPlay=`none`
function computerChoice(){
    let compChoice = Math.floor((Math.random()*3)+1);
    if (compChoice === 1){
        compPlay = `rock`
    } else if (compChoice === 2){
        compPlay = `paper`
    } else if (compChoice === 3){
        compPlay = `scissors`
    }
    console.log(compPlay)
    }


