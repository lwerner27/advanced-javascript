// If we do this we will overwrite the libraryName variable from lib1
// var libraryName = "Library Two"

// We can check the global object to see if a variable already exists
// This will help us avoid overwriting existin varibales from another library.
window.libraryName = window.libraryName || "Library Two";
