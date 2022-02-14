// 6kyu Create Phone Number
// DESCRIPTION:
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(arr) {
    let phoneNumber = ''
    let phoneNumber1 = ''
    let phoneNumber2 = ''
    let phoneNumber3 = ''
    for (let i = 0; i < arr.length; i++) {
        if(i < 3) {
            phoneNumber1 += arr[i]
        }else if(i < 6) {
            phoneNumber2 += arr[i]
        }else {
            phoneNumber3 += arr[i]
        }
    }
    phoneNumber = `(${phoneNumber1}) ${phoneNumber2}-${phoneNumber3}`
    return phoneNumber
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

// let createPhoneNumber = arr => {
//     let formatted = '(xxx) xxx-xxxx'
//     for(let i = 0; i < arr.length; i++) {
//         formatted = formatted.replace('x', arr[i])
//     }
//     return formatted
// }

// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))