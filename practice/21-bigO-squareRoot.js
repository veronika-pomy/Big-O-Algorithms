// compute integer square root, if number is not perfect square, return - 1

// Guessing approach 

const number1 = 100;
const number2 = 64;
const number3 = 73;

function sqrt (n) { 
    sqrt_helper (n, 1, n);
};

function sqrt_helper (target, min, max) {

    if (min > max) {           
        console.log(-1); // no square root
        return;
    }

    const guess = Math.floor((min + max) / 2);

    if (guess * guess === target) return console.log(guess); // match
    if (guess * guess < target) return sqrt_helper(target, guess + 1, max); // guessed too low
    if (guess * guess > target) return sqrt_helper(target, min, guess - 1); // guessed too high
};

sqrt(number1); // should print 10
sqrt(number2); // should print 8
sqrt(number3); // should print -1

// Time Complexity for Guessing Approach 
    // Calls sqrt_helper recursively until it finds the right number or finds that there is no square root 
    // Each time the number of steps in the problem gets cut in half, because we are decreasing the number we guessing by half
    // This is similar to the binary search tree algorithm

    // Run time complexity is O(log n)

// Iterative Approach 

function sqrt_increase (target) {

    let success = false;

    for (let guess = 1; guess * guess <= target; guess++) {
        if (guess * guess === target) {
            success = true;
            console.log(guess);
        };     
    };

    if (!success) console.log(-1); // checks if the looo successed in finding square root, if not, returns -1
};

sqrt_increase(number1); // should print 10
sqrt_increase(number2); // should print 8
sqrt_increase(number3); // should print -1

// Time Complexity for Iterative Apprach
    // this is a loop that stops when guess * guess = n or guess = squareroot of n
    // O (squareroot of n

// O (sqrt(n)) runtime will increase faster than O (log n)
