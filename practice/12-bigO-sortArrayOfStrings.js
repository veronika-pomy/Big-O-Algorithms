const arrayOfStrings = ['gfheowk', 'abababa', 'bababa', 'zzz', 'cx', '', 'c' , ''];

// Main function that sorts array of strings
function sortArrayOfStrings(arr) {
    let newArr = [];

    // push a sorted string into the new array, do this for every string in the array
    for (let i = 0; i < arr.length; i++) {

        let sortedString = quickSortString(arr[i]); // Helper function 1 to sort all strings

        newArr.push(sortedString);
    }

    newArr = quickSortArr(newArr); // Helper function 2 (helper functino 3 within) to sort the new array by comparing strings
    
    // return sorted array of sorted strings
    return newArr;
};

// Helper function #1 to use first letter as pivot to apply quick sort to sort a string
function quickSortString (str) {

    // base case
    if (str.length < 2) return str;

    let leftStr = '';
    let rightStr = '';

    const pivot = str[0];

    // iterate over each letter in a string except the pivot value and perform comparison
    for (let i = 1; i < str.length; i++) {
        (str[i] < pivot) ? leftStr += str[i] : rightStr += str[i];
    };

    // use recursion to sort until an string has only one letter, then return
    return quickSortString(leftStr) + pivot + quickSortString(rightStr);
};

// Helper function #2 to sort an array of strings using quick sort with firdt value as pivot
function quickSortArr (arr) {

    if (arr.length < 2) return arr;

    let leftArr = [];
    let rightArr = [];

    const pivot = arr[0];

    // compareStrings will evaluate each string against a pivot string
        // if it is bigge than / equal to pivot, it goes into rightArr
        // if it is smaller than pivot, it goes into leftArr
    for (let i = 1; i < arr.length; i++) {
        (compareStrings(arr[i],pivot)) ? rightArr.push(arr[i]) : leftArr.push(arr[i]);
    };

    // use recursion to sort until an array has only one element, then return
    return [...quickSortArr(leftArr), pivot, ...quickSortArr(rightArr)];
};

// Helper function #3 to compare strings
    // Can't rely on one-step comparison strategy used for characters because the patterns of letters in a string can be different
    
    // Instead use stratgey of looping through the longer string and comparing letters from longer string to shorter string's letters at hte same index, when one character is evaluated to be bigger than the other, can stop comparison and return
   
    // returns true when str1 is bigger, returns false when st2 is bigger
function compareStrings(str1, str2) {
    let longerStr = (str1.length >= str2.length) ? str1 : str2;

    for (let i = 0; i < longerStr.length; i++) {

        if (!str1[i]) return false; // str1 is not bigger than str2 because str1 is empty

        if (!str2[i]) return true; // str1 is bigger than str2 because str2 is empty
        
        if (str1[i] >= str2[i]) return true; // str1 is bigger than /equal to str2, eval at same index

        if (str1[i] < str2[i]) return false; // str1 is smaller than str2, eval at same index
    };
};

const sortedArrayOfStrings = sortArrayOfStrings(arrayOfStrings);

console.log(sortedArrayOfStrings);

// Big O Time Complexity

// Step One (quickSortString function) - sorting each string in the array
    // we loop through every element in the array -> that would be O(A) where A is the length of the array of strings
    // at each element we sort a string -> O(S log S) where S is the length of the longest string, the average case for quickSort is S log S
// Time Complexity of Step One is O (A*S log S)

// Step Two (quickSortArr function) - sorting the new array of sorted strings, when we iterate though the lnegth of the array, we apply compareStrings function to evaluate which string is bigger (can't rely on simple character comparison)
    // average case of quickSort is S log S -> O (A log A) where A is the lenth of the array of sorted strings (would be the same as the array of unsorted)
    // there is comparison of strings operation for each ieration which is O(S) where S is the length of the longest sorted string (would be the same as length of the longest unsorted string)
// Time Complexity of Step Two is (S*A log A)

// Step One and Two are performed consecutively - we add two time complexities together

// Time Complexity of the sortArrayOfStrings algorithm is O(A*S log S + S*A log A) = O(A*S * (log S + Log A)) // constant factor 2 is ignored

