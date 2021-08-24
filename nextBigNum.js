//codewars challenge
// takes in a number and returns the next biggest number by
// rearranging the digits within the original number

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// 3251 ==> 3521
// 5642 ==> 6542
 
// function nextBigger(n) {
//     // change number into a string to split the number
//     // into an array
//     var numStr = n.toString();
//     // array that will be modified and returned as a joined number.
//     var changeArr = numStr.split('');
//     // array to reverse
//     var numArr = numStr.split('');
//     // reverse the array to loop over
//     var revArr = numArr.reverse();
//     // loop over reveresed array
//     console.log(revArr);
//     for (var i = 0; i < revArr.length; i++) {
//         // variable for current digit;
//         var current = revArr[i];
//         // next element to compare to
//         var j = i+1;
//         var next = revArr[j];
//         // if next is undefined return -1, meaning the whole loop went without
//         // changing the number
//         if (next === undefined) {
//             return -1;
//         }
//         // when the current digit is bigger than the next element, change the number
//         // swap the current and next digits
//         if (current > next) {
//             revArr.splice(i, 2, next, current);
//             // reverse array and join back into a number and return
//             revArr.reverse();
//             return Number(revArr.join(''));
//         }
//     }
// }

// function random(array) {
//     for (let i = array.length -1; i > 0; i--) {
//         let j = Math.floor(Math.random() * i);
//         let k = array[i];
//         array[i] = array[j];
//         array[j] = k;
//         return Number(array.join(''));
//     }
// } 

function nextBigger(n) {
    console.log(n);
    // creates random number with same numbers from input
    // scrambles an input array of numbers randomly, returns them joined into a number.
    
    var string = n.toString();
    var array = string.split('');
    // variable to help index the original array
    var length = array.length - 1;
    console.log(array);
    // slice off the two last digits
    var tens = array.slice(-2);
    // change the order of the last two digits
    tens.reverse();
    // if bigger than original number, return the new order of the digits
    // to the original number
    if (Number(tens.join('')) > Number(array.slice(-2).join(''))) {
        array.splice(-2, 2, tens[0], tens[1]);
        return Number(array.join(''));
    }
    // next slice off the last three digits
    var hundreds = array.slice(-3);
    // move the last digit into the first digit, then find which combo is smaller
    // of the other two numbers in the array, then check to make sure it is bigger
    // than original number and return
    var firstDigit = hundreds.shift();
    hundreds.reverse();
    console.log(hundreds);
    // put the firstDigit in the hundreds array before the last digit when it is smaller
    // than the lastDigit
    if (firstDigit < hundreds[1]) {
        hundreds.splice(1, 0, firstDigit);
    } else {
        hundreds.push(firstDigit);
    }
    console.log(hundreds);
    if (Number(hundreds.join('')) > Number(array.slice(-3).join(''))) {
        array.splice(-3, 3, hundreds[0], hundreds[1], hundreds[2]);
        return Number(array.join(''));
    }
}   


// test cases
var test = 62698; // ==> 62869
console.log(nextBigger(test));

// var test2 = 984054;
// console.log(nextBigger(test2)); ==> 984405


// var test3 = 664786888473;  // ==> 664786888734
// console.log(nextBigger(test3));


// 29963
// 32699