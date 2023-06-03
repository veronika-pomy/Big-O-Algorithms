const A = 4;
const B = 7;

// runtime depends on the value of input2 or in this case b
// sum += input1 is a simple computation with constant runtime of O(1), it does not matter

// runtime complexity is O(input2)

function computeProduct (input1, input2) {
    let sum = 0; 

    for (let i = 0; i < input2; i++) {
        sum += input1;
    }

    console.log(sum);

};

// i = 0
// sum = 0+4 = 4
// i = 1
// sum = 4+4 = 8
// i = 2
// sum = 8+4 = 12
// i = 3
// sum = 12+4 = 16
// i = 4
// sum = 16 + 4 = 20
// i = 5 
// sum = 20+4 = 24
// i = 6
// sum = 24+4 = 28 
// i = 7 
// for loop stops because i equal to 7 (input2 value), not less than 
// return current value of sum which is 28
// 4*7 = 28 

computeProduct(A,B);