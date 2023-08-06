/* Instructions

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

*/

function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
}

/* Explained solution

This function is named 'ValidatePIN' and it takes a parameter 'pin'. 
Which is expected to be a string representing a PIN number.


on the regex part : 

/: The regex pattern starts and ends with a forward slash, indicating the beginning and end of the regex pattern.
^: This is a special character in regex that denotes the start of the input string. It ensures that the PIN must start at the beginning of the string.
(\d{4}|\d{6}): This part is a group that matches either four digits or six digits.

\d: This is a shorthand character class that represents any digit (0-9).
{4}: This quantifier specifies that the preceding pattern (\d) should occur exactly four times.
|: This is the alternation operator, which allows either the pattern before or after it to be matched.
{6}: This quantifier specifies that the preceding pattern (\d) should occur exactly six times.
$: This is another special character in regex that denotes the end of the input string. It ensures that the PIN must end at the end of the string.

The .test(pin) method is called on the regex pattern, and it tests whether the pin string matches the pattern. If the pin matches the pattern, the function returns true, indicating that the PIN is valid (i.e., it contains only digits and is either four or six digits long). If the pin doesn't match the pattern, the function returns false, indicating that the PIN is invalid.


*/