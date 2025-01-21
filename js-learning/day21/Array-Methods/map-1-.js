// map it creating a new new array and return it 

let no = [1,2,3,4,5,6,7,8,9,10];

let newArr = no.map((ele)=>{
    return ele * 2;
});
console.log(newArr);
console.log("by using map function it will create a new array");


newArr.forEach((ele)=>{
    console.log(ele);
    
})
console.log("newArr with forEach for iterate each element one by one");

