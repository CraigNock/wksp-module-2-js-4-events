// ooookaaay

//variables for parts

const start = document.querySelector('#start');
const instruct = document.querySelector('#instruct');
const instructions = document.querySelector('#instructions');
const close = document.querySelector('.close');




//START MENU




// start.addEventListener('click', startGame);
instruct.addEventListener('click', showInstruct);

//INSTRUCTIONS
function showInstruct(e){
    instructions.style.display = 'block'
    instruct.style.display = 'none'
    start.style.display = 'none'
    close.addEventListener('click', closeInstruct);
    instruct.removeEventListener('click', showInstruct);
};

function closeInstruct(e){
    instructions.style.display = 'none'
    instruct.style.display = 'block'
    start.style.display = 'block'
    close.removeEventListener('click', closeInstruct);
    instruct.addEventListener('click', showInstruct);
};

//GAME
let p1Count = 0;
let p2Count = 0;

//see balloon for keypress

//GET POINT

//WIN

