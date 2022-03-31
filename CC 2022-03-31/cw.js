// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

// function digitize(n) {
//     //code here
// }

// given a valid number. not negative

// return number as an array, reversed

let digitize = (n) => {
    // array
    // split
    // reverse
    // push
    n += ''
    return n.split('').reverse().map(e => +e)
}

console.log(digitize(348597)) // [7,9,5,8,4,3]