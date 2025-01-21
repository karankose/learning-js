// if callBack is nothing returned any thing then you print new variabl is undefined

let a =  [2, 4 , 6 ];

let newA = a.map((ele)=>{
    console.log(ele)
    // output
    //2
    //4
    //6
    
})
console.log(newA);
// output 
// [ undefined, undefined, undefined ]
