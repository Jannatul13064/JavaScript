// function buyFood(taka){//tale is a parameter
//     console.log('Ice Cream den',taka);
//     console.log('Ice Cream den');
// }
// buyFood(250);//--> () You can set the value of parameter-->here taka = 250 hoye jabe.

function buyFood(taka) {//taka is a parameter but in that case it is an aurgument.
    console.log('Ice Cream er jonno ase', taka);
    console.log('Ice Cream den');
    var iceCreamPrice = 10;
    var iceQuantity = taka / iceCreamPrice;
    return iceQuantity;//here it will return TO iceCream
}
var money = 450;
var iceCream = buyFood(money);//Function will start when it is called
console.log('Ai nen Ice-Cream', iceCream);
