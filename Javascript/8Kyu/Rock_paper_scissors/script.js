/* Instructions 

Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

*/

function rockPaperScissors(p1, p2) {
    if (p1 === p2) {
        return "Draw!";
    } else if (
        (p1 === "rock" && p2 === "scissors") ||
        (p1 === "scissors" && p2 === "paper") ||
        (p1 === "paper" && p2 === "rock")
    ) {
        return "Player 1 won!";
    } else {
        return "Player 2 won!";
    }
}

/* Explained solution 

The rockPaperScissors function takes two parameters: p1 and p2, which represent the choices made by two players in the Rock Paper Scissors game
Inside the function, there are three main if-else conditions to determine the winner:

The first condition checks if both p1 and p2 have the same value. 
If they are equal, it means the game is a draw, and the function returns "Draw!".

The second condition checks if p1 beats p2. For example, "rock" beats "scissors", "scissors" beats "paper", and "paper" beats "rock". 
If this condition is true, it means "Player 1" has won, and the function returns "Player 1 won!".

The final condition is the "else" part, which means if none of the previous conditions are met, 
then "Player 2" has won, and the function returns "Player 2 won!".

The function returns the result as a string, indicating whether 
"Player 1 won!", "Player 2 won!", or "Draw!" based on the players' choices.
*/