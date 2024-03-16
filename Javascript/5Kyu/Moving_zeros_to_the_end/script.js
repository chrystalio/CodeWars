// Url : https://www.codewars.com/kata/52597aa56021e91c93000cb0
// Title : Moving Zeros To The End

// Instructions : 
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = arr => {
    let zeros = arr.filter(val => val === 0); // Filter out zeros
    let nonZeros = arr.filter(val => val !== 0); // Filter out non-zeros
    return [...nonZeros, ...zeros]; // Concatenate non-zeros and zeros
};

// Simple Test :
// console.log(moveZeros([false, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))