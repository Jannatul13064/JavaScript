
var bottoleColor = 'yellow';
var quantity = 1;
var isFull = false;

//array
var items = ['bottle', 'mug', 'balti'];
items.indexOf('logens');
items.push('Ruti Maker');
items.push('Jug');
items.push('Pani');

// items.pop();
console.log(items);
//Conditionals
if (items.length >= 4) {
    console.log('You have too many stuffs on your desk');

}
else if (items.length !== 4) {
    console.log('Both condition filled up');

}
else {
    console.log("Tmi pocha");
}
