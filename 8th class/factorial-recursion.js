// 6!= 1*2*3*4*5*6
let fact = 1;
for (let i = 6; i > 1; i--) {
    fact = fact * i;
}
console.log(fact);

function multiplication(n) {
    if (n == 1) {
        return 1;
    }
    return multiplication(n - 1) * n;
}
const factorial = multiplication(6);//6 * 5 * 4 *(n-1) till the stopping condition given true means 1 == 1
console.log(factorial);