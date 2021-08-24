// codewars challenge

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  //Code here
  // create array of the string to manipulate each word.
  var array = str.split(' ');
  var retArr = [];
  // any special character goes into the nochange array.
  var noChange = [];
  // iterate over each word and create an array for the letters of each word
  for (var i = 0; i < array.length; i++) {
    var letters = array[i].split('');
    // word that will be changed, no special characters
    var change = [];
    // check to see if the current word has a special character in it
    for (var j = 0; j < letters.length; j++) {
      var current = letters[j];
      var special = '~`!#$%^&*+=-[]\\\';,/{}|\":<>?';
      if (special.indexOf(current) === -1) {
        // if the current letter is not a special character, push the letter
        // to the change array.
        change.push(current);
      } else {
        // if indexOf does not equal -1 means this current letter does not get changed.
        // push it to the change array to add on after the retarr has been manipulated
        noChange.push(current);
      }
    }
    // if the change array is empty do not push anything into the retArr.
    if (change.length > 0) {
      // push the first letter of the array of letters to the end, and add 'ay'
    change.push(change[0] + 'ay');
    // delete the first element of the array
    change.splice(0, 1,);
    // push changed letter array into return array
    retArr.push(change.join(''));
    }
  }
  if (noChange.length === 0) {
    return retArr.join(' ');
  } else {
    retArr.push(noChange);
    return retArr.join(' ');
  }
}



//test cases
var test = 'Hello world !';
console.log(pigIt(test));