// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

let howMuchILoveYou = n => {
    let nn = 0
    if (n > 6) {
        nn = n % 6
        if (nn == 0) {
            nn = 6
        }
    }
    
    if (nn == 1 || n == 1) {
        return 'I love you'
    }else if (nn == 2 || n == 2) {
        return 'a little'
    }else if (nn == 3 || n == 3) {
        return 'a lot'
    }else if (nn == 4 || n == 4) {
        return 'passionately'
    }else if (nn == 5 || n == 5) {
        return 'madly'
    }else if (nn == 6 || n == 6) {
        return 'not at all'
    }
}

// alt

// const phrases = [
//     'I love you',
//     'a little',
//     'a lot',
//     'passionately',
//     'madly',
//     'not at all',
// ]

// function howMuchILoveYou(n) {
//      return phrases[(n - 1) % phrases.length] 
// }

// alt

// const howMuchILoveYou=n=>['not at all','I love you','a little','a lot','passionately','madly'][n%6]


console.log(flower(8))