const module = (() => {
    const isAlpha = char => char.match(/^[A-Za-z]+$/)

    const isUpperCase = char => char === char.toUpperCase()

    const caesarCipher = (input, num) => {
        let result = ''

        for (let char of input) {
            if (isAlpha(char)) {
                const asciiCode = char.toLowerCase().charCodeAt(0)
                const shift = ((asciiCode - 97 + num) % 26) + 97
                const newLetter = String.fromCharCode(shift)

                if (isUpperCase(char)) {
                    result += newLetter.toUpperCase()
                } else {
                    result += newLetter
                }

            } else {
                result += char
            }
        }

        return result
    }

    return {
        caesarCipher
    }
})();

export default module