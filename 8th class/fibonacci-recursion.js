// let fibo = [0, 1];
// for (let i = 2; i <= 6; i++) {
//     // fibo[2] = fibo[0]+ fibo[1];
//     // fibo[3] = fibo[2]+fibo[1];
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);//0,1,1,2,3,5,8,

//In recursion
function fibo(i) {
    if (i == 0) {
        return 0;
    }
    if (i == 1) {
        return 1;
    }
    return fibo(i - 1) + fibo(i - 2);
}
let fibonacci = fibo(6);//--> 6 no index value is 8
console.log(fibonacci);