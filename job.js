export function job() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNumber = (Math.floor(Math.random() * 10 + 1));
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
                resolve('odd');
            }, 1000);
        } else {
            setTimeout(() => {
                reject('even');
            }, 2000);
        }
    });
}

export function checkNumber2(theNumber) {
    return new Promise((resolve, reject) => {
        if (typeof theNumber !== 'number') {
            reject('error');
        } else {
            setTimeout(() => {
                if (theNumber > 5) {
                    reject('Number greater than 5');
                }
                resolve(theNumber);
            }, 2000);
        }
    });
}