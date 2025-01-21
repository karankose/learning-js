let arr = ['red', 'green', 'blue'];
// arr.splice(0,1);//delete elements for 1 index
console.log(arr);
arr.splice(0,1,'black','pink') // add new elements 1 index
console.log(arr.length);
arr.push('orange','white');
console.log(arr);
arr.pop();

console.log(arr);
// if we want to enter elements any index so with removing
arr.splice(2,0,'yellow')
console.log(arr);
