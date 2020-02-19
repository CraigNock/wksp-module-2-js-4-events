
//add 0
function addZ(x) {
    if (x<10){
        x = `0${x}`;
    }
    return x;
}

// color buttons
function colorButton(e) {
    let bees = e.target;
    if (bees.className === "buttons"){
        if (bees.style.backgroundColor === 'maroon'){
        bees.style.backgroundColor = 'goldenrod';
        bees.style.color = 'black';
        } else {
            bees.style.backgroundColor = 'maroon';
            bees.style.color = 'whitesmoke'
        };
    };
}

let buttonInt = 0;
let stopButton = 0;

//create buttons
function createButton(amount){
    let i = 1;
    buttonInt = setInterval(function(){
        let button = document.createElement('button');
        button.innerText = `${addZ(i)}`;
        button.className = 'buttons';
        document.querySelector('#zone').appendChild(button);
        i ++;
    }, 200);
    stopButton = setTimeout(function() {
        clearInterval(buttonInt);
        i = 1;
    }, amount*200);
}

//call generate buttons
createButton(20); 


//set listener
document.addEventListener('click', colorButton);