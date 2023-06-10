// from 1 through n

const number = 50;

function powersOfTwo (n) {
    if (n < 1) return 0;
    if (n === 1) {
        console.log(1);
        return 1;
    }
    const previous = powersOfTwo(Math.floor(n/2));
    const current = previous * 2;
    console.log(current);
    return current;
};

powersOfTwo(number);
    // should print 1, 2, 4, 8, 16, 32 for number 50

// Big O Time Complexity
    
    //Call Stack for function p(50)
    
        // p(1) -> prints and returns 1, popped off the stack
        // p(3) -> prints and returns 2, popped off the stack
        // p(6) -> prints and returns 4, popped off the stack
        // p(12) -> prints and returns 8, popped off the stack 
        // p(25) -> prints and returns 16, popped off the stack 
        // p(50) -> prints and returns 32, reaches the end

    // The runtime is the number of times n is divisible by two until we get to 1
    // Or the number of times n is halved unitl we get to 1
    
// The Big O runtime is 0(log n)

// Another way to think about it: the number of calls to the function increases by 1, each time n double is size
    // It's the number of times 1 can be doubled until result reaches n

    // Or it can be expressed as 2^x = n
    //                           x = log n

// Therefore, Big O runtime is 0(log n)

// Iterative approach gets the same result in the same logarithmic time using iterative approach
    // The number of steps is the number to which power we can take two until we reach a requested number
    // log2(50) is approximately 5 or 6 rounded up -> the number of values printed is 6 for example of 50
    // Hence Time Complexity is O(log n)
    // function powerOfTwoLoop (n) {
    //     for (let i = 1; i <= n; i = i*2) {
    //         if (n === 1) {
    //             console.log(1);
    //         }
    //         console.log(i)
    //     }
    // }

    // powerOfTwoLoop (50);
    //     // should print 1, 2, 4, 8, 16, 32 for number 50