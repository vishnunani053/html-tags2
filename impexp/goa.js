const tax = require ("./central")
class profits extends tax{
    intrest(){
        console.log("zero intrest");
    }
}
let r2=new profits()
console.log(r2.tax);