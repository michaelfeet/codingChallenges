// DESCRIPTION:
// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.

// original

// var replaceDots = function(str) {
//     return str.replace(/./, '-');
//   }

// var replaceDots = function(str) {
//     return str.replace(/\./g,'-');
//   }

let replaceDots = str => str.split('.').join('-')

console.log(replaceDots('test.test.test'))