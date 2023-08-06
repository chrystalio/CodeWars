/* Instructions 
For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

Note: Make sure you return the correct message with correct spaces and punctuation.
*/


// Solutions

function cookie(x){
    let type = typeof(x);

    if(type === "string") {
        return "Who ate the last cookie? It was Zach!"
    } else if(type === "number") {
        return "Who ate the last cookie? It was Monica!"
    } else {
        return "Who ate the last cookie? It was the dog!"
    }
    
}

/* Explained solutions 

In this function, I first check the data type of the input x and store it in the type variable.
Next, I check if the data type matches any of the expected types and return the corresponding message for each type.

Instead of defining separate messages for integers and floats, I use a generic 'number' type to cover both cases, as the behavior is the same.


*/