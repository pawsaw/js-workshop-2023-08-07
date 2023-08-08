// person 1: 'Max', 'Mustermann', addressId: 1
// person 2: 'Mina', 'Musterfrau', addressId: 2

// address 1: 'Berlin', 'Deutschland'
// address 2: 'München', 'Deutschland'



const persons = [
    {
        first: 'Max',
        last: 'Mustermann',
        addressId: '0'
    },
    {
        first: 'Mina',
        last: 'Musterfrau',
        addressId: '1'
    }
];


const addresses = {
    '0': {
        city: 'Berlin',
        country: 'Germany'
    },
    '1': {
        city: 'München',
        country: 'Germany'
    }
};

// n is the #persons and m is the #addresses, then O(n * 1) => O(n)
const personsWithAddresses = persons.map(person => ({
    first: person.first,
    last: person.last,
    address: addresses[person.addressId],
}));

// const persons = [
//     {
//         first: 'Max',
//         last: 'Musterfrau',
//         address: {
//             city: 'Berlin',
//             country: 'Germany'
//         },
//     },
//     {
//         first: 'Mina',
//         last: 'Musterfrau',
//         address: {
//             city: 'Berlin',
//             country: 'Germany'
//         }
//     }
// ];

