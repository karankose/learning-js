// The **spread syntax** (`...`) in JavaScript is like unpacking items from a box. It helps you break apart arrays, objects, or other collections and work with their individual pieces.

// ---

// ### **Spread with Arrays**
// - **Copy an array**: Make a duplicate of an array.
// - **Join arrays**: Combine two or more arrays.
// - **Use array items**: Pass array items into a function.

// #### Example:
// ```javascript
// const fruits = ['apple', 'banana', 'cherry'];

// // Copy
// const copy = [...fruits]; // ['apple', 'banana', 'cherry']

// // Combine
// const moreFruits = ['orange', 'grape'];
// const allFruits = [...fruits, ...moreFruits]; // ['apple', 'banana', 'cherry', 'orange', 'grape']

// // Use items
// console.log(Math.max(...[10, 20, 30])); // 30
// ```

// ---

// ### **Spread with Objects**
// - **Copy an object**: Make a duplicate of an object.
// - **Combine objects**: Merge two or more objects.
// - **Change object values**: Replace values in an object.

// #### Example:
// ```javascript
// const person = { name: 'Alice', age: 25 };

// // Copy
// const copyPerson = { ...person }; // { name: 'Alice', age: 25 }

// // Combine
// const extraInfo = { city: 'New York' };
// const fullInfo = { ...person, ...extraInfo }; // { name: 'Alice', age: 25, city: 'New York' }

// // Change values
// const updatedPerson = { ...person, age: 30 }; // { name: 'Alice', age: 30 }
// ```

// ---

// ### **Spread in Functions**
// Take the items from an array and treat them as individual arguments.

// #### Example:
// ```javascript
// const numbers = [1, 2, 3];

// function sum(x, y, z) {
//   return x + y + z;
// }

// console.log(sum(...numbers)); // 6
// ```

// ---

// ### **Spread for Rest Items**
// Get the remaining items after removing some.

// #### Example:
// ```javascript
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
// ```

// ---

// ### In Short:
// - `...` means "spread out the items."
// - It makes working with arrays and objects easier and cleaner!