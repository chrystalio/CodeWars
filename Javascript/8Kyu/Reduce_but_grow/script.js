/* Instructions

Given a non-empty array of integers, the goal is to calculate the product of all the values in the array, considering their order. For example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/

function grow(x) {
    let result = 1; // Initialize the result as 1

    // Loop through each element in the input array
    for (let i = 0; i < x.length; i++) {
        result *= x[i]; // Multiply each value with the result
    }

    // Return the final result, which is the product of all array values
    return result;
}

// Example usage:
const numbers = [1, 2, 3, 4];
const product = grow(numbers);
console.log(product); // This will output 24

/* Explanation:

In this code, we have a function called grow that takes an array of integers as input. 
We initialize a variable called result to 1, which will be used to store the product of the array values. 
Next, we loop through each element in the input array using a for loop. 
Inside the loop, we multiply each element with the current value of result, effectively accumulating the product. 
Finally, we return the result, which represents the product of all the values in the array, considering their order.

*/
