// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {
    let arr = []
    str = str.split(' ')
    str.forEach((e, i) => {
        arr.push((`${e} ${e.length}`))
    })
    return arr
    // let sentence = ``
    // str = str.split(' ')
    // str.forEach((e,i) => {
    //     if(i != str.length - 1) {
    //         sentence += (`${e} ${e.length}, `)
    //     }else {
    //         sentence += (`${e} ${e.length}`)
    //     }
    // })
    // return sentence
}

console.log(addLength('apple ban'))