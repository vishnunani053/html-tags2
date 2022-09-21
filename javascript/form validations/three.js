/*function form_val() {
    document.getElementById("abc").value
alert(name)
}

let form_val=()=>{
    document.getElementById("abc").value
    alert(name)
}


function form_val() {
   let name= document.getElementById("abc").value
    
    if (name=="") {
        document.getElementById("emsg").innerHTML="bhayya please enter valid mail"
       
    }
  
    
}
*/

function form_val() {
    let name=document.getElementById("abc").value
   // alert("bhayya pls enter mail")
   if(name == "" && name.length <= 5){
document.getElementById("emsg").innerHTML="pls enter mail id"
   }


   let pass=document.getElementById("epass").value
   if (pass=="" && pass.length<=5) {
    document.getElementById("pmsg").innerHTML="pls enter password"
   }
}


