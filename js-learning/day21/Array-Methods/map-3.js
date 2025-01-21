let stu = [
    {
        name: "ram",
        mark: 65
    },
    {
        name: "diya",
        mark: 39
    },
    {
        name: "raj",
        mark: 80
    }
]

let update_cgpa = stu.map((ele)=>{
    return   ele.mark / 10;
})

console.log(update_cgpa);
