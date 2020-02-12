// What are first class functions?
// Anything and everything you can do with other types
// you can alos do with functions

// Important properties for functions
// Name: the name of the function (they can be nameless or anonymous)
// Code: The code you write is not the function
// The code is a property of the object that is the function.

// Look at the following function for some examples
function greet() {
    console.log("Hello World");
}

greet.stringProp = "This is a string property on a function object.";

greet();
console.log(greet.stringProp);
