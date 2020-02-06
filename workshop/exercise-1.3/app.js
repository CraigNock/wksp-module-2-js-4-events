// Exercise 1.3
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH! (This is the last time.)
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click the screen.

// It would be a good idea to create a new function that will manage the whole game.




//establish body
const body = document.querySelector('body');
body.style.width = '100vw';
body.style.height = '100vh';
body.style.padding = '0';
body.style.margin = '0';

//hide text until start
const timeText = document.querySelector('.time-text');
timeText.style.visibility = 'hidden';

// button to activate game
const button = document.createElement('button');
    button.innerText = 'Start The Game!'
    button.id = 'button'
document.querySelector('body').append(button);
// have button activate game
document.querySelector('#button').addEventListener('click', startGame);


//GAME
function startGame(){
    event.stopPropagation();
    timeText.style.visibility = 'visible';

    //random time generator
    function randomizer(min, max) {
        return Math.floor(Math.random() * (max-min) + min)
    };
    const TIME = randomizer(1,5);
    console.log(TIME);

    //timer
    const timeDisplay = document.querySelector('#timer');
    timeDisplay.innerText = `${TIME}`;
    //countdown
    const countdown = setInterval(function() {
        timeDisplay.innerText = `${timeDisplay.innerText - 1}`;
    }, 1000) ;
    //timer lose
    const timeLimit = setTimeout(function() {
        document.removeEventListener('click', clickQuick);
        clearTimeout(countdown);
        clearTimeout(timeLimit);
        result = document.querySelector('.result');
        result.innerText = 'Too Slow';
    } , (TIME*1000));

    //event win
    function clickQuick(e) {
        document.removeEventListener('click', clickQuick);
        clearTimeout(countdown);
        clearTimeout(timeLimit);
        result.innerText = 'Chicken Dinner'
    }

    //event activate
    document.addEventListener('click', clickQuick);
};






