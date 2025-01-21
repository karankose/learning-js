// Let's perform a **dry run** for the given `reduce()` examples:

// ---

// ### **Code:**
// ```javascript
// let numbers = [10, 20, 30, 40, 50];

// let ans = numbers.reduce((add, ele) => {
//     return add + ele;
// });
// console.log(ans);

// // or

// let ans2 = numbers.reduce((add, ele) => (add + ele));

// console.log(ans2);
// ```

// ---

// ### **Initial Setup**:
// - Array: `[10, 20, 30, 40, 50]`
// - Callback function: `(add, ele) => add + ele`
// - **No `initialValue` provided**: 
//   - The **first element (`10`)** of the array is used as the `add` (accumulator).
//   - Iteration starts from the **second element (`20`)**.

// ---

// ### **Iteration Breakdown (First Example)**:
// 1. **First Iteration**:
//    - `add = 10` (initial value from the array)
//    - `ele = 20` (second element of the array)
//    - `add + ele = 10 + 20 = 30`

// 2. **Second Iteration**:
//    - `add = 30` (result from the previous iteration)
//    - `ele = 30` (third element of the array)
//    - `add + ele = 30 + 30 = 60`

// 3. **Third Iteration**:
//    - `add = 60` (result from the previous iteration)
//    - `ele = 40` (fourth element of the array)
//    - `add + ele = 60 + 40 = 100`

// 4. **Fourth Iteration**:
//    - `add = 100` (result from the previous iteration)
//    - `ele = 50` (fifth element of the array)
//    - `add + ele = 100 + 50 = 150`

// 5. **Final Result**:
//    - The accumulated value after processing all elements is `150`.

// ---

// ### **Second Example**:
// The same logic applies here because the arrow function is a shorter syntax but behaves identically:
// ```javascript
// let ans2 = numbers.reduce((add, ele) => (add + ele));
// ```

// ---

// ### **Output**:
// ```javascript
// console.log(ans);  // Output: 150
// console.log(ans2); // Output: 150
// ```

// ---

// ### **Key Points**:
// 1. Without an `initialValue`, the first element is used as the starting value of `add`.
// 2. Iteration starts from the second element of the array.
// 3. The array is reduced to a single value (`150` in this case) by summing all its elements.

// Let me know if you'd like a step-by-step explanation of another example! 😊