//It will reverse a string .Here We have a function and inside the funtion we have a empty string which help us to store data initially.

const greetings = 'Hello World.';
function reverseString(text) {
    let reverse = '';
    for (let letter of text) {
        reverse = letter + reverse;
    }
    return reverse;

}
const reversed = reverseString(greetings);
console.log(reversed);