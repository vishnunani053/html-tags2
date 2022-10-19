/*class emp{
    id=101
    name(){
        console.log("rahul gandhi");
 
   }
   salary(amount){
    console.log(`${amount} this month salary`);
   }
   role(){
    return "server_down"
   }
}
let r1=new emp()
console.log(r1.id);
r1.name()
r1.salary(50000)
let message=r1.role()
console.log(message);


class employee{
    eid;
    ename;
    esalary

    constructor(id,name,salary){
        this.eid=id;
        this.ename=name;
        this.esalary=salary
    }
    get_emp(){
        console.log("total employees");
    }

}
let a1=new employee(101,"rahul gandhi",45000)
console.log(a1);
let a2=new employee(102,"sonia" ,50000)
console.log(a2);
a1.get_emp()


class Student{
 
    sid;
    sname;
    smarks;
    constructor(id,name,marks){
 
       this.sid=id;
       this.sname=name;
       this.smarks=marks
    }
    get_details(){
        console.log("iam bright student");
    }
}
let s1=new Student(101,"vishnu",100)
let s2=new Student(102,"vardhan",99)
console.log(s1);
console.log(s2);
s1.get_details()
s2.get_details()
*/

class emp{

    constructor(id,name,salary){
 
        this.eid=id;
        this.ename=name;
        this.esalary=salary
    }
}
let emp1=new emp(101,"rahul",45000)
console.log(emp1);