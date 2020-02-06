

//event listener that listens for 'keydown'
    //if 'arrow up' 
        //grow balloon
        //if balloon bigger than x
            // remove event listner
            //remove balloon / add explosion (emoji)
            //grow explosion incrementally (css)
                //if explosing size y
                    //stop grow
                    //fadeout
            
    // if 'arrow down'
        //if balloon bigger than z, make balloon smaller
                //shrink balloon


const balloon = document.getElementById('balloon');

//so store globally balloon size
let balloonSize = 12;
balloon.style.fontSize = `${balloonSize}px`;

//caps usually for global variables that affect a lot, easy to spot
const MIN_SIZE = 6;
const INCREMENT = 2;
const MAX_SIZE = 72;
const MAX_EXPLOSION_SIZE = 300;


function handleKeyDown(event) {
    //tells you what key is pressed
    console.log(event.key);
        //if 'arrow up' 
    if (event.key === 'ArrowUp') {
        console.log('UP');
        //grow balloon
        balloonSize += INCREMENT;
            //to update visual size
        balloon.style.fontSize = `${balloonSize}px`;
        //if balloon bigger than x
        if (balloonSize > MAX_SIZE) {
            // remove event listner
            document.removeEventListener('keydown', handleKeyDown);
            //remove balloon / add explosion (emoji)
            //balloon already targeted at top
            balloon.innerText = '💥'
            //grow explosion incrementally (css)
            const splody = setInterval(function(){
                balloonSize += 10
                balloon.style.fontSize = `${balloonSize}px`;
                //if explosion size y
                if (balloonSize >= MAX_EXPLOSION_SIZE) {
                    //stop growing
                    clearInterval(splody);
                    //fadeout
                    //uses transition set in css
                    balloon.style.opacity = '0';
                }
                
                
            }, 30);
        }

    // if 'arrow down'
    } else if (event.key === 'ArrowDown') {
        console.log('DOWN');        
    
    //if balloon bigger than z, 
        if (balloonSize >= MIN_SIZE) {
            // make balloon smaller
            balloonSize -= INCREMENT;
            //to update visual size
            balloon.style.fontSize = `${balloonSize}px`;
        }
    };
};






//add event listner at the end of your code
document.addEventListener('keydown', handleKeyDown);