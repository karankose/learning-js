// lexical scope

let greet = 'hello';// groble scope of variable

function wellcome(){
    let greet = 'hii';
    console.log(greet);
    function wellcomeback(){
        console.log(greet);// it have value 'hii' but not work because we don't call it
        
    }
    
}
console.log(greet);

wellcome();