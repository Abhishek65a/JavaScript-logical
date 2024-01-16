// const arrNumber=[1,8,999,655,23]
// const maxFunction=(arr)=>{
//     return arr.reduce(function(pre,cur){
//         return pre>cur?pre:cur
//     })
// }

// console.log(maxFunction(arrNumber));


// ---------------------------------------------------

const arrNumber=[1,8,999,655,23]
const minFunction=(arr)=>{
    return arr.reduce(function(pre,cur){
        return pre<cur?pre:cur
    })
}

console.log(minFunction(arrNumber));