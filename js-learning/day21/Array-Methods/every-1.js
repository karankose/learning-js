// every method executes a function for each array element
// method return true if the callback function returns true for all element
// method return false if the callback function returns false for one element 
// work like logical AND operator
// return ture / false only

let num = [10,20,30,40,50,60,70,80,90]

let result = num.every((ele)=>{
    return ele > 5;
})
console.log(result);
// true
// if all elements are fullfill condition then return true
// if any elements are not satisfy condition then return false
let ans = num.every((ele)=>{
    return ele > 50;
})
console.log(ans);
// fale 
