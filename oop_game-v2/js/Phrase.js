/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    //adds letter placeholders to display when the game starts
    addPhraseToDisplay() {
        let phrase = document.querySelector("#phrase");
        let phraseDisplay = '';
        console.log(this.phrase);
        for (const c of this.phrase) {
            if (c != ' ') {
                phraseDisplay += `\n\t\t<li class=\"hide letter ${c}\">${c}</li>`;
            } else {
                phraseDisplay += `\n\t\t<li class=\"space\"> </li>`;
            }
        }

        phrase.insertAdjacentHTML('afterbegin', phraseDisplay);
        console.log(phrase);
    }

    checkLetter() {

    }

    showMatchedLetter() {
        
    }

}