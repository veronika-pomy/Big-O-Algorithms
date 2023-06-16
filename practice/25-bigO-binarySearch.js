const sortedArray =  [
    1, 2, 2, 3, 3,
    3, 4, 6, 6, 8,
    9
];

const targetOne = 1;
const targetTwo = 24;

// Iterative Approach

function binarySearch(sortedArray, target) {
    let rightIndex = sortedArray.length - 1;
    let leftIndex = 0;

    while (leftIndex <= rightIndex) {

        let mid = Math.floor((leftIndex + rightIndex)/2);

        if (sortedArray[mid] === target) {
            return mid; // arr index where target value is found
        };

        if (sortedArray[mid] < target) {
            leftIndex = mid + 1;
        } else {
            rightIndex = mid - 1;
        };
    };
    return -1; // target value not in the array
};

const resultOne = binarySearch(sortedArray, targetOne);

console.log(`Index of the target value ${targetOne} in the array ${sortedArray} is ${resultOne}.`);
// should print 0

const resultTwo = binarySearch(sortedArray, targetTwo);

console.log(`Index of the target value ${targetTwo} in the array ${sortedArray} is ${resultTwo}.`);
// should print -1

// Recurcive Approach

// function binarySearchRecurcive (sortedArray, target) {

// };

// const resultOneRecursive = binarySearch(sortedArray, targetOne);

// console.log(`Index of the target value ${targetOne} in the array ${sortedArray} is ${resultOneRecursive}.`);
// should print 0

// const resultTwoRecursive = binarySearch(sortedArray, targetTwo);

// console.log(`Index of the target value ${targetTwo} in the array ${sortedArray} is ${resultTwoRecursive}.`);
// should print -1

// Time Complexity Explanation 
    // Every step of the algorithm cuts the number of problem steps in half 
    // This happens at comparision of mid to target, because the array is sorted we only need to keep checking one side of array 
    // for array of lenth N:
    // Level 1: N choices
    // Level 2: N/2 choices
    // Level 3: N/4 choices 
    // ...
    // Unitl last step would be 1
    
    // Numer of steps decreses by half with each step N/2 + N/4 + N/8 + ... + 2 + 1

    // Average time: How many steps can we take dividing N by 2, util N is 0
    // If N = 16
    // N = 16 - first level
    // N = 8 - at second after being divided by 2
    // N = 4 - at third after being divided by 2 again
    // N = 2 - at fouth after being divided by 2 again
    // N = 1 - at fifth after being divided by 2 again

    // Let's say the numnber of steps in the algorithm is K
        // In other words, how many times can 1 be multiplied by 2 to get N? 
        // This is what log expresses - 2 to what power is N

        // 2^k = N
        // k = log N

// The runtime complexity is O (log N)

// Both iterative and recursive solutions have the same time compleity O(log N)

// For space complexity Big O;
    // Iterative solution is more efficent because it uses O(1) space - constant space for function call and varibale allocation
    // Recurive approach will take (log N)