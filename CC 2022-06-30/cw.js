// DESCRIPTION:
// Write a function that checks if a given string (case insensitive) is a palindrome.

let isPalindrome = str => str.toLowerCase() == str.toLowerCase().split('').reverse().join('')

console.log(isPalindrome('Racecar'))