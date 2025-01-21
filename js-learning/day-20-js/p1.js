

let  arr = [10,10,10];

const avragearr =( arr) =>{
    let size = arr.length;
    let total = 0;
    for (let i =0; i< size; i++){
        total += arr[i];
        
    }
    console.log("total  : "+total);
    console.log(total/ size );
    
    

} 
console.log(avragearr(arr));


console.log("===================");



