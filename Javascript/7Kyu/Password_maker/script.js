// Password Maker

// Description :
// One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

// Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

// instead of including i or I put the number 1 in the password;
// instead of including o or O put the number 0 in the password;
// instead of including s or S put the number 5 in the password.

// Examples:
// "Give me liberty or give me death"  --> "Gml0gmd"
// "Keep Calm and Carry On"            --> "KCaC0"

const makePassword = (phrase) => {
    return phrase.split(" ").map(word => word[0]).join('').replace(/[ois]/gi, match => ({ o: '0', i: '1', s: '5' }[match.toLowerCase()]));
};

// makePassword('Keep Calm and Carry On');

// Solutions :
// Split the phrase into an array of words using .split(" ").
// Extract the first character of each word using .map().
// Join the extracted characters into a single string using .join('').
// Replace specific letters (o → 0, i → 1, s → 5) using .replace() with a regex pattern for cleaner and efficient code.
