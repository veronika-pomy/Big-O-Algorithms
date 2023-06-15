const testNumber = 4444;

function sumDigits (input) {

    let sumOfDigits = 0;

    while (input > 1) {
        sumOfDigits += input % 10;
        input = Math.floor(input / 10);
    };

    console.log(sumOfDigits);
};

sumDigits(testNumber); // should console log 16

// Big O Time Complexity Explanation 

