// union_of_two_array
// this will delete the repeated numbers and display once

var arr1 = [1, 2, 6, 8, 17];
var arr2 = [4, 8, 6, 19, 12, 17];

var unionArr = [...arr1,...arr2] 

console.log([... new Set(unionArr)]);
