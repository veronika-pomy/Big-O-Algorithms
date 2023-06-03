const number1 = 4;
const number2 = 7;
const number3 = 11;
const number4 = 22;
const number5 = 23;

function isPrime (input) {
    for (let i = 2; i*i <= input; i++){ // only going up to the square root of the input because, if the input is devisible by the square root, it would be divisible by sth smaller and would be eliminated
        if ( input % i == 0 ) { // checking for the remainder
            console.log(`Number ${input} is a prime number.` + false);
            return;
        }    
    };
    console.log(`Number ${input} is a prime number.` + true);
    return;
};

isPrime(number1);
isPrime(number2);
isPrime(number3);
isPrime(number4);
isPrime(number5);

// For prime: take 7 

// 1. 2*2 <= 7 - true
// 2. 7/4 has a remainder - false - next iteration 
// 3. 3*3 <= 7 - false 
// 4. returns 7 is a prime number1

// For compositee: take 8

// 1. 2*2 <= 8 - true
// 2. 8/4 has no remainder - true 
// 3. returns 8 is not a prime number 