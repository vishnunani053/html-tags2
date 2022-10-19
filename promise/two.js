/*let employees=[{id:101,name:"rahul",salary:45000},{id:102,name:"sonia",salary:55000}]
let createEmployee=(emp)=>{
return new Promise((resolve,reject)=>{
setTimeout(()=>{
    let flag=true
    employees.push(emp);
    flag?resolve("data inserted sucessfully"):reject("not inserted")
},2000);
})
}
let getEmployees=()=>{
    setTimeout(()=>{
let rows="";
employees.forEach((employee) => {
    
    rows=rows+`<tr>
    <td>${employee.id}</td>
    <td>${employee.name}</td>
    <td>${employee.salary}</td>
    </tr> `
   
});
document.getElementById("rajni").innerHTML=rows
    },1000);

}
createEmployee({ id: 103, name: 'priyanka', salary: 65000 })
     .then((msg) => {
         getEmployees()
         console.log(msg)
     })
     .catch((err) => {
         console.log(err)
     })


     let employees=[{id:101,name:"rahul",salary:45000},{id:102,name:"sonia",salary:55000}]
     let createEmployees=(emp)=>{
        return new Promise((resolve,reject)=>{
setTimeout(()=>{
    let flag=true
    employees.push(emp)
    flag?resolve("data submited"):reject("not submited")
},2000)

        })

     }
    let getEmployees=()=>{
setTimeout(() => {
    let rows="";
    employees.forEach((employee)=>{
 rows=rows+`<tr>
<td>${employee.id}</td>
<td>${employee.name}</td>
<td>${employee.salary}</td>
</tr>`
    })
    document.getElementById("hero").innerHTML=rows
}, 1000);
     }
  createEmployees({ id: 103, name: 'priyanka', salary: 65000 })
    .then((msg) => {
        getEmployees()
        console.log(msg);
    }).catch((err) => {
        console.log(err);
    });*/




    let employees=[{id:101,name:"rahul",salary:45000},{id:102,name:"sonia",salary:55000}]
 let createEmployee=(emp)=>{
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let flag=true
        employees.push(emp);
        flag?resolve("data submited"):reject("data not submitted")
    },3000);
})
 }
 let getEmployee=()=>{
setTimeout(() => {
    let rows=""
    employees.forEach((employee) => {
        rows=rows+`<tr>
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.salary}</td>
        </tr>`
    });
    document.getElementById("nani").innerHTML=rows
}, 1000);
 }

createEmployee({ id: 103, name: 'priyanka', salary: 65000 })
.then((msg)=>{
getEmployee()
console.log(msg);
})
.catch((err)=>{
console.log(err);
})