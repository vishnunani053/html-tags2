let employees=[{ id: 101, name: 'Rahul', salary: 45000 }, { id: 102, name: 'Sonia', salary: 55000 }]
let createEmployees=(emp)=>{
return new Promise((resolve,reject)=>{
    setInterval(() => {
        let flag=true
        employees.push(emp)
        flag?resolve("data submitted"):reject("data not submitted")
    }, 2000);
})
}
let getEmployees=()=>{
setInterval(() => {
    let rows=""
    employees.forEach((employee) => {
        rows=rows+`<tr>
    <td>${employee.id}</td>    
    <td>${employee.name}</td>    
    <td>${employee.salary}</td>    
        </tr>`
    });
    document.getElementById("nani").innerHTML=rows
}, 2000);
}
let ready=async()=>{

    console.log("test case123");
    await createEmployees({id:103,name:"modi",salary:65000})

    }
    getEmployees()
ready()