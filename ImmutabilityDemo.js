
// Immutability in functional programming means that once data is created, it cannot be changed or modified. 
//Instead of modifying existing data, immutable data structures are created anew whenever changes are needed. 
//This ensures predictability, consistency, and thread safety in code.
// Additionally, immutability encourages the use of pure functions, simplifying testing and debugging while promoting functional purity.

// Original array of products
const products = [
    { id: 1, price: 200 },
    { id: 2, price: 200 }
];

// Clone the products array and add a new property to each product
const productsWithName = products.map(product => {
    // Create a shallow clone of each product object
    const newProduct = { ...product };
    // Add a new property to the cloned object
    newProduct.name = "default";
    // Return the modified object
    return newProduct;
});

// Log the original array (unchanged)
console.log("Original products:", products);

// Log the cloned array with modifications
console.log("Cloned products with name:", productsWithName);
