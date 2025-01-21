// check if all numbers are are the multiple of 10 or not

let arr = [10,30, 50,100];

let result = arr.every((ele)=>(ele % 10 == 0));

console.log(result);
//ture

let dome = [10,30, 11,100];

let res = dome.every((ele)=>(ele % 10 == 0));

console.log(res);
// false
