const cart = [
    { name: 'Samsung-A30', price: 8000, quantity: 3 },
    { name: 'LG-45G', price: 17000, quantity: 1 },
    { name: 'Laptop', price: 80000, quantity: 1 },
    { name: 'T-shirt', price: 200, quantity: 5 },
    { name: 'charger', price: 80, quantity: 1 },
];
let cartTotal = 0;
for (let product of cart) {
    console.log(product);
    let quantityPrice = product.price * product.quantity;
    cartTotal = cartTotal + quantityPrice;
}
console.log('Total Cost of Products : ', cartTotal);
