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

export { capitalize, reverseString}