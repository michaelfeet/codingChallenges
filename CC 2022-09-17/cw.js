// 8kyu Remove duplicates from list

// DESCRIPTION:
// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

let removeDupliates = arr => [...new Set(arr)]

console.log(removeDupliates([1,1,1,2,3,4,5,6]))