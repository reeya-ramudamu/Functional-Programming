// Define a curried greeting function
// generateGreeting takes an occasion and returns a function that takes a relationship
// This returned function, in turn, returns another function that takes a name
// and finally produces the complete greeting string.
const generateGreeting = occasion => 
    relationship => 
        name => `My dear ${relationship} ${name}. Hope you have a great ${occasion}`;

// Specialized greeter for cousin's birthday
const greeter = generateGreeting("birthday"); // First level of currying: Fixes the occasion
const greeterCousin = greeter("cousin"); // Second level of currying: Fixes the relationship

const cousins = ["Jamie", "Tyrion", "Cersei"];

// For each cousin, apply the final function to get the complete greeting
cousins.forEach(cousin => console.log(greeterCousin(cousin)));
/* Prints:
    My dear cousin Jamie. Hope you have a great birthday
    My dear cousin Tyrion. Hope you have a great birthday
    My dear cousin Cersei. Hope you have a great birthday
*/

// Specialized greeter for friends' birthday
const greeterFriend = greeter("friend"); // Second level of currying: Fixes the relationship

const friends = ["Ned", "John", "Rob"];

// For each friend, apply the final function to get the complete greeting
friends.forEach(friend => console.log(greeterFriend(friend)));
/* Prints:
    My dear friend Ned. Hope you have a great birthday
    My dear friend John. Hope you have a great birthday
    My dear friend Rob. Hope you have a great birthday
*/

/*
Curried Function Description:
1. **Definition**: A curried function is a function that takes multiple arguments one at a time, 
   returning a new function for each argument that it takes until all arguments are provided.
2. **Usage**: This technique allows for partial application of functions, where some arguments 
   are fixed or "applied" ahead of time, producing new functions that take the remaining arguments.
3. **Benefits**:
   - **Modularity**: Breaking down a function into smaller, reusable components.
   - **Partial Application**: Creating specialized functions by fixing some arguments.
   - **Code Readability**: More readable and expressive code, especially when combined with 
     higher-order functions like map, filter, and reduce.
4. **Example in Code**:
   - `generateGreeting("birthday")` returns a function that takes a relationship.
   - This returned function, e.g., `greeter("cousin")`, returns another function that takes a name.
   - The final function, e.g., `greeterCousin("Jamie")`, produces the complete greeting string.

By understanding and using currying, you can create flexible and composable code that is easier 
to maintain and extend.
*/
