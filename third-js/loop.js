// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }
//The value of a constant can't be changed through reassignment, and it can't be redeclared.
// const number = 42;
// try {
//     number = 99;
// } catch (err) {
//     console.log(err);
//     // expected output: TypeError: invalid assignment to const `number'
//     // Note - error messages will vary depending on browser
// }

// console.log(number);
// // expected output: 42

var roastGiven = 0;
while (roastGiven < 7) {
    console.log('Roast den Please');
    roastGiven++;
    console.log(roastGiven);
}