/* Instructions 

Write function bmi that calculates body mass index (bmi = weight / height^2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/

function bmi(weight, height) {

    let bmi = weight/ height**2 ;

    const result = 
    bmi <= 18.5 ? 'Underweight' 
        : bmi <= 25.0 ? 'Normal' 
        : bmi <= 30.0 ? 'Overweight' 
        : bmi > 30 ? 'Obese' : null;

    return result;

}

/* Explained solution 

The bmi function takes two parameters: weight (representing the weight of a person) and height (representing the height of a person).
The function calculates the Body Mass Index (BMI) using the formula bmi = weight / height ** 2, where ** represents the exponentiation operator.

The BMI value is then checked using a series of ternary operators to determine the weight category.

If the BMI is less than or equal to 18.5, it returns "Underweight".
If the BMI is less than or equal to 25.0, it returns "Normal".
If the BMI is less than or equal to 30.0, it returns "Overweight".
If the BMI is greater than 30, it returns "Obese".
*/