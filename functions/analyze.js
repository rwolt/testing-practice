export default function analyze(array) {
    return {
        average: getAverage(array),
        min: getMin(array),
        max: getMax(array),
        length: getLength(array)
    }
}

function getLength(array) {
    return array.length;
}

function getAverage(array) {
    let sum = array.reduce((prev, next) => prev + next, 0);
    return (sum / array.length);
}

function getMin(array) {
        let sorted = array.sort((a, b) => a < b ? -1 : 1);
        return sorted[1]; //First index of array sorted smallest to largest
    }


function getMax(array) {
    let sorted = array.sort((a, b) => a < b ? -1 : 1);
    return sorted[array.length - 1]; //Last index of array sorted smallest to largest
}
