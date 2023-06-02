const baseVal = 2;
const exponentVal = 3;

// this is a recursive method, depends on the value of the exponent input, runtime scales proportionally to it

// O(exponenet) time complexity

function powerOf (base, exponent) {
    if ( exponent < 0 ) {
        return 0;
    } else if ( exponent === 0 ) {
        return 1;
    } else {
        return base * powerOf(base, exponent - 1);
    }
};

const result = powerOf(baseVal,exponentVal);

console.log(result);

// stack of calls
// power(2,0) - hits base case, exponent equals 0, makes no more calls, returns 1
// power(2,1) - returns 2*1 = 2
// power(2,2) - returns 2*2 = 4
// power(2,3) - returns 2*4 = 8
// answer is 8
// algorithm computes 3 number of times (value of the exponent)


