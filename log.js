function createLogger(severity) { // outer function with hidden variable -> closure
    return function (msg) { // inner function
        console.log('[' + severity + ']', msg);
    };
}

const infoLog = createLogger('info');
const warnLog = createLogger('warn');

infoLog('Hallo Workshop');
warnLog('Macht es bitte richtig');