// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5" (in COBOL "found the needle at position 6")



// given an array. find "needle"

// "found the needle at position " plus the index

let findNeedle = arr => {
    let index = arr.findIndex(e => e == 'needle')
    return `found the needle at position ${index}`
}


// let findNeedle = arr => {return arr.findIndex((e, i) => {
//     e == 'needle' ? console.log(`found the needle at position ${i}`) : console.log('not found')
// })
// }


// arr.findIndex((e, i) => 
//     {if (e == 'needle') {return `found the needle at position ${i}`
//     }}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))