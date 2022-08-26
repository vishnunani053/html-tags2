class employee{
    id=101
    name="rahul gandhi"
    get_emp(){
        return "salary_45000"
    }
}
let r1=new employee()
let r2=new employee()
let r3=new employee()
console.log(r1.id);
console.log(r2.name);
console.log(r3.get_emp());

class wish{
    msg="good morning"
    get_wish(){
        return "good night"
    }
}
let r1=new wish
let r2=new wish
console.log(r1.msg);
console.log(r2.get_wish());


class student{
    roll=101
    name="modi"
    get_s_details(){
        return "he is a good student"
    }
}
let stu_1=new student()
let stu_2=new student()
let stu_3=new student()
console.log(stu_1.roll);
console.log(stu_2.name);
console.log(stu_3.get_s_details());