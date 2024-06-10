// In functional programming, a higher-order function is a function that
//  either takes one or more functions as arguments
// or returns a function as its result. 
// Higher-order functions enable powerful abstractions and composability, 
// allowing you to build complex behaviors by combining simpler functions.



// Higher-order function that applies a given function to each element of an array
function operateOnNumbers(numbers, operation) {
    // Apply the operation to each number in the array
    return numbers.map(number => operation(number));
}

// Example functions to pass to the higher-order function
function square(x) {
    return x * x;
}

function double(x) {
    return x * 2;
}

// Example usage of the higher-order function
const numbers = [1, 2, 3, 4, 5];
console.log("Original numbers:", numbers);

const squaredNumbers = operateOnNumbers(numbers, square);
console.log("Squared numbers:", squaredNumbers);

const doubledNumbers = operateOnNumbers(numbers, double);
console.log("Doubled numbers:", doubledNumbers);













// Understanding Higher-Order Functions

// A higher-order function is a function that does one or both of the following:

// 1. Takes one or more functions as arguments.
// 2.Returns a function as its result.

// Higher-order functions enable functional programming paradigms like abstraction, composition, and currying.

// The map Function

// map is a higher-order function commonly used in functional programming languages like JavaScript. It operates on arrays and applies a given function to each element of the array, creating a new array with the transformed elements.

// Here's how map works:

// It takes two arguments:

// The array to operate on.
//          A function that defines the transformation to apply to each element of the array.
//           It iterates over each element of the array.

// For each element, it applies the provided function.

// It collects the results of applying the function to each element into a new array.

// It returns the new array containing the transformed elements.