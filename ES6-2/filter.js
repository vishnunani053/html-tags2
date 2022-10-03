
// let numbers=[10,20,30,40,50,60]
// numbers.map((ele)=>{
//     console.log(ele);
// })



// let numbers=[0,1,2,3,4,5,6,7,8,9,10]
// numbers.filter((numbers)=>{
//     if (numbers%2==0){
//     console.log(numbers);}
// })




// let numbers=[0,1,2,3,4,5,6,7,8,9,10,11,12]
// numbers.filter((numbers)=>{
//     if(numbers%2==1){
// console.log(numbers);
//     }
// })




// let emp=[{id:101,name:"rahul",salary:45000},
//     {id:102,name:"sonia",salary:45000},
//     {id:103,name:"priyanka",salary:50000},
//     {id:104,name:"modi",salary:50000}]

//     emp.filter((emp)=>{
// if(emp.salary=="50000"){
// console.log(emp);
// }
//     })



// let emp=[{id:101,name:"rahul",salary:45000},
//     {id:102,name:"sonia",salary:45000},
//      {id:102,name:"priyanka",salary:50000},
//      {id:104,name:"modi",salary:50000}]
      
//      emp.filter((emp)=>{
//         if(emp.id==102){
//             console.log(emp);
//         }
//      })



let  cars = [{ car_Name: "Maruthi Swift", price: 800000, color: "red" },
{ car_Name: "Maruthi Swift", brand: "Suzuki", price: 800000, color: "White" },
{ car_Name: "x1", brand: "BMW", price: 4000000, color: "black" },
{ car_Name: "Nexon", brand: "Tata", price: 1500000, color: "White" },
{ car_Name: "scroprio", brand: "Mahindra", price: 1800000, color: "black" },
{ car_Name: "Maruthi Swift", brand: "Suzuki", price: 800000, color: "red" },
{ car_Name: "No Name", brand: "Ferrai", price: 20000000, color: "pink" }]

//  cars.filter((cars)=>{
//      if(cars.color=="White"){
//  console.log(cars);
//      }
//  })


//      for(car of cars) {
//          if(car.brand=="Suzuki"){
//  console.log(car);
//          }
//      }

 let new_cars=cars.filter((car)=>{
     if(car.color=="black"){
        return car
     }
 })
 console.log(new_cars);