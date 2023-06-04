// loop through the array, sort each string element
// then sort the whole array, comparing each string to one another and swapping them if needed

// THERE IS AN ERROR ON LINE 40 string.length - reading undefined

// 1. Sorting Array Of Strings
function sortArrayOfStrings(array) {
    // variable to hold a new array
    let newArray = [];

    // builds a new array of sorted strings 
    for (let i = 0; array.length; i++) {
        // console.log(array[i]);
        let sortedString = sortEachString(array[i]); // this step uses function to sort each string while iterating through the array 
                                                    // for loop to iterate through the array is O(a) time complexity
                                                    // sortEachString uses quick sort with best runtime of n log n, therefore
                                                    // ortEachString has time complexity of s log s
                                                    // since we do sorting of string for each array element the time complexity of this step is
                                                    // O(a*s log s)
       
        newArray.push(sortedString);
    }

    newArray = sortArray(newArray); // this step sorts an array of sorted strings, contains a step to compare strings to one another 
                                    // sortArray uses quick sort to sort the array - time complexity will be O(a log a)
                                    // sortArray has a step where we compare each string to one another to find out which one is "bigger"
                                    // that's compareSortedStrings, we need to go through each string to get them sorted
                                    // runtime of compareSortedStrings is O(s)
                                    // since we compare sorted strings for each iteration of sortArray, we multiply runtimes 
                                    // time complexity of this step is O(s*a log a)

    return newArray;
};

// Total time complexity - we add loop and sortEachString runtime with sortArray (compareSortedStrings inside of it) runtimes (they happen one after another)

// O(a*s log s + a*s log a) or O(a*s log a log s) runtime

// 2. Sorting Each String 
    // use version of quick sort algorithm that takes first value as the pivot

function sortEachString(string) {

    if (string.length <= 1) {
        return string; 
    };

    let left = '';
    let right = '';

    for (let i = 1; i < string.length; i++) {
        if (string[i] >= string[0]) {
            right += string[i];
        } else {
            left += string[i];
        };
    };

    // use recursion
    return sortEachString(left) + string[0] + sortEachString(right);
};

// 3. Sorting Array
    // use quick sort with pivot value as the first value

    function sortArray(arr) {

        if (arr.length <= 1) {
            return arr; 
        }
    
        let left = [];
        let right = [];
    
        for (let i = 1; i < arr.length; i++) {
            if (compareSortedStrings (arr[i], arr[0])) {
                right.push(arr[i]);
            } else {
                left.push(arr[i]);
            };
        };
    
        // use recursion
        return [...sortArray(left), arr[0], ...sortArray(right)];
    };
    
    // 3. Compare Sorted Strings 
        // use a loop that iterates through the longer string and compares the characters in each string at a given index
        // if one character is bigger than another -> return reesult
        // do this for every string one by one
    // this is plug into the function that sorts array

    function compareSortedStrings (string1, string2) {
        let longerString = string1.length >= string2.length ? string1 : string2;

        for (let i = 0; i < longerString.length; i++) {

            // first two comparisons for when strings are empty - the logic compares longer string to shorter, that's how it knows what is false and what is true
            if (!string1[i]) {
                return false;
            }
            if (!string2[i]) {
                return true;
            }
            if (string1[i] >= string2[i]) {
                return true;
            } else {
                return false;
            };
        };
    };

console.log(sortArrayOfStrings(['abc', 'ffe', 'ewu', 'fuiesbvre'])); //=> [ 'abc', 'beefirsuv', 'eff', 'euw' ]
