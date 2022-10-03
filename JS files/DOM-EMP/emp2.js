
    let student_details=[
        {rollno:101,name:"vishnu",marks:100},
        {rollno:102,name:"sai",marks:100},
        {rollno:103,name:"sasi",marks:100},
        {rollno:104,name:"sidhu",marks:100}
    ]
function students() {
    let rows=""
    var i=0
    while (i<=student_details.length-1) {
         
    
        rows=rows+ `<tr> 
        <td>${student_details[i].rollno}</td>
        <td>${student_details[i].name}</td>
        <td>${student_details[i].marks}</td>
        </tr>`

        i++;
    }
    document.getElementById('table_data').innerHTML=rows
}


