const n = 1000000;

// approximatly n steps - O(n) - linear time, grows in proportion to the size of input
function addUp (n) {
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        sum += i;
        // console.log(sum);
    }
    console.log(sum);
}

addUp(n);

// 3 steps - O(1) - constant time, independent of the size of the input (time, number of steps are always the same)
function addUp2 (n) {
    const sum = n*(n+1)/2;
    console.log(sum);
}

addUp2 (n);