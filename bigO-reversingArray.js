const arr = [1,2,3,4,5];

function reverse (arrayInput) {
    for (let i = 0; i < arrayInput.length/2; i ++) {
        let other = arrayInput.length - i - 1;
        let temp = arrayInput[i];
        arrayInput[i] = arrayInput[other];
        arrayInput[other] = temp;
    }
    console.log(arrayInput);
}

reverse(arr);

// 1. goes for 2.5
// 2. other equals 4
// 3. temp equals 1
// 4. arrayInput at index 0 equals arrayInput at index other (4) which is 5 - 5 is now the first value in the array
// 5. arrayInput at other index is equal the temp value which is 1 - 1 is now the last value in the array
// 6. repeat for i = 1 and 2
// 7. array is reversed now 