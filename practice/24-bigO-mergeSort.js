const arrayToSort = [3, 2, 6, 1, 2, 6, 3, 8, 4, 9, 3];

function mergeSort (arr) {

    if (arr.length < 2) return arr;

    const mid = Math.floor(arr.length /2 );

    const leftArr = arr.slice(0,mid); // not including mid
    const rightArr = arr.slice(mid); // to the end, including mid

    return merge(mergeSort(leftArr), mergeSort(rightArr)); 
};

function merge(leftArrSorted, rightArrSorted) {

    const sortedArray = [];

    while (leftArrSorted.length && rightArrSorted.length) {
        (leftArrSorted[0] <= rightArrSorted[0]) ? sortedArray.push(leftArrSorted.shift()) : sortedArray.push(rightArrSorted.shift());
    };

    return [...sortedArray, ...leftArrSorted, ...rightArrSorted];
};

const result = mergeSort(arrayToSort);

console.log(result);
// should print [
        1, 2, 2, 3, 3,
        3, 4, 6, 6, 8,
        9
// ];


// Time Complexity Explanation
    // N els in the array
    
    // Step by step:

    // First: break array down
        // 1. Arr of size N is broken down to two arrays of size N/2 
        // 2. Merge sort is run again on two arrays of sizes N/2 and N/2 respectively
        // 3. Using recursion these two arrays will be broken down to further two arrays of sizes N/4, gives 4 arrays of size N/4
        // 4. This process will continue until there is only one element left in an array (by this time is sorted by definition)
            // The recursive tree that's generated is a balanace binary tree - the height of that tree is log N (the number of levels in the tree)
                // how many times 2 can be multiplied by two to get N length
        // Time complexity for this step = O(log N)
    
    // Second: merge sorted arrays into a larger sorted array until we assembled the original array of N size, where all els are in sorted order
        // 5. Merging part of the algorithm will make a right and left copy of array, that takes O(N/2) time for left, O(N/2) time for right, or O(N) total 
        // At each level, the time to merge sorted subarrays into a new sorted array is the number of elements in the subarrays since we need to go through all of them to make comparizons and fit them into an approprate spot
            // merge steps =length(sub1) + length(sub2)
            // At the lowest level (where all arrays are subdivided into size 1) the time to merge them in N 
            // At next level (where all arrays are subdivided into size 2 now) the time to merge them is still N 
            // This will happen for all levels until we merdged array back to it's original size, this happens because at each level we have to look at all values to make comparisons and sort them into a new array
        // So the number of operations performed for each level is N - this is why we multiply complexities for each step
        // Time complexity for this step = O(N)

// Total Time Complexity = Complexity to divide the array into subarrays * time to merge the values after arrays are sorted = log N * N = O(N log N)
