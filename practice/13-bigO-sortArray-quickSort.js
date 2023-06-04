// using first value as pivot 

const randomArray = [ 4, 6 ,2 ,4 ,7 ,8 ];

function quickSortArr (input) {

    // base case to return is when array reduces to just one value 
    if (input.length <= 1) {
        return input;
    };

    const pivot = input[0]; 
    
    // left for values smaller than pivot
    // right for values greater than pivot
    let left = [];
    let right = [];

    for (let i = 1; i < input.length; i++) {
        if ( input[i] <= pivot ) {
            left.push(input[i]);
        } else {
            right.push(input[i]);
        }
    };

    // use recursion and spread operator to return sorted array
    return [...quickSortArr(left), pivot, ...quickSortArr(right)];
};

const result = quickSortArr(randomArray);

console.log(result);

// Big O 
// Best case   -   O(n log n)
// Worst Case -  O (n^2)
// Average Case - O(n log n)

// Logic of the algorithm for when pivot is middle value

// quickSort(first,last) {
//     if (first < last) {

//         find pivot - e.g. value at the middle index of the array 
//         pivot = partition(first,last); using pivot

//         quickSort(first, pivot-1);
//         quickSort(pivot, last);
//     }
// }
// Steps
// 1. Choose a pivot element (first, last, random, middle)
// 2. Partition given array: 
    // 2.1. Take two variables (start, end) to point to the left and right of the array
    // 2.2. Start is the lowest index
    // 2.3. End is the highest index
    // 2.4. while array[start] <= array[pivot] -> move right
    // 2.5. while array[end] > array[pivot] -> move left
    // 2.6. when 2.4. and 2.5 are not satitisifed - sawp values at start and end indexes
// 3. Swap values if start >= end, when iterators become crossed, swap pivot with the element that end iterator points to 
// 4. Repeat logic for left and right subarrays (in relation to pivot) until it reaches one element or subarrays become empty