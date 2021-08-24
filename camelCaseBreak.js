// complete the function
function solution(string) {
    // create a var of the alphabet uppercase to search each letter into
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // store the string in an array to manipulate it.
  var stringArray = string.split('');
  // loop over each letter in the array
  for (var i = 0; i < stringArray.length; i++) {
      // current letter to check to see if it is in the string of uppercase aplphabet.
      var current = stringArray[i];
      // if the letter is not in the uppercase string it will be a value of -1.
      // if the letter is in the string, splice the array to add a space
      // if there is a space before the capital letter, do not change the array
      if (upper.indexOf(current) !== -1 && stringArray[i - 1] !== ' ') {
        stringArray.splice(i, 0, " ",);
      }
  }
  // join the array into a string.
  var stringRet = stringArray.join('');
  // return the string
  return stringRet;
}

// TEST CASES
var test1 = 'camelCasing test';
var test2 = 'camelCasingTest'
console.log(solution(test1));
console.log(solution(test2));