//codewars challenge

// takes in a string and returns the position of the alphabet for each
// letter.

function alphabetPosition(text) {
    // create alphabet variable with a space at the beginning.
    // index position will be the position of the letter in the alphabet.
    var alphabet = ' abcdefghijklmnopqrstuvwxyz';
    // iterate over the lowercase text
    var lower = text.toLowerCase();
    // create an empty array to push the positions of the letters into.
    var array = [];
    for (var i = 0; i < lower.length; i++) {
      var current = lower[i];
      // create the position variable within the alphabet for each letter
      var position = alphabet.indexOf(current);
      // if the position is within 1-26 add it to the array
      if (position > 0 && position < 27) {
        array.push(position);
      }
    }
    // join the array of position numbers into a string with a space between each index
    var textReturn = array.join(' ');
    // return the string
    return textReturn;
}


  // test cases
  var test = 'one'; // should return '15 14 5'
  console.log(alphabetPosition(test));