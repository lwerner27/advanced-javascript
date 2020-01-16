function b() {
    var myVar;
    console.log("Function b myVar = " + myVar);
}

function a() {
    var myVar = 2;
    console.log("Function a myVar = " + myVar);
    b();
}

var myVar = 1;
console.log("Global myVar = " + myVar);
var myVar = 3;
console.log("Global myVar = " + myVar);
a();

// Each of the myVar variables are inside their parents execution context.
// This means that changing anyone of them does note change the others.
// Each time you use the var keyword if there is not already a variable withe
// Name inside the current execution context it will create a new instance.

// If you use the keyword var to create a variable with the same name as another
// variable in the same execution context it will overwrite the the old variable.
// you can see that the global myVar gets overwritten on line 14, this will change the value.
