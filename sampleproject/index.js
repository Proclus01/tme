module.exports = {
    forEach(array, fn) {
        for (let element of array) {
            fn(element);
        }
    }
};