// 7kyu Two to One

// DESCRIPTION:
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

let longest = (s1, s2) => {
    newStr = s1 + s2;
    newStr = newStr.split('').sort().join('')
    return [...new Set(newStr)].join('')
}

console.log(longest("aretheyhere", "yestheyarehere"))