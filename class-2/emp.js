/*class Employee{
    Eid;
    Ename;
    Esalary;
    constructor(id,name,sal){
        console.log("emp details");
        this.Eid=id;
        this.Ename=name;
        this.Esalary=sal

    }
    get_emp_details(){
        console.log("emp detalis");
    }
    
}
let emp1=new Employee (101,"Rahul Gandhi",80000)
let emp2=new Employee (102,"vishnu",100000 )
console.log(emp1);
console.log(emp2);
emp1.get_emp_details()
emp1.get_emp_details()
emp1.get_emp_details()
emp1.get_emp_details()





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


class Employee {
    eid;
    ename;
    setEid(id) {
        this.eid = id;
    }
    getEid() {
        return this.eid
    }
    setEname(name) {
        this.ename = name
    }
    getEname() {
        return this.ename
    }

}

let e1 = new Employee()
e1.setEid(101)
e1.setEname("Rahul Gandhi")
console.log(e1)
console.log(e1.getEid())
console.log(e1.getEname())

let e2 = new Employee()
e2.setEid(102)
e2.setEname("Sonia")
console.log(e2)
console.log(e2.getEid())
console.log(e2.getEname())


class Employee{
    eid;
    ename;

    setEid(id){
        this.eid=id;
    }
    getEid(){
        return this.eid
    }
setEname(name){
    this.ename=name;
}
getEname(){
    return this.ename
}
}
let e1=new Employee()
e1.setEid(101)
e1.setEname("rahul gandhi")
console.log(e1);
console.log(e1.getEid());
console.log(e1.getEname());

let e2=new Employee()
e2.setEid(102)
e2.setEname("priyanka gandhi")
console.log(e2);
console.log(e2.getEid());
console.log(e2.getEname());
*/


class Employee{
    eid;
    ename;
    setEid(id){
        this.eid=id

    }
    getEid(){
        return this.eid
    }

    setEname(name){
        this.ename=name

    }
    getEname(){
        return this.ename
    }
}

let e1=new Employee()
e1.setEid(101);
e1.setEname("vishnu")
console.log(e1);
console.log(e1.getEid());
console.log(e1.getEname());

let e2=new Employee()
e2.setEid(102)
e2.setEname("vardhan")
console.log(e2);
console.log(e2.getEid());
console.log(e2.getEname());

/*
 class Employee{
    eid;
    ename;
    esalary;
    erole;
    constructor(id,name,salary,role){
        this.eid=id;
        this.ename=name;
        this.esalary=salary;
        this.erole=role
    }
    get_detalis(){
        console.log("best employee");
    }
}
let e1=new Employee(101,"john",45000,"java_dev")
let e2=new Employee(102,"mike tyson",50000,"python_dev")
console.log(e1);
console.log(e2);
e1.get_detalis()
e2.get_detalis()*/