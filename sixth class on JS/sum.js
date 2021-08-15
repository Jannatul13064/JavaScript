function myNumber(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        sum = sum + element;
    }
    return sum;
}
var total = myNumber([10, 20, 30]);
console.log('Array Total', total);