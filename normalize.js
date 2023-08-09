const persons = [
    {
        id: '1',
        first: 'Max',
        last: 'Mustermann',
    },
    {
        id: '2',
        first: 'Mina',
        last: 'Musterfrau',
    }
];

function normalize(data, idFieldName) {
    return data.reduce((acc, e) => {
        const newElement = {
            ...e
        };
        delete newElement[idFieldName];
        acc[e[idFieldName]] = newElement;

        return acc;
    }, {});
}

console.log(normalize(persons, 'id'));
console.log(persons);

// const personsNormalized = {
//     '1': {
//         first: 'Max',
//         last: 'Mustermann',
//     },
//     '2': {
//         first: 'Mina',
//         last: 'Musterfrau',
//     }
// };