// recursive method - keep one character of string constant and get the rest of the permutations
    // for string 'abc' - > hold character a, find permutations of remaining 'bc', concatenate those with a
    // 'abc' => 'a' & 'bc' => 'abc', 'acb' - two perms
    //       => 'b' & 'ac' => 'bac', 'bca' - two perms
    //       => 'c' & 'ab' => 'cab', 'cba' - two perms 
    //       SUM all perms = 2 + 2 + 2 = 6
    // Number of perms is 3! in this case = 3 * 2 * 1 = 6

const string = 'akdj';

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


// count arrLength has Big O(N) time complexity because it loops through each element and performs O(1) operation for each