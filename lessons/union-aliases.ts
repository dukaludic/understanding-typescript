type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(input1: Combinable, input2: number | string, resultConversion: ConversionDescriptor) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combineAges = combine(30, 25, 'as-number');


const combineName = combine('Max', 'Anna', 'as-text')

console.log(combineAges, combineName)