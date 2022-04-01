// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// function century(year) {
//     // Finish this :)
//     return;
// }

// given a year. valid number.

// return century of given year

let century = year => {
    // 1-100 is 1
    // 101-200 is 2
    // 1705 is 17.5
    // year / 100 rounded UP to nearest whole number
    return Math.ceil(year / 100)

}

// let century = year => Math.ceil(year / 100)

console.log(century(1705)) // 18
console.log(century(1900)) // 19
console.log(century(1601)) // 17
console.log(century(2000)) // 19