// const sqe = n => n * n;

// console.log(sqe(2));
// console.log(". . . . .. . .. .");

let id = setInterval ( ()=>{
    console.log("hello");
    
    
},2000);

setTimeout( ()=>{
    clearInterval (id)
},10000);