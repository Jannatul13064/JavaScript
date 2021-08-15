var bookPage = ['hablu', 'gablu', 'mallu', 'battery', 'lighter', 'paracitamol'];
var batteryIndex = bookPage.indexOf('battery');
console.log(batteryIndex);

//indexing-that means array element position
var numbers = [15, 4, 3, 47, 55];
var index = numbers.indexOf(55);
console.log(index);//Output--> 4
var index1 = numbers.indexOf(50);
console.log(index1);//Output --> -1

// If indexing number not found in its elements then it shows -1.ThaT MEANS no existing value return -1


var secIndex = bookPage[4];
console.log(secIndex);
//Override array elements
bookPage[2] = 'Tuntuni';
console.log(bookPage);
//[ 'hablu', 'gablu', '**Tuntuni**', 'battery', 'lighter', 'paracitamol' ] --> Output
