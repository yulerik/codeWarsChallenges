// codewars two different arrays, one array is the squared number of the other arrays. order does not matter. 
// check to see if they are they same. if all elements are the same, location doesnt matter, return true. all else return false

function comp(array1, array2){
  //your code here
  // if the array lengths dont match return false
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  } else if (array1.length !== array2.length) {
    return false;
  } else {
    // if the array lengths do match check the first array to see if the square of the current index is
    // present in the second array. if the square of the current element isnt present in the second
    // second array return false
    for (var i = 0; i < array1.length; i++) {
      var current = array1[i];
      var square = current * current;
      if (array2.indexOf(square) === -1) {
        return false;
      }
    }
    var array3 = array1;
    // now check the second array and see if the root of the number in the current element is present
    // in the first array
    for (var i = 0; i < array2.length; i++) {
      // copy of array1 to remove elements that are equal to the root
      var root = Math.sqrt(array2[i]);
      // iterate over copy of array1 and remove the element that 
      // the root of the second array element is in.
      var elementToRemove = array3.indexOf(root);
      if (elementToRemove >= 0) {
        array3.splice(elementToRemove, 1);
      }
      // if (array1.indexOf(root) === -1) {
      //   console.log('array1 has no root');
      //   return false;
      // }
    }
    // if array 3 is empty, all squared numbers roots are present in
    // array 1. if length is greater than zero, still a root
    // leftover means the arrays arent equal.
    if (array3.length === 0) {
      return true;
    } else {
      return false;
    }
  } 
}

// test cases

// var array1 = [1, 6, 4, 10, 6, 4, 2, 5, 9, 7, 5, 5, 1, 7, 4, 4, 2, 10];
// var array2 = [16, 1, 100, 49, 1, 16, 4, 25, 4, 100, 49, 81, 17, 25, 25, 36, 16, 36];


var array1 = [3, 10, 9, 1, 7, 7, 0, 0, 6, 1, 0, 3, 10, 10, 0];
var array2 = [49, 9, 81, 0, 1, 0, 100, 1, 9, 0, 100, 36, 1, 100, 49];


var output = comp(array1, array2);
console.log(output);
