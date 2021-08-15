var computer = {
    color: 'red',
    processor: 'Core i5',
    storage: 45,
    price: 45000,

}
console.log(computer);
var computerPrice = computer.price;
//Set a object property value
computer.price = 22000;
var setStorage = 'storage';
//3 different way to set property value 
computer['storage'] = '1TB'; //-->  storage: '1TB'
computer[setStorage] = '512GB';//--> storage: '512GB
computer.storage = '720GB'//--> storage: '720GB'

console.log(computer);
console.log('The price is', computerPrice);
console.log(computer.processor);