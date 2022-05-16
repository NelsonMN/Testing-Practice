export default function reverseString(str) {
    if (str.length <= 1) {
        return str
    } else {
        return str.split('').reverse().join('')
    }
}
