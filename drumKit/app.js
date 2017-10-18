// console.log('hello dude!!!!!'); 

// add this var
let key = "document.getElementsByClassName('key')";


function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //skip if not a transform
    e.target.classList.remove('playing');
    console.log('removeTransition');
}

function playSound(e) {
        // play audio.
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        // key color/size change.
        const key = document.querySelector(`div[data-key=" ${e.keyCode}"]`);
        if(!audio) return;  //stops function if wrong key selected.
        
        console.log('playSound'+ e.keycode)

        // key.classList.add('playing');
// this is where the error is..................................................................
        key.classList.add('playing');
        audio.currentTime = 0;  // allows for audio to run again while still paying.
        audio.play();      
}

const keys = Array.from(document.querySelectorAll('.key'));
// remove class of playing
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

