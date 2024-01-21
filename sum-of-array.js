
// sum-of-array

const array=[1,5,8,9,6,7]
const sumOfArray=(arr)=>{
    return arr.reduce((pre,cur)=>{
        return pre+cur
    })
}
console.log(sumOfArray(array));