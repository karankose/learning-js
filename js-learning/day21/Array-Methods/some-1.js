// some method executes a function for each array element
// method returns true if the callback function returns true for at least one element
// method returns false if the callback function returns false for all elements
// works like logical OR operator
// returns true / false only


let arr = [10,20,30,40,50,60];

let ans = arr.some((ele)=>{
    return ele < 90;
    //element less than 90
})
console.log(ans);
// ture
let otherAns = arr.some((ele)=>{
    return ele >200;
    // element gratter than 200
})
console.log(otherAns);
// false
