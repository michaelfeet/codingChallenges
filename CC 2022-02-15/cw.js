// 8 kyu Name Shuffler

// DESCRIPTION:
// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str) {
    arr = str.split(' ');
    [arr[0], arr[1]] = [arr[1], arr[0]];
    return arr.join(' ')
}

console.log(nameShuffler('michael feet'))