var onionPrice = 43;
var eggPrice = 42;
var eggQuantity = 5;
var totalOrangePrice = 520;
var orangeQuantity = 7;

var total = onionPrice + eggPrice;
var difference = total - eggPrice;
var totalEggPrice = eggQuantity * eggPrice;
var perOrangePrice = totalOrangePrice / orangeQuantity;



console.log(onionPrice);
console.log(eggPrice);
console.log(total);
console.log(difference);
console.log(totalEggPrice);
console.log(perOrangePrice);
//special Edition
var firstNum = 0.1
var secNum = 0.2;
var sum = firstNum + secNum;
//.tofixed(range) define that decimal point control
sum = sum.toFixed(1)
sum = parseFloat(sum);

console.log(sum);
//modulus
var mangoes = 777;
var hunger = 48;
var reminder = mangoes % hunger;
var dividing = mangoes / hunger;
console.log(reminder);
console.log(dividing);
