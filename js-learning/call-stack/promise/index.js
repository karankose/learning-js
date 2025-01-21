//  it also callback hell 

function saveDB(data ,success,failure) {
    let netspeed = Math.floor(Math.random() * 10)+1;
    if (netspeed > 4){
        success();
    }else{
        failure();
        
    }
}
saveDB("google",()=>{
    console.log("save data");
    saveDB("doreamon",
        ()=>{
        console.log("success 2  ");
        
    },
        ()=>{
            console.log("failure 2 ");

    }
)
}, 
()=>{
    console.log("slow internet data not saved   : ");
})