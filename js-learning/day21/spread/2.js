// array with spread

// copy array using spread ...
console.log("copy array using spread");

const arr = [1,2,3,4,5,6,7,8,9];
console.log("arr : "+ arr);

const copyArr = [...arr];
console.log("copyArr : "+ copyArr);
console.log("  .   .   .   .    .    .");

const car = ["tata" ,"bmw","audi"];
const superCar = ["mustang ", "supra"];
const  bothcar = [...car,...superCar]
console.log("car : "+ car);
console.log("super car : "+ superCar);
console.log("both car :"+ bothcar);

// Use items case 3 
console.log(Math.max(...[10, 20, 30])); // 3


