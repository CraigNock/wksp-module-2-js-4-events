// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, let them know that they did it!

// Hints:
// - Target the <body>

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

const main = document.querySelector('.main');
main.style.display = 'flex';
main.style.justifyContent = 'center';
main.style.alignItems = 'center';
main.style.height = '100vh';
main.style.backgroundColor = 'red';


function clickAlert(e) {
    const fade = setTimeout (function() {
        main.innerText = '';
        main.style.backgroundColor = 'red';
        clearTimeout(fade);
    }, 2000);
    main.innerText = 'Hey, way to click man';
    main.style.backgroundColor = 'green';
}

document.addEventListener('click', clickAlert);