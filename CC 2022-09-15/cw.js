// 8kyu is this my tail

// DESCRIPTION:
// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be non empty strings, and normal letters.

let correctTailDeprecated = (body, tail) => sub = body.substr(body.length-(tail.length)) === tail? true : false

//substr is deprecated

let correctTail = (body, tail) => body[body.length - 1] === tail

console.log(correctTail('fox', 'y'))