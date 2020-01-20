// This function takes in one parameter called name
function greet(name) {
    console.log(`Hello ${name}.`);
}

// Heres what happens when we call that function
// and pass it the appropriate arguments.
greet("Lucas");

//What happens if we dont pass it the appropriate arguments.
greet(); // This will return: "Hello undefined."

// This is because when the function gets called a new execution environment is created
// The JavaScript engine allocates memory for the name variable in that environment
// But since we never assign it a value it maintains its default value of "undefined."

// Here is one way to workaround this problem.
// The first is done by use the OR opererator "||"
function orGreet(name) {
    var name = name || "<Your name goes here>";
    console.log(`Howdy ${name}.`);
}

orGreet();
orGreet("Lucas");

// This works because the "||" operator returns the first true value that it comes across.
// So any false value, or no existent value will make the "<Your name goes here>" message appear.
// Refer the last section for examples of false values or "non-existant" values.
