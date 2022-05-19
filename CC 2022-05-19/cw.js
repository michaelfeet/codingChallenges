// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// function countSheeps(arrayOfSheep) {
//     // TODO May the force be with you
// }

//given an array of sheep. always an array. valid elements are true.

//returns present sheep, which are true elements.

let countSheep = (arrayOfSheep) => {
    // total
    // count valid elements (true)
    // return total
    let total = 0
    arrayOfSheep.forEach(e => {
        if (e == true) {
            total ++
        }
    })
    return total
}


arr = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true, , , null, undefined]

console.log(countSheep(arr)) // 17

