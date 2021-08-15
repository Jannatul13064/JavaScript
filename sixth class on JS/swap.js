// If you have two bottole with full of Orange juice and Mango Juice but want to swap their elements then thirdd bottle will be called to help them -->called temporary

var first = 40;
var second = 50;
console.log(first, second);
// first Approach

// var temp = first;
// first = second;
// second = temp;
// console.log(first, second);

//destructuring
[first, second] = [second, first]
console.log(first, second);
