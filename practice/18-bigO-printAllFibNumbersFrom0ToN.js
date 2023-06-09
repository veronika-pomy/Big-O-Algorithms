const position = 7;

function fibonacci (n) {
    const fib = [0,1];

    for (let i = 2; i < n; i++) {
        fib[i] = fibNumber(i);
    };

    function fibNumber(number) {
        if (number <= 2 ) return 1;
        return fibNumber(number - 1) + fibNumber(number - 2);
    };
    return fib;
};

const fibSequence = fibonacci(position);

console.log(fibSequence);
   // with input 7 should return [0, 1, 1, 2, 3, 5, 8];
    
// Time Complexity 
// Key is to recognize that the value of n is changing for each of the fib calls because of iteration of the for loop
    // for loop is walking from 1 to n number
    // Using O(branches^depth pattern)
    // Call Stack for each call looks like this;
        // fib(1) -> 2^1 steps
        // fib(2) -> 2^2 steps
        // fib(3) -> 2^3 steps
        // ...
        // fib(n) -> 2^n steps

    // Total work is 2^1 + 2^2 + 2^3 + ... + 2^n = O(2^n+1)= O(2^N)


// NON RECURSIVE SOLUTION 

    // function fibonacciNonR (n) {
    //     const fib = [0,1];

    //     for (let i = 2; i < n; i++ ) {
    //         fib[i] = fib[i-1] + fib[i-2];
    //     }

    //     return fib;
    // };

    // const fibSequenceNonR = fibonacciNonR(7);

    // console.log(fibSequenceNonR);
    // // with input 7 should return [0, 1, 1, 2, 3, 5, 8];

    // // Time complexity for non-recursive solution 
    //     // Big O(N) - algorithm goes through one loop