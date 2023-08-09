const person = {
    id: '1',
    first: 'Max',
    last: 'Mustermann',
    address: {
        city: 'Berlin',
        country: 'Germany'
    }
};


function createPerson(id, first, last, city, country) { // action creator
    return {
        type: 'createPerson',
        payload: {
            id,
            first,
            last,
            address: {
                city,
                country
            }
        }
    }
}

function deletePerson(id) {
    return {
        type: 'deletePerson',
        payload: {
            id
        }
    }
}

function reducer(state, action) { // nachfolgezustand
    switch (action.type) {
        case 'createPerson':
            return {
                persons: [
                    ...state.persons,
                    { // person
                        ...action.payload,
                    }
                ]
            };
        case 'deletePerson':
            return {
                persons: [
                    ...state.persons.filter(person => person.id !== action.payload.id)
                ]
            };
        default:
            return state;

    }
}

// server
let serverState = {
    persons: [],
};

const queue = [
    createPerson(new Date().getTime(), 'Pawel', 'Sawicki', 'Berlin', 'DE'),
    createPerson(new Date().getTime(), 'Max', 'Mustermann', 'Berlin', 'DE')];

serverState = queue.reduce((acc, action) => {
    return reducer(acc, action);
}, serverState);

console.log(serverState);

// client 2


let clientState = {
    persons: [],
};


clientState = queue.reduce((acc, action) => {
    return reducer(acc, action);
}, clientState);

console.log(clientState);

