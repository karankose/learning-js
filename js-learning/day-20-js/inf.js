const id = setInterval(()=>{
    console.log("doreamon ");
    
},3000);

setTimeout(()=>{
    clearInterval(id);
    console.log(" end");
    
},15000);
