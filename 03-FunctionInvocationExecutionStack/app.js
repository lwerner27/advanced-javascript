function a() {
    console.log("Hello");
}

function b() {
    a();
    console.log("Goodbye");
}

b();

console.log("Hello World");

// ================================================
// NOTES: Execution Context and Execution Stack
// ================================================
/* 
Each time a function is called it runs through the "Creation" and "Execution" phases.
Each function creates a new execution context that is added to the top of the execution stack.
Whatever is on top of the excution stack is what is currently running.
Once something finishes it gets removed from the top of the stack and the stack works downwards.

The Execution stack of this file would look something like this as of line 10:

Function A's Execution Context (The A function needs to finish before b can finish running).
Function B's Execution Context (the B function neesd to finish before the Global context can continue).
The Global Execution Context () (The "Hello World" will only run once the b fucntion finishes execution).
*/
