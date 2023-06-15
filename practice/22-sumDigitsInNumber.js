const testNumber = 4444;
const testNumber2 = 1000;

function sumDigits (input) {

    let sumOfDigits = 0;

    while (input >= 1) {
        sumOfDigits += input % 10;
        input = Math.floor(input / 10);
    };

    console.log(sumOfDigits);
};

sumDigits(testNumber); // should console log 16

sumDigits(testNumber2); // should console log 1

// Big O Time Complexity Explanation 

// The runtime is the number of digits in the number

// A number with digits d can have a value of up to 10^d (not including)
    // 4 digit number can have a value of 10^4 or 10,000 
// Then d = log n

// Runtime complexity is O(log n)

// Example 1: 

// input = 4378;    

// Iteration 1
//     sum = 8;
//     input = 437;
// Iteration 2
//     sum = 15;
//     input = 43;
// Iteration 3
//     sum = 18;
//     input = 4;
// Iteration 4
//     sum = 22;
//     input = 0.4 - less than 1, stop iteration

// Example 2: 

// input = 1000;    

// Iteration 1
//     sum = 0;
//     input = 100;
// Iteration 2
//     sum = 0;
//     input = 10;
// Iteration 3
//     sum = 0;
//     input = 1;
// Iteration 4
//     sum = 1;
//     input = 0.1 - less than 1, stop iteration