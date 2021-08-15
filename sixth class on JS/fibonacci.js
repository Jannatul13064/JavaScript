//ধারা
// [0,1,1,2,3,5,8,13,21,34,55] we need to initialize [2] cause we need at least [0] & [1]
/*
Third = 2nd + 1st
4th = 3rd + 2nd
nth = (n-1) + (n-2)
*/

// let fibo = [0, 1];
// for (let i = 2; i <= 10; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);
/*
-->  [
   0, 1,  1,  2,  3,
   5, 8, 13, 21, 34,
  55
]
 */

// function fibonacciSeries(num) {
//     let fibo = [0, 1];
//     for (let i = 2; i <= num; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];

//     }
//     return fibo;
// }
// var series = fibonacciSeries([200]);
// console.log(series);



///Error Handeling 20-7 Handle Unexpected input using return

function fibonacciSeries(num) {
    if (typeof num != 'number') {
        return 'Please give me a Number';
    }
    if (num < 2) {
        return 'Please Enter a positiove Number Greater Than 1'
    }
    let fibo = [0, 1];
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];

    }
    return fibo;
}
var series = fibonacciSeries(5);
console.log(series);