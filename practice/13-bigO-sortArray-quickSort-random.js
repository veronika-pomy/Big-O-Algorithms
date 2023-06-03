// using random array index as pivot
const randomArray = [ 4, 6 ,2 ,4 ,7 ,8 ];

function quickSortArrRandom (input) {

    // base case to return is when array reduces to just one value 
    if (input.length <= 1) {
        return input;
    };

    // range depends on the length of the array, starts with 0 index
    const pivot = input[Math.floor(Math.random()*(input.length - 0 + 1))];
    // const pivot = input[0]; 
    // for case of first or last index chosen as pivot, for loop needs to be adjusted

    // left for values smaller than pivot
    // right for values greater than pivot
    let left = [];
    let right = [];

    for (let i = 0; i < input.length; i++) {
        if ( input[i] <= pivot ) {
            left.push(input[i]);
        } else {
            right.push(input[i]);
        }
    };

    // use recursion and spread operator to return sorted array
    return [...quickSortArrRandom(left), pivot, ...quickSortArrRandom(right)];

};

const result = quickSortArrRandom(randomArray);

console.log(result);