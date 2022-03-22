// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.



let find_average = (arr) => arr.length == 0 ? 0 : arr.reduce((a, e) => a + e, 0) / arr.length

console.log(find_average([1,1,1]))