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

// A number with digits d can have a value of up to 10^d
// Then d = log n

// Runtime complexity is O(log n)
