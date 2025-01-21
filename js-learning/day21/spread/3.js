// spread with object
const obj1 = {
    name : "nobita",
    age : 12
}
const obj2 = {...obj1};
console.log(" obj  1 :             "+obj1.name , obj1.age);

console.log("copy of obj1 is 2 :    "+obj2.name,obj2.age);


// change in values
const chageinobj = {...obj2,name :"dj"};
console.log("chane in object "+chageinobj.name ,chageinobj.age);
