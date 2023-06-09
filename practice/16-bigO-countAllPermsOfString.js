// recursive method - keep one character of string constant and get the rest of the permutations
    // for string 'abc' - > hold character a, find permutations of remaining 'bc', concatenate those with a
    // 'abc' => 'a' & 'bc' => 'abc', 'acb' - two perms
    //       => 'b' & 'ac' => 'bac', 'bca' - two perms
    //       => 'c' & 'ab' => 'cab', 'cba' - two perms 
    //       SUM all perms = 2 + 2 + 2 = 6
    // Number of perms is 3! in this case = 3 * 2 * 1 = 6

const string = 'abc';

function stringPermutations (str) {
    
    // break condition - can return when string is less than 2 characters, no permutations are possible 
    if (str.length < 2) return str;

    let permutations = [];

    for (let i = 0; i < str.length; i++) {
        //get character that we hold
        let holdChar = str[i];
        let remainingString = `${str.slice(0,i)}${str.slice(i+1)}`; // perform string concatenation of string from first char to held char and string of after held char
        // call the function recursively to add subperm to character held and push it into the new array that hold all possible permutations
        // here is where we get all remaining perms for 'b' and 'c' for held 'a'
        for (let subPerm of stringPermutations(remainingString)) {
            permutations.push(holdChar + subPerm);
        }
    }
    
    return permutations;
};

const stringPerms = stringPermutations(string);

console.log(stringPerms); // print all permutations

function arrLength (arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        count++;
    }
    return count;
}

const arrayLength = arrLength(stringPerms);

console.log("Number of permutations of the '"+ string + "' string is: " + arrayLength + "."); // count number of permutations

// Big O Time complexity 
    
          // Recursion Tree
//                abc                  Level 1 - start with str[0] = a, str[1] = b, str[2] = c
//     abc        bac        cba       Level 2 - swap str[0] with str[0] = gets 'abc', swap str[0] with str[1] = gets 'bac', swap str[0] with str[2] = gets 'cab'
// abc   acb   bac   bca  cba    cab   Level 3 - perform the swap function for str[1] for each result in level 2 

// Space Compelxity
    // Using stack for recursive calls 
    // would be the depth of the tree which would equal the size of the array or N
    // O(N)

// Time Compelxity
    // Number of recursive calls by time complexity of one recursive call
    // Time complexity of one recursive call:
        // O(N) for making a sub-permutation
        // O(N) for string concatenation for each permutation
        // Overall total: O(N^2)    

    // Number of recursive calls 
        // First level has 3 calls or N number of calls
        // Second level has 2 calls per node which is N-1
        // If the tree had more depth - we would characterize this pattern as 
        // Level 1: N
        // Level 2: N*(N-1)
        // Level 3: N*(N-1)*(N-2)...
        // Level N: N*(N-1)*(N-2)*(N-3)*...*2
        // The total number of calls is N!

    // Total time complexity: o(N^2*N!)

// count arrLength has Big O(N) time complexity because it loops through each element and performs O(1) operation for each