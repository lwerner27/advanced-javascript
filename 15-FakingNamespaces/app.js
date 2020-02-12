// What is namespace?
// A container for variables fand fucntions
// JavaScript does not have namespaces

var greet = "Hello";
var greet = "Hola";

// This will output Hola becaus the names collide
console.log(greet);

// We can avoid this by using objects to contain things
var english = {};
var spanish = {};

english.greet = "Hello";
spanish.greet = "Hola";

console.log(english.greet);
console.log(spanish.greet);

// This is very common in librarys and frameworks that are used everyday.
