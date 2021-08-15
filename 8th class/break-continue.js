const products = [
    { name: 'Laptop Asus ZenBook', price: 120000 },
    { name: 'Mobile Xiaomi', price: 15550 },
    { name: 'Router Mx pro', price: 2000 },
    { name: 'belt-Shetol', price: 120 },
    { name: 'belt', price: 120 },
    { name: 'Mobile Samsung S5', price: 120 },
];
// for (const product of products) {
//     if (product.price < 10000) {
//         break;
//     }
//     console.log(product);
// }
for (const product of products) {
    if (product.price < 10000) {
        continue;
    }
    console.log(product);
}