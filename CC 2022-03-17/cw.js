// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

let betterThanAverage = (theirs ,mine) => avg = theirs.reduce((a, b) => a + b, 0) / theirs.length < mine

console.log(betterThanAverage([4,4,4,1,999,2,3], 4))