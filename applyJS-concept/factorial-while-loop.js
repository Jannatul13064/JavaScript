// function factorial(num) {
//     let fact = 1;
//     let i = 1;
//     while (i <= num) {
//         fact = fact * i;
//         i++;
//     }
//     return fact;

// }
// var firstFactorial = factorial(5);
// console.log('This is first Factorial', firstFactorial);

// var secondFactorial = factorial(9);
// console.log('This is Second Factorial', secondFactorial);

// var thirdFactorial = factorial(4);
// console.log('This is Third Factorial', thirdFactorial);



// function getFactorial(number) {
//     let fact = 1;
//     let i = 1;
//     while (i <= number) {
//         fact = fact * i;
//         i++;

//     }
//     return fact;
// }
// var setFactorial = getFactorial(5);
// console.log('This is my first factorial', setFactorial); --> This is my first factorial 120

//Factorial reverse loop
function factorial(num) {
    let factorial = 1;
    let i = num;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;

}
let myFactorial = factorial(5);
console.log('This is factorial num', myFactorial); //-->This is my first factorial 120