// Objects are collections of "key:value" pairs.
// Objects have properties that can be many different things.
var exampleObj = {
    // This is a primitive property
    firstName: "Lucas",
    // This is an example of another object being a property.
    appearance: {
        eyeColor: "Brown",
        hairColor: "Brown"
    },
    // This is an example of a function being a property.
    // We call these methods.
    greeting: function() {
        console.log("Hello World!");
    }
};

// Object properties in JavaScript do not reference the value directly.
// The object remembers the memory location where the requested key's value is stored.

// There are a few more ways that we can add properties to objects.

// One way is by using the "computed member access operator" like so:
exampleObj["lastName"] = "Werner";

// We can also use the "computed member access operator" to access existing properties.
console.log("The value of the property lastName is: " + exampleObj["lastName"]);

// Another way to do both of the things we did above is to use "dot notation"
exampleObj.middleName = "James";
console.log(
    "The value of the property middleName is: " + exampleObj.middleName
);

// We can use these methods to add any type property we want.
exampleObj["address"] = {};

// Now that we have addeda new property which is currently an empty object
// We can add more properties to that sub object like so
exampleObj.address.houseNumber = 232;
exampleObj.address.street = "Wallaby Way";
exampleObj.address.city = "Sydney";

// The same applies for adding methods to the object.
exampleObj.salutation = function() {
    console.log("Goodbye World.");
};

// And we an access them just the same
exampleObj.greeting();
console.log(
    `${exampleObj.address.houseNumber} ${exampleObj.address.street}, ${exampleObj.address.city}`
);
exampleObj.salutation();
