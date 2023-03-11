// // 8 kyu
// // Surface Area and Volume of a Box

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
    return [(2 * depth * width) + (2 * depth * height) + (2 * height * width), 
        depth * width * height]
}

console.log(getSize(4, 2, 6))