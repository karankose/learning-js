// minumum of array elements

let arr = [10, 20 ,30 , 52];

let minOfArr = arr.reduce((min , ele)=>{
    if (min < ele){
        return min;
    }
    else{
        return ele;
    }
})

console.log("minumum of array elements : "+minOfArr);
