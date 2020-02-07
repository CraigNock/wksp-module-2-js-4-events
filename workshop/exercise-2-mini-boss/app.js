

//CLOCK

let timePull = new Date();

console.log(timePull);
let currentTime = document.querySelector('#currentTime');
currentTime.innerText = `${timePull}`;

let timeRefresh = setInterval(function() {
    timePull = new Date();
    currentTime.innerText = `${timePull}`;
}, 1000);

//STOPWATCH
    
    let watchMin = document.querySelector('#watchMin');
    watchMin.innerText = '00';
    let watchSec = document.querySelector('#watchSec');
    watchSec.innerText = '00';
    
    let onOff = 0
    let onCount = 0
    let minCount = 0
    let secCount = 0

    function count() {
        onOff += 1;
        console.log(onOff);
    };
    
    function countMin() {
        watchMin.innerText = `${parseInt(watchMin.innerText) + 1}`
    };
    
    function countSec() {
        watchSec.innerText = `${parseInt(watchSec.innerText) + 1}`
    };
    
    function watchStart(e) {
        // console.log('aaaaa' + onOff);
        if (onOff === 0) {
            onCount = setInterval(count,1000);
            minCount = setInterval(countMin, 60000);
            secCount = setInterval(countSec, 1000);
        } else {
            clearInterval(onCount);
            clearInterval(secCount);
            clearInterval(minCount);
            onOff = 0;
            
        };
    };

stopButton.addEventListener('click', watchStart)



//TIMER

const timerButton = document.querySelector('#timerButton');
const timer = document.querySelector('#timer');

function timerStart(e) {
    timerButton.removeEventListener('click', timerStart);
    let userTime = document.querySelector('#timerInput').value; 
    timer.innerText = userTime;
    const countdown = setInterval(function() {
    timer.innerText = `${timer.innerText - 1}`;
    }, 1000) ;
    let endTime = setTimeout(function(){
        clearInterval(countdown);
        new Audio("./sound/toasty.ogg").play();
        timerButton.addEventListener('click', timerStart);
    }, (userTime * 1000));
};

timerButton.addEventListener('click', timerStart);

