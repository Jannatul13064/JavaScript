// const num = 4;
// const reminder = num % 2;
// if (reminder == 0) {
//     console.log('This is an even number');
// }
// else {
//     console.log('This is an odd number');
// }

const number = 145;
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;

}
const myNumber = 1646;
const isEvenNum = isEven(myNumber);
console.log('Is this number Even', isEvenNum);//Output--> false