// max of array by reduce

let arr = [10,20,20,50];

let maxOfArray= arr.reduce((max , ele)=>{
    if (max < ele){
        max = ele;
    }
    return max;

});

console.log(" max of arr : "+maxOfArray);
console.log("                          ");
console.log("other way");
console.log("                          ");


let maximum = arr.reduce((max , ele)=>{
    if (max <ele){
        return ele;
    }
    else {
        return max;
    }
})

console.log(" maximum : "+maximum);

