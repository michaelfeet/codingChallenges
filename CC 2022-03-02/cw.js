// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

let removeExclamationMarks = (str) => str.split('').filter(e => e !== '!').join('')

console.log(removeExclamationMarks('The!'))