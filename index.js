function capitalize(str) {
    if (str.length > 0) {
        return `${str[0].toUpperCase() + str.slice(1,)}`
    } else 
        return ''
    }


function reverseString(str) {
    if (str.length <= 1) {
        return str
    } else {
        return str.split('').reverse().join('')
    }
}

const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;

    return {
        add,
        sub,
        mul,
        div,
    }
})();

export { capitalize, reverseString, calculator }