// let state={
//     product:{
//  p_name:"i phone",
//  color:{
//     code1:"red"
//  }
//     },
//     name:[]
// }
// console.log(state.product.color.code1);
// let {product}=state
// let {color}=product
// let {code1}=color
// console.log(code1);

let state={
    product:{
        p_name:"apple",
        color:{
            code1:"red"
        }

    }
}
console.log(state.product.color.code1);
let {product}=state
let {color}=product
let{code1}=color
console.log(code1);