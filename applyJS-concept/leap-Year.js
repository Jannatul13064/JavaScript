
//A year is a leap year if the following conditions are satisfied:
// The year is a multiple of 400.
// The year is a multiple of 4 and not a multiple of 100.

function isLeapYear(year) {
    if ((year % 400 == 0) || (year % 100 !== 0) && (year % 4 == 0)) {
        return true;
    }
    else {
        return false;
    }
}
const myYear = 2000;
const isMyYearLeap = isLeapYear(myYear);
console.log('My Year is Leap Year', isMyYearLeap);