// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// function twoSort(s) {

// }

//  given a vector of strings. always valid strings in vector.
// sort array alphabetically (case-sensitive, and based on the ASCII values of the chars)

// return first value after sort.
// returned value must be a string
// '***' between each character of retrurned string // 'd***o***g'

let twoSort = s => {
    // sort araray alphabetically
    return s.sort().find((e, i) => i == 0).split('').join('***')
    // identify first element of array
    // split first element
    // add *** between each charater of first element
}


let arr = ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]

console.log(twoSort(arr)) // bitcoin, knows, maybe, ..., world