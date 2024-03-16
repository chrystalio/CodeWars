// Url : https://www.codewars.com/kata/52449b062fb80683ec000024
// Title : The Hashtag Generator

// Instructions : 
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
    const trimmedStr = str.trim();
    if (trimmedStr === '') return false;

    const capitalizedWords = trimmedStr.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const hashtag = '#' + capitalizedWords.join("");

    return hashtag.length <= 140 ? hashtag : false;
}



// Simple Test : 
// console.log(generateHashtag("codewars"));
// console.log(generateHashtag("Do We have A Hashtag"));
// console.log(generateHashtag(("Codewars is nice")));