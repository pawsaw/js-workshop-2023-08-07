const data = [2, 4, 6];

const double = (n) => 2 * n;
const square = (n) => n * n;

const sum = (arr) => arr.reduce((acc, e) => {
    return acc + n;
}, 0);

const ops = [];

// ops dynamicly composed

ops.push(double);
ops.push(square);
ops.push(double);

function pipe(data, ...ops) { // comma seperated list (a, b, c) to array [a, b, c], rest operator
    const result = [];
    for (let n of data) {
        let nResult = n;
        for (let op of ops) {
            nResult = op(nResult)
        }
        result.push(nResult);
    }
    return result;
}

const dynamicResultBasedOnOpsConfigurationStatic = pipe(data,
    double,
    square,
    double
);

const dynamicResultBasedOnOpsConfigurationDynamic = pipe(data, ...ops); // array [a, b, c] to comma seperated list (a, b, c), spread operator


// data.map(n => ops.reduce((acc, op) => {
//     return op(acc)
// }, n));