// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//given one str. always a str

//return original str minus first and last char

let removeChar = str => {
//identify first char
    return str.slice(1, str.length - 1)
//remove first char
//identify last char
    str.replace(str[str.length - 1])
//remove last char
//return modified str
    
}

console.log(removeChar('The quick brown fox')) // 'he quick brown fo'
console.log(removeChar('Hello!')) // 'ello'
