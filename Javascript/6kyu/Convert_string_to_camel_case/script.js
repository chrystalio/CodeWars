// Url : https://www.codewars.com/kata/517abf86da9663f1d2000003/
// Title: Convert string to camel case

// Instructions:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


function toCamelCase(str){
    let wordArr = str.split(/[-_]/);

    for (let i = 1; i < wordArr.length; i++) {
        wordArr[i] = wordArr[i][0].toUpperCase() + wordArr[i].slice(1);
    }

    return wordArr.join('');
}

// Simple Test outputs
console.log(toCamelCase('')); // Expected output: ''
console.log(toCamelCase("the_stealth_warrior")); // Expected output: "theStealthWarrior"
console.log(toCamelCase("The-Stealth-Warrior")); // Expected output: "TheStealthWarrior"
console.log(toCamelCase("A-B-C")); // Expected output: "ABC"