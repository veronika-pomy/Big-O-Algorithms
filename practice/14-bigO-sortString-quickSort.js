// using first value as pivot 

const randomStr = 'jdksdnsjndkslf';

function quickSortStr(string) {

    if (string.length <= 1) {
        return string; 
    };

    const pivot = string[0]; 

    let leftStr = '';
    let rightStr = '';

    for (let i = 1; i < string.length; i++) {
        if (string[i] >= pivot) {
            rightStr += string[i];
        } else {
            leftStr += string[i];
        };
    };

    // use recursion
    return quickSortStr(leftStr) + string[0] + quickSortStr(rightStr);
};

const result = quickSortStr(randomStr);

console.log(result);