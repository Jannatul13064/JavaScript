function celciumToFarhenhite(num) {
    let converter = (num * 1.8) + 32;
    return converter;

}
var temparature = celciumToFarhenhite(1);
console.log('This is Celcius to Farhenhite', temparature);