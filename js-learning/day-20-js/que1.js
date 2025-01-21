// write an arrow function  named arrayAvg that accept an array and return avg




const calavg =(arr)=>{
    let total = 0;

    // for(let no of arr){
    //     total += no;
    //     console.log(arr.length);
    //     return total / arr.length;
        
    // }
    let di = arr.length;
let sum =0;

    for(let i =0; i<arr.length;i++){
        
        sum +=  arr[i]
        
        
    }
    total = sum / di;
    return total ;

};


let arr = [10,20];

console.log(calavg(arr));

