/* Instructions

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

*/

// Solutions

function removeEveryOther(arr) {
    const resultArr = arr.filter((element, index) => index % 2 === 0);
    return resultArr;
}

/* Explained Solution

The function is called removeEveryOther, and it takes one parameter, arr, which is expected to be an array.

Inside the function, a new constant resultArr is declared. This variable will store the filtered array that contains only the elements to keep (every first element) from the input array arr.

The filter() method is applied to the arr array. The filter() method creates a new array with elements that pass the test implemented by the provided callback function.

For each element in the arr array, the callback function is executed. The callback function takes two arguments: element, representing the current element in the array, and index, representing the index of the current element.

The callback function checks whether the index is even (index % 2 === 0). If the index is even (0, 2, 4, etc.), it means the element is at an even position in the array and should be kept. If the index is odd (1, 3, 5, etc.), it means the element is at an odd position and should be removed.

The filter() method creates a new array (resultArr) containing only the elements that pass the condition (the ones at even indices) from the original arr array.

Finally, the resultArr is returned as the output of the function. It contains only the elements to keep (every first element) from the input array arr.

*/

