
class Account{
    min_bal=1000

 create_account(){
console.log("account created sucessfullly");
}

deposit_money(){
    console.log("5000 money added");
}
withdrawl(){
    console.log("no money broo");
}

check_bal(){
console.log("1000cr...just kidding bro");
}
 
close_account(){
    console.log("do it immediately");
}

}

let r1=new Account()
console.log(r1);
console.log(r1.min_bal);
r1.deposit_money()
r1.withdrawl()
r1.check_bal()
r1.close_account()



class employee{
    id=101
    name(){
        console.log("rahul gandhi");
    }
    salary(){
        console.log("50000");
    }
    designation(){
        console.log("developer");
    }
    contact(){
        console.log("9876543210");
    }
    email(){
        console.log("rahul@gmail.com");
    }
}

let emp1=new employee()
console.log(emp1);
console.log(emp1.id);
emp1.name()
emp1.salary()
emp1.designation()
emp1.contact()
emp1.email()