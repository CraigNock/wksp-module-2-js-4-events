// ooookaaay

// VARIABLES

//elements

const startMenu = document.querySelector('#startMenu')
const start = document.querySelector('#start');
const instruct = document.querySelector('#instruct');
const instructions = document.querySelector('#instructions');
const close = document.querySelector('.close');
const signal = document.querySelector('#signal');


const result = document.querySelector('#result');
const restart = document.querySelector('#restart');

//interval,timeout 
let signalTimer = 0;
let newRound = 0;
let winCheck = 0;

//misc 
let p1Count = 0;
let p2Count = 0;

//random-between generator
function randy(min, max){ 
    let rand = Math.floor((Math.random()*(max - min)) + min);
    return rand;
};


//START MENU
//INSTRUCTIONS
function showInstructHandle(e){
    instructions.style.display = 'block'
    startMenu.style.display = 'none'
    close.addEventListener('click', closeInstructHandle);
    instruct.removeEventListener('click', showInstructHandle);
};

function closeInstructHandle(e){
    instructions.style.display = 'none'
    startMenu.style.display = 'block'
    close.removeEventListener('click', closeInstructHandle);
    instruct.addEventListener('click', showInstructHandle);
};

//START SIGNAL
function setStartTime() {
    let signalTimer = setTimeout(function(){
        signal.style.display = 'block';
        signal.style.top = `${randy(10,90)}%`;
        signal.style.left = `${randy(10,90)}%`;
        signal.style.transform = `rotate(${randy(0,361)}deg)`;
    }, randy(0,6)*1000);
};

//START GAME
function startGameHandle(e){
    restart.removeEventListener('click', startGameHandle);
    start.removeEventListener('click', startGameHandle)
    instruct.removeEventListener('click', showInstructHandle);
    close.removeEventListener('click', closeInstructHandle);
    result.style.display = 'none';
    startMenu.style.display = 'none';
    signal.style.display = 'none';
    
    winChecker(); // starts checker for win condition
    setStartTime(); //starts signal maker
    document.addEventListener('keydown', keyDownHandle);

}

//GAME





//GET POINT
function keyDownHandle(e){
    document.removeEventListener('keydown', keyDownHandle);
    if (signal.style.display === 'none') {
        whoEarly(e.key);
    } else {
        whoPoint(e.key);
    }
    
    
}

// WIN/LOSE ROUND
function whoPoint(key) {
    if (key === 'q') {
    console.log('q');
    winRound('Player 1');
    p1Count+=3
    } else if (key === 'p') {
        console.log('p');
        winRound('Player 2')
        p2Count++
    };
};

function whoEarly(key) {
    if (key === 'q') {
        console.log('p');
        winRound('Player 2');
        p2Count++
    } else if (key === 'p') {
            console.log('q');
            winRound('Player 1');
            p1Count++
    };
}

function winRound(player) {
    console.log(`${player} won a point!`);
    //add ring to area?
    //animate
    //delay
    newRound = setTimeout(function() {
        startGameHandle();
    }, 1000);
    
}

//WIN GAME

function winChecker(){
    winCheck = setInterval(function() {
        if (p1Count === 3) {
            document.removeEventListener('keydown', keyDownHandle);
            giveResult('1');
        } else if (p2Count === 3){
            document.removeEventListener('keydown', keyDownHandle);
            giveResult('2');
        };
    }, 500);
}

function giveResult(winner){
    clearTimeout(newRound);
    clearTimeout(signalTimer);
    clearInterval(winCheck);
    document.querySelector('#winner').innerText = `${winner}`;
    result.style.display = 'block';
    signal.style.display = 'none';
    p1Count = 0;
    p2Count = 0;
    restart.addEventListener('click', startGameHandle);
}


//LISTENERS
start.addEventListener('click', startGameHandle);
instruct.addEventListener('click', showInstructHandle);
