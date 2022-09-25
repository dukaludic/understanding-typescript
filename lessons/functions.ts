

function addNumbers(n1: number, n2: number): number {
    return n1 + n2;
};

function printResults(num: number): void {
    console.log(`Result: ${num}`)
    return;
};

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(5, 6, (result) => {
    console.log(result, 'Result')
})

printResults(addNumbers(2, 52))

let someValue: undefined;

let combineValues: (param1: number, param2: number) => number;

combineValues = addNumbers;
// combineValues = printResults;

console.log(combineValues(8, 8))


