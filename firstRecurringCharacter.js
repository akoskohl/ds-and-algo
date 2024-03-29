//Google Question
// Return first recurring character

//Given an array = [2,5,1,2,3,5,1,2,4]:
// return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
// return 1

//Given an array = [2,3,4,5]:
// return undefined

array1 = [2,5,1,2,3,5,1,2,4]
array2 = [2,1,1,2,3,5,1,2,4]
array3 = [2,3,4,5]
array4 = []

function firstRecurringCharacter(input) {
    if (input === null || input === undefined || input.length === 0) {
        console.log("This array is empty")
    }
    let map = [];
    for (let i = 0; i < input.length; i++) {
        if (map.includes(input[i])) {
            return input[i]
        }
        else {
            map.push(input[i]);
        }
    }
    console.log("This array has no recurring char.")
}

console.log(array1)
console.log("array1: " + firstRecurringCharacter(array1))
console.log(array2)
console.log("array2: " + firstRecurringCharacter(array2))
console.log(array3)
console.log("array3: " + firstRecurringCharacter(array3))
console.log(array4)
console.log("array4: " + firstRecurringCharacter(array4))