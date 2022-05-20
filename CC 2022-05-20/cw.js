// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F



// function abbrevName(name){

//     // code away

// }


// takes in a str of two words with one space between the two words. always a string

// return initials of name. first letter of first word, first letter of second word. capitalized. separated by one '.'

let abbrevName = name => {
    // split two names to create individual elements.
    // keep first character of each element / eliminate all other characters
    // capitalize
    // join with '.' separating
    return name.split(' ').map(e => e[0].toUpperCase()).join('.')
}

console.log(abbrevName('Sam Harris')) // S.H
console.log(abbrevName('patrick french'))  // P.F