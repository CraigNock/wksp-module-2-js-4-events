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
        // while ((x <== (locationX[z] + 10)) ||  (x >== (locationX[z] - 10))  && 
        // (y <== (locationY[z] + 10)) ||  (y >== (locationY[z] - 10))){
            x = Math.random() *100;
            y = Math.random() *100;
        };
    }

    //padding to prevent overlap?
    // let xPad = []
    // let yPad = []
    // for (let p = 0 ; p<10 ; p++)



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
        if (bid.style.backgroundColor === 'darkgreen'){
            bid.style.backgroundColor = 'goldenrod';
            bid.style.color = 'black';
        } else {
            bid.style.backgroundColor = 'darkgreen';
            bid.style.color = 'whitesmoke';
        }
    }
};


document.querySelector('#start').addEventListener('click', handleMakeButton);
document.addEventListener('click', handleColorButton);