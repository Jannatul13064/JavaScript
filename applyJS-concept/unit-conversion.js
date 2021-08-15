
//Feet converter
function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;

}
//mile to kilometer
function mileKiloMeter(miles) {
    var km = miles * 1.60934;
    return km;

}
var inputMile = mileKiloMeter(25.50);
console.log('Converted to mile to Kilo-meter', inputMile);



var myInches = 144;
var feet = inchToFeet(myInches);
console.log('My height ', feet);