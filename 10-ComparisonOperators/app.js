// The following code will return true
console.log("this is the result of (1 < 2 < 3): " + (1 < 2 < 3));

// But this line of code will also return true, why?
console.log("this is the result of (3 < 2 < 1): " + (3 < 2 < 1));

/* 
This is because both operators have the the same precedence (they are the same operator).
Since comparison operators are resolved left to right it starts by evaluating (3 < 2).
So 3 > 2 resolves to false, a false value can also be coerced to 0, you can see that below.
so what is actually happening is (3 < 2 < 1) is being solved as (0 < 1).
*/

console.log("This is false forcibly coerced to a number: " + Number(false));

// == is another comparison operator, checking for equality.
// Double equal is interesting in that it does coercion.

// Both of the following statements will return true.
// This is because the string 3 on the second line will be coerced to a number.
console.log("Does 3 equal 3: " + (3 == 3));
console.log('Does "3" equal 3:' + ("3" == 3));

// There can be some strange side effects

// The following will return true even though it might seem strange.
// Remember false can be coerced to the number 0.
console.log("Does false eqaul zero: " + (false == 0));

// How about a similar example
// Lets coerce null to a number
console.log("Null as a number is: " + Number(null));

// Above shows that null also coerces to 0
// So (null == 0) should also reaturn true.
console.log("Does null equal 0: " + (null == 0));

// Why does (null == 0) return false when it coerces to 0?
// The answer is that null coerces to 0 for all comparison operates
// Except for equality checks

// Null < 1 will return true
console.log("Is null < 1: " + (null < 1));
// But as seen above null will not coerce to 0 for (null == 0)
// This is a strange quirk of that language that is often regarded as a negative.

// Another example of this can be show using an empty string ("")
console.log('Is "" equal to 0: ' + ("" == 0)); // This will return true
console.log('Is "" equal to false: ' + ("" == false)); // This will return true as well.

// All of these strange case make it so that we should always use the "===" operator.
// "===" is the strict equality check.
// The strict equality check will not attempt to coerce any value.
// Instead if recieves to values of different types it will automatically return false.

// We can demonstarte this with our ("3" == 3) example but instead we will use "==="
console.log('Does "3" equal 3: ' + ("3" === 3));

// But obviously 3 === 3 will return true.
console.log("Does 3 equal 3: " + (3 === 3));

// Can also see check our does 0 equal false example.
console.log("Does false equal 0: " + (false === 0));

//===================
// IMPORTANT
//===================
// In general try to only do comparison/equality checks when you know that the two things are the same type.
// Also never make a habit of using "==" instead always use "===" unless you explicilty want coersion.
