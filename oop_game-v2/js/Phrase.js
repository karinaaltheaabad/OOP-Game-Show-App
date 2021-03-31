/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * adds a phrase to index.html for display 
     * @param none
     */
    addPhraseToDisplay() {
        let phrase = document.querySelector("#phrase");
        let phraseDisplay = ''; 
        for (const c of this.phrase) {
            if (c != ' ') {
                phraseDisplay += `\n\t\t<li class=\"hide letter ${c}\">${c}</li>`;
            } else {
                phraseDisplay += `\n\t\t<li class=\"space\"> </li>`;
            }
        }

        phrase.innerHTML = phraseDisplay;
    }

    /**
     * checks if the letter is included in the phrase 
     * @param {*} letter 
     * @returns boolean value
     */
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true; 
        }
        return false;
    }

    /**
     * shows matched letter selected 
     */
    showMatchedLetter(letter) {
        const letters = document.querySelectorAll('.letter');

        letters.forEach(phraseLetter => {
            if (phraseLetter.classList.contains(letter.innerHTML)) {
                phraseLetter.classList.add('show');
                phraseLetter.classList.remove('hide');
            }
        })
    }
}