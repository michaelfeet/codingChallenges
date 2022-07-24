// 7 kyu Beginner Series #3 Sum of Numbers
// DESCRIPTION:
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

let getSum = (a, b) => {
    let sum = 0
    let arr = [a, b]
    arr = arr.sort((a, b) => a - b)
    for(let i = arr[0]; i <= arr[1]; i++) {
        sum += i
    }
    return sum
}

console.log(getSum(2, -1))