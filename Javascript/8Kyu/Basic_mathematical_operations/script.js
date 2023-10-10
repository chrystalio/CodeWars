/* Instructions

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

*/

// Solutions
function basicOp(operation, value1, value2) {
    const result = 
    operation === '+' ? value1 + value2 
        : operation === '-' ? value1 - value2 
        : operation === '/' ? value1 / value2 
        : operation === '*' ? value1 * value2 : null;

    return result;
}

/* Explained Solution 

On this test, i checked the operation value using ternary operations.
If operations equals '+' then it's returns value1 + value2 
and so goes on.

*/