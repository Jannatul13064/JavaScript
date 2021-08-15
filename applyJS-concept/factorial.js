// 3! = 1 x 2 x 3
// 4! = 1 x 2 x 3 x 4
var factorial = 1;
for (var i = 1; i <= 7; i++) {
    console.log(i);
    factorial = factorial * i;

}
console.log('factorial of 7 is ', factorial);