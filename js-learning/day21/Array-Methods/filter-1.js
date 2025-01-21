// The filter() method in JavaScript is used to create a new array containing all elements of an array that satisfy a specific condition (i.e., the callback function returns true for them). It is particularly useful for filtering data from an array based on some criteria.


let arr = [1,2,3,4,5,6,7,8,9];

let even =  arr.filter((ele)=>{
    // if (ele % 2 == 0){
    //     return ele;
    // }
    // or
    return ele % 2 == 0;
})

console.log(even);
