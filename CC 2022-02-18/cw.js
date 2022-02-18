// 8 kyu Hello, Name or World!

// DESCRIPTION:
// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

function hello(name) {
    return `Hello, ${name === undefined || name === '' ? 'World' 
    : name.split('').map((e, i) => {
        return i === 0 ? e.toUpperCase() : e.toLowerCase()
    }).join('')}!`
    
    // name === undefined || name === '' ? 'World!' 
    // : name.split('').map((e, i) => {
    //     return i === 0 ? e.toUpperCase() : e.toLowerCase()
    // }).join('')
}

console.log(hello('joHn'))