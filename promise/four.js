 let employees=[]
 let createEmployees=(emp)=>{
 return new Promise((resolve,reject)=>{
 setTimeout(() => {
     employees.push(emp)
 }, 3000);
 })
 }
 createEmployees({ id: 103, name: 'priyanka', salary: 65000 })
 .then(() => {
     console.log();
 }).catch(() => {
    
 });
