//add 0
function addZ(x){
    if(x<10){
        x = `0${x}`;
    }
    return x;
}


//VARIABLES
let button = 0;
let buttonGen = 0;
let genStop = 0;
let AMOUNT = Math.floor(Math.random() * 19) +1 ;
let pressCount = 0;

let countdown = 0;
let timer = 0;
let winCheck = 0;

let locationX = [];
let locationY = [];

const body = document.querySelector('body');
const finish = document.querySelector('#finish');
const timeText = document.querySelector('.time-text');
const time = document.querySelector('#time');
const zone = document.querySelector('#zone');


//make buttons
function handleMakeButton(e){
    document.querySelector('#start').removeEventListener('click', handleMakeButton);
    (e.target).style.display = 'none';
    let i = 1
    buttonGen = setInterval(function(){
        button = document.createElement('button');
        button.className = 'buttons';
        button.id = `${addZ(i)}`;
        button.innerText = `${addZ(i)}`
        randPos(button);
        zone.appendChild(button);
        i++;
    },100);
    genStop = setTimeout(() => {
        clearInterval(buttonGen);
        i = 1
    }, AMOUNT*100);
    checkForWin()
    fullTimer()
};

//position randomiser + stop overlap. Aka:I should have just made a grid...
function randPos(name) {
    let x = Math.random() *100;
    let y = Math.random() *100;
    
    for (let z=0 ; z<20 ; z++){
        while ( x === locationX[z] && y === locationY[z]){
            x = Math.random() *100;
            y = Math.random() *100;
        };
    }
    locationX.push(x, x+1, x-1, x+1, x-1);
    locationY.push(y, y+1, y-1, y-1, y+1);

    name.style.position = 'absolute';
    name.style.top = `${x}%`;
    name.style.left = `${y}%`;
};


//color buttons
function handleColorButton(e) {
    let bid = e.target;
    if (bid.className === 'buttons'){
        console.log('y');
        bid.className = 'pressed';
        pressCount++;
        
    };
};
// if background color increase counter for pressed buttons, when counter == amount of buttons=win

//WIN CHECKER & win result
function checkForWin(){
    let winCheck = setInterval(function(){
        if ( pressCount === AMOUNT ){
            console.log('win');
            clearInterval(countdown);
            clearInterval (winCheck);
            clearTimeout(timer);
            document.removeEventListener('click', handleColorButton);
            body.style.backgroundColor = 'orange';
            finish.style.display = 'block';
            finish.style.color = 'cyan';
            finish.style.borderColor = 'darkcyan';
            finish.innerText = 'YOU WIN!';
            new Audio('./sounds/Ambition1.mp3').play();
        };
        
    }, 100);
};

//TIMER
function fullTimer(){
    //countdown
    timeText.style.display = 'block';
    time.innerText = `${AMOUNT * 2}`;
    countdown = setInterval(function() {
        time.innerText =  `${time.innerText -1}`
    }, 1000);
    //timer itself & lose result
    timer = setTimeout(function(){
        document.removeEventListener('click', handleColorButton);
        body.style.backgroundColor = 'black';
        finish.innerText = 'Too Slow';
        finish.style.display = 'block';
        clearInterval(countdown);
    }, AMOUNT*1500);
};


    document.querySelector('#start').addEventListener('click', handleMakeButton);
    document.addEventListener('click', handleColorButton);

