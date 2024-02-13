// Description: Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// sortedArray = mergeSortedArray(array1, array2)

function fillArrayWithRandomIntigers(array, amount) {
    for (let i = 0; i < amount; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
}