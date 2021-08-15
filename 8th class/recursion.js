// let sum = 0;
// for (i = 0; i <= 6; i++) {
//     sum = sum + i;
// }
// console.log(sum);


//In in reverse way
// let sum = 0;
// for (let i = 6; i >= 1; i--) {
//     sum = sum + i;
// }
// console.log(sum);

// In recursion 
function sum(n) {
    if (n == 1) {
        return 1;
    }
    return sum(n - 1) + n;
}
console.log(sum(6));