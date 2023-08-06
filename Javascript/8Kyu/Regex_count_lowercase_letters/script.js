/* Instructions
Your task is simply to count the total number of lowercase letters in a string.

Examples
"abc" ===> 3

"abcABC123" ===> 3

"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

"" ===> 0;

"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

"abcdefghijklmnopqrstuvwxyz" ===> 26
*/

// Solution
function lowercaseCount(str){

    let data = str.match(/[a-z]/g);

    if (data === null) {
        return 0;
    } else {
        return data.length;
    }
}

/* Explained Solution:

The function is named 'lowercaseCount', and it takes a single parameter called 'str', which is expected to be a string.

Within the function, a regular expression is used to check the input string for the presence of lowercase letters (a-z). The regular expression `/[a-z]/g` is applied to the input string using the `.match()` method, which returns an array containing all matched lowercase letters found in the string.

Next, the code checks if the `data` variable, which holds the result of the `.match()` method, is `null`. If the `data` array is `null`, it means there were no lowercase letters in the input string, and the function returns `0`.

On the other hand, if the `data` array is not `null`, it means that lowercase letters were found in the input string. The function then returns the length of the `data` array, which represents the total count of lowercase letters in the input string.

To summarize, the 'lowercaseCount' function effectively uses a regular expression to count the total number of lowercase letters in the input string. It returns `0` if there are no lowercase letters and the count of lowercase letters if they are present in the string.
*/
