// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// let reverseSeq = n => {
//     let newArr = []
//     for (let i = 0; i < n.length; i++) {
//         newArr.push(n[i])
//     }
//     return newArr
// }

let reverseSeq = n => {
    let arr = []
    for (let i = n; i > 0; i --) {
        arr.push(i)
    }
    return arr
}




console.log(reverseSeq(10))