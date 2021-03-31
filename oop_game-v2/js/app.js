/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startButton = document.querySelector("#btn__reset");
const keyboard = document.querySelectorAll(".key");
let game = null;

/**
 * event listener to the start button and starts a new game by calling on a new game object
 */
startButton.addEventListener('click', (e) => {
    game = new Game(); 
    game.startGame();
});

/**
 * event listener for keyboard letters and calls handleInteraction within game class
 */
keyboard.forEach(letter => {
    letter.addEventListener('click', (e) => {
        game.handleInteraction(e.target); 
    })
})


