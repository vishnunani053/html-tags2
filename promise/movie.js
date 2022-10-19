// let gotomovie=(success,failure)=>{
//     let amount=400;
//     if (amount<500){
// success("go to pg and sleep")
//     }else{
//         failure("go to movie")
//     }
// }
// gotomovie((msg)=>{
//     console.log(msg);
// },(err)=>{
// console.log(err)
// })


let gotomovie=(success,failure)=>{
    let amount=1000;
    if(amount<500){
success("go to movie and enjoy with popcorn")
    }else{
        failure("go to pg and sleep")
    }
}
gotomovie((msg)=>{
console.log(msg);
},(err)=>{
console.log(err);
})