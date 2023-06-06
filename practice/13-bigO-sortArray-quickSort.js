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


// Big O 
// Best case   -   O(n log n)
// Worst Case -  O (n^2)
// Average Case - O(n log n)

// BEST CASE:
// Time complexity analysis
    // keep in mind: divide and conquor method, recursion
    // uses partition method

// Time Complexity of the Recursion Tree: Number of Levels * Time Taken for One Level = log n * n
// Gives Best Case O(N) = (n log n)
// Achived when partitions of the array can be done as evenly as possible

    // Time Taken For One Level:
    // partition algorithm takes pivot and compares it to all els in the array
    // Big O of algorithm for level 1 (partition 1) is O(N) - because code looks at [11], [16], [1], [2], [10], [17], [14]
    // Big O of algorithm for level 2 (partition 2 and 3) is approximately O(N) = O (n/2) + O(n/2) - because code looks at (Partition 1 [16], [1], [2]) (Partition 2 [10], [17], [14])
    // Therefore - time taken for one level is O(N)
    
    // Number of Levels:
    // recursion tree looks like larger arrays being divided into two smaller subarrays until we are left with one element 
    // n / 2^k = 1
    // k gives the number of levels
    // n = 2^k
    // log2 n = k log2 2, since log2 2 = 1
    // k = log2 n
    // When size of input is n, recursion tree will have log n levels 
     // Therefore - number of levels in log n

//BEST CASE EXAMPLE:
    // while taking first el as pivot

// n = 7 ---> n
// pivot = 11

//
//                 i    0     1     2    3    4      5    6
//               arr  [11], [16], [1], [2], [10], [17], [14]
//                 i    0     1     2    3    4      5    6
// partition 1   arr   [2], [10], [1], [11], [16], [17], [14] - pivot el 11 is at the correct index 3, two subarrays are to the left and right of pivot

// subArr1N = 3 ---> n/2
// subArr1N = 3 ---> n/2
//                i     0    1    2             0     1     2
//          subArr1   [2], [10], [1] & subArr2 [16], [17], [14]

// partition algorithm is now applied to the remaining sub arrays

// pivot = 2
//                          i     0    1   2
// partition 2        subArr1   [1], [2], [10] - pivot el 2 is at the correct index 1, two subarrays are to the left and right of pivot
// 

// pivot = 16
//                       i     0    1   2
// partition 3        subArr2   [14], [16], [17] - pivot el 16 is at the correct index 1, two subarrays are to the left and right of pivot
// 

// since there is only one element left in all remaining sub arrays - sorting is done now

// WORST CASE
// Time complexity analysis
// Happens when array is already sorted or if array is sorted in the reverse order
// pivot is the first el or last el

// O(N^2)

// WORST CASE EXAMPLE: 
// n = 7 ---> n
// pivot = 1

//                 i    0     1     2    3    4      5    6
//               arr  [1], [2], [10], [11], [14], [16], [17]

// partition 1 there will be no els in the left subarray

//              subArrLeft  [] & subArrRight [2], [10], [11], [14], [16], [17]

// partition 2 there will be no els in the left subarray

//              subArrLeft  [] & subArrRight [10], [11], [14], [16], [17]

// partition 3 there will be no els in the left subarray

//              subArrLeft  [] & subArrRight [11], [14], [16], [17]

// partition 4 there will be no els in the left subarray

//              subArrLeft  [] & subArrRight [14], [16], [17]

// partition 5 there will be no els in the left subarray

//              subArrLeft  [] & subArrRight [16], [17]

// partition 6 there will be no els in the left subarray

//              subArrLeft  [] & subArrRight [17]

// we are down to one el in the rigth subarray - sorting is done now

// Time taken by the algorithm 
// partition 1 - N - compare pivot to all 7 els
// partition 2 - N-1 - compare pivot to 6 els
// partition 3 - N-2 - compare pivot to 5 els
// partition 4 - N-3 - compare pivot to 4 els
// partition 5 - N-4 - compare pivot to 3 els
// partition 6 - N-5 - - compare pivot to 2 els

// Total Time = 7 + 6 + 5 + 4 + 3 + 2 = [n(n+1)/2] - 1 (sum of n, subtract 1 because we start with 2) = n^2+n/2
// O(N^2) - because we ignore constants and non-dominant terms
