// Operators are special functions written differently
// They generally take to parameters and return one result

// This is an example of the addition operator at work.
var additionOperator = 3 + 4;
console.log("The sum of 3 and 4 is: " + additionOperator);

// You can think of this operator like this:
// function +(a,b) {
//     // Return the value of a and b added together
// }

/* 
The + can be thought of as a function call
but instead of using parenthesis to get the arguments
its just grabs them from either side of the operator.

This type of function call is called: "Infix Notation."
*/

// Here are some other operators

// Boolean Operators include:
// <, >, <=, >=, ==, ===
// These operators check for truthiness
// Thus they return true or false based on the result
// In this is example the result is true.
// But if you changed the operator to <
// then the result would be false.
var booleanOperator = 4 > 3;
console.log("The statement of 4 > 3 is: " + booleanOperator);

// Subtraction Operator
// This operator returns the difference between two argumtns.
var subtractionOperator = 4 - 3;
console.log("The difference of 4 and 3 is: " + subtractionOperator);

// The Multiplication Operator
// This operator finds the product of two arguments.
var multiplicationOperator = 4 * 3;
console.log("Product of 4 and 3 is: " + multiplicationOperator);

// The Division Operator
// This operator finds the quotient of two arguments.
var divisionOperator = 4 / 3;
console.log("The quotient of 4 divided by 3 is: " + divisionOperator);

// Modulus Operator
// This operator returns the remainder of a quotient.
// In this case the result would be 1.
var modulusOperator = 4 % 3;
console.log("The remainder of 4 divided by 3 is:" + modulusOperator);

// One operator that we have using all along without even knowing it is =
// = is the assignment operator it assigns a value to space in memory.
