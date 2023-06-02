const arr = [1,2,3,4,5,6];

// 
function printUnorderedPairs (arrayInput) {
    for (let i = 0; i < arrayInput.length; i++ ) {
        for (let j = 1; j < arrayInput.length; j++ ) {
            console.log(arrayInput[i] + "," + arrayInput[j]);
        }
    }
};

// printUnorderedPairs(arr);

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