// 7 kyu Which triangle is that?

// DESCRIPTION:
// Build a function that will take the length of each side of a triangle and return if it's either an Equilateral, an Isosceles, a Scalene or an invalid triangle.

// It has to return a string with the type of triangle.
// For example:

// typeOfTriangle(2,2,1) --> "Isosceles"

function typeOfTriangle(a, b, c) {

    if((a + b > c) && (a + c > b) && (b + c > a)) {
        if(a === b && b === c && c === a) {
        return 'Equilateral';

        }else if(a === b || b === c || c === a) {
        return 'Isosceles';

        }else{
        console.log(typeof(a))
        return 'Scalene';
        }
    }
    return 'Not a valid triangle'
}
    
    // if (((a + b > c) && (a + c > b) && (b + c > a) === false) || typeof(a, b, c != 'number'))
    //     return 'Not a valid triangle'

    // if(a === b && b === c && c === a) {
    //     return 'Equilateral'
    // }else if(a === b || b === c || c === a) {
    //     return 'Isosceles'
    // }else{
    //     console.log(typeof(a))
    //     return 'Scalene'
    // }


console.log(typeOfTriangle('.',2,8))