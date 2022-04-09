// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//   let sum = 0
//   arr.forEach(e => {
//       if (e > 0) {
//           sum += e
//       }else {
//           if (e = 0) {
//               return 0
//           }
//       }
//   })
//   return sum
// }

// console.log(positiveSum([]))

let positiveSum = arr => {
    let sum = 0
    arr.forEach(e => e > 0 ? sum += e : 0)
    return sum
}