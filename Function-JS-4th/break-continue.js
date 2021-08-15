// var i = 0;
// while (i < 10) {
//     console.log(i);
//     if (i == 5) {
//         break;//it will break in 5
//     }
//     i++
// }


// for (var i = 0; i < 10; i++) {
//     console.log(i);
//     if (i > 8) {
//         break;
//     }
// }

var number = [54, 65, 87, 88, 12, 175, 445];
// for (var i = 0; i < number.length; i++) {
//     var numbers = number[i];
//     if (numbers > 100) {
//         break;
//     }
//     console.log(numbers);
// }


for (var i = 0; i < number.length; i++) {
    var numbers = number[i];
    if (numbers > 90) {
        continue;//it will go back to the update counter not execute console.log(numbers);
    }
    console.log(numbers);
    //-->54 65 87 88 12
}
