const id =setInterval(()=>{
    console.log("hello world");
},2000);
setTimeout(()=>{
clearInterval(id);
},12000)