// In functional programming (FP), a pure function is a function that meets two main criteria

// 1.Deterministic: Given the same input, a pure function will always return the same output. It does not rely on or modify any external state.

//2. No Side Effects: A pure function does not cause any observable side effects, 
//such as modifying global variables,
// performing I/O operations, 
//or mutating input parameters.

// Pure function to calculate the square of a number
function square(x) {
    return x * x;
}

// Example usage of the pure function
console.log(square(3)); // Output: 9
console.log(square(3)); // Output: 9 (Same input, same output)
