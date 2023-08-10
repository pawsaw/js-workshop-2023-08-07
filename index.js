import { job, checkNumber, checkNumber2 } from './job.js';

job()
    .then((theNumber) => {
        console.log(theNumber);
        return theNumber;
    })
    .then((theNumber) => {
        return checkNumber2(theNumber);
    }).then((result) => {
        console.log('success', result);
    }).catch(error => {
        console.error('error', error);
    });