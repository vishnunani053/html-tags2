
/*
class account{
    min_bal=500
    new_account() {
    console.log("account created sucessfully");
}
}
class savings_account extends account{
    withdrawal(){
        console.log("amount debited sucesssfully");
    }
}
class current_account extends account{
    add_money(){
    console.log( "amount added sucessfully");
}
}
let c1= new savings_account()
console.log(c1.min_bal);
c2=new current_account()
c2.new_account()
*/


class account {
    min_bal=500
    new_account() {
    console.log("account created sucessfully");
}
}
class savings_account{
    withdrawal(){
        console.log("amount debited sucesssfully");
    }
}
class current_account extends savings_account{
    add_money(){
    console.log( "amount added sucessfully");
}
}
let c1=new current_account()
c1.withdrawal()

