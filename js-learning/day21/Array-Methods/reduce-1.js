//javascript reduce method  / function
// reduce method executes a function for each array element
// method reduces the array to a single value (e.g., sum, product, object, etc.)
// takes an accumulator (stores the result) and the current value as arguments
// returns the final single value after processing all elements


let numbers = [10,20,30,40,50];

 let ans = numbers.reduce((add , ele)=>{
    return add + ele
 })
console.log(ans);
// or

let ans2 = numbers.reduce((add, ele)=>(add + ele));

console.log(ans2);


// ### **`reduce()` in Simple Words**

// The `reduce()` method takes an array and combines its elements into a single value, like summing numbers or merging objects.

// ---

// ### **How It Works (Simple Steps)**:
// 1. You start with an **initial value** (or the first element of the array if you don’t provide one).
// 2. `reduce()` runs a **function** for each element.
// 3. It keeps updating an **"accumulator"**, which stores the result of combining elements.
// 4. At the end, you get a **single value**.

// ---

// ### **Syntax**:
// ```javascript
// array.reduce((accumulator, currentValue) => {
//   // Combine accumulator and currentValue
//   return updatedValue;
// }, initialValue);
// ```

// ---

// ### **Examples**

// #### **1. Add All Numbers**
// Add all numbers in an array:
// ```javascript
// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce((acc, num) => acc + num, 0);

// console.log(sum); // Output: 10
// ```

// #### **2. Multiply All Numbers**
// Multiply all numbers in an array:
// ```javascript
// let numbers = [1, 2, 3, 4];
// let product = numbers.reduce((acc, num) => acc * num, 1);

// console.log(product); // Output: 24
// ```

// #### **3. Count Items in an Array**
// Count how many times each item appears:
// ```javascript
// let fruits = ["apple", "banana", "apple", "orange", "banana"];
// let counts = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});

// console.log(counts); 
// // Output: { apple: 2, banana: 2, orange: 1 }
// ```

// ---

// ### **Key Points**:
// 1. **Initial Value**: Always provide an initial value to avoid unexpected results (e.g., `0` for numbers, `{}` for objects).
// 2. **Accumulator**: Keeps track of the combined result after each iteration.
// 3. **Single Result**: You end up with one value (sum, product, object, etc.).

// ---

// ### **Think of It Like**:
// - A **rolling sum** or **rolling product**.
// - Combining items into a single result (like a total price or a list of counts).

// Let me know if you'd like more examples! 😊