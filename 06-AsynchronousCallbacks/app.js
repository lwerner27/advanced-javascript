// Long Running Function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {}
    console.log("Finished function.");
}

// Function that runs when a click happens
function clickHandler(event) {
    event.preventDefault();
    console.log("Click event occurred.");
}

// Listens for click event and calls the appropriate function when it does
document.addEventListener("click", clickHandler);

waitThreeSeconds();
console.log("Global stack is clear.");

//==========
// NOTES
//==========
/*
In this example we can see how events can be queued for later execution.
If you click during the duration of the "waitThreeSeconds" function 
an a click event will be queued and you will see the result of 
the clicker handler show up after the you get the message the 
global stack has been cleared (Note: I did have some issues in Chrome).
*/
