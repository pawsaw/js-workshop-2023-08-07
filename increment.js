function createIncrement() { // outer
    let start = 1 // enclosed variable
    return function inc() { // inner
        const result = start;
        start = start + 1;
        return result;
    }
}

const incStartingWithOne = createIncrement();


// console.log(incStartingWithOne());
// console.log(incStartingWithOne());
// console.log(incStartingWithOne());
// console.log(incStartingWithOne());

function createCounter2() { // outer function

    let _count = 0; // inner variable (hidden variable) -> closure scope

    const inc = () => { // inner function
        _count = _count + 1;
    }

    const dec = () => { // inner function
        _count = _count - 1;
    }

    return {
        inc,
        dec,
        count: () => { // inner function
            return _count;
        }
    };
}

const { count, inc } = createCounter2();

console.log('Current count', count());
inc();
console.log('Current count', count());
inc();
console.log('Current count', count());