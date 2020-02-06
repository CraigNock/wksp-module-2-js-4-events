// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click anywhere on the screen.
// 
// But this time, let's let the user know how much time they have to actually 'click'.
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// In short, 
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click
// - tell the user how much time they have to click.

// Challenge
// Make the countdown live...

//randomising time

let randTime = randArray[Math.floor(Math.random()*5) +1] ;
const time = document.querySelector('#time');
time.innerText = `${randTime}`;

//countdown
let countdown = setInterval(function() {
    time.innerText =  `${time.innerText -1}`
}, 1000);


//giving the body some body
const body = document.querySelector('body');
body.style.backgroundColor = 'beige';
body.style.margin = '0';
body.style.width = '100vw';
body.style.height = '100vh';
body.style.fontSize = '25px'

//styling for time area
const timeArea = document.querySelector('.time-text');
timeArea.style.textAlign = 'center';
timeArea.style.padding = '1rem';
timeArea.style.margin = '0';
timeArea.style.backgroundColor = 'gold';

//styling initial result area
const result = document.querySelector('.result');
result.style.display = 'flex';
result.style.justifyContent = 'center';
result.style.alignItems = 'center';
result.style.backgroundColor = 'blue';
result.style.margin = '0';
result.style.width = '100%';
result.style.height = '100%';


//timer
let timer = setTimeout(function(){
    document.removeEventListener('click', clickFast);
    clearInterval(countdown);
    result.style.backgroundColor = 'black';
    result.innerText = 'You Died';
    result.style.color = 'red';
}, (randTime*1000));


function clickFast(e) {
    clearInterval(countdown);
    clearTimeout(timer);
    result.style.backgroundColor = 'green';
    result.innerText = 'You Win!';
    result.style.color = 'gold';
    document.removeEventListener('click', clickFast);
}









document.addEventListener('click', clickFast);