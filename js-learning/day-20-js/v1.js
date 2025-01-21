const stu ={
    name : 'nobita',
    class : 6,
    rollno : 214412,
    english : 50,
    hindi : 60,
    sci : 68,

     getInfo(){
        let avg = (this.english + this.hindi+this.sci) / 3;
        console.log(avg);
        console.log(this);
        
         
        
    }
}
console.log(stu.getInfo());
console.log(stu);

console.log("-------------------------------");


function otherone() {
    console.log(this);
}
otherone();// output
{/* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Getter/Setter],
  navigator: [Getter],
  crypto: [Getter]
} */}