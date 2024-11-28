function arrayIntersection(arr1, arr2) {
    const intersectionArr = [];

    for (let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i]) && !intersectionArr.includes(arr1[i])) {
            intersectionArr.push(arr1[i])
        }
    }

    return intersectionArr;
}

arrayIntersection([1, 2, 2, 3, 4], [2, 3, 5, 6, 7]);

// Second Method

function arrayIntersectionSet(arrSet1, arrSet2) {
    const set1 = new Set(arrSet1);
    const intersectionSetArr = [];

    for (let num of arrSet2) {
        if (set1.has(num)) {
            intersectionSetArr.push(num);
        }
    }

    return intersectionSetArr;
}

arrayIntersectionSet([1, 2, 2, 3, 4], [2, 3, 5, 6, 7]);