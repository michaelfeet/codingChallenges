// 7 kyu Mumbling

// DESCRIPTION:
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(str) {
    str = str.split('').map((e,i) => {
        return e.repeat(i+1)
    })

    return str.map((e, i) => {
        return str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase()
    }).join('-')
}

// function accum2(str) {
//     return str.split('').map((e, i) => (e.toUpperCase() + e.toLowerCase().repeat(i))).join('-')
// }

console.log(accum("RqaEzty"))