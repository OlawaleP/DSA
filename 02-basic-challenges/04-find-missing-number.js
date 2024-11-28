function findMissingNumber(arr) {
    if (arr.length === 0) return 1;

    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;

    // let actualSum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     actualSum += arr[i];
    // }

    // Using reduce method

    const actualSum = arr.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum
}

findMissingNumber([10, 9, 7, 6, 4, 1, 2, 3]);