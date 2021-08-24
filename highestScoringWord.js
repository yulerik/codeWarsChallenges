// codewars challenge
// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.



function high(x){
    // first, break up the string into words in array to access them.
    var words = x.split(' ');
    var arrayOfSums = [];
    // loop over the array of words to access each word individually.
    for (var i = 0; i < words.length; i++) {
        // array of letters for the current word.
        var sum = 0;
        var current = words[i];
        var letters = current.split('');
        // loop over the array of letters to add up the total score for the word.
        for (var j = 0; j < letters.length; j++) {
            var currentLetter = letters[j];
            // create a string of the alphabet, with a space at the beginning. that way
            // we can use the index of position within the string as the score for the
            // current letter. ie a=1, b=2 and so forth
            var alphabet = ' abcdefghijklmnopqrstuvwxyz';
            // add the index position as the score to the sum
            var score = alphabet.indexOf(currentLetter);
            sum+= score;
            // if loop is at the last index of current word, push the sum to the sum array outside
            // of current loop.
            if (j === letters.length - 1) {
                arrayOfSums.push(sum);
            }
        }
    }
    // now that we have two arrays full of words and their scores.
    // find the largest number in the array of Sums, if their is a tie, use the first number.
    // store the index position of the largest number and return that word
    var high = 0;
    var large = 0;
    for (var k = 0; k < arrayOfSums.length; k++) {
        var currentSum = arrayOfSums[k];
        if (currentSum > large) {
            large = currentSum;
            high = k;
        }
    }
    // return the word with the highest score
    return words[high];
}


// test cases
 var test = 'this is a sentence full of words';
 console.log(high(test));