const arr = [1,2,3,4,5,6];

// nested, big O (N^2) - quadratic time, have to loop over each el in the array and then loop again for each of those elements - multiply O(N)*O(N)
function printPairs (arrayInput) {
    for (let i = 0; i < arrayInput.length; i++ ) {
        for (let j = 0; j < arrayInput.length; j++ ) {
            console.log(arrayInput[i] + "," + arrayInput[j]);
        }
    }
};

printPairs(arr);