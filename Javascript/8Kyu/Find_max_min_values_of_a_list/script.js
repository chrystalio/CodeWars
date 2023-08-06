/* Instructions 

Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) 
that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
[4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
[-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
[42, 54, 65, 87, 0]             -> min = 0, max = 87
[5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors.

*/

let min = function (list) {
    return list.reduce((min, current) => (current < min ? current : min), list[0]);
}

let max = function (list) {
    return list.reduce((max, current) => (current > max ? current : max), list[0]);
}


/* 
Or you could use the shorter code like this
const min = (list) => list.reduce((min, current) => (current < min ? current : min), list[0]);
const max = (list) => list.reduce((max, current) => (current > max ? current : max), list[0]);
*/


/* Explained Solution 

The code contains two functions, `min` and `max`, which find the minimum and maximum values in a list of integers using the `reduce()` method.

**min function**:
- Takes a list of integers as input (`list`).
- Uses `reduce()` to find the minimum value (`min`) in the list.
- Compares each element (`current`) with the current minimum (`min`) and updates it if `current` is smaller.
- Returns the minimum value found.

**max function**:
- Takes a list of integers as input (`list`).
- Uses `reduce()` to find the maximum value (`max`) in the list.
- Compares each element (`current`) with the current maximum (`max`) and updates it if `current` is larger.
- Returns the maximum value found.

Both functions efficiently find the minimum and maximum values in the given list of integers using `reduce()`.
*/