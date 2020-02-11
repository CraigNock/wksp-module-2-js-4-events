// ooookaaay

// VARIABLES

//elements

const startMenu = document.querySelector('#startMenu')
const start = document.querySelector('#start');
const instruct = document.querySelector('#instruct');
const instructions = document.querySelector('#instructions');
const close = document.querySelector('.close');
const signal = document.querySelector('#signal');
const rings = document.querySelector('.rings');

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
    resetRings();
    result.style.display = 'none';
    startMenu.style.display = 'none';
    signal.style.display = 'none';
    
    
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
    winChecker(); // checks for win condition
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
        winRound('player2');
        p2Count++
    } else if (key === 'p') {
            console.log('q');
            winRound('player1');
            p1Count++
    };
}

function winRound(player) {
    console.log(`${player} won a point!`);
    
    //sprite switch to run, 
    // translate to center,
    //sprite switch to taunt
    // ring disappear
    //reset sprite

    //delay
    newRound = setTimeout(function() {
        startGameHandle();
    }, 1000);
    
}

function resetRings(){
    document.querySelector('#p1_3').style.display = 'none';
    document.querySelector('#p1_2').style.display = 'none';
    document.querySelector('#p1_1').style.display = 'none';
    document.querySelector('#p2_3').style.display = 'none';
    document.querySelector('#p2_2').style.display = 'none';
    document.querySelector('#p2_1').style.display = 'none';
}

//WIN GAME & GIVE POINTS

function winChecker(){
    switch(p1Count){
        case 3 :
            document.removeEventListener('keydown', keyDownHandle);
            document.querySelector('#p1_3').style.display = 'block'; 
            document.querySelector('#p1_2').style.display = 'block';
            document.querySelector('#p1_1').style.display = 'block';
            giveResult('1');
            break;
        case 2 :
            document.querySelector('#p1_2').style.display = 'block';
            document.querySelector('#p1_1').style.display = 'block';
            break;
        case 1 :
            document.querySelector('#p1_1').style.display = 'block';
            break;
    }

    switch(p2Count){
        case 3 :
            document.removeEventListener('keydown', keyDownHandle);
            document.querySelector('#p2_3').style.display = 'block';
            document.querySelector('#p2_2').style.display = 'block';
            document.querySelector('#p2_1').style.display = 'block';
            giveResult('2');
            break;
        case 2 :
            document.querySelector('#p2_2').style.display = 'block';
            document.querySelector('#p2_1').style.display = 'block';
            break;
        case 1 :
            document.querySelector('#p2_1').style.display = 'block';
            break;
    }
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
    //switch sprite for taunt sprite
    restart.addEventListener('click', startGameHandle);
}


function animatePoint(){

}

//INITIAL LISTENERS
start.addEventListener('click', startGameHandle);
instruct.addEventListener('click', showInstructHandle);
