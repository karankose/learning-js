// 
const student = {
    name: 'karan',
    college  : 'davv',
    class : 'mca',
    mark: 52,
    rollno : this,// global scope
    getname : function() {
        console.log(this);
        return this.name;
        
    },
    getMark : ()=>{
        console.log(this);
       return this.mark;

        
    }

}

console.log(student);
