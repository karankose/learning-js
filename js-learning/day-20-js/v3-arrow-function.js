const add =  (a,b )=>{
     console.log(a + b);
}
add(12,55);

 console.log(add)//[Function: add]

 // in case of single argument we can remove the the parentheses

 const greet = n =>{
    console.log(`hello  ${n} sir`);
    
 }
 greet("daku");

 
 let hello = ()=>{
    console.log("hello guys!");
    
 }
 hello();
 console.log(hello);
 
 console.log(hello());// undifed

 // implicitly return without out using the return key word
console.log(" // implicitly return without out using the return key word");

 const multiple = (a,b) => (a * b);

 console.log(multiple(85,2));
 

