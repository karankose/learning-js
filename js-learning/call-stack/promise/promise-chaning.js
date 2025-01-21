function savedata (data){
 
    return new Promise((resolve,reject)=>{
        netspeed = Math.floor(Math.random() * 10)+ 1;
        if(netspeed> 4 ){
            resolve("successfully ");
        }else{
            reject("rejected  ");
        }
    })
 }


savedata("user aaya").then(()=>{
    console.log("getting data one romise");
    savedata("other task").then(()=>{
        console.log("done 2");
        
    })
    
})
.catch(()=>{
    console.log("fail hogaya");
    

})