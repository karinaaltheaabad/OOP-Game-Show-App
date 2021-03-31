/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

let phraseObject = null; 
let startGameOverlay = null;


class Game {

    constructor() {
        this.missed = 0; 
        this.phrases = ['Humpty Dumpty', 'Old Mcdonald', 'Baa Baa Black Sheep', 'Twinle Twinkle', 'Itsy Bitsy Spider'];
        this.activePhrase = null; 
    }

    /**
     * sets up game and selects a random phrase to display
     */
    startGame() {
        startGameOverlay = document.querySelector('#overlay'); 
        startGameOverlay.style.visibility = 'hidden'; 
        this.activePhrase = this.getRandomPhrase(); 
        phraseObject = new Phrase(this.activePhrase);
        phraseObject.addPhraseToDisplay(); 
    }

    /**
     * gets a random phrase from the phrases array
     * @returns random phrase from phrases array
     */
    getRandomPhrase() {
        const random = Math.floor(Math.random() * 5);
        const randomPhrase = this.phrases[random];
        return randomPhrase; 
    }

    /**
     * code logic of the game whenever user clicks on key 
     * @param {*} value 
     * @returns none 
     */
    handleInteraction(value) {
        if (this.activePhrase.toLowerCase().includes(value.innerHTML)) {
            phraseObject.showMatchedLetter(value);
            value.classList.add('chosen');
            if (this.checkForWin()) {
                this.gameOver();
            }
        } else {
            value.classList.add('wrong');
            this.removeLife(); 
        }
    }

    /**
     * removes a life whenever user clicks on incorrect key
     * @param none
     * @returns none 
     */
    removeLife() {
        let removeLife = document.querySelector('img[src="images/liveHeart.png"]');
        removeLife.src = "images/lostHeart.png";
        this.missed++;

        if (this.missed == 5) {
            this.gameOver(); 
        }
    }

    /**
     * checks if the user has won the game 
     * @param none
     * @returns boolean value depending on result
     */
    checkForWin() {
        const activeLetters = document.querySelectorAll('.letter');

        for (let i = 0; i < activeLetters.length; i++) {
            if (activeLetters[i].classList.contains('hide')) {
                return false;
            }
        }

        return true; 
    }
        
    /**
     * displays overlay and sets display message to corresponding result 
     * @param none
     */
    gameOver() {
        startGameOverlay.style.visibility = 'visible';
        const gameOverHTML = document.querySelector('#game-over-message');
        let display = '';

        if (this.missed == 5) {
            startGameOverlay.className = 'lose';
            display += `Try again next time!`;
        } else {
            startGameOverlay.className = 'win';
            display += `Congratulations! You won!`;
        }
        
        gameOverHTML.innerHTML = display; 
        this.resetGame();
    }

    /**
     * HELPER FUNCTION
     * resets all and prepares for new game 
     * @param none 
     */
    resetGame() {
        this.resetLives();
        this.resetKeyboard();
    }

    /**
     * HELPER FUNCTION 
     * resets the lives and displays live heart 
     * @param none 
     * 
     */
    resetLives() {
        let addLife = document.querySelectorAll('img[src="images/lostHeart.png');
        
        addLife.forEach(heart => {
            heart.src = "images/liveHeart.png";
        })
    }

    /**
     * HELPER FUNCTION 
     * resets keyboard for styling
     * @param none
     */
    resetKeyboard() {
        const keyboard = document.querySelectorAll('.key');

        keyboard.forEach(key => {
            key.className = 'key';
        })
    }
}