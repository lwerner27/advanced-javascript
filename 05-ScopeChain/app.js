function b() {
    console.log("The following should always be equal to the Global myVar");
    console.log("Function B myVar: " + myVar);
}

function a() {
    var myVar = 2;
    console.log("Function A myVar: " + myVar);
    b();
}

var myVar = 1;
console.log("Global myVar: " + myVar);
a();
console.log("The following myVar should be equal to the Global myVar");
console.log(myVar);

// =======================
// NOTES
// =======================
/*
JavaScript will do more than just check the current execution environment for variables.
If the desired variable is not found inside the current execution environment 
Javascript will check the outer environment for the desired variable.

In this case our outer environment is the global execution context.
That is why function b always show the value of 1. 

Its important to understand the that the outer environment is determined by the source of the function,
not where the function is called. This can also be thought of as which "Creation Phase" created this function.

Since our b function is defined in the global environment, when it goes looking for the myVar variable.
It will first check it's own execution context and if it does not find it there it will check the global execution context.

If you move the the b function declaration into the a function then the console inside of function b 
will reference the myVar from function a. This is a result of the change in the "Lexical Environment."
*/
