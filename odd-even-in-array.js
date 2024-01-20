const arr=[1,2,5,4,3,6,77,121,12,36]

const even=arr.filter((item)=>{
    return item%2===0
})

const odd=arr.filter((item)=>{
    return item%2==!0
})

console.log("Even numbers are",even);
console.log("Odd numbers are",odd);