function takeOrder(order){
    console.log(`taking order : ${order}`);
}
function cook(order) {
    console.log(`cooking order : ${order}`);    
}
function serve(order) {
    console.log(`serving  ${order}`);    
}

function processOrder(order) {
    takeOrder(order),
    setTimeout(()=>{
        cook(order);
    },2000);
    serve(order);
    
    }
    console.log("open restaurant");
        
processOrder("samosa");
processOrder("chai");
console.log("close restaurat");