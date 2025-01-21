// async function

async function greet(){
    throw "some error" // error 
    return "Hello"
}
greet().then(()=>{
    console.log("promise succeeded ");
    
})
.catch(()=>{
    console.log("promise failed ");//for 
    
    
})