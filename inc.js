let _value = 0;

export function inc() {
    _value = _value + 1;
}

export function dec() {
    _value = _value - 1;
}

export function value() {
    return _value;
}