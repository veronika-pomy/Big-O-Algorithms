const numberToCompute = 15;
// answer 1307674368000

// n! = (n-1) * (n-1) * (n-3) * (n-4) * ... * 3 * 2 * 1
// formula n! = n * (n-1)!

// O(n) - because function gets called n number of times until it it's the base case, runtime is propotional to value of n in this case

// using for loop, no recursion
function findFactorial (input) {
    let result = 1;
    for (let i = 1; i <= input; i++) {
        result *= i; // result = result * i;
    }
    console.log(result);
    return result;
};

// using recursion
function findFactorialRecursive (input) {
    if ( input > 0 && input <= 1 ) {
        return 1;
    } else {
        return input * findFactorialRecursive(input - 1);
    }
};

findFactorial(numberToCompute);

const result = findFactorialRecursive(numberToCompute);

console.log(result);