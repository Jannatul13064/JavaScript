// factorial formula
// n! = n*(n-1)!
//Fuction er vetora function ke call korley sei function ke Recursion

function recursion(n) {
    if (n == 1) { /* Stopping Condition*/
        return 1;
    }
    return n * recursion(n - 1);//Here ,This function is called inside the function.So,we can say that this is a recursion function

}
const myNewFactorial = recursion(5);
console.log(myNewFactorial);