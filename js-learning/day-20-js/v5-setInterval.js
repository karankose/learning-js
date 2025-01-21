// set Interval 

let id= setInterval( ()=>{console.log("setInterval executed");
},3000 )
console.log("no no");


setTimeout( ()=>{
    clearInterval(id)
    console.log("stop");
    
},6000);