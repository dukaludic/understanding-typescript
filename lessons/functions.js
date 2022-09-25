"use strict";
function addNumbers(n1, n2) {
    return n1 + n2;
}
;
function printResults(num) {
    console.log(`Result: ${num}`);
    return;
}
;
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(5, 6, (result) => {
    console.log(result, 'Result');
});
printResults(addNumbers(2, 52));
let someValue;
let combineValues;
combineValues = addNumbers;
// combineValues = printResults;
console.log(combineValues(8, 8));
