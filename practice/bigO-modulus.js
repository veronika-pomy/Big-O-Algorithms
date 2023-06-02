// returns the remainder of a division operation

const divideNumber = 7;
const byNumber = 3;

// all constant runtime operations, time complexity is O(1)
// runtime does not depend on size of the input

function mod (input1, input2) {
    if (input2 <= 0){
        return -1;
    }

    const quotient = Math.floor(input1/input2); 

    console.log(input1 - quotient * input2);
};

// 7/3 remander is 1
// quotinet is 7/3 = 2.3333333 = math.floor(2.3333...) = 2
// logs 7 - (2*3) = 7 - 6 = 1

mod(divideNumber,byNumber);
