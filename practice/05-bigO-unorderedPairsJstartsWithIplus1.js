const arr = [1,2,3,4,5,6];

// runtime complexity for nested loops is multipled
// one input 
// visualizing output for N = 4 (i,j)
// (0,1)(0,2)(0,3)(0,4)
//      (1,2)(1,3)(1,4)
//           (2,3)(2,4)
//                (3,4)

// with each step through i, the work for inner loop shrinks by N-1
// the total number of steps would be N^2
// with (N-1)/2 runtime for the second loop, the total runtime is N(N-1)/2 = N^2
// can think of it as N*N matrix being shrunk by a roughly half, hence N^2/2

// O(N^2)

function printUnorderedPairs (arrayInput) {
    for (let i = 0; i < arrayInput.length; i++ ) {
        for (let j = i+1; j < arrayInput.length; j++ ) {
            console.log(arrayInput[i] + "," + arrayInput[j]);
        }
    }
};

printUnorderedPairs(arr);