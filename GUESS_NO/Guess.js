let random = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userguess = document.querySelector('#guessFeild');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');
const lowORhigh = document.querySelector('.lowORhigh');
const startover = document.querySelector('.resultparas');

let prevguess = [];
const p = document.createElement('p');
let noofguess = 1;
let playgame = true;

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userguess.value);
        validateGuess(guess);
    })
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number.')
    }
    else if (guess < 1) {
        alert('please enter a number greater than 1');
    }
    else if (guess > 100) {
        alert('please enter a number lesser than 101');
    }
    else {
        prevguess.push(guess);
        if(noofguess>=10){
            displayguess(guess);
            dispalymessage('GAME OVER THE NUMBER WAS '+random);
            endgame();
        }
        else{
            displayguess(guess);
            checkguess(guess);
        }
    }
}
function checkguess(guess) {
    if(guess === random) {
        dispalymessage('you guessed right');
        endgame();
    }
    else if(guess<random){
        dispalymessage('the number you guessed is low');        
    }
    else if(guess>random){
        dispalymessage('the number you guessed is bit high');        
    }
}
function displayguess(guess) {
    guessSlot.innerHTML += ` ${guess}`;
    noofguess= noofguess+1;
    remaining.innerHTML = `${11-noofguess}`;
}
function dispalymessage(messsage) {
    lowORhigh.innerHTML = `<h2>${messsage}</h2>`;
}
function endgame(){
    userguess.value = '';
    userguess.setAttribute('disabled', '') ;
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame"> CLICK ME TO START A NEW GAME</h2>`;
    startover.appendChild(p);
    playgame = false;
    newgame();
}
function newgame(){
    const newgamestart = document.querySelector('#newGame');
    newgamestart.addEventListener('click', function(){
         random = parseInt(Math.random() * 100 + 1);
         prevguess = [];
         noofguess = 1;
         guessSlot.innerHTML = '';
         remaining.innerHTML = `${11-noofguess}`;
         userguess.removeAttribute('disabled');
         dispalymessage('');
         startover.removeChild(p);
         playgame = true;
    })
}