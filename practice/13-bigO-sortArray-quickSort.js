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