// // codewars challenge
// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.
// In effect: 89 = 8^1 + 9^2
// The next number in having this property is 135.
// See this property again: 135 = 1^1 + 3^2 + 5^3
// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
// Let's see some cases:
// sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]
// sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range [a, b] the function should output an empty list.
// sumDigPow(90, 100) == []

function sumDigPow(a, b) {
    // Your code here
    // takes in two numbers to be the range. find the numbers within
    // that range that are a eureka number ie (89 = 8**1 + 9**2)
    // another example is (135 = 1**1 + 3**2 + 5**3)
    // return array full of numbers within range of numbers that equal
    // a eureka number. start with empty array, if no numbers within 
    // range equal eureka number, return blank array.
    var retArr = [];
    // loop through the range of numbers from a to b.
    // create array for numbers to go to get sum later.
    var arrayOfToPowers = [];
    for (var num = a; num <= b; num++) {
      // convert each number into a string to access each digit.
      var numStr = num.toString();
      var sum = 0;
      // iterates over the length of the string to access each given string
      // at index 0 square is 1, index 1 square is 2, etc.
      for (var i = 0; i < numStr.length; i++) {
        var currentNum = Number(numStr[i]);
        var power = i + 1;
        var numToPower = currentNum**power;
        sum+= numToPower;
      }
      if (sum === num) {
          retArr.push(num);
      }
    }
    return retArr;
  }
  
  
  //test cases
  // sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]
  
  // sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
  
  sumDigPow(88, 91);
  console.log(sumDigPow(1,1000));
  