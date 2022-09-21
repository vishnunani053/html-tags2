function form_valid() {
 let   email=document.getElementById("abc").value
 //alert("please enter the below fields")

if (email=="") {
    let email=document.getElementById("eemail").innerHTML="please enter email"
}
else
if (email.length<=5) {
    let email=document.getElementById("eemail").innerHTML="char must be 6 digit"
}

let num=document.getElementById("123").value
if (num=="") {
    let num=document.getElementById("enum").innerHTML="please enter numbers only"
}

else
if(num.length<=9){
let num=document.getElementById("enum").innerHTML="please enter 10 digit num "
}
}