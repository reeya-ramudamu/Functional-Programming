// Define an array functor
const numbers = [1, 2, 3, 4, 5];

// Map a function over the array
const doubledNumbers = numbers.map(x => x * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]




// In functional programming, a functor is basically something that can be mapped over.
//  The map function is what makes something a functor. 
//  It applies a given function to each element inside the functor while keeping its overall shape intact.

// Functors help us to:

// 1.Transform values inside a structure without changing its structure.
// 2.Compose transformations in a clear and concise way.
//3. Write generic code that works with different types of data structures.
// 4.Follow certain rules to ensure consistency and predictability.
// =>For example, arrays in JavaScript are functors. We can use the map function to transform each element of the array without changing the array itself.






