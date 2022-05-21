// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// given an array if integers.
// null and empty returns []
// return arr [(positiveCount), (negativeSum)]
// return disregards 0

let countPositivesSumNegatives = (input) => {
    // null and empty returns []
    // need new arr to modify based on parameters
    // count elements that are positive integers in array 
    // sum negative integers in array
    // return arr [(positiveCount), (negativeSum)]

    return (input && input.length) ? [
        input.filter(x => x > 0).length,
        input.reduce((a, e) => e < 0 ? a + e : a, 0)
      ] : [];
}

    

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) // [10, -65]


console.log(countPositivesSumNegatives([0, 0, 2, 3, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])) // [8, -50]

console.log(countPositivesSumNegatives([])) // []