// forEach with array object
const Student = [
    {
        name : "shradha",
        age  : 32 
     },
     {
        name : "karan",
        age  : 21
     },
     {
        name : "shivam",
        age  : 22 
     }
]

Student.forEach((Element)=>{
   // console.log("array"+Element);
   // console.log("object property name : "+Element.name);
   // console.log("object property age : "+Element.age)
   // console.log("------");
   console.log(Element.name);
   console.log(Element.age);
});