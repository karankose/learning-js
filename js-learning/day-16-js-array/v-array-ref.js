// arrayr references

let arr1 = [1];
//it not store data [1] like this it store references means memory address like [123];

let arr2 = [1];

console.log(arr1 == arr2);//false
console.log('it not check contents it check memory address ');
console.log('============================================');

console.log(arr1 === arr2);//  false
console.log('it not check contents it check memory address ');

let arr3 = arr1;
// it is true because arr1 is copy in arr3 means we bind arr1 & arr3 so both addresses are same if we change
// in arr1 it reflect in arr3  and if change in arr3 it reflect in arr1

console.log(arr1 == arr3);

console.log(arr1 === arr3);
console.log("// it is true because arr1 is copy in arr3 means we bind arr1 & arr3 so both addresses are same if we change in arr1 it reflect in arr3  and if change in arr3 it reflect in arr1");

