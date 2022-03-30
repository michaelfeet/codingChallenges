// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]



// given an array if integers.

// return new arr with each value doubled

let maps = x => {
    // double each element of array
    return x.map(e => e * 2)

}

console.log(maps([1,2,3])) // [2,4,6]