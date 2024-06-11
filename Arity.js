// Unary function (takes one argument)
function square(x) {
    return x * x;
}

// Binary function (takes two arguments)
function add(x, y) {
    return x + y;
}

// Ternary function (takes three arguments)
function sumThree(x, y, z) {
    return x + y + z;
}

// Higher-order function taking a unary function
function map(arr, fn) {
    return arr.map(fn);
}

// Usage of the unary function with map
const numbers = [1, 2, 3];
const squaredNumbers = map(numbers, square); // square is a unary function
console.log(squaredNumbers); // Output: [1, 4, 9]

// Usage of the binary function with map
const sums = map(numbers, add); // add is a binary function
console.log(sums); // Output: [NaN, NaN, NaN] (Not meaningful, as add expects two arguments)

// Usage of the ternary function with map
const sumOfTriples = map(numbers, sumThree); // sumThree is a ternary function
console.log(sumOfTriples); // Output: [NaN, NaN, NaN] (Not meaningful, as sumThree expects three arguments)





// In functional programming, arity refers to the number of arguments a function takes. It's a term used to describe the "arity" or "n-arity" of a function.

// Functions in functional programming languages can have different arities, including:

//1. Nullary Functions: Functions that take zero arguments.
//2. Unary Functions: Functions that take one argument.
//3. Binary Functions: Functions that take two arguments.
//4. Ternary Functions: Functions that take three arguments.
//5.  N-ary Functions: Functions that take any number of arguments, where "N" represents any positive integer.
// Understanding the arity of functions is important because it influences how you use and compose functions in your code.

// For example, higher-order functions like map, filter, and reduce typically take unary functions as arguments. 
//This means that you can easily pass in functions that operate on a single element of a collection.