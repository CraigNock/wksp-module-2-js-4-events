//add 0
function addZ(x){
    if(x<10){
        x = `0${x}`;
    }
    return x;
}

//make buttons

let button = 0;
let buttonGen = 0;
let genStop = 0;
let AMOUNT = 20;

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
        document.querySelector('#zone').appendChild(button);
        i++;
    },100);
    genStop = setTimeout(() => {
        clearInterval(buttonGen);
        i = 1
    }, AMOUNT*100);

};

//position randomiser + stop overlap. Aka:I should have just made a grid...
let locationX = [];
let locationY = [];

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
        
        bid.style.backgroundColor = 'darkgreen';
        bid.style.color = 'whitesmoke';
    }
};
// if background color increase counter for pressed buttons, when counter == amount of buttons=win

document.querySelector('#start').addEventListener('click', handleMakeButton);
document.addEventListener('click', handleColorButton);



//TIMER
let body = document.querySelector('body');
let finish = document.querySelector('#finish');

let timer = setTimeout(function(){
    document.removeEventListener('click', handleColorButton);
    if (  ){
        body.backgroundColor = 'lime';
        finish.innerText = 'YOU WIN!';
        new Audio('./sounds/Ambition1.mp3').play();
    } else {
        body.backgroundColor = 'black';
        finish.innerText = 'Too Slow';
    };
}, 20000);

function clickFast(e) { ///
    clearInterval(countdown);
    clearTimeout(timer);
    result.style.backgroundColor = 'green';
    result.innerText = 'You Win!';
    result.style.color = 'gold';
    document.removeEventListener('click', clickFast);
}