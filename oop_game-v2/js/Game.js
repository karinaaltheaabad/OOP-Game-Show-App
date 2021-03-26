/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor(missed, phrases, activePhrase) {
        missed = 0; 
        this.phrases = ['Humpty Dumpty', 'Old Mcdonald', 'Baa Baa Black Sheep', 'Twinle Twinkle', 'Itsy Bitsy Spider'];
        this.activePhrase = null; 
        this.startGame(); 
    }

    startGame() {
        const startGameOverlay = document.querySelector('#overlay');
        startGameOverlay.style.display = 'none'; 
        const chosenPhrase = this.getRandomPhrase(); 
        const phraseObject = new Phrase(chosenPhrase);
        phraseObject.addPhraseToDisplay(); 
    }

    getRandomPhrase() {
        const random = Math.ceil(Math.random() * 5);
        const randomPhrase = this.phrases[random];
        return randomPhrase; 
    }

    handleInteraction() {
        const keyboard = document.querySelector('#qwerty');
        keyboard.addEventListener('click', (e) => {
           
            e.target.disabled = true; 
        })        
        
    }

    removeLife() {
        const life = document.querySelector('.tries');
        
        
    }
    checkForWin() {}
    gameOver() {}
}