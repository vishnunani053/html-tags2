/*class employee{}
console.log(new employee());
console.log(new employee());
console.log(new employee());
console.log(new employee());



class employee{ 

    id=101
    name="rahul"
    get_emp(){
        return "iam a good boy"
    }
}

let r1=new employee()
let r2=new employee()
let r3=new employee()

console.log(r1.id);
console.log(r2.name);
console.log(r3.get_emp());


class new_account{
     account="open account"
     create(){
        return "account created sucessfully"
     }

     deposit(){
        return "added 10000 rupees"
     }

     check_bal(){
        return "10000"
     }
     delete(){
        return "sucessfully deleted"
     }
}

let r1=new new_account()
console.log(r1.account);
console.log(r1.create());
console.log(r1.deposit());
console.log(r1.check_bal());
console.log(r1.delete());*/



class student{
   roll_no=19_232

   name(){
      return "rahul gandhi"
   }

   gender(){
return "male"
   }
   year(){
      return "final year"
   }

   college_name(){
      return "i dont like to say"
   }
}
let r1=new student()
console.log(r1.roll_no);
console.log(r1.name());
console.log(r1.gender());
console.log(r1.year());
console.log(r1.college_name());