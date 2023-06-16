// neither array has duplicates 

const arrayA = [2, 1, 4, 3, 5];
const arrayB = [5, 6, 7, 8, 9, 1 ];

function intersection (arr1, arr2) {
    
    // perform sorting of arr2
    const arr2Sorted = mergeSort(arr2);
    // set up intersection counter
    let intersectionCount = 0;

    // iterate through arr1 and perform binary search on arr2 that was sorted
    for (let i = 0; i < arr1.length; i++) {
        if (binraySearch(arr2Sorted, arr1[i]) >= 0) {             // binary search will return the index of the target value, so should be 0 - arr.length-1 range if intersection is found
            intersectionCount++;                      // otherwise it returns -1 when nothing is found, the if statement will evaluate to false and counter won't be incremented
        };
    };

    console.log(`Number of intersections of array ${arrayA} and ${arrayB} is: ${intersectionCount}.`);
};


function mergeSort (arrayInput) {
    
    // base case for recursion to return when the number of elements in array is one
    if (arrayInput.length < 2) return arrayInput;

    const arrayMiddle = Math.floor(arrayInput.length / 2);

    const leftArray = arrayInput.slice(0,arrayMiddle); // all els to the left but not including middle el
    const rightArray = arrayInput.slice(arrayMiddle); // all els to the right including middle el to the end of array

    // merge() is a helper function that merges arrays when they are considered sorted
    // mergeSort() is called on left and right arrays recursively because at this point we can't assume that left and right sides have only one element each,
    // we have to keep going until base case is met, then we return and merge
    return merge(mergeSort(leftArray), mergeSort(rightArray));
};

// helper
function merge (sortedArrayLeft, sortedArrayRight) {
    // temorary array to hold sorted els
    const sortedArray = [];

    // check that both arrays are not empty, when 
    while (sortedArrayLeft.length && sortedArrayRight.length) {
        // compare elements in two arrs and push smaller one into the sortedArray first 
        if (sortedArrayLeft[0] <= sortedArrayRight[0]) {
            sortedArray.push(sortedArrayLeft.shift()); // use shift because we want to remove the element at the same time 
        } else {
            sortedArray.push(sortedArrayRight.shift());
        }
    };

    // since the loop exits when one of the arrays becomes empty, and the second array is already sorted and contains larger els than the sorted array we just assembled
    // now we use the spread operator to return the full array
    
    return [...sortedArray, ...sortedArrayLeft, ...sortedArrayRight];
};

function binraySearch(sortedArrToSearch, target) {
    
    // use two pointers to point at the left most and the right most els in the array
    let leftPointer = 0;
    let rightPointer = sortedArrToSearch.length - 1;

    // run this loop as long as left pointer is less than or equal to right pointer
    while (leftPointer <= rightPointer) {
        // find middle of array
        let middleIndex = Math.floor((leftPointer + rightPointer)/2); 
        
        // check if target equal middle element
        if (target === sortedArrToSearch[middleIndex]) {
            console.log(middleIndex);
            return middleIndex;
        }; 

        // if we didn't find the target yet
        // search in the left side if target is less than middle el, otherwise seacrh right half of the array
        // continue with while loop after comparing the indexes and finding that leftPointer is smaller to equal to rightPointer
        // or otherwise exit not finding/returing anything
        if (target < sortedArrToSearch[middleIndex]) {
            rightPointer = middleIndex - 1;
        } else {
            leftPointer = middleIndex + 1;
        };
    };
    return -1; // if while loop failed and we didn't find anything
};

intersection(arrayA, arrayB);

// for this example should console log '2'

// Time Complexity explanation:
    // Merge sort through arrayB takes O(b log b) time
    
    // Iteration through arrayA takes O(a) time 
        // For each iteration, conduct binary search through arrayB to find posisble intersection - O(a log b)
    
        // The two operations are consecutive
    
    // Total runtime complexity is O((b log b) + (a log b))