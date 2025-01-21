// what is the output of this code

const object = {
    message :'hello,world',
    logMessage(){
        console.log(this.message);
        
    }
};

setTimeout(object.logMessage, 3000);