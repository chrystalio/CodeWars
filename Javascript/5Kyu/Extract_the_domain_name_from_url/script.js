/* Instructions

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

url = "http://github.com/carbonfive/raygun" -> domain name = "github"
url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
url = "https://www.cnet.com"                -> domain name = cnet"

*/

// Solutions 
function domainName(url){
    return url.replace(/(https?:\/\/)?(www.)?/, '').split('.')[0];
}

/* Explained Solutions 

This function domainName takes a url as a parameter. Inside the function there's a single return statement that performs the following steps 
-   The replace() method is used to remove the protocol (http:// or https://) and the www. from the beginning of the URL. It uses a regular expression to match 
    and replace these parts with an empty string. The resulting string contains only the domain name and the rest of the path.
-   The split('.') method is used to split the remaining string into an array using the dot (.) as the separator. This effectively separates 
    the domain name from the rest of the path.
-   The [0] index is used to access the first element of the array, which represents the domain name.
-   The function then returns the domain name as a string.

So, the function domainName takes a URL as input and extracts the domain name from it by removing the protocol and www. (if present) and then splitting the string using the dot (.) as the separator to get the domain name. The extracted domain name is then returned as the output.

console.log(domainName("http://github.com/carbonfive/raygun")); // Output: "github"
console.log(domainName("http://www.zombie-bites.com")); // Output: "zombie-bites"
console.log(domainName("https://www.cnet.com")); // Output: "cnet"

*/