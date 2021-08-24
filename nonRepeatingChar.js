// codewars challenge
// return the first character that doesnt repeat within a string

function firstNonRepeatingLetter(s) {
    // Add your code here
    // if the string is empty, return an empty string
    if (s.length === 0) {
        return '';
    }
    // case doesnt matter. make the whole string lowercase.
    var lower = s.toLowerCase();
    // create an array to loop over
    var array = lower.split('');
    // iterate over the array of letters
    for (var i = 0; i < array.length; i++) {
      var current = array[i];
      // when the first letter filter out of the array is only one, meaning only
      // one instance it appears, return that letter in the original string.
      if (array.filter(letter => letter === current).length === 1) {
          return s[i];
      }
    }
    // if the iteration does not return a character, no characters only show up once,
    // return an empty string
    return '';
  }

  //test cases

  var test = 'STrings';
  console.log(firstNonRepeatingLetter(test));