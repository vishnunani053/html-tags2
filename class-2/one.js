/*class user{
    
constructor(){
    console.log("good employee");
}
}
new user()
new user()
new user()
new user()
new user()
new user()


class Parent {
    assets = '100CR'
    get_Good_Qualities() {
        console.log("All Parent are Good")
    }
}
class Child extends Parent {
    get_Naughty_Qualities() {
        console.log("All Children are naughty")
    }
}
let c1 = new Child();
console.log(c1.assets)
c1.get_Good_Qualities()
c1.get_Naughty_Qualities()*/



class Parent{
    assets="100cr"
    get_good_qualities(){
        console.log("all parents are good");
    }
}
class Child extends Parent{
    get_bad_qualities(){
        console.log("all children are bad");
    }
}
let c1=new Child();
console.log(c1.assets);
c1.get_good_qualities()
c1.get_bad_qualities()
