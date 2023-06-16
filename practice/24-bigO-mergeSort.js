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
