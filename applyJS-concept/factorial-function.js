// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);


// function factorial(number) {
//     let fact = 1;
//     for (let i = 1; i <= number; i++) {
//         fact = fact * i;
//     }
//     return fact;

// }

// var firstFactorial = factorial(8);
// console.log('Number factorial is ', firstFactorial);

function factorial(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;

}
var firstFactorial = factorial(7);
console.log('This is factorial of the number ', firstFactorial);

var secondFactorial = factorial(8);
console.log('This is second Factorial', secondFactorial);

var thirdFactorial = factorial(9);
console.log('This is third factorial', thirdFactorial);