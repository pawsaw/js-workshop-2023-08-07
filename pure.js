
// let lastId = 0;

// function createId() { // pure function?
//     const newId = lastId + 1;
//     lastId = newId;
//     return newId;
// }


let _lastId = 0;

function createId(lastId) {
    const newId = lastId + 1;
    return newId;
}

console.log(createId(_lastId++));
console.log(createId(_lastId++));
console.log(createId(_lastId++));

/**
 * array.op1(func1).op2(func2).op3(func3)
 */

// Pure function (PF):
// 1. Bei gleicher Eingabe, auch wenn um mich drumherum die Hölle aufgeht, gibt stets das gleiche Ergebnis
// 2. Eine solche PF, hat keine Seiteneffekte