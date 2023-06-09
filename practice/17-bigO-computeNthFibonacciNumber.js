// Fibonacci sequence
    // 1, 1, 2, 3, 5, 8, 13, 21, 34,...
// position 5, gives number 5
// position 6, gives number 8
// position 7, gives number 13

// Call Stack

    // fib(3) = fib(2) + fib(1) = 1 + 1 = 2 - value returned by fib(3), f(3) is popped off the stack now and we go to fib(4)
    // fib(4) = fib(3) + fib(2) = 2 + 1 = 3 - value returned by fib(4), f(4) is popped off the stack now and we go to fib(5)
    // fib(5) = fib(4) + fib(3) = 3 + fib(3) = 3 + 2 = 5 - final value returned, notice the redundancy of the code, we have to recalculate fib(3) value because it's forgotten
        // fib(3) = fib(2) + fib(1) // put on the call stack after fib(4) is popped off to recalculate the value

const fifthPosition = 5;
const sixthPosition = 6;
const seventhPosition = 7;

function fib(n) {
    if (n < 3) return 1; // positions one and two
    return fib(n-1) + fib(n-2); // this gets two previous terms in the sequence 
};

const numberAt5th = fib(fifthPosition);
const numberAt6th = fib(sixthPosition);
const numberAt7th = fib(seventhPosition);

console.log(`Number at position ${fifthPosition} in a Fibonacci sequence is ${numberAt5th}.`);

console.log(`Number at position ${sixthPosition} in a Fibonacci sequence is ${numberAt6th}.`);

console.log(`Number at position ${seventhPosition} in a Fibonacci sequence is ${numberAt7th}.`);

// Time Complexity explanation for Recursive Solution
    // Use a pattern for recursive calls = O (branches^depth)
    // O(2^N) - exponential run time
    // a more percise value is O(1.6^N)

// NON RECURSIVE SOLUTION 
// has time complexity of 0(N) because it has one for loop which it iterates over
    // function fibNotRecursive (n) {
    //     if (n < 3) return 1; // positions one and two

    //     let previous = 1;
    //     let current = 1;

    //     for (let i = 2; i < n; i++) {
    //         const next = previous + current;
    //         previous = current;
    //         current = next;
    //     }

    //     return current;
    // };