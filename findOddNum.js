// codewars challenge. takes in an array of numbers

// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] shold return 4, because it appears 1 time (which is odd).


function findOdd(A) {
    // create an object to hold the counts of numbers in the array.
    var obj = {};
    // iterate over the array
    for (var i = 0; i < A.length; i++) {
        // if the number is not a defined key in the obj,
        // create a property with the number as the key and the value as one
        var current = A[i];
        if (obj[current] === undefined) {
            obj[current] = 1;
        } else {
            obj[current]++;
        // if the number is already defined within the obj,
        // add one to the value for the count of the number.
        }
    }
    // now there is an object full of properties with keys as the numbers found in the array
    // and the value with how many times that number is found within the array
    // need to return the number that occurs an odd amount of times in a new variable
    var oddValue = 0;
    // create an array of values and an array of keys
    var keys = Object.keys(obj);
    var values = Object.values(obj);
    // iterate over values to see which ones are odd
    for (var j = 0; j < values.length; j++) {
        var count = values[j];
        if (count % 2 === 1) {
            // pass the index of the count into the keys array to place that key as the oddValue
            oddValue = Number(keys[j]);
        }
    }
    // return the oddValue
    return oddValue;
  }

  // test cases

  var test = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];
  console.log(findOdd(test));