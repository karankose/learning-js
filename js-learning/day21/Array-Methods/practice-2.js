// find the minimum value in aray using reduce function

let arr = [10,2,3,7,98,5,9,3,5,78,62,32,1];

let min = arr.reduce((minValue, ele) =>{
    if (minValue < ele){
        return minValue;
    }
    else{
        return ele;
    }
})

console.log("Min value : "+ min);
