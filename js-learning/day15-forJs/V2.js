// template literals  backTick 
// they are use to embeded expressions in strings


let book = 100;
let notebook = 50;
console.log("book price : ",book);
console.log("notebook price : ",notebook);
console.log("total price : "+ (book + notebook) +" rs.")

let total =    ` tatal : ${book + notebook } rs.` // short way without " " this extra use
console.log(total);