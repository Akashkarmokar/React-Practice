export function toCelsius(Farenheit) {
    return ((Farenheit - 32) * 5) / 9;
}

export function toFarenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

export function convert(temperature, convertToFun) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convertToFun(input);
    const rounded = Math.round(output * 100) / 100;
    return rounded;
}
