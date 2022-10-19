let employees=[
    {id:101,name:"rahul gandhi",salary:45000},
    {id:102,name:"priyanka gandhi",salary:55000},
    {id:103,name:"soniya gandhi",salary:65000},
    {id:104,name:"rajeev gandhi",salary:80000}
]


function employees_Data() {
  
    let rows = ""
    for (let i=0; i<=employees.length-1; i++) {
        
       rows = rows + ` <tr>
                     
               <td>${employees[i].id}</td>
               <td>${employees[i].name}</td>
               <td>${employees[i].salary}</td>
               


                   </tr> `

                }
                document.getElementById('abc').innerHTML=rows
}
