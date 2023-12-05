// COMP 2132 - Final Project
// Mika Campbell Nishmura A01328907
// Nov 29, 2023

//TODO make object


class WordPair {
    constructor(word, hint) {
        this.word = word;
        this.hint = hint;
    }
    }
    
    WordPair.prototype.getHint = function() {
    return this.hint;
    }
    WordPair.prototype.getWord = function() {
    return this.word;
    }


const word1 = new WordPair ("GOAT", "Think farm inhabitant.");
const word2 = new WordPair ("STOMP", "Something you might do in frustration.");
const word3 = new WordPair ("BOOKKEEPER", "You might meet them at the race course.");
const word4 = new WordPair ("MALLARD", "The male qauckers have green heads.");
const word5 = new WordPair ("CARROT", "Peter Rabbit's root.");
const word6 = new WordPair ("SUBMARINE", "The Nautilus, for one.");

const words = [word1, word2, word3, word4, word5, word6];
