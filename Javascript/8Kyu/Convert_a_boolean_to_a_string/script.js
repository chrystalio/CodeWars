/* Instructions 

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.

*/

// Solutions

function booleanToString(b) {
    if (typeof b !== 'boolean') {
        return 'Input must be a boolean!';
    }

    return b ? 'true' : 'false';
}

/* Function Explanation:

This function takes a single parameter 'b', which represents a boolean value.

1. The function begins by checking the data type of the 'b' parameter.
    - If the data type is not boolean, the function returns the error message 'Input must be a boolean!'

2. If the data type of 'b' is indeed a boolean, the function proceeds to the next step.

3. The function employs a ternary expression to determine the string representation of the boolean value:
    - If the boolean value is true, the function returns the string 'true'.
    - If the boolean value is false, the function returns the string 'false'.

In summary, this function converts a boolean value into its corresponding string representation while ensuring the input's validity.

*/
