// 7 kyu Isograms

// DESCRIPTION:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

function isIsogram(str) {
    
    if(!str.length) return true
    else{
        str = str.toLowerCase()
        arr = str.split('')
        sorted = arr.sort()
    }
    for(let i = 0; i < sorted.length; i++){
        if(sorted[i+1] == sorted[i]) {
            return false
        }
    }return true
}

// function isIsogram(str) {
//     //if empty return true.
//     if (str.isEmpty) {
//       return true;
//     } else {
//       // All lower case.
//       str = str.toLowerCase();
//     }
//     //split string into individual characters. 
//     var array = str.split('');
//     var sortedArr = array.slice().sort();
  
//     for (var i = 0; i < array.length; i++) {
//       //if duplicate is found return false.
//       if (sortedArr[i + 1] == sortedArr[i]) {
//         return false;
//       }
//     }
//     //else return true
//     return true;
//   }
  
console.log(isIsogram('Dermatoglyphics'))
console.log(isIsogram('isogram'))
console.log(isIsogram('aba'))
console.log(isIsogram('moOse'))
console.log(isIsogram('isIsogram'))
console.log(isIsogram(''))

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)