const module = (() => {
    const average = (array) => {
        if (array.length !== 0) {
            let total = array.reduce((prev, curr) => prev + curr)
            return total / array.length
        } return 0
    }

    const min = (array) => {
        if (array.length !== 0) {
            return array.sort((a, b) => a - b)[0]
        } return 0
    }

    const max = (array) => {
        if (array.length !== 0) {
            return array.sort((a, b) => a - b)[array.length - 1]
        } return 0
    }

    const object = (array) => {

        return {
            average: average(array),
            min: min(array),
            max: max(array),
            length: array.length
        }
    }

    return {object}

})();

export default module