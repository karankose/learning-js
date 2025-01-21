// other way 

function saveData (data){
    return new Promise((resolve, reject)=>{
        let netspeed = Math.floor(Math.random()  * 10) + 1;
        if (netspeed > 4){
            resolve("sucees");
        }else{
        reject("failed");
        }
    });
        }

    saveData("apna college")
     .then(()=>{
        console.log("resolve success");
        
        
    })
    .catch(()=>{
        console.log("reject fail");
        
        
    })
    
