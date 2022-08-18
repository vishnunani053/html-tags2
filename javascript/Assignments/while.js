//wap to print 1 to 10 numbers
/*
var i=1
while(i<=10){
    console.log(i);
   i= i+1;
} */





/*
//wap to print 10 to 1 numbers
var i=10;

while(i>=1){
    console.log(i);
    i=i-1;
}   
*/







//wap to print 1 to 10 even numbers
/*
 var i=2;
 while(i<=10){
    console.log(i);
    i=i+2;
 }*/






 // write a program first ten multiples of 4
 /* 
 var i=4;
 while(i<=40){
    console.log(i);
    i=i+4
 }*/






 //wap program for 6 table
/*
 var i=1;
 while(i<=10){
    console.log("6*", i, "=", 6*i);
    i=i+1
 }   */







 /*
 //wap for factors of 24
 var num=24;
 let i=1;
 console.log("factors of 24 are");
 while(i<=24){
   i=i+1;
   if(num%i==0){
      console.log(i)
   }
 }
*/








//wap to print reverse of digits if numbers
/*
let rev = 0;
let num = 123456;
let lastDigit;

while(num != 0){
	lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num/10);
}

console.log("Reverse number : "+rev);  
*/







//wap to read 5 numbers and print only even numbers
/*
var num=12345678;
let i=2;
while(i<=8){
   if(num%2==0);
   console.log(i)
   i=i+2
}
*/



// program to check an Armstrong number of three digits
/*
let sum = 0;
const number = prompt('Enter a three-digit positive integer: ');

// create a temporary variable
let temp = number;
while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}*/




/*
//wap for 1 to 10 even numbers

let i=0
while (i<=10) {
   console.log(i);
  i= i+2
} */




// 1 to 10 multiples of 4
/*
var i=4
while (i<=40) {
   console.log(i);
   i=i+4
   
}*/



// write a 4 table
 /*let i=1
 while (i<=10) {

   console.log("4*",i,"=",4*i);
i=i+1
 }*/



 //wap for factors of 30

 let num=30
 let i=1
 while (i<=num) {
   i=i+1 
   if(num%i==0)
   console.log(i);
 }



 

