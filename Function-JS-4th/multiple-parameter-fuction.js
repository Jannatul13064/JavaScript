//////
/////return value --> funtion er variable er kachey jai.blv na hole debug koro

////
///
//Add Two Number

function addTwoNum(num1, num2) {
    console.log(num1, num2);
    var total = num1 + num2;
    return total;//it will return to result

}
var firstNumber = 35;
var secondNumber = 45;
var result = addTwoNum(firstNumber, secondNumber);
console.log('Sum of two no ', result);
/////
////
///
//Multiplication
function multiplyTwoNo(number1, number2) {
    console.log(number1, number2);
    var multiply = number1 * number2;
    return multiply;//return value --> funtion er variable er kachey jai.In here return-->multiplyTwo
}
var multiplyTwo = multiplyTwoNo(50, 54);
console.log('After Multiplication ', multiplyTwo);
////
///
//

//Difference
function differenceTwoNO(n1, n2) {
    console.log(n1, n2);
    var difference = n1 - n2;
    return difference;
}
var substract = differenceTwoNO(45, 20);
console.log('Difference between Two No ', substract);

/////
///
//
//Divided
function dividedTwoNo(p1, p2) {
    console.log(p1, p2);
    var divide = p1 / p2;
    return divide;
}
var done = dividedTwoNo(800, 10);
console.log('Succesfully divided Result', done);
