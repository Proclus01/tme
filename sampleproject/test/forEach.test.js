const assert = require('assert');
const { forEach } = require('../index');

let numbers;
// to run before every 'it' statement
// re-initializes numbers array before every statement
beforeEach(
    () => {
        numbers = [1, 2, 3];
    }
);

it('should sum an array', () => {

    let total = 0;

    forEach(numbers, (value) => {
        total += value;
    });
    
    assert.strictEqual(total, 6);

    // add code to break the numbers array to test if the numbers array is reset
    numbers.push(3);
    numbers.push(3);
    numbers.push(3);
    numbers.push(3);
    numbers.push(3);

});

it('beforeEach is ran each time', () => {
    assert.strictEqual(numbers.length, 3);

    
});