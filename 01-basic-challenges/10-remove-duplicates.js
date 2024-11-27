function removeDuplicates(arr) {
    const uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
}

// function removeDuplicates(arr) {
//     return Array.from(new Set(arr));
// }

removeDuplicates(['1', '2', '1', 'true']);