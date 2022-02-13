// 7 kyu shortest word

// DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

let findShort = str => {
    let sorted = str.split(' ').sort((a, b) => a.length - b.length)
    return sorted[0].length
}

console.log(findShort('the quick brown fox jumped over the lazy a dog'))