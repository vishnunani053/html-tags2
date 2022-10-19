//Es6
// import account from "./account"
//Es5
const account=require("./account")
class savings_account extends account{
    add_money(){
        console.log("amount added sucessfully");
    }
}
let c1=new savings_account()
console.log(c1.min_bal);