
function addZ(x) {
    if (x <10){
        x = `0${x}`;
    }
    return x;
}


function colorButton(e) {
    if(e.target.className === 'buttons') {
        console.log('yes');
        (e.target).style.backgroundColor = 'seagreen';
    };
};

function makeButton(amount) {
    let i = 1;
    let buttonInt = setInterval(function(){
        let button = document.createElement('button');
        button.className = 'buttons';
        button.id = `button${i}`;
        button.innerText = `${addZ(i)}`;
        document.querySelector('body').appendChild(button);
        i ++;
    }, 500);

    let endButton = setTimeout(function() {
        clearInterval(buttonInt);
        i = 1;
    }, amount*500);

    
};

makeButton(20);

document.addEventListener('click', colorButton);


