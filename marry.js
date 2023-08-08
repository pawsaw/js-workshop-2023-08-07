const max = {
    first: 'Max',
    last: 'Musterfrau',
    address: {
        city: 'Berlin',
        country: 'Germany'
    },
};
const mina = {
    first: 'Mina',
    last: 'Musterfrau',
    address: {
        city: 'Berlin',
        country: 'Germany'
    }
};

function marry(personOne, { last, address: { city, country } }) {
    // return {
    //     first: personOne.first,
    //     last: last,
    //     address: {
    //         country: country,
    //         city: city
    //     }
    // };

    return {
        ...personOne,
        last,
        address: {
            ...personOne.address,
            city,
            country
        }
    };
}

const marriedMax = marry(max, mina);

// if n is #nodes + leafes, than O(n)
// can this be done in O(1)?
function hasPersonChanged(prevPerson, currPerson) { // : boolean
    if (
        prevPerson !== currPerson) {
        // prevPerson.first !== currPerson.first ||
        // prevPerson.last !== currPerson.last ||
        // prevPerson.address !== currPerson.address ||
        // prevPerson.address.city !== currPerson.address.city ||
        // prevPerson.address.country !== currPerson.address.country) {
        return true;
    }
}

if (hasPersonChanged(max, marriedMax)) {
    // rerender
}