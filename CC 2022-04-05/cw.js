// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//     // code goes here
// }

// input is always a valid number.
// input is 3 numbers. 1 from each league.

// return total of all numbers

let goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => {
    // sum of 3 parameters
    let sum = laLigaGoals + copaDelReyGoals + championsLeagueGoals
    //return sum
    return sum
}

// let goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => laLigaGoals + copaDelReyGoals + championsLeagueGoals

console.log(goals(2,4,6)) // 12

