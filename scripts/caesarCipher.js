const module = (() => {
    const isUpperCase = char => char === char.toUpperCase()

    const isAlpha = char => char.match(/^[A-Za-z]+$/)

    const caesarCypher = (input, num) => {
        let result

        for (let char of input) {
            if (isAlpha(char)) {
                // stuff
            } else {
                result += char
            }
        }

        return result
    }

    return {
        
    }
})();