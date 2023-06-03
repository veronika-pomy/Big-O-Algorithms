const arr = [1,2,3,4,5,6];

// one input and two nested for loops
// one for loop starts with 0, the other starts with 1
// multiply runtime of nested loops

// first for loop runs for 0(N)
// seconds runs for 0(N-1)

// total runtime complexity 0(N(N-1)) = O(N^2 - N) - we can ignore non-dominant terms

// O(N^2)

function printUnorderedPairs (arrayInput) {
    for (let i = 0; i < arrayInput.length; i++ ) {
        for (let j = 1; j < arrayInput.length; j++ ) {
            console.log(arrayInput[i] + "," + arrayInput[j]);
        }
    }
};

printUnorderedPairs(arr);

// there are two inputs and two nested arrays
// runtime depends on the length of both arrays 
// multiply runtime of nested loops

// O(A*B)

const arr1 = [1,2,3,4,5,6];
const arr2 = [6,5,4,3,2,1];

function printUnorderedPairs2 (arrayInput1, arrayInput2) {
    for (let i = 0; i < arrayInput1.length; i++ ) {
        for (let j = 0; j < arrayInput2.length; j++ ) {
            if (arrayInput1[i] < arrayInput2[j]) {
                console.log(arrayInput1[i] + "," + arrayInput2[j]);
            }
        }
    }
};

printUnorderedPairs2(arr1, arr2);