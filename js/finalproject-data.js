// COMP 2132 - Final Project
// Mika Campbell Nishmura A01328907
// Nov 29, 2023

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
const word7 = new WordPair ("COAMING", "You'd think you'd use it on your hair...(Kayaker's Edition)");
const word8 = new WordPair ("FETCH", "Like a dog or a wave...(Kayaker's Edition)");
const word9 = new WordPair ("BEARING", "Take it from your compass or an incoming tanker...(Kayaker's Edition)");
const word10 = new WordPair ("PARADISE", "John Milton couldn't find it?");
const word11 = new WordPair ("HAMMER", "_____ it home. Get that point across!");
const word12 = new WordPair ("SOURLY", "With distaste.");

const wordPairs = [word1, word2, word3, word4, word5, word6, word7, word8, word9, word10, word11, word12];
