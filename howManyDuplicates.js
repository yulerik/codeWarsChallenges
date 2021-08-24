// codewars challenge to see how many letters are repeated in a string. case doesnt matter
// return zero if there isnt any repeated letters

function duplicateCount(text){
    //...
    // convert text into an array of lowercase letters
    var lower = text.toLowerCase();
    var array = lower.split('');
    // create blank object to pass letters and their quantities to as keys and values
    var obj = {};
    // iterate over the array
    for (var i = 0; i < array.length; i++) {
      // if obj with the current letter in the array is not defined in the array
      // add that letter as the key and set the value to one.
      var letter = array[i];
      if (obj[letter] === undefined) {
        obj[letter] = 1;
      } else {
        // if letter is already in the obj. add one to the value of the current letter
        obj[letter]++;
      }
    }
    // find any value over 1 in the values, meaning that letter is repeated
    // empty array to place the values that are repeated.
    var repeat = [];
    // create an array of the values of the letters.
    var values = Object.values(obj);
    // iterate over array of values and if it is larger than one push that value to 
    // the repeat array
    for (var j = 0; j < values.length; j++) {
      var current = values[j];
      if (current > 1) {
        repeat.push(current);
      }
    }
    // return the number of repeated letters, which is the length of the array
    return repeat.length;
  }