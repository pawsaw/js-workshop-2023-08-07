export function job() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNumber = (new Date().getTime() % 10) + 1;
            resolve(randomNumber);
        }, 2000);
    });
}

export function checkNumber(theNumber) {
    return new Promise((resolve, reject) => {
        if (typeof theNumber !== 'number') {
            reject('error');
        } else if (theNumber % 2 === 1) {
            setTimeout(() => {
                resolve('odd')
            }, 1000);
        } else {
            setTimeout(() => {
                resolve('even')
            }, 2000);
        }
    });
}