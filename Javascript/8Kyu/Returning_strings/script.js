/* Instructions 
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]
*/

// Solutions

function greet(name){
    return `Hello, ${name} how are you doing today?`
}

/* Explained Solutions

The greet function takes a name parameter and returns a greeting statement using template literals. The template literal allows us to embed expressions (in this case, the name variable) inside a string using ${} syntax. When the function is called, the value of the name parameter will be inserted into the placeholder ${name}.

The function's purpose is to generate a personalized greeting message in the format: "Hello, <name> how are you doing today?", where <name> is replaced with the actual name provided to the function.

*/