"use strict";
function add(n1, n2, printResult) {
    if (printResult) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
const num1 = 5;
const num2 = 2.8;
const printResult = true;
const result = add(num1, num2, printResult);
console.log(result);
