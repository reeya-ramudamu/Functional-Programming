class Maybe {
    constructor(value) {
      this.value = value;
    }
  
    // Unit (or Return) function
    static of(value) {
      return new Maybe(value);
    }
  
    // Bind (or FlatMap) function
    flatMap(fn) {
      if (this.value === null || this.value === undefined) {
        return Maybe.of(null);
      }
      return fn(this.value);
    }
  
    // Utility function to handle the value inside the monad
    getOrElse(defaultValue) {
      return this.value !== null && this.value !== undefined ? this.value : defaultValue;
    }
  }
  
  // Example usage:
  const getUser = (id) => {
    const users = {
      1: { name: "Alice" },
      2: { name: "Bob" },
    };
    return Maybe.of(users[id]);
  };
  
  const getName = (user) => {
    return Maybe.of(user.name);
  };
  
  // Composing operations using flatMap
  const userName = getUser(1)
    .flatMap(getName)
    .getOrElse("Unknown User");
  
  console.log(userName); // Outputs: Alice
  
  const unknownUser = getUser(3)
    .flatMap(getName)
    .getOrElse("Unknown User");
  
  console.log(unknownUser); // Outputs: Unknown User

  
//   Monads are a powerful concept in functional programming that help manage side effects and sequence computations in a predictable way. 
//They provide a structure for embedding computations in a specific context (like handling null values, I/O operations, etc.)
// and chaining operations on those values.

// In essence, a monad is defined by three key properties:

// 1.Unit (or Return): A function that takes a value and puts it into a monadic context.
//2. Bind (or FlatMap): A function that takes a value from a monadic context, applies a function that returns a new monad, and flattens the result.
// 3.Law of Associativity: Ensures that the order of applying functions does not affect the final outcome.