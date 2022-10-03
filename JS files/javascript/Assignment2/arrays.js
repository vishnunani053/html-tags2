/*1 how to create arrays in javaScript

let bikes=["ns200","rc200","bullet","mt"]




//2 how to acess items from arrays in javaScript

let emp=["rahul","priyanka","sonia","modi"]

console.log(emp[0]);
console.log(emp[1]);
console.log(emp[2]);
console.log(emp[3]); 



//3 how to acess the last item from an array of javaScript

let emp=["rahul","sonia","priyanka","modi"]
console.log(emp.length-1,emp[3]);



//4 how to acess the all items from the array using For loop in javaScript

let emp=["rahul","sonia","priyanka","modi"]
for(i=0;i<=emp.length-1;i++){
    console.log(emp[i])
}



// Array Of objects
//5 how to create array of objects in javaScript

let emp=[{id:101,name:"rahul",salary:45000}]



//6 how to acess array of objects item in javaScript

let emp=[{id:101,name:"rahulgandi",salary:45000}]
for(keys of emp){
    console.log(keys.id);
    console.log(keys.name);
    console.log(keys.salary);
}

*/

//7 how to create 2d array in javaScript



// Create one dimensional array
	var a = new Array(2);

document.write("Creating 2D array <br>");

// Loop to create 2D array using 1D array
for (var i = 0; i < a.length; i++) {
	a[i] = new Array(2);
}

var h = 0;

// Loop to initialize 2D array elements.
for (var i = 0; i < 2; i++) {
	for (var j = 0; j < 2; j++) {
		a[i][j] = h++;
	}
}

// Loop to display the elements of 2D array.
for (var i = 0; i < 2; i++) {
	for (var j = 0; j < 2; j++) {
		document.write(a[i][j] + " ");
	}
	document.write("<br>");
}
				


