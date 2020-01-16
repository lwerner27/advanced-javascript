b();
console.log(a);

var a = "Hello World";

console.log(a);

function b() {
    console.log("Called Function B");
}

// This code executes because of a JavaScript feature called hoisting.
// Execution context is created in two phases.

// =======================
// PHASE ONE
// =======================
// The "Creation Phase"
// Global Object, global "this" and Outer Environment are available here.
// the engine then creates memeory space for variables and functions.
// During this phase functions will be moved to their assigned memeory space.
// Variables do have an assigned memory space here but the values will not be moved until phase 2.
// Variables get a place holder of "undefined" (technically all variables always have a default value of undefined).

// =======================
// PHASE TWO
// =======================
// The "Execution Phase"
// Has all the stuff from the "Creation Phase" (Global Object, "this, etc.").
// Now it runs the code.

// =======================
// BEST PRACTICES
// =======================
// DO NOT RELY ON HOISTING
/* Always organize your code so that variables and
functions are created before they are called. */

// =======================
// SIDE NOTES "Undefined"
// =======================
// "Not defined" and "undefined" are not the same.
// You can verify this with an if else statement.
// Undefined is special keyword (it actually uses memory space).
// NEVER: manually set the value of a variable to undefined.

// =============================
// SIDE NOTES "Single Threaded"
// =============================
// JavaScript is single threaded meaning only one command can run at a time.

// =============================
// SIDE NOTES "Synchronous"
// =============================
// Code is run one line at a time, in order.
