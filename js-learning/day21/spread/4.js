// Spread in Functions
// Take the items from an array and treat them as individual arguments.

// Example:
// javascript
// Copy
// Edit
// const numbers = [1, 2, 3];

// function sum(x, y, z) {
//   return x + y + z;
// }

// console.log(sum(...numbers)); // 6
// Spread for Rest Items
// Get the remaining items after removing some.

// Example:
// javascript
// Copy
// Edit
// // Array
// const colors = ['red', 'blue', 'green', 'yellow'];
// const [first, ...rest] = colors;
// console.log(first); // 'red'
// console.log(rest);  // ['blue', 'green', 'yellow']

// // Object
// const car = { brand: 'Toyota', model: 'Corolla', year: 2021 };
// const { brand, ...details } = car;
// console.log(brand);   // 'Toyota'
// console.log(details); // { model: 'Corolla', year: 2021 }
// In Short:
// ... means "spread out the items."
// It makes working with arrays and objects easier and cleaner!