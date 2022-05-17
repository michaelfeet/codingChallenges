//Simple, remove the spaces from the string, then return the resultant string.

// function noSpace(x){
//     return x.split('').filter(e => !(e == ' ')).join('')
// }
// console.log(noSpace('the quick brown fox'))

// let noSpace = x => x.split('').filter(e => !(e == ' ')).join('')
let noSpace = x => x.split(' ').join('')

console.log(noSpace('the quick brown fox'))