// Much like the Number() function we saw in the 10th section
// There is a Boolean() function for coercing values to boolean values.

// Here are a few examples of false values
console.log('Is "undefined" true or false: ' + Boolean(undefined)); // This will return false
console.log('Is "null" true or false: ' + Boolean(null)); // This will return false
console.log('Is "" true or false: ' + Boolean("")); // This will return false
console.log("Is 0 true or false: " + Boolean(0)); // This will return false

// All of the above imply the lack of existance, and they are all false.

// Here some examples of true values
console.log('Is "Lucas Werner" true or false: ' + Boolean("Lucas Werner")); // This will return true
console.log("Is 1 true or false: " + Boolean(1)); // This will return true
console.log(
    "Is a JSON object true or false: " + Boolean({ firstName: "Lucas" })
); // This will return true

// All of the examples above this line IMPLY existance.

// Example of checking for existance
// Lets create a new variable but not assign it a value.
var newVariable;

// Now lets check for that variables existance with a conditional statement.
if (newVariable) {
    console.log("The newVariable exists.");
} else {
    console.log("The new variable does not exist.");
}

// Above will return tht else statement because unassigned variable have a default value of "undefined".
// The "undefined" value implies a lack of existance.

// now lets assign our variable a value and see what happens.
newVariable = "Lucas";

// Now check for existance again using the same conditional statement.
if (newVariable) {
    console.log("The newVariable exists.");
} else {
    console.log("The new variable does not exist.");
}

// This result of if statement is returned.
// This is because the value we assigned to newVariable can be coerced to the boolean true.
// And true booleans IMPLY existance.

// IMPORTANT NOTE
// If newVariable ever equals 0 it will return the else statement because 0 is false value.
// If you need to work around this in a situation where 0 might be a valid value
// use a strict equality check to see if the value is 0 like so.
newVariable = 0;

if (newVariable || newVariable === 0) {
    console.log("The newVariable exists.");
} else {
    console.log("The newVariable does not exist.");
}

// This stick comparison check specifically to see if the value is equal to 0.
// if it is the result of this conditional statement would be "if (false || true)"
// Which can be read as "if false or true" run the if statement.
// Since our newVariable strictly equals 0 our if statement will be satsified.
