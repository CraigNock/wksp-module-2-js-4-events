

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

// const stopButton = document.querySelector('#stopButton');
// let watchMin = document.querySelector('#watchMin');
// let watchSec = document.querySelector('#watchSec');

// function dubDig(num) {
//         if (num < 10) {
//             num = "0" + num;
//         }
//         return num;
//     }

//     function watchStart(e) {
//     // let watchPull = new Date(2020,02,06,00,00,00);
//     console.log(watchPull);
//     let minPull = dubDig(timePull.getMinutes() - timePull.getMinutes());
//     console.log(minPull);
//     let secPull = dubDig(watchPull.getSeconds());

//     let watchRefresh = setInterval(function() {
//         watchMin.innerText = `${minPull}`;
//         watchSec.innerText = `${secPull}`;
//     }, 1000);
// };





    
    
    
    let watchMin = document.querySelector('#watchMin');
    watchMin.innerText = '00';
    let watchSec = document.querySelector('#watchSec');
    watchSec.innerText = '00';
    
    let onOff = 0
    
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
        console.log('aaaaa' + onOff);
        if (onOff === 0) {
            let onCount = setInterval(count,1000);
            let minCount = setInterval(countMin, 60000);
            let secCount = setInterval(countSec, 1000);
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
let userTime = 10; //
timer.innerText = userTime;

function timerStart(e) {
    const countdown = setInterval(function() {
    timer.innerText = `${timer.innerText - 1}`;
    }, 1000) ;
    let endTime = setTimeout(function(){
        // document.removeEventListener('click', timeStart);
        clearInterval(countdown);
    }, (userTime * 1000));
};

timerButton.addEventListener('click', timerStart);