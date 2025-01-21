function Addition(a , b = 10){      // we set b default value 10 
    console.log(a + b);
    console.log("default value for b");
    
}

Addition(5);        // we pass single value for so it use default value for b which is 10 ;
 
// and we pass other values for so it use not use default value for b let see


Addition(5,30);
console.log("without default value for b");
// in this case it use other value for b which i passed



// other example if we not give default value and give  single parameter it will give 
// NAN

function otherOne(i,j){
    console.log(i + j );    
}
// we try to add number and undefined values because NAN is Occuring
otherOne(10);// this case

//            NaN
