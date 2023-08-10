import 'isomorphic-unfetch';

export const fetchApiExample = () => {
    const personsPromise = fetch('http://localhost:3000/persons')
        .then(response => response.json());


    const addressesPromise = fetch('http://localhost:3000/addresses')
        .then(response => response.json())

    Promise.all([personsPromise, addressesPromise]).then(([persons, addresses]) => {
        const personsWithAddress = persons.map(person => {
            const address = addresses.find(address => address.id === person.addressId);
            return {
                ...person,
                address
            };
        });
        return personsWithAddress;
    }).then(console.log);
};

