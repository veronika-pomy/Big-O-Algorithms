const position = 7;

function fibonacciMemo (n) {
    const fib = [0,1];
    const memo = [];

    for (let i = 2; i < n; i++) {
        fib[i] = fibNumberMemo(i, memo);
    };

    function fibNumberMemo(number, memorized) {
        if (number <= 2 ) return 1;
        if (memorized[number] > 0) return memorized[number];
        memorized[number] = fibNumberMemo(number - 1, memorized) + fibNumberMemo(number - 2, memorized);
        return memorized[number];
    };
    return fib;
};

const fibSequence = fibonacciMemo(position);

console.log(fibSequence);
   // with input 7 should return [0, 1, 1, 2, 3, 5, 8];
    
// Time Complexity 
    // Call Stack
        // fib(1) -> return 1
        // fib(2) -> return 2
            // fib(1) -> return 1
            // fib(0) -> return 0
            // store value 1 at memorized arr [2]
        // fib(3) 
            //fib(2) -> look up memorized[2] -> return 1
            // fib(1) -> return 1
            // store value 2 at memorized[3]
        // fib(4)
            // fib(3) -> look up memorized[3] -> return 2
            // fib(2) -> look up memorized[2] -> return 1
            // store value 3 at memorized[4]
        //fib(5)
            // fib(4) -> look up memorized[4] -> return 3
            // fib(3) -> loop up memorized[3] -> return 2
            // store 5 at memorized 5
        //...
        // fib(n)
// at each function call we do constant work - looking up, summing, storing, and returing 
// we do the work N number of times (from the for loop
// Total runtime is O(N)

