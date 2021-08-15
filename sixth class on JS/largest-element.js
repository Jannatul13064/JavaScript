function largestElement(number) {
    let largest = 0;
    for (let i = 0; i < number.length; i++) {
        let element = number[0]; //We set Initial value instead of 0 for find the largest element though pos and neg range, we use  first element of arr.
        if (element > largest) {
            largest = element;     ///////Largest value in the array
        }
    }
    return largest;
}
const largest = largestElement([12, 54, 2, 34, 458, 4, 99]);
console.log('The largest Value in this array is', largest);

//Task : Find the lowest value from an arr