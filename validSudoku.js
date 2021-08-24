// codewars challenges.

// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, 
// and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, 
// which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.
// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

// Examples
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]); // => true
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2], 
//   [6, 7, 2, 1, 9, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]); // => false




function validSolution(board){
    // takes in an array of arrays,
    // create three arrays going from one to nine
    // splice out each number while iterating through the checks,
    // horizontal, vertical, and the nine by nine board.
    // if each number within the array is splice out the lenght will be zero,
    // meaning that all numbers are present and its true, if not false
    for (var i = 0; i < board.length; i++) {
        console.log(board[i]);
        console.log(i);
        // var horizontalArray = [1, 2, 3, 4, 5,6, 7, 8, 9];
        // var verticalArray = [1, 2, 3, 4, 5,6, 7, 8, 9];
        for (var j = 0; j < board[i].length; j++) {
            var current = board[i][j];
            console.log(j);
            // if cell is empty by placeholder zero return false
            if (current > 9 || current < 1) {
                return false;
            }
            if (board[i].filter(number => number === current).length > 1) {
                return false;
            }


            // splice out the number that is in the
            // if (horizontalArray.indexOf(current) === -1) {
            //     console.log(current);
            //     return false;
            // } else {
            //     horizontalArray.splice(horizontalArray.indexOf(current));
            // }
        }
    }
  }


// test cases
var test = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
];
var test2 = [
    [1,2,3,4,5,6,7,8,9],
    [7,8,9,6,3,4,5,2,1]
];
console.log(validSolution(test2));
// console.log(validSolution(test));   