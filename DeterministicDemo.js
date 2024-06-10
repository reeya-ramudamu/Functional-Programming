//A deterministic function always produces the same output for a given input, regardless of when or where it is called. 


// Deterministic function to add two numbers
function add(x, y) {
    return x + y;
}

// Example usage of the deterministic function
console.log(add(3, 4)); // Output: 7
console.log(add(3, 4)); // Output: 7 (Same input, same output)



// A common non-deterministic function is
// Math.random
console.log(Math.random()) // Maybe we get 0.6924493472043922
console.log(Math.random()) // Maybe we get 0.4146573369082662