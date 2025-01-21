
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

    let  request =saveData("apna college") // promis object 
    request.then(()=>{
        console.log("resolve success");
        console.log(request);
        
        
    })
    .catch(()=>{
        console.log("reject fail");
        console.log(request);
        
        
    })
    
