// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
// 
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll a flag to store whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

//remove body padding etc
const body = document.querySelector('body');
body.style.padding = '0';
body.style.margin = '0';

const main = document.querySelector('.result');
//main styling
result.style.display = 'flex';
result.style.justifyContent = 'center';
result.style.alignItems = 'center';
result.style.height = '100vh';
result.style.width = '100vw';
result.style.margin = '0';
result.style.padding = '0';
result.style.backgroundColor = 'red';
result.style.fontSize = '48px';
 result.style.fontSize = '48px';

//timer
const timer = setTimeout (function() {
    result.style.backgroundColor = 'black';
    result.style.color = 'white';
    result.innerText = 'Too Slow!';
    document.removeEventListener('click', clickAlert);
},1000);

//if win result
function clickAlert(e) {
    
    clearTimeout(timer);
    result.innerText = 'Hey, You Won!';
    result.style.backgroundColor = 'green';
    document.removeEventListener('click', clickAlert);
}

document.addEventListener('click', clickAlert);