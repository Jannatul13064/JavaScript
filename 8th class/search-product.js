//Searching product property


const products = [
    { name: 'Laptop Asus ZenBook', price: 120000 },
    { name: 'Mobile Xiaomi', price: 15550 },
    { name: 'Router Mx pro', price: 2000 },
    { name: 'belt-Shetol', price: 120 },
    { name: 'belt', price: 120 },
    { name: 'Mobile Samsung S5', price: 120 },
];

function searchproduct(products, searchstring) {
    const matched = [];
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchstring) != -1) {
            matched.push(name);
        };
    }
    return matched;
}
const matched = searchproduct(products, 'Mobile');
console.log(matched);
