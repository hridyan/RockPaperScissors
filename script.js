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
let scorePlayer;
let scoreRobot;

function start(){
    scorePlayer = 0;
    scoreRobot = 0;
    finalScore = prompt(`To what score do u want 2 play till`, `Enter winning points here`)
    console.clear()
    while (scorePlayer != finalScore|| scoreRobot != finalScore ){
        play();
        if (scorePlayer == finalScore){
            alert(`Player Wins`)
            return
        } else if (scoreRobot == finalScore) {
            alert(`Robot wins`)
            return
        }
    }
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
    }

function play(){
    let yourMove = prompt(`Enter rock, paper or scissors below`,`Enter here`);
    yourMove = yourMove.toString().toLowerCase();
    if (yourMove === 'rock'|| yourMove === 'paper' || yourMove === 'scissors'){
        computerChoice();
        console.log(`Player vs Computer`)
        /*  7 cases
        Computer    Player 
        Comp-move == player-move
        rock vs paper - comp-wins
        paper vs scissor - comp wins
        scissors vs rock - comp wins 
        and opposites */

        if (compPlay === yourMove){
            console.log(`Player played ${yourMove} and computer played ${compPlay}`)
            console.log(`Player score- ${scorePlayer} and Computer score - ${scoreRobot}`)
            console.log(`Tie`)
        } else if (compPlay === `rock` && yourMove ===`paper`){
            scorePlayer+=1;
            console.log(`Player won dis round`)
            console.log(`Player played ${yourMove} and computer played ${compPlay}`)
            console.log(`Player score- ${scorePlayer} and Computer score - ${scoreRobot}`)
        }else if (compPlay === `paper` && yourMove ===`scissors`){
            scorePlayer+=1;
            console.log(`Player won dis round`)
            console.log(`Player played ${yourMove} and computer played ${compPlay}`)
            console.log(`Player score- ${scorePlayer} and Computer score - ${scoreRobot}`)
        }else if (compPlay === `scissors` && yourMove ===`rock`){
            scorePlayer+=1;
            console.log(`Player won dis round`)
            console.log(`Player played ${yourMove} and computer played ${compPlay}`)
            console.log(`Player score- ${scorePlayer} and Computer score - ${scoreRobot}`)
        }
        else if (compPlay === `paper` && yourMove ===`rock`){
            scoreRobot+=1;
            console.log(`Computer won dis round`)
            console.log(`Player played ${yourMove} and computer played ${compPlay}`)
            console.log(`Player score- ${scorePlayer} and Computer score - ${scoreRobot}`)
        }else if (compPlay === `scissors` && yourMove ===`paper`){
            scoreRobot+=1;
            console.log(`Computer won dis round`)
            console.log(`Player played ${yourMove} and computer played ${compPlay}`)
            console.log(`Player score- ${scorePlayer} and Computer score - ${scoreRobot}`)
        }else if (compPlay === `rock` && yourMove ===`scissors`){
            scoreRobot+=1;
            console.log(`Computer won dis round`)
            console.log(`Player played ${yourMove} and computer played ${compPlay}`)
            console.log(`Player score- ${scorePlayer} and Computer score - ${scoreRobot}`)
        }

        
    } else {
        console.log(`Not a valid move`)
        play();
    }
}
