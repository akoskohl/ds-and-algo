// Description: Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// sortedArray = mergeSortedArray(array1, array2)

function mergeSortedArray(array1, array2) {
    let i = 1
    let j = 1
    const sorted = []
    array1Item = array1[0]
    array2Item = array2[0]

    while (array1Item || array2Item) {
        if(!array2Item || array1Item < array2Item) {
            sorted.push(array1Item)
            array1Item = array1[i]
            i++
        }else {
            sorted.push(array2Item)
            array2Item = array2[j]
            j++
        }
    }
    return sorted
}

let array1 = []
let array2 = []
let sortedArray = []

// fill the arrays with random intigers
fillArrayWithRandomIntigers(array1, 12)
fillArrayWithRandomIntigers(array2, 9)

// sort the arrays
array1 = array1.sort(function(a,b){return a - b})
array2 = array2.sort(function(a,b){return a - b})

// print the arrays
console.log(array1);
console.log(array2);

// merge the arrays and print the result
sortedArray = mergeSortedArray(array1, array2)
console.log(sortedArray)


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