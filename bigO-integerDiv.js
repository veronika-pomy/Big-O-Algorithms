// Assume all numbers are positive

const divideNumber = 9;
const byNumber = 3;

// code utilizes a while loop, everything else is a constant O(1) operation
// runtime complexity of the algorithm scales based on the values of both input1 and input2
// can't reduce complexity further
// value of input 1 gets reduced by value of input 2
// O( input1 / input2 )


function divison (input1, input2) {
    let count = 0;
    let sum = input2;

    while (sum <= input1) {
        sum += input2;
        count++;
    };
    console.log(count);
};

// sum = 3
// sum = 3+3; count = 1
// sum = 6
// sum = 6+3; count = 2
// sum = 9 
// sum = 9+3; count = 3
// sum = 12 - end of the while loop, 12 is > 9 (input1)
// returns value of count = 3
// code looks at how many times input2 can fit inside input1, does not account for when input1 is not divisible by input2 withoout a remainder
// answer is 3

divison(divideNumber,byNumber);