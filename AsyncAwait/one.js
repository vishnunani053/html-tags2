let employees=[{ id: 101, name: 'Rahul', salary: 45000 }, { id: 102, name: 'Sonia', salary: 55000 }]
let createEmployees=(emp)=>{
    console.log("test case 112");
return new Promise((resolve,reject)=>{
setTimeout(() => {
    let flag=true
    employees.push(emp)
    flag?resolve("data submitted"):reject("data not submited")
}, 2000);
})

}
let getEmployees=()=>{
    console.log("test case 1234");
    setTimeout(() => {
       let rows="";
       employees.forEach((employee) => {
        rows = rows + `<tr>
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.salary}</td>
        
        </tr>`
        });
         document.getElementById("t-body").innerHTML=rows
        
    }, 3000);

}       
let ready=async()=>{   
    console.log("test case 123");
    await createEmployees({id:103,name:"modi",salary:65000})
    getEmployees()
}
ready()
