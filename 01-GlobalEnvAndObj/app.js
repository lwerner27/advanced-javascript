// Look at the window object in the Chrome Web Tools,
// Also look at the "this" object (it shoudl be the same as the window object).
// Reminder: Global essentially means "Not inside a function"

// This function has a global scope
// This means it will show up on the global "this" element, as well as the window element
function a() {
    console.log("Called function a.");
}

// Var will be scoped to its current execution context
// In this case it is globally scoped
// It will also appear on the global "this" element
var b = "Good Morning";

// Let has a block scope so it will not show up on the "this" element like the variable and function above
let c = "Good Day";

// Const is also blocked scoped so the same rules rome the c variable apply
// but it is also immutable which means its value connot be changed.
const d = "Good Evening";
