
let timePull = new Date();

console.log(timePull);
let currentTime = document.querySelector('#currentTime');
currentTime.innerText = `${timePull}`;

let timeRefresh = setInterval(function() {
    timePull = new Date();
    currentTime.innerText = `${timePull}`;
}, 1000);






//TIMER

const countdown = setInterval(function() {
    timeDisplay.innerText = `${timeDisplay.innerText - 1}`;
}, 1000) ;