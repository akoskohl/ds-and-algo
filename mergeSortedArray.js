// Description: Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// sortedArray = mergeSortedArray(array1, array2)

// helper functions

// Testing my solution
const concatedAndSortedArray = array1.concat(array2).sort(function(a,b){return a - b})

// check if the sortedArray is equal to concatedAndSortedArray as a test
if (JSON.stringify(concatedAndSortedArray) == JSON.stringify(sortedArray))
    console.log("TEST: OK");
else
    console.log("TEST: NOT OK");

function fillArrayWithRandomIntigers(array, amount) {
    for (let i = 0; i < amount; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
}