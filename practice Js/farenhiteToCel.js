function farenhiteToCel(number) {
    let converter = (number - 32) / 1.8;
    return converter;

}
let degreeConverter = farenhiteToCel(50);
console.log('This will convert far to cel', degreeConverter);