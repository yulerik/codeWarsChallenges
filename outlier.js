//codewars challenge
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers){
    //your code here
    // takes in array of numbers
    // create an even and odd array to store odd and even numbers, one will end with only
    // one element inside of it, return that number.
    var even = [];
    var odd = [];
    for (var i = 0; i < integers.length; i++) {
        // current integer to see if it is odd or even
        var current = integers[i];
        // check to see if the current number is even or odd.
        if (current % 2 === 0) {
            // if even push to even array
            even.push(current);
        } else {
            // when odd, push to odd array
            odd.push(current);
        }
    }
    // two arrays that are full of even and odd numbers
    // whatever array has a length of one, return the one number
    if (even.length === 1) {
        return even[0] + ' (the only even number)';
    } else {
        return odd[0] + ' (the only odd number)';
    }

}


  //test cases
  var test = [2,4, 0, 100, 4, 11, 2602, 36];
  console.log(findOutlier(test));

