

const intArray=[2,8,4,7,9]
const largestValue=(arr)=>{
    firstLargestValue=Math.max(...arr)
    index=arr.indexOf(firstLargestValue)
    arr.splice(index,1)
    secondLargestValue=Math.max(...arr)
    index=arr.indexOf(secondLargestValue)
    arr.splice(index,1)
    thirdLargestValue=Math.max(...arr)
    return(thirdLargestValue)
}
console.log(largestValue(intArray));