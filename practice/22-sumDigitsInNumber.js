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

