// 8kyu hex to decimal
// Complete the function which converts hex number (given as a string) to a decimal number.

let hexToDec = hexString => {
    return parseInt(hexString, 16)
}

console.log(hexToDec("10"))