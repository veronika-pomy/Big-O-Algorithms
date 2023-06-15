// do a big o breakdown of an algorithm to compare strings - helper function 3 from 12-bigO

const first = 'abcde';
const second = 'fgh';

function compareSortedStrings (str1, str2) {
    const longerStr = (str1.length >= str2.length) ? str1 : str2;
    console.log(`Longer string: ${longerStr}.`);

    let bigger = '';

    for (let i = 0; i < longerStr.length; i++) {
        if (!str1[i]) {
            bigger = str2;
            console.log(`Statement 1: ${bigger}.`);
            return;
        };   // str2 is bigger because str1 is empty

        if (!str2[i]) {
            bigger = str1;
            console.log(`Statement 2: ${bigger}.`);
            return;
        } // str1 is bigger because str2 is empty

        if (str1[i] >= str2[i]) {
            bigger = str1; 
            console.log(`Statement 3: ${bigger}.`);
            return;
        }

        if (str1[i] < str2[i]) {
            bigger = str2;
            console.log(`Statement 4: ${bigger}.`);
            return;
        } 
    }
};

compareSortedStrings(first, second);

    // in this case second string should evaluate as bigger because the appropriate sorted order would be;
        // 'abcde' (this string is smaller, goes first), 'fgh' (is bigger, goes second)

// Run Time Complexity Explanation 
    // Since strings are sorted and the algorithm will pick the longer string to match against, the algorithm will stop as soon as one of the values comes up as bigger one
    // In the worst case, the algorith will iterate through the whole length of the longest string
        // (would be the same as length of the longest unsorted string)
    // In this example, first string is longer (5 vs. 4 characters), the runtime will be O (first)

// General runtime 
// O(s), where s is the length of the longer string