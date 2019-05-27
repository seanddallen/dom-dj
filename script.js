// STEPS: 
// 1) add keypress listener 
// 2) add Play function 
// 3) add 'playing' class 
// 4) remove 'playing' class (when transition ends, not when sound ends)


//Add event listener on any keydown to trigger sound
//1. select all audio & .key elements
//2. Play sound
//3. Add 'playing' class 
window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //to access/play audio element
    if (!audio) return;

        audio.currentTime = 0; //sets time to 0 to play again right away
    audio.play()


    const key = document.querySelector(`div[data-key="${e.keyCode}"]`); //to add 'playing' class name 
    key.classList.add('playing');

});


//1. Select all keys
//2. loop over all keys
//3. Add event listener to trigger remove 'playing' class
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', (e) => {
    console.log(e)
    if(e.propertyName === 'transform'){
        e.target.classList.remove('playing');
    }
}));


//1. access the element
//2. handle event
//3. append DOM