const reverseString=(str)=>{
    var strToArray=str.split("")
    var arrReverse=strToArray.reverse()
    var strReverse=arrReverse.join("")
    return strReverse
}
console.log(reverseString("hello"));